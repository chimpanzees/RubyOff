function _getCurrentQuestion(id) {
  return QuestionStore.getQuestionById(id);
};

QuestionShow = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    var questionId = parseInt(this.props.params.questionId);
    var question = this._findQuestionById(questionId);
    return {
      question: question,
      solution: question.solution_default,
      tests: question.tests_default
    };
  },

  componentDidMount: function () {
    QuestionStore.addChangeListener(this._updateShow);
    SolutionStore.addChangeListener(this._updateSolutionResults);
    ApiUtil.fetchQuestions();
  },

  _updateShow: function () {
    // Need a way of updating the states
    var currentQuestion = _getCurrentQuestion(
      parseInt(this.props.params.questionId)
    );
    this.setState({
      question: currentQuestion,
      solution: currentQuestion.solution_default,
      tests: currentQuestion.tests_default
    })
    console.log("_updateShow was called.");
  },

  _findQuestionById: function (id) {
    var result;

    QuestionStore.all().forEach(function (question) {
      if (id === question.id) {
        result = question;
      }
    }.bind(this))

    return result;
  },

  _updateSolutionResults: function () {
    // The solution.results needs to change
  },

  runTests: function (event) {
    event.preventDefault();
    var questionSolutionTest = $.extend({},
      {question: this.state.question},
      {solution: this.state.solution},
      {tests: this.state.tests}
    )
    ApiUtil.runTests(questionSolutionTest);
    // Redirect? How to handle where the page goes
    console.log("running tests..")
  },

  handleSkip: function (event) {
    event.preventDefault();
    var nextId = QuestionStore.getNextQuestion(this.state.question.id);
    this.props.history.pushState(null, "questions/" + nextId);
    this._updateShow();
  },

  render: function () {
    return (
      <div className="question-show">
        <div className="question-show-title">
          Title: {this.state.question.title}
        </div><br/>

        <div className="question-show-author">
          By: {this.state.question.author.username}
        </div><br/>

        <div className="question-show-body">
          Question: {this.state.question.question}
        </div><br/>

        <form onSubmit={this.runTests}>
          <label>Your Solution: </label>
          <textarea className="question-show-solution"
                    valueLink={this.linkState('solution')}
                    rows="6"
                    cols="50"></textarea>
          <br/>
          <label>Your Test Cases</label>
          <textarea className="question-show-tests"
                    valueLink={this.linkState('tests')}
                    rows="6"
                    cols="50"></textarea>
          <br/>

          <input type="submit" value="Run tests"/>
        </form>
        <TestOutput className="question-show-solution-result"
                    solution={this.state.solution}
                    questionId={this.state.question.id}/>
        <button onClick={this.handleSkip}>Skip</button><br/>
        <button onClick={this.handleGiveUp}>Give Up</button><br/>
      </div>
    );
  }
});
