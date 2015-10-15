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
    // debugger;
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
    Object.keys(this.state.output).map(function (result) {
      if (typeof this.state.output[result].success !== 'undefined') {
        // Successful output
        var out = this.state.output[result].success;
        results.push(<li className="success" key={result}>{out}</li>);
      } else if (typeof this.state.output[result].running !== 'undefined') {
        // Running tests
        results.push(<li className="running">Running tests...</li>);
      } else {
        // Error of some type
        var errorType = this.state.output[result].error;
        var errorMessage = this.state.output[result].message;
        results.push(
          <li className="error" key={result}>{errorType}: {errorMessage}</li>
        );
      }
    }.bind(this));
    debugger;
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
