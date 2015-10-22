var RouteHandler = ReactRouter.RouteHandler;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var App = React.createClass({
  render: function(){
    return (
        <div className="app">
          {this.props.children}
        </div>
    );
  }
});

var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={QuestionsIndex}/>
      <Route path="questions/:questionId" component={QuestionShow}></Route>
      <Route path="solutions/:questionId" component={SolutionsIndex}></Route>
    </Route>
);

function StartApp () {
  React.render(<Router>{routes}</Router>, document.getElementById('main-app-content'));
}
