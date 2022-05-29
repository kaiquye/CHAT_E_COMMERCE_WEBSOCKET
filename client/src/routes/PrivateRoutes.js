import { AuthContext } from "../context/auth-admin-context/context";
import { useContext } from "react"
import { LoginAdminPage } from "../pages/login-admin-public";

export const AuthRoute = function ({ children }) {

    const { Auth } = useContext(AuthContext);

    if (Auth) {
        return { children }
    }
    return <LoginAdminPage />
}