import matplotlib.pyplot as plt
import json

# Load data from JSON file
with open('sample_data.json', 'r') as file:
    data = json.load(file)

# Extract x and y values
xAxis = list(data.keys())
yAxis = [sum(value.values()) / len(value) for value in data.values()]

# Line Graph
plt.figure()  # Create a new figure
plt.plot(xAxis, yAxis, color='maroon', marker='o')
plt.xlabel('Variable')
plt.ylabel('Average Value')
plt.title('Line Graph')

# Bar Graph
plt.figure()  # Create another figure
plt.bar(xAxis, yAxis, color='maroon')
plt.xlabel('Variable')
plt.ylabel('Average Value')
plt.title('Bar Graph')

plt.show()
