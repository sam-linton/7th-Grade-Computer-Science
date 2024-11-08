let chores = [];

readChores();
drawChores();

function drawChores() {
  let choreList = document.getElementById('chore-list');
  choreList.innerHTML = '';
  for (let i = 0; i < chores.length; i++) {
    choreList.innerHTML += '<div class="chore">' + chores[i] +
      '<button onclick="deleteChore('
      + i +
      ')"><span class="material-symbols-outlined">delete</span></button></div>';
  }
}

function addChore() {
  let newChoreInput = document.getElementById('new-chore-input');
  let newChore = newChoreInput.value;
  chores.push(newChore);
  saveChores();
  drawChores();
  newChoreInput.value = '';
}

function deleteChore(i) {
  chores.splice(i, 1);
  saveChores();
  drawChores();
}

function readChores() {
  chores = [];
  let choresString = localStorage.getItem('chores');
  if (choresString != null) {
    chores = JSON.parse(choresString);
  }
}

function saveChores() {
  localStorage.setItem('chores', JSON.stringify(chores));
}