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
    return (
      <div className="question-index">
        <h2>Questions</h2>
        {
          this.state.questions.map(function (question) {
            return <QuestionsIndexItem onClick={this.handleItemClick.bind(this, question)}
                                       question={question}
                                       key={question.id}/>;
          }.bind(this))
        }
      </div>
    );
  }
});
