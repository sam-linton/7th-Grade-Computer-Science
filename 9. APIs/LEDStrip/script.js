const url = "https://harker-hub-api.herokuapp.com/ledstrip/";

function ledStripAction(command) {
  const ledUrl = url + command;
  console.log(command);
  console.log(ledUrl);
  fetch(ledUrl)
    .then(()=> {
      console.log("done");
    });
}