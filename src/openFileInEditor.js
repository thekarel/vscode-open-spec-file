var vscode = require('vscode')
const getNewColumnNumber = require('./getNewColumnNumber');

module.exports = async function(filePath, shouldOpenInNewWindow) {
    try {
        var document = await vscode.workspace.openTextDocument(filePath)
        await vscode.window.showTextDocument(document, shouldOpenInNewWindow && getNewColumnNumber(vscode.window.activeTextEditor._viewColumn))
    } catch(error) {
        vscode.window.showErrorMessage('Unable to open ' + filePath)

        console.error(error)
    }
}