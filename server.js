const express = require('express');

const httpPort = process.env.PORT || 3000;
const app = express();
const httpServer = require('http').createServer(app);

app.use(express.static('build', { dotfiles: 'allow' }));

httpServer.listen(httpPort, () => {
  console.log('HTTP server running on port ', httpPort);
});
