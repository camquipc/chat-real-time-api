const server = require('./server/server');

const { port } = require('./config');


server.listen(port, () => console.log(`Serve run on http://localhost:${port}`));