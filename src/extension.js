var vscode = require('vscode');
var openSpecFile = require('./openSpecFile')

function activate(context) {
    var openSpecFileCommand = vscode.commands.registerCommand('extension.openSpecFile', openSpecFile);

    context.subscriptions.push(openSpecFileCommand);
}
exports.activate = activate;
