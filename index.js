const express = require("express");

const app = express();

// We only use express to serve the main client ( index.html )
// Express is NOT needed for socket.io or WebSockets in general

app.use(express.static("public"));

const http = app.listen(3000);