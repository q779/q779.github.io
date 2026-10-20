export type Live2DModelSetting = Record<string, any>;
export interface Cubism2Layout {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    center_x?: number;
    center_y?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
}
export interface HitAreasCustom {
    [key: string]: number[] | undefined;
}
export type Motion = {
    setFadeIn(ms: number): void;
    setFadeOut(ms: number): void;
};
export type Live2DModelRuntime = {
    setParamFloat(id: string, value: number, weight?: number): void;
    addToParamFloat(id: string, value: number, weight?: number): void;
    setPartsOpacity(id: string, value: number): void;
    loadParam(): void;
    saveParam(): void;
    setMatrix(matrix: number[]): void;
    draw(): void;
    update(): void;
    isPremultipliedAlpha(): boolean;
    setTexture(no: number, texture: WebGLTexture): void;
};
export type ModelMatrix = {
    getArray(): number[];
    setWidth(value: number): void;
    setHeight(value: number): void;
    setX(value: number): void;
    setY(value: number): void;
    centerX(value: number): void;
    centerY(value: number): void;
    top(value: number): void;
    bottom(value: number): void;
    left(value: number): void;
    right(value: number): void;
};
export type MotionManager = {
    isFinished(): boolean;
    updateParam(model: Live2DModelRuntime): boolean;
    setReservePriority(priority: number): void;
    reserveMotion(priority: number): boolean;
    startMotionPrio(motion: Motion, priority: number): void;
    startMotion(motion: Motion, autoDelete?: boolean): void;
    stopAllMotions(): void;
};
export type ModelEffect = {
    updateParam(model: Live2DModelRuntime): void;
};
export type ViewMatrix = {
    setScreenRect(left: number, right: number, bottom: number, top: number): void;
    setMaxScreenRect(left: number, right: number, bottom: number, top: number): void;
    setMaxScale(scale: number): void;
    setMinScale(scale: number): void;
    isMaxScale(): boolean;
    isMinScale(): boolean;
    adjustScale(cx: number, cy: number, scale: number): void;
    getArray(): number[];
    invertTransformX(x: number): number;
    invertTransformY(y: number): number;
};
export type Matrix44 = {
    multScale(x: number, y: number): void;
    multTranslate(x: number, y: number): void;
    getArray(): number[];
    transformX(x: number): number;
    transformY(y: number): number;
};
export type TargetPoint = {
    update(): void;
    getX(): number;
    getY(): number;
    setPoint(x: number, y: number): void;
};
