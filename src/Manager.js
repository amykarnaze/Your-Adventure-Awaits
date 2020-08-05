const moment = require("moment");

class Manager {
  constructor(rooms, bookings, date) {
    this.rooms = rooms;
    this.currentCustomer = {};
    this.bookings = bookings;
    this.date = date;
    this.todaysBookings = this.searchForBookingsForToday();
    this.todaysRevenue = this.getTodaysRevenue(bookings, rooms, date);
    this.percentBookings = this.calculatePercentOccupiedToday(bookings, rooms, date);
  }

  setCurrentCustomer(customer) {
    this.currentCustomer = customer;
  }

  searchForBookingsForToday() {
    let todaysBooks = this.bookings.filter(booking => {
      return booking.date === moment().format('YYYY/MM/DD');
    });
    return todaysBooks;
  }

  getTodaysRevenue(bookings, rooms, date) {
      let todaysBookings = bookings.filter(booking => booking.date === date);
      let revenue = todaysBookings.reduce((revenue, bookedRoom) => {
        rooms.forEach(room => {
          if (room.number === bookedRoom.roomNumber) {
            revenue += room.costPerNight;
          }
        });
        return revenue;
      }, 0);
      return Number(revenue.toFixed(2));
    }

  calculatePercentOccupiedToday(bookings, rooms, date) {
    let todayBookings = bookings.filter(
      booking => booking.date === date).length;
    let percentageRoomsOccupiedToday =
      (todayBookings / rooms.length) * 100;
    return Number(percentageRoomsOccupiedToday.toFixed(2));
  }

  calculateTotalBookingsSum() {
    this.todaysBookings.length;
  }

  deleteBooking(id) {
    let deleteBookingObject = {
      id: Number(id)
    };
    let url =
      "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings";
    return fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(deleteBookingObject)
    }).catch(error => console.log(error))
  }
}

export default Manager;
