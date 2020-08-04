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
  // findUserIdByName(name) {
  //   let this.customers.find(customer => {
  //     if (customer.name === 'name') {
  //       return customer.id
  //     }
  //   }
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
  searchTodaysBookings(date) {
// current date and filter for that date in bookings array
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
  
  // make work fo rany date

  availableRoomTypeAndDate(date, type) {
    let availableRoomOnDate = this.availableRooms(date);
    if (type == 'all rooms') {
      // console.log('if', type)
      return availableRoomOnDate;
    } else {
      // console.log('else', type)
      return availableRoomOnDate.filter((room) => {
      return room.roomType === type.toLowerCase();
    });

    }

  }
}


export default Hotel;
