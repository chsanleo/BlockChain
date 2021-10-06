const crypto = require('crypto');

class Block {
    constructor(index, data, prevHash) {
        this.index = index;
        this.timestamp = Math.floor(Date.now() / 1000);
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.getHash();
    }

    getHash() {
        var encript = JSON.stringify(this.data) + this.prevHash + this.index + this.timestamp;
        var hash = crypto.createHmac('sha256', "secret")
            .update(encript)
            .digest('hex');
        return hash;
    }
}