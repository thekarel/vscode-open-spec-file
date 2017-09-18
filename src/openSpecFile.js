var createFile = require('./createFile')
var fileExists = require('./fileExists')
var getCurrentDocument = require('./getCurrentDocument')
var getSuffixForFilename = require('./getSuffixForFilename')
var isExistingFile = require('./isExistingFile')
var makeSpecFilePath = require('./makeSpecFilePath')
var openFileInEditor = require('./openFileInEditor')
var vscode = require('vscode')

module.exports = function () {
    var configuration = vscode.workspace.getConfiguration('openSpecFile')
    var suffixMap = configuration.get('suffixMap')

    var currentDocument = getCurrentDocument()

    if (!isExistingFile(currentDocument)) {
        return
    }

    const {fromRegex, toRegex} = getSuffixForFilename(suffixMap, currentDocument.fileName)

    if (!toRegex) {
        return
    }

    const specFilePath = makeSpecFilePath(currentDocument, {fromRegex, toRegex})

    if (!fileExists(specFilePath)) {
        createFile(specFilePath)
    }

    openFileInEditor(specFilePath)
}