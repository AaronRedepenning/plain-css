const gulp = require('gulp');
var csslint = require('gulp-csslint');
const autoprefixer = require('gulp-autoprefixer');
const concatCss = require('gulp-concat-css');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');

gulp.task('default', function() {
    return gulp.src('src/**/*.css')
        .pipe(csslint())
        .pipe(csslint.formatter(require('csslint-stylish')))
        .pipe(autoprefixer({ 
            browers: ['last 2 version'] 
        }))
        .pipe(concatCss('plain.css'))
        .pipe(gulp.dest('dist'))
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log('File Stats:')
            console.log('   plain.css    ' + ': ' + details.stats.originalSize + ' kB');
            console.log('   plain.min.css' + ': ' + details.stats.minifiedSize + ' kB');
        }))
        .pipe(rename('plain.min.css'))
        .pipe(gulp.dest('dist'));
});