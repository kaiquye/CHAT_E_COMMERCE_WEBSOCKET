import { useState, useContext } from 'react'
import { AuthContext } from '../../context/auth-admin-context/context'
import { useNavigate } from 'react-router-dom'

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
        <section>
            <form onSubmit={(event) => logado(event, email, password)} >
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <button>Entrar</button>
            </form>
        </section>
    )
}