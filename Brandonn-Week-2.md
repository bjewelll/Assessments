### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer string
                boolean
                null
                undefined


  //Googled Answer string
                   boolean
                   null
                   undefined
                   number
                   symbol


#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess: 'inside'

Then, past the code in your console and explain why you were right/wrong. it logs undefined



#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
its transfers javascript into a text were the servers can read it.

  //Googled Answer
  JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer a closer of a function like a end, },or </>.


  //Googled Answer
  A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables


#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = assignment operator
  == can compare values between two variables
  === used to compare values and type

  //Googled Answer
  assignment operator (=)
  ==	equal to
  ===	equal value and equal type
