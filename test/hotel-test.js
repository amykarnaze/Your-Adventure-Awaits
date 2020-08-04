const expect = chai.expect;
import chai from 'chai';
import Customer from '../src/Customer.js';
import Manager from '../src/Manager.js';
import Hotel from '../src/Hotel.js';
const moment = require('moment');

describe('Hotel', () => {
  let hotel, manager, customers, rooms, bookings, date;
  beforeEach(function () {
    customers = [{
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
    rooms = [{
      'number': 1,
      'roomType': 'residential suite',
      'bidet': true,
      'bedSize': 'queen',
      'numBeds': 1,
      'costPerNight': 358.4
    }, {
      'number': 2,
      'roomType': 'suite',
      'bidet': false,
      'bedSize': 'full',
      'numBeds': 2,
      'costPerNight': 477.38
    }];
    date = moment().format('YYYY/MM/DD');
    bookings = [{
      'id': '5fwrgu4i7k55hl6sz',
      'userID': 3,
      'date': date,
      'roomNumber': 15,
      'roomServiceCharges': []
    }, {
      'id': '5fwrgu4i7k55hl6t5',
      'userID': 43,
      'date': '2020/01/24',
      'roomNumber': 24,
      'roomServiceCharges': []
    }];
    manager = new Manager(customers, rooms, bookings, date);
    hotel = new Hotel();
  });

  it('should be a function', function () {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Hotel', function () {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('should have a property of customers', function () {
    expect(hotel.customers.length).to.equal(3);
  });

  it('should have a property of rooms', function () {
    expect(hotel.rooms.length).to.equal(2);
  });

  it('should have a property of bookings', function () {
    expect(hotel.bookings.length).to.equal(2);
  });
  });
