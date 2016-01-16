settings();

// Game Settings
function settings(){
  var game = false
  var wolf = 0;
  var people = 0;
  var roles = [];

  var element = document.getElementById("play");
  element.addEventListener("click", function() { startGame(game, wolf, people, roles) }, false);
}

function startGame(game, wolf, people, roles){
  if (game == false){
    // Number of players
    wolf = $("#wolf").val();
    people = $("#people").val();

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

    game = true;
    alert(roles);
  }

  var nights = document.getElementById("nights");

  if (nights.val == "0"){

    nights.val == "1";

  }
}
