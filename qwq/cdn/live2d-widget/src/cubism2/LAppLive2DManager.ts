/* global Live2D */
import { Live2DFramework } from './Live2DFramework.js';
import LAppModel from './LAppModel.js';
import PlatformManager from './PlatformManager.js';
import LAppDefine from './LAppDefine.js';
import logger from '../logger.js';
import type { Live2DModelSetting } from './types.js';

class LAppLive2DManager {
  public model: LAppModel | null;
  private reloading: boolean;

  constructor() {
    this.model = null;
    this.reloading = false;

    Live2D.init();
    Live2DFramework.setPlatformManager(new PlatformManager());
  }

  getModel(): LAppModel | null {
    return this.model;
  }

  releaseModel(gl: WebGL2RenderingContext) {
    if (this.model) {
      this.model.release(gl);
      this.model = null;
    }
  }

  async changeModel(gl: WebGL2RenderingContext, modelSettingPath: string): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise<void>((resolve, reject) => {
      if (this.reloading) return;
      this.reloading = true;

      const oldModel = this.model;
      const newModel = new LAppModel();

      newModel.load(gl, modelSettingPath, () => {
        if (oldModel) {
          oldModel.release(gl);
        }
        this.model = newModel;
        this.reloading = false;
        resolve();
      });
    });
  }

  async changeModelWithJSON(gl: WebGL2RenderingContext, modelSettingPath: string, modelSetting: Live2DModelSetting): Promise<void> {
    if (this.reloading) return;
    this.reloading = true;

    const oldModel = this.model;
    const newModel = new LAppModel();

    await newModel.loadModelSetting(modelSettingPath, modelSetting);
    if (oldModel) {
      oldModel.release(gl);
    }
    this.model = newModel;
    this.reloading = false;
  }

  setDrag(x: number, y: number) {
    if (this.model) {
      this.model.setDrag(x, y);
    }
  }

  maxScaleEvent() {
    logger.trace('Max scale event.');
    if (this.model) {
      this.model.startRandomMotion(
        LAppDefine.MOTION_GROUP_PINCH_IN,
        LAppDefine.PRIORITY_NORMAL,
      );
    }
  }

  minScaleEvent() {
    logger.trace('Min scale event.');
    if (this.model) {
      this.model.startRandomMotion(
        LAppDefine.MOTION_GROUP_PINCH_OUT,
        LAppDefine.PRIORITY_NORMAL,
      );
    }
  }

  tapEvent(x: number, y: number): boolean {
    logger.trace('tapEvent view x:' + x + ' y:' + y);

    if (!this.model) return false;

    if (this.model.hitTest(LAppDefine.HIT_AREA_HEAD, x, y)) {
      logger.trace('Tap face.');
      this.model.setRandomExpression();
    } else if (this.model.hitTest(LAppDefine.HIT_AREA_BODY, x, y)) {
      logger.trace('Tap body.');
      this.model.startRandomMotion(
        LAppDefine.MOTION_GROUP_TAP_BODY,
        LAppDefine.PRIORITY_NORMAL,
      );
    }
    return true;
  }
}

export default LAppLive2DManager;
