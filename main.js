const express = require('express');
const app = express();
const fs = require('fs');

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (!err) {
    app.get('/x', function (req, res) {
        res.send(data);
      });
    console.log(data);
  } else {
    console.error(err);
  }
});

app.listen(3001, function () {
    console.log('Example app listening on port 3000!');
  });