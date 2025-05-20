const express = require('express');
const fs = require('fs');
const os = require('os');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const counterFile = path.join(__dirname, 'counter.json');


function readCounter() {
  try {
    const data = fs.readFileSync(counterFile, 'utf8');
    return JSON.parse(data).count || 0;
  } catch (err) {
    return 0; 
  }
}

function saveCounter(count) {
  fs.writeFileSync(counterFile, JSON.stringify({ count }), 'utf8');
}

let visitCount = readCounter();
const serverName = os.hostname();

app.get('/', (req, res) => {
  visitCount++;
  saveCounter(visitCount);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Visit Counter App</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
          background-color: #f5f5f5;
        }
        h1 {
          color: #0078D4;
        }
        .counter {
          font-size: 24px;
          margin: 20px 0;
          padding: 10px;
          background-color: #0078D4;
          color: white;
          border-radius: 5px;
        }
        .info {
          margin-top: 30px;
          padding: 15px;
          background-color: #e1e1e1;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <h1>Hello I'm Reda Ganoutre FROM KENITRA</h1>
      <div class="counter">
        Visitor count: ${visitCount}
      </div>
      <div class="info">
        Server: ${serverName}
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});