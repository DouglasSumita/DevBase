class Error {
    constructor(message = '') {
        this.message = message
    }
    setError(message = '') {
        this.message = message
    }    
    concatMessage(message) {
        this.message += '\n' + message
    }
    getMessage() {
        return this.message
    }

}

module.exports = Error