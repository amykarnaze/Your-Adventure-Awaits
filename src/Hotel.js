const moment = require("moment");

class Hotel {
  constructor(customers, rooms, bookings) {
    this.customers = customers;
    this.rooms = rooms;
    this.bookings = bookings;
  }

  searchCustomerByName(input) {
    input = input.toLowerCase();
    return this.customers.filter(customer => {
      if (customer.name.toLowerCase().includes(input)) {
        return customer;
      }
    })
  }

  searchTodaysBookings(date) {
    return this.bookings.filter(booking => {
      return booking.date === date;
    });
    console.log('today', this.bookings)
  }

   availableRooms(date) {
     let todaysBookingByRoomNum = this.searchTodaysBookings(date).map((booking) => {
       return booking.roomNumber;
     });
     return this.rooms.filter((room) => {
       return !todaysBookingByRoomNum.includes(room.number);
     });
  }
  // make work for any date

  availableRoomTypeAndDate(date, type) {
    let availableRoomOnDate = this.availableRooms(date);
    if (type == 'all rooms') {
      return availableRoomOnDate;
    } else {
      return availableRoomOnDate.filter((room) => {
      return room.roomType === type.toLowerCase();
    });
    }
  }
}


export default Hotel;
