const moment = require("moment");

class Manager {
  constructor(customers, rooms, bookings, date) {
    this.customers = customers;
    this.currentCustomer = {};
    this.rooms = rooms;
    this.bookings = bookings;
    this.date = date;
    this.todaysBookings = this.searchForBookingsForToday();
    this.todaysRevenue = this.getTodaysRevenue(bookings, rooms, date);
    this.percentBookings = this.calculatePercentOccupiedToday(bookings, rooms, date);
    this.allBookings = [];
  }

  setCurrentCustomer(customer) {
    // let foundCustomer = this.customers.find(customer => customer.name.toLowerCase() === name.toLowerCase())
    this.currentCustomer = customer;

  }

  searchCustomerByName(input) {
    input = input.toLowerCase();
    return this.customers.filter(customer => {
      if (customer.name.toLowerCase().includes(input)) {
        return customer;
      }
    })
  }
// do I want the object returned or an array?
  searchForBookingsForToday() {
// current date and filter for that date in bookings array
    return this.bookings.filter(booking => {
      return booking.date === moment().format('YYYY/MM/DD');
    });
    console.log('today', this.todaysBookings)
  }

  getTodaysRevenue(bookings, rooms, date) {
      let todaysBookings = bookings.filter(booking => booking.date === date);
      let revenue = todaysBookings.reduce((revenue, bookedRoom) => {
        rooms.forEach(room => {
          if (room.number === bookedRoom.roomNumber) {
            revenue += room.costPerNight;
          }
        });
        console.log('rev', revenue)
        return revenue;
      }, 0);
      return Number(revenue.toFixed(2));
    }

  calculatePercentOccupiedToday(bookings, rooms, date) {
    let todayBookings = bookings.filter(
      booking => booking.date === date).length;
    let percentageRoomsOccupiedToday =
      (todayBookings / rooms.length) * 100;
      console.log(percentageRoomsOccupiedToday)
    return Number(percentageRoomsOccupiedToday.toFixed(2));
  }

   availableRooms() {
     let todaysBookingByRoomNum = this.todaysBookings.map((booking) => {
       return booking.roomNumber;
     });
     return this.rooms.filter((room) => {
       return !todaysBookingByRoomNum.includes(room.number);
     });
   }

   availableRoomTypeAndDate(date, type) {
       let availableRoomOnDate = this.unbookedRooms(date);
       return availableRoomOnDate.filter((room) => {
         return room.roomType === type;
       });

}
}


export default Manager;