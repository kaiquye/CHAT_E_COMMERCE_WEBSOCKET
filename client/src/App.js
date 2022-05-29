import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes/RoutesApp'
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

  Socket.emit('lista_mensagens', { sala: 'kaique', mensagem: 'ola' })

  Socket.on('lista_mensagens', (data) => {
    console.log(data)
  })

  return (
    <BrowserRouter>
      <div className="App">
        <RoutesApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
