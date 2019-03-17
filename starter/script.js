// Game is about fixed gear bicycles and putting togethether a customised bicycle before testing one's skills on a crit lap.
// Start by getting the player's name. 

var userName = prompt("Welcome to Wacky Wheels. A game that revolves around riding bicycles. Please enter your name to start playing!");
// console.log(userName);

// "Thanks for entering your name. Please confirm it is " + userName + ".");

// function eventHandler (confirm) {
// 	if (confirm.type === "Yes") {
// 		alert("Thanks!");
// 	} else (confirm.type !== "Yes"); {
// 		prompt("Please edit your name.");
// 		}
// }

if (confirm("Thanks for entering your name. Please confirm it is " + userName + ".") == true) {
	userName = "Great, time to move on!";
} else {
	userName = prompt("Please enter your name again");
}

// Now let the user choose what type of riding they want to do. They can choose between Road, Track and Fixie riding.

// var riding = prompt("Now you get to choose what kind of cycling you'd like to do! You can choose road cycling, track cycling and fixed gear (fixie) riding.");
// function chooseRidingType (riding) {
	// var riding = ["road", "track", "fixed"];
// for (r=0; r < riding.length; r++) {
	// var riding = ["road", "track", "fixed"];
	// 	if (riding === "road cycling" || riding === "road") {
	// 		riding = alert("Great! Hope you're excited to get on the road.");
	// 	} else if (riding === "track cycling" || riding === "track") {
	// 		riding = alert("Great! Hope you're ready to get on the velodrome.");
	// 	} else if (riding === "fixed gear cycling" || riding === "fixed" || riding === "fixie") {
	// 		riding = alert("Great! Hope you're ready to get on the track.");
	// 	} else {
	// 		riding = prompt("Please choose one from road cycling, track cycling and fixed gear (fixie) riding.");
	// 	} 
// var text;
// var riding = prompt("Now you get to choose what kind of cycling you'd like to do! You can choose road cycling, track cycling or fixed gear (fixie) riding.");
// switch(riding) {
// 	case ("road" || "road cycling" || "roadie"):
// 		text = alert("Great! Hope you're excited to get on the road.");
// 		break;
// 	case ("track" || "track cycling"):
// 		text = alert("Great! Hope you're ready to ride in the velodrome.");
// 		break;
// 	case ("fixed gear" || "fixie" || "fixed gear cycling"):
// 		text = alert("Daredevil... Hope you know how to skid!");
// 		break;
//   	default:
//   		text = prompt("Please choose from road cycling, track cycling and fixed gear (fixie) riding.");
//   		break;
// }

// To begin, let the user choose their size of bicycle. Options are XS, S, M, or L.

var frameSize = prompt("Begin by choosing a size for your bicycle. Choose between XS, S, M or L.");
// console.log(frameSize);

if (confirm("You have chosen size " + frameSize + ".") == true) {
	frameSize = alert("Awesome! Now to customize your new bike!");
} else {
	frameSize = prompt("Let's choose that bike size again.");
}

// Time to choose a color for the frame of the bike!!

// var frameColor = prompt("The fun part begins. Choose a color."); 

// if (confirm("You have chosen color " + frameColor + ".") == true) {
// 	frameColor = alert("Great choice! Let's move on to choosing the other bits of the bike.");
// } else {
// 	frameColor = prompt("Sorry, please choose a color.");
// }

// Next, choose a groupset for your bike. 

// var groupsetChoice = prompt("Onto the technical part. Choose a groupset for your bike from the choice of Shimano, SRAM or Campagnolo.");
// var groupset = ["Shimano", "SRAM", "Campagnolo"];

// if (groupsetChoice === groupset) {
// 	groupsetChoice = alert("Sweet choice!"); 
// } else {
// 	groupsetChoice = prompt("Sorry, we don't have availability for that. Please choose from Shimano, SRAM or Campagnolo.");
// }

// Now to choose a bunch of things at once. Need to create a list of objects/ arrays that will basically go down different paths depending on the user's selection. 
// 1) What sort of riding would you like to do? 
// => 3 choices: road, track, fixie
// 2) What frame brand would you like?
// 3) What type of material would you like your bike to be made of? 
// 4) What color(s) would you like for your frame ?
// 5) What groupset would you like to put on the bike?

var cycling = [{
	"kind": "road",
	"frameBrand": ["Cannondale", "Canyon", "Specialized", "Trek"],
	"frameMaterial": ["alumnium", "carbon", "steel", "titanium"],
	"frameColor": [],
	"groupsetChoice": ["Shimano 105", "Shimano Ultegra", "Shimano Dura Ace", "SRAM Rival 22", "Sram Red"],
},
{	"kind": "track",
	"frameBrand": ["Cannondale", "Cinelli", "Specialzied", "Look"],
	"frameMaterial": ["alumnium", "carbon", "steel"],
	"frameColor": [],
	"groupsetChoice": ["Shimano Dura Ace", "SRAM Force 1", "Sram Rival 1"],
},
{	"kind": "fixed",
	"frameBrand": ["8 bar", "Cinelli", "Specialzied", "Look"],
	"frameMaterial": ["alumnium", "steel", "titanium"],
	"frameColor":[],
	"groupsetChoice": ["Aventon Push", "Campagnolo Pista"],
}]

//console.log(cycling); // Check array works!!
// Now that array of objects is made. Can move onto figuring out how to code this and make the game interative and dynamic.
// var userChoice = function (style,brand, material, color, groupset) {

// }



