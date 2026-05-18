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
  F: 0.0,
};

const defaultCourses = {
  "core-table-body": [
    {
      courseName: "CS401 Advanced Algorithms",
      credits: 4,
      grade: "A-",
      repeat: false,
      nonCredit: false,
      projected: false,
    },
  ],
  "cod-table-body": [
    {
      courseName: "AI505 Machine Learning",
      credits: 3,
      grade: "B+",
      repeat: false,
      nonCredit: false,
      projected: true,
    },
  ],
  "fundamental-table-body": [
    {
      courseName: "MATH101 Calculus I",
      credits: 4,
      grade: "A",
      repeat: false,
      nonCredit: false,
      projected: false,
    },
  ],
};

const storageKey = "cgpaCalculatorCourses";

const dom = {
  currentCgpa: document.getElementById("currentCgpa"),
  projectedCgpa: document.getElementById("projectedCgpa"),
  totalCredits: document.getElementById("totalCredits"),
  creditGoal: document.getElementById("creditGoal"),
  creditProgress: document.getElementById("creditProgress"),
  calculateButton: document.getElementById("calculateButton"),
  resetButton: document.getElementById("resetButton"),
  addButtons: document.querySelectorAll("button[data-action='add-row']"),
  rowTemplate: document.getElementById("courseRowTemplate"),
};

function createRow() {
  const template = dom.rowTemplate.content.firstElementChild.cloneNode(true);
  const removeButton = template.querySelector(".remove-row");

  removeButton.addEventListener("click", () => {
    template.remove();
    calculateCgpa();
    saveState();
  });

  const inputs = template.querySelectorAll("input, select");
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      calculateCgpa();
      saveState();
    });
  });

  return template;
}

function addCourseRow(targetId, item = null) {
  const tbody = document.getElementById(targetId);
  const row = createRow();

  row.dataset.sectionId = item?.sectionId || targetId;

  if (item) {
    row.querySelector("input[name='courseName']").value = item.courseName;
    row.querySelector("input[name='credits']").value = item.credits;
    row.querySelector("select[name='grade']").value = item.grade;
    row.querySelector("input[name='repeat']").checked = item.repeat;
    row.querySelector("input[name='nonCredit']").checked = item.nonCredit;
    row.querySelector("input[name='projected']").checked = item.projected;
  }

  tbody.appendChild(row);
}

function gatherCourses() {
  const sections = [
    "core-table-body",
    "cod-table-body",
    "fundamental-table-body",
  ];
  return sections.flatMap((sectionId) => {
    const tbody = document.getElementById(sectionId);
    return Array.from(tbody.querySelectorAll("tr")).map((row) => ({
      sectionId,
      courseName: row.querySelector("input[name='courseName']").value.trim(),
      credits: Number(row.querySelector("input[name='credits']").value) || 0,
      grade: row.querySelector("select[name='grade']").value,
      repeat: row.querySelector("input[name='repeat']").checked,
      nonCredit: row.querySelector("input[name='nonCredit']").checked,
      projected: row.querySelector("input[name='projected']").checked,
    }));
  });
}

function calculateCgpa() {
  const courses = gatherCourses();
  const completed = courses.filter(
    (course) => !course.projected && !course.nonCredit && course.credits > 0,
  );
  const projected = courses.filter(
    (course) => course.projected && !course.nonCredit && course.credits > 0,
  );

  const currentPoints = completed.reduce(
    (sum, course) => sum + (gradePoints[course.grade] || 0) * course.credits,
    0,
  );
  const currentCredits = completed.reduce(
    (sum, course) => sum + course.credits,
    0,
  );
  const projectedPoints = projected.reduce(
    (sum, course) => sum + (gradePoints[course.grade] || 0) * course.credits,
    0,
  );
  const projectedCredits = projected.reduce(
    (sum, course) => sum + course.credits,
    0,
  );

  const estimatedCredits = currentCredits + projectedCredits;
  const estimatedPoints = currentPoints + projectedPoints;

  const currentGpa = currentCredits === 0 ? 0 : currentPoints / currentCredits;
  const projectedGpa =
    projectedCredits === 0 ? null : projectedPoints / projectedCredits;
  const estimatedGpa =
    estimatedCredits === 0 ? null : estimatedPoints / estimatedCredits;

  dom.currentCgpa.textContent = currentCredits ? currentGpa.toFixed(2) : "0.00";
  dom.projectedCgpa.textContent =
    projectedGpa === null ? "--" : projectedGpa.toFixed(2);
  dom.totalCredits.textContent = estimatedCredits;
  dom.creditGoal.textContent = `of 120 units`;

  const progressPercent = Math.min(
    100,
    Math.round((estimatedCredits / 120) * 100),
  );
  dom.creditProgress.style.width = `${progressPercent}%`;

  dom.currentChange.textContent =
    estimatedGpa === null
      ? "Based on completed courses"
      : `Estimated GPA: ${estimatedGpa.toFixed(2)} with projected coursework`;
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
  ["core-table-body", "cod-table-body", "fundamental-table-body"].forEach(
    (id) => {
      const tbody = document.getElementById(id);
      tbody.innerHTML = "";
    },
  );
}

function populateInitialRows(courses = null) {
  resetCourses();

  if (courses && courses.length) {
    const sections = {
      "core-table-body": [],
      "cod-table-body": [],
      "fundamental-table-body": [],
    };

    courses.forEach((course) => {
      const sectionId =
        course.sectionId ||
        (course.courseName.toLowerCase().includes("advanced") ||
        course.courseName.toLowerCase().includes("algorithms")
          ? "core-table-body"
          : course.courseName.toLowerCase().includes("machine learning")
            ? "cod-table-body"
            : "fundamental-table-body");
      if (!sections[sectionId]) {
        sections[sectionId] = [];
      }
      sections[sectionId].push(course);
    });

    Object.entries(sections).forEach(([sectionId, items]) => {
      if (items.length) {
        items.forEach((item) => addCourseRow(sectionId, item));
      } else {
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
  const savedCourses = loadState();
  populateInitialRows(savedCourses);
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
