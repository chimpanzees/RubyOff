SolutionsIndexItem = React.createClass({
  handleBestPracticesVote: function (e) {
    e.preventDefault();
    ApiUtil.submitVote(
      "Best Practices",
      this.props.dataObject.solution.id,
      this.props.dataObject.solution.question_id
    );
  },

  handleCleverVote: function (e) {
    e.preventDefault();
    ApiUtil.submitVote(
      "Clever",
      this.props.dataObject.solution.id,
      this.props.dataObject.solution.question_id
    );
  },

  render: function () {
    var options = {
      lineNumbers: true,
      mode: "ruby",
      theme: "twilight",
      readOnly: true
    };

    var bpButtonValue = this.props.dataObject.best_practices_count + " Best Practices";
    var cButtonValue = this.props.dataObject.clever_count + " Clever";

    return (
      <div className="solutions-index-item">
        <div className="solutions-index-item-author">
          Author: {this.props.dataObject.username}
        </div>
        <ReactCodeMirror
          value={this.props.dataObject.solution.body}
          options={options}/>
        <input className="best-practices-vote"
               type="submit"
               onClick={this.handleBestPracticesVote}
               value={bpButtonValue}/>
        <input className="clever-vote"
               type="submit"
               onClick={this.handleCleverVote}
               value={cButtonValue}/>
      </div>
    );
  }
});
