// Function to fetch JSON data and populate department information
function fetchData() {
    fetch('opt.json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('totalStudents').textContent = data.totalStudents;
        document.getElementById('placedStudents').textContent = data.placedStudents;
        document.getElementById('notPlacedStudents').textContent = data.notPlacedStudents;
        document.getElementById('averagePackage').textContent = '₹' + data.averagePackage;
  
        // Create chart
        var ctx = document.getElementById('departmentChart').getContext('2d');
        var departmentChart = new Chart(ctx, {
          type: 'pie', // Changed chart type to pie
          data: {
            labels: ['Placed', 'Not Placed'],
            datasets: [{
              label: 'Number of Students',
              data: [data.placedStudents, data.notPlacedStudents],
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)', // Red with transparency
                'rgba(0, 255, 0, 0.5)' // Green with transparency
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)', // Solid red border
                'rgba(0, 128, 0, 1)' // Solid green border
              ],
              borderWidth: 1
            }]
          },
          options: {
            // Add options for pie chart if needed
          }
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Call fetchData function when the page loads
  window.onload = fetchData;
