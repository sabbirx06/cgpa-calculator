require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const poolConfig = process.env.DATABASE_URL
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    }
  : {
      user: process.env.DB_USER || 'postgres',
      host: process.env.DB_HOST || 'localhost',
      database: process.env.DB_NAME || 'cgpa_calculator',
      password: process.env.DB_PASSWORD || 'password',
      port: process.env.DB_PORT || 5432,
    };

const pool = new Pool(poolConfig);

const pgSession = require('connect-pg-simple')(session);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Trust proxy if you are going to deploy to Render/Heroku/Railway
app.set('trust proxy', 1);

app.use(session({
  store: new pgSession({
    pool: pool,
    tableName: 'session'
  }),
  secret: process.env.SESSION_SECRET || 'secret123',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    secure: process.env.NODE_ENV === 'production', // true in production
    httpOnly: true
  }
}));

const requireAuth = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

app.get('/', (req, res) => {
  if (req.session.userId) {
    res.redirect('/app.html');
  } else {
    res.redirect('/login.html');
  }
});

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id',
      [email, hashedPassword]
    );
    req.session.userId = result.rows[0].id;
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Registration failed or email already exists.' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        req.session.userId = user.id;
        res.json({ success: true });
      } else {
        res.status(401).json({ success: false, error: 'Invalid password' });
      }
    } else {
      res.status(404).json({ success: false, error: 'User not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Login failed' });
  }
});

app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

app.get('/api/courses', requireAuth, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM user_courses WHERE user_id = $1 ORDER BY original_index ASC',
      [req.session.userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

app.post('/api/courses', requireAuth, async (req, res) => {
  const { courses } = req.body; 
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    
    // Acquire a row-level lock on the user to prevent concurrent save race conditions
    // which were causing duplicate courses to be inserted into the database.
    await client.query('SELECT id FROM users WHERE id = $1 FOR UPDATE', [req.session.userId]);
    
    await client.query('DELETE FROM user_courses WHERE user_id = $1', [req.session.userId]);
    
    for (let i = 0; i < courses.length; i++) {
      const c = courses[i];
      await client.query(
        `INSERT INTO user_courses 
         (user_id, section_id, original_index, course_name, credits, grade, repeat_course, non_credit, projected)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [
          req.session.userId, 
          c.sectionId, 
          i, // using i as original_index
          c.courseName, 
          parseInt(c.credits) || 3, 
          c.grade, 
          c.repeat, 
          c.nonCredit, 
          c.projected
        ]
      );
    }
    
    await client.query('COMMIT');
    res.json({ success: true });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ error: 'Failed to save courses' });
  } finally {
    client.release();
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
