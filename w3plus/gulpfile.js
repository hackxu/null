/**
 * Created by bluexu on 16/1/16.
 */
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task("less", function () {
     gulp.src("dragon/sass/dragon1.less")
        .pipe(less())
        .pipe(gulp.dest('dragon/css'))
});


gulp.watch("dragon/sass/*.less",function(){
   gulp.run('less')
});