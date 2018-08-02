var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {
   
    browserSync.init({
        notify: false,
        browser: 'chrome',
        server: {
            baseDir: "app"
        }
    });
    
    watch('./app/index.html', function() {
       browserSync.reload(); 
    });
    
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
        gulp.start('cssInject');
    });

});

gulp.task('cssInject', function() {
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});