import React from 'react'
import ReactDom from 'react-dom'
import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import MinisterioDaFazenda from './componentes/MinisterioDaFazenda'
import { BoaNoite, BoaTarde } from './componentes/Multiplos' //Forma 1 de Exportar
import Multi from './componentes/Multiplos' //Forma 2 de Exportar
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'

// const elemento = <h1>React</h1>
// const elem = <h1>React 02</h1>

// ReactDom.render(<Primeiro/>, document.getElementById('root'))

/**
ReactDom.render(<BomDia nome="Arlan Marreiro" idade={26}/>, document.getElementById('root'))
ReactDom.render(<MinisterioDaFazenda group="Ministério da Fazenda" membros={10}
comuns={2} adms={8}
/>, document.getElementById('root'))

ReactDom.render(
    <div>
        <BoaTarde nome="Arlan Marreiro"/>
        <BoaNoite nome="Apollo Henrique"/>
    </div>

,document.getElementById('root'))


// Forma 2 para Exportar Multiplos Componentes
ReactDom.render(
    <div>
        <Multi.BoaTarde nome="Arlan Marreiro"/>
        <Multi.BoaNoite nome="Apollo Henrique"/>
    </div>

,document.getElementById('root'))

 */

/**

ReactDom.render(
    <div>
        <Saudacao tipo="Bom Dia" nome="Arlan Marreiro" idade={26} />
    </div>
,document.getElementById('root'))

 */


ReactDom.render(
    <div>
        <Pai nome="Arlan" sobrenome="Marreiro" />
    </div>
    , document.getElementById('root'))