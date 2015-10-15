TestOutput = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {output: ""};
  },

  componentDidMount: function () {
    this.setState({
      solution: this.props.solution,
      questionId: this.props.questionId
    }); // author_id too?
    SolutionStore.addChangeListener(this._updateOutput);
  },

  _updateOutput: function () {
    this.setState({output: currentQuestion});
    console.log("_updateShow was called.");
  },

  _findQuestionById: function (id) {
    var result;

    QuestionStore.all().forEach(function (question) {
      if (id === question.id) {
        result = question;
      }
    }.bind(this));

    return result;
  },

  _updateSolutionResults: function () {
    // The solution.results needs to change
  },


  render: function () {
    return (
      <div>
      </div>
    );
  }
});
