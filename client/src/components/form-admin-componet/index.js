import { useState, useContext } from 'react'
import { AuthContext } from '../../context/auth-admin-context/context'
import { useNavigate } from 'react-router-dom'
import style from './form.module.css'

export function FormLogin() {

    const { Login } = useContext(AuthContext)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const NavigateTo = useNavigate()

    const logado = async (event, email, password) => {
        event.preventDefault();
        const sucesso = await Login(email, password)
        if (sucesso) {
            return NavigateTo('/painel')
        } else {
            alert('Usuario invalido.')
        }
    }

    return (
        <section className={style.section_form} >
            <form className={style.form} onSubmit={(event) => logado(event, email, password)} >
                <label>Email</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <button>Entrar</button>
            </form>
        </section>
    )
}