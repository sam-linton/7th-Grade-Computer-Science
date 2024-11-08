// Called with the enter button is clicked
function enterName() {
  // Access the input 
  nameInput = document.getElementById("name");

  // Save the entered name to local storage
  localStorage.setItem("name", nameInput.value);

  // Go to the next page
  window.location.href = "page2.html";
}