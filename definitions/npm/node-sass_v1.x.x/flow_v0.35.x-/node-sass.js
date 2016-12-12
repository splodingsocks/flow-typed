

declare module 'node-sass' {
		declare interface Importer {
		(url: string, prev: string, done: (data: {
		file: string,
		contents: string
	}) => void): void
	}

	declare interface Options {
		file?: string,
		data?: string,
		importer?: Importer | Importer[],
		functions?: {
		[key: string]: Function
	},
		includePaths?: string[],
		indentedSyntax?: boolean,
		indentType?: string,
		indentWidth?: number,
		linefeed?: string,
		omitSourceMapUrl?: boolean,
		outFile?: string,
		outputStyle?: "compact" | "compressed" | "expanded" | "nested",
		precision?: number,
		sourceComments?: boolean,
		sourceMap?: boolean | string,
		sourceMapContents?: boolean,
		sourceMapEmbed?: boolean,
		sourceMapRoot?: string
	}

	declare interface SassError {
		message: string,
		line: number,
		column: number,
		status: number,
		file: string
	}

	declare interface Result {
		css: Buffer,
		map: Buffer,
		stats: {
		entry: string,
		start: number,
		end: number,
		duration: number,
		includedFiles: string[]
	}
	}

	declare export function render(options: Options, callback: (err: SassError, result: Result) => any): void

	declare export function renderSync(options: Options): Result

		
}