

declare module 'lolex' {
		declare export interface Clock {
		setTimeout(callback: () => any, timeout: number): number,
		setInterval(callback: () => any, timeout: number): number,
		setImmediate(callback: () => any): number,
		clearTimeout(id: number): void,
		clearInterval(id: number): void,
		clearImmediate(id: number): void,
		tick(ms: number): void,
		uninstall(): void
	}

	declare export function createClock(now?: number): Clock

	declare export function install(now?: number, toFake?: string[]): Clock

	declare export function install(context?: any, now?: number, toFake?: string[]): Clock

		
}