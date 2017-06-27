var vscode = require('vscode')

module.exports = async function(filePath) {
    try {
        var document = await vscode.workspace.openTextDocument(filePath)
        await vscode.window.showTextDocument(document)
    } catch(error) {
        vscode.window.showErrorMessage('Unable to open ' + filePath)

        console.error(error)
    }
}