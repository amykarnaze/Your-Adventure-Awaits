const expect = chai.expect;
import chai from 'chai';
import User from '../src/Manager.js';
import Manager from '../src/Manager.js';

describe('Manager', () => {
  let manager;
  let users;

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
    manager = new Manager(users);
})

  it('should be a function', function () {
    expect(Manager).to.be.a('function');
  });

  it('should be an instance of User', function () {
    expect(manager).to.be.an.instanceof(Manager);
  });

  it('should have a property of users', function () {
    expect(manager.users.length).to.equal(3);
  });


})

