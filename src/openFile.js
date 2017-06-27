var vscode = require('vscode')

module.exports = async function(fileName) {
    try {
        await vscode.workspace.openTextDocument(fileName)
    } catch(error) {
        vscode.window.showErrorMessage('Unable to open ' + fileName)

        console.error(error)
    }
}