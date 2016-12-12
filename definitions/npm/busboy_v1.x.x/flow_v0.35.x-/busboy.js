import type { BusboyConstructor } from 'npm$namespace$busboy'

declare module 'busboy' {
					declare module.exports: BusboyConstructor


}

declare module 'npm$namespace$busboy' {
		declare interface Options {
		headers: any
	}

	declare interface BusboyConfig {
		headers?: any,
		highWaterMark?: number,
		fileHwm?: number,
		defCharset?: string,
		preservePath?: boolean,
		limits?: {
		fieldNameSize?: number,
		fieldSize?: number,
		fields?: number,
		fileSize?: number,
		files?: number,
		parts?: number,
		headerPairs?: number
	}
	}

	declare interface Busboy {
		on(
		event: "field", listener: (
		fieldname: string, val: any, fieldnameTruncated: boolean, valTruncated: boolean, encoding: string, mimetype: string
	) => void
	): this,
		on(
		event: "file", listener: (
		fieldname: string, file: NodeJS.ReadableStream, filename: string, encoding: string, mimetype: string
	) => void
	): this,
		on(event: "finish", callback: () => void): this,
		on(event: "partsLimit", callback: () => void): this,
		on(event: "filesLimit", callback: () => void): this,
		on(event: "fieldsLimit", callback: () => void): this,
		on(event: string, listener: Function): this
	}

	declare interface BusboyConstructor {
		new (options: BusboyConfig): Busboy
	}

			
}