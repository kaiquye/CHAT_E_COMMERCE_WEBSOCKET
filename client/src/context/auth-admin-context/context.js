import { createContext, useState } from "react";
import { AdminServices } from "../../services/admin";
import { useToken } from "../../services/localStorage";

export const AuthContext = createContext({});


export function AuthContextProvider({ children }) {

    const [Auth, setAuth] = useState(false)

    const useAdmin = AdminServices()
    const Token = useToken()

    let Login = async (email, password) => {
        try {
            let response = await useAdmin.login(email, password)
            Token.setToken(response.data.Token)
            setAuth(true)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    return (
        <AuthContext.Provider value={{ Login, Auth }} >
            {children}
        </AuthContext.Provider>
    )
}