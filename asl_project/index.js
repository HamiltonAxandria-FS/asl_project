const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false }))
app.set('views', __dirname + '/templates')
app.set('view engine', 'twig')


app.get('/', (req, res) => {
    res.render('views/home', { name: 'World!', 'users': [
        {name: 'Axandria Hamilton', email: 'axandria@gmail.com'}
    ]})
})



app.listen(3000)
