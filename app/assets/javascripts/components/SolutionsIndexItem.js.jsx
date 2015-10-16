SolutionsIndexItem = React.createClass({
  render: function () {
    return (
      <div className="solution-index-item">
        <label>Body: </label>
        <textarea rows="6"
                  cols="50"
                  disabled="true"
                  value={this.props.solution.body}></textarea>
        <br/>
        <div>by: {this.props.solution.author_id}</div>
        <br/>
      </div>
    );
  }
});
