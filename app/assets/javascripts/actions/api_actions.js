ApiActions = {
  receiveAllQuestions: function (questions) {
    AppDispatcher.dispatch({
      actionType: QuestionConstants.BENCHES_RECEIVED,
      questions: questions
    });
  },

  receiveSandboxResult: function (result) {
    AppDispatcher.dispatch({
      actionType: QuestionConstants.RESULT_RECEIVED,
      result: result
    });
  }
};
