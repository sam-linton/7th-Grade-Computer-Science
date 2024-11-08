let webApisDiv = document.getElementById('web-apis-div');
let urls = [
  'https://catfact.ninja/fact',
  'https://random.dog/woof.json',
  'https://www.boredapi.com/api/activity',
  'https://v2.jokeapi.dev/joke/Any?safe-mode',
  'https://newton.vercel.app/api/v2/factor/x%5E2-1',
  'https://api.thedogapi.com/v1/images/search',
  'https://worldtimeapi.org/api/timezone/America/Los_Angeles'
];

loadAllWebApis();

async function loadAllWebApis() {
  for (let i = 0; i < urls.length; i++) {
    let url = urls[i];
    let response = await fetch(url);
    let js = await response.json();
    webApisDiv.innerHTML += `<a href="${url}">${url}</a>`;
    webApisDiv.innerHTML += `<pre>${JSON.stringify(js, null, 2)}</pre>`;
  }
}