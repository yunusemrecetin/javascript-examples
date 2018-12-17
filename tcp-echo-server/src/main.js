import net from "net";

const server = net.createServer((socket) => {

  socket.pipe(socket);

});

server.listen(8000);
