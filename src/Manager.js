import Hotel from "./Hotel";

const moment = require("moment");

class Manager {
  constructor(rooms, bookings, date) {
    // customers,
    // this.customers = customers;
    // pass hotel.customers to do math
    this.rooms = rooms;
    this.currentCustomer = {};
    // this.rooms = rooms;
    this.bookings = bookings;
    this.date = date;
    this.todaysBookings = this.searchForBookingsForToday();
    this.todaysRevenue = this.getTodaysRevenue(bookings, rooms, date);
    this.percentBookings = this.calculatePercentOccupiedToday(bookings, rooms, date);
  }

  setCurrentCustomer(customer) {
    // let foundCustomer = this.customers.find(customer => customer.name.toLowerCase() === name.toLowerCase())
    this.currentCustomer = customer;

  }



  // searchCustomerByName(input, customers) {
  //   input = input.toLowerCase();
  //   let customerName = customers.filter(customer => {
  //     if (customer.name.toLowerCase().includes(input)) {
  //       return customer;
  //     }
  //   })
  //   console.log(customerName)
  //   return customerName;
  //   // pass hotel.customers
  // }
// do I want the object returned or an array?
  searchForBookingsForToday() {
// current date and filter for that date in bookings array
console.log('here')
    let todaysBooks = this.bookings.filter(booking => {
      return booking.date === moment().format('YYYY/MM/DD');
    });
    console.log('todays bookings', todaysBooks)
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
        // console.log('rev', revenue)
        return revenue;
      }, 0);
      return Number(revenue.toFixed(2));
    }

  calculatePercentOccupiedToday(bookings, rooms, date) {
    let todayBookings = bookings.filter(
      booking => booking.date === date).length;
    let percentageRoomsOccupiedToday =
      (todayBookings / rooms.length) * 100;
      // console.log(percentageRoomsOccupiedToday)
    return Number(percentageRoomsOccupiedToday.toFixed(2));
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
