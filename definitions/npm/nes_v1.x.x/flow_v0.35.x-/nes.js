

declare module 'nes' {
	declare export type ServerOnSubscribeWithParams = (socket: Socket, path: string, params: any, next: (err?: any) => void) => void;

	declare export type ServerOnSubscribeWithoutParams = (socket: Socket, path: string, next: (err?: any) => void) => void;

	declare export type ServerOnSubscribe = ServerOnSubscribeWithParams | ServerOnSubscribeWithoutParams;

	declare export type ServerOnUnSubscribeWithParams = (socket: Socket, path: string, params: any, next: () => void) => void;

	declare export type ServerOnUnSubscribeWithoutParams = (socket: Socket, path: string, next: () => void) => void;

	declare export type ServerOnUnSubscribe = ServerOnUnSubscribeWithParams | ServerOnUnSubscribeWithoutParams;

	declare export interface SocketAuthObject {
		isAuthenticated: boolean,
		credentials: any,
		artifacts: any
	}

	declare export interface ServerBroadcastOptions {
		user: any
	}

	declare export interface ServerSubscriptionOptionsFilterOptions {
		socket: Socket,
		credentials?: any,
		params?: any
	}

	declare export interface ServerSubscriptionOptionsAuthOptions {
		mode?: "required" | "optional",
		scope?: string | string[],
		entity?: "user" | "app" | "any",
		index?: boolean
	}

	declare export interface ServerSubscriptionOptions {
		filter?: (
		path: string, message: any, options: ServerSubscriptionOptionsFilterOptions, next: (isMatch: boolean, override: any) => void
	) => void,
		auth?: boolean | ServerSubscriptionOptionsAuthOptions,
		onSubscribe?: ServerOnSubscribe,
		onUnsubscribe?: ServerOnUnSubscribe
	}

	declare export interface ServerPublishOptions {
		internal?: any,
		user?: any
	}

	declare export interface ServerEachSocketOptions {
		subscription?: string,
		user?: any
	}

	declare export interface ClientOptions {
		ws?: any,
		timeout?: number | boolean
	}

	declare export interface ClientConnectOptions {
		auth?: any,
		delay?: number,
		maxDelay?: number,
		retries?: number,
		timeout?: number
	}

	declare export interface ClientRequestOptions {
		path: string,
		method?: string,
		headers?: Object,
		payload?: any
	}

	declare export interface ClientSubscribeFlags {
		revoked?: boolean
	}

		declare export class Socket  {
		id: any;
		app: Object;
		auth: SocketAuthObject;
		disconect(callback?: () => void): void;
		send(message: any, callback?: (err?: any) => void): void;
		publish(path: string, message: any, callback?: (err?: any) => void): void;
		revoke(path: string, message: any, callback?: (err?: any) => void): void
	}

	declare export class Server extends Hapi$Server {
		broadcast(message: any, options?: ServerBroadcastOptions): void;
		subscription(path: string, options?: ServerSubscriptionOptions): void;
		publish(path: string, message: any, options?: ServerPublishOptions): void;
		eachSocket(each: (socket: Socket) => void, options?: ServerEachSocketOptions): void
	}

	declare export class Request extends Hapi$Request {
		socket: Socket
	}

	declare export class Client  {
		constructor(url: string, options?: ClientOptions): this;
		onError: (err: any) => void;
		onConnect: () => void;
		onDisconnect: () => void;
		onUpdate: (message: any) => void;
		connect(options: ClientConnectOptions, callback: (err?: any) => void): void;
		connect(callback: (err?: any) => void): void;
		disconnect(): void;
		id: any;
		request(
		options: string | ClientRequestOptions, callback: (err: any, payload: any, statusCode?: number, headers?: Object) => void
	): void;
		message(message: any, callback: (err: any, message: any) => void): void;
		subscribe(
		path: string, handler: (message: any, flags: ClientSubscribeFlags) => void, callback: (err?: any) => void
	): void;
		unsubscribe(
		path: string, handler: (message: any, flags: ClientSubscribeFlags) => void, callback: (err?: any) => void
	): void;
		subscriptions(): string[];
		overrideReconnectionAuth(auth: any): void
	}

	
}