const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0],valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);//Qtde de elementos no Array
valores.push({id: 3},false, null, 'teste');//Misturar dados dentro de um array ja existente
console.log(valores);

console.log(valores.pop()); // Pega o ultimo valor do Array
delete valores[0]; //Deleta o dado do Array de acordo com a posição determinada
console.log(valores);

console.log(typeof valores);//Tipo de dados Object