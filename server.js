const express = require('express');

const actionRouter = require('./routers/actionRouter');
const projectRouter = require('./routers/projectRouter');

const server = express();

server.use(express.json());

server.use('/actions', actionRouter);
server.use('/projects', projectRouter);

server.get('/', (req, res) => {
res.send(`
    <h1>Sprint Actions and Projects API</h1>
    <p>Use /actions to access Action Router</p>
    <p>Use /projects to access Project Router</p>
`)
})

module.exports = server;