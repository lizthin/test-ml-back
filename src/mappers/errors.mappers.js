const mappers = {
    errorStandard: (message, error) => {
        return {
            message,
            error
        }
    }
}

module.exports = mappers;