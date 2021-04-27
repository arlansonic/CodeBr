import React, { Component } from 'react'

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome,
        idade: this.props.idade,
        
    }

    // Construtor para retirar a obrigatoriedade de usar o Arrow Function => em Render()
    constructor(props) {
        super(props)
        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
        this.setIdade = this.setIdade.bind(this)
        
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    setIdade(e) {
        this.setState({ idade: e.target.value })
    }
    

    render() {
        const { tipo, nome, idade } = this.state
        return (
            <div>
                <h1>{tipo} {nome} {idade}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo}
                    onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." value={nome}
                    onChange={this.setNome} />
                {/* Usando Arrow Function =>  */}
                <input type="number" placeholder="Idade..." value={idade}
                    onChange={this.setIdade} />                
            </div>
        )
    }
}