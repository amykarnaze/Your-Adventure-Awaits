const expect = chai.expect;
import chai from 'chai';
import User from '../src/User.js';

describe('User', () => {
  let users;
  let user;
  let user2;
  beforeEach(function () {
    users = [
      {
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

  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function () {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have a unique id', function () {
    expect(user.id).to.equal(1);
  });

  it('should have a different unique id', function () {
    expect(user2.id).to.equal(2);
  });

  it('should have a name', function () {
    expect(user.name).to.equal('Leatha Ullrich');
  });

  it('should have a different name', function () {
    expect(user2.name).to.equal("Rocio Schuster");
  });

})