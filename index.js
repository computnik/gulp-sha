var through2 = require("through2");
var jsSHA = require("jssha");

module.exports = function (options) {
  options = options || {};
  var hashType = options.hashType === undefined ? "SHA-256" : options.hashType;
  var encoding = options.encoding === undefined ? "UTF8" : options.encoding;
  var inputType = options.inputType === undefined ? "TEXT" : options.inputType;
  var outputType = options.outputType === undefined ? "HEX" : options.outputType;
  var numRounds = options.numRounds === undefined ? 1 : options.numRounds;
  var outputUpper = options.outputUpper === undefined ? false : options.outputUpper;
  var b64Pad = options.b64Pad === undefined ? "=" : options.b64Pad;
  var useHmac = options.useHmac === undefined ? false : options.useHmac;
  var HMACKey = options.HMACKey === undefined ? "" : options.HMACKey;
  var HMACType = options.HMACType === undefined ? "TEXT" : options.HMACType;
  var shakeLen = options.shakeLen === undefined ? 0 : options.shakeLen;

  return through2.obj(function (file, enc, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }
    var content = file.contents.toString();
    var shaObj = new jsSHA(hashType, inputType, {encoding: encoding, numRounds: numRounds});
    var result = void 0;
    if (useHmac) {
      shaObj.setHMACKey(HMACKey, HMACType, {encoding: encoding, numRounds: numRounds});
      shaObj.update(content);
      result = shaObj.getHMAC(outputType, {outputUpper: outputUpper, b64Pad: b64Pad, shakeLen: shakeLen});
    } else {
      shaObj.update(content);
      result = shaObj.getHash(outputType, {outputUpper: outputUpper, b64Pad: b64Pad, shakeLen: shakeLen});
    }
    file.contents = Buffer.from(result);
    callback(null, file);
  });
};
