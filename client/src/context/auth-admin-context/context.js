import { createContext } from "react";
import { AdminServices } from "../../services/admin";

export const AuthContext = createContext({});


export function AuthContextProvider({ children }) {

    const useAdmin = AdminServices()

    let Login = (email, password) => {
        try {
            useAdmin.login(email, password)
            return true
        } catch (error) {
            alert(error)
            return false
        }
    }

    return (
        <AuthContext.Provider value={{ Login }} >
            {children}
        </AuthContext.Provider>
    )
}