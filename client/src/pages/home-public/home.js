import { ChatWeb } from '../../components/chat-componet/index'
import style from './home.module.css'

function HomePage() {
    return (
        <main className={style.main} >
            <div className={style.meuWebSite} >
                <h1>MEU WEB SITE FICARIA AQUI.</h1>
                <label>Chat em tempo real com painel para administradores.</label>
            </div>
            <section className={style.section} >
                <ChatWeb />
            </section>
        </main>
    )
}
export default HomePage