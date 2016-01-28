(function(root) {
  var _questions = [],
      _currentQuestion = {},
      CHANGE_EVENT = "change";

  var resetQuestions = function (questions) {
    _questions = questions.slice();
  };

  var setCurrentQuestion = function (id) {
    var res = null;
    _questions.forEach(function (question) {
      if (question.id === id) {
        res = question;
      }
    });
    _currentQuestion = QuestionStore.getQuestionById(id);
  };

  var skipQuestion = function () {
    var currentIndex = 0;
    _questions.forEach(function (question, index) {
      if (question.id === _currentQuestion.id) {
        currentIndex = index;
      }
    });
    var nextIndex = ((currentIndex + 1) % _questions.length);
    _currentQuestion = _questions[nextIndex];
  };

  var QuestionStore = root.QuestionStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _questions.slice();
    },

    currentQuestion: function () {
      return $.extend({}, _currentQuestion);
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
        case QuestionConstants.RECEIVE_SKIP_REQUEST:
          skipQuestion();
          QuestionStore.emit(CHANGE_EVENT);
          break;
        case QuestionConstants.CURRENT_QUESTION_ID_RECEIVED:
          setCurrentQuestion(payload.id);
          QuestionStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
