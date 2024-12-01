function selectDepartment(department) {
    localStorage.setItem('selectedDepartment', department);
    window.location.href = 'index_question.html';
  }