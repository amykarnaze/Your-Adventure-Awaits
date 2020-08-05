import './css/base.scss';
import './images/turing-logo.png'
import getApiData from './api';
import './css/base.scss';
import Customer from './Customer';
import Manager from './Manager';
import Bookings from './Bookings';
import Hotel from './Hotel';
const moment = require("moment");

let hotel;
let manager;
let currentCustomer;
let currentDate = moment().format('YYYY/MM/DD');

getApiData().then(allData => {
  hotel = new Hotel(allData.users, allData.rooms, allData.bookings)
});

const managerTrips = document.querySelector('.manager-display-rooms-container');
const customerTrips = document.querySelector('.customer-available-rooms-container');
const loginButton = document.querySelector("#login-button");
let type = document.querySelector('.room-select').value;
document.querySelector('.log-out').addEventListener('click', logOut);
loginButton.addEventListener('click', handleSubmit);
document.querySelector('.manager-search-dates-button').addEventListener('click', managerRoomAvaiability);
document.querySelector('.search-customer-button').addEventListener('click', setManagerCustomerLookup);
document.querySelector('.manager-display-rooms-container').addEventListener('click', bookingTarget)
document.querySelector('.customer-available-rooms-container').addEventListener('click', bookingTarget);
document.querySelector('.customer-search-dates-button').addEventListener('click', customerRoomAvaiability)

function handleSubmit(event) {
  event.preventDefault();
  document.querySelector('.log-out').classList.remove('hide');
  const userLogin = document.querySelector("#username-input").value;
  let password = document.querySelector("#password-input").value;
  if (userLogin.toLowerCase() === 'manager' && password === 'overlook2020') {
    managerLogin();
  }
  if (userLogin.toLowerCase().includes('customer') && password === 'overlook2020') {
    customerLogin(userLogin);
  } 
}

function managerLogin(){
  manager = new Manager(hotel.rooms, hotel.bookings, currentDate);
  console.log(manager)
  hideLogin();
  displayManagerView();
}

function hideLogin() {
  document.querySelector('.login-container').classList.add('hide');
}

function displayManagerView() {
  document.querySelector('.manager-container-view').classList.remove('hide');
  displayManagerRoomsBooked();
  displayPercentageBooked();
  displayTodaysRevenue();
}

function displayManagerRoomsBooked() {
  let todaysReservations = document.querySelector('.total-bookings-for-today');
  manager.calculateTotalBookingsSum();
  manager.todaysBookings.forEach(booking =>
  todaysReservations.insertAdjacentHTML("beforeend", 
  `<li>room number: ${booking.roomNumber}</li>
  `)
  )
}

function displayPercentageBooked() {
  let percentBooked = document.querySelector('.percent-booked-today');
  percentBooked.insertAdjacentHTML("beforeend", 
  `<li>Percent Booked:${manager.percentBookings}</li>
  `)
}

function displayTodaysRevenue() {
  let todaysRevenue = document.querySelector('.revenue-for-today');
  todaysRevenue.innerHTML = '';
  todaysRevenue.insertAdjacentHTML("afterbegin", 
  `<li>Today's Revenue: ${manager.todaysRevenue}</p>`);
}

function customerLogin(customerInput) {
  document.querySelector('.customer-booking-container').classList.remove('hide');
  hideLogin();
  let customerId = customerInput.substring(8);
  currentCustomer = new Customer(findUserById(customerId), hotel.bookings, hotel.rooms);
  displayCustomerDash();
}

function findUserById(id) {
  return hotel.customers.find(user => user.id == id);
}

function findCustomer(name) {
  return hotel.customers.find(user => user.name.toLowerCase() == name.toLowerCase());
}

function findUserByName(name) {
  return hotel.customers.find(user => user.name.toLowerCase() == name.toLowerCase());
}

function displayCustomerDash() {
  document.querySelector('.customer-name').innerText = `${currentCustomer.name}`;
  displayCustomerFinances();
  displayCustomerBookings();
}

function displayCustomerBookings() {
  let pastReservations = document.querySelector('.past-reservations-container');
  return currentCustomer.bookings.map(booking => {
    pastReservations.innerHTML += `<section><p>Booking Date:${booking.date}</p>`
  })
}

function displayCustomerFinances() {
 let customerFinances = document.querySelector('.customer-finances-container');
 let customerMoney = `<section><p>${currentCustomer.totalAmountSpent}</p></section>`
 customerFinances.insertAdjacentHTML("afterend", customerMoney);
}


