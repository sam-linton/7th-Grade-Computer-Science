let userName = null;
readName();

// Read userName from local storage (null if missing)
function readName() {
  userName = localStorage.getItem('name');
  displayWelcome();
}

// Save userName to local stoage
function saveName() {
  let nameInput = document.getElementById('name-input');
  userName = nameInput.value;
  localStorage.setItem('name', userName);
  displayWelcome();
}

// Erase userName from local storage
function clearName() {
  userName = null;

  localStorage.removeItem('name');
  displayWelcome();
}

// Display welcome
function displayWelcome() {
  let welcome = document.getElementById('welcome');
  if (userName == null) {
    welcome.innerHTML = "Welcome! Enter name below."
  }
  else {
    welcome.innerHTML = 'Welcome ' + userName;
  }
}



