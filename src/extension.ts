import * as vscode from 'vscode';
import { sensitiveWordDetectionInit } from './sensitiveWords/CheckForSensitiveWords';

export function activate(context: vscode.ExtensionContext) {
	// 初始化敏感词检测功能
	sensitiveWordDetectionInit(context);
}

export function deactivate() { }
