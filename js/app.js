'use strict'
document.getElementById('pic2').onclick=function(){

var questionOne = prompt('Would you guess that I\'m from Seattle?');
    if(questionOne.toLowerCase() === 'yes'){
        alert('That\'s right!');
        console.log('+1 correct answer') 
    } else {
        alert('Ah you think rain is your ally? You merely adopted the rain. I was born in it, molded by it.');
        console.log('+0 correct answer') 
    };
   
var questionTwo = prompt('Am I older than 30?');
    if(questionTwo.toLowerCase() === 'yes'){
        alert('wrong..');
        console.log('+0 correct answer') 
    } else {
        alert('That\s right! I\'m 28 until March 15');
        console.log('+1 correct answer') 
    };

var questionThree = prompt('Would you say I\'m white?');
    if(questionThree.toLowerCase() === 'yes'){
        alert('Nah, just a programmer');
        console.log('+0 correct answer') 
    } else {
        alert('That\'s right, I\'m just a programmer.');
        console.log('+1 correct answer') 
    };

var questionFour = prompt('Are all my tattoos red?');
    if(questionFour.toLowerCase() === 'yes'){
        alert('ding ding ding!');
        console.log('+1 correct answer') 
    } else {
        alert('BZZZZZZZ');
        console.log('+0 correct answer') 
    };

var questionFive = prompt('want to be friends?');
    if(questionFive.toLowerCase() === 'yes'){
        alert('Hit me up on Slack!');
        console.log('+1 correct answer') 
    } else {
        alert('Psht. Whatever.');
        console.log('+0 correct answer') 
    };    
};