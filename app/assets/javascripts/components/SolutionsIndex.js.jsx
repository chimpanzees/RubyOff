function _getAllSolutions() {
  return SolutionStore.all();
}

SolutionsIndex = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {solutions: [], sortBy: "Clever", otherSort: "Best Practices"};
  },

  componentDidMount: function () {
    SolutionStore.addChangeListener(this._solutionsChanged);
    ApiUtil.fetchSolutions(parseInt(this.props.params.questionId), this.state.sortBy);
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

  toggleSortBy: function (event) {
    event.preventDefault();
    ApiUtil.fetchSolutions(parseInt(this.props.params.questionId), this.state.otherSort);
    if (this.state.sortBy === "Clever") {
      this.setState({sortBy: "Best Practices", otherSort: "Clever"});
    } else {
      this.setState({otherSort: "Best Practices", sortBy: "Clever"});
    }
  },

  render: function () {
    var numSolutions = this.state.solutions.length;
    var question_title = "";
    if (numSolutions > 0) {
      question_title = this.state.solutions[0].question_title;
    }

    return (
      <div className="solutions-index">
        <div className="solutions-index-header">
          <div className="solutions-index-title">
            {question_title}
          </div>
          <div className="solutions-index-label">
            {numSolutions}{numSolutions === 1 ? " Solution" : " Solutions"} Returned
          </div>
          <input className="solutions-index-sort-by"
                 type="submit"
                 onClick={this.toggleSortBy}
                 value={"Sort by: " + this.state.sortBy}/>
          <input className="question-index-button"
                 type="submit"
                 onClick={this.handleIndex}
                 value="Question Index"/>
          <input className="redo-button"
                 type="submit"
                 onClick={this.handleRedo}
                 value="Try Again"/>
        </div>
        <div className="solutions-index-list">
          {
            this.state.solutions.map(function (solution) {
              return <SolutionsIndexItem
                        dataObject={solution}
                        sortBy={this.state.sortBy}
                        key={solution.solution.id}/>;
            }.bind(this))
          }
        </div>
      </div>
    );
  }
});
