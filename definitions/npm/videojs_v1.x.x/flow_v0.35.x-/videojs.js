

declare module 'videojs' {
		declare interface VideoJSOptions {
		techOrder?: string[],
		html5?: Object,
		width?: number,
		height?: number,
		defaultVolume?: number,
		children?: Object,
		controls?: boolean,
		src?: string,
		autoplay?: boolean,
		preload?: string
	}

	declare interface VideoJSSource {
		type: string,
		src: string
	}

	declare interface VideoJSPlayer {
		play(): VideoJSPlayer,
		pause(): VideoJSPlayer,
		paused(): boolean,
		src(newSource: string): VideoJSPlayer,
		src(newSource: VideoJSSource): VideoJSPlayer,
		src(newSource: VideoJSSource[]): VideoJSPlayer,
		currentTime(seconds: number): VideoJSPlayer,
		currentTime(): number,
		duration(): number,
		buffered(): TimeRanges,
		bufferedPercent(): number,
		volume(percentAsDecimal: number): TimeRanges,
		volume(): number,
		width(): number,
		width(pixels: number): VideoJSPlayer,
		height(): number,
		height(pixels: number): VideoJSPlayer,
		size(width: number, height: number): VideoJSPlayer,
		requestFullScreen(): VideoJSPlayer,
		cancelFullScreen(): VideoJSPlayer,
		ready(callback: () => void): VideoJSPlayer,
		on(eventName: string, callback: (eventObject: Event) => void): void,
		off(eventName: string, callback: () => void): void,
		off(eventName: string): void,
		off(): void,
		dispose(): void,
		addRemoteTextTrack(options: {
		
	}): HTMLTrackElement,
		removeRemoteTextTrack(track: HTMLTrackElement): void,
		poster(val?: string): string | VideoJSPlayer
	}

	declare interface VideoJSStatic {
		(id: any, options?: VideoJSOptions, ready?: () => void): VideoJSPlayer
	}

			
}