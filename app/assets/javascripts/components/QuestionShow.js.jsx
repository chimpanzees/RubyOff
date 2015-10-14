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
  },

  render: function () {
    return (
      <div className="question-show">
        <div className="question-show-title">{this.props.question.title}</div>
        <div className="question-show-author">{this.props.question.author.username}</div>
        <div className="question-show-body">{this.props.question.body}</div>
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
