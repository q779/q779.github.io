import type { Live2DModelRuntime } from './types.js';
declare class PlatformManager {
    private readonly cache;
    texture?: WebGLTexture;
    constructor();
    loadBytes(path: string, callback: (buf: ArrayBuffer) => void): void;
    loadLive2DModel(path: string, callback: (model: Live2DModelRuntime) => void): void;
    loadTexture(model: Live2DModelRuntime, no: number, path: string, callback?: () => void): void;
    jsonParseFromBytes(buf: ArrayBuffer): unknown;
}
export default PlatformManager;
