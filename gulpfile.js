var gulp = require('gulp');
var browserify = require('browserify');

gulp.task('browserify', function() {
    browserify("./jsx/App.jsx")
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(gulp.dest("./build"));
});

gulp.task('build', ['browserify']);
gulp.task('default', ['build']);