let mathInput = document.getElementById('math-input');
let factoredDiv = document.getElementById('factored-div');

async function factor() {
  let expression = encodeURIComponent(mathInput.value);
  console.log(expression);
  let url = 'https://newton.now.sh/api/v2/factor/' + expression;
  let response = await fetch(url);
  let js = await response.json();
  console.log(js);
  factoredDiv.innerHTML = js.result;
}