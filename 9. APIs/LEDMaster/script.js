async function pulse() {
  let resp = await fetch('https://harker-hub-api.herokuapp.com/ledstrip/pulse');
}

async function ripple() {
  let resp = await fetch('https://harker-hub-api.herokuapp.com/ledstrip/ripple');
}

async function rippie() {
  let resp = await fetch('https://harker-hub-api.herokuapp.com/ledstrip/blink');
}