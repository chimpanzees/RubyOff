ApiUtil = {
  runTests: function (body, tests, output) {
    $.ajax({
      type: 'post',
      url: 'api/sandbox',
      data: {body: body, tests: tests},
      success: function (results) {
        ApiActions.receiveTestResults(results);
      },
      error: function (jqXHRObject, textStatus, errorThrown) {
        results = {test_0: {error: "TimeoutError", message: "Something went wrong."}};
        ApiActions.receiveTestResults(results);
      }
    });
  },

  trySubmit: function (questionId, body, tests) {
    $.ajax({
      type: 'post',
      url: 'api/solutions',
      data: {questionId: questionId, body: body, tests: tests},
      success: function (result) {
        ApiActions.receiveSubmitResult(result);
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
  },

  fetchSolutions: function (id) {
    $.ajax({
      url: 'api/solutions',
      type: 'get',
      data: {question_id: id},
      success: function (solutions) {
        ApiActions.receiveAllSolutions(solutions);
      }
    });
  },

  fetchVotes: function (id) {
    $.ajax({
      url: 'api/index',
      type: 'get',
      data: {solution_id: id},
      success: function (voteCount) {
        ApiActions.receiveVoteCount(voteCount);
      }
    });
  }
};
