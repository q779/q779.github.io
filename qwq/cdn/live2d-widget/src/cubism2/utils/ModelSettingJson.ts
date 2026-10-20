import { Live2DFramework } from '../Live2DFramework.js';
import type { Cubism2Layout, HitAreasCustom, Live2DModelSetting } from '../types.js';

class ModelSettingJson {
  private readonly NAME: string;
  private readonly ID: string;
  private readonly MODEL: string;
  private readonly TEXTURES: string;
  private readonly HIT_AREAS: string;
  private readonly HIT_AREAS_CUSTOM: string;
  private readonly PHYSICS: string;
  private readonly POSE: string;
  private readonly EXPRESSIONS: string;
  private readonly MOTION_GROUPS: string;
  private readonly SOUND: string;
  private readonly FADE_IN: string;
  private readonly FADE_OUT: string;
  private readonly LAYOUT: string;
  private readonly INIT_PARAM: string;
  private readonly INIT_PARTS_VISIBLE: string;
  private readonly VALUE: string;
  private readonly FILE: string;
  public json: Live2DModelSetting;

  constructor() {
    this.NAME = 'name';
    this.ID = 'id';
    this.MODEL = 'model';
    this.TEXTURES = 'textures';
    this.HIT_AREAS = 'hit_areas';
    this.HIT_AREAS_CUSTOM = 'hit_areas_custom';
    this.PHYSICS = 'physics';
    this.POSE = 'pose';
    this.EXPRESSIONS = 'expressions';
    this.MOTION_GROUPS = 'motions';
    this.SOUND = 'sound';
    this.FADE_IN = 'fade_in';
    this.FADE_OUT = 'fade_out';
    this.LAYOUT = 'layout';
    this.INIT_PARAM = 'init_param';
    this.INIT_PARTS_VISIBLE = 'init_parts_visible';
    this.VALUE = 'val';
    this.FILE = 'file';

    this.json = {};
  }

  loadModelSetting(path: string, callback: () => void) {
    const pm = Live2DFramework.getPlatformManager();
    pm.loadBytes(path, (buf: ArrayBuffer) => {
      const str = String.fromCharCode.apply(null, new Uint8Array(buf));
      this.json = JSON.parse(str);
      callback();
    });
  }

  getTextureFile(n: number): string | null {
    if (this.json[this.TEXTURES] == null || this.json[this.TEXTURES][n] == null)
      return null;

    return this.json[this.TEXTURES][n];
  }

  getModelFile(): string {
    return this.json[this.MODEL];
  }

  getTextureNum(): number {
    if (this.json[this.TEXTURES] == null) return 0;

    return this.json[this.TEXTURES].length;
  }

  getHitAreaNum(): number {
    if (this.json[this.HIT_AREAS] == null) return 0;

    return this.json[this.HIT_AREAS].length;
  }

  getHitAreaCustom(): HitAreasCustom | null {
    return this.json[this.HIT_AREAS_CUSTOM];
  }

  getHitAreaID(n: number): string | null {
    if (
      this.json[this.HIT_AREAS] == null ||
      this.json[this.HIT_AREAS][n] == null
    )
      return null;

    return this.json[this.HIT_AREAS][n][this.ID];
  }

  getHitAreaName(n: number): string | null {
    if (
      this.json[this.HIT_AREAS] == null ||
      this.json[this.HIT_AREAS][n] == null
    )
      return null;

    return this.json[this.HIT_AREAS][n][this.NAME];
  }

  getPhysicsFile(): string | null {
    return this.json[this.PHYSICS];
  }

  getPoseFile(): string | null {
    return this.json[this.POSE];
  }

  getExpressionNum(): number {
    return this.json[this.EXPRESSIONS] == null
      ? 0
      : this.json[this.EXPRESSIONS].length;
  }

