import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes/RoutesApp'
import { io } from 'socket.io-client';
import { useEffect } from 'react';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <RoutesApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
