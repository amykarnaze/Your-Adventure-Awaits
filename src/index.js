// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
// console.log('This is the JavaScript entry file - your code begins here.');
import getApiData from './api';
import './css/base.scss';
import Customer from './Customer';
import Manager from './Manager';
const moment = require("moment");


// function getData()
let manager;
let currentUser;
let hotelData;
let currentDate = moment().format('YYYY/MM/DD');



getApiData().then(allData => {
  hotelData = allData;
  console.log('allData', allData)
  return allData;
})

const loginButton = document.querySelector("#login-button");
loginButton.addEventListener('click', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const userLogin = document.querySelector("#username-input").value;
  let password = document.querySelector("#password-input").value;
  if (userLogin.toLowerCase() === 'manager' && password === 'overlook2020') {
    managerLogin()
  }
  if (userLogin.toLowerCase().includes('customer') && password === 'overlook2020') {
    customerLogin(userLogin)
  }
}
// reduce(a, b) => a + b;

function managerLogin(){
  manager = new Manager(hotelData.users, hotelData.rooms, hotelData.bookings, currentDate);
  console.log('Mclick', manager)
  hideLogin();
  switchToManagerView();
  displayManagerView()
  // 
}

let todaysBooking = document.querySelector('.total-bookings-for-today');

function switchToManagerView() {
  todaysBooking.classList.remove('hide');
  document.querySelector('.manager-view').classList.remove('hide')
  console.log('manager', manager)
}
  // todays
function displayManagerView() {
  displayManagerRoomsBooked();
  displayPercentageBooked();
  displayTodaysRevenue()
}

function displayManagerRoomsBooked() {
  manager.todaysBookings.forEach(booking =>
  todaysBooking.insertAdjacentHTML("afterbegin", 
  `<h1>${booking.roomNumber}</h1>
  `))
}

function displayPercentageBooked() {
  let percentBooked = document.querySelector('.percent-booked-today');
  // manager.todaysBookings.forEach(booking =>
  percentBooked.insertAdjacentHTML("afterbegin", 
  `<h1>Percent Booked:${manager.percentBookings}</h1>
  `)
  // )
}

function displayTodaysRevenue() {
  let todaysRevenue = document.querySelector('.revenue-for-today');
  // manager.todaysBookings.forEach(booking =>
  todaysRevenue.insertAdjacentHTML("afterbegin", 
  `<h1>Today's Revenue: ${manager.todaysRevenue}</h1>`)
  // )
}

function hideLogin() {
  document.querySelector('.login-container').classList.add('hide');
}

function customerLogin(customerInput) {
  let customerId = customerInput.substring(8);
  // hideLogin()
  // displayCustomerLogin();
  currentUser = new Customer(findUserById(customerId), hotelData.bookings, hotelData.rooms);
  // manager will do same thing w currentCustomer
  // currentUser.findBookings(hotelData.bookings);
  console.log(currentUser)
}

function findUserById(id) {
  return hotelData.users.find(user => user.id == id);
  // use == when strign and number
}

function findUserByName(name) {
  return hotelData.users.find(user => user.name.toLowerCase() == name.toLowerCase());

}

document.querySelector('.search-customer-button').addEventListener('click', setManagerCustomerLookup);

function setManagerCustomerLookup() {
  let name = document.querySelector('.findUser').value;
  manager.setCurrentCustomer(new Customer(findUserByName(name), hotelData.bookings, hotelData.rooms));
  let customerSearch = document.querySelector('.search-for-customer')
  
  if (document.getElementById('revenue')) {
    document.getElementById('revenue').remove();
  }
  customerSearch.insertAdjacentHTML("afterend",
    `<h1 id="revenue">Today's Revenue: ${manager.todaysRevenue}</h1>`)
  // console.log(manager)
  // manager.currentCustomer.whateverCustomerOwns
  // console.log(manager.currentCustomer.totalAmountSpent)
}

function logOut() {
  const logOutButton = document.querySelector('.log-out').addEventListener('click', logOut);
  document.querySelector('.manager-view').classList.add('hide')
  document.querySelector('.login-container').classList.remove('hide')
}
// revenue
// when know todays bookings, you can use infor to cross ref and get info from rooms
// know rooms that have been booked, iterate rooms array, grab cost
// iterate through w reduce to increment sum

// Percentage of rooms occupied for today’s date
// rooms booked 

//look into adding to manager class? Todays available rooms and used to calculate percentage


// when manager logs in 
// hide login
// display customer login
// display manager login
// logout button and removes current user or manager or both


// handleSubmit() {
//   id = getId()
//   if(!managerLogin()) {
//     invoke manager function
//   } else {
//   user = findUserById()
//   let loggedInUser = new User()
//   render page functoin
//   }
// }
