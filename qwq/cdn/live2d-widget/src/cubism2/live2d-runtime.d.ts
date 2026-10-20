import type { Live2DModelRuntime, Motion } from './types.js';

declare global {
  const Live2D: {
    init(): void;
    setGL(gl: WebGLRenderingContext | WebGL2RenderingContext): void;
    getError(): number;
  };

  const Live2DModelWebGL: {
    loadModel(buf: ArrayBuffer): Live2DModelRuntime;
  };

  const Live2DMotion: {
    loadMotion(buf: ArrayBuffer): Motion;
  };

  const UtSystem: {
    getUserTimeMSec(): number;
  };

  const AMotion: any;
  const MotionQueueManager: any;
  const PhysicsHair: any;
  const UtDebug: any;
  const PartsDataID: any;
}

export {};
