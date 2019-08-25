var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
