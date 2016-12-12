

declare module 'mainloop.js' {
		declare interface MainLoop {
		getFPS(): number,
		getMaxAllowedFPS(): number,
		getSimulationTimestep(): number,
		isRunning(): boolean,
		resetFrameDelta(): number,
		setBegin(begin: (timestamp: number, delta: number) => void): MainLoop,
		setDraw(draw: (interpolationPercentage: number) => void): MainLoop,
		setUpdate(update: (delta: number) => void): MainLoop,
		setEnd(end: (fps: number, panic: boolean) => void): MainLoop,
		setMaxAllowedFPS(fps?: number): MainLoop,
		setSimulationTimestep(timestep: number): MainLoop,
		start(): MainLoop,
		stop(): MainLoop
	}

			
}