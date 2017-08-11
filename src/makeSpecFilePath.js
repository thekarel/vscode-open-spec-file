module.exports = function(srcFile, {fromSuffix, toSuffix}) {
    const srcFilePath = srcFile.uri.fsPath

    return srcFilePath.replace(fromSuffix, toSuffix)
}