import LAppModel from './LAppModel.js';
import type { Live2DModelSetting } from './types.js';
declare class LAppLive2DManager {
    model: LAppModel | null;
    private reloading;
    constructor();
    getModel(): LAppModel | null;
    releaseModel(gl: WebGL2RenderingContext): void;
    changeModel(gl: WebGL2RenderingContext, modelSettingPath: string): Promise<void>;
    changeModelWithJSON(gl: WebGL2RenderingContext, modelSettingPath: string, modelSetting: Live2DModelSetting): Promise<void>;
    setDrag(x: number, y: number): void;
    maxScaleEvent(): void;
    minScaleEvent(): void;
    tapEvent(x: number, y: number): boolean;
}
export default LAppLive2DManager;
