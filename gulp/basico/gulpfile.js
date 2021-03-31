const gulp = require('gulp')
const series = gulp.series

function copiar(callback){
    console.log.apply('Tarefa de Copiar')
    return callback()
}

module.exports.default = series(copiar)
