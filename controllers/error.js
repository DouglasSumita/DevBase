function Error() {
    return {
        error: false,
        message: '',
        setError() {
            this.error = true
        },
        isError() {
            return this.error
        },
        setMessage(msg) {
            this.error = true
            this.message = msg
        },
        concatMessage(msg) {
            this.error = true
            this.message += '\n' + msg
        },
        getMessage() {
            return this.message
        }
    }
}

module.exports = Error