

declare module 'ydn-db' {
		declare interface FullTextSource {
		storeName: string,
		keyPath: string,
		weight?: number
	}

	declare interface FullTextCatalog {
		name: string,
		lang: string,
		sources: FullTextSource[]
	}

	declare interface IndexSchemaJson {
		name?: string,
		keyPath: string | string[],
		type?: string,
		unique?: boolean,
		multiEntry?: boolean
	}

	declare interface StoreSchemaJson {
		autoIncrement?: boolean,
		dispatchEvents?: boolean,
		name?: string,
		indexes?: IndexSchemaJson[],
		keyPath?: string,
		type?: string
	}

	declare interface DatabaseSchemaJson {
		version?: number,
		stores: StoreSchemaJson[],
		fullTextCatalogs?: FullTextCatalog[]
	}

	declare interface StorageOptions {
		mechanisms?: string[],
		size?: number,
		autoSchema?: boolean,
		isSerial?: boolean,
		requestType?: string
	}

			
}

declare module 'db' {
			declare export function cmp(first: any, second: any): number

	declare export function deleteDatabase(db_name: string, type?: string): void

	declare export class Request  {
		abort(): any;
		always(callback: (data: any) => void): any;
		done(callback: (data: any) => void): any;
		fail(callback: (data: any) => void): any;
		then(
		success_callback: (data: any) => any, error_callback: (data: Error) => any
	): any;
		canAbort(): boolean
	}

	declare export class Key  {
		constructor(json: Object): this;
		constructor(key_string: string): this;
		constructor(store_name: string, id: any, parent_key?: Key): this
	}

	declare export class Iterator  {
		join(peer_store_name: string, peer_field_name?: string, value?: any): any;
		getKey(): any;
		getPrimaryKey(): any;
		reset(): Iterator;
		restrict(peer_field_name: string, value: any): any;
		resume(key: any, index_key: any): Iterator;
		reverse(key: any, index_key: any): Iterator
	}

	declare export class IndexKeyIterator extends Iterator {
		constructor(store_name: string, index_name: string, key_range?: any, reverse?: boolean): this;
		where(
		store_name: string, index_name: string, op: Op, value: any, op2: Op, value2: any
	): any
	}

	declare export class KeyIterator extends Iterator {
		constructor(store_name: string, key_range?: any, reverse?: boolean): this;
		where(store_name: string, op: Op, value: any, op2: Op, value2: any): any
	}

	declare export class ValueIterator extends Iterator {
		constructor(store_name: string, key_range?: any, reverse?: boolean): this;
		where(store_name: string, op: Op, value: any, op2: Op, value2: any): any
	}

	declare export class IndexValueIterator extends Iterator {
		constructor(store_name: string, index_name: string, key_range?: any, reverse?: boolean): this;
		where(
		store_name: string, index_name: string, op: Op, value: any, op2: Op, value2: any
	): any
	}

	declare export class Streamer  {
		constructor(storage: ydn.db.Storage, store_name: string, opt_field_name?: string): this;
		push(key: any, value?: any): any;
		collect(callback: (values: any[]) => void): any;
		setSink(callback: (key: any, value: any, toWait: () => boolean) => void): any
	}

	declare export class ICursor  {
		getKey(i?: number): any;
		getPrimaryKey(i?: number): any;
		getValue(i?: number): any;
		clear(i?: number): Request;
		update(value: Object, i?: number): Request
	}

	declare export class Query  {
		count(): Request;
		open(callback: (ICursor: any) => void, Iterator: any, TransactionMode: any): Request;
		patch(Object: any): Request;
		patch(field_name: string, value: any): Request;
		patch(field_names: string[], value: any[]): Request;
		order(field_name: string): Query;
		order(field_name: string, descending: boolean): Query;
		order(field_names: string[]): Query;
		order(field_names: string[], descending: boolean): Query;
		reverse(): Query;
		list(): Request;
		list(limit: number): Request;
		where(field_name: string, op: Op, value: any): any;
		where(field_name: string, op: Op, value: any, op2: Op, value2: any): any
	}

