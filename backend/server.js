const express = require("express")

const app = express()

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => {
    
    console.log(`Server running on port ${PORT}`)
    console.log(`test`)
});

