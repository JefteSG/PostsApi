const express = require('express')
const app  = express()
const port = process.env.PORT || 3000

const posts = require('./src/Posts/posts.json')

app.get('/posts', (req, res) => {
    return res.json(posts)
})

app.listen(port, () => {
    console.log('servidor esta funcionando')
})

