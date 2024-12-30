const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://v3.football.api-sports.io/fixtures';

fetch(proxyUrl + apiUrl, {
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
