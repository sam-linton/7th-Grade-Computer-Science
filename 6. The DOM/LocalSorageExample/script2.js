
// Retrieve the name from local storage
const name = localStorage.getItem("name");
console.log(name);

// Access the div and set its inner HTML
const welcomeDiv = document.getElementById("welcomeDiv");
welcomeDiv.innerHTML = "Welcome " + name + "!";