const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const { default: uglify } = require('gulp-uglify');

// Compilar SASS
function compileSass() {
    return gulp.src('src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

// Comprimir imagens
function compressImages() {
    return gulp.src('src/images/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

// Comprimir JavaScript
function compressJavaScript() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}

// Tarefa padrão
exports.default = gulp.parallel(compileSass, compressImages, compressJavaScript);