(function(root) {
  var _tags = [],
      CHANGE_EVENT = "change";

  var resetTags = function (tags) {
    _tags = tags.slice();
  };

  var TagStore = root.TagStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _tags.slice();
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case TagConstants.TAGS_RECEIVED:
          resetTags(payload.tags);
          TagStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
