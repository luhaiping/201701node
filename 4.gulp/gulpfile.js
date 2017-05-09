let gulp = require('gulp');
let connect = require('gulp-connect');
gulp.task('serve',function(){
  connect.server({
      port:8080,
      root:'./build',
      //启用自动刷新浏览器机制
      livereload:true
  });
});
gulp.task('html',function(){
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload())
    //这个任务就是让浏览器自动刷新
});
gulp.task('watch',function(){
    gulp.watch('./src/*.html',['html'])
});
//第二个参数表示它依赖的任务
//当执行default的时候，会先执行serve和watch
gulp.task('default',['serve','watch']);