function setManagerCustomerLookup() {
  let customerSearch = document.querySelector('.manager-user-info');
  customerSearch.innerHTML = '';
  let name = document.querySelector('.findUser').value;
  manager.setCurrentCustomer(new Customer(findUserByName(name), hotel.bookings, hotel.rooms));
  if (document.getElementById('revenue')) {
    document.getElementById('revenue').remove();
  }
  return manager.currentCustomer.bookings.map(booking => {
    customerSearch.innerHTML += `<section>
      <p>name:${manager.currentCustomer.name}</p>
      <p>booking date:${booking.date}</p>  
      <p>booking room: ${booking.roomNumber}</p>
      <p>booking Id: ${booking.id}</p>
      </section>`
  })
}


function logOut() {
  document.querySelector('.manager-container-view').classList.add('hide');
  document.querySelector('.login-container').classList.remove('hide');
  document.querySelector('.customer-booking-container').classList.add('hide');
}

// let date = document.querySelector('.booking-input').value;
// or
let date = document.querySelector('#date-input').value;


function customerRoomAvaiability() {
  let hotelRooms = hotel.availableRoomTypeAndDate(date, type)
  console.warn('date', date)
  customerAvailableRooms(hotelRooms);
}

function managerRoomAvaiability() {
  let hotelRooms = hotel.availableRoomTypeAndDate(date, type)
  managerAvailableRooms(hotelRooms);
}

function customerAvailableRooms(availableRooms) {
  console.log(availableRooms)
  if (availableRooms.length === 0) {
    alert('not available');
  } else {
    let available = availableRooms.map(room => {
      return `<section> 
      <p>Room Number: ${room.number}</p>
      <p>Room Type: ${room.roomType}</p> 
      <p>Bed Size: ${room.bedSize}</p>
      <p>Number of Beds: ${room.numBeds}</p>
      <button class="book-me" aria-label='Submit login information' value=${room.number} type=button>Book me</button></section>`
    }).join('')
    customerTrips.innerHTML = '';
    customerTrips.insertAdjacentHTML('afterbegin', '<h1>These Rooms Are Available for you.</h1>'+available)
  }
}
  

function managerAvailableRooms(availableRooms) {
  managerTrips.innerHTML = '';
  let available = availableRooms.map(room => {
    return `<section>
    <p>Room Number: ${room.number}</p> 
    <p>Room Type: ${room.roomType}</p> 
    <p>Bed Size: ${room.bedSize}</p> 
    <p>Number of Beds: ${room.numBeds}</p>
    <button class="manager-book-me" aria-label='Submit login information' value=${room.number} type=button>Book me</button></section>`
  }).join('')
  managerTrips.innerHTML += available;
}

function bookingTarget(event) {
  event.preventDefault();
  if (event.target.classList.contains('book-me') || event.target.classList.contains('manager-book-me')) {
    let date = isManagerView() ? document.querySelector('#customer-date-input').value : document.querySelector('#date-input').value;
    let formatedDate = date.split('-').join('/')
    currentCustomer = isManagerView() ? currentCustomer : manager.currentCustomer;
    let roomNumber = event.target.value;
    postNewBooking(currentCustomer, formatedDate, roomNumber);
  }
}

function isManagerView() {
  if (manager === undefined) {
    return true
  } else {
    return false;
  }
}

function postNewBooking(currentCustomer, date, roomNumber) {
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userID: currentCustomer.id,
        date: date,
        roomNumber: Number(roomNumber)
      })
    })
    .then(response => response.json())
    .then(data => console.log('postme', data))
    .catch(error => console.error(error))
}

// document.querySelector('.manager-display-rooms-container').addEventListener('click', managerAvailableBookings);

function managerAvailableBookings(hotelRooms) {
  let available = document.querySelector('.rooms-available-container')
   available = availableRooms.map(room => {
    return `<section>
    <p>Room Number: ${room.number}</p>
    <p>Room Type: ${room.roomType}</p> 
    <p>Bed Size: ${room.bedSize} Number of Beds: ${room.numBeds}
    <button class="book-me" value=${room.number} type=button>Book me</button></section>`
  }).join('')
  trips.innerHTML = '';
  trips.insertAdjacentHTML('afterbegin', '<h1>These Rooms Are Available for you.</h1>' + available)
  }
