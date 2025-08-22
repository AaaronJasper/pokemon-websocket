# Pokémon WebSocket Server (Node.js)

A standalone WebSocket server built with Node.js and Socket.IO to provide real-time notifications for Pokémon events. This server acts as a bridge between the Laravel backend and React frontend.

---

## Features

- **Real-time Notifications**: Frontend clients (React) receive instant updates via WebSocket channels.
- **Channel-based Communication**: Clients can join/leave channels for user-specific notifications.
- **Laravel Integration**: Backend can broadcast events by sending HTTP POST requests to the server.
- **Docker Ready**: Can run as a standalone Docker container for easy deployment.

---

## Tech Stack

- **Runtime**: Node.js 18+
- **Web Framework**: Express
- **WebSocket**: Socket.IO
- **HTTP Server**: Node.js `http` module
- **CORS**: Configured for frontend access from any origin

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AaaronJasper/pokemon-websocket.git
cd pokemon-websocket
```

2. Install dependencies:

```bash
npm install
```
