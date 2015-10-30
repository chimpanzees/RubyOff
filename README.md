![logo]
[Live site][liveLink]
[liveLink]: http://www.rubyoff.xyz
RubyOff is a web application that makes learning to code a fun and interactive process by letting users attempt coding problems in an interactive console. It is built using Ruby on Rails and React.js and runs foreign code in a secure and controlled sandbox. If users solve the question correctly, their solutions are posted and made public where they may be voted on for being clever or done with best practices.

## Features
- [x] Create an account
- [x] Log in / Log out
- [x] Read coding questions and write solutions in a Ruby sandbox
- [x] Run tests on their solutions within the sandbox
- [x] Submit correct solutions and view other users' solutions
- [x] Vote on problem solutions for being clever and/or done with best practices
- [x] Filter questions with integrated tags
- [x] Have great syntax highlighting in the sandbox

## TODO
- [ ] Allow for question searching based on tags and titles
- [ ] Allow users to write their own coding questions
- [ ] Let users follow other users and sort solutions and questions by following status
- [ ] Group similar solutions together so that only one is shown

## Screenshots
Code may be edited and run within the app. RubyOff catches common errors such as syntax errors and infinite loops.
![question]

Other users can submit valid solutions to problem which can then me voted on.
![solutions]

## Design Documents
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md
[question]: ./app/assets/images/question.png
[solutions]: ./app/assets/images/solutions.png
[logo]: ./app/assets/images/logoLight.png
