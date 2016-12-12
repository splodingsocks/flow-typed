

declare module 'twig' {
		declare export interface Parameters {
		id?: any,
		ref?: any,
		href?: any,
		path?: any,
		debug?: boolean,
		trace?: boolean,
		strict_variables?: boolean,
		data: any
	}

	declare export interface Template {
		
	}

	declare export interface CompileOptions {
		filename: string,
		settings: any
	}

	declare export function twig(params: Parameters): Template

	declare export function extendFilter(name: string, definition: (left: any, ...params: any[]) => string): void

	declare export function extendFunction(name: string, definition: (...params: any[]) => string): void

	declare export function extendTest(name: string, definition: (value: any) => boolean): void

	declare export function extendTag(definition: any): void

	declare export function compile(markup: string, options: CompileOptions): (context: any) => any

	declare export function renderFile(
		path: string, options: CompileOptions, fn: (err: Error, result: any) => void
	): void

	declare export function ___express(
		path: string, options: CompileOptions, fn: (err: Error, result: any) => void
	): void

	declare export function cache(value: boolean): void

		
}