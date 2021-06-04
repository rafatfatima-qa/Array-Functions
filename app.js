/* PUSH, POP, SHIFT, UNSHIFT */
function displayFlowersArray(){
        let flowers = ['Daisy', 'Sunflower', 'Rose', 'Tulip', 'Jasmine'];
        document.getElementById("container1").innerHTML = flowers;

}
let flowers = ['Daisy', 'Sunflower', 'Rose', 'Tulip', 'Jasmine'];  

//push a new flower
function pushFlower(){

flowers.push(document.querySelector("input").value);  
document.getElementById("container1").innerHTML = flowers;

}

//pop last flower
function popFlower(){
        flowers.pop();
        document.getElementById("container1").innerHTML = flowers;
}

//SHIFT: Remove first array element
function shiftFlower(){

        flowers.shift();
        document.getElementById("container1").innerHTML = flowers;
}

//UNSHIFT: Add elements to Start
function unshiftFlower(){

        flowers.unshift(document.querySelector("input").value);  
        document.getElementById("container1").innerHTML = flowers;

}
/* ******************************************************************************************************** */

/* toString FUNCTION */
let games = ['Cricket', 'Football', 'Hockey', 'Chess'];
let numbers = [2, 4, 2, 2, 0, 3];

function displayGamesArray(){
        
     document.getElementById("container2").innerHTML = games;
 
}

function convertGamesToString(){

document.getElementById("container3").innerHTML = games.toString();

}

function displayNumbersArray(){
        
        document.getElementById("container2").innerHTML = numbers;
    
   }
   
   function convertNumbersToString(){
   
   document.getElementById("container3").innerHTML = numbers.toString();
   
   }

/* ******************************************************************************************************** */

/* splice() FUNCTION */
let words =  ['Using','splice','method','for','the','first','time'];

function displayWordsArray(){
        
        document.getElementById("container4").innerHTML = words;

}

function spliceWords(){
       
        words.splice(1, 1, "Array");
        words.splice(5,1,"Second");
        
        document.getElementById("container4").innerHTML = words;

}


