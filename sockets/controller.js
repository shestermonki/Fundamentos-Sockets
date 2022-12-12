const socketController = (socket) => {
  console.log("Cliente conectado", socket.id);
  //socket.disconect();
  socket.on("disconnect", () => {
    console.log("Cliente desconectado", socket.id);
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    const id = "123456";
    callback(id);
    // this.io.emit("enviar-mensaje", payload);
    socket.broadcast.emit("enviar-mensaje", payload);
  });
};

module.exports = {
  socketController,
};
