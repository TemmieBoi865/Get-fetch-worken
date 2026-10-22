fetch('http://api.open-notify.org/astros.json')
    .then(response => response.text())
    .then(data => console.log(data))
console.log("Hello");