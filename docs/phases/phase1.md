# Phase 1: User Authentication, Question/Solution Models and JSON API

## Rails
### Models
* User
* Question
* Solution

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* Api::QuestionsController (create, destroy, index, show)
* Api::SolutionsController (create, index)

### Views
* users/new.html.erb
* session/new.html.erb
* questions/index.json.jbuilder
* questions/show.json.jbuilder
* solutions/index.json.jbuilder

## Flux
### Views (React Components)

### Stores

### Actions

### ApiUtil

## Gems/Libraries
* BCrypt
