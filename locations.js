window.onload = init;

function init() {
    look();
    disable();
}

var score = 0;
var LocationNumber = 0;
var north = 0;
var south = 1;
var east = 2;
var west = 3;
var playeractive = true;

var Items = [];
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
var letter = new item(6, "letter", "Letter from Coach", "Very Urgent");
var money = new item(8, "money", "New contract offer", "IMPORTANT");
var silverware = new item(5, "silverware", "Champions League Champions", "LOVELY")

function soccerstuff() {
    var message = "Soccerbag:\n" + Soccerbag;
    UpdateInventory(message);
}


var items = new Array();
items[0] = soccercleats;
items[6] = letter;
items[8] = money;
items[5] = silverware;


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
    var checkItem = Locations[LocationNumber];
    if (checkItem.item === null) {
        var message = "There is nothing to take here."
        displayMessage(message)
    } else {
        Soccerbag.push(items[LocationNumber].name);
        displayMessage("You have picked up " + items[LocationNumber].name);
        Locations[LocationNumber].item = null;
    }
}

function look() {
    var message = "";
    message = Locations[LocationNumber];
    var checkItem = Locations[LocationNumber].item;
    if (checkItem !== null) {
        message = message + checkItem;
    }
    displayMessage(message);
}


var ivorycoast = new Location(0, "ivorycoast", "You are in Abdijan, Ivory Coast. You are at the Right To Dream Soccer Academy trails, you are in the changing room where you find cleats.", "soccercleats")
var Guingamp = new Location(1, "Guingamp", "You are in France with your uncle Didier. You have a trial with Guingamp tomorow morning.", "null");
var Marseille = new Location(2, "Marseille", "You just scored the winning goal for Marseille in the Coupe de France Final @ the Stade Veledrome.", "null");
var London = new Location(3, "London", "You are in London, England with Chelsea manager Jose Mourinho signing your new five-year contract.", "null");
var Moscow = new Location(4, "Moscow", "You are walking down the tunnel alone after being sent off in the Champions League Final in Moscow, disgraced and letting your team down.", "null");
var Munich = new Location(5, "Munich", "You are holding the Champions League trophy in Munich after scoring the most memorable goal in club history and the penalty kick to win Chelsea's first ever Champions League.", "sliverware");
var Home = new Location(6, "Home", "You walk into your bedroom after training and open the letter. The letter states that you have played your last ever match for chelsea and will be moving to play in China.", "letter");
var Airport = new Location(7, "Airport", "You are at London Heathrow Airport about to board your flight to China.", "null");
var Shanghai = new Location(8, "Shanghai", "You are in Shanghai, China and you are at the training ground of Shanghai Shenhua getting ready for your first team session.", "money");
var Montreal = new Location(9, "Montreal", "You have been transfered to the Montreal Impact, you are now in Montreal where you will end you amazing career in the MLS.", "null");
var Locations = [ivorycoast, Guingamp, Marseille, London, Moscow, Munich, Home, Airport, Shanghai, Montreal];
var Button = ["buttonNorth", "buttonSouth", "buttonEast", "buttonWest"];
var Navigationmatrix = [ //N,S,E,W 
    [-1, 3, 1, -1],
    [-1, 4, 2, 0],
    [-1, 5, -1, 1],
    [0, 6, 4, -1],
    [1, 7, 5, 3],
    [2, 8, -1, 4],
    [3, 9, 7, -1],
    [4, -1, 8, 6],
    [5, -1, -1, 7],
    [6, -1, -1, -1]
];
var Disablematrix = [
    [1, 0, 0, 1],
    [1, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
];

function btnNorth_click() {
    NextLocation(north);
    look();
}

function btnSouth_click() {
    NextLocation(south);
    look();
}

function btnEast_click() {
    NextLocation(east);
    look();
}

function btnWest_click() {
    NextLocation(west);
    look();
}

function NextLocation(direction) {
    var newlocation = Navigationmatrix[LocationNumber][direction];
    if (newlocation >= 0) {
        if (newlocation == 9 && Soccerbag.length == 4) {
            LocationNumber = newlocation;
            look();
            displayMessage("You are now a Legend of the game of Football. Congratulations!!")
            disable();
        } else if (newlocation == 9) {
            displayMessage("Slow down its not your time yet,turn back!")
        } else {
            LocationNumber = newlocation;
            look();
            disable();
        } else {
            displayMessage("YOU MAY NOT PROCEED!!!");
        }
        Playerscore();
    }

    function disable() {
        var Disable = 0;
    }

    function displayMessage(msg) {
        var target = document.getElementById("message");
        target.value = msg + "\n\n" + target.value;
        for (j = 0; j < Button.length; j++) {
            Disable = Disablematrix[LocationNumber][j];
            if (Disable === 1) {
                document.getElementById(Button[j]).disabled = true;
            } else {
                document.getElementById(Button[j]).disabled = false;
            }
        }
    }

    function Playerscore() {
        var scored = Locations[LocationNumber];
        if (scored.check === false) {
            score += 5;
            document.getElementById("Score").innerHTML = score;
            scored.check = true;
        }

    }


    function btnGo_click() {
        var Text = document.getElementById("txtCommand").value;
        Text = Text.toLowerCase();
        var answer = "";
        if (playeractive == true) {
            if (Text === "n") {
                Response = btnNorth_click();
            } else if (Text === "s") {
                Response = btnSouth_click();
            } else if (Text === "e") {
                Response = btnEast_click();
            } else if (Text === "w") {
                Response = btnWest_click();
            } else if (Text === "help") {
                HelpMessage();
            } else if (Text === "Soccerbag") {
                for (var i = 0; i < Soccerbag.length; ++i) {
                    displayMessage(Soccerbag[i]);
                }
            } else if (Text === "take") {
                takeitem();
            } else {
                alert("Invalid command.  Valid commands: N, S, E, W, Help, Inventory, Take, Soccerbag");
            }
        }

    }

  
