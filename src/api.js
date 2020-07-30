 function userData() {
   return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
     .then(response => response.json())
     .then(data => data.users)
     .catch(error => console.log(error));
}

function roomData() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then(response => response.json())
    .then(data => data.rooms)
    .catch(error => console.log(error))
}

function bookingData() {
  return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(response => response.json())
    .then(data => data.bookings)
    .catch(error => console.log(error))
}

function getApiData() {
  return Promise.all([userData(), roomData(), bookingData()])
    .then(response => {
      let allData = {}
      allData.users = response[0];
      allData.rooms = response[1];
      allData.bookings = response[2];
      return allData;
  })
    .catch(error => console.log(error))
}

export default getApiData;
