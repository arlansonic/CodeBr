import React from 'react'

// Formas de por mais de 1 componente - Com - DIV -
export default props =>
    <div>
        <h1>Bom dia Admin: {props.nome} Idade: {props.idade}</h1>
        <h2>Até logo Admin</h2>
    </div>

// Forma 2 - Adicionar <React.Fragment> 
// <React.Fragment>
//     <h1>Bom dia Admin: {props.nome} Idade: {props.idade}</h1>
//     <h2>Até logo Admin</h2>
// </React.Fragment>

// Forma 3 - Importar o, {Fragment} no iniico da importação do React, e não precisará por o <React.Fragment>

/* <Fragment>
    <h1>Bom dia Admin: {props.nome} Idade: {props.idade}</h1>
    <h2>Até logo Admin</h2>
</Fragment> */


// Forma 4 - com Array separado com ,

// export default props => [
//    <h1 key="h1" >Bom dia Admin: {props.nome} Idade: {props.idade}</h1>,
//    <h2 key="h2">Até logo Admin</h2>
// ]