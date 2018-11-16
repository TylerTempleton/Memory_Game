//
//Name:  Tyler Templeton
//Assignment:  Assignment 1 memory game HARDCORE
//Date: [June 21th, 2015]
//page description: js is the file containing the required java script 
//to shuffle flip the cards and reset the board
//[a blank line]-->

/* Global Variables */
var choice;    //counts how many choices have been made 
choice = 0;
var choice1;    //stores index of first card picked
var choice2;   //stores index of second card picked
var choice3;   //stores index of third card picked
var choice4;   //stores index of fourth card picked
var counter = 0;     //counts matches made
var numAttempts = 0; //counts attempts made
var backcard ="img/nyaa.png";    //shows back of card when turned over
var numOfMatches= 5;
var faces = [];   //array to store card images
faces[0] = 'img/bub.jpg';
faces[1] = 'img/bub.jpg';
faces[2] = 'img/mustache.jpg';
faces[3] = 'img/mustache.jpg';
faces[4] = 'img/bub.jpg';
faces[5] = 'img/bub.jpg';
faces[6] = 'img/hover.jpg';
faces[7] = 'img/hover.jpg';
faces[8] = 'img/hover.jpg';
faces[9] = 'img/hover.jpg';
faces[10] = 'img/mustache.jpg' ;
faces[11] = 'img/mustache.jpg';
faces[12] = 'img/laptopcat.jpg';
faces[13] = 'img/laptopcat.jpg';
faces[14] = 'img/laptopcat.jpg';
faces[15] = 'img/laptopcat.jpg';
faces[16] = 'img/grumpy.jpg';
faces[17] = 'img/grumpy.jpg';
faces[18] = 'img/grumpy.jpg';
faces[19] = 'img/grumpy.jpg';


/* Responds to click on a table cell indicating card selected */
function choose(card) {
 

if (choice===0) {   //if first pick, identify card selected
  choice1=card;
  document.images[card].src = faces[card];
  choice = 1;    //one pick made
 // console.log(choice1);
 return choice1;
  }
if
  (choice === 1){   //second pick, identify card selected
  choice2 = card;
  document.images[card].src =faces[card];
  choice=2;
  //console.log(choice2);
  return choice2;
   }
 if
  (choice === 2){   //third pick, identify card selected
  choice3 = card;
  document.images[card].src =faces[card];
  choice=3;  
  //console.log(choice3);
  return choice3;
  }
  if
    
    (choice === 3)  { //fourth pick, identify card selected
  choice4 = card;
  document.images[card].src =faces[card];
  choice=4;
  //console.log(choice4);
  
   tid=setInterval("checker()",1000); //use timer to pause so user can see selections
   return choice4;
}}

/* Checks to see if a match is made */
function checker() {
 clearInterval(tid); //stops timer
 numAttempts++;   //adds 1 to attempts
 document.getElementById("attempts").innerHTML = numAttempts; //display number of attempts
 if (choice===4){
 if (faces[choice1] === faces[choice2] && faces[choice1] === faces[choice3] && faces[choice1] === faces[choice4]) {//if a match is selected
     counter++;    //adds an increment to matches
     if (counter === numOfMatches) {  //if matches made = maximum possible matches, display message
          alert("You won.\n It took you " + numAttempts + " tries.\n Refresh the page or press restart to play again.");
         }
     choice = 0;
      return ;
    }
  else {  //if no match made, turn cards back over
    document.images[choice1].src = backcard;
    document.images[choice2].src = backcard;
    document.images[choice3].src = backcard;
    document.images[choice4].src = backcard;
    choice = 0;
    return ;
       }      
}}
faces = shuffle(faces);
function shuffle(dealer){
function shuffle() {}
  for(var j, x, i = dealer.length; i; j = Math.floor(Math.random() * i), x = dealer[--i], dealer[i] = dealer[j], dealer[j] = x);
    return dealer;
      };
function reset(){
    location.reload(); //restarts page and game
}