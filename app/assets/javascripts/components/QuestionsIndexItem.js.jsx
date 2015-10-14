QuestionsIndexItem = React.createClass({
  render: function () {
    return (
      <div className="question-index-item" onClick={this.props.onClick}>
        <div>Title: {this.props.question.title}</div>
        <div>by: {this.props.question.author.username}</div>
        <br/>
      </div>
    );
  }
});
