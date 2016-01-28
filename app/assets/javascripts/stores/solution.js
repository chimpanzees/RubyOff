(function(root) {
  var _solutions = [],
      _output,
      _successfulPost = false,
      CHANGE_EVENT = "change";

  function resetSolution(solutions) {
    _solutions = solutions.slice();
  }

  var addSolution = function (solution) {
    _solutions.push(solution);
  };

  var SolutionStore = root.SolutionStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _solutions.slice();
    },

    successfulPost: function () {
      return _successfulPost;
    },

    getOutput: function () {
      return $.extend({}, _output);
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case SolutionConstants.SOLUTIONS_RECEIVED:
          _successfulPost = false;
          resetSolution(payload.solutions);
          SolutionStore.emit(CHANGE_EVENT);
          break;
        case SolutionConstants.SOLUTION_ADDED:
          _successfulPost = true;
          addSolution(payload.solution);
          SolutionStore.emit(CHANGE_EVENT);
          break;
        case SolutionConstants.SUBMIT_DENIED:
          _successfulPost = false;
          _output = payload.results;
          SolutionStore.emit(CHANGE_EVENT);
          break;
        case SolutionConstants.TEST_RESULTS_RECEIVED:
          _successfulPost = false;
          _output = payload.results;
          SolutionStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
