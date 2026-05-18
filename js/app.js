const gradePoints = {
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
};

const degreeCreditGoal = 124;

const courseCatalog = [
  {
    code: "CSE 110",
    name: "Programming Language I",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 161",
    name: "Programming Language I Equivalent",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 162L",
    name: "Programming Language I Lab Equivalent",
    credits: 0,
    sectionId: "core-table-body",
  },
  {
    code: "EEE 103",
    name: "Programming Language I Equivalent",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "ECE 103",
    name: "Programming Language I Equivalent",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 111",
    name: "Programming Language II",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 220",
    name: "Data Structures",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 221",
    name: "Algorithms",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 230",
    name: "Discrete Mathematics",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 260",
    name: "Digital Logic Design",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "EEE 283",
    name: "Digital Logic Design Equivalent",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "ECE 283",
    name: "Digital Logic Design Equivalent",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "EEE 301",
    name: "Digital Logic Design Equivalent",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "EEE 302",
    name: "Digital Logic Design Equivalent",
    credits: 0,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 321",
    name: "Operating System",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 330",
    name: "Numerical Methods",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 331",
    name: "Automata and Computability",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 340",
    name: "Computer Architecture",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 370",
    name: "Database Systems",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 420",
    name: "Compiler Design",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 421",
    name: "Computer Networks",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 422",
    name: "Artificial Intelligence",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 423",
    name: "Computer Graphics",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 470",
    name: "Software Engineering",
    credits: 3,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 400",
    name: "Project & Thesis",
    credits: 4,
    sectionId: "core-table-body",
  },
  {
    code: "CSE 250",
    name: "Circuits and Electronics",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 251",
    name: "Electronic Devices and Circuits",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 310",
    name: "Object Oriented Programming",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 320",
    name: "Data Communication",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 341",
    name: "Microprocessor",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 342",
    name: "Computer Systems Engineering",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 350",
    name: "Digital Electronics and Pulse Techniques",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 360",
    name: "Computer Interface",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 390",
    name: "Technical Communication",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 391",
    name: "Programming for the Internet",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 392",
    name: "Signals and Systems",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 410",
    name: "Advance Programming In UNIX",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 419",
    name: "Programming Languages",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 424",
    name: "Pattern Recognition",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 425",
    name: "Neural Networks",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 426",
    name: "Basic Graph Theory",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 427",
    name: "Machine Learning",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 428",
    name: "Image Processing",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 429",
    name: "Basic Multimedia Theory",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 430",
    name: "Digital Signal Processing",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 431",
    name: "Natural Language Processing",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 432",
    name: "Speech Recognition and Synthesis",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 460",
    name: "VLSI Design",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 461",
    name: "Digital System Design",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 462",
    name: "Fault Tolerant Systems",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 471",
    name: "System Analysis and Design",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 472",
    name: "Human Computer Interface",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 473",
    name: "Decision Support System",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 474",
    name: "Simulation and Modeling",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 489",
    name: "Special Topics",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 490",
    name: "WAN Routing and Technologies / Special Topics",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "CSE 491",
    name: "Independent Study",
    credits: 3,
    sectionId: "elective-table-body",
  },
  {
    code: "ENG 091",
    name: "Foundation Course",
    credits: 0,
    sectionId: "fundamental-table-body",
  },
  {
    code: "ENG 101",
    name: "English Fundamentals",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "ENG 102",
    name: "English Composition I",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "ENG 103",
    name: "Advanced Writing Skills and Presentation",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "MAT 092",
    name: "Remedial Course in Mathematics",
    credits: 0,
    sectionId: "fundamental-table-body",
  },
  {
    code: "BIO 101",
    name: "Introduction to Biology",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "CHE 101",
    name: "Introduction to Chemistry",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "CSE 101",
    name: "Introduction to Computer Science",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "ENV 103",
    name: "Elements of Environmental Science",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "MAT 101",
    name: "Fundamentals of Mathematics",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "MAT 110",
    name: "MATH I: Differential Calculus and Co-ordinate Geometry",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "MAT 120",
    name: "MATH II: Integral Calculus and Differential Equations",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "MAT 215",
    name: "MATH III: Complex Variables and Laplace Transformations",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "MAT 216",
    name: "MATH IV: Linear Algebra and Fourier Analysis",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "PHY 101",
    name: "Introduction to Physics",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "PHY 111",
    name: "Principles of Physics I",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "PHY 112",
    name: "Principles of Physics II",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "STA 101",
    name: "Introduction to Statistics",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "STA 201",
    name: "Elements of Statistics and Probabilities",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "BNG 103",
    name: "Bangla Language and Literature",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "ENG 110",
    name: "English for Life",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "ENG 113",
    name: "Introduction to English Poetry",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "ENG 114",
    name: "Introduction to English Drama",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "ENG 115",
    name: "Introduction English Prose",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "ENG 333",
    name: "Globalization and the Media",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "HST 102",
    name: "The Modern World",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "HST 103",
    name: "History of Bangladesh",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "HST 104",
    name: "Global History Lab - A History of World since 1300",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "HUM 101",
    name: "World Civilization & Culture",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "HUM 102",
    name: "Introduction to Philosophy",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "HUM 103",
    name: "Ethics and Culture",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "HUM 207",
    name: "Narratives of Truth and Lies",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "HUM 210",
    name: "Streaming Media Cultures",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "HUM 301",
    name: "In the Archives",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "ANT 101",
    name: "Introduction to Anthropology",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "ANT 342",
    name: "Body and Society",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "ANT 351",
    name: "Gender & Development",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "BUS 102",
    name: "Business - Basics, Ethics and Environment",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "BUS 201",
    name: "Business and Human Communication",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "BUS 333",
    name: "Social Entrepreneurship Practicum",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "BUS 335",
    name: "Sustainable Development and Social Enterprise",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "DEV 104",
    name: "Foundations of International Development",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "DEV 101",
    name: "Bangladesh Studies",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "DEV 201",
    name: "Health, Culture and Development",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "ECO 101",
    name: "Introduction to Microeconomics",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "ECO 102",
    name: "Introduction to Macroeconomics",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "ECO 105",
    name: "Introduction to Economics",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "EMB 101",
    name: "Emergence of Bangladesh",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "POL 101",
    name: "Introduction to Political Science",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "POL 102",
    name: "Comparative Governance",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "POL 103",
    name: "International Relations and Global Politics",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "POL 201",
    name: "Introduction to Civic Engagement",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "POL 202",
    name: "Foundations in Public Policy",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "POL 203",
    name: "Political Theory",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "POL 210",
    name: "Youth and Global Movement",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "PSY 101",
    name: "Introduction to Psychology",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "PSY 102",
    name: "Understanding the Human Minds",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "SOC 101",
    name: "Introduction to Sociology",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "SOC 201 / ANT 202",
    name: "Social Inequality",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "BU 201",
    name: "Community Engagement and Action",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "CST 201",
    name: "Luxury and Oppression in a Globalized World (of Perfumes)",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "CST 204",
    name: "Communication for Social Change",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "CST 301",
    name: "For the Love of Food",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "CST 302",
    name: "The Pursuit of Wellbeing",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "CST 303",
    name: "Law for Life, Peace and Justice",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "CST 304",
    name: "Documentary Film: Theory and Practice",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "CST 305",
    name: "Borders and Beyond: Past and Future",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "CST 306",
    name: "Ethical Leadership",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "CST 307",
    name: "Art, Community and the Future",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "CST 308",
    name: "Social Dimensions of Faith and Development",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "CST 309",
    name: "Global Citizenship",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "CST 310",
    name: "Social Cohesion and Peace Building",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "CST 314",
    name: "Visual Storytelling: Understanding Society through Documentary Film",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "CST 333",
    name: "Personal Finance for Sustainable Economic Wellbeing",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
  {
    code: "BUS 334",
    name: "Social Intrapreneurship Practicum - Leading Change",
    credits: 3,
    sectionId: "fundamental-table-body",
  },
];

const coursePrerequisites = {
  "CSE 111": { hard: ["CSE 110"] },
  "CSE 220": { hard: ["CSE 111", "CSE 230"] },
  "CSE 221": { hard: ["CSE 220"] },
  "CSE 250": { soft: ["PHY 112"] },
  "CSE 251": { hard: ["CSE 250"] },
  "CSE 260": { hard: ["CSE 251"] },
  "CSE 310": { hard: ["CSE 370"] },
  "CSE 321": { hard: ["CSE 221"] },
  "CSE 330": { hard: ["MAT 216"] },
  "CSE 331": { hard: ["CSE 221"] },
  "CSE 340": { hard: ["CSE 260"] },
  "CSE 341": { hard: ["CSE 260"], soft: ["CSE 340", "CSE 321"] },
  "CSE 350": { hard: ["CSE 251"] },
  "CSE 360": { hard: ["CSE 341"] },
  "CSE 370": { hard: ["CSE 221"] },
  "CSE 391": { hard: ["CSE 370"] },
  "CSE 392": { hard: ["MAT 215"] },
  "CSE 410": { hard: ["CSE 321"] },
  "CSE 420": { hard: ["CSE 321", "CSE 331", "CSE 340"] },
  "CSE 421": { soft: ["CSE 320"] },
  "CSE 422": { hard: ["CSE 221"] },
  "CSE 423": { hard: ["MAT 216"] },
  "CSE 430": { hard: ["MAT 120"] },
  "CSE 460": { hard: ["CSE 260"] },
  "CSE 461": { hard: ["CSE 260"] },
  "CSE 470": { hard: ["CSE 370"] },
  "CSE 471": { hard: ["CSE 370"] },
  "CSE 489": { hard: ["CSE 370"] },
  "ENG 102": { hard: ["ENG 101"] },
  "ENG 103": { hard: ["ENG 102"] },
  "MAT 120": { hard: ["MAT 110"] },
  "MAT 215": { hard: ["MAT 216"] },
  "MAT 216": { hard: ["MAT 120"] },
  "PHY 112": { hard: ["PHY 111"] },
};

const streamDefinitions = [
  {
    id: "stream1-table-body",
    progressId: "stream1Progress",
    required: 2,
    codes: ["ENG 101", "ENG 102", "ENG 103"],
  },
  {
    id: "stream2-table-body",
    progressId: "stream2Progress",
    required: 2,
    codes: [
      "BIO 101",
      "CHE 101",
      "CSE 101",
      "ENV 103",
      "MAT 101",
      "MAT 110",
      "PHY 101",
      "PHY 111",
      "STA 101",
      "STA 201",
    ],
  },
  {
    id: "stream3-table-body",
    progressId: "stream3Progress",
    required: 3,
    codes: [
      "BNG 103",
      "ENG 110",
      "ENG 113",
      "ENG 114",
      "ENG 115",
      "ENG 333",
      "HST 102",
      "HST 103",
      "HST 104",
      "HUM 101",
      "HUM 102",
      "HUM 103",
      "HUM 207",
      "HUM 210",
      "HUM 301",
    ],
  },
  {
    id: "stream4-table-body",
    progressId: "stream4Progress",
    required: 2,
    codes: [
      "ANT 101",
      "ANT 202",
      "ANT 342",
      "ANT 351",
      "BUS 102",
      "BUS 201",
      "BUS 333",
      "BUS 334",
      "BUS 335",
      "DEV 101",
      "DEV 104",
      "DEV 201",
      "ECO 101",
      "ECO 102",
      "ECO 105",
      "EMB 101",
      "POL 101",
      "POL 102",
      "POL 103",
      "POL 201",
      "POL 202",
      "POL 203",
      "POL 210",
      "PSY 101",
      "PSY 102",
      "SOC 101",
      "SOC 201",
    ],
  },
  {
    id: "stream5-table-body",
    progressId: "stream5Progress",
    required: 1,
    codes: [
      "BU 201",
      "CST 201",
      "CST 204",
      "CST 301",
      "CST 302",
      "CST 303",
      "CST 304",
      "CST 305",
      "CST 306",
      "CST 307",
      "CST 308",
      "CST 309",
      "CST 310",
      "CST 314",
      "CST 333",
    ],
  },
];

const sectionIds = [
  "core-table-body",
  "elective-table-body",
  "fundamental-table-body",
  ...streamDefinitions.map((stream) => stream.id),
];

const defaultCourses = {
  "core-table-body": [
    {
      courseName: "CSE 110 Programming Language I",
      credits: 3,
      grade: "A-",
      repeat: false,
      nonCredit: false,
      projected: false,
    },
  ],
  "elective-table-body": [
    {
      courseName: "CSE 427 Machine Learning",
      credits: 3,
      grade: "B+",
      repeat: false,
      nonCredit: false,
      projected: true,
    },
  ],
  "fundamental-table-body": [
    {
      courseName: "",
      credits: 3,
      grade: "A",
      repeat: false,
      nonCredit: false,
      projected: false,
    },
  ],
  "stream1-table-body": [],
  "stream2-table-body": [],
  "stream3-table-body": [],
  "stream4-table-body": [],
  "stream5-table-body": [],
};

const storageKey = "cgpaCalculatorCourses";

const dom = {
  currentCgpa: document.getElementById("currentCgpa"),
  currentChange: document.getElementById("currentChange"),
  projectedCgpa: document.getElementById("projectedCgpa"),
  totalCredits: document.getElementById("totalCredits"),
  creditGoal: document.getElementById("creditGoal"),
  creditProgress: document.getElementById("creditProgress"),
  calculateButton: document.getElementById("calculateButton"),
  resetButton: document.getElementById("resetButton"),
  addButtons: document.querySelectorAll("button[data-action='add-row']"),
  rowTemplate: document.getElementById("courseRowTemplate"),
};

function createCourseList() {
  const courseList = document.createElement("div");
  courseList.id = "courseCatalog";
  courseList.className = "course-suggestions";
  courseList.hidden = true;

  courseCatalog.forEach((course) => {
    const option = createSuggestionButton(course);
    courseList.appendChild(option);
  });

  document.body.appendChild(courseList);
}

function createSuggestionButton(course, input = null) {
  const option = document.createElement("button");
  option.type = "button";
  option.className = "course-suggestion";
  option.dataset.value = `${course.code} ${course.name}`;
  option.dataset.credits = course.credits;

  const label = document.createElement("span");
  label.textContent = `${course.code} ${course.name}`;

  const meta = document.createElement("small");
  meta.textContent = getCourseMetaText(course);

  option.append(label, meta);

  if (input) {
    option.addEventListener("mousedown", (event) => {
      event.preventDefault();
      input.value = `${course.code} ${course.name}`;
      input.closest("tr").querySelector("input[name='credits']").value =
        course.credits;
      hideCourseSuggestions();
      calculateCgpa();
      saveState();
    });
  }

  return option;
}

function getCourseMetaText(course) {
  const prerequisites = coursePrerequisites[normalizeCourseKey(course.code)];
  const stream = getStreamForCourse(course.code);
  const parts = [`${course.credits} cr`];

  if (stream) {
    parts.push(
      stream.id.replace("-table-body", "").replace("stream", "Stream "),
    );
  }

  if (prerequisites?.hard?.length) {
    parts.push(`HP ${prerequisites.hard.join(", ")}`);
  }
  if (prerequisites?.soft?.length) {
    parts.push(`SP ${prerequisites.soft.join(", ")}`);
  }

  return parts.join(" • ");
}

function findCatalogCourse(courseName) {
  const normalized = normalizeCourseKey(courseName);
  return courseCatalog.find((course) => {
    const courseKey = normalizeCourseKey(`${course.code} ${course.name}`);
    return (
      normalized === courseKey || normalized === normalizeCourseKey(course.code)
    );
  });
}

function normalizeCourseKey(courseName) {
  const normalized = courseName
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, " ")
    .trim();
  const codeMatch = normalized.match(/\b([A-Z]{2,4})\s*(\d{3})\s*(L)?\b/);
  return codeMatch
    ? `${codeMatch[1]} ${codeMatch[2]}${codeMatch[3] || ""}`
    : normalized;
}

