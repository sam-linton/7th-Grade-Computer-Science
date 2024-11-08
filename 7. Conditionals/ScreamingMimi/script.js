function analyze() {
  let heightInput = document.getElementById('height-input');
  let height = Number(heightInput.value);

  let answerDisplay = document.getElementById('answer-display');
  
  if (height < 48) {
    answerDisplay.innerHTML = 'Sorry! You are too vertically challenged';
  }
  else if (height > 78) {
      answerDisplay.innerHTML = 'There is a slight decapitation hazard. Please complete a waiver.';
  }
  else {
    answerDisplay.innerHTML = 'Welcome to the ride!';
  }
}