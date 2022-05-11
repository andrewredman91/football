const Players = function (name, dateOfBirth, position){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.position = position;
    this.playerList = []
}
let player1 = new Players("McGinn", "07/09/1990", "RB");
let player2 = new Players("Melkerson", "01/02/2004", "ST");

let playerList = []

new function addPlayerToTeam() {

playerList.push(player1,player2);
return playerList[player1, player2]
}




console.log(playerList)
