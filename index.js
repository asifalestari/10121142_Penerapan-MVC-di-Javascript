/*
  NIM  : 10121142
  Nama : Asifa Lestari
  Tugas Penerapan MVC pada Javascript
*/

import StudentController from "./Controller/StudentController.js";

function main() {
  // Membuat data awal
  const studentController = new StudentController("10121142", "Asifa Letari", "2021");

  // Menampilkan data awal
  studentController.printStudent();

  // Mengubah nama student yang awal
  studentController.setStudentName("Asifa Lestari");
  // Mengubah tahun menjadi tahun terbaru
  studentController.setStudentYear("2025");

  // Menampilkan data setelah perubahan
  studentController.printStudent();
}

main();