function getStreamForCourse(courseName) {
  const key = normalizeCourseKey(courseName);
  return streamDefinitions.find((stream) => stream.codes.includes(key));
}

function getPreferredSectionId(
  courseName,
  fallbackSectionId = "fundamental-table-body",
) {
  const catalogCourse = findCatalogCourse(courseName);
  const stream = getStreamForCourse(courseName);

  if (stream) {
    return stream.id;
  }
  if (catalogCourse?.sectionId) {
    return catalogCourse.sectionId;
  }
  return fallbackSectionId;
}

function createRow() {
  const template = dom.rowTemplate.content.firstElementChild.cloneNode(true);
  const removeButton = template.querySelector(".remove-row");
  template.draggable = true;

  template.addEventListener("dragstart", (event) => {
    if (event.target.matches("input, select, button")) {
      event.preventDefault();
      return;
    }
    template.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
  });

  template.addEventListener("dragend", () => {
    template.classList.remove("dragging");
    calculateCgpa();
    saveState();
  });

  removeButton.addEventListener("click", () => {
    template.remove();
    calculateCgpa();
    saveState();
  });

  const inputs = template.querySelectorAll("input, select");
  inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      if (e.target.name === "grade") {
        updateGradeColor(e.target);
      }
      calculateCgpa();
      saveState();
    });
  });

  const gradeSelect = template.querySelector("select[name='grade']");
  if (gradeSelect) {
    updateGradeColor(gradeSelect);
  }

  const courseInput = template.querySelector("input[name='courseName']");
  const creditsInput = template.querySelector("input[name='credits']");
  const suggestionList = document.getElementById("courseCatalog");

  courseInput.addEventListener("input", () => {
    const catalogCourse = findCatalogCourse(courseInput.value);
    if (catalogCourse) {
      creditsInput.value = catalogCourse.credits;
    }
    updateCourseSuggestions(courseInput);
    calculateCgpa();
    saveState();
  });
  courseInput.addEventListener("focus", () =>
    updateCourseSuggestions(courseInput),
  );
  courseInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      hideCourseSuggestions();
    }
  });
  courseInput.addEventListener("blur", () => {
    window.setTimeout(() => {
      if (!suggestionList.matches(":hover")) {
        hideCourseSuggestions();
      }
    }, 120);
  });

  return template;
}

