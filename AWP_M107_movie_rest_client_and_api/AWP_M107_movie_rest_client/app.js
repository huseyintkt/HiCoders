


fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {
        document.querySelector("main").innerHTML = data.map(m => `<div>${m.id}, ${m.name} (${m.year})</div>`).join("")
    });