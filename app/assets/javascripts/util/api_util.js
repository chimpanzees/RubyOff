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

  submitVote: function (voteType, solutionId, questionId) {
    $.ajax({
      url: 'api/votes',
      type: 'post',
      data: {
        vote_type: voteType,
        solution_id: solutionId,
        question_id: questionId
      },
      success: function (solutions) {
        if (solutions.success === false) {
          // already voted for this solution, do nothing!
        } else {
          ApiActions.receiveAllSolutions(solutions);
        }
      }
    });
  }
};
