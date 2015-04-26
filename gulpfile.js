var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

var outputLocation = './';
var outputJSFile = 'bundle.js';

/* browserify */ 
gulp.task('browserify', function() {
  var bundler = browserify({
    entries: ['./components/App.jsx'], // Only need initial file
    // Convert JSX to javascript, and ES6/2015 js to ES5
    transform: [babelify], 
    debug: true, cache: {}, packageCache: {}, fullPaths: false
  });

  var watcher  = watchify(bundler);

  return watcher
  // On update When any files updates
  .on('update', function () {
    var updateStart = Date.now();
        watcher.bundle()
        .pipe(source(outputJSFile))
        .pipe(gulp.dest(outputLocation));
        console.log('Updated ', (Date.now() - updateStart) + 'ms');
  })
  // Create initial bundle when starting the task 
  .bundle()
  .pipe(source(outputJSFile))
  .pipe(gulp.dest(outputLocation));
});

/* default */
gulp.task('default', ['serve'], function () {});

/* serve */
gulp.task('serve', ['browserify'], function () {});