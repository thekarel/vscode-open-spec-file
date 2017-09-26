var vscode = require('vscode')
const getNewColumnNumber = require('./getNewColumnNumber');

module.exports = async function(filePath) {
    try {
        var document = await vscode.workspace.openTextDocument(filePath)
        await vscode.window.showTextDocument(document, getNewColumnNumber(vscode.window.activeTextEditor._viewColumn))
    } catch(error) {
        vscode.window.showErrorMessage('Unable to open ' + filePath)

        console.error(error)
    }
}