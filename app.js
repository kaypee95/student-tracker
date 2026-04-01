// Import CRUD functions
const {
  createStudent,
  getAllStudents,
  getStudentById,
  searchByName,
  searchByGrade,
  updateStudent,
  deleteStudent,
  getStudentCount,
  getAllGrades
} = require('./crud.js');


// ============================================
// DISPLAY FUNCTIONS
// ============================================

function displayStudent(student) {
  if (!student) {
    console.log("No student to display");
    return;
  }
  console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Student ID:   ${student.id}
  Name:         ${student.name}
  Age:          ${student.age}
  Grade:        ${student.grade}
  Attendance:   ${student.attendance}%
  Last Updated: ${student.lastUpdated}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `);
}

function displayStudents(students) {
  if (students.length === 0) {
    console.log("No students found.\n");
    return;
  }

  console.log("\n┌─────┬──────────────────────┬─────┬───────┬────────────┐");
  console.log("│ ID  │ Name                 │ Age │ Grade │ Attendance │");
  console.log("├─────┼──────────────────────┼─────┼───────┼────────────┤");

  students.forEach(s => {
    console.log(
      `│ ${String(s.id).padEnd(3)} │ ` +
      `${s.name.padEnd(20)} │ ` +
      `${String(s.age).padEnd(3)} │ ` +
      `${s.grade.padEnd(5)} │ ` +
      `${String(s.attendance).padEnd(9)}% │`
    );
  });

  console.log("└─────┴──────────────────────┴─────┴───────┴────────────┘");
  console.log(`Total: ${students.length} student(s)\n`);
}


// ============================================
// DEMO FUNCTIONS
// ============================================

function demoCreate() {
  console.log("\n📝 === CREATE DEMO ===");
  console.log("Adding a new student: Aminata Jallow, Age 17, Grade 10, Attendance 95%");
  const newStudent = createStudent("Aminata Jallow", 17, "Grade 10", 95);
  displayStudent(newStudent);
}

function demoRead() {
  console.log("\n📖 === READ DEMO ===");

  console.log("\n1. All students:");
  displayStudents(getAllStudents());

  console.log("2. Student with ID 3:");
  displayStudent(getStudentById(3));

  console.log("3. Search by name 'Lamin':");
  displayStudents(searchByName("Lamin"));

  console.log("4. Search by grade 'Grade 11':");
  displayStudents(searchByGrade("Grade 11"));
}

function demoUpdate() {
  console.log("\n✏️ === UPDATE DEMO ===");

  console.log("Before update:");
  displayStudent(getStudentById(1));

  console.log("Updating student 1: attendance from original to 98%");
  updateStudent(1, { attendance: 98 });

  console.log("After update:");
  displayStudent(getStudentById(1));
}

function demoDelete() {
  console.log("\n🗑️  === DELETE DEMO ===");

  console.log(`Total students before delete: ${getStudentCount()}`);
  console.log("\nDeleting student with ID 10...");
  deleteStudent(10);
  console.log(`Total students after delete: ${getStudentCount()}`);
}

function demoUtilities() {
  console.log("\n🔧 === UTILITY FUNCTIONS DEMO ===");

  console.log(`\nTotal number of students: ${getStudentCount()}`);

  console.log("\nAll grades in the system:");
  console.log(getAllGrades().join(", "));
}


// ============================================
// MAIN APPLICATION
// ============================================

function main() {
  console.log("╔════════════════════════════════════════════════════╗");
  console.log("║          STUDENT TRACKER v1.0                      ║");
  console.log("║          Demonstrating CRUD Operations             ║");
  console.log("╚════════════════════════════════════════════════════╝");

  demoRead();
  demoCreate();
  demoUpdate();
  demoDelete();
  demoUtilities();

  console.log("\n✅ All CRUD operations completed successfully!");
  console.log("🎉 Student Tracker is working!\n");
}

// Run the application
main();