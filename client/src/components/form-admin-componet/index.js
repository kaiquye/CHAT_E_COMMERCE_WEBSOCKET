import { useState } from 'react'

export function FormLogin() {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    return (
        <section>
            <form onSubmit={()=>} >
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <button>Entrar</button>
            </form>
        </section>
    )
}