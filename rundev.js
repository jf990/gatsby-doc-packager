/**
 * Run the development server. This will serve the project directly from the source folder with a static
 * HTTP server.
 */
var siteId = "qt";
var localPort = 8081;
var express = require("express");
var serveStatic = require("serve-static");
var webserver = express();
webserver.use(serveStatic("./public", {"index": ["index.html"]}));
webserver.listen(localPort);
console.log("Listening on port " + localPort + " open a browser to http://localhost:" + localPort + "/" + siteId + "/");
 
// Get nwjs.exe from https://nwjs.io/
nw.Window.open("http://localhost:" + localPort + "/" + siteId + "/", {}, function(win) {});
