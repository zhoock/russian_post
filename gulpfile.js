var gulp = require('gulp'),
        browserify = require('browserify'),
        reactify = require('reactify'),
        react = require('gulp-react'),
        jade = require('gulp-jade'),
        less = require('gulp-less'),
        sourcemaps = require('gulp-sourcemaps');
        source = require('vinyl-source-stream'),
        connect = require('gulp-connect'),
        livereload = require('gulp-livereload'),
        util = require("gulp-util"),
        rename = require('gulp-rename'),
        jshint = require('gulp-jshint'),
        stylish = require('jshint-stylish'),
        cache = require('gulp-cached'),
        log = util.log;

gulp.task('connect', function () {
    return connect.server({
        'port': 1337,
        //'root': 'russian_post',
        'livereload': true

    });
});

var map = require('map-stream');
var exitOnJshintError = map(function (file, cb) {
    if (!file.jshint.success) {
        console.error('jshint failed');
        process.exit(1);
    }
});

gulp.task('jshint', function() {
    var stream = gulp.src(['./src/js/app/*.jsx','./src/js/app/**/*.jsx'])
            .pipe(cache('jshint'))
            .pipe(react())
            .on('error', function(err) {
                console.error('JSX ERROR in ' + err.fileName);
                console.error(err.message);
                //this.end();
                process.exit(1);
            })
            .pipe(jshint('.jshintrc'))
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(exitOnJshintError);

    if (process.env.CI) {
        stream = stream.pipe(jshint.reporter('fail'));
    }

    return stream;
});

gulp.task('templates', function() {
    gulp.src('./src/jade/*.jade')
            .pipe(jade({
                pretty: true,
                data: {
                    debug: false
                }
            }))
            .pipe(gulp.dest('./src/'))
            .pipe(connect.reload());
});

gulp.task('less', function () {
    return gulp.src('./src/less/*.less')
            .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./src/less'))
            .pipe(connect.reload());
});

gulp.task('browserify', function () {
    browserify('./src/js/app/main.jsx')
            .transform('reactify')
            .bundle()
            .pipe(source('main.js'))
            .pipe(gulp.dest('dist/js'))
            .pipe(connect.reload());
});

gulp.task('copy', function () {
    gulp.src('src/index.html')
            .pipe(gulp.dest('dist'));
    gulp.src('src/assets/**/*.*')
            .pipe(gulp.dest('dist/assets'))
            .pipe(connect.reload());
});
gulp.task('default', ['jshint', 'browserify', 'copy','templates','less', 'connect','watch']);

// Gulp watch task //
gulp.task('watch', function () {
    gulp.watch(['./src/js/*.jsx','./src/js/**/*.jsx'], ['jshint', 'browserify']);
    gulp.watch(['./src/**/*.jade'], ['templates']);
    gulp.watch(['./src/less/*.less','./src/less/**/*.less','./src/less/**/**/*.less'], ['less']);
});