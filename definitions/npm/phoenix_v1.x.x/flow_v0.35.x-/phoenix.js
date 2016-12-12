

declare module 'phoenix' {
				declare class Push  {
		constructor(channel: Channel, event: string, payload: any, timeout: number): this;
		resend(timeout: number): void;
		send(): void;
		receive(status: string, callback: (response?: any) => void): Push
	}

	declare export class Channel  {
		constructor(topic: string, params?: Object, socket?: Socket): this;
		rejoinUntilConnected(): void;
		join(timeout?: number): Push;
		leave(timeout?: number): Push;
		onClose(callback: Function): void;
		onError(callback: (reason?: any) => void): void;
		onMessage(event: string, payload: any, ref: any): any;
		on(event: string, callback: (response?: any) => void): void;
		off(event: string): void;
		canPush(): boolean;
		push(event: string, payload: Object, timeout?: number): Push
	}

	declare export class Socket  {
		constructor(endPoint: string, opts?: Object): this;
		protocol(): string;
		endPointURL(): string;
		disconnect(callback?: Function, code?: string, reason?: any): void;
		connect(params?: any): void;
		log(kind: string, msg: string, data: any): void;
		onOpen(callback: Function): void;
		onClose(callback: Function): void;
		onError(callback: Function): void;
		onMessage(callback: Function): void;
		onConnOpen(): void;
		onConnClose(event: any): void;
		onConnError(error: any): void;
		triggerChanError(): void;
		connectionState(): string;
		isConnected(): boolean;
		remove(channel: Channel): void;
		channel(topic: string, chanParams?: Object): Channel;
		push(data: any): void;
		makeRef(): string;
		sendHeartbeat(): void;
		flushSendBuffer(): void;
		onConnMessage(rawMessage: any): void
	}

	declare export class LongPoll  {
		constructor(endPoint: string): this;
		normalizeEndpoint(endPoint: string): string;
		endpointURL(): string;
		closeAndRetry(): void;
		ontimeout(): void;
		poll(): void;
		send(body: any): void;
		close(code?: any, reason?: any): void
	}

	declare export class Ajax  {
		request(
		method: string, endPoint: string, accept: string, body: any, timeout?: number, ontimeout?: any, callback?: (response?: any) => void
	): void;
		xdomainRequest(
		req: any, method: string, endPoint: string, body: any, timeout?: number, ontimeout?: any, callback?: (response?: any) => void
	): void;
		xhrRequest(
		req: any, method: string, endPoint: string, accept: string, body: any, timeout?: number, ontimeout?: any, callback?: (response?: any) => void
	): void;
		parseJSON(resp: string): JSON;
		serialize(obj: any, parentKey: string): string;
		appendParams(url: string, params: any): string
	}

	
}