var createFile = require('./createFile')
var fileExists = require('./fileExists')
var getCurrentDocument = require('./getCurrentDocument')
var isExistingFile = require('./isExistingFile')
var makeSpecFilePath = require('./makeSpecFilePath')
var openFileInEditor = require('./openFileInEditor')

module.exports = function () {
        var currentFile = getCurrentDocument()

        if (!isExistingFile(currentFile)) {
            return
        }

        const specFilePath = makeSpecFilePath(currentFile)

        if (!fileExists(specFilePath)) {
            createFile(specFilePath)
        }
        
        openFileInEditor(specFilePath)
    }