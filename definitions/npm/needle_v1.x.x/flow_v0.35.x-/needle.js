

declare module 'needle' {
					declare module.exports: NeedleStatic


}

declare module 'Needle' {
		declare interface NeedleResponse {
		body: any,
		raw: Buffer,
		bytes: number
	}

	declare interface ReadableStream {
		
	}

	declare interface Callback {
		(error: Error, response: NeedleResponse, body: any): void
	}

	declare interface RequestOptions {
		timeout?: number,
		follow?: number,
		follow_max?: number,
		multipart?: boolean,
		proxy?: string,
		agent?: string,
		headers?: Object,
		auth?: string,
		json?: boolean,
		compressed?: boolean,
		cookies?: {
		[name: string]: any
	},
		username?: string,
		password?: string
	}

	declare interface ResponseOptions {
		decode?: boolean,
		parse?: boolean,
		output?: any
	}

	declare interface TLSOptions {
		pfx?: any,
		key?: any,
		passphrase?: string,
		cert?: any,
		ca?: any,
		ciphers?: any,
		rejectUnauthorized?: boolean,
		secureProtocol?: any
	}

	declare interface NeedleStatic {
		defaults(options?: any): void,
		head(url: string): ReadableStream,
		head(url: string, callback?: Callback): ReadableStream,
		head(url: string, options?: RequestOptions, callback?: Callback): ReadableStream,
		get(url: string): ReadableStream,
		get(url: string, callback?: Callback): ReadableStream,
		get(url: string, options?: RequestOptions, callback?: Callback): ReadableStream,
		post(url: string, data: any): ReadableStream,
		post(url: string, data: any, callback?: Callback): ReadableStream,
		post(
		url: string, data: any, options?: RequestOptions, callback?: Callback
	): ReadableStream,
		put(url: string, data: any): ReadableStream,
		put(url: string, data: any, callback?: Callback): ReadableStream,
		put(
		url: string, data: any, options?: RequestOptions, callback?: Callback
	): ReadableStream,
		delete(url: string, data: any): ReadableStream,
		delete(url: string, data: any, callback?: Callback): ReadableStream,
		delete(
		url: string, data: any, options?: RequestOptions, callback?: Callback
	): ReadableStream,
		request(method: string, url: string, data: any): ReadableStream,
		request(method: string, url: string, data: any, callback?: Callback): ReadableStream,
		request(
		method: string, url: string, data: any, options?: RequestOptions, callback?: Callback
	): ReadableStream
	}

			
}