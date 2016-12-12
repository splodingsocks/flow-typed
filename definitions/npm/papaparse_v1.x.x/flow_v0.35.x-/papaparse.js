import type { Static } from 'npm$namespace$PapaParse'

declare module 'papaparse' {
					declare module.exports: Static


}

declare module 'npm$namespace$PapaParse' {
		declare interface Static {
		parse(csvString: string, config?: ParseConfig): ParseResult,
		parse(file: File, config?: ParseConfig): ParseResult,
		unparse(data: Array<Object>, config?: UnparseConfig): string,
		unparse(data: Array<Array<any>>, config?: UnparseConfig): string,
		unparse(data: UnparseObject, config?: UnparseConfig): string,
		BAD_DELIMETERS: Array<string>,
		RECORD_SEP: string,
		UNIT_SEP: string,
		WORKERS_SUPPORTED: boolean,
		SCRIPT_PATH: string,
		LocalChunkSize: string,
		RemoteChunkSize: string,
		DefaultDelimiter: string,
		Parser: ParserConstructor
	}

	declare interface ParseConfig {
		delimiter?: string,
		newline?: string,
		header?: boolean,
		dynamicTyping?: boolean,
		preview?: number,
		encoding?: string,
		worker?: boolean,
		comments?: boolean,
		download?: boolean,
		skipEmptyLines?: boolean,
		fastMode?: boolean,
		step(results: ParseResult, parser: Parser): void,
		complete(results: ParseResult, file?: File): void,
		error(error: ParseError, file?: File): void,
		chunk(results: ParseResult, parser: Parser): void,
		beforeFirstChunk(chunk: string): string | void
	}

	declare interface UnparseConfig {
		quotes: boolean,
		delimiter: string,
		newline: string
	}

	declare interface UnparseObject {
		fields: Array<any>,
		data: string | Array<any>
	}

	declare interface ParseError {
		type: string,
		code: string,
		message: string,
		row: number
	}

	declare interface ParseMeta {
		delimiter: string,
		linebreak: string,
		aborted: boolean,
		fields: Array<string>,
		truncated: boolean
	}

	declare interface ParseResult {
		data: Array<any>,
		errors: Array<ParseError>,
		meta: ParseMeta
	}

	declare interface ParserConstructor {
		new (config: ParseConfig): Parser
	}

	declare interface Parser {
		parse(input: string, baseIndex: number, ignoreLastRow: boolean): any,
		abort(): void,
		getCharIndex(): number
	}

			
}