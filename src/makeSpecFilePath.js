module.exports = function(srcFile, {fromRegex, toRegex}) {
    const srcFilePath = srcFile.uri.fsPath

    var regex = new RegExp(fromRegex);
    var match = regex.exec(srcFilePath);

    return match[1]+toRegex.replace("$1", match[2])
}