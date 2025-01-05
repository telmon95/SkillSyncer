import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Notification = () => {
  const [messages, setMessages] = useState([]);
  const socket = io(process.env.REACT_APP_API_URL || 'http://localhost:5000');

  useEffect(() => {
    socket.on('notification', (message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index} className="notification">
          <p>{msg}</p>
        </div>
      ))}
    </div>
  );
};

export default Notification;
