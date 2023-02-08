'use strict';

let score=0;

let username = prompt('What is your name?');
console.log('name is' + username);
alert('Hello,' + username);

let q1 = prompt('Do I live in Hawaii?').toLowerCase();
if (q1 === 'yes' || q1 === 'y'){
  //console.log('q1 correct');
  alert("You're correct!");
  score++;
} else if (q1 === 'no' || q1 === 'n'){
  //console.log('q1 incorrect');
  alert('Sorry, you\'re incorrect');
}

let q2 = prompt('Do I like pizza?').toLowerCase();
if (q2 === 'yes' || q2 === 'y'){
  //console.log('q2 correct');
  alert("You're correct!");
  score++;
} else if (q2 === 'no' || q2 === 'n'){
  //console.log('q2 incorrect');
  alert('Sorry, you\'re incorrect');
}

let q3 = prompt('Do I like running?').toLowerCase();
if (q3 === 'no' || q3 === 'n'){
  //console.log('q3 correct');
  alert("You're correct!");
  score++;
} else if (q3 === 'yes' || q3 === 'y'){
  //console.log('q3 incorrect');
  alert('Sorry, you\'re incorrect');
}

let q4 = prompt('Am I 32 years old?').toLowerCase();
if (q4 === 'yes' || q4 === 'y'){
  //console.log('q4 correct');
  alert("You're correct!");
  score++;
} else if (q4 === 'no' || q4 === 'n') {
  //console.log('q4 incorrect');
  alert('Sorry, you\'re incorrect');
}

let q5 = prompt('Do I play guitar?').toLowerCase();
if (q5 === 'yes' || q5 === 'y') {
  //console.log('q5 correct');
  alert("You're correct!");
  score++;
} else if (q5 === 'no' || q5 === 'n') {
  //console.log('q5 incorrect');
  alert('Sorry, you\'re incorrect');
}

for (let i = 0; i < 4; i++) {
  let q6 = prompt('Guess a number that I am thinking of. You have four tries.');
  let q6num = parseInt(q6);
  if (q6num < 5) {
    alert("Too low");
  } else if (q6num > 5) {
    alert("Too high");
  } else {
    alert("Correct!");
    score++;
    break;

  }
}

alert('The correct answer is 5.');

let brands = ['gibson', 'mcpherson', 'fender', 'd\'angelico', 'duesenburg', 'abasi', 'taylor', 'martin', 'g&l', 'carvin'];

for (let i = 0; i < 6; i++) {
  let q7 = prompt('Name one of my favorite guitar brands, you have 6 tries.').toLowerCase();

  for (let i = 0; i < brands.length; i++){
    if(brands[i] === q7){
      q7 = true;
    }else{
      q7 = false;
    }
  }
  if (q7 === true) {
    alert("This is correct.");
    score++;
    break;
  } else {
    alert("wrong.");
  }
}

alert("Thank you for your answers, " + username + ". Your score is " + score + " out of 7.");

