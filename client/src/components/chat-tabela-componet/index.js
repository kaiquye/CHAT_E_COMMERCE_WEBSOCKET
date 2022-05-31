import { useContext, useEffect, useState } from "react"
import { ContextChatWebSocket } from "../../context/chat-web-context/contextChat"
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useToken } from "../../services/localStorage";
import style from './tabela.module.css'
import man from './icons/man (1).png'
import send from './icons/send (2).png'
import deleteImg from './icons/delete.png'

export default function Tabela() {

    const { ListaMensagensDeUsuarios, mensagens, socket } = useContext(ContextChatWebSocket)
    const [mensagemResposta, setMensagemResposta] = useState(null)

    useEffect(() => {
        console.log(socket)
        if (socket !== null) {
            ListaMensagensDeUsuarios()
        }
    }, [socket])

    return (
        <>
            <div className={style.body} >
                <div className={style.modal_responser} >
                <label>Responder usuário : </label>
                    <div> 
                         <input type='text' placeholder="digite sua mensagem" onChange={(e) => setMensagemResposta(e.target.value)} />
                        <button>RESPONDER</button>
                    </div>
                </div>
                <Table className={style.tabela} aria-label="simple table">
                    <TableHead className={style.hr} >
                        <TableRow  >
                            <TableCell className={style.title} >Usuario</TableCell>
                            <TableCell className={style.title}  >Mensagem</TableCell>
                            <TableCell className={style.title}  >Sala</TableCell>
                            <TableCell className={style.title}  >Ação</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody  >
                        {mensagens &&
                            mensagens.map((row, index) => (
                                <TableRow className={style.message} key={index}>
                                    <TableCell className={style.usuario} component="th" scope="row">
                                        <img style={{ width: '30px' }} src={man} />
                                    </TableCell>
                                    <TableCell className={style.message} component="th" scope="row">
                                        {row.mensagem}
                                    </TableCell>
                                    <TableCell className={style.message} >{row.sala}</TableCell>
                                    <TableCell>
                                        <button className={style.button} ><img style={{ width: '20px' }} src={send} /> </button>
                                        <button className={style.button} ><img style={{ width: '20px' }} src={deleteImg} /> </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </div>

        </>
    );
}
