QuestionShow = React.createClass({
  getInitialState: function () {
    var questionId = parseInt(this.props.params.questionId);
    var question = this._findQuestionById(questionId) || {};
    return {question: question};
  },

  componentDidMount: function () {
    QuestionStore.addChangeListener(this._questionChanged);
    ApiUtil.fetchQuestions();
  },

  _questionChanged: function () {
    var questionId = parseInt(this.props.params.questionId)
    // TODO: eliminate parseInt ^^
    var question = this._findQuestionById(questionId);
    this.setState({question: question})
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

  handleSkip: function (event) {
    // TODO: improve by not sending id to store
    event.preventDefault();
    var nextId = QuestionStore.getNextQuestion(this.state.question.id);
    this.props.history.pushState(null, "questions/" + nextId);
    this._questionChanged();
  },

  handleGiveUp: function (event) {
    event.preventDefault();
    // TODO
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

        <SolutionForm question_id={this.state.question.id}
                      solution_default={this.state.question.solution_default}
                      tests_default={this.state.question.tests_default}/>
        <button onClick={this.handleSkip}>Skip</button><br/>
        <button onClick={this.handleGiveUp}>Give Up</button><br/>
      </div>
    );
  }
});
