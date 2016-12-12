

declare module 'convert-source-map' {
		declare export interface SourceMapConverter {
		toObject(): any,
		toJSON(space?: any): string,
		toBase64(): string,
		toComment(): string,
		addProperty(key: string, value: any): SourceMapConverter,
		setProperty(key: string, value: any): SourceMapConverter,
		getProperty(key: string): any
	}

	declare export function removeComments(src: string): string

	declare export function fromObject(obj: any): SourceMapConverter

	declare export function fromJSON(json: string): SourceMapConverter

	declare export function fromBase64(base64: string): SourceMapConverter

	declare export function fromComment(comment: string): SourceMapConverter

	declare export function fromSource(source: string): SourceMapConverter

		
}