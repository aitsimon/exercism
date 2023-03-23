//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class GradeSchool {
  constructor() {
    this.students = {};
  }
  add(name, grade) {
    // remove student from all grades before adding to new grade
    for (const g in this.students) {
      if (this.students[g].includes(name)) {
        this.students[g].splice(this.students[g].indexOf(name), 1);
      }
    }
    if (!this.students[grade]) {
      this.students[grade] = [];
    }
    this.students[grade].push(name);
    this.students[grade].sort();
  }
  grade(grade) {
    return this.students[grade] ? this.students[grade].slice() : [];
  }
  roster() {
    const students = {};
    for (let grade in this.students) {
      students[grade] = this.students[grade].slice();
    }
    return students;
  }
}
