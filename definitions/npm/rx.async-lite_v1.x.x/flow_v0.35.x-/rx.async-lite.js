

declare module 'rx.async-lite' {
					
}

declare module 'npm$namespace$Rx' {
		declare interface ObservableStatic {
		startAsync<T>(functionAsync: () => IPromise<T>): Observable<T>,
		fromCallback: {
		(func: (callback: (result: TResult) => any) => any, context?: any): () => Observable<TResult>,
		(func: (arg1: T1, callback: (result: TResult) => any) => any, context?: any): (arg1: T1) => Observable<TResult>,
		(func: (arg1: T1, arg2: T2, callback: (result: TResult) => any) => any, context?: any): (arg1: T1, arg2: T2) => Observable<TResult>,
		(func: (arg1: T1, arg2: T2, arg3: T3, callback: (result: TResult) => any) => any, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>,
		(func: (callback: Function) => any, context: any, selector: (args: TCallbackResult[]) => TResult): () => Observable<TResult>,
		(func: (arg1: T1, callback: Function) => any, context: any, selector: (args: TCallbackResult[]) => TResult): (arg1: T1) => Observable<TResult>,
		(func: (arg1: T1, arg2: T2, callback: Function) => any, context: any, selector: (args: TCallbackResult[]) => TResult): (arg1: T1, arg2: T2) => Observable<TResult>,
		(func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any, context: any, selector: (args: TCallbackResult[]) => TResult): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>,
		(func: (callback: Function) => any, context?: any): () => Observable<TResult>,
		(func: (arg1: T1, callback: Function) => any, context?: any): (arg1: T1) => Observable<TResult>,
		(func: (arg1: T1, arg2: T2, callback: Function) => any, context?: any): (arg1: T1, arg2: T2) => Observable<TResult>,
		(func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>,
		(func: Function, context: any, selector: (args: TCallbackResult[]) => TResult): (...args: any[]) => Observable<TResult>,
		(func: Function, context?: any): (...args: any[]) => Observable<TResult>
	},
		fromNodeCallback: {
		(func: (callback: (err: any, result: T) => any) => any, context?: any): () => Observable<T>,
		(func: (arg1: T1, callback: (err: any, result: T) => any) => any, context?: any): (arg1: T1) => Observable<T>,
		(func: (arg1: T1, arg2: T2, callback: (err: any, result: T) => any) => any, context?: any): (arg1: T1, arg2: T2) => Observable<T>,
		(func: (arg1: T1, arg2: T2, arg3: T3, callback: (err: any, result: T) => any) => any, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<T>,
		(func: (callback: Function) => any, context: any, selector: (results: TC[]) => TR): () => Observable<TR>,
		(func: (arg1: T1, callback: Function) => any, context: any, selector: (results: TC[]) => TR): (arg1: T1) => Observable<TR>,
		(func: (arg1: T1, arg2: T2, callback: Function) => any, context: any, selector: (results: TC[]) => TR): (arg1: T1, arg2: T2) => Observable<TR>,
		(func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any, context: any, selector: (results: TC[]) => TR): (arg1: T1, arg2: T2, arg3: T3) => Observable<TR>,
		(func: (callback: Function) => any, context?: any): () => Observable<TR>,
		(func: (arg1: T1, callback: Function) => any, context?: any): (arg1: T1) => Observable<TR>,
		(func: (arg1: T1, arg2: T2, callback: Function) => any, context?: any): (arg1: T1, arg2: T2) => Observable<TR>,
		(func: (arg1: T1, arg2: T2, arg3: T3, callback: Function) => any, context?: any): (arg1: T1, arg2: T2, arg3: T3) => Observable<TR>,
		(func: Function, context: any, selector: (results: TC[]) => T): (...args: any[]) => Observable<T>,
		(func: Function, context?: any): (...args: any[]) => Observable<T>
	},
		fromEvent<T>(
		element: NodeList, eventName: string, selector?: (arguments: any[]) => T
	): Observable<T>,
		fromEvent<T>(
		element: Node, eventName: string, selector?: (arguments: any[]) => T
	): Observable<T>,
		fromEvent<T>(
		element: {
		on: (name: string, cb: (e: any) => any) => void,
		off: (name: string, cb: (e: any) => any) => void
	}, eventName: string, selector?: (arguments: any[]) => T
	): Observable<T>,
		fromEventPattern<T>(
		addHandler: (handler: Function) => void, removeHandler: (handler: Function) => void, selector?: (arguments: any[]) => T
	): Observable<T>
	}

			
}