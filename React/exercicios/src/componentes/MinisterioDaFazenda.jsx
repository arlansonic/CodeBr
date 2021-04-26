import React from 'react'

export default props =>

    <div>
        <h1>Grupo WhatsApp: {props.group}</h1>
        <h2>Quantidade de Membros: {props.membros}</h2>
        <h2>Quantidade de Membros Comum: {props.comuns}</h2>
        <h2>Quantidade de Administradores: {props.adms}</h2>
    </div>