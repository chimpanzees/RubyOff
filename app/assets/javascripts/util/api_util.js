ApiUtil = {
  runTests: function (body, tests, output) {
    $.ajax({
      type: 'post',
      url: 'api/sandbox',
      data: {body: body, tests: tests},
      success: function (results) {
        ApiActions.receiveTestResults(results);
      }
    });
  },

  trySubmit: function (body, tests) {
    $.ajax({
      type: 'post',
      url: 'api/solutions',
      data: {body: body, tests: tests},
      success: function (results) {
        ApiActions.receiveTestResults(results);
      }
    });
  },

  fetchQuestionsAndSetCurrent: function (id) {
    $.ajax({
      url: 'api/questions',
      type: 'get',
      success: function (questions) {
        ApiActions.receiveAllQuestions(questions);
        ApiActions.receiveCurrentQuestionId(id);
      }.bind(this)
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
