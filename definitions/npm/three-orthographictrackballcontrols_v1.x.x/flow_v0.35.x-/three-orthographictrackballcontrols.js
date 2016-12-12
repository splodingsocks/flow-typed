

declare module 'three-orthographictrackballcontrols' {
					
}

declare module 'THREE' {
				declare class OrthographicTrackballControls extends EventDispatcher {
		constructor(object: Camera, domElement?: HTMLElement): this;
		object: Camera;
		domElement: HTMLElement;
		enabled: boolean;
		screen: {
		left: number,
		top: number,
		width: number,
		height: number
	};
		radius: number;
		rotateSpeed: number;
		zoomSpeed: number;
		panSpeed: number;
		noRotate: boolean;
		noZoom: boolean;
		noPan: boolean;
		noRoll: boolean;
		staticMoving: boolean;
		dynamicDampingFactor: number;
		keys: number[];
		target: THREE.Vector3;
		position0: THREE.Vector3;
		target0: THREE.Vector3;
		up0: THREE.Vector3;
		left0: number;
		right0: number;
		top0: number;
		bottom0: number;
		update(): void;
		reset(): void;
		checkDistances(): void;
		zoomCamera(): void;
		panCamera(): void;
		rotateCamera(): void;
		handleResize(): void;
		handleEvent(event: any): void
	}

	
}