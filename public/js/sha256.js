const crypto = require('crypto');

function hash(string) {
  return crypto.createHash('sha256').update(string).digest('hex');
}

module.exports={
  hash
}