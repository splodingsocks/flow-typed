

declare module 'redux-logger' {
	declare type LoggerPredicate = (getState: () => any, action: any) => boolean;

	declare type StateToString = (state: any) => string;

	declare type ActionToString = (action: any) => string;

	declare type ErrorToString = (error: any, prevState: any) => string;

	declare interface ColorsObject {
		title?: boolean | ActionToString,
		prevState?: boolean | StateToString,
		action?: boolean | ActionToString,
		nextState?: boolean | StateToString,
		error?: boolean | ErrorToString
	}

	declare interface LevelObject {
		prevState?: string | boolean | StateToString,
		action?: string | boolean | ActionToString,
		nextState?: string | boolean | StateToString,
		error?: string | boolean | ErrorToString
	}

	declare interface ReduxLoggerOptions {
		level?: string | ActionToString | LevelObject,
		duration?: boolean,
		timestamp?: boolean,
		colors?: ColorsObject,
		logger?: any,
		logErrors?: boolean,
		collapsed?: boolean | LoggerPredicate,
		predicate?: LoggerPredicate,
		stateTransformer?: (state: any) => any,
		actionTransformer?: (action: any) => any,
		errorTransformer?: (error: any) => any,
		diff?: boolean,
		diffPredicate?: LoggerPredicate
	}

	declare function createLogger(options?: ReduxLoggerOptions): Redux.Middleware

		declare module.exports: undefined


}