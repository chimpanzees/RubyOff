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
        default:

      }
    })
  });
})(this);
