

declare module 'angular-mocks-1.2' {
					
}

declare module 'npm$namespace$ng' {
		declare interface IAngularStatic {
		mock: IMockStatic
	}

	declare interface IMockStatic {
		dump(obj: any): string,
		inject(...fns: Function[]): any,
		inject(...inlineAnnotatedConstructor: any[]): any,
		module(...modules: any[]): any,
		TzDate(offset: number, timestamp: number): Date,
		TzDate(offset: number, timestamp: string): Date
	}

	declare interface IExceptionHandlerProvider {
		mode(mode: string): void
	}

	declare interface ITimeoutService {
		flush(delay?: number): void,
		flushNext(expectedDelay?: number): void,
		verifyNoPendingTasks(): void
	}

	declare interface IIntervalService {
		flush(millis?: number): number
	}

	declare interface ILogService {
		assertEmpty(): void,
		reset(): void
	}

	declare interface ILogCall {
		logs: string[]
	}

	declare interface IHttpBackendService {
		flush(count?: number): void,
		resetExpectations(): void,
		verifyNoOutstandingExpectation(): void,
		verifyNoOutstandingRequest(): void,
		expect(
		method: string, url: string, data?: string, headers?: Object
	): mock.IRequestHandler,
		expect(
		method: string, url: string, data?: string, headers?: (object: Object) => boolean
	): mock.IRequestHandler,
		expect(
		method: string, url: string, data?: RegExp, headers?: Object
	): mock.IRequestHandler,
		expect(
		method: string, url: string, data?: RegExp, headers?: (object: Object) => boolean
	): mock.IRequestHandler,
		expect(
		method: string, url: string, data?: (data: string) => boolean, headers?: Object
	): mock.IRequestHandler,
		expect(
		method: string, url: string, data?: (data: string) => boolean, headers?: (object: Object) => boolean
	): mock.IRequestHandler,
		expect(
		method: string, url: string, data?: Object, headers?: Object
	): mock.IRequestHandler,
		expect(
		method: string, url: string, data?: Object, headers?: (object: Object) => boolean
	): mock.IRequestHandler,
		expect(
		method: string, url: RegExp, data?: string, headers?: Object
	): mock.IRequestHandler,
		expect(
		method: string, url: RegExp, data?: string, headers?: (object: Object) => boolean
	): mock.IRequestHandler,
		expect(
		method: string, url: RegExp, data?: RegExp, headers?: Object
	): mock.IRequestHandler,
		expect(
		method: string, url: RegExp, data?: RegExp, headers?: (object: Object) => boolean
	): mock.IRequestHandler,
		expect(
		method: string, url: RegExp, data?: (data: string) => boolean, headers?: Object
	): mock.IRequestHandler,
		expect(
		method: string, url: RegExp, data?: (data: string) => boolean, headers?: (object: Object) => boolean
	): mock.IRequestHandler,
		expect(
		method: string, url: RegExp, data?: Object, headers?: Object
	): mock.IRequestHandler,
		expect(
		method: string, url: RegExp, data?: Object, headers?: (object: Object) => boolean
	): mock.IRequestHandler,
		expectDELETE(url: string, headers?: Object): mock.IRequestHandler,
		expectDELETE(url: RegExp, headers?: Object): mock.IRequestHandler,
		expectGET(url: string, headers?: Object): mock.IRequestHandler,
		expectGET(url: RegExp, headers?: Object): mock.IRequestHandler,
		expectHEAD(url: string, headers?: Object): mock.IRequestHandler,
		expectHEAD(url: RegExp, headers?: Object): mock.IRequestHandler,
		expectJSONP(url: string): mock.IRequestHandler,
		expectJSONP(url: RegExp): mock.IRequestHandler,
		expectPATCH(url: string, data?: string, headers?: Object): mock.IRequestHandler,
		expectPATCH(url: string, data?: RegExp, headers?: Object): mock.IRequestHandler,
		expectPATCH(
		url: string, data?: (data: string) => boolean, headers?: Object
	): mock.IRequestHandler,
		expectPATCH(url: string, data?: Object, headers?: Object): mock.IRequestHandler,
		expectPATCH(url: RegExp, data?: string, headers?: Object): mock.IRequestHandler,
		expectPATCH(url: RegExp, data?: RegExp, headers?: Object): mock.IRequestHandler,
		expectPATCH(
		url: RegExp, data?: (data: string) => boolean, headers?: Object
	): mock.IRequestHandler,
		expectPATCH(url: RegExp, data?: Object, headers?: Object): mock.IRequestHandler,
		expectPOST(url: string, data?: string, headers?: Object): mock.IRequestHandler,
		expectPOST(url: string, data?: RegExp, headers?: Object): mock.IRequestHandler,
		expectPOST(
		url: string, data?: (data: string) => boolean, headers?: Object
	): mock.IRequestHandler,
		expectPOST(url: string, data?: Object, headers?: Object): mock.IRequestHandler,
		expectPOST(url: RegExp, data?: string, headers?: Object): mock.IRequestHandler,
		expectPOST(url: RegExp, data?: RegExp, headers?: Object): mock.IRequestHandler,
		expectPOST(
		url: RegExp, data?: (data: string) => boolean, headers?: Object
	): mock.IRequestHandler,
		expectPOST(url: RegExp, data?: Object, headers?: Object): mock.IRequestHandler,
		expectPUT(url: string, data?: string, headers?: Object): mock.IRequestHandler,
		expectPUT(url: string, data?: RegExp, headers?: Object): mock.IRequestHandler,
		expectPUT(
		url: string, data?: (data: string) => boolean, headers?: Object
	): mock.IRequestHandler,
		expectPUT(url: string, data?: Object, headers?: Object): mock.IRequestHandler,
		expectPUT(url: RegExp, data?: string, headers?: Object): mock.IRequestHandler,
		expectPUT(url: RegExp, data?: RegExp, headers?: Object): mock.IRequestHandler,
		expectPUT(
		url: RegExp, data?: (data: string) => boolean, headers?: Object
	): mock.IRequestHandler,
		expectPUT(url: RegExp, data?: Object, headers?: Object): mock.IRequestHandler,
		when(
		method: string, url: string, data?: string, headers?: Object
	): mock.IRequestHandler,
		when(
		method: string, url: string, data?: string, headers?: (object: Object) => boolean
	): mock.IRequestHandler,
		when(
		method: string, url: string, data?: RegExp, headers?: Object
	): mock.IRequestHandler,
		when(
		method: string, url: string, data?: RegExp, headers?: (object: Object) => boolean
	): mock.IRequestHandler,
		when(
		method: string, url: string, data?: (data: string) => boolean, headers?: Object
	): mock.IRequestHandler,
		when(
		method: string, url: string, data?: (data: string) => boolean, headers?: (object: Object) => boolean
	): mock.IRequestHandler,
		when(
		method: string, url: string, data?: Object, headers?: Object
	): mock.IRequestHandler,
		when(
		method: string, url: string, data?: Object, headers?: (object: Object) => boolean
	): mock.IRequestHandler,
		when(
		method: string, url: RegExp, data?: string, headers?: Object
	): mock.IRequestHandler,
		when(
		method: string, url: RegExp, data?: string, headers?: (object: Object) => boolean
	): mock.IRequestHandler,
		when(
		method: string, url: RegExp, data?: RegExp, headers?: Object
	): mock.IRequestHandler,
		when(
		method: string, url: RegExp, data?: RegExp, headers?: (object: Object) => boolean
	): mock.IRequestHandler,
		when(
		method: string, url: RegExp, data?: (data: string) => boolean, headers?: Object
	): mock.IRequestHandler,
		when(
		method: string, url: RegExp, data?: (data: string) => boolean, headers?: (object: Object) => boolean
	): mock.IRequestHandler,
		when(
		method: string, url: RegExp, data?: Object, headers?: Object
	): mock.IRequestHandler,
		when(
		method: string, url: RegExp, data?: Object, headers?: (object: Object) => boolean
	): mock.IRequestHandler,
		whenDELETE(url: string, headers?: Object): mock.IRequestHandler,
		whenDELETE(url: string, headers?: (object: Object) => boolean): mock.IRequestHandler,
		whenDELETE(url: RegExp, headers?: Object): mock.IRequestHandler,
		whenDELETE(url: RegExp, headers?: (object: Object) => boolean): mock.IRequestHandler,
		whenGET(url: string, headers?: Object): mock.IRequestHandler,
		whenGET(url: string, headers?: (object: Object) => boolean): mock.IRequestHandler,
		whenGET(url: RegExp, headers?: Object): mock.IRequestHandler,
		whenGET(url: RegExp, headers?: (object: Object) => boolean): mock.IRequestHandler,
		whenHEAD(url: string, headers?: Object): mock.IRequestHandler,
		whenHEAD(url: string, headers?: (object: Object) => boolean): mock.IRequestHandler,
		whenHEAD(url: RegExp, headers?: Object): mock.IRequestHandler,
		whenHEAD(url: RegExp, headers?: (object: Object) => boolean): mock.IRequestHandler,
		whenJSONP(url: string): mock.IRequestHandler,
		whenJSONP(url: RegExp): mock.IRequestHandler,
		whenPATCH(url: string, data?: string, headers?: Object): mock.IRequestHandler,
		whenPATCH(url: string, data?: RegExp, headers?: Object): mock.IRequestHandler,
		whenPATCH(
		url: string, data?: (data: string) => boolean, headers?: Object
	): mock.IRequestHandler,
		whenPATCH(url: string, data?: Object, headers?: Object): mock.IRequestHandler,
		whenPATCH(url: RegExp, data?: string, headers?: Object): mock.IRequestHandler,
		whenPATCH(url: RegExp, data?: RegExp, headers?: Object): mock.IRequestHandler,
		whenPATCH(
		url: RegExp, data?: (data: string) => boolean, headers?: Object
	): mock.IRequestHandler,
		whenPATCH(url: RegExp, data?: Object, headers?: Object): mock.IRequestHandler,
		whenPOST(url: string, data?: string, headers?: Object): mock.IRequestHandler,
		whenPOST(url: string, data?: RegExp, headers?: Object): mock.IRequestHandler,
		whenPOST(
		url: string, data?: (data: string) => boolean, headers?: Object
	): mock.IRequestHandler,
		whenPOST(url: string, data?: Object, headers?: Object): mock.IRequestHandler,
		whenPOST(url: RegExp, data?: string, headers?: Object): mock.IRequestHandler,
		whenPOST(url: RegExp, data?: RegExp, headers?: Object): mock.IRequestHandler,
		whenPOST(
		url: RegExp, data?: (data: string) => boolean, headers?: Object
	): mock.IRequestHandler,
		whenPOST(url: RegExp, data?: Object, headers?: Object): mock.IRequestHandler,
		whenPUT(url: string, data?: string, headers?: Object): mock.IRequestHandler,
		whenPUT(url: string, data?: RegExp, headers?: Object): mock.IRequestHandler,
		whenPUT(
		url: string, data?: (data: string) => boolean, headers?: Object
	): mock.IRequestHandler,
		whenPUT(url: string, data?: Object, headers?: Object): mock.IRequestHandler,
		whenPUT(url: RegExp, data?: string, headers?: Object): mock.IRequestHandler,
		whenPUT(url: RegExp, data?: RegExp, headers?: Object): mock.IRequestHandler,
		whenPUT(
		url: RegExp, data?: (data: string) => boolean, headers?: Object
	): mock.IRequestHandler,
		whenPUT(url: RegExp, data?: Object, headers?: Object): mock.IRequestHandler
	}

			
}

declare module 'mock' {
		declare interface IRequestHandler {
		respond(func: Function): void,
		respond(status: number, data?: any, headers?: any): void,
		respond(data: any, headers?: any): void,
		passThrough(): void
	}

			
}