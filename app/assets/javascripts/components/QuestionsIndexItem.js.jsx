QuestionsIndexItem = React.createClass({
  render: function () {
    return (
      <div className="question-index-item" onClick={this.props.onClick}>
        <div>{this.props.question.title}</div>
        <div>{this.props.question.author.username}</div>
      </div>
    );
  }
});
