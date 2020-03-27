const http = require('http');

const app = require('./api/app');

const port = process.env.PORT || 80;

const server = http.createServer(app);

server.listen(port);

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use`);
    process.exit(1);
  }
});

server.on('listening', () => {
  console.log(`Connected on port ${port}`);
});
