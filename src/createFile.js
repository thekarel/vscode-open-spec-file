var fs = require('fs')

module.exports = function(filePath) {
    try {
        fs.closeSync(fs.openSync(filePath, 'w'))
    } catch (error) {
        console.error(error)
    }
}