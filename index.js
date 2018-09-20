const Server = require('./core/Server');
const routes = require('./routes/routes');
let server = new Server();
server.connect(2020,() => {console.log("ola mundo!")},routes);