function enableRowSorting() {
  sectionIds.forEach((sectionId) => {
    const tbody = document.getElementById(sectionId);
    if (!tbody) {
      return;
    }

    tbody.addEventListener("dragover", (event) => {
      event.preventDefault();
      const draggingRow = tbody.querySelector(".dragging");
      if (!draggingRow) {
        return;
      }

      const nextRow = getDragAfterRow(tbody, event.clientY);
      if (nextRow) {
        tbody.insertBefore(draggingRow, nextRow);
      } else {
        tbody.appendChild(draggingRow);
      }
    });

    tbody.addEventListener("drop", () => {
      calculateCgpa();
      saveState();
    });
  });
}

function getDragAfterRow(tbody, mouseY) {
  const rows = Array.from(tbody.querySelectorAll("tr:not(.dragging)"));

  return rows.reduce(
    (closest, row) => {
      const box = row.getBoundingClientRect();
      const offset = mouseY - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset, row };
      }

      return closest;
    },
    { offset: Number.NEGATIVE_INFINITY, row: null },
  ).row;
}

function updateCourseSuggestions(input) {
  const suggestionList = document.getElementById("courseCatalog");
  const query = input.value.trim().toLowerCase();
  const currentSection = input.closest("tr")?.dataset.sectionId;
  const matches = courseCatalog
    .filter((course) => {
      const label = `${course.code} ${course.name}`.toLowerCase();
      return !query || label.includes(query);
    })
    .sort((first, second) => {
      const firstMatchesSection =
        getPreferredSectionId(first.code, first.sectionId) === currentSection ||
        first.sectionId === currentSection
          ? 0
          : 1;
      const secondMatchesSection =
        getPreferredSectionId(second.code, second.sectionId) ===
          currentSection || second.sectionId === currentSection
          ? 0
          : 1;
      return firstMatchesSection - secondMatchesSection;
    })
    .slice(0, 8);

  if (!matches.length) {
    hideCourseSuggestions();
    return;
  }

  suggestionList.innerHTML = "";
  matches.forEach((course) => {
    const option = createSuggestionButton(course, input);
    suggestionList.appendChild(option);
  });

  const rect = input.getBoundingClientRect();
  suggestionList.style.left = `${rect.left + window.scrollX}px`;
  suggestionList.style.top = `${rect.bottom + window.scrollY + 6}px`;
  suggestionList.style.width = `${rect.width}px`;
  suggestionList.hidden = false;
}

