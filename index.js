import express from 'express';
const app  = express()
app.use(express.json())
const port = process.env.PORT || 3000
import { readFileSync } from 'fs';

const postsData = readFileSync('./src/Posts/posts.json', 'utf8');
const posts = JSON.parse(postsData);

app.get("/", (req,res) => {
    return res.json("Hello world")
})
app.get('/posts', (req, res) => {
    return res.json(posts)
})


app.listen(port, () => {
    console.log('servidor esta funcionando')
})

