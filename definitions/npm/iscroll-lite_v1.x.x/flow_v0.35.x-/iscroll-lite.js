

declare module 'iscroll-lite' {
		declare interface iScrollEvent {
		(e: Event): void
	}

	declare interface iScrollOptions {
		hScroll?: boolean,
		vScroll?: boolean,
		x?: number,
		y?: number,
		bounce?: boolean,
		bounceLock?: boolean,
		momentum?: boolean,
		lockDirection?: boolean,
		useTransform?: boolean,
		useTransition?: boolean,
		onRefresh?: iScrollEvent,
		onBeforeScrollStart?: iScrollEvent,
		onScrollStart?: iScrollEvent,
		onBeforeScrollMove?: iScrollEvent,
		onScrollMove?: iScrollEvent,
		onBeforeScrollEnd?: iScrollEvent,
		onScrollEnd?: iScrollEvent,
		onTouchEnd?: iScrollEvent,
		onDestroy?: iScrollEvent
	}

		declare class iScroll  {
		constructor(element: string, options?: iScrollOptions): this;
		constructor(element: HTMLElement, options?: iScrollOptions): this;
		destroy(): void;
		refresh(): void;
		scrollTo(x: number, y: number, time?: number, relative?: boolean): void;
		scrollToElement(element: string, time?: number): void;
		scrollToElement(element: HTMLElement, time?: number): void;
		disable(): void;
		enable(): void;
		stop(): void
	}

	
}