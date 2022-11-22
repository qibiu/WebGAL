/**
 * 扫描子场景
 * @param content 语句内容
 * @return {Array<string>} 子场景列表
 */
import { commandType } from '../interface/sceneInterface';
export declare const subSceneScanner: (command: commandType, content: string) => Array<string>;