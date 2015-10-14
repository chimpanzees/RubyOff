function _getAllQuestions() {
  return QuestionStore.all();
}

QuestionsIndex = React.createClass({
  getInitialState: function () {
    return { questions: _getAllQuestions() };
  },

  handleItemClick: function (question) {
    this.props.history.pushState(null, "questions/" + question.id);
  },

  render: function () {
    var handleItemClick = this.handleItemClick;
    return (
      <div className="question-index">
        <h2>Index</h2>
        {
          this.state.questions.map(function (question) {
            var boundClick = handleItemClick.bind(this, question);
            return <QuestionsIndexItem onClick={boundClick} question={question} key={question.id}/>;
          })
        }
      </div>
    );
  }
});
