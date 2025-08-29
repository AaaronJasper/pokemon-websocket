import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
app.use(express.json());

const httpServer = http.createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

// For React, connect websocket for fronend
// Use httpServer for socket.io to turn http to websocket
io.on("connection", (socket) => {
  console.log("Client connected", socket.id);

  socket.on("join", (channel) => {
    socket.join(channel);
    console.log(`${socket.id} join channel ${channel}`);
  });

  socket.on("leave", (channel) => {
    socket.leave(channel);
    console.log(`${socket.id} join channel ${channel}`);
  });
});

// For Laravel, receive request from backend
// Use Express server only for http API (Express is framework is easier to use)
app.post("/broadcast", (req, res) => {
  const { channel, event, data } = req.body;
  io.to(channel).emit(event, data);
  console.log(`broadcast ${event} to channel ${channel}`, data);
  res.sendStatus(200);
});

//----------------------------------------------------------------------------------

app.listen(6002, () => {
  console.log("HTTP server (for Laravel) running on port 6002");
});

httpServer.listen(6001, () => {
  console.log("WebSocket server (for React) running on port 6001");
});
