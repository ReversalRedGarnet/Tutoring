/* ------------------------------------------------------------------
   crypto.js — SHA-256, a slow key derivation, and a keystream cipher.

   WHY NOT WebCrypto: crypto.subtle is unavailable in a non-secure
   context, and this site is opened from file:// during sessions. So it
   is implemented here in plain JS, which works everywhere.

   WHAT THIS BUYS, HONESTLY:
     A learner's levels, subjects and topic queue are encrypted with
     their password. Someone reading the source sees a base64 blob and
     cannot tell what any child is working on without guessing the
     password, and the derivation is deliberately slow to make guessing
     expensive.

   WHAT IT DOES NOT BUY:
     The names in the dropdown are in the clear — a dropdown has to list
     them to render. And once a kid is logged in, their own record is
     decrypted in their own browser, as it must be.
   ------------------------------------------------------------------ */

var Crypt = (function () {

  var K = [
    0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
    0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
    0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
    0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
    0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
    0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
    0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
    0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2
  ];

  function rotr(x, n) { return (x >>> n) | (x << (32 - n)); }

  /* bytes (array of 0-255) -> 32 bytes */
  function sha256(bytes) {
    var H = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,
             0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];

    var len = bytes.length;
    var bitLenHi = Math.floor(len / 536870912);
    var bitLenLo = (len << 3) >>> 0;

    var padded = bytes.slice();
    padded.push(0x80);
    while (padded.length % 64 !== 56) padded.push(0);
    padded.push((bitLenHi >>> 24) & 255, (bitLenHi >>> 16) & 255,
                (bitLenHi >>> 8) & 255, bitLenHi & 255);
    padded.push((bitLenLo >>> 24) & 255, (bitLenLo >>> 16) & 255,
                (bitLenLo >>> 8) & 255, bitLenLo & 255);

    var w = new Array(64);

    for (var i = 0; i < padded.length; i += 64) {
      for (var t = 0; t < 16; t++) {
        w[t] = ((padded[i + t * 4] << 24) | (padded[i + t * 4 + 1] << 16) |
                (padded[i + t * 4 + 2] << 8) | padded[i + t * 4 + 3]) >>> 0;
      }
      for (t = 16; t < 64; t++) {
        var s0 = rotr(w[t - 15], 7) ^ rotr(w[t - 15], 18) ^ (w[t - 15] >>> 3);
        var s1 = rotr(w[t - 2], 17) ^ rotr(w[t - 2], 19) ^ (w[t - 2] >>> 10);
        w[t] = (w[t - 16] + s0 + w[t - 7] + s1) >>> 0;
      }

      var a = H[0], b = H[1], c = H[2], d = H[3],
          e = H[4], f = H[5], g = H[6], h = H[7];

      for (t = 0; t < 64; t++) {
        var S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
        var ch = (e & f) ^ (~e & g);
        var t1 = (h + S1 + ch + K[t] + w[t]) >>> 0;
        var S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
        var maj = (a & b) ^ (a & c) ^ (b & c);
        var t2 = (S0 + maj) >>> 0;
        h = g; g = f; f = e;
        e = (d + t1) >>> 0;
        d = c; c = b; b = a;
        a = (t1 + t2) >>> 0;
      }

      H[0] = (H[0] + a) >>> 0; H[1] = (H[1] + b) >>> 0;
      H[2] = (H[2] + c) >>> 0; H[3] = (H[3] + d) >>> 0;
      H[4] = (H[4] + e) >>> 0; H[5] = (H[5] + f) >>> 0;
      H[6] = (H[6] + g) >>> 0; H[7] = (H[7] + h) >>> 0;
    }

    var out = [];
    for (i = 0; i < 8; i++) {
      out.push((H[i] >>> 24) & 255, (H[i] >>> 16) & 255,
               (H[i] >>> 8) & 255, H[i] & 255);
    }
    return out;
  }

  /* ---------- encodings ---------- */

  function utf8ToBytes(str) {
    var out = [];
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c < 0x80) out.push(c);
      else if (c < 0x800) out.push(0xc0 | (c >> 6), 0x80 | (c & 63));
      else if (c >= 0xd800 && c <= 0xdbff && i + 1 < str.length) {
        var c2 = str.charCodeAt(++i);
        var cp = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        out.push(0xf0 | (cp >> 18), 0x80 | ((cp >> 12) & 63),
                 0x80 | ((cp >> 6) & 63), 0x80 | (cp & 63));
      } else out.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
    }
    return out;
  }

  function bytesToUtf8(bytes) {
    var s = '';
    for (var i = 0; i < bytes.length;) {
      var c = bytes[i++];
      if (c < 0x80) s += String.fromCharCode(c);
      else if (c < 0xe0) s += String.fromCharCode(((c & 31) << 6) | (bytes[i++] & 63));
      else if (c < 0xf0) {
        s += String.fromCharCode(((c & 15) << 12) | ((bytes[i++] & 63) << 6) | (bytes[i++] & 63));
      } else {
        var cp = ((c & 7) << 18) | ((bytes[i++] & 63) << 12) |
                 ((bytes[i++] & 63) << 6) | (bytes[i++] & 63);
        cp -= 0x10000;
        s += String.fromCharCode(0xd800 + (cp >> 10), 0xdc00 + (cp & 1023));
      }
    }
    return s;
  }

  var B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  function toB64(bytes) {
    var s = '';
    for (var i = 0; i < bytes.length; i += 3) {
      var n = (bytes[i] << 16) | ((bytes[i + 1] || 0) << 8) | (bytes[i + 2] || 0);
      s += B64[(n >> 18) & 63] + B64[(n >> 12) & 63] +
           (i + 1 < bytes.length ? B64[(n >> 6) & 63] : '=') +
           (i + 2 < bytes.length ? B64[n & 63] : '=');
    }
    return s;
  }

  function fromB64(str) {
    var clean = String(str).replace(/[^A-Za-z0-9+/]/g, '');
    var out = [];
    for (var i = 0; i < clean.length; i += 4) {
      var n = (B64.indexOf(clean[i]) << 18) | (B64.indexOf(clean[i + 1]) << 12) |
              ((B64.indexOf(clean[i + 2]) & 63) << 6) | (B64.indexOf(clean[i + 3]) & 63);
      out.push((n >> 16) & 255);
      if (clean[i + 2] !== undefined) out.push((n >> 8) & 255);
      if (clean[i + 3] !== undefined) out.push(n & 255);
    }
    return out;
  }

  function toHex(bytes) {
    return bytes.map(function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
  }

  /* ---------- key derivation ---------- */

  var ROUNDS = 60000;

  function normalise(pw) {
    return String(pw == null ? '' : pw).trim().toLowerCase();
  }

  /* Slow on purpose. Short dictionary words are the realistic password
     here, so the only meaningful defence is making each guess cost. */
  function derive(password, salt) {
    var h = sha256(utf8ToBytes(salt + ':' + normalise(password)));
    for (var i = 0; i < ROUNDS; i++) {
      h[0] ^= (i & 255);
      h = sha256(h);
    }
    return h;
  }

  /* A verifier that reveals nothing about the encryption key: derived
     from a different salt, so it cannot be used to shortcut decryption. */
  function verifier(password) {
    return toHex(derive(password, 'study-verify-v1'));
  }

  /* ---------- randomness ---------- */

  /* crypto.getRandomValues IS available from file:// — it is only
     crypto.subtle that requires a secure context. The fallback exists
     for very old browsers and is deliberately not relied on. */
  function randomBytes(n) {
    var out = new Array(n);
    var i;

    var g = (typeof crypto !== 'undefined' && crypto.getRandomValues) ? crypto
          : (typeof msCrypto !== 'undefined' && msCrypto.getRandomValues) ? msCrypto
          : null;

    if (g) {
      var a = new Uint8Array(n);
      g.getRandomValues(a);
      for (i = 0; i < n; i++) out[i] = a[i];
      return out;
    }

    for (i = 0; i < n; i++) out[i] = Math.floor(Math.random() * 256);
    var stamp = sha256(utf8ToBytes(String(Date.now()) + Math.random()));
    for (i = 0; i < n; i++) out[i] ^= stamp[i % 32];
    return out;
  }

  /* ---------- keystream cipher ---------- */

  var NONCE = 8;

  function keystream(key, nonce, n) {
    var out = [];
    var counter = 0;
    while (out.length < n) {
      var block = sha256(key.concat(nonce, [
        (counter >>> 24) & 255, (counter >>> 16) & 255,
        (counter >>> 8) & 255, counter & 255
      ]));
      out = out.concat(block);
      counter++;
    }
    return out.slice(0, n);
  }

  /* A FRESH NONCE ON EVERY ENCRYPTION IS NOT OPTIONAL.

     Without it, encrypting twice under the same password produces the
     same keystream, and anyone holding two versions of a record — which
     git history hands them, since this file is regenerated and committed
     whenever a queue changes — can XOR the two ciphertexts together and
     the key cancels out. That recovers the plaintext difference with no
     password at all. Classic two-time pad.

     Format: nonce (8 bytes) | ciphertext | tag (8 bytes) */
  function encrypt(obj, password) {
    var key = derive(password, 'study-record-v1');
    var nonce = randomBytes(NONCE);
    var plain = utf8ToBytes(JSON.stringify(obj));
    var ks = keystream(key, nonce, plain.length);
    var cipher = plain.map(function (b, i) { return b ^ ks[i]; });

    /* The tag covers the nonce as well, so it cannot be swapped. */
    var tag = sha256(key.concat(nonce, plain)).slice(0, 8);

    return toB64(nonce.concat(cipher, tag));
  }

  function decrypt(blob, password) {
    try {
      var all = fromB64(blob);
      if (all.length < NONCE + 8 + 1) return null;

      var key = derive(password, 'study-record-v1');
      var nonce = all.slice(0, NONCE);
      var cipher = all.slice(NONCE, all.length - 8);
      var tag = all.slice(all.length - 8);

      var ks = keystream(key, nonce, cipher.length);
      var plain = cipher.map(function (b, i) { return b ^ ks[i]; });

      var check = sha256(key.concat(nonce, plain)).slice(0, 8);
      for (var i = 0; i < 8; i++) if (check[i] !== tag[i]) return null;

      return JSON.parse(bytesToUtf8(plain));
    } catch (e) {
      return null;
    }
  }

  return {
    sha256: sha256,
    hex: toHex,
    utf8ToBytes: utf8ToBytes,
    verifier: verifier,
    encrypt: encrypt,
    decrypt: decrypt,
    rounds: ROUNDS
  };
})();
