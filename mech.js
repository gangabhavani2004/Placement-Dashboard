// Function to fetch JSON data and populate department information
function fetchData() {
    fetch('mech.json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('totalStudents').textContent = data.totalStudents;
        document.getElementById('placedStudents').textContent = data.placedStudents;
        document.getElementById('notPlacedStudents').textContent = data.notPlacedStudents;
        document.getElementById('averagePackage').textContent = '₹' + data.averagePackage;
  
        // Create chart
        var ctx = document.getElementById('departmentChart').getContext('2d');
        var departmentChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Placed', 'Not Placed'],
            datasets: [{
              label: 'Number of Students',
              data: [data.placedStudents, data.notPlacedStudents],
              backgroundColor: [
                ' brown', // Red (Transparent)
                'yellow' // Blue (Transparent)
              ],
              borderColor: [
                'rgba(255, 0, 0, 0.8)', // Red (Semi-transparent)
                'rgba(0, 0, 255, 0.8)' // Blue (Semi-transparent)
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Call fetchData function when the page loads
  window.onload = fetchData;
  