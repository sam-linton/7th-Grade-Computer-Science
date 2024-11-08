async function loadPic() {
  // Make the API call
  const response = await fetch('https://api.thedogapi.com/v1/images/search');

  // Get the JSON from the response
  const js = await response.json();

  // Extract the url from the json
  const url = js[0].url;

  // Set the image url
  let image = document.getElementById('dog-image');
  image.src = url;
}

loadPic();