const express = require('express');
const app = express();
const port = 5000;

const home = require('./modules/home');
const about = require('./modules/about');
const contact = require('./modules/contact');

const name = "John Smith";

app.get('/', (req, res) => {
  res.send(home(name));
});

app.get('/about', (req, res) => {
  res.send(about(name));
});

app.get('/contact', (req, res) => {
  res.send(contact(name));
});

app.get('/gallery', (req, res) => {
  res.send(`
    <h1>Gallery</h1>
    <p>Welcome to the gallery page.</p>
    <footer><small>Villanueva, Martin Conrad S., 14/04/2025, WD-302</small></footer>`);
});

app.use((req, res) => {
  res.status(404).send(`
    <h1>404 Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <footer><small>Villanueva, Martin Conrad S., 14/04/2025, WD-302</small></footer>`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/*Villanueva, Martin Conrad S. WD-302*/
