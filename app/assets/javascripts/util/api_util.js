ApiUtil = {
  runTests: function (questionSolutionTest) {
    $.ajax({
      type: 'post',
      url: 'api/sandbox',
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
