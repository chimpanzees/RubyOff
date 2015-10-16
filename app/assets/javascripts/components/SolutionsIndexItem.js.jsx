SolutionsIndexItem = React.createClass({
  render: function () {
    return (
      <div className="solution-index-item">
        <div>Body: {this.props.solution.body}</div>
        <div>by: {this.props.solution.author_id}</div> //Make show username
        <br/>
      </div>
    );
  }
});
