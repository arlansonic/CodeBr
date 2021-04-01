const { parallel } = require('gulp')

const gulp = require('gulp')
const sass = require('gulp-sass')
// const html = require('gulp-html')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformarCSS(){
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function transformarHTML(){
    return gulp.src('src/index.html')    
    .pipe(gulp.dest('build'))
}

// exports.default = series(transformarHTML)
exports.default = parallel(transformarCSS, transformarHTML)
