const express = require('express');
const path = require('path');

// Init Express
var app = express();

// Config vars
var PORT = 5000;

// Routes
const routes = require("./routes");

app.use(routes);
app.use("/file", express.static(path.join(__dirname, "public")));

// IP for testing
var ifaces = require('os').networkInterfaces();

// // Iterate over interfaces ...
var ip = Object.keys(ifaces).reduce(function (result, dev) {
  return result.concat(ifaces[dev].reduce(function (result, details) {
    return result.concat(details.family === 'IPv4' && !details.internal ? [details.address] : []);
  }, []));
});

// Print the result
ip = ip.replace("lo0", "");

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
    console.log("Local Network at: http://" + ip + ":" + PORT);
});