  getExpressionFile(n: number): string | null {
    if (this.json[this.EXPRESSIONS] == null) return null;
    return this.json[this.EXPRESSIONS][n][this.FILE];
  }

  getExpressionName(n: number): string | null {
    if (this.json[this.EXPRESSIONS] == null) return null;
    return this.json[this.EXPRESSIONS][n][this.NAME];
  }

  getLayout(): Cubism2Layout | null {
    return this.json[this.LAYOUT];
  }

  getInitParamNum(): number {
    return this.json[this.INIT_PARAM] == null
      ? 0
      : this.json[this.INIT_PARAM].length;
  }

  getMotionNum(name: string): number {
    if (
      this.json[this.MOTION_GROUPS] == null ||
      this.json[this.MOTION_GROUPS][name] == null
    )
      return 0;

    return this.json[this.MOTION_GROUPS][name].length;
  }

  getMotionFile(name: string, n: number): string | null {
    if (
      this.json[this.MOTION_GROUPS] == null ||
      this.json[this.MOTION_GROUPS][name] == null ||
      this.json[this.MOTION_GROUPS][name][n] == null
    )
      return null;

    return this.json[this.MOTION_GROUPS][name][n][this.FILE];
  }

  getMotionSound(name: string, n: number): string | null {
    if (
      this.json[this.MOTION_GROUPS] == null ||
      this.json[this.MOTION_GROUPS][name] == null ||
      this.json[this.MOTION_GROUPS][name][n] == null ||
      this.json[this.MOTION_GROUPS][name][n][this.SOUND] == null
    )
      return null;

    return this.json[this.MOTION_GROUPS][name][n][this.SOUND];
  }

  getMotionFadeIn(name: string, n: number): number {
    if (
      this.json[this.MOTION_GROUPS] == null ||
      this.json[this.MOTION_GROUPS][name] == null ||
      this.json[this.MOTION_GROUPS][name][n] == null ||
      this.json[this.MOTION_GROUPS][name][n][this.FADE_IN] == null
    )
      return 1000;

    return this.json[this.MOTION_GROUPS][name][n][this.FADE_IN];
  }

  getMotionFadeOut(name: string, n: number): number {
    if (
      this.json[this.MOTION_GROUPS] == null ||
      this.json[this.MOTION_GROUPS][name] == null ||
      this.json[this.MOTION_GROUPS][name][n] == null ||
      this.json[this.MOTION_GROUPS][name][n][this.FADE_OUT] == null
    )
      return 1000;

    return this.json[this.MOTION_GROUPS][name][n][this.FADE_OUT];
  }

  getInitParamID(n: number): string | null {
    if (
      this.json[this.INIT_PARAM] == null ||
      this.json[this.INIT_PARAM][n] == null
    )
      return null;

    return this.json[this.INIT_PARAM][n][this.ID];
  }

  getInitParamValue(n: number): number {
    if (
      this.json[this.INIT_PARAM] == null ||
      this.json[this.INIT_PARAM][n] == null
    )
      return NaN;

    return this.json[this.INIT_PARAM][n][this.VALUE];
  }

  getInitPartsVisibleNum(): number {
    return this.json[this.INIT_PARTS_VISIBLE] == null
      ? 0
      : this.json[this.INIT_PARTS_VISIBLE].length;
  }

  getInitPartsVisibleID(n: number): string | null {
    if (
      this.json[this.INIT_PARTS_VISIBLE] == null ||
      this.json[this.INIT_PARTS_VISIBLE][n] == null
    )
      return null;
    return this.json[this.INIT_PARTS_VISIBLE][n][this.ID];
  }

  getInitPartsVisibleValue(n: number): number {
    if (
      this.json[this.INIT_PARTS_VISIBLE] == null ||
      this.json[this.INIT_PARTS_VISIBLE][n] == null
    )
      return NaN;

    return this.json[this.INIT_PARTS_VISIBLE][n][this.VALUE];
  }
}

export default ModelSettingJson;
