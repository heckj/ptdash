// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');
var javascriptSources = ['app.js', 'lib/**/*.js', 'routes/**/*.js'];
var tests = ['test/**/*.js'];
// Lint Task
gulp.task('lint', function() {
    return gulp
        .src(javascriptSources)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('test', function (){
  return gulp.src(tests, {read: false})
  .pipe(mocha({reporter: 'list'}))
  .on('error', gutil.log);
});

gulp.task('serve', function() {
    return nodemon({
        script: './bin/www',
        env: { 'NODE_ENV': 'development' }
    }).on('restart', function() {
        console.log('RESTARTED!');
    });
});

gulp.task('watch', function() {
    gulp.watch(javascriptSources, ['lint']);
    gulp.watch(javascriptSources, ['test']);
    gulp.watch(tests, ['test']);
});

// Default Task
gulp.task('default', ['lint', 'test', 'serve', 'watch']);
