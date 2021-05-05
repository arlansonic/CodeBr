import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'

const HeaderProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadstro de usuários: Cadastrar, Listar, Alterar e Excluir'
}

const BaseUrl = 'http://localhost:3001/user'
const initialState = {
    user: { name: '', email: '' },
    list: []
}


export default class UserCrud extends Component {

    state = { ...initialState }

    clear() {
        this.setState({ user: initialState.user }) // Limpa a lista 
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post' //Se existir ID  => alterar se não 'post' => Incluir
        const url = user.id ? `${BaseUrl}/${user.id}` : BaseUrl
        axios[method](url, user)
            .then(resp =>{
                const list = this.getUpdateList(resp.data)
                this.setState({user: initialState.user, list})
            })
    }

    getUpdateList(user){
        const list = this.state.list.filter(u => u.id !== user.id) //Adiciona o usuario a primeira posição do Array
        list.unshift(user) //Para colocar o ID na primeira posição do Array
        return list
    }

    render() {
        return (
            <Main {...HeaderProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}