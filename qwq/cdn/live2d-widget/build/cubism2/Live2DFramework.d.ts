declare class L2DBaseModel {
    constructor();
    getModelMatrix(): any;
    setAlpha(a: any): void;
    getAlpha(): any;
    isInitialized(): any;
    setInitialized(v: any): void;
    isUpdating(): any;
    setUpdating(v: any): void;
    getLive2DModel(): any;
    setLipSync(v: any): void;
    setLipSyncValue(v: any): void;
    setAccel(x: any, y: any, z: any): void;
    setDrag(x: any, y: any): void;
    getMainMotionManager(): any;
    getExpressionManager(): any;
    loadModelData(path: any, callback: any): void;
    loadTexture(no: any, path: any, callback: any): void;
    loadMotion(name: any, path: any, callback: any): void;
    loadExpression(name: any, path: any, callback: any): void;
    loadPose(path: any, callback: any): void;
    loadPhysics(path: any): void;
    hitTestSimple(drawID: any, testX: any, testY: any): boolean;
}
declare class L2DEyeBlink {
    constructor();
    calcNextBlink(): number;
    setInterval(blinkIntervalMsec: any): void;
    setEyeMotion(closingMotionMsec: any, closedMotionMsec: any, openingMotionMsec: any): void;
    updateParam(model: any): void;
}
declare class L2DMatrix44 {
    constructor();
    static mul(a: any, b: any, dst: any): void;
    identity(): void;
    getArray(): any;
    getCopyMatrix(): Float32Array<any>;
    setMatrix(tr: any): void;
    getScaleX(): any;
    getScaleY(): any;
    transformX(src: any): any;
    transformY(src: any): any;
    invertTransformX(src: any): number;
    invertTransformY(src: any): number;
    multTranslate(shiftX: any, shiftY: any): void;
    translate(x: any, y: any): void;
    translateX(x: any): void;
    translateY(y: any): void;
    multScale(scaleX: any, scaleY: any): void;
    scale(scaleX: any, scaleY: any): void;
}
declare class L2DTargetPoint {
    constructor();
    setPoint(x: any, y: any): void;
    getX(): any;
    getY(): any;
    update(): void;
}
declare class L2DViewMatrix extends L2DMatrix44 {
    constructor();
    getMaxScale(): any;
    getMinScale(): any;
    setMaxScale(v: any): void;
    setMinScale(v: any): void;
    isMaxScale(): boolean;
    isMinScale(): boolean;
    adjustTranslate(shiftX: any, shiftY: any): void;
    adjustScale(cx: any, cy: any, scale: any): void;
    setScreenRect(left: any, right: any, bottom: any, top: any): void;
    setMaxScreenRect(left: any, right: any, bottom: any, top: any): void;
    getScreenLeft(): any;
    getScreenRight(): any;
    getScreenBottom(): any;
    getScreenTop(): any;
    getMaxLeft(): any;
    getMaxRight(): any;
    getMaxBottom(): any;
    getMaxTop(): any;
}
declare class Live2DFramework {
    static getPlatformManager(): any;
    static setPlatformManager(platformManager: any): void;
}
export { L2DBaseModel, L2DViewMatrix, L2DEyeBlink, Live2DFramework, L2DMatrix44, L2DTargetPoint };
