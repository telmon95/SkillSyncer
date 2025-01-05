module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('A user connected');
  
      // Emit a notification to the user (can be triggered based on backend logic)
      socket.emit('notification', 'New job posted!');
  
      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  };
  