import './App.css';
import { io } from 'socket.io-client';
import { useEffect } from 'react';

function App() {

  const Socket = io("ws://localhost:4000", {
    transports: ["websocket"],
  })
  Socket.emit('novo_sala', { sala: 'kaique' })
  Socket.on('teste', (data) => {
    console.log(data)
  })

  return (
    <div className="App">
      <h1>Teste</h1>
    </div>
  );
}

export default App;
