function affirm() {
  let dialogBox = document.getElementById("dialog-box");
  let textBox = document.getElementById("nameTextBox");
  let affirmation = document.getElementById("affirmation");

  affirmation.innerHTML = "You rock " + textBox.value + "!";
  dialogBox.style.display = "block";
}

function dismiss() {
  let dialogBox = document.getElementById("dialog-box");
  let textBox = document.getElementById("nameTextBox");
  textBox.value = "";

  dialogBox.style.display = "none";
}