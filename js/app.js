'use strict'
// document.getElementById('pic2').onclick=function(){

var counter = 0

var userName = prompt("Hey! I\'m Jason. I made this page about myself. Who are you?");
alert('Nice to meet you ' + userName + '. ');

alert('Ok, so I\'ve made a yes or no guessing game out of these prompts and alerts, cool right?');
alert('If you get a question right, you get a point. If you get it wrong, ya don\'t! yes or no:');
//Question 1
var questionOne = prompt('Would you guess that I\'m from Seattle?');
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

while (correct === false && counter < 6){
    var theirGuess = (prompt('Can you guess a state that I have lived in besides Washington?')).toLowerCase();
    for (var i = 0; i < myStates.length; i++) {
        if (myStates[i] === theirGuess) {
            console.log(i);
            alert('Nice Guess!');
            counterState++;
            console.log(counterState + ' tries to answer');
            correct=true;
            counter++;
            break;
          }
          else {
            console.log(counterState + 'Nope! Guess again.');
            counterState++;
          }
    } //for close
} //while close

if(correct === false ) {
    alert('none guessed properly');
       }
        
    



    alert('Thanks for playing! ' + userName + ' you got ' + counter + '/6 correct!');
    console.log('correct answers: ' + counter + '/6');


// };