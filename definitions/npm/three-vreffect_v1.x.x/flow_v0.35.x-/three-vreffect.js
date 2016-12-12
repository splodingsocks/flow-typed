

declare module 'three-vreffect' {
					
}

declare module 'npm$namespace$THREE' {
		declare export interface VRFov {
		leftTan: number,
		rightTan: number,
		upTan: number,
		downTan: number
	}

	declare export interface VREffectOffset {
		scale: number,
		offset: number
	}

		declare export class VREffect  {
		constructor(renderer: Renderer, callback?: (params: string) => void): this;
		render(scene: Scene, camera: Camera): void;
		setSize(width: number, height: number): void;
		setFullScreen(flag: boolean): void;
		startFullscreen(): void;
		FovToNDCScaleOffset(fov: VRFov): VREffectOffset;
		FovPortToProjection(fov: VRFov, rightHanded: boolean, zNear: number, zFar: number): Matrix4;
		FovToProjection(fov: VRFov, rightHanded: boolean, zNear: number, zFar: number): Matrix4;
		setVRDisplay(display: VRDisplay): void
	}

	
}