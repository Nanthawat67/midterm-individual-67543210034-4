const db = require('../database/db');

const getAllStudents = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM students', [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

const createStudent = (student) => {
  return new Promise((resolve, reject) => {
    const { name, email } = student;
    db.run(
      'INSERT INTO students (name, email) VALUES (?, ?)',
      [name, email],
      function (err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, name, email });
      }
    );
  });
};

module.exports = {
  getAllStudents,
  createStudent
};

