var gulp     = require('gulp'),
    coffee   = require("gulp-coffee"),
    less     = require('gulp-less'),
    jade     = require('gulp-jade'),
    path     = require('path'),
    mkdirp   = require('mkdirp'),
    async    = require('async'),
    rimraf   = require('gulp-rimraf'),
    concat   = require('gulp-concat'),
    uglify   = require('gulp-uglify'),
    constant = require( 'gulp-ng-constant' );

paths = {
    src: path.join('src', '**', '*.coffee'),
    dist: 'dist'
};

gulp.task('clean:build', function() {
    return gulp.src( paths.dist, { read: false })
        .pipe( rimraf( { force: true } ) )
});

gulp.task('create:build', ['clean:build'], function(done) {
    async.each( [ paths.dist ], function( directory, next ){
        mkdirp( directory, next )
    }, done )
});

gulp.task('build:coffee', [ 'create:build' ], function () {
    return gulp.src(paths.src)
        .pipe(coffee())
        .pipe(gulp.dest(paths.dist));
});

var develop = [
    'clean:build',
    'create:build',
    'build:coffee'
];

gulp.task('build', develop);

gulp.task('default', [ 'build' ]);