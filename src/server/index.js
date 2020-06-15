var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", function (req, res) {
  res.send("hello");
});

io.on("connection", function (socket) {
  console.log("a user conncetion");
  socket.on("chat message", function (msg) {
    console.log("message  ", JSON.stringify(msg));
    io.emit('chat message',msg)
  });
});

http.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
