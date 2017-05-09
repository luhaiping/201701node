let gulp = require('gulp');
//定义一个任务，名称为hello
gulp.task('hello',function(){
    console.log('hello')
});
//要把src目录下面的html文件拷贝到build目录下
gulp.task('html',function(){
    //src获取 到的一个可读流
    // glob文件模式
  gulp.src('./src/*.html')
      //dest获得是一个可写流
      .pipe(gulp.dest('./build'));
});

gulp.task('watch',function(){
    //监控.html文件的变化 ，当文件发生变化之后自动执行html任务
    gulp.watch('./src/*.html',['html'])
});