function hideCourseSuggestions() {
  const suggestionList = document.getElementById("courseCatalog");
  if (suggestionList) {
    suggestionList.hidden = true;
  }
}

function updateGradeColor(select) {
  select.classList.remove(
    "grade-bg-a",
    "grade-bg-a-minus",
    "grade-bg-b",
    "grade-bg-b-plus",
    "grade-bg-c",
    "grade-bg-d",
    "grade-bg-f",
  );

  const val = select.value;
  if (val === "A") {
    select.classList.add("grade-bg-a");
  } else if (val === "A-") {
    select.classList.add("grade-bg-a-minus");
  } else if (val === "B+") {
    select.classList.add("grade-bg-b-plus");
  } else if (val === "B" || val === "B-") {
    select.classList.add("grade-bg-b");
  } else if (val.startsWith("C")) {
    select.classList.add("grade-bg-c");
  } else if (val.startsWith("D")) {
    select.classList.add("grade-bg-d");
  } else if (val === "F") {
    select.classList.add("grade-bg-f");
  }
}

function addCourseRow(targetId, item = null) {
  const tbody = document.getElementById(targetId);
  const row = createRow();

  row.dataset.sectionId = item?.sectionId || targetId;

  if (item) {
    row.querySelector("input[name='courseName']").value = item.courseName;
    row.querySelector("input[name='credits']").value = item.credits;
    const gradeSelect = row.querySelector("select[name='grade']");
    gradeSelect.value = item.grade;
    updateGradeColor(gradeSelect);

    row.querySelector("input[name='repeat']").checked = item.repeat;
    row.querySelector("input[name='nonCredit']").checked = item.nonCredit;
    row.querySelector("input[name='projected']").checked = item.projected;
  }

  tbody.appendChild(row);
}

