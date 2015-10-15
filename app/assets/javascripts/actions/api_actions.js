ApiActions = {
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
  }
};
