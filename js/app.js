'use strict';

let username = prompt('What is your name?');
console.log('name is' + username);
alert('Hello,' + username);

let q1 = prompt('Do I live in Hawaii?').toLowerCase();
if (q1 === 'yes' || q1 === 'y'){
  //console.log('q1 correct');
  alert("You're correct!");
} else if (q1 === 'no' || q1 === 'n'){
  //console.log('q1 incorrect');
  alert('Sorry, you\'re incorrect');
}

let q2 = prompt('Do I like pizza?').toLowerCase();
if (q2 === 'yes' || q2 === 'y'){
  //console.log('q2 correct');
  alert("You're correct!");
} else if (q2 === 'no' || q2 === 'n'){
  //console.log('q2 incorrect');
  alert('Sorry, you\'re incorrect');
}

let q3 = prompt('Do I like running?').toLowerCase();
if (q3 === 'no' || q3 === 'n'){
  //console.log('q3 correct');
  alert("You're correct!");
} else if (q3 === 'yes' || q3 === 'y'){
  //console.log('q3 incorrect');
  alert('Sorry, you\'re incorrect');
}

let q4 = prompt('Am I 32 years old?').toLowerCase();
if (q4 === 'yes' || q4 === 'y'){
  //console.log('q4 correct');
  alert("You're correct!");
} else if (q4 === 'no' || q4 === 'n'){
  //console.log('q4 incorrect');
  alert('Sorry, you\'re incorrect');
}

let q5 = prompt('Do I play guitar?').toLowerCase();
if (q5 === 'yes' || q5 === 'y'){
  //console.log('q5 correct');
  alert("You're correct!");
} else if (q5 === 'no' || q5 === 'n'){
  //console.log('q5 incorrect');
  alert('Sorry, you\'re incorrect');
}

alert("Thank you for your answers, " + username);
