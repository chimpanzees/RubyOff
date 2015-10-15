(function(root) {
  // var _solutions;
  var _output;
  var CHANGE_EVENT = "change";

  // function resetSolution(soutions) {
  //   _solutions = solutions.slice();
  // }

  var SolutionStore = root.SolutionStore = $.extend({}, EventEmitter.prototype, {
    // all: function () {
    //   return _solutions.slice();
    // },

    // getSolutionById: function (id) {
    //   var res = null;
    //   _solutions.forEach(function (solution) {
    //     if (solution.id === id) {
    //       res = solution;
    //     }
    //   });
    //   return res;
    // },

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
      //   case SolutionConstants.SOLUTIONS_RECEIVED:
      //     resetSolution(payload.solutions);
      //     SolutionStore.emit(CHANGE_EVENT);
      //     break;
      //   case SolutionConstants.SOLUTION_ADDED:
      //     resetSolution(payload.solutions);
      //     SolutionStore.emit(CHANGE_EVENT);
      //     break;
      //   case SolutionConstants.SOLUTION_REMOVED:
      //     resetSolution(payload.solutions);
      //     SolutionStore.emit(CHANGE_EVENT);
      //     break;
        case SolutionConstants.TEST_RESULTS_RECEIVED:
          // payload.result is our result!
          _output = payload.results;
          SolutionStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
