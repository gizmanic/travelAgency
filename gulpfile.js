var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("hooray - you created a Gulp task.");
});
gulp.task('html', function(){
    console.log("Imagine something useful");
})
gulp.task('watch', function(){
    watch('./app/index.html',function(){
        gulp.start('html');
    } );
});