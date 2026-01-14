const studentRepository = require('../../data/repositories/studentRepository');
const { validateStudent } = require('../validators/studentValidator');

const getStudents = async () => {
  return await studentRepository.getAllStudents();
};

const addStudent = async (student) => {
  const error = validateStudent(student);
  if (error) {
    throw new Error(error);
  }

  return await studentRepository.createStudent(student);
};

module.exports = {
  getStudents,
  addStudent
};

