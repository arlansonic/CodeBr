const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformarJS(cb){
    gulp.src('src/**/*.js') //Selecionar os arquivos JS
        .pipe(babel({
            comments: false,
            presets: ["env"] //Usar o ECMA mas novo da atualidade
        }))
        .pipe(uglify()) //Pegar todo o codigo e minificar 
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js')) //Colocar tudo em uma linha Só
        .pipe(gulp.dest('build'))

        return cb()
}

function fim(cb){
    console.log('Fim!!!')
    return cb()
}

exports.default = series(transformarJS, fim)