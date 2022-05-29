import { createContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client';

export const ContextChatWebSocket = createContext({});


export function ContextChatWebSocketProvider({ children }) {

    const [socket, setSocket] = useState(null)
    const [mensagens, setMensagens] = useState(null)

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
        socket.emit('nova_sala', { sala: sala })
        socket.on('sala_mensagens', (data) => {
            console.log('mensagens sala :', data)
            setMensagens(data)
        })
    }
    // sala : email // usuario : admin ou client
    let EnviarMensagem = (sala, mensagem, usuario) => {
        socket.emit("nova_mensagem", { sala, mensagem, usuario })
    }

    return (
        <ContextChatWebSocket.Provider value={{ NovaSala, EnviarMensagem, socket, mensagens }} >
            {children}
        </ContextChatWebSocket.Provider>
    )
}
