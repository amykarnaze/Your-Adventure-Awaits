const expect = chai.expect;
import chai from 'chai';
import User from '../src/Manager.js';

describe('Manager', () => {
  let manager;
  let user;

  beforeEach(function () {
    users = [{
        "id": 1,
        "name": "Leatha Ullrich"
      },
      {
        "id": 2,
        "name": "Rocio Schuster"
      },
      {
        "id": 3,
        "name": "Kelvin Schiller"
      }
    ];
    user = new User(users[0]);
    user2 = new User(users[1]);
})
})

