import { createContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client';

export const ContextChatWebSocket = createContext({});


export function ContextChatWebSocketProvider({ children }) {

    const [socket, setSocket] = useState(null)

    useEffect(() => {
        if (socket == null) {
            let io_ = io("ws://localhost:4000", {
                transports: ["websocket"],
            })
            setSocket(io_)
        }
    }, [])

    // sala : email
    let NovaSala = ({ sala }) => {
        socket.emit('nova_sala', { sala })
    }

    let ListaMensagem = () => {
        socket.emit('lista_mensagens', { sala: 'kaique', mensagem: 'ola' })

    }

    // sala : email
    let EnviarMensagem = ({ sala, mensagem }) => {
        socket.emit("nova_mensagem", { sala, mensagem })

    }

    return (
        <ContextChatWebSocket.Provider value={{ NovaSala, EnviarMensagem, ListaMensagem, socket }} >
            {children}
        </ContextChatWebSocket.Provider>
    )
}
