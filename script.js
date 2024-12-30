document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://v3.football.api-sports.io/fixtures'; // Replace with your API endpoint

    // Fetch data from the API
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-apisports-key': '055722eb2a687b84235609be89b9f27e', // Replace with your API key
            'x-apisports-host': 'v3.football.api-sports.io'
        }
    })
        .then(response => response.json())
        .then(data => populateTable(data))
        .catch(error => console.error('Error:', error));
});

// Populate the table
function populateTable(data) {
    const tableBody = document.getElementById('footballTable').querySelector('tbody');

    data.response.forEach(match => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${match.fixture.date}</td>
            <td>${match.teams.home.name}</td>
            <td>${match.teams.away.name}</td>
            <td>${match.goals.home} - ${match.goals.away}</td>
        `;
        tableBody.appendChild(row);
    });
}
