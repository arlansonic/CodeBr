const gulp = require('gulp')
const { series, parallel} = require('gulp')
// const series = gulp.series

const antes1 = callback =>{
    console.log('Tarefa Antes1')
    return callback()
}

const antes2 = callback => {
    console.log('Tarefa Antes2')
    return callback()
}

function copiar(callback){
    gulp.src('pastaA/**/*.txt')
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        /* .pipe() para fazer as transformações utilizando o Gulp */
        // .pipe(imagemPelaMetade())
        // .pipe(imagemPretaEBranca())
        // .pipe(transform())
    .pipe(gulp.dest('pastaB')) //Criar uma outra pasta dando destino de todas as coisas para ela
    return callback()
}

const fim = callback => {
    console.log('Tarefa Fim')
    return callback()
}

module.exports.default = series(    
    parallel( antes1, antes2),
    copiar,
    fim,    
)
