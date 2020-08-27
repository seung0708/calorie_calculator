# Project Requirements
[x] The application must be an HTML, CSS, and JavaScript frontend
[x] with Rails API backend
[x] All interactions between the client and the server must be handled asynchronously(AJAX) 
[x] and use JSON as the communication format
[x] The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior
[x] The domain model served by tht Rails backend must include a resource with at least one has-many relationship
[x] The backend and frontend must collaborate to demonstrate Client-Server Communication.
[x] Your application should have at least 3 AJAX calls,
        [x] covering at least 2 of CRUD 
        [x] Your client-side JavaScript code must use fetch with the appropriate HTTP verb
        [x] and your Rails API should use RESTful convention

# JavaScript
[x] Use classes and functions to organize your code into reusable pieces
[] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax
[] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax)

# Rails
[x] Follow Rails MVC and RESTful conventions. That means e.g.
    [x] a request GET/puppies out to be handled by the PuppiesController
    [s] fetch puppies form the database using a Puppy ActiveRecord model, and return a list of puppies as JSON
[x] Well-named variables and methods
[x] Short, single-puprose methods

# Git
[] Aim for a large number of small commits - commit frequently!
[] Add meaningful messages to your commits.
    [] When you look back at your commits with git log, the messages should describe each change
[] Don't include changes in a commit that aren't related to the commit message 
[]


table 
    button that displays the table of calories by gender
    some kind of classification


-maybe have total_calories in the Goal object.
-instead of activity_level, actually have a goal attribute (e.g. "exercise 1-2 times a week")
-calculate :total_calories in Goals. 
-display the current users goals and not someone else's 

take the users info and calculate their BMI
from there I create a new form where I take their weight loss goal and 