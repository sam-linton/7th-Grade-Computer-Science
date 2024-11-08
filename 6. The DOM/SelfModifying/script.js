let htmlTextArea = document.getElementById('html-text-area');
console.log(htmlTextArea);

let page = document.getElementById('page');

function updatePage() {
  page.innerHTML = htmlTextArea.value;
}

function executeCode() {
  code = document.getElementById('code-text-area').value;
  eval(code);
}