const moment = require("moment");

class Hotel {
  constructor(customers, rooms, bookings) {
    this.customers = customers;
    this.rooms = rooms;
    this.bookings = bookings;
  }

  // setCurrentCustomer(customer) {
  //   // let foundCustomer = this.customers.find(customer => customer.name.toLowerCase() === name.toLowerCase())
  //   this.currentCustomer = customer;

  // }

  searchCustomerByName(input) {
    input = input.toLowerCase();
    return this.customers.filter(customer => {
      if (customer.name.toLowerCase().includes(input)) {
        return customer;
      }
    })
  }
// do I want the object returned or an array?
  searchTodaysBookings() {
// current date and filter for that date in bookings array
    return this.bookings.filter(booking => {
      return booking.date === moment().format('YYYY/MM/DD');
    });
    console.log('today', this.bookings)
  }

   availableRooms() {
     let todaysBookingByRoomNum = this.searchTodaysBookings().map((booking) => {
       return booking.roomNumber;
     });
     return this.rooms.filter((room) => {
       return !todaysBookingByRoomNum.includes(room.number);
     });
  }
  
  availableRoomTypeAndDate(date, type) {
    let availableRoomOnDate = this.availableRooms(date);
    if (type == 'all rooms') {
      console.log('if', type)
      return availableRoomOnDate;
    } else {
      console.log('else', type)
    return availableRoomOnDate.filter((room) => {
      return room.roomType === type.toLowerCase();
    });

    }

  }
}


export default Hotel;
