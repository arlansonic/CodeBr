import React, {Component} from 'react'
import Main from '../template/Main'

const HeaderProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadstro de usuários: Cadastrar, Listar, Alterar e Excluir'
}

export default class UserCrud extends Component{
    render(){
        return(
            <Main {...HeaderProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}