var fs = require('fs')

module.exports = function(filePath) {
    try {
        return fs.existsSync(filePath)
    } catch(error) {
        return false
    }
}
