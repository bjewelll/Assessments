### Week 3 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:


- React is a modern, efficient answer to complex UI applications
- React is a flexible library that plays the role of V in an MVC framework


 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.


 //Your Answer i think its like the mvc were the view is not very smart and the model holds all the logis then send it to the controller


 //Googled Answer

Smart Component Characteristics
Describe how things work
Provide no DOM markup or styles
Provide application data, do data fetching
Call Flux actions
Named Container by convention

Dumb Component Characteristics
Describe how things look
Have no app dependencies
Receive only props, providing data and callbacks
Rarely have own state, when they do, it’s just UI state
Named anything that’s a UI noun


#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?


 //Your Answer yarn is a package manager im not sure why we need it


 //Googled Answer
 In package.json, the file where both npm and Yarn keep track of the project’s dependencies, version numbers aren’t always exact. Instead, you can define a range of versions. This way you can choose a specific major and minor version of a package.

#### 4. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends component{
      constructor(props){
        super(props)
        this.state = {
          recipes: [
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}
          ]
        }
      }

      render() {



          let recipes = this.state.recipes.map(function(recipe){
            return(
              <li key={recipe.name}>{recipe.name}</li>
            )
          })
        return (
          <ul>
            {recipes}
          </ul>
        );
      }
    }

    export default Recipes;

#### 5. Name three html form input types. (NOTE: text is the default type - so it doesn't count in this case)

 //Your Answer
 sumbit
 reset
 button


 //Googled Answer
 color
date
datetime-local
email
month
number
range
search
tel
time
url
week


 #### 6. What happens when we call setState()?

 //Your Answer it changes the original state of the state almost like making a copy of something and then changing the copy or adding something to the copy



 //Googled Answer
setState not only calls the render() function but after setState, the following lifecycle functions will run in order depending on what shouldComponentUpdate returns

 #### 7. What is the difference between component state and props? Your answer should include a short explanation of both.


 //Your Answer from my understanding its the difference in something that can be changed state can be changed but props cant.


 //Googled Answer
A state in React Component is its own local state, the state cannot be accessed and modified outside the component and can only be used inside the component which is very similar to, you already guessed it a function own local scope. We can define variables inside the function which can only be used inside the function block scope.

#### 8. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
i worked on my own it was a good experience. i didnt really know what i was doing but i will gain the knowledge with reps. 


#### 9. Write the Rules of React we talked about in class and try to give one or two reasons for each rule about why it is important or good to follow the rule.
im out sure how to answer this question
#### 10. Do at least 5 exercises on Free Code Camp, starting with this one: https://www.freecodecamp.org/challenges/declare-javascript-objects-as-variables
