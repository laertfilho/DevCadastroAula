'use strict';
module.exports = function sockets(handler, logbook) {
    // defining sockets' behavior
    handler.sockets.on('connection', function (socket) {
        socket.emit('connected to a teapot');
    });
};
