//  Setting up the NPM express package. : Web framework for node.
var express = require("express");

//  Setting up the NPM body-parser package. : Creates middlewares.
var bodyParser = require("body-parser");

//  Setting up the path package. : ultilities for working with file and directory paths.
var path = require("path");

// Creating an epxress server.
var app = express();

// This is setting up the port where we can access in local servers.
var PORT = process.env.PORT || 3033;

// Data parsing.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// path to apiRoutes/htmlRoutes.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// This starts our serverl
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});