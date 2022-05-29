import { createContext } from "react";

export const AuthContext = createContext();


export function AuthContextProvider({ children }) {

    let Login = ()=>{
        
    }

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}