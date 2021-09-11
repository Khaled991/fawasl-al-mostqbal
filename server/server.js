const express = require("express");
const app = express();
const server = require("http").Server(app);
const socketio = require("socket.io");
var io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("user-connected",userId)
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`working on port ${PORT}`));
