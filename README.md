# gulp-sha [![NPM version][npm-image]][npm-url] [![node][node-image]][npm-url] 
Library to handle SHA with gulp

> [Gulp](http://gulpjs.com) plugin for hashing using popular SHA algorithms.

## Information

<table>
    <tr>
        <td>Package</td>
        <td>gulp-sha</td>
    </tr>
    <tr>
        <td>Node Version</td>
        <td>>= 0.10.0</td>
    </tr>
    <tr>
        <td>Gulp Version</td>
        <td>3.x</td>
    </tr>
</table>

## Usage

### Install

```
npm install gulp-sha --save-dev
```

Then, add it into your `gulpfile.js`:

## Examples

#### Input

The following is in the inputfile

```
This is a dummy File
```

#### GulpFile

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


#### Output Generated

```
c7716ed373d76c4a1a4f8c1b622c6955838cab6fd2260824845dc599bd03a5b0
```

## API

### gulp-sha(options)

#### options.hashType
Type: `String`
Default: `SHA-256`
Valid Options: `SHA-1`, `SHA-224`, `SHA3-224`, `SHA-256`, `SHA3-256`, `SHA-384`, `SHA3-384`, `SHA-512`, `SHA3-512`, `SHAKE128` or `SHAKE256`
Type of Hashing Algorithm. This **should** be any one of the available values

#### options.encoding
Type: `String`
Default: `UTF8`
Valid Options: `UTF8`, `UTF16BE` or `UTF16LE`
Type of Encoding. It specifies the encoding used to encode TEXT-type inputs

#### options.inputType
Type: `String`
Default: `TEXT`
Valid Options: `HEX`, `TEXT`, `B64`, `BYTES`, or `ARRAYBUFFER`
This is type of input provided. It can take any of the possible values above.

#### options.outputType
Type: `String`
Default: `HEX`
Valid Options: `HEX`, `TEXT`, `B64`, `BYTES`, or `ARRAYBUFFER`
Similar to `inputType`, specifies the format of output generated

#### options.numRounds
Type: `Integer`
Default: `1`
Number of rounds for hashing.

#### options.useHmac
Type: `Boolean`
Default: `false`
Valid Options: `true` or `false`
Flag to enable [HMAC][HMAC-info-url] aka Hash-based Message Authentication Code.

#### options.HMACKey
Type: `String`
Default: `""`
[HMAC][HMAC-info-url] Key. This needs to be set along with `useHmac` flag, to set a [HMAC][HMAC-info-url] key. 

#### options.HMACType
Type: `String`
Default: `TEXT`
Valid Options: `HEX`, `TEXT`, `B64`, `BYTES`, or `ARRAYBUFFER`
Type of [HMAC][HMAC-info-url] Key, similar to `inputType`.

#### options.outputUpper
Type: `Boolean`
Default: `false`
This option is intelligently interpreted based upon the chosen output format, by [jssha](https://github.com/Caligatio/jsSHA) library.

#### options.b64Pad
Type: `String`
Default: `=`
This option is intelligently interpreted based upon the chosen output format, by [jssha](https://github.com/Caligatio/jsSHA) library.


#### options.shakeLen
Type: `Integer`
Default: `0`
This option is required for `SHAKE` type of hashing algorithms.
**Important**: 
SHAKE128 and SHAKE256 require `shakeLen` to be included in the hashmap where`shakeLen` is the desired output length of the SHAKE algorithm in a multiple of 8 bits.

#### Additional Info

`gulp-sha` uses [jssha](https://github.com/Caligatio/jsSHA). More information about Algorithms can be found there.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://www.npmjs.com/package/gulp-sha
[npm-image]: https://img.shields.io/npm/v/gulp-sha.svg
[node-image]: https://img.shields.io/node/v/gulp-sha.svg

[github-url]:https://github.com/motnik/gulp-sha
[github-tag-image]: https://img.shields.io/github/tag/motnik/gulp-sha.svg

[HMAC-info-url]:https://en.wikipedia.org/wiki/Hash-based_message_authentication_code