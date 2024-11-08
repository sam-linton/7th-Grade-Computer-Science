async function loadCatFact() {
  // Wait for the response from the server
  let response = await fetch('https://catfact.ninja/fact');

  // Get the JSON from the response
  let js = await response.json();

  // Get the cat fact from the JSON
  let catFact = js.fact; // or js["fact"]

  // Update the display div
  let catFactDiv = document.getElementById('cat-fact-div');
  catFactDiv.innerHTML = catFact;
}