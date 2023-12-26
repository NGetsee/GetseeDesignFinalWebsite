const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db');

// Create a table to store form data (if it doesn't exist)
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS formData (name TEXT, email TEXT)");
});

const form = document.getElementById('data-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Insert form data into the SQLite database
    db.run("INSERT INTO formData (name, email) VALUES (?, ?)", [name, email], function (err) {
        if (err) {
            console.error(err.message);
            return;
        }
        console.log(`A row has been inserted with rowid ${this.lastID}`);
        // You can add a success message or redirect to a thank-you page here.
    });
});
