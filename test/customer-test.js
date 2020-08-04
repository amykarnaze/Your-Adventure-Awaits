const expect = chai.expect;
import chai from 'chai';
import Customer from '../src/Customer.js';

describe('customer', () => {
  let customers;
  let customer;
  let customer2; 
  let bookings;
  let rooms;

  beforeEach(function () {
    customers = [
      {
        'id': 1,
        'name': 'Leatha Ullrich'
      },
      {
        'id': 2,
        'name': 'Rocio Schuster'
      },
      {
        'id': 3,
        'name': 'Kelvin Schiller'
      }
    ];
    bookings = [
      {
      "id": "5fwrgu4i7k55hl6sz",
      "userID": 9,
      "date": "2020/04/22",
      "roomNumber": 15,
      "roomServiceCharges": []
    }, {
      "id": "5fwrgu4i7k55hl6t5",
      "userID": 43,
      "date": "2020/01/24",
      "roomNumber": 24,
      "roomServiceCharges": []
    }
    ];
    rooms = [{
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
    }, {
      "number": 2,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "full",
      "numBeds": 2,
      "costPerNight": 477.38
    }];
    customer = new Customer(customers[0], bookings, rooms);
    customer2 = new Customer(customers[1], bookings, rooms);
}) 

  it('should be a function', function () {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of customer', function () {
    expect(customer).to.be.an.instanceof(Customer);
  });

  it('should have a unique id', function () {
    expect(customer.id).to.equal(1);
  });

  it('should have a different unique id', function () {
    expect(customer2.id).to.equal(2);
  });

  it('should be able to have a name', function () {
    expect(customer.name).to.equal('Leatha Ullrich');
  });

  it('should be able to have a different name', function () {
    expect(customer2.name).to.equal('Rocio Schuster');
  });

  it('should have a list of bookings', function () {
    expect(customer.bookings).to.equal(bookings);

  });

  it('should have property of total money spent', function () {
    expect(customer.totalAmountSpent).to.equal(0.00);
  });

  // it('should have a username', function () {
  //   expect(customer.username).to.equal('customer1');
  // });

  // it('should get a first name', function () {
  //   expect(customer.getFirstName()).to.equal('Leatha');
  // });

  // it('get customer id', function () {
  //   expect(customer.getCustomerId).to.equal(1);
  // });



})