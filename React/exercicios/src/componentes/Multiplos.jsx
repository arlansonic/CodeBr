import React from 'react'

// Forma 1 de Exportar Multiplos Componentes
export const BoaTarde = props  => <h1>Boa Tarde {props.nome}</h1>
export const BoaNoite = props  => <h1>Boa Tarde {props.nome}</h1>

// Forma 2 de Exportar Multiplos Componentes
export default { BoaTarde, BoaNoite}

