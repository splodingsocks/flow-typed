

declare module 'expect' {
		declare export interface Extension {
		[name: string]: (args?: Array<any>) => void
	}

	declare export interface Call {
		context: Spy,
		arguments: Array<any>
	}

	declare export interface Spy {
		___isSpy: Boolean,
		calls: Array<Call>,
		andCall(fn: Function): Spy,
		andCallThrough(): Spy,
		andThrow(object: Object): Spy,
		andReturn(value: any): Spy,
		getLastCall(): Call,
		restore(): void,
		destroy(): void
	}

	declare function expect(actual: any): Expectation

	declare export function createSpy(fn?: Function, restore?: Function): Spy

	declare export function spyOn(object: Object, methodName: string): Spy

	declare export function isSpy(object: any): Boolean

	declare export function restoreSpies(): void

	declare export function assert(condition: any, messageFormat: string, ...extraArgs: Array<any>): void

	declare export function extend(extension: Extension): void

	declare export class Expectation  {
		constructor(actual: any): this;
		toExist(message?: string): Expectation;
		toBeTruthy(message?: string): Expectation;
		toNotExist(message?: string): Expectation;
		toBeFalsy(message?: string): Expectation;
		toBe(value: any, message?: string): Expectation;
		toNotBe(value: any, message?: string): Expectation;
		toEqual(value: any, message?: string): Expectation;
		toNotEqual(value: any, message?: string): Expectation;
		toThrow(value?: any, message?: string): Expectation;
		toNotThrow(value?: any, message?: string): Expectation;
		toBeA(value: any, message?: string): Expectation;
		toBeAn(value: any, message?: string): Expectation;
		toNotBeA(value: any, message?: string): Expectation;
		toNotBeAn(value: any, message?: string): Expectation;
		toMatch(value: any, message?: string): Expectation;
		toNotMatch(value: any, message?: string): Expectation;
		toBeLessThan(value: any, message?: string): Expectation;
		toBeFewerThan(value: any, message?: string): Expectation;
		toBeGreaterThan(value: any, message?: string): Expectation;
		toBeMoreThan(value: any, message?: string): Expectation;
		toInclude(value: any, compareValues?: any, message?: string): Expectation;
		toContain(value: any, compareValues?: any, message?: string): Expectation;
		toExclude(value: any, compareValues?: any, message?: string): Expectation;
		toNotContain(value: any, compareValues?: any, message?: string): Expectation;
		toHaveBeenCalled(message?: string): Expectation;
		toHaveBeenCalledWith(...args: Array<any>): Expectation;
		toNotHaveBeenCalled(message?: string): Expectation;
		withContext(context: any): Expectation;
		withArgs(...args: Array<any>): Expectation
	}

	declare module.exports: undefined


}