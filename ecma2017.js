"use strict";
let through2 = require('through2');
let jsSHA = require('jssha');

module.exports =
  ({hashType = "SHA-256", encoding = "UTF8", inputType = "TEXT", format = "HEX", numRounds = 1, outputUpper = false, b64Pad = "=",  useHmac = false, HMACKey = "", HMACType = "TEXT", shakeLen = 0}) => {
    let CWD = process.cwd();
    return through2.obj(function (file, enc, callback) {
      if (file.isNull()) {
        return callback(null, file);
      }
      let content = file.contents.toString();
      let shaObj = new jsSHA(hashType, inputType, {encoding, numRounds});
      let result;
      if (useHmac) {
        shaObj.setHMACKey(HMACKey, HMACType, {encoding, numRounds});
        shaObj.update(content);
        result = shaObj.getHMAC(format,{outputUpper, b64Pad, shakeLen})
      } else {
        shaObj.update(content);
        result = shaObj.getHash(format,{outputUpper, b64Pad, shakeLen})
      }
      file.contents = new Buffer(result);
      callback(null, file);
    });
  };