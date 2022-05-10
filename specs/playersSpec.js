const assert = require('assert');
const Players = require('../models/players.js');
const footballTeam = require('../models/footballTeam.js');


// this
describe('Players', function () {
    let McGinn;
//  this
    beforeEach(function () {
        McGinn = new Players('Paul McGinn', '07/09/1990', 'RB');
    })
})
console.log(McGinn)