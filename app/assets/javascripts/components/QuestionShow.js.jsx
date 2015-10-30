QuestionShow = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function () {
    return { question: {} };
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
    this.setState({question: currentQuestion});
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
    var question_id = this.state.question.id || -1
    var solution_default = this.state.question.solution_default || ""
    var tests_default = this.state.question.tests_default || ""

    return (
      <div className="question-show">
        <div className="question-show-information">
          <div className="question-show-title">
            {this.state.question.title}
          </div>

          <div className="question-show-author">
            {author.username}
          </div>

          <div className="question-show-body">
            {this.state.question.question}
          </div>
        </div>

        <div className="question-show-code">
          <SolutionForm
            question_id={question_id}
            solution_default={solution_default}
            tests_default={tests_default}
            history={this.history}
          />
          <input className="skip-button"
                 type="submit"
                 onClick={this.handleSkip}
                 value="Skip"/>
          <input className="give-up-button"
                 type="submit"
                 onClick={this.handleGiveUp}
                 value="Give Up"/>
          <input className="back-button"
                 type="submit"
                 onClick={this.handleBack}
                 value="Back"/>
        </div>
      </div>
    );
  }
});
