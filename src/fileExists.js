var fs = require('fs')

module.exports = function(filePath) {
    try {
        fs.statSync(filePath)
    } catch(error) {
        return false
    }

    return true
}
