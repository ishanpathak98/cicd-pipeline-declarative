const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.json({ message: "Node.js API is working!" });
});

app.listen(port, () => {
  console.log(`Node.js app listening on port ${port}`);
});