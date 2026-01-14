const validateStudent = (student) => {
  if (!student.name || !student.email) {
    return 'Name and email are required';
  }

  if (!student.email.includes('@')) {
    return 'Invalid email format';
  }

  return null;
};

module.exports = {
  validateStudent
};


