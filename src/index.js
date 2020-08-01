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

// function getData()

let manager;
let currentUser;
let hotelData;

getApiData().then(allData => {
  hotelData = allData;
  // console.log('allData', allData)
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
  manager = new Manager(hotelData.users)
  console.log('Mclick')
  // hideLogin();
  // displayManagerView()
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

document.querySelector('.findUserButton').addEventListener('click', setManagerCustomerLookup);

function setManagerCustomerLookup() {
  let name = document.querySelector('.findUser').value;
  manager.setCurrentCustomer(new Customer(findUserByName(name), hotelData.bookings, hotelData.rooms));
  // console.log(manager)
  // manager.currentCustomer.whateverCustomerOwns
  console.log(manager.currentCustomer.totalAmountSpent)
}

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
