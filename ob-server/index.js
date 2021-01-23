const server = require('./config/server').app;
require('./routes/routes')(server);
