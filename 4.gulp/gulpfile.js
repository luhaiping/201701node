let gulp = require('gulp');
let babel = require('gulp-babel');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
gulp.task('js',function(){
    gulp.src('./src/js/*.js')
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('build/js'))
        .pipe(uglify())
        .pipe(rename(function(args){
            args.basename += '.min';
        }))
        .pipe(gulp.dest('build/js'))

});