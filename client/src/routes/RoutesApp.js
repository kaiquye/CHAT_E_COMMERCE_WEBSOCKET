import { Routes, Route, Outlet } from 'react-router-dom';
import { ContextChatWebSocketProvider } from '../context/chat-web-context/contextChat';
import Home from '../pages/home-public/home'

function RoutesApp() {
    return (
        <ContextChatWebSocketProvider>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </ContextChatWebSocketProvider>
    )
}

export default RoutesApp
