import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.convertToInitObjectReference', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);

            const convertedText = convertToInitObjectReference(text);

            vscode.env.clipboard.writeText(convertedText).then(() => {
                vscode.window.showInformationMessage('轉換後程式碼已複製到剪貼板!');
            });
        }
    });

    context.subscriptions.push(disposable);
}

function convertToInitObjectReference(input: string): string {
    const lines = input.split('\n');
    const output: string[] = [];

    let isFirstLine = true;
    for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine === '') {
            if (!isFirstLine) {output.push('');}
            continue;
        }

        if (trimmedLine.startsWith('private')) {
            const parts = trimmedLine.split(' ');
            const varType = parts[1];
            const varName = parts[2].replace(';', '');

            if (varType === 'Button') {
                output.push(`\t\t\t\t${varName} = AddButtonClick(nameof(${varName}), OnClick${varName}, obj);`);
            } 
            else if (varType === 'GameObject') {
                output.push(`\t\t\t\t${varName} = obj.GetGameObject(nameof(${varName}));`);
            }
            else if (varType === 'UIItemIcon') {
                output.push(`\t\t\t\t${varName} = new UIItemIcon(obj.GetGameObject(nameof(${varName})));`);
            } 
            else {
                output.push(`\t\t\t\t${varName} = obj.GetComponent<${varType}>(nameof(${varName}));`);
            }
        }

        isFirstLine = false;
    }

    return output.join('\n');
}

export function deactivate() {}