	declare export class DbOperator  {
		add(store_name: string, value: any, key: any): Request;
		add(store_name: string, value: any): Request;
		clear(store_name: string, key_or_key_range: any): Request;
		clear(store_name: string): Request;
		clear(store_names: string[]): Request;
		count(store_name: string, key_range?: any): Request;
		count(store_name: string, index_name: string, key_range: any): Request;
		count(store_names: string[]): Request;
		executeSql(sql: string, params?: any[]): Request;
		from(store_name: string): Query;
		from(store_name: string, op: Op, value: any): Query;
		from(store_name: string, op: Op, value: any, op2: Op, value2: any): Query;
		get(store_name: string, key: any): Request;
		keys(iter: Iterator, limit?: number): Request;
		keys(
		store_name: string, key_range?: Object, limit?: number, offset?: number, reverse?: boolean
	): Request;
		keys(
		store_name: string, index_name: string, key_range?: Object, limit?: number, offset?: number, reverse?: boolean
	): Request;
		keys(store_name: string, limit?: boolean, offset?: number): Request;
		open(
		next_callback: (cursor: ICursor) => any, iterator: Iterator, mode: TransactionMode
	): Request;
		put(store_name: string, value: any, key: any): Request;
		put(store_name: string, value: any[], key: any[]): Request;
		put(store_name: string, value: any): Request;
		put(store_name: string, value: any[]): Request;
		remove(store_name: string, id_or_key_range: any): Request;
		remove(store_name: string, index_name: string, id_or_key_range: any): Request;
		clear(store_name: string, key_or_key_range: any): Request;
		scan(solver: (keys: any[], values: any[]) => any, iterators: Iterator[]): Request;
		values(iter: Iterator, limit?: number): Request;
		values(
		store_name: string, key_range?: Object, limit?: number, offset?: number, reverse?: boolean
	): Request;
		values(
		store_name: string, index_name: string, key_range?: Object, limit?: number, offset?: number, reverse?: boolean
	): Request;
		values(store_name: string, ids?: Array<any>): Request;
		values(keys?: Array<any>): Request
	}

	declare export class Storage extends DbOperator {
		constructor(db_name?: string, schema?: DatabaseSchemaJson, options?: StorageOptions): this;
		addEventListener(type: EventType, handler: (event: any) => void, capture?: boolean): any;
		addEventListener(type: EventType[], handler: (event: any) => void, capture?: boolean): any;
		branch(
		thread: Policy, isSerial: boolean, scope: string[], mode: TransactionMode, maxRequest: number
	): DbOperator;
		close(): any;
		get(store_name: string, key: any): Request;
		getName(callback: any): string;
		getSchema(callback: any): DatabaseSchemaJson;
		getType(): string;
		onReady(Error?: any): any;
		removeEventListener(type: EventType, handler: (event: any) => void, capture?: boolean): any;
		removeEventListener(type: EventType[], handler: (event: any) => void, capture?: boolean): any;
		run(
		callback: (iStorage: ydn.db.Storage) => void, store_names: string[], mode: TransactionMode
	): Request;
		search(
		catalog_name: string, query: string, limit?: number, threshold?: number
	): Request;
		setName(name: string): any;
		transaction(
		callback: (tx: any) => void, store_names: string[], mode: TransactionMode, completed_handler: (type: string, e?: Error) => void
	): any
	}

	
}

declare module 'algo' {
				declare export class Solver  {
		
	}

	declare export class NestedLoop extends Solver {
		constructor(out: {
		push: (value: any) => void
	}, limit?: number): this
	}

	declare export class SortedMerge extends Solver {
		constructor(out: {
		push: (value: any) => void
	}, limit?: number): this
	}

	declare export class ZigzagMerge extends Solver {
		constructor(out: {
		push: (value: any) => void
	}, limit?: number): this
	}

	
}

declare module 'events' {
				declare export class Event  {
		name: string;
		type: ydn.db.EventType
	}

	declare export class RecordEvent extends Event {
		getStoreName(): string;
		getKey(): any;
		getValue(): any
	}

	declare export class StorageEvent extends Event {
		getError(): Error;
		getVersion(): number;
		getOldVersion(): number
	}

	declare export class StoreEvent extends Event {
		getStoreName(): string;
		getKeys(): any[];
		getValues(): any[]
	}

	
}