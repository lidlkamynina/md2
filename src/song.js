const songsList = require('../assets/songs_list.json');


fetch(songsList)
  .then(response => response.json())
  .then(data => {
    const JSONdata = data;
    console.log(JSONdata);
  })
  .catch(error => {
    console.error('Error fetching or parsing the JSON file:', error);
  });