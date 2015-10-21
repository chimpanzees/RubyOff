function _getAllQuestions() {
  return QuestionStore.all();
}

QuestionsIndex = React.createClass({
  getInitialState: function () {
    return {questions: _getAllQuestions()};
  },

  _questionsChanged: function () {
    this.setState({questions: _getAllQuestions()});
  },

  componentDidMount: function () {
    QuestionStore.addChangeListener(this._questionsChanged);
    ApiUtil.fetchQuestions();
  },

  componentWillUnmount: function () {
    QuestionStore.removeChangeListener(this._questionsChanged);
  },

  handleItemClick: function (question) {
    this.props.history.pushState(null, "questions/" + question.id);
  },

  render: function () {
    var handleItemClick = this.handleItemClick;
    var numQuestions = this.state.questions.length;
    return (
      <div className="question-index">
        <div className="question-index-header">
          <div className="question-index-label">
            {numQuestions}{numQuestions === 1 ? " Challenge" : " Challenges"} Found
          </div>
        </div>
        <div className="question-index-list">
          {
            this.state.questions.map(function (question) {
              return <QuestionsIndexItem
                onTouch={this.handleItemClick.bind(this, question)}
                question={question}
                key={question.id}/>;
            }.bind(this))
          }
        </div>
      </div>
    );
  }
});
