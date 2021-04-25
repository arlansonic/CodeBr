import React from 'react'
import ReactDom from 'react-dom'

const elemento = <h1>React</h1>
const elem = <h1>React 02</h1>

ReactDom.render(elemento, document.getElementById('root'))

ReactDom.render(elem, document.getElementById('root2'))