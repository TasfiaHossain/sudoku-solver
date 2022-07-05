
const PORT = 8800;
const axios = require('axios').default
const express = require('express')
const cors = require('cors')
require('dotenv').config()

// we got everything from the express package, now we need to release it
const app = express()
app.use(cors())
app.use(express.json())

// app.get("/", (req, res) => {
//     res.send({message: "hello"})
// })

app.post('/solve', (req,res) => {
    const options = {
        method: 'POST',
        url: 'https://solve-sudoku.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
        },
        
        data: {
            puzzle: '{"puzzle":"2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3"}'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        // need to get into the response data and find the solution --> populate values
        res.json(response.data)

    }).catch(function (error) {
        console.error(error);
      });
    })

app.listen(PORT,() => console.log('server listening on PORT ${PORT}'))
