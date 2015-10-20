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
    SolutionStore.addChangeListener(this._solutionChanged);
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({
      questionId: newProps.question_id,
      body: newProps.solution_default,
      tests_default: newProps.tests_default,  // for submition
      tests: newProps.tests_default,         // for editing
      output: {}
    });
  },

  _solutionChanged: function () {
    if (SolutionStore.successfulPost()) {
      this.props.history.pushState(null, "/solutions/" + this.state.questionId);
    } else {
      var output = SolutionStore.getOutput();
      this.setState({output: output});
    }
  },

  handleSubmit: function (e) {
    e.preventDefault();
    ApiUtil.trySubmit(
      this.state.questionId,
      this.state.body,
      this.state.tests_default
    );
    this.setState({output: {running: "Submitting"}});
  },

  handleRunTests: function (e) {
    e.preventDefault();
    ApiUtil.runTests(this.state.body, this.state.tests);
    this.setState({output: {running: "Running tests"}});
  },

  updateBody: function (newBody) {
    this.setState({body: newBody});
  },

  updateTests: function (newTests) {
    this.setState({tests: newTests});
  },

  render: function () {
    var results = [];
    Object.keys(this.state.output).map(function (result) {
      if (typeof this.state.output[result].success !== 'undefined') {
        // Successful output
        var out = this.state.output[result].success;
        if (out) {
          results.push(
            <li className="success-true" key={result}>{out.toString()}</li>
          );
        } else {
          results.push(
            <li className="success-false" key={result}>{out.toString()}</li>
          );
        }
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

    var options = {
      lineNumbers: true,
      mode: "ruby",
      theme: "lesser-dark"
    };

    return (
      <div className="solution-form">
        <form onSubmit={this.handleSubmit}>
          <label className="solution-form-solution">Your Solution: </label>
          <ReactCodeMirror
            value={this.state.body}
            onChange={this.updateBody}
            options={options}/>
          <label className="solution-form-tests">Tests: </label>
          <ReactCodeMirror
            value={this.state.tests}
            onChange={this.updateTests}
            options={options}/>
          <input className="run-tests-button"
                 type="submit"
                 onClick={this.handleRunTests}
                 value="Run Tests"/>
          <input className="submit-button"
                 type="submit"
                 onClick={this.handleSubmit}
                 value="Submit"/>
        </form>
        <ul className="solution-form-results">{ results }</ul>
      </div>
    );
  }
});
