# Project Requirements
[] The application must be an HTML, CSS, and JavaScript frontend
[] with Rails API backend
[] All interactions between the client and the server must be handled asynchronously(AJAX) 
[] and use JSON as the communication format
[] The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior
[] The domain model served by tht Rails backend must include a resource with at least one has-many relationship
[] The backned and frontend must collaborate to demonstrate Client-Server Communication.
[] Your application should have at least 3 AJAX calls,
        [] covering at least 2 of CRUD 
        [] Your client-side JavaScript code must use fetch with the appropriate HTTP verb
        [] and your Rails API should use RESTful convention

# JavaScript
[] Use classes and functions to organize your code into reusable pieces
[] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax
[] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax)

# Rails
[] Follow Rails MVC and RESTful conventions. That means e.g.
    [] a request GET/puppies out to be handled by the PuppiesController
    [] fetch puppies form the database using a Puppy ActiveRecord model, and return a list of puppies as JSON
[] Well-named variables and methods
[] Short, single-puprose methods

# Git
[] Aim for a large number of small commits - commit frequently!
[] Add meaningful messages to your commits.
    [] When you look back at your commits with git log, the messages should describe each change
[] Don't include changes in a commit athat aren't related to the commit message 
[]


#user model
    -username:string
    -email:string
    -name:string

#caloriecalculator