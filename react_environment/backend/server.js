const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res)=>{


    let student = [
        {
            id: 1,
            name: "Jared",
            hobby: "Snowboarding"
        },
        {
            id: 2,
            name: "David",
            hobby: "Music"
        },
        {
            id: 3,
            name: "Andrew",
            hobby: "Golf"
        },
        {
            id: 4,
            name: "Anders",
            hobby: "Biking"
        }

    ];
 
    res.json(student);
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})