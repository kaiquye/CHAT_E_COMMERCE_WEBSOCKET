import { ChatWeb } from '../../components/chat-componet/index'
import style from './home.module.css'

function HomePage() {
    return (
        <main className={style.main} >
            <section className={style.section} >
                <ChatWeb />
            </section>
        </main>
    )
}
export default HomePage