QuestionsIndexItem = React.createClass({
  render: function () {
    return (
      <div className="question-index-item" onClick={this.props.onClick}>
        <div className="question-index-item-title">
          {this.props.question.title}
        </div>
        <div className="question-index-item-author">
          {this.props.question.author.username}
        </div>
      </div>
    );
  }
});
