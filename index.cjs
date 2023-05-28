const express = require('express');
const { readFileSync } = require('fs');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

const postsData = require('./src/Posts/posts.json');

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  return res.json('Hello world');
});

app.get('/posts', (req, res) => {
  return res.json(postsData);
});

app.listen(3001, port, () => {
  console.log('Servidor está funcionando');
});
