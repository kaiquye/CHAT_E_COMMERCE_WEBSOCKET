import { Routes, Route, Outlet } from 'react-router-dom';
import { ContextChatWebSocketProvider } from '../context/chat-web-context/contextChat';
import { AuthContextProvider } from '../context/auth-admin-context/context';
import Home from '../pages/home-public/home'
import { LoginAdminPage } from '../pages/login-admin-public';

function RoutesApp() {
    return (
        <AuthContextProvider>
            <ContextChatWebSocketProvider>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<LoginAdminPage />} />
                </Routes>
            </ContextChatWebSocketProvider>
        </AuthContextProvider>
    )
}

export default RoutesApp
