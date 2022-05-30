import { AuthContext } from "../context/auth-admin-context/context";
import { useContext } from "react"
import { LoginAdminPage } from "../pages/login-admin-public";
import { useToken } from "../services/localStorage";

export const AuthRoute = function ({ children }) {

    const isToken = useToken().getToken()

    if (isToken) {
        return children
    }

    return <LoginAdminPage />
}