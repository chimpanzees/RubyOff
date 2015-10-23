Tag = React.createClass({
    render: function () {
      return (
        <div className="tag-filter-list-item" onClick={this.props.onClick}>
          {
            this.props.active ?
              <div className="tag-filter-list-item-title-active">
                {this.props.name}
              </div>
            :
              <div className="tag-filter-list-item-title-inactive">
                {this.props.name}
              </div>
          }
        </div>
      );
    }
  });
