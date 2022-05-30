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


export default function Tabela() {

    const { ListaMensagensDeUsuarios, mensagens, socket } = useContext(ContextChatWebSocket)

    useEffect(() => {
        console.log(socket)
        if (socket !== null) {
            ListaMensagensDeUsuarios()
        }
    }, [socket])

    return (
        <div className={style.body} >
            <Table className={style.tabela} aria-label="simple table">
                <TableHead className={style.hr} >
                    <TableRow  >
                        <TableCell className={style.title} >Usuario</TableCell>
                        <TableCell className={style.title}  >Mensagem</TableCell>
                        <TableCell className={style.title}  >Sala</TableCell>
                        <TableCell className={style.title}  >Ação</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={style.list}  >
                    {mensagens &&
                        mensagens.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.usuario}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.mensagem}
                                </TableCell>
                                <TableCell >{row.sala}</TableCell>
                                <button>responder</button>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </div>
    );
}
