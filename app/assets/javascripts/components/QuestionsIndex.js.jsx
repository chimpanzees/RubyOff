function _getAllQuestions() {
  return QuestionStore.all();
}

function _getAllTags() {
  return TagStore.all();
}

QuestionsIndex = React.createClass({
  getInitialState: function () {
    return {questions: _getAllQuestions(), tags: _getAllTags(), activeTags: []};
  },

  _questionsChanged: function () {
    this.setState({questions: _getAllQuestions()});
  },

  _tagsChanged: function () {
    this.setState({tags: _getAllTags()});
  },

  componentDidMount: function () {
    QuestionStore.addChangeListener(this._questionsChanged);
    TagStore.addChangeListener(this._tagsChanged);
    ApiUtil.fetchQuestions();
    ApiUtil.fetchTags();
  },

  componentWillUnmount: function () {
    QuestionStore.removeChangeListener(this._questionsChanged);
    TagStore.removeChangeListener(this._tagsChanged);
  },

  handleItemClick: function (question) {
    this.props.history.pushState(null, "questions/" + question.id);
  },

  toggleTag: function (tag) {
    var index = this.state.activeTags.indexOf(tag);
    var newActiveTags;
    if (index === -1) {
      // Not an active tag
      newActiveTags = this.state.activeTags.concat([tag]);
    } else {
      // An active tag
      newActiveTags = this.state.activeTags.slice();
      newActiveTags.splice(index, 1);
      this.setState({activeTags: newActiveTags});
    }
    this.setState({activeTags: newActiveTags});
    ApiUtil.fetchQuestions(newActiveTags);
  },

  activeTag: function (tag) {
    return this.state.activeTags.indexOf(tag) !== -1;
  },

  render: function () {
    var handleItemClick = this.handleItemClick;
    var numQuestions = this.state.questions.length;
    return (
      <div className="question-index">
        <div className="tag-filter-list">
          <div className="tag-filter-list-title">Tags</div>
          {
            this.state.tags.map(function (tag) {
              return <Tag name={tag}
                          active={this.activeTag(tag)}
                          onClick={this.toggleTag.bind(this, tag)}/>;
            }.bind(this))
          }
        </div>
        <div className="question-index-header">
          <div className="question-index-label">
            {numQuestions}{numQuestions === 1 ? " Challenge" : " Challenges"} Found
          </div>
        </div>
        <div className="question-index-list">
          {
            this.state.questions.map(function (question) {
              return <QuestionsIndexItem
                onClick={this.handleItemClick.bind(this, question)}
                question={question}
                key={question.id}/>;
            }.bind(this))
          }
        </div>
      </div>
    );
  }
});
