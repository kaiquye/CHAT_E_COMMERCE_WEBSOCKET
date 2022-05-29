import { useContext, useEffect } from "react"
import { ContextChatWebSocket } from "../../context/chat-web-context/contextChat"


export function ChatWeb() {

    const { NovaSala, EnviarMensagem, socket, ListaMensagem } = useContext(ContextChatWebSocket)

    useEffect(() => {
        if (socket !== null) {
            socket.on('lista_mensagens', (data) => {
                console.log(data)
            })
            socket.on('sala_mensagens', (data) => {
                console.log(data)
            })
        }
    }, [socket])

    return (
        <main>
            <section>
                <input type={"text"} />
                <button onClick={() => ListaMensagem('kaik', 'asdas')} >enviar</button>
            </section>
        </main>
    )
}