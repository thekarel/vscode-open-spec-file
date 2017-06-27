module.exports = function(textDocument) {
    return textDocument.uri.scheme === 'file'
}