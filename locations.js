
window.onload = init;

function init() {
    var message = "You are in Abdijan, Ivory Coast. You are at the Right To Dream Soccer Academy trails, you are in the changing room where you find cleats.";
    displayMessage(message);
    buttonNorth = document.getElementById("buttonNorth");
    buttonNorth.disabled = true;
    buttonSouth = document.getElementById("buttonSouth");
    buttonEast = document.getElementById("buttonEast");
    buttonWest = document.getElementById("buttonWest");
    buttonWest.disabled = true;
}

var score = 0;
var LocationNumber = 0;

var position0 = false;
var position1 = false;
var position2 = false;
var position3 = false;
var position4 = false;
var position5 = false;

var buttonNorth;
var buttonSouth;
var buttonEast;
var buttonWest;

var Locations = [];

var Soccerbag = [];

function item(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.toString = function() {
        return this.description;
    }
}

var soccercleats = new item(0, "soccer cleats", "Nike Mercurial Vapor", "Nice and Clean");
var letter = new item(1, "letter", "Letter from Coach", "Very Urgent");
var money = new item(2, "money", "New contract offer", "IMPORTANT");
var silverware = new item(3, "silverware", "Champions League Champions", "LOVELY")
Soccerbag = [soccercleats, letter, money, silverware];


function Location(id, name, description, item) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.item = item;
    this.toString = function() {
        return this.description;
    }
}
 

function takeitem() {
  var checkItem = locations[LocationNumber];
  if (checkItem.item === null) {
    var message = "There is nothing to take here."
    displayMessage(message)
  } else {
    inventory.push(items[LocationNumber].name);
    displayMessage("You have picked up " + items[LocationNumber].name);
    locations[LocationNumber].item = null;
  }
} 




var ivorycoast = new Location(0,"ivorycoast","You are in Abdijan, Ivory Coast. You are at the Right To Dream Soccer Academy trails, you are in the changing room where you find cleats.","soccercleats")
var Guingamp = new Location(1, "Guingamp", "You are in France with your uncle Didier. You have a trial with Guingamp tomorow morning.", "null");
var Marseille = new Location(2, "Marseille", "You just scored the winning goal for Marseille in the Coupe de France Final @ the Stade Veledrome.", "null");
var London = new Location(3, "London", "You are in London, England with Chelsea manager Jose Mourinho signing your new five-year contract.", "null");
var Moscow = new Location(4, "Moscow", "You are walking down the tunnel alone after being sent off in the Champions League Final in Moscow, disgraced and letting your team down.", "null");
var Munich = new Location(5, "Munich", "You are holding the Champions League trophy in Munich after scoring the most memorable goal in club history and the penalty kick to win Chelsea's first ever Champions League.", "sliverware");
var Home = new Location(6, "Home", "You walk into your bedroom after training and open the letter. The letter states that you have played your last ever match for chelsea and will be moving to play in China.", "letter");
var Airport = new Location(7, "Airport", "You are at London Heathrow Airport about to board your flight to China.", "null");
var Shanghai = new Location(8, "Shanghai", "You are in Shanghai, China and you are at the training ground of Shanghai Shenhua getting ready for your first team session.", "money");
var Montreal = new Location(9, "Montreal", "You have been transfered to the Montreal Impact, you are now in Montreal where you will end you amazing career in the MLS.", "null");
Locations = [ivorycoast, Guingamp, Marseille, London, Moscow, Munich, Home, Airport, Shanghai, Montreal];

