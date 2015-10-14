ApiUtil = {
  handleSubmit: function (questionSolutionTest) {
    $.ajax({
      type: 'post',
      url: 'api/sandbox',
      data: questionSolutionTest,
      success: function (result) {
        debugger;
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
