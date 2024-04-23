// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const port = 4200;

// const message = "Welcome to my Node.js App!";

// // Define a route for the root URL '/'
// app.get('/', (req, res) => {
//     // Read the HTML file
//     fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
//         if (err) {
//             // Error handling
//             res.status(500).send('Internal Server Error');
//         } else {
//             // Set the appropriate content type
//             res.setHeader('Content-Type', 'text/html');
//             // Replace the placeholder with the message
//             const renderedHTML = data.toString().replace('{message}', message);
//             // Send the modified HTML to the client
//             res.send(renderedHTML);
//         }
//     });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 4200;

const message = "Welcome to my Node.js App!";

// Define a route for the root URL '/'
app.get('/', (req, res) => {
    // Read the HTML file
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            // Error handling
            res.status(500).send('Internal Server Error');
        } else {
            // Set the appropriate content type
            res.setHeader('Content-Type', 'text/html');
            // Replace the placeholder with the message
            const renderedHTML = data.toString().replace('{message}', message);
            // Send the modified HTML to the client
            res.send(renderedHTML);
        }
    });
});

// Export the app object
module.exports = app;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
