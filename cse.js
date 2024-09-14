// Function to fetch JSON data
function fetchData() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the retrieved data to console
        // Populate department information and create chart as before
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  