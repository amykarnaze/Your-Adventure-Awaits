const expect = chai.expect;
import chai from 'chai';
import Customer from '../src/Customer.js';
import Manager from '../src/Manager.js';
// const moment = require('moment');

describe('Manager', () => {
  let manager, customers, rooms, bookings, date;
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
    rooms = [
      {
        'number': 1,
        'roomType': 'residential suite',
        'bidet': true,
        'bedSize': 'queen',
        'numBeds': 1,
        'costPerNight': 358.4
      }, {
        'number': 24,
        'roomType': 'suite',
        'bidet': false,
        'bedSize': 'full',
        'numBeds': 2,
        'costPerNight': 477.38
      }
    ];
    // date = moment().format('YYYY/MM/DD');
    date = '2020/01/24';

    bookings = [
      {
        'id': '5fwrgu4i7k55hl6sz',
        'userID': 3,
        'date': '2020/01/22',
        'roomNumber': 15,
        'roomServiceCharges': []
      }, {
        'id': '5fwrgu4i7k55hl6t5',
        'userID': 43,
        'date': '2020/01/24',
        'roomNumber': 24,
        'roomServiceCharges': []
      }
    ];
    manager = new Manager(rooms, bookings, date);
    
});

  it('should be a function', function () {
    expect(Manager).to.be.a('function');
  });

  it('should be an instance of Manager', function () {
    expect(manager).to.be.an.instanceof(Manager);
  });

  it('should have a property of current customer', function () {
    manager.setCurrentCustomer(customers[0])
    expect(manager.currentCustomer.id).to.be.equal(1);
  });

  it('should have a property of bookings', function () {
    expect(manager.bookings.length).to.equal(2);
  });

  it('should have a property of date', function () {
    console.log("DATATATATTA", manager.date)
    expect(manager.date).to.be.equal('2020/01/24');
  });

  it('should be able to set current customer', function () {
    expect(manager.setCurrentCustomer(customers[0])).to.deep.equal(
      [
        {
          id: 1,
          name: 'Leatha Ullrich'
        }
      ]);
    });

  // it('should be able to search customers by name', function () {
  //   expect(manager.searchCustomerByName('Leatha Ullrich')).to.deep.equal([{
  //     id: 1,
  //     name: 'Leatha Ullrich'}]);
  //   });

  it('should be have a property of todays bookings', function () {
    expect(manager.todaysBookings).to.deep.equal([
        {
          'id': '5fwrgu4i7k55hl6t5',
          'userID': 43,
          'date': '2020/01/24',
          'roomNumber': 24,
          'roomServiceCharges': []
        }
      ])
  });


  it('should be have a property of todays Revenue', function () {
    expect(manager.todaysRevenue).to.equal(0.00);
  });

  // it('should be have a property of percent booked, function () {
  //   expect(manager.percentBookings).to.deep.equal(
  //     // [
  //     //   {
  //     //     'id': '5fwrgu4i7k55hl6sz',
  //     //     'userID': 3,
  //     //     'date': date,
  //     //     'roomNumber': 15,
  //     //     'roomServiceCharges': []
  //     //   }
  //     // ]
  //   );
  // });


  // it('should be able to search for total Revenue that day, function () {
  //   expect(manager.getTodaysRevenue('Leatha Ullrich')).to.deep.equal([{
  //     id: 1,
  //     name: 'Leatha Ullrich'}])
  //   })
});


