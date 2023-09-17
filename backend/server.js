const express = require("express")

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('<body style="background-color: gray;"><h1>hello world</h1></body>')
})

app.listen(PORT, () => {
    
    console.log(`Server running on port ${PORT}`)
    
});

