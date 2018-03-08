'use strict'
// document.getElementById('pic2').onclick=function(){

var counter = 0

var userName = prompt("Hey! I\'m Jason. I made this page about myself. Who are you?");
alert('Nice to meet you ' + userName + '. ');

alert('');

var questionOne = prompt('Would you guess that I\'m from Seattle?');
    if(questionOne.toLowerCase() === 'yes'){
        alert('It\'s true, I am.');
        console.log('+1');
        counter++;
    } else {
        alert('I am, actually. As a Seattlite I was born in the rain, molded by it.');
        console.log('+0'); 
    };
   
var questionTwo = prompt('Would you guess that I\'m 28?');
    if(questionTwo.toLowerCase() === 'yes'){
        alert('Yes? You would be right!');
        console.log('+1');
        counter++;
    } else {
        alert('I am 28 years old, it\'s true. Getting old now. Sigh.');
        console.log('+0');
        
    };

var questionThree = prompt('Am I programmer?');
    if(questionThree.toLowerCase() === 'yes'){
        alert('Yes It\'s true! I programmed this!');
        console.log('+1'); 
        counter++;
    } else {
        alert('Wrong, how do you think THIS page got here?! HA');
        console.log('+0');
    };

var questionFour = prompt('Would you suppose I\'m dog friendly?');
    if(questionFour.toLowerCase() === 'yes'){
        alert('it\'s true I love dogs. More than people sometimes. Usually.');
        console.log('+1');
        counter++; 
    } else {
        alert('No way, I love doggos.');
        console.log('+0'); 
    };

var questionFive = prompt('Wanna be friends?');
    if(questionFive.toLowerCase() === 'yes'){
        alert('Hit me up on Slack!');
        console.log('+1');
        counter++; 
    } else {
        alert('Ok, see you around :)');
        console.log('+0'); 
    };    

    console.log('correct answers: ' + counter + '/5');
// };