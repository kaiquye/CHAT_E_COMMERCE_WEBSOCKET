import './App.css';
import { io } from 'socket.io-client';
import { useEffect } from 'react';

function App() {

  const Socket = io("ws://localhost:4000", {
    transports: ["websocket"],
  })


  Socket.emit('nova_sala', { sala: 'kaique', mensagem: 'ola' })

  Socket.on('sala_mensagens', (data) => {
    console.log(data)
  })

  return (
    <div className="App">
      <h1>Teste</h1>
      <button onClick={() => {
        Socket.emit('nova_mensagem', { sala: 'kaique', mensagem: 'ola' });
      }} >
        teste
      </button>
    </div>
  );
}

export default App;
