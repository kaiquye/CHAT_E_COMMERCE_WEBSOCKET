import { createContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client';

export const ContextChatWebSocket = createContext({});


export default function ContextChatWebSocketProvider({ children }) {

    const [socket, setSocket] = useState(null)

    useEffect(() => {
        if (socket === null) {
            setSocket(io("ws://localhost:4000", {
                transports: ["websocket"],
            }))
        }
    }, [])

    // sala : email
    let NovaSala = ({ sala }) => {
        socket.emit('nova_sala', { sala })
    }

    // sala : email
    let EnviarMensagem = ({ sala, mensagem }) => {
        socket.emit("nova_mensagem", { sala, mensagem })
    }


    return (
        <ContextChatWebSocket.Provider value={{ NovaSala, EnviarMensagem }} >
            {children}
        </ContextChatWebSocket.Provider>
    )
}