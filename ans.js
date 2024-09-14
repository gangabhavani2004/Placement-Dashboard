function fetchData() {
  // Fetch Excel file
  fetch('data.xlsx')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => {
          // Convert Excel data to JSON
          const workbook = XLSX.read(arrayBuffer, { type: 'array' });
          const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
          const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

          // Assuming the JSON data structure is the same as before
          const data = jsonData[0];
          console.log(data);
          
          // Update HTML elements
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
                          'yellow', // Red (Transparent)
                          'green' // Blue (Transparent)
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