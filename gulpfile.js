var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var ghPages = require('gulp-gh-pages');

gulp.task('default', function() {
  // place code for your default task here
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Deploy to gh-pages
gulp.task('deploy', function() {
  return gulp.src('./**/*')
    .pipe(ghPages());
});