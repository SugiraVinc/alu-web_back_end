// a function updateStudentGradeByCity that returns an
// array of students for a specific city with their new grade
// It should accept a list of students
// from getListStudents), a city (String),
// ..and newGrades (Array of “grade” objects) as parameters
// If a student doesn’t have grade in newGrades,
// ..the final grade should be N/A
// use filter and map to combine

function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });
}
export default updateStudentGradeByCity;
