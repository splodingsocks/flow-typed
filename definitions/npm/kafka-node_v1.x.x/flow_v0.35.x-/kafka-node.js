

declare module 'kafka-node' {
		declare export interface ZKOptions {
		sessionTimeout?: number,
		spinDelay?: number,
		retries?: number
	}

	declare export interface ProduceRequest {
		topic: string,
		messages: any,
		partition?: number,
		attributes?: number
	}

	declare export interface ConsumerOptions {
		groupId?: string,
		autoCommit?: boolean,
		autoCommitIntervalMs?: number,
		fetchMaxWaitMs?: number,
		fetchMinBytes?: number,
		fetchMaxBytes?: number,
		fromOffset?: boolean,
		encoding?: string
	}

	declare export interface Topic {
		topic: string,
		offset?: number,
		encoding?: string,
		autoCommit?: boolean
	}

	declare export interface OffsetRequest {
		topic: string,
		partition?: number,
		time?: number,
		maxNum?: number
	}

	declare export interface OffsetCommitRequest {
		topic: string,
		partition?: number,
		offset: number,
		metadata?: string
	}

	declare export interface OffsetFetchRequest {
		topic: string,
		partition?: number
	}

		declare export class Client  {
		constructor(connectionString: string, clientId: string, options?: ZKOptions): this;
		close(callback?: Function): void;
		topicExists(topics: Array<string>, callback: Function): void
	}

	declare export class Producer  {
		constructor(client: Client): this;
		on(eventName: string, cb: () => any): void;
		on(eventName: string, cb: (error: any) => any): void;
		send(payloads: Array<ProduceRequest>, cb: (error: any, data: any) => any): void;
		createTopics(
		topics: Array<string>, async: boolean, cb?: (error: any, data: any) => any
	): void
	}

	declare export class HighLevelProducer  {
		constructor(client: Client): this;
		on(eventName: string, cb: () => any): void;
		on(eventName: string, cb: (error: any) => any): void;
		send(payloads: Array<ProduceRequest>, cb: (error: any, data: any) => any): void;
		createTopics(
		topics: Array<string>, async: boolean, cb?: (error: any, data: any) => any
	): void
	}

	declare export class Consumer  {
		constructor(client: Client, fetchRequests: Array<OffsetFetchRequest>, options: ConsumerOptions): this;
		on(eventName: string, cb: (message: string) => any): void;
		on(eventName: string, cb: (error: any) => any): void;
		addTopics(topics: Array<string>, cb: (error: any, added: boolean) => any): void;
		addTopics(
		topics: Array<Topic>, cb: (error: any, added: boolean) => any, fromOffset: boolean
	): void;
		removeTopics(topics: Array<string>, cb: (error: any, removed: boolean) => any): void;
		commit(cb: (error: any, data: any) => any): void;
		setOffset(topic: string, partition: number, offset: number): void;
		pause(): void;
		resume(): void;
		pauseTopics(topics: Array<any>): void;
		resumeTopics(topics: Array<any>): void;
		close(force: boolean, cb: () => any): void
	}

	declare export class HighLevelConsumer  {
		constructor(client: Client, payloads: Array<Topic>, options: ConsumerOptions): this;
		on(eventName: string, cb: (message: string) => any): void;
		on(eventName: string, cb: (error: any) => any): void;
		addTopics(topics: Array<string>, cb: (error: any, added: boolean) => any): void;
		addTopics(
		topics: Array<Topic>, cb: (error: any, added: boolean) => any, fromOffset: boolean
	): void;
		removeTopics(topics: Array<string>, cb: (error: any, removed: boolean) => any): void;
		commit(cb: (error: any, data: any) => any): void;
		setOffset(topic: string, partition: number, offset: number): void;
		pause(): void;
		resume(): void;
		pauseTopics(topics: Array<any>): void;
		resumeTopics(topics: Array<any>): void;
		close(force: boolean, cb: () => any): void
	}

	declare export class Offset  {
		constructor(client: Client): this;
		on(eventName: string, cb: () => any): void;
		fetch(payloads: Array<OffsetRequest>, cb: (error: any, data: any) => any): void;
		commit(
		groupId: string, payloads: Array<OffsetCommitRequest>, cb: (error: any, data: any) => any
	): void;
		fetchCommits(
		groupId: string, payloads: Array<OffsetFetchRequest>, cb: (error: any, data: any) => any
	): void;
		fetchLatestOffsets(topics: Array<string>, cb: (error: any, data: any) => any): void;
		on(eventName: string, cb: (error: any) => any): void
	}

	declare export class KeyedMessage  {
		constructor(key: string, message: string): this
	}

	
}