var getCurrentDocument = require('./getCurrentDocument')
var isExistingFile = require('./isExistingFile')
var makeSpecFilePath = require('./makeSpecFilePath')
var openfile = require('./openFile')

module.exports = function () {
        var currentFile = getCurrentDocument()
        var isCurrentFileExists = isExistingFile(currentFile)

        if (!isCurrentFileExists) {
            return
        }

        const specFilePath = makeSpecFilePath(currentFile)
        
        openfile(specFilePath)
    }