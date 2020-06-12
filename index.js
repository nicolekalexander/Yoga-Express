//importing packages 
const mysql = require('mysql')
const express = require('express')

//connect to database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'yoga_app',
    password: '123yogamE',
    database: 'yoga_poses'    
})

connection.connect()


//initiate express app
const app = express()
const port = 3000
app.set('view engine', 'pug')

//routes
app.get('/', (req, res) => {

    connection.query('SELECT * FROM poses', function (err, rows, fields){
        if (err) throw err
        res.render('index', { title: 'Yoga Poses', poses: rows})
    })
})

app.get('/about', (req, res) => {

    res.send("I'm a pretty bird")
})


//starts app - now its listening
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

   


