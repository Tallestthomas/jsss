


/*
 * randomInt.randomIntBelow(max) returns a random non-negative integer less than max (0 <= output < max).
 * `max` must be at most 2^53.
 */

var MAX_JS_PRECISE_INT = 9007199254740992;
var allowMathRandomFallback_ = false;
var random53BitValue_;

export function enableInsecureMathRandomFallback() {
  if (!cryptoObject_) {
    var warningString = "WARNING: randomInt is falling back to Math.random for random number generation."
    console.warn ? console.warn(warningString) : console.log(warningString);
    allowMathRandomFallback_ = true;
  }
}

var cryptoObject_;
     if (typeof self.crypto   !== "undefined") { cryptoObject_ = self.crypto;   }
else if (typeof self.msCrypto !== "undefined") { cryptoObject_ = self.msCrypto; }
else                                           { cryptoObject_ = null;          }

var UPPER_HALF_MULTIPLIER = 2097152; // 2^21. We have to use multiplication because bit shifts truncate to 32 bits.
var LOWER_HALF_DIVIDER = 2048;
if (cryptoObject_) {
  random53BitValue_ = function() {
    // Construct a random 53-bit value from a 32-bit upper half and a 21-bit lower half.
    var array = new Uint32Array(2);
    cryptoObject_.getRandomValues(array);
    var upper = array[0];
    var lower = array[1];
    return Math.floor(upper * UPPER_HALF_MULTIPLIER) + Math.floor(lower / LOWER_HALF_DIVIDER);
  }
} else {
  var warningString = "ERROR: randomInt could not find a suitable crypto.getRandomValues() function."
  console.error ? console.error(warningString) : console.log(warningString);
  random53BitValue_ = function() {
    if (allowMathRandomFallback_) {
      var TWO_TO_THE_32 = 4294967296; // We're assuming Math.random() has 32 bits of entropy on all platforms.
      var upper = Math.floor(Math.random() * TWO_TO_THE_32);
      var lower = Math.floor(Math.random() * TWO_TO_THE_32);
      return Math.floor(upper * UPPER_HALF_MULTIPLIER) + Math.floor(lower / LOWER_HALF_DIVIDER);
    } else {
      throw new Error("randomInt cannot get random values.");
    }
  }
}

function validateMax_(max) {
  if (typeof max !== "number" || max < 0 || Math.floor(max) !== max) {
    throw new Error("randomIntBelow() not called with a positive integer value.");
  }
  if (max > MAX_JS_PRECISE_INT) {
    throw new Error("Called randomIntBelow() with max == " + max + ", which is larger than Javascript can handle with integer precision.")
  };
};

export function randomIntBelow(max) {
  validateMax_(max);

  var val = random53BitValue_();
  var maxUniformSamplingRange = Math.floor(MAX_JS_PRECISE_INT / max) * max;

  // Rejection sampling:
  if (val < maxUniformSamplingRange)
  {
    return val % max;
  }
  else {
    // val % max would produce a biased result. This bias an be very bad if `max` is on the order of MAX_JS_PRECISE_INT. We have to try again, so just call ourselves recursively.
    // For some values of `max` just above 9007199254740992 / 2, this happens about once on average. For other values of `max`, it's less than that (and for small values of `max` it's extremely unlikely).
    return randomIntBelow(max);
  }
};
