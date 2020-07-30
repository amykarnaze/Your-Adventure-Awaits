 function userData() {
   let usersData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
     .then(response => response.json())
     .then(data => {
       return data.users;
     })
     .catch(err => console.log(err.message));
}

function roomData() {
  let roomsData = fetch('https: //fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then(response => response.json())
    .then(data => {
      return data.rooms;
    })
    .catch(err => console.log(err.message))
}

