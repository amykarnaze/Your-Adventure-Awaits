class Customer {
 constructor(customerData) {
   this.id = customerData.id;
   this.name = customerData.name;
   this.bookings = [];
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