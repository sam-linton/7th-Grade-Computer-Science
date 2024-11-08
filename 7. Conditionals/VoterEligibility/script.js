function analyzeInput()
{
  // Retrieve name input element
  const nameInput = document.getElementById("name-input");
  console.log('nameInput type is ' + typeof(nameInput));

  // Get the name from the input
  const name = nameInput.value;
  console.log('name has type ' + typeof(name));

  // Retrieve age input element
  const ageInput = document.getElementById("age-input");

  // Get the age from the input
  const value = ageInput.value;
  console.log('value has type ' + typeof(value));
  const age = Number(value);
  console.log('age has type ' + typeof age);

 // Retrieve felon checkbox element
  const felonCheckbox = document.getElementById("felon-checkbox");
  const isFelon = felonCheckbox.checked;
  console.log('isFelon is type ' + typeof(isFelon));

  // Output summary
  const outputDiv = document.getElementById('output-div');
  outputDiv.innerText = name + ', ' + ' age = ' + age + ".";
}