function btnNorth_click() {

    switch (LocationNumber) {
        case 0:
            displayMessage("You cannot go that way");
            break;

        case 1:
            displayMessage("You cannot go that way");
            break;




        case 2:

            displayMessage("You cannot go that way");
            break;

        case 3:
            displayMessage(Locations[LocationNumber].description);
            score += 5;
            LocationNumber = 0;
            buttonNorth.disabled = true;
            buttonSouth.disabled = false;
            buttonWest.disabled = true;
            buttonEast.disabled = false;
            break;
        case 4:
            displayMessage(Locations[LocationNumber].description);
            score += 5;
            LocationNumber = 1;
            buttonNorth.disabled = true;
            buttonSouth.disabled = false;
            buttonEast.disabled = false;
            buttonWest.disabled = false;
            break;
        case 5:
            displayMessage(Locations[LocationNumber].description);
            score += 5;
            LocationNumber = 2;
            buttonNorth.disabled = true;
            buttonSouth.disabled = false;
            buttonEast.disabled = true;
            buttonWest.disabled = false;
            break;
        case 6:
            displayMessage(Locations[LocationNumber].description);
            score += 5;
            LocationNumber = 3;
            buttonNorth.disabled = false;
            buttonSouth.disabled = false;
            buttonWest.disabled = true;
            buttonEast.disabled = false;
            break;
        case 7:
            displayMessage(Locations[LocationNumber].description);
            score += 5;
            LocationNumber = 4;
            buttonNorth.disabled = false;
            buttonSouth.disabled = false;
            buttonWest.disabled = true;
            buttonEast.disabled = false;
            break;
        case 8:
            //Munich();
            displayMessage(Locations[LocationNumber].description);
            score += 5;
            LocationNumber = 5;
            buttonNorth.disabled = false;
            buttonSouth.disabled = false;
            buttonWest.disabled = false;
            buttonEast.disabled = true;
            break;
        case 9:
            displayMessage(Locations[LocationNumber].description);
            score += 5;
            LocationNumber = 6;
            buttonNorth.disabled = false;
            buttonSouth.disabled = false;
            buttonWest.disabled = true;
            buttonEast.disabled = false;
            break;
    }
    scoreElement = document.getElementById("Score");
    scoreElement.innerHTML = "Score : " + score;

}

function btnSouth_click() {
    switch (LocationNumber) {
        case 0:
            displayMessage(Locations[LocationNumber].description);
            score += 5;
            LocationNumber = 3;
            buttonNorth.disabled = false;
            buttonSouth.disabled = false;
            buttonWest.disabled = true;
            buttonEast.disabled = false;
            break;

        case 1:
            displayMessage(Locations[LocationNumber].description);
            score += 5;
            LocationNumber = 4;
            buttonNorth.disabled = false;
            buttonSouth.disabled = false;
            buttonWest.disabled = false;
            buttonEast.disabled = false;
            break;

        case 2:
            displayMessage(Locations[LocationNumber].description);
            score += 5;
            LocationNumber = 5;
            buttonNorth.disabled = false;
            buttonSouth.disabled = false;
            buttonWest.disabled = false;
            buttonEast.disabled = true;
            break;

        case 3:
            LocationNumber = 6;
            score += 5;
            displayMessage(Locations[LocationNumber].description);
            buttonNorth.disabled = false;
            buttonSouth.disabled = false;
            buttonWest.disabled = true;
            buttonEast.disabled = false;

            break;

        case 4:
            LocationNumber = 7;
            score += 5;
            displayMessage(Locations[LocationNumber].description);
            buttonNorth.disabled = false;
            buttonSouth.disabled = true;
            buttonWest.disabled = false;
            buttonEast.disabled = false;
            break;


        case 5:
            LocationNumber = 8;
            score += 5;
            displayMessage(Locations[LocationNumber].description);
            buttonNorth.disabled = false;
            buttonSouth.disabled = true;
            buttonWest.disabled = false;
            buttonEast.disabled = true;
            break;

        case 6:
            LocationNumber = 9;
            score += 5;
            displayMessage(Locations[LocationNumber].description);
            buttonNorth.disabled = false;
            buttonSouth.disabled = true;
            buttonWest.disabled = true;
            buttonEast.disabled = false;
            break;
        case 7:
            displayMessage("You cannot go that way");
            break;

        case 8:
            displayMessage("You cannot go that way");
            break;

        case 9:
            displayMessage("You cannot go that way");
            break;

    }
    scoreElement = document.getElementById("Score");
    scoreElement.innerHTML = "Score : " + score;

    console.log(Location);
}

function btnWest_click() {
    switch (LocationNumber) {
        case 0:
            displayMessage("You cannot go that way");
            break;

        case 1:
            LocationNumber = 0;
            score += 5;
            displayMessage(Locations[LocationNumber].description);
            buttonNorth.disabled = true;
            buttonSouth.disabled = false;
            buttonWest.disabled = true;
            buttonEast.disabled = false;
            break;

        case 2:
            LocationNumber = 1;
            score += 5;
            displayMessage(Locations[LocationNumber].description);
            buttonNorth.disabled = true;
            buttonSouth.disabled = false;
            buttonEast.disabled = false;
            buttonWest.disabled = false;
            break;

        case 3:
            displayMessage("You cannot go that way");
            break;


        case 4:
            LocationNumber = 3;
            score += 5;
            displayMessage(Locations[LocationNumber].description);
            buttonNorth.disabled = false;
            buttonSouth.disabled = false;
            buttonWest.disabled = true;
            buttonEast.disabled = false;
            break;
        case 5:
            LocationNumber = 4;
            score += 5;
           displayMessage(Locations[LocationNumber].description);
            buttonNorth.disabled = false;
            buttonSouth.disabled = false;
            buttonWest.disabled = false;
            buttonEast.disabled = false;
            break;
        case 6:
            displayMessage("You cannot go that way");
            break;

        case 7:
            LocationNumber = 6;
            score += 5;
            displayMessage(Locations[LocationNumber].description);
            buttonNorth.disabled = false;
            buttonSouth.disabled = false;
            buttonWest.disabled = true;
            buttonEast.disabled = false;
            break;
        case 8:
            LocationNumber = 7;
            score += 5;
             displayMessage(Locations[LocationNumber].description);
            buttonNorth.disabled = false;
            buttonSouth.disabled = true;
            buttonWest.disabled = false;
            buttonEast.disabled = false;
            break;
        case 9:
            displayMessage("You cannot go that way");
            break;

    }
    scoreElement = document.getElementById("Score");
    scoreElement.innerHTML = "Score : " + score;


}

