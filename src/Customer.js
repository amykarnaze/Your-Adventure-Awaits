class Customer {
 constructor(customerData, bookings, rooms) {
   this.id = customerData.id;
   this.name = customerData.name;
   this.bookings = this.findBookings(bookings);
   this.totalAmountSpent = this.findAmountSpent(rooms).toFixed(2);
  }

 getFirstName() {
  let firstName = this.name.split(' ');
  return firstName[0];
 }

 findBookings(allBookings) {
  return allBookings.filter((booking) => booking.userID == this.id);
 }

 findAmountSpent(rooms) {
  return this.bookings.reduce((sum, booking) => {
  let roomPrice = rooms.find(room => room.number == booking.roomNumber).costPerNight;
  sum += roomPrice;
    return sum;
  }, 0)
 }

}

export default Customer;

// what do I want my customer class to do?
// I want customer be a parent class bc there are 2 types of customers- customer and manager
// include an id and name properties
// what else should a customer have?

// "customers": [{
//     "id": 1,
//     "name": "Leatha Ullrich"
//   },

// "rooms": [{
//     "number": 1,
//     "roomType": "residential suite",
//     "bidet": true,
//     "bedSize": "queen",
//     "numBeds": 1,
//     "costPerNight": 358.4
//   },

// "bookings": [{
//     "id": "5fwrgu4i7k55hl6sz",
//     "customerID": 9,
//     "date": "2020/04/22",
//     "roomNumber": 15,
//     "roomServiceCharges": []
//   },