import Student from "../Model/Student.js";
import StudentView from "../View/StudentView.js";

class StudentController {
  constructor(nim, name, year) {
    this.model = new Student(nim, name, year);
    this.view = new StudentView();
  }

  // Getter & Setter NIM
  getStudentNim() {
    return this.model.getNim();
  }

  setStudentNim(nim) {
    this.model.setNim(nim);
  }

  getStudentName() {
    return this.model.getName();
  }

  setStudentName(name) {
    this.model.setName(name);
  }

  getStudentYear() {
    return this.model.getYear();
  }

  setStudentYear(year) {
    this.model.setYear(year);
  }

  printStudent() {
    this.view.printStudent(
      this.model.getNim(),
      this.model.getName(),
      this.model.getYear()
    );
  }
}

export default StudentController;
