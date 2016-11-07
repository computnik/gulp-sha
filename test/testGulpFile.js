/**
 * Created by nikhil.m on 11/7/2016.
 */
var gulpSHA = require("../");
var gulp = require("gulp");
var mkdirp = require("mkdirp");

var testSrc = "./input/**/*";
var testDest = "./output";
gulp.task("sha",function () {
  mkdirp.sync(testDest);
  return gulp.src(testSrc)
    .pipe(gulpSHA({hashType:"SHA-1", numRounds:2, useHmac:true, hmacKey:"testkey"}))
    .pipe(gulp.dest(testDest));
});