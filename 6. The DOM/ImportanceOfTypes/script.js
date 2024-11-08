function analyzeInput()
{
  const ageInput = document.getElementById("age-input");
  const newAge = ageInput.value + 1;
  console.log("Next year you will be " + newAge);

  const newAgeDisplay = document.getElementById("new-age-display");
  newAgeDisplay.innerHTML = "After your birthday you will be " + newAge;
}
