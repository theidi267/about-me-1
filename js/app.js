'use strict'
// document.getElementById('pic2').onclick=function(){

var counter = 0

//introduction

function introduction(){

    var userName = prompt("Hey! I\'m Jason. I made this page about myself. Who are you?");

    alert('Nice to meet you ' + userName + '. ');

    alert('Ok, so I\'ve made a yes or no guessing game out of these prompts and alerts, cool right?');

    alert('If you get a question right, you get a point. If you get it wrong, ya don\'t! yes or no:');

    window.userName = userName
};

introduction();

//Question 1
var questionOne = prompt('Would you guess that I\'m from Seattle?');

    while (questionOne.length <1){
        alert('you did not answer');
        questionOne = prompt('Would you guess that I\'m from Seattle?');
    };

    if(questionOne.toLowerCase() === 'yes'){
        alert('It\'s true, I am.');
        console.log('+1');
        counter++;
    } else {
        alert('I am, actually. As a Seattlite I was born in the rain, molded by it.');
        console.log('+0'); 
    };

//Question 2
var questionTwo = prompt('Would you guess that I\'m 28?');

    while (questionTwo.length <1){
        alert('you did not answer');
        questionTwo = prompt('Would you guess that I\'m 28?');
    };

    while (questionTwo.length <1){
    alert('you did not answer');
    ageGuess = prompt ('question about age');
    };
    
    if(questionTwo.toLowerCase() === 'yes'){
        alert('Yes? You would be right!');
        console.log('+1');
        counter++;
    } else {
        alert('I am 28 years old, it\'s true. Getting old now. Sigh.');
        console.log('+0');
        
    };

//Question 3
var questionThree = prompt('Am I programmer?');

    while (questionThree.length <1){
        alert('you did not answer');
        questionThree = prompt('Am I programmer?');
    };

    if(questionThree.toLowerCase() === 'yes'){
        alert('Yes It\'s true! I programmed this!');
        console.log('+1'); 
        counter++;
    } else {
        alert('Wrong, how do you think THIS page got here?! HA');
        console.log('+0');
    };

//Question 4
var questionFour = prompt('Would you suppose I\'m dog friendly?');

    while (questionFour.length <1){
        alert('you did not answer');
        questionFour = prompt('Would you suppose I\'m dog friendly?');
    };

    if(questionFour.toLowerCase() === 'yes'){
        alert('It\'s true I love dogs. More than people sometimes. Usually.');
        console.log('+1');
        counter++; 
    } else {
        alert('No way, I love doggos.');
        console.log('+0'); 
    };

//Question 5
var questionFive = prompt('Wanna be friends?');

    while (questionFive.length <1){
        alert('you did not answer');
        questionFive = prompt('Wanna be friends?');
    };

    if(questionFive.toLowerCase() === 'yes'){
        alert('You should hit me up on Slack');
        console.log('+1');
        counter++; 
    } else {
        alert('Ok, see you around :)');
        console.log('+0'); 
    };    

//Question 6
for(var sixLoop = 0; sixLoop < 4; sixLoop++) {

var questionSix = parseInt(prompt('You get four guesses, what is my favorite number? HINT: it\'s three digits.'));
    
    if(questionSix > 315){
        alert('Lower, guess again.');
        
    } else if (questionSix < 315){
        alert('Higher, guess again.');
       
    } else {
        alert('Wow, you guessed it. The ides of March!')
        counter++;
        break;
    };
};

//Question 7
var counterState = 0;
var correct = false;
var myStates = ['washington', 'florida', 'south Carolina', 'alaska'];

//TODO counterState < 24 yeilds 6 guesses. why? magic.. [ the loop in loop has something to do with this? ]
while (correct === false && counterState < 24){
    var theirGuess = (prompt('Can you guess a state that I have lived in besides Washington?')).toLowerCase();
    for (var i = 0; i < myStates.length; i++) {
        if (myStates[i] === theirGuess && theirGuess !=null) { //Attention to this null, working?
            console.log(i);
            alert('Nice Guess!');
            console.log(counterState + ' attempts made');
            correct=true;
            counter++;
            break;
          }
          else {
            console.log(counterState + 'attempts made');
            counterState++;
          }
    } //for close
} //while close

if(correct === false ) {
    alert('Florida would have been a good guess, but there\'s no place like home.');
       }
        
    alert('Thanks for playing! ' + window.userName + ' you got ' + counter + '/7 correct!');
    console.log('correct answers: ' + counter + '/7');

// };