function btnEast_click() {
    switch (LocationNumber) {
        case 0:
            LocationNumber = 1;
            score += 5;
             displayMessage(Locations[LocationNumber].description);
            buttonNorth.disabled = true;
            buttonSouth.disabled = false;
            buttonEast.disabled = false;
            buttonWest.disabled = false;
            break;
        case 1:
            LocationNumber = 2;
            score += 5;
            displayMessage(Locations[LocationNumber].description);
            buttonNorth.disabled = true;
            buttonSouth.disabled = false;
            buttonEast.disabled = true;
            buttonWest.disabled = false;
            break;

        case 2:
            displayMessage("You cannot go that way");
            break;

        case 3:
            LocationNumber = 4;
            score += 5;
             displayMessage(Locations[LocationNumber].description);
            buttonNorth.disabled = false;
            buttonSouth.disabled = false;
            buttonWest.disabled = false;
            buttonEast.disabled = false;
            break;
        case 4:
            LocationNumber = 5;
            score += 5;
            displayMessage(Locations[LocationNumber].description);
            buttonNorth.disabled = false;
            buttonSouth.disabled = false;
            buttonWest.disabled = false;
            buttonEast.disabled = true;
            break;
        case 5:
            displayMessage("You cannot go that way");
            break;

        case 6:
            LocationNumber = 7;
            score += 5;
            displayMessage(Locations[LocationNumber].description);
            buttonNorth.disabled = false;
            buttonSouth.disabled = true;
            buttonWest.disabled = false;
            buttonEast.disabled = false;
            break;
        case 7:
            LocationNumber = 8;
            score += 5;
            displayMessage(Locations[LocationNumber].description);
            buttonNorth.disabled = false;
            buttonSouth.disabled = true;
            buttonWest.disabled = false;
            buttonEast.disabled = true;
            break;
        case 8:
            displayMessage("You cannot go that way");
            break;

        case 9:
            displayMessage("You cannot go that way");
            break;

    }
    scoreElement = document.getElementById("Score");
    scoreElement.innerHTML = "Score : " + score;
}




function btnGo_click() {
    var Text = document.getElementById("txtCommand").value;
    var answer = "";
    var assistanceMessage = "You must enter the following commands n, s, e, w, N, S, E, W,Soccerbag";
    var failureMessage = "Invalid Command. Only the following commands, n,s,e,w,N,S,E,W,Soccerbag are valid commands.";
    if (Text === "n" || Text === "N") {
        answer = btnNorth_click();
    } else if (Text === "s" || Text === "S") {
        answer = btnSouth_click();
    } else if (Text === "e" || Text === "E") {
        answer = btnEast_click();
    } else if (Text === "w" || Text === "W") {
        answer = btnWest_click();
    } else if (Text === "help" || Text === "HELP") {
        var textarea = document.getElementById("message");
        textarea.value = assistanceMessage;
    } else if (Text === "Soccerbag") {
        var textarea = document.getElementById("message");
        var message = "";
        for (var i = 0; i < Soccerbag.length; i++) {

            message = message + Soccerbag[i].name + ", ";
        }
        textarea.value = message;
    } else if (Text === "Locations") {
        var textarea = document.getElementById("message");
        var message = "";
        for (var i = 0; i < Locations.length; i++) {
            message = message + Locations[i].name + ", ";
        }
        textarea.value = message


    } else {
        var textarea = document.getElementById("message");
        textarea.value = failureMessage;
    }

}

function displayMessage(msg) {
    var target = document.getElementById("message");
    target.value = msg + "\n\n" + target.value;
}