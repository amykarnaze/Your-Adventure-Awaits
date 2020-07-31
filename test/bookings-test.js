import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/Bookings';

describe('Booking', function () {
  let booking, booking2;

  beforeEach(function () {
    booking = new Booking({
      id: '5fwrgu4i7k55hl6sz',
      userID: 9,
      date: '2020/02/04',
      roomNumber: 15,
      roomServiceCharges: []
    })

    booking2 = new Booking({
      id: '5fwrgu4i7k55hl6t5',
      userID: 43,
      date: '2020/01/24',
      roomNumber: 24,
      roomServiceCharges: []
    });
  });

  