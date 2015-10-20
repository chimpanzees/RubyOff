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
                        key={solution.solution.id}/>;
            })
          }
        </div>
      </div>
    );
  }
});
