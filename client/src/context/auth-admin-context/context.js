import { createContext, useState } from "react";
import { AdminServices } from "../../services/admin";

export const AuthContext = createContext({});


export function AuthContextProvider({ children }) {

    const [Auth, setAuth] = useState(false)

    const useAdmin = AdminServices()

    let Login = (email, password) => {
        try {
            useAdmin.login(email, password)
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