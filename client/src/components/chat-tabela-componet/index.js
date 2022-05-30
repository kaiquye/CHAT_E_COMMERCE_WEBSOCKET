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


export default function Tabela() {

    const { ListaMensagensDeUsuarios, mensagens } = useContext(ContextChatWebSocket)

    useEffect(() => {
        ListaMensagensDeUsuarios()
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>usuario</TableCell>
                        <TableCell align="right">Mensagem</TableCell>
                        <TableCell align="right">Sala</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mensagens &&
                        mensagens.map((row) => (
                            <TableRow key={row.usuario}>
                                <TableCell component="th" scope="row">
                                    {row.mensagem}
                                </TableCell>
                                <TableCell align="right">{row.sala}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
