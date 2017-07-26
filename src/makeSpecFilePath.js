var path = require('path')

module.exports = function(srcFile, configuration) {
    var specSuffix  = configuration.specSuffix

    var srcFilePath = srcFile.uri.fsPath
    var parts = path.parse(srcFilePath)

    var specFileName = parts.name + specSuffix + parts.ext

    return path.join(parts.root, parts.dir, specFileName)
}