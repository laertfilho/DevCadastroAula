'use strict';
var
    logbook,
    settings,
    server;
logbook = new (require('log'))('info');
settings = require('./settings/server');
server = require('lokapala')(settings);
require('./routes')(server.application, logbook);
require('./sockets')(server.sockets, logbook);
server.listen(settings.port, function onListening() {
    logbook.info(
        'Listening on port %d in %s mode. GO! GO! GO!',
        this.address().port,
        server.application.settings.env
    );
});
