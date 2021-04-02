const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch') // Monitorar os arquivos

function monitorarArquivos(callback){
    watch('src/**/*.html', () => gulp.series('appHTML')()) //Monitorar a pasta do codigo fonte, para ser feito o reload
    watch('src/**/*.scss', () => gulp.series('appCSS')()) //Monitorar a pasta do codigo fonte, para ser feito o reload
    watch('src/**/*.js', () => gulp.series('appJS')()) //Monitorar a pasta do codigo fonte, para ser feito o reload
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')()) //Monitorar a pasta do codigo fonte, para ser feito o reload

    return callback()
}

function server(callback){
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

module.exports = {
    monitorarArquivos,
    server
}