'use strict';

const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '172.18.0.2',
    user : 'ashish',
    password : '123456',
    database : 'trial'
  }
});


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public')); // This line.
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.get('/', (req, res) => {
	knex.select().table('Notes')
  .then(note => {
    res.render('note', {
    note: note
  });
  })
})


app.post('/addNotes', (req, res) => {
  console.log(req.body);
  const note = {
    newNote: req.body.newNote
  }
  console.log(note)
  knex('Notes').insert(note)
  .then(console.log)

  knex.select().table('Notes')
  .then(note => {
    res.render('note', {
    note: note
  });
  })

})



app.post('/deleteNote/:id', (req, res) => {
  knex('Notes').where('id', req.params.id)
  .del()
  .then(data => {
    knex.select().table('Notes')
    .then(note => {
    res.render('note', {
    note: note
  });
  })
  })
})

app.listen(PORT, HOST, async () => {
	console.log(`Running on http://${HOST}:${PORT}`);
});
