const express = require('express')
const app = express()
const port = 4646

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yerin:wlsgml16942@boilerplate-5ilvg.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 
}).then(() => console.log('MongoDB Connected...!'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}!`))