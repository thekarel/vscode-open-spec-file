var isExistingFile = require('./isExistingFile')
var getCurrentDocument = require('./getCurrentDocument')

module.exports = function () {
        var currentFile = getCurrentDocument()
        var isCurrentFileExists = isExistingFile(currentFile)

        if (!isCurrentFileExists) {
            return
        }
    }