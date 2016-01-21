var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('js', function() {
    browserify({entries: './jsx/App.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('copy', function() {
   return gulp.src('index.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('jsx/*.{js,jsx}', ['js']);
    //gulp.watch('src/less/**/*.less', ['less']);
    gulp.watch(['index.html'], ['copy']);
});

gulp.task('build', ['js', 'copy']);
gulp.task('default', ['build']);