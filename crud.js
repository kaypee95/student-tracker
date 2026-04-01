// Import student data
const { students } = require('./data.js');

// Track next ID automatically
let nextId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;

// Helper function to get current date
const getCurrentDate = () => {
  const now = new Date();
  return now.toISOString().split('T')[0];
};


// CREATE - Add a new student
function createStudent(name, age, grade, attendance) {
  const newStudent = {
    id: nextId++,
    name,
    age,
    grade,
    attendance,
    lastUpdated: getCurrentDate()
  };
  students.push(newStudent);
  console.log(`Student created: ${name}`);
  return newStudent;
}


// READ - Get students
function getAllStudents() {
  return students;
}

function getStudentById(id) {
  return students.find(s => s.id === id) || null;
}

function searchByName(name) {
  return students.filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
}

function searchByGrade(grade) {
  return students.filter(s => s.grade === grade);
}


// UPDATE - Modify a student
function updateStudent(id, updates) {
  const student = students.find(s => s.id === id);
  if (!student) {
    console.log(`Student with ID ${id} not found`);
    return null;
  }
  if (updates.name) student.name = updates.name;
  if (updates.age) student.age = updates.age;
  if (updates.grade) student.grade = updates.grade;
  if (updates.attendance) student.attendance = updates.attendance;
  student.lastUpdated = getCurrentDate();
  console.log(`Student ${id} updated`);
  return student;
}

// DELETE - Remove a student
function deleteStudent(id) {
  const index = students.findIndex(s => s.id === id);
  if (index === -1) {
    console.log(`Student with ID ${id} not found`);
    return false;
  }
  const deleted = students.splice(index, 1)[0];
  console.log(`Student deleted: ${deleted.name}`);
  return true;
}


// UTILITY FUNCTIONS
function getStudentCount() {
  return students.length;
}

function getAllGrades() {
  const grades = new Set();
  students.forEach(s => grades.add(s.grade));
  return Array.from(grades).sort();
}

// Export all functions
module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  searchByName,
  searchByGrade,
  updateStudent,
  deleteStudent,
  getStudentCount,
  getAllGrades
};