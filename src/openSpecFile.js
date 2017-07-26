var createFile = require('./createFile')
var fileExists = require('./fileExists')
var getCurrentDocument = require('./getCurrentDocument')
var isExistingFile = require('./isExistingFile')
var makeSpecFilePath = require('./makeSpecFilePath')
var openFileInEditor = require('./openFileInEditor')
var vscode = require('vscode')

module.exports = function () {
    var configuration = vscode.workspace.getConfiguration('openSpecFile')
    var specSuffix = configuration.get('specSuffix')

    var currentFile = getCurrentDocument()

    if (!isExistingFile(currentFile)) {
        return
    }

    const specFilePath = makeSpecFilePath(currentFile, {specSuffix: specSuffix})

    if (!fileExists(specFilePath)) {
        createFile(specFilePath)
    }

    openFileInEditor(specFilePath)
}