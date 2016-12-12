

declare module 'restangular' {
					declare module.exports: undefined


}

declare module 'npm$namespace$restangular' {
		declare interface IPromise<T> {
		call(methodName: string, params?: any): IPromise<T>,
		get(fieldName: string): IPromise<T>,
		$object: T
	}

	declare interface ICollectionPromise<T> {
		push(object: any): ICollectionPromise<T>,
		call(methodName: string, params?: any): ICollectionPromise<T>,
		get(fieldName: string): ICollectionPromise<T>,
		$object: T[]
	}

	declare interface IResponse {
		status: number,
		data: any,
		headers(name: string): string,
		config: {
		method: string,
		url: string,
		params: any
	}
	}

	declare interface IProvider {
		setBaseUrl(baseUrl: string): void,
		setExtraFields(fields: string[]): void,
		setParentless(parentless: boolean, routes: string[]): void,
		setDefaultHttpFields(httpFields: any): void,
		addElementTransformer(route: string, transformer: Function): void,
		addElementTransformer(route: string, isCollection: boolean, transformer: Function): void,
		setTransformOnlyServerElements(active: boolean): void,
		setOnElemRestangularized(
		callback: (elem: any, isCollection: boolean, what: string, restangular: IService) => any
	): void,
		setResponseInterceptor(
		responseInterceptor: (
		data: any, operation: string, what: string, url: string, response: IResponse, deferred: angular.IDeferred<any>
	) => any
	): void,
		setResponseExtractor(
		responseInterceptor: (
		data: any, operation: string, what: string, url: string, response: IResponse, deferred: angular.IDeferred<any>
	) => any
	): void,
		addResponseInterceptor(
		responseInterceptor: (
		data: any, operation: string, what: string, url: string, response: IResponse, deferred: angular.IDeferred<any>
	) => any
	): void,
		setRequestInterceptor(
		requestInterceptor: (element: any, operation: string, what: string, url: string) => any
	): void,
		addRequestInterceptor(
		requestInterceptor: (element: any, operation: string, what: string, url: string) => any
	): void,
		setFullRequestInterceptor(
		fullRequestInterceptor: (
		element: any, operation: string, what: string, url: string, headers: any, params: any, httpConfig: angular.IRequestShortcutConfig
	) => {
		element: any,
		headers: any,
		params: any
	}
	): void,
		addFullRequestInterceptor(
		requestInterceptor: (
		element: any, operation: string, what: string, url: string, headers: any, params: any, httpConfig: angular.IRequestShortcutConfig
	) => {
		headers: any,
		params: any,
		element: any,
		httpConfig: angular.IRequestShortcutConfig
	}
	): void,
		setErrorInterceptor(
		errorInterceptor: (
		response: IResponse, deferred: angular.IDeferred<any>, responseHandler: (response: restangular.IResponse) => any
	) => any
	): void,
		setRestangularFields(fields: {
		[fieldName: string]: string
	}): void,
		setMethodOverriders(overriders: string[]): void,
		setJsonp(jsonp: boolean): void,
		setDefaultRequestParams(params: any): void,
		setDefaultRequestParams(method: string, params: any): void,
		setDefaultRequestParams(methods: string[], params: any): void,
		setFullResponse(fullResponse: boolean): void,
		setDefaultHeaders(headers: any): void,
		setRequestSuffix(suffix: string): void,
		setUseCannonicalId(useCannonicalId: boolean): void,
		setEncodeIds(encode: boolean): void
	}

	declare interface ICustom {
		customGET(path: string, params?: any, headers?: any): IPromise<any>,
		customGETLIST(path: string, params?: any, headers?: any): ICollectionPromise<any>,
		customDELETE(path: string, params?: any, headers?: any): IPromise<any>,
		customPOST(elem?: any, path?: string, params?: any, headers?: any): IPromise<any>,
		customPUT(elem?: any, path?: string, params?: any, headers?: any): IPromise<any>,
		customOperation(
		operation: string, path: string, params?: any, headers?: any, elem?: any
	): IPromise<any>,
		addRestangularMethod(
		name: string, operation: string, path?: string, params?: any, headers?: any, elem?: any
	): IPromise<any>
	}

	declare interface IService {
		one(route: string, id?: number): IElement,
		one(route: string, id?: string): IElement,
		oneUrl(route: string, url: string): IElement,
		all(route: string): ICollection,
		allUrl(route: string, url: string): ICollection,
		copy(fromElement: any): IElement,
		withConfig(configurer: (RestangularProvider: IProvider) => any): IService,
		restangularizeElement(
		parent: any, element: any, route: string, collection?: any, reqParams?: any
	): IElement,
		restangularizeCollection(parent: any, element: any, route: string): ICollection,
		service(route: string, parent?: any): IScopedService,
		stripRestangular(element: any): any,
		extendModel(route: string, extender: (model: IElement) => any): void,
		extendCollection(route: string, extender: (collection: ICollection) => any): void
	}

	declare interface IScopedService {
		one(id: number): IElement,
		one(id: string): IElement,
		post(elementToPost: any, queryParams?: any, headers?: any): IPromise<any>,
		post<T>(elementToPost: T, queryParams?: any, headers?: any): IPromise<T>,
		getList(queryParams?: any, headers?: any): ICollectionPromise<any>,
		getList<T>(queryParams?: any, headers?: any): ICollectionPromise<T>
	}

	declare interface IElement {
		get(queryParams?: any, headers?: any): IPromise<any>,
		get<T>(queryParams?: any, headers?: any): IPromise<T>,
		getList(subElement?: any, queryParams?: any, headers?: any): ICollectionPromise<any>,
		getList<T>(subElement?: any, queryParams?: any, headers?: any): ICollectionPromise<T>,
		put(queryParams?: any, headers?: any): IPromise<any>,
		post(
		subElement: any, elementToPost: any, queryParams?: any, headers?: any
	): IPromise<any>,
		post<T>(
		subElement: any, elementToPost: T, queryParams?: any, headers?: any
	): IPromise<T>,
		remove(queryParams?: any, headers?: any): IPromise<any>,
		head(queryParams?: any, headers?: any): IPromise<any>,
		trace(queryParams?: any, headers?: any): IPromise<any>,
		options(queryParams?: any, headers?: any): IPromise<any>,
		patch(queryParams?: any, headers?: any): IPromise<any>,
		clone(): IElement,
		plain(): any,
		plain<T>(): T,
		withHttpConfig(httpConfig: angular.IRequestShortcutConfig): IElement,
		save(queryParams?: any, headers?: any): IPromise<any>,
		getRestangularUrl(): string,
		route?: string,
		id?: string,
		reqParams?: any
	}

	declare interface ICollection {
		getList(queryParams?: any, headers?: any): ICollectionPromise<any>,
		getList<T>(queryParams?: any, headers?: any): ICollectionPromise<T>,
		post(elementToPost: any, queryParams?: any, headers?: any): IPromise<any>,
		post<T>(elementToPost: T, queryParams?: any, headers?: any): IPromise<T>,
		head(queryParams?: any, headers?: any): IPromise<any>,
		trace(queryParams?: any, headers?: any): IPromise<any>,
		options(queryParams?: any, headers?: any): IPromise<any>,
		patch(queryParams?: any, headers?: any): IPromise<any>,
		putElement(idx: any, params: any, headers: any): IPromise<any>,
		withHttpConfig(httpConfig: angular.IRequestShortcutConfig): ICollection,
		clone(): ICollection,
		plain(): any,
		plain<T>(): T[],
		getRestangularUrl(): string
	}

			
}