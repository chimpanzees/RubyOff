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
    ApiUtil.fetchQuestions();
  },

  _updateShow: function () {
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
    debugger;
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

        <form onSubmit={this.handleSubmit}>
          <label>Your Solution: </label>
          <textarea className="question-show-solution"
                    valueLink={this.linkState('solution')}></textarea>
          <br/>
          <label>Your Test Cases</label>
          <textarea className="question-show-tests"
                    valueLink={this.linkState('tests')}></textarea>
          <br/>

          <input type="submit" value="Submit"/>
        </form>
        <button onClick={this.handleSkip}>Skip</button><br/>
        <button onClick={this.handleGiveUp}>Give Up</button><br/>
      </div>
    );
  }
});
