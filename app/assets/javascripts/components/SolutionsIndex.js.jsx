function _getAllSolutions() {
  return SolutionStore.all();
}

SolutionsIndex = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {solutions: []};
  },

  componentDidMount: function () {
    SolutionStore.addChangeListener(this._solutionsChanged);
    ApiUtil.fetchSolutions(parseInt(this.props.params.questionId));
  },

  componentWillUnmount: function () {
    SolutionStore.removeChangeListener(this._solutionsChanged);
  },

  _solutionsChanged: function () {
    this.setState({solutions: _getAllSolutions()});
  },

  handleIndex: function (event) {
    event.preventDefault();
    this.history.pushState(null, "/", {});
  },

  handleRedo: function (event) {
    event.preventDefault();
    var questionId = this.props.params.questionId;
    this.history.pushState(null, "/questions/" + questionId, {});
  },

  render: function () {
    return (
      <div className="solution-index">
        <h2>Solutions</h2>
        {
          this.state.solutions.map(function (solution) {
            return <SolutionsIndexItem  solution={solution} key={solution.id}/>;
          })
        }
        <button onClick={this.handleIndex}>Question Index</button><br/>
        <button onClick={this.handleRedo}>Try Again</button><br/>
      </div>
    );
  }
});
