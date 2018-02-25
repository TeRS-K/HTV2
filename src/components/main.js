var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'testtesT3!',
  database : 'login_register'
});
 
 
connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var server = app.listen(3000, "127.0.0.1", function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Example app listening at http://%s:%s", host, port)
 
});


//rest api to get all results
app.get('/user', function (req, res) {
  connection.query('select * from users', function (error, results, fields) {
  if (error) throw error;
  res.end(JSON.stringify(results));
});
});

//rest api to get a single employee data
app.get('/user/:id', function (req, res) {
  connection.query('select * from users where id=?', [req.params.id], function (error, results, fields) {
  if (error) throw error;
  res.end(JSON.stringify(results));
});
});

//rest api to create a new record into mysql database
app.post('/user', function (req, res) {
  var postData  = req.body;
  connection.query('INSERT INTO users SET ?', postData, function (error, results, fields) {
  if (error) throw error;
  res.end(JSON.stringify(results));
});
});

//rest api to update record into mysql database
app.put('/user', function (req, res) {
  connection.query('UPDATE `users` SET `full_name`=?,`password`=?, where `id`=?', [req.body.full_name,req.body.password, req.body.id], function (error, results, fields) {
  if (error) throw error;
  res.end(JSON.stringify(results));
});
});