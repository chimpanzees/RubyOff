function _getAllSolutions() {
  return SolutionStore.all();
}

SolutionsIndex = React.createClass({
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

  render: function () {
    return (
      <div className="solution-index">
        <h2>Solutions</h2>
        {
          this.state.solutions.map(function (solution) {
            return <SolutionsIndexItem  solution={solution} key={solution.id}/>;
          })
        }
      </div>
    );
  }
});
