class User {
 constructor(user) {
   this.id = user.id;
   this.name = user.name
 }

}

export default User;

// what do I want my user class to do?
// I want user be a parent class bc there are 2 types of users- customer and manager
// include an id and name properties
// what else should a user have?

// "users": [{
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
//     "userID": 9,
//     "date": "2020/04/22",
//     "roomNumber": 15,
//     "roomServiceCharges": []
//   },