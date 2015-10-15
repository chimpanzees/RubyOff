ApiUtil = {
  runTests: function (body, tests, output) {
    $.ajax({
      type: 'post',
      url: 'api/sandbox',
      data: {body: body, tests: tests, output: output},
      success: function (results) {
        ApiActions.receiveTestResults(results);
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
