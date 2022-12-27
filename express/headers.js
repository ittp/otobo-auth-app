const app = require('./app')
let headers = {
"Access-Control-Allow-Origin": "",
  "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
}

app.use(function(req, res, next) {
  let url = new URL(env.API_URL),
      domain = url.host
      console.log(url, domain)
  res.header("Access-Control-Allow-Origin", domain); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});