function gatherCourses() {
  return sectionIds.flatMap((sectionId) => {
    const tbody = document.getElementById(sectionId);
    if (!tbody) {
      return [];
    }
    return Array.from(tbody.querySelectorAll("tr")).map((row, index) => ({
      sectionId,
      originalIndex: index,
      courseName: row.querySelector("input[name='courseName']").value.trim(),
      credits: Number(row.querySelector("input[name='credits']").value) || 0,
      grade: row.querySelector("select[name='grade']").value,
      repeat: row.querySelector("input[name='repeat']").checked,
      nonCredit: row.querySelector("input[name='nonCredit']").checked,
      projected: row.querySelector("input[name='projected']").checked,
    }));
  });
}

function getCountedCourses(courses) {
  const countableCourses = courses.filter(
    (course) => course.courseName && !course.nonCredit && course.credits > 0,
  );
  const groupedCourses = new Map();

  countableCourses.forEach((course) => {
    const key = normalizeCourseKey(course.courseName);
    if (!groupedCourses.has(key)) {
      groupedCourses.set(key, []);
    }
    groupedCourses.get(key).push(course);
  });

  return Array.from(groupedCourses.values()).flatMap((group) => {
    const hasRepeat = group.some((course) => course.repeat);
    return hasRepeat ? [group[group.length - 1]] : group;
  });
}

