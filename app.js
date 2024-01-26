require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// static files
app.use(express.static('public'));

// templating engine
app.use(expressLayouts)
app.set('layout','./layouts/main')
app.set('view engine', 'ejs');

app.use('/',require('./server/routes/index'));


app.listen(port,()=>{
      console.log('App listening on port 3000');
})