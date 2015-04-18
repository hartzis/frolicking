var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

var outputLocation = './';
var outputJSFile = 'bundle.js';

/* browserify */ 
gulp.task('browserify', function() {
  var bundler = browserify({
    entries: ['./components/Routes.jsx'], // Only need initial file
    transform: [reactify], // Convert JSX to javascript
    debug: true, cache: {}, packageCache: {}, fullPaths: true
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