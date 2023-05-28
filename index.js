const express = require('express');
const app  = express()
app.use(express.json())
const port = process.env.PORT || 3000

const posts = require('./src/Posts/posts.json')
app.get("/", (req,res) => {
    return res.json("Hello world")
})
app.get('/posts', (req, res) => {
    return res.json(posts)
})


app.listen(port, () => {
    console.log('servidor esta funcionando')
})

