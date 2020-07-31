const expect = chai.expect;
import chai from 'chai';
import Customer from '../src/Customer.js';
import Manager from '../src/Manager.js';

describe('Manager', () => {
  let manager;
  let customers;

  beforeEach(function () {
    customers = [{
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
    manager = new Manager(customers);
})

  it('should be a function', function () {
    expect(Manager).to.be.a('function');
  });

  it('should be an instance of User', function () {
    expect(manager).to.be.an.instanceof(Manager);
  });

  it('should have a property of users', function () {
    expect(manager.customers.length).to.equal(3);
  });

  it('should be able to search customers by name', function () {
    expect(manager.searchCustomerByName('Leatha Ullrich')).to.deep.equal([{
      id: 1,
      name: 'Leatha Ullrich'}])
    })
})


