import Axios from 'axios';

const API = Axios.create({
    // gerente = admin
    baseURL: 'http://localhost:4000/gerente/'
})

export function AdminServices() {
    return ({
        login: async function (email, password) {
            API.post('/login', {
                password: password,
                email: email
            })
        },
        register: async function (fistName, phone, password, email) {
            API.post('/novo', {
                fistName: fistName,
                phone: phone,
                password: password,
                email: email
            })
        }
    })
}