# RubyOff

<!-- [Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com -->

## Minimum Viable Product

RubyOff is a web application that makes learning to code a fun and interactive
process. It is built using Ruby on Rails and React.js. RubyOff allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Read coding questions and write solutions in a Ruby sandbox
- [ ] Run tests on their solutions within the sandbox
- [ ] Submit correct solutions and view other users' solutions
- [ ] Vote on problem solutions for being clever and/or done with best practices
- [ ] Write coding questions and corresponding tests to be made public
- [ ] Have great syntax highlighting in the sandbox
- [ ] Search for questions based on tags
- [ ] Follow individual users and filter solutions by following status (bonus)
- [ ] Pretty transitions and animations (bonus)

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Question/Solution Models and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for the coding questions.

[Details][phase-one]

### Phase 2: Flux Architecture and Question and Solution features (3.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, Question and Solution stores will be implemented and a set of actions
corresponding to the needed functionality created. After, I will create React
views for the Questions `Index` and `IndexItem` as well as the Solutions 'Index'.
At the end of Phase 2, Questions can be indexed and read in the browser, and
Solutions may be written in a Ruby sandbox within the question show view. The
sandbox will allow users to test their Solutions and submit them if they pass all
default tests.

[Details][phase-two]

### Phase 3: User following, Question creation, and Solution Voting (2 days)

Phase 3 allows for users to write their own coding questions to be added to the
site. There will be a 'New' view for users to do so, and allow them to create tags
for their questions which will later allow for a search/filter feature. Users will
be able to vote on Solutions as being either clever or best practices. Users will
also be able to follow other users based on their Solutions which will allow for
solutions to be sorted/filtered based on followed status.

[Details][phase-three]

### Phase 4: Style the application well and include syntax highlighting (1 day)

Make the site look great with CSS and include syntax highlighting and bonus features
like auto indentation.

[Details][phase-four]

### Phase 5: Question search, Answer filtering (1 day)

Phase 5 allows users to browse and search through the question-base by searching
and/or filtering results based on the tags that were created with each question.
This phase also sees the introduction of filtering answers based on the current
users followed user list. Lastly, I will add a significant number of questions
and answers to the site as seed data to better illustrate some of the site features.
Any remaining time will be spent making the site look better with animations and
CSS.

[Details][phase-five]

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
