var express = require('express');
var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('db/users.db');
var bodyParser = require('body-Parser');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get('/users', function(request, response) {
  console.log('GET request received at /users');
});

app.post('/users', function(request, response) {
  console.log('POST request received at /users');
  var body = request.body;
  db.run('INSERT INTO users VALUES (?,?,?,?,?,?,?,?)',
  [body.firstName, body.lastName, body.company,
   body.zipCode, body.phoneNumber, body.email,
   body.industry, body.area], function(err){
     if (err){
       console.log("Error:" + err);
     }
     else {
       response.status(200).redirect('/users');
     }
   });
});

app.listen(5000, function() {
  console.log("Server is running on port 5000");
});
