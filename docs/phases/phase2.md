# Phase 2: Flux Architecture and Question and Solution features (2.5 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* QuestionsIndex
  - QuestionsIndexItem
* QuestionShow
* SolutionsIndex (for individual question)
  - SolutionsIndexItem

### Stores
* Question
* Solution

### Actions
* ApiActions.receiveAllQuestions
* ApiActions.receiveSingleQuestion
* ApiActions.deleteQuestion
* ApiActions.receiveAllSolutions

### ApiUtil
* ApiUtil.fetchAllQuestions
* ApiUtil.fetchSingleQuestion
* ApiUtil.fetchAllSolutions
* ApiUtil.createSolution

## Gems/Libraries
* Flux Dispatcher
* Shikashi (Ruby sandbox gem)
