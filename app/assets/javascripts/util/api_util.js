ApiUtil = {
  handleSubmit: function (questionSolutionTest) {
    $.ajax({
      url: 'api/sandboxes',
      type: 'get',
      data: questionSolutionTest,
      success: function (result) {
        ApiActions.receiveSandboxResult(result);
      }
    });
  },

  fetchQuestions: function (bounds) {
    $.ajax({
      url: 'api/questions',
      type: 'get',
      data: {bounds: bounds},
      success: function (questions) {
        ApiActions.receiveQuestions(questions);
      }
    });
  }
};
