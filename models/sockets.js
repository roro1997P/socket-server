

class Sockets {
    constructor( io ) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {

        this.io.on('connection', ( socket ) => {
            socket.emit('mensaje-bienvenida', {
               msg: 'Bienvenido al server',
               fecha: new Date(),
           });

           // Escuchar evento: mensaje-to-server
           socket.on('mensaje-to-server', ( data ) => {
               console.log(data);
       
               this.io.emit('mensaje-from-server', data );
           });
       });
    }

};

module.exports = Sockets;