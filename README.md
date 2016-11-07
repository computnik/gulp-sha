# gulp-sha
Library to handle SHA with gulp

[![NPM version](https://img.shields.io/npm/v/gulp-sha.svg?style=flat)](https://www.npmjs.com/package/gulp-sha)

> A [gulp](https://github.com/gulpjs/gulp) plugin to gulpSHA a file contents.

## Usage

Firstly, install `gulp-sha` as a development dependency:

```shell
npm install gulp-sha --save-dev
```

Then, add it into your `gulpfile.js`:

** Use gulp SHA-1 to encode file with SHA-1 Algorithm:**
## example

### input

The following is in the inputfile

```
This is a dummy File
```

### gulpfile.js

```javascript
var gulpSHA = require("gulp-sha");
var inputFile="./inputFile"; // Path to input File
var outputDir="./"; // Path to Output directory
var options = {
  hashType: "SHA-256",
  numRounds: 2,
  useHmac: true,
  hmacKey: "abc"
};
gulp.src(inputFile)
  .pipe(gulpSHA(options))
  .pipe(gulp.dest(outputDir));
```


### output

```
c7716ed373d76c4a1a4f8c1b622c6955838cab6fd2260824845dc599bd03a5b0
```

## Parameters


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)