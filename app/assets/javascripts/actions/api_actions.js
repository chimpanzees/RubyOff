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
  }
};
