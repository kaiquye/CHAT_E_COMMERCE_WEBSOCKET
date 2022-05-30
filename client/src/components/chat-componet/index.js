import { useContext, useEffect, useState, useRef } from "react"
import { ContextChatWebSocket } from "../../context/chat-web-context/contextChat"
import style from './chat.module.css'

export function ChatWeb() {

    const { NovaSala, EnviarMensagem, mensagens } = useContext(ContextChatWebSocket)

    const [sala, setSala] = useState(null)
    const [novaMensagem, setNovaMensagem] = useState(null)
    const ref_windowChat = useRef()
    const ref_windowRoom = useRef()

    const OpenWindow = () => {
        ref_windowRoom.current.style.display = "none"
        return ref_windowChat.current.style.display = "flex"
    }

    return (
        <main className={style.main} >
            <section ref={ref_windowRoom} className={style.section_escolhersala} >
                <label>Seu e-mail</label>
                <input className={style.inptuRoom} type={'text'} onChange={(e) => setSala(e.target.value)} />
                <button className={style.buttonRoom} onClick={() => {
                    NovaSala({ sala })
                    OpenWindow()
                }} >Entrar</button>
            </section>

            <section ref={ref_windowChat} style={{ display: "none" }} className={style.section_chat} >
                <div className={style.title} >
                    <label>Chat</label>
                </div>
                <section className={style.section_mensagem}  >
                    {mensagens &&
                        mensagens.map((mensagem) => (
                            <div className={style.div_mensagem}  >
                                <label>{mensagem.usuario}</label>
                                <label>{mensagem.mensagem}</label>
                            </div>
                        ))
                    }
                </section>
                <section className={style.section_messageSend} >
                    <input value={novaMensagem}  type={"text"} onChange={(e) => setNovaMensagem(e.target.value)} />
                    <button onClick={() => {
                        EnviarMensagem(sala, novaMensagem, 'client')
                        setNovaMensagem('')
                    }} >enviar</button>
                </section>
            </section>
        </main>
    )
}