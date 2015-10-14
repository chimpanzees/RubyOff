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

  fetchQuestions: function () {
    $.ajax({
      url: 'api/questions',
      type: 'get',
      success: function (questions) {
        ApiActions.receiveAllQuestions(questions);
      }
    });
  }
};
