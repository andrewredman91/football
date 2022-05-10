let Players = function (name, dateOfBirth, position){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.position = position;
    this.list = []
}

  let players;

//     beforeEach(function () {
//         players = new Players("McGinn", "07/09/1990", "RB");
// })
// })
// console.log(player1)
module.exports = Players;