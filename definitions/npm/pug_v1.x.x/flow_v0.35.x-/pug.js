

declare module 'pug' {
	declare export type ClientFunctionString = string;

	declare export type compileTemplate = (locals?: any) => string;

	declare export interface Options {
		filename?: string,
		basedir?: string,
		doctype?: string,
		pretty?: boolean | string,
		filters?: any,
		self?: boolean,
		debug?: boolean,
		compileDebug?: boolean,
		globals?: string[],
		cache?: boolean,
		inlineRuntimeFunctions?: boolean,
		name?: string
	}

	declare export function compile(source: string, options?: Options): (locals?: any) => string

	declare export function compileFile(path: string, options?: Options): (locals?: any) => string

	declare export function compileClient(source: string, options?: Options): ClientFunctionString

	declare export function compileClientWithDependenciesTracked(
		source: string, options?: Options
	): {
		body: ClientFunctionString,
		dependencies: string[]
	}

	declare export function compileFileClient(path: string, options?: Options): ClientFunctionString

	declare export function render(
		source: string, options?: Options, callback?: (err: Error, html: string) => void
	): string

	declare export function renderFile(
		path: string, options?: Options, callback?: (err: Error, html: string) => void
	): string

		
}