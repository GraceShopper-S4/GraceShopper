const crypto = require('crypto');
const hashOrderKey = (password, saltLength=10) => {
    let saltKey = crypto.randomBytes(saltLength).toString('hex').slice(0, saltLength);
    console.log(saltKey)
    let hash = crypto.createHmac('sha512', saltKey.toString());
    hash.update(password);
 return hash.digest('hex')
}
module.exports = hashOrderKey
