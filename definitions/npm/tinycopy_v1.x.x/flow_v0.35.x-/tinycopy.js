

declare module 'tinycopy' {
				declare export default class TinyCopy  {
		constructor(trigger: Element, target: (string | Element | NodeListOf<Element>)): this;
		on(type: "success", action: (data: string) => void): this;
		on(type: "error", action: (err: Error) => void): this;
		on(type: string, action: (e: (string | Error)) => void): this;
		exec(value: string, callback: (err?: Error, data?: string) => void): void
	}

	
}