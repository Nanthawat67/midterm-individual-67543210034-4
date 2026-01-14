const studentService = require('../../business/services/studentService');

class StudentController {

  async getAll(req, res, next) {
    try {
      const students = await studentService.getAllStudents();
      res.json(students);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const student = await studentService.getStudentById(req.params.id);
      res.json(student);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const student = await studentService.createStudent(req.body);
      res.status(201).json(student);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const student = await studentService.updateStudent(
        req.params.id,
        req.body
      );
      res.json(student);
    } catch (err) {
      next(err);
    }
  }

  async remove(req, res, next) {
    try {
      await studentService.deleteStudent(req.params.id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new StudentController();

