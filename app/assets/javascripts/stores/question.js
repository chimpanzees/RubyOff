(function(root) {
  var _questions = [];
  var CHANGE_EVENT = "change";

  var resetQuestions = function (questions) {
    _questions = questions.slice();
  };

  var QuestionStore = root.QuestionStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _questions.slice();
    },

    getNextQuestion: function (id) {
      var currentIndex = 0;
      _question.forEach(function (question, index) {
        if (question.id === id) {
          currentIndex = index;
        }
      });
      var nextIndex = ((currentIndex + 1) % _questions.length);
      return _questions[nextIndex].id;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case QuestionConstants.QUESTION_ADDED:
          resetQuestions(payload.questions);
          QuestionStore.emit(CHANGE_EVENT);
          break;
        case QuestionConstants.QUESTION_REMOVED:
          resetQuestions(payload.questions);
          QuestionStore.emit(CHANGE_EVENT);
          break;
        case QuestionConstants.RESULT_RECEIVED:
          // payload.result need to get the result to the user
          QuestionStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
