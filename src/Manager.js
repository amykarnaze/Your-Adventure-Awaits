class Manager {
  constructor(customers, rooms, bookings, date) {
    this.currentCustomer = {};
    this.customers = customers;
    this.rooms = rooms;
    this.bookings = bookings;
    this.date = date;
    this.todaysBookings = this.searchForBookingsForToday();
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
      return booking.date === "2020/04/22"
    });
    console.log('today', this.todaysBookings)
  }


}

export default Manager;
