var path = require('path')

var DEFAULT_SPEC_SUFFIX = '.spec'

var configuration = vscode.workspace.getConfiguration('myExtension')
var specSuffix = configuration.get('specSuffix') || DEFAULT_SPEC_SUFFIX

module.exports = function(srcFile) {
    var srcFilePath = srcFile.uri.fsPath
    var parts = path.parse(srcFilePath)
    var specFileName = parts.name + specSuffix + parts.ext

    return path.join(parts.root, parts.dir, specFileName)
}