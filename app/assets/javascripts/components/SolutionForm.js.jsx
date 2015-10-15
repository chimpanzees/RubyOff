SolutionForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      questionId: -1,
      body: "loading",
      tests_default: "loading",  // for submition
      tests: "loading",         // for editing
      output: {}
    };
  },

  componentDidMount: function () {
    this.setState({
      questionId: this.props.questionId,
      body: this.props.solution_default,
      tests_default: this.props.tests_default,  // for submition
      tests: this.props.tests_default,         // for editing
      output: {}
    });
    SolutionStore.addChangeListener(this._solutionChanged);
  },

  _solutionChanged: function () {
    var output = SolutionStore.getOutput();
    this.setState({output: output});
    debugger;
  },

  handleSubmit: function (e) {
    e.preventDefault();
  },

  handleRunTests: function (e) {
    e.preventDefault();
    ApiUtil.runTests(this.state.body, this.state.tests, this.state.output);
    this.setState({output: {running: "Running tests"}});
  },

  render: function () {
    var results = [];
    for (var result in this.state.output) {
      var type = result[0][0];
      var out = result[0][1];
      if (type === "success" /* string? */) {
        results.push(<li className="success">{out}</li>);
      } else {
        results.push(<li className="error">{out}</li>);
      }
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Your Solution: </label>
          <textarea className="solution-form-body"
                    valueLink={this.linkState('body')}
                    rows="6"
                    cols="50"></textarea>
          <br/>
          <label>Your Test Cases</label>
          <textarea className="solution-form-tests"
                    valueLink={this.linkState('tests')}
                    rows="6"
                    cols="50"></textarea>
          <br/>

          <button onClick={this.handleRunTests}>Run Tests</button>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <ul className="solution-form-results">
          {
            results.forEach(function (result) {
              return result;
            })
          }
        </ul>
      </div>
    );
  }
});
