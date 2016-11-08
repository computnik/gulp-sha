/**
 * Created by nikhil.m on 11/7/2016.
 */
var gulpSHA = require("../");
var gulp = require("gulp");
var mkdirp = require("mkdirp");

var testSrc = "./input/**/*"; // Path to input File
var testDest = "./output"; // Path to Output directory
var options = {
  hashType: "SHA-1",
  numRounds: 1,
  useHmac: true,
  hmacKey: "abc"
};
gulp.task("sha", function () {
  mkdirp.sync(testDest);
  return gulp.src(testSrc)
    .pipe(gulpSHA(options))
    .pipe(gulp.dest(testDest));
});