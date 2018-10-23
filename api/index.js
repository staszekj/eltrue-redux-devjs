"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const express = require("express");
const bodyParser = require("body-parser");
const errorHandler_1 = require("./handlers/errorHandler");
const routes_1 = require("./routes");
const app = express();
app.listen(9000, "localhost", function (err) {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(errorHandler_1.unCoughtErrorHandler);
  var routes = new routes_1.default(app);
});
//# sourceMappingURL=index.js.map
