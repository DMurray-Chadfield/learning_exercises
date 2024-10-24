let team = {
    _players: [
      {
        firstName: 'Dave',
        lastName: 'Graham',
        age: 39
      },
      {
        firstname: 'Adam',
        lastName: 'Ondra',
        age: 28
      },
      {
        firstName: 'Alex',
        lastName: 'Megos',
        age: 27
      }
    ],
    _games: [
      {
        opponent: 'DUMC',
        teamPoints: 21,
        opponentPoints: 57
      },
      {
        opponent: 'MUMC',
        teamPoints: 35,
        opponentPoints: 14
      },
      {
        opponent: 'Ben & Jerry',
        teampoints: 49,
        opponentPoints: 46
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName,
        lastName,
        age
      };
      this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent,
        teamPoints,
        opponentPoints
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team._players);
  
  team.addGame('Mets', 47, 22);
  team.addGame('Bulls', 21, 94);
  team.addGame('Tigers', 50, 38);
  
  console.log(team._games);