'use strict'
document.getElementById('pic2').onclick=function(){

var counter = 0

alert("Game: answer with \'yes\' or \'no\'");

var questionOne = prompt('Would you guess that I\'m from Seattle?');
    if(questionOne.toLowerCase() === 'yes'){
        alert('That\'s right!');
        console.log('+1 correct answer');
        counter++;
    } else {
        alert('Wrong! You think rain is your ally? You merely adopted the rain. I was born in it, molded by it.');
        console.log('+0 correct answer'); 
    };
   
var questionTwo = prompt('Would you guess that I\'m 28?');
    if(questionTwo.toLowerCase() === 'yes'){
        alert('correct!');
        console.log('+1 correct answer');
        counter++;
    } else {
        alert('I am in fact 28 years old.');
        console.log('+0 correct answer');
        
    };

var questionThree = prompt('Do you think I would say that I\'m white?');
    if(questionThree.toLowerCase() === 'yes'){
        alert('Nah, programmer is my race.');
        console.log('+0 correct answer'); 
    } else {
        alert('That\'s right, my race is programmer.');
        console.log('+1 correct answer');
        counter++;
    };

var questionFour = prompt('Are all my tattoos red?');
    if(questionFour.toLowerCase() === 'yes'){
        alert('ding ding ding!');
        console.log('+1 correct answer');
        counter++; 
    } else {
        alert('BZZZZZZZ, they are all red.');
        console.log('+0 correct answer'); 
    };

var questionFive = prompt('Wanna be friends?');
    if(questionFive.toLowerCase() === 'yes'){
        alert('Hit me up on Slack!');
        console.log('+1 correct answer');
        counter++; 
    } else {
        alert('Psht. Whatever.');
        console.log('+0 correct answer'); 
    };    

    console.log('correct answers: ' + counter + '/5');
};