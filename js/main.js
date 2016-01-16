// Global Variables
var game = false
var wolf = 0;
var people = 0;
var roles = [];

// Game Settings
function settings(){
  // Number of players
  wolf = document.getElementById("wolf").val;
  people = document.getElementById("people").val;

  for (i = wolf; i > 0; i--) {
    roles.push("Lobo");
  }

  for (i = people; i > 0; i--) {
    if (i == 2) {
      roles.push("Cartomante");
    }
    else if (i == 1) {
      roles.push("Feiticeira");
    }
    else {
      roles.push("Vileiro");
    }
  }

  var element = document.getElementById("play");
  element.addEventListener("click", function() { game() }, false);
}

function game(){
  if (game == false) {
    players = document.getElementById("num");
    if (players < 4) {

    }
    else if (players <= )
  }
  var nights = document.getElementById("nights");

  if (nights.val == "0"){

    nights.val == "1";

  }
}
