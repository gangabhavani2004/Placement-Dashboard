function fetchData() {
    // Replace 'data.csv' with the path to your CSV file
    fetch('data.csv')
      .then(response => response.text())
      .then(data => {
        // Parse CSV data
        const rows = data.trim().split('\n').map(row => row.split(','));
        const headers = rows[0];
        const values = rows.slice(1);
  
        // Assuming your CSV structure is like: Department,PlacedStudents,NotPlacedStudents,AveragePackage
        const departmentData = values.map(row => ({
          department: row[0],
          placedStudents: parseInt(row[1], 10),
          notPlacedStudents: parseInt(row[2], 10),
          averagePackage: parseFloat(row[3])
        }));
  
        // Populate department information
        const totalStudents = departmentData.reduce((total, department) => total + department.placedStudents + department.notPlacedStudents, 0);
        const totalPlacedStudents = departmentData.reduce((total, department) => total + department.placedStudents, 0);
        const totalNotPlacedStudents = departmentData.reduce((total, department) => total + department.notPlacedStudents, 0);
        const averagePackage = departmentData.reduce((total, department) => total + department.averagePackage, 0) / departmentData.length;
  
        document.getElementById('totalStudents').textContent = totalStudents;
        document.getElementById('placedStudents').textContent = totalPlacedStudents;
        document.getElementById('notPlacedStudents').textContent = totalNotPlacedStudents;
        document.getElementById('averagePackage').textContent = '₹' + averagePackage.toFixed(2);
  
        // Create chart
        var ctx = document.getElementById('departmentChart').getContext('2d');
        var departmentChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Placed', 'Not Placed'],
            datasets: [{
              label: 'Number of Students',
              data: [totalPlacedStudents, totalNotPlacedStudents],
              backgroundColor: ['yellow', 'green'], // Customize colors as needed
              borderColor: ['rgba(255, 0, 0, 0.8)', 'rgba(0, 0, 255, 0.8)'], // Customize colors as needed
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
  