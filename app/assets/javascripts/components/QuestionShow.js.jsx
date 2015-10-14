QuestionShow = React.createClass({
  getInitialState: function () {
    var questionId = this.props.params.questionId;
    var question = this._findQuestionById(questionId);
    return {
      question: question,
      solution: question.solution_default,
      tests: question.tests_default
    };
  },

  componentDidMount: function () {
    QuestionStore.addChangeListener(this._updateShow);
    ApiUtil.fetchQuestions(); //??
  },

  _updateShow: function () {

  },

  _findQuestionById: function (id) {
    var result;

    QuestionStore.all().forEach(function (question) {
      if (id === quesiton.id) {
        result = quesiton;
      }
    }.bind(this))

    return result;
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var questoinSolutionTest = $.extent({},
      {question: this.state.question},
      {solution: this.state.solution},
      {tests: this.state.tests} // right now, always defualt tests
    )
    ApiUtil.handleSubmit(questionSolutionTest);
    // Redirect? How to handle where the page goes
    console.log("running tests..")
  },

  handleSkip: function (event) {
    event.preventDefault();
    var nextId = QuestionStore.getNextQuestion(this.state.question.id);
    this.props.history.pushState(null, "questions/" + nextId);
  },

  render: function () {
    return (
      <div className="question-show">
        <div className="question-show-title">{this.props.question.title}</div>
        <div className="question-show-author">{this.props.question.author.username}</div>
        <div className="question-show-body">{this.props.question.body}</div>
        <div className="question-show-tests">{this.props.question.tests_default}</div>
        <form onSubmit={this.handleSubmit}>
          <label>Your Solution</label>
          <input type="text" valueLink={this.linkState('solution')}/>
          <br/>
          // <label>Your Test Cases</label>
          // <input type="text" valueLink={this.linkState('tests')}/>
          // <br/>
          <input type="submit" value="Submit"/>
        </form>
        <button onClick={this.handleSkip}>Skip</button>
        <button onClick={this.handleGiveUp}>Give Up</button>
      </div>
    );
  }
});
