# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## questions
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
title            | string    | not null
question         | text      | not null
author_id        | integer   | not null, foreign key (references users), indexed
solution_default | text      |
tests_default    | text      | not null

## solutions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
question_id | integer   | not null, foreign key (references questions), indexed
body        | text      | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
question_id | integer   | not null, foreign key (references questions), indexed

## votes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, (best practices or clever)
solution_id | integer   | not null, foreign key (references solutions), indexed
user_id     | integer   | not null, foreign key (references users), indexed

## Future

## followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followee_id | integer   | not null, foreign key (references users), indexed
