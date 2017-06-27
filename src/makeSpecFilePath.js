var path = require('path')

var SPEC_SUFFIX = '.spec'

module.exports = function(srcFile) {
    var srcFilePath = srcFile.uri.fsPath
    var parts = path.parse(srcFilePath)
    var specFileName = parts.name + SPEC_SUFFIX + parts.ext

    return path.join(parts.root, parts.dir, specFileName)
}