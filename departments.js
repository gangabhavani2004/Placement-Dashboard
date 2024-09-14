// Function to fetch JSON data and populate department information
function fetchData() {
    fetch('departments.json')
      .then(response => response.json())
      .then(data => {
        // Extract department names and student data
        const departments = Object.keys(data);
        const totalStudents = departments.map(dep => data[dep].totalStudents);
        const placedStudents = departments.map(dep => data[dep].placedStudents);
        const notPlacedStudents = departments.map(dep => data[dep].notPlacedStudents);
  
        // Generate the graph
        generateGraph(departments, totalStudents, placedStudents, notPlacedStudents);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Function to generate the graph
  function generateGraph(departments, totalStudents, placedStudents, notPlacedStudents) {
    var ctx = document.getElementById('departmentChart').getContext('2d');
    var departmentChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: departments,
        datasets: [
          {
            label: 'Total Students',
            data: totalStudents,
            backgroundColor: 'thick pink',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'Placed Students',
            data: placedStudents,
            backgroundColor: 'thick light green',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Not Placed Students',
            data: notPlacedStudents,
            backgroundColor: 'orange',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  // Call fetchData function when the page loads
  window.onload = fetchData;
  