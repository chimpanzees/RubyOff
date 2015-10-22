ApiActions = {
  receiveCurrentQuestionId: function (id) {
    AppDispatcher.dispatch({
      actionType: QuestionConstants.CURRENT_QUESTION_ID_RECEIVED,
      id: id
    });
  },

  receiveAllQuestions: function (questions) {
    AppDispatcher.dispatch({
      actionType: QuestionConstants.QUESTIONS_RECEIVED,
      questions: questions
    });
  },

  receiveTestResults: function (results) {
    AppDispatcher.dispatch({
      actionType: SolutionConstants.TEST_RESULTS_RECEIVED,
      results: results
    });
  },

  receiveSkipRequest: function () {
    AppDispatcher.dispatch({
      actionType: QuestionConstants.RECEIVE_SKIP_REQUEST
    });
  },

  receiveSubmitResult: function (result) {
    if (result.saved === true) {
      AppDispatcher.dispatch({
        actionType: SolutionConstants.SOLUTION_ADDED,
        solution: result.solution
      });
    } else {
      AppDispatcher.dispatch({
        actionType: SolutionConstants.SUBMIT_DENIED,
        results: result
      });
    }
  },

  receiveAllSolutions: function (solutions) {
    AppDispatcher.dispatch({
      actionType: SolutionConstants.SOLUTIONS_RECEIVED,
      solutions: solutions
    });
  },
};
