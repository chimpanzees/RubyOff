QuestionShow = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return {question: {}};
  },

  componentDidMount: function () {
    QuestionStore.addChangeListener(this._questionChanged);
    ApiUtil.fetchQuestionsAndSetCurrent(parseInt(this.props.params.questionId));
  },

  componentWillReceiveProps: function (newProps) {
    var question = this._findQuestionById(parseInt(newProps.params.questionId));
    this.setState({question: question})
  },

  _questionChanged: function () {
    var question = QuestionStore.currentQuestion();
    this.setState({question: question});
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
    event.preventDefault();
    ApiActions.receiveSkipRequest()
    var currentQuestion = QuestionStore.currentQuestion();
    this.history.pushState(null, "/questions/" + currentQuestion.id, {});
  },

  handleGiveUp: function (event) {
    event.preventDefault();
    var currentQuestion = QuestionStore.currentQuestion();
    this.history.pushState(null, "/solutions/" + currentQuestion.id, {});
  },

  handleBack: function (event) {
    event.preventDefault();
    this.history.pushState(null, "/", {});
  },

  render: function () {
    var author = this.state.question.author || {}
    return (
      <div className="question-show">
        <div className="question-show-title">
          Title: {this.state.question.title}
        </div><br/>

        <div className="question-show-author">
          By: {author.username}
        </div><br/>

        <div className="question-show-body">
          Question: {this.state.question.question}
        </div><br/>

        <SolutionForm question_id={this.state.question.id}
                      solution_default={this.state.question.solution_default}
                      tests_default={this.state.question.tests_default}
                      history={this.history}/>
        <button onClick={this.handleSkip}>Skip</button><br/>
        <button onClick={this.handleGiveUp}>Give Up</button><br/>
        <button onClick={this.handleBack}>Back</button><br/>
      </div>
    );
  }
});
