let gulp = require('gulp');
let less = require('gulp-less');
let concat = require('gulp-concat');
let minifyCss = require('gulp-minify-css');
let rename = require('gulp-rename');
/**
 * 编译less->css->合并css->压缩css->保存css
 **/
gulp.task('css',function(){
    gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./build'))
        .pipe(minifyCss())
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('./build'));
});