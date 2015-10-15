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

    getQuestionById: function (id) {
      var res = null;
      _questions.forEach(function (question) {
        if (question.id === id) {
          res = question;
        }
      });
      return res;
    },

    getNextQuestion: function (id) {
      var currentIndex = 0;
      _questions.forEach(function (question, index) {
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
        case QuestionConstants.QUESTIONS_RECEIVED:
          resetQuestions(payload.questions);
          QuestionStore.emit(CHANGE_EVENT);
          break;
        case QuestionConstants.QUESTION_ADDED:
          resetQuestions(payload.questions);
          QuestionStore.emit(CHANGE_EVENT);
          break;
        case QuestionConstants.QUESTION_REMOVED:
          resetQuestions(payload.questions);
          QuestionStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
