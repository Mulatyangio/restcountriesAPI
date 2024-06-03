function fetchData() {
    return fetch('data.json')
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Function to display the data in HTML
function displayData(data) {
    const container = document.getElementById('dataContainer');
    data.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `Name: ${item.name}, Age: ${item.age}`;
        container.appendChild(div);
    });
}

// Fetch data and display it when the page loads
window.onload = () => {
    fetchData()
        .then(data => {
            if (data) {
                displayData(data);
            } else {
                console.error('No data found.');
            }
        });
};