import { createContext } from 'react'

export const ContextChatWebSocket = createContext({});


export default function ContextChatWebSocketProvider({ children }) {

    return (
        <ContextChatWebSocket.Provider>
            {children}
        </ContextChatWebSocket.Provider>
    )
}