function sumPoints(courses) {
  return courses.reduce(
    (sum, course) => sum + (gradePoints[course.grade] || 0) * course.credits,
    0,
  );
}

function sumCredits(courses) {
  return courses.reduce((sum, course) => sum + course.credits, 0);
}

function calculateCgpa() {
  const courses = gatherCourses();
  const completed = getCountedCourses(
    courses.filter((course) => !course.projected),
  );
  const projectedScenario = getCountedCourses(courses);
  const projectedOnly = courses.some(
    (course) =>
      course.courseName &&
      course.projected &&
      !course.nonCredit &&
      course.credits > 0,
  );

  const currentPoints = sumPoints(completed);
  const currentCredits = sumCredits(completed);
  const projectedPoints = sumPoints(projectedScenario);
  const projectedCredits = sumCredits(projectedScenario);

  const currentGpa = currentCredits === 0 ? 0 : currentPoints / currentCredits;
  const projectedGpa =
    projectedCredits === 0 ? null : projectedPoints / projectedCredits;

  dom.currentCgpa.textContent = currentCredits ? currentGpa.toFixed(2) : "0.00";
  dom.projectedCgpa.textContent =
    projectedOnly && projectedGpa !== null ? projectedGpa.toFixed(2) : "--";
  dom.totalCredits.textContent = currentCredits;
  dom.creditGoal.textContent =
    projectedOnly && projectedCredits > currentCredits
      ? `of ${degreeCreditGoal} credits (${projectedCredits} projected)`
      : `of ${degreeCreditGoal} credits`;

  const progressPercent = Math.min(
    100,
    Math.round((currentCredits / degreeCreditGoal) * 100),
  );
  dom.creditProgress.style.width = `${progressPercent}%`;

  dom.currentChange.textContent =
    !projectedOnly || projectedGpa === null
      ? "Based on completed courses"
      : `Projected result: ${projectedGpa.toFixed(2)} with planned coursework`;

  updateStreamProgress(completed);
}

