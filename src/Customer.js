class Customer {
 constructor(customerData, bookings, rooms) {
   this.id = customerData.id;
   this.name = customerData.name;
   this.firstName = this.getFirstName();
   this.bookings = this.findBookings(bookings);
   this.totalAmountSpent = this.findAmountSpent(rooms).toFixed(2);
  }

  getFirstName() {
    let firstName = this.name.split(' ');
    return firstName[0];
  }

  findBookings(allBookings) {
    return allBookings.filter(booking => booking.userID == this.id);
  }

  findAmountSpent(rooms) {
    return this.bookings.reduce((sum, booking) => {
    let roomPrice = rooms.find(room => room.number == booking.roomNumber).costPerNight;
    sum += roomPrice;
      return sum;
    }, 0)
  }

  addBooking(booking) {
    this.bookings.push(booking);
  }

}

export default Customer;