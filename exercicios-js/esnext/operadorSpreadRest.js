// Operador ... rest (juntar)
// Spread (Espalhar)

// Usar Rest com parâmetro de função

// Usar Spread com Objeto
const funcionario  = {nome: 'Arlan Marreiro', salario: 2933 }
const copiaF = {id: 1, ...funcionario }

console.log(copiaF)

// Usar Spread com ARRAY

const grupoA  = ['Arlan Marreiro', 'Apollo Henrique', 'Maria Katiane']
const copiaA = ['Arnei', 'Arlison', ...grupoA, 'Maria Angelita']
console.log(copiaA)