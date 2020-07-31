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

  it('should be an instance of Booking', function () {
    expect(booking).to.be.an.instanceOf(Booking);
  });

  it('should return booking id', function () {
    expect(booking.id).to.equal('5fwrgu4i7k55hl6sz');
  });

  it('should be able to have a different booking id', function () {
    expect(booking2.id).to.equal('5fwrgu4i7k55hl6t5');
  });

  it('should return the booking userID', function () {
    expect(booking.userID).to.equal(9);
  });

  it('should be able to have a diffenrent booking userID', function () {
    expect(booking2.userID).to.equal(43);
  });

  