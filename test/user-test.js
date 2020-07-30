const expect = chai.expect;
import chai from 'chai';
import User from '../src/User.js';

describe('User', () => {
  let user;
  let users;
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
    user = new User(users[1]);
}) 

  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function () {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have a unique id', function () {
    expect(user.id).to.equal();
  });
})