var gulp = require('gulp');
var yargs = require('yargs');
var fs = require('fs');
var yaml = require('js-yaml');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');

var PRODUCTION = !!(yargs.argv.production); // Run things that say 'PRODCUTION' on production builds only ($ gulp --production)

function loadConfig() {
  var ymlFile = fs.readFileSync('gulpconfig.yml', 'utf8');
  return yaml.load(ymlFile);
}
var config = loadConfig();
module.exports = config;

gulp.task('tableScript', function() {
  browserSync.notify(config.tableScript.notification);
  return gulp.src(config.tableScript.src)
    .pipe(sourcemaps.init())
    .pipe(concat(config.tableScript.filename))
    .pipe(gulpif(PRODUCTION, uglify())) // Uglify me captain! (on production builds only)
    .pipe(gulp.dest(config.tableScript.dest.jekyllRoot))
    .pipe(gulp.dest(config.tableScript.dest.buildDir));
});
