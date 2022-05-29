import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '../pages/home-public/home'

function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default RoutesApp
