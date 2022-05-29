import { useContext, useEffect, useState } from "react"
import { ContextChatWebSocket } from "../../context/chat-web-context/contextChat"


export function ChatWeb() {

    const { NovaSala, EnviarMensagem, socket, ListaMensagem } = useContext(ContextChatWebSocket)

    const [sala, setSala] = useState(null)

    useEffect(() => {
        if (socket !== null) {
            socket.on('lista_mensagens', (data) => {
                console.log(data)
            })
            socket.on('sala_mensagens', (data) => {
                console.log('mensagens sala :', data)
            })
        }
    }, [socket])

    return (
        <main>

            <section>
                <label>Seu e-mail</label>
                <input type={'text'} onChange={(e) => setSala(e.target.value)} />
                <button onClick={() => NovaSala({ sala })} >Entrar</button>
            </section>

            <section>
                <input type={"text"} />
                <button onClick={() => EnviarMensagem(123, 'asdas')} >enviar</button>
            </section>
        </main>
    )
}