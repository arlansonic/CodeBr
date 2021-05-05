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

    componentWillMount() {
        axios(BaseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user }) // Limpa a lista 
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post' //Se existir ID  => alterar se não 'post' => Incluir
        const url = user.id ? `${BaseUrl}/${user.id}` : BaseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdateList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id) //Adiciona o usuario a primeira posição do Array
        if (add) list.unshift(user) //Para colocar o ID na primeira posição do Array
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome...." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite seu E-mail..."
                            />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                           </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>

            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${BaseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdateList(user, false)
            this.setState({ list })
        })
    }


    renderTalbe() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>

                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...HeaderProps}>
                {this.renderForm()}
                {this.renderTalbe()}
            </Main>
        )
    }
}