var vscode = require('vscode')

module.exports = function () {
    return vscode.window.activeTextEditor.document
}
