

declare module 'jbinary' {
				declare class jBinary  {
		loadData(source: any, callback?: (error: string, data: any) => any): any;
		load(source: any, typeSet?: any, callback?: (error: string, data: any) => any): any;
		saveAs(
		destination: any, mimeType?: string, callback?: (error: string, data: any) => any
	): any;
		toURI(mimeType?: string): any;
		constructor(data: Array<number>): this;
		constructor(data: jDataView, typeSet: Object): this;
		constructor(bufferSize: number, typeSet: Object): this;
		read(type: string, offset?: number): any;
		readAll(): any;
		write(type: string, data: any, offset?: number): number;
		writeAll(data: any): number;
		tell(): number;
		seek(position: number, callback?: (prop: jBinary, data: any) => any): number;
		skip(count: number, callback?: (prop: jBinary, data: any) => any): number;
		slice(start: number, end: number, forceCopy?: boolean): jBinary;
		as(typeSet: Object, modifyOriginal?: boolean): jBinary
	}

	
}