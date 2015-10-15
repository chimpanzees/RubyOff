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
    // Need a way of getting the test reults from the ApiActions
    // Right now, it is being given to the SolutionStore
    // SolutionStore should change its data and emit and change event
    // which will call this function
    this.setState({output: currentQuestion});
    console.log("_updateShow was called.");
  },

  render: function () {
    return (
      <div>
      </div>
    );
  }
});
