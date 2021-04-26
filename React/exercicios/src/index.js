import React from 'react'
import ReactDom from 'react-dom'
import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import MinisterioDaFazenda from './componentes/MinisterioDaFazenda'

// const elemento = <h1>React</h1>
// const elem = <h1>React 02</h1>

// ReactDom.render(<Primeiro/>, document.getElementById('root'))
ReactDom.render(<BomDia nome="Arlan Marreiro" idade={26}/>, document.getElementById('root'))
ReactDom.render(<MinisterioDaFazenda group="Ministério da Fazenda" membros={10}
comuns={2} adms={8}
/>, document.getElementById('root'))