function updateStreamProgress(completedCourses) {
  let genedCompletedTotal = 0;

  streamDefinitions.forEach((stream) => {
    const progress = document.getElementById(stream.progressId);
    if (!progress) {
      return;
    }

    const completedCount = new Set(
      completedCourses
        .filter((course) =>
          stream.codes.includes(normalizeCourseKey(course.courseName)),
        )
        .map((course) => normalizeCourseKey(course.courseName)),
    ).size;

    genedCompletedTotal += completedCount;

    progress.textContent = `${completedCount}/${stream.required} completed`;
    progress.classList.toggle("is-complete", completedCount >= stream.required);
  });

  const genedProgress = document.getElementById("genedProgress");
  if (genedProgress) {
    genedProgress.textContent = `${genedCompletedTotal}/13 completed`;
    genedProgress.classList.toggle("is-complete", genedCompletedTotal >= 13);
  }
}

function saveState() {
  const courses = gatherCourses();
  localStorage.setItem(storageKey, JSON.stringify(courses));
}

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) {
    return null;
  }

  try {
    return JSON.parse(saved);
  } catch (error) {
    console.warn("Unable to parse saved course data", error);
    return null;
  }
}

function resetCourses() {
  sectionIds.forEach((id) => {
    const tbody = document.getElementById(id);
    if (tbody) {
      tbody.innerHTML = "";
    }
  });
}

function populateInitialRows(courses = null) {
  resetCourses();

  if (courses && courses.length) {
    const sections = {
      "core-table-body": [],
      "elective-table-body": [],
      "fundamental-table-body": [],
      "stream1-table-body": [],
      "stream2-table-body": [],
      "stream3-table-body": [],
      "stream4-table-body": [],
      "stream5-table-body": [],
    };

    courses.forEach((course) => {
      const sectionId =
        (course.sectionId === "cod-table-body"
          ? "elective-table-body"
          : course.sectionId) ||
        (course.courseName.toLowerCase().includes("advanced") ||
        course.courseName.toLowerCase().includes("algorithms")
          ? "core-table-body"
          : course.courseName.toLowerCase().includes("machine learning")
            ? "elective-table-body"
            : getPreferredSectionId(course.courseName));
      if (!sections[sectionId]) {
        sections[sectionId] = [];
      }
      sections[sectionId].push(course);
    });

    Object.entries(sections).forEach(([sectionId, items]) => {
      if (items.length) {
        items.forEach((item) =>
          addCourseRow(sectionId, {
            ...item,
            sectionId,
          }),
        );
      } else if (
        sectionId === "core-table-body" ||
        sectionId === "elective-table-body" ||
        sectionId === "fundamental-table-body"
      ) {
        addCourseRow(sectionId);
      }
    });
  } else {
    Object.entries(defaultCourses).forEach(([sectionId, items]) => {
      items.forEach((item) => addCourseRow(sectionId, item));
    });
  }
}

function init() {
  createCourseList();
  const savedCourses = loadState();
  populateInitialRows(savedCourses);
  enableRowSorting();
  calculateCgpa();

  dom.addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      addCourseRow(button.dataset.target);
      saveState();
    });
  });

  dom.calculateButton.addEventListener("click", calculateCgpa);

  dom.resetButton.addEventListener("click", () => {
    localStorage.removeItem(storageKey);
    populateInitialRows();
    calculateCgpa();
  });
}

init();
