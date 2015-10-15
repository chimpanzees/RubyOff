ApiActions = {
  receiveAllQuestions: function (questions) {
    AppDispatcher.dispatch({
      actionType: QuestionConstants.QUESTIONS_RECEIVED,
      questions: questions
    });
  },

  receiveSandboxResult: function (result) {
    AppDispatcher.dispatch({
      actionType: SolutionConstants.TEST_RESULT_RECEIVED,
      result: result
    });
  }
};
