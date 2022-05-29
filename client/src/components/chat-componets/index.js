import { useContext, useEffect, useState } from "react"
import { ContextChatWebSocket } from "../../context/chat-web-context/contextChat"


export function ChatWeb() {

    const { NovaSala, EnviarMensagem, mensagens } = useContext(ContextChatWebSocket)

    const [sala, setSala] = useState(null)
    const [novaMensagem, setNovaMensagem] = useState(null)

    return (
        <main>

            <section>
                <label>Seu e-mail</label>
                <input type={'text'} onChange={(e) => setSala(e.target.value)} />
                <button onClick={() => NovaSala({ sala })} >Entrar</button>
            </section>

            <section>
                <input type={"text"} onChange={(e) => setNovaMensagem(e.target.value)} />
                <button onClick={() => EnviarMensagem(sala, novaMensagem, 'client')} >enviar</button>
                {mensagens &&
                    mensagens.map((mensagem) => (
                        <>
                            <p>{mensagem.usuario}</p>
                            <h1>{mensagem.mensagem}</h1>
                        </>
                    ))
                }
            </section>
        </main>
    )
}