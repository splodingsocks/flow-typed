

declare module 'db.js' {
					
}

declare module 'DbJs' {
	declare type Server = DbJs.IndexAccessibleServer & DbJs.ObjectStoreServer & DbJs.BaseServer;

	declare interface ErrorListener {
		(err: Error): void
	}

	declare interface OpenOptions {
		server: string,
		version: number,
		schema?: any
	}

	declare interface DbJsStatic {
		open(options: OpenOptions): Promise<Server>,
		delete(dbName: string): Promise<void>,
		cmp(key1: any, key2: any): number
	}

	declare interface ExecutableQuery<T> {
		execute(): Promise<T[]>
	}

	declare interface CountableQuery<T> {
		count(): ExecutableQuery<T>
	}

	declare interface KeysQuery<T> {
		
	}

	declare interface KeyableQuery<T> {
		keys(): KeysQuery<T>
	}

	declare interface FilterQuery<T> {
		
	}

	declare interface FilterableQuery<T> {
		filter<TValue>(index: string, value: TValue): FilterQuery<T>,
		filter(filter: (value: T) => boolean): FilterQuery<T>
	}

	declare interface DescQuery<T> {
		
	}

	declare interface DescableQuery<T> {
		desc(): DescQuery<T>
	}

	declare interface DistinctQuery<T> {
		
	}

	declare interface DistinctableQuery<T> {
		distinct(filter?: (value: T) => boolean): DistinctQuery<T>
	}

	declare interface ModifiableQuery<T> {
		modify(filter: (value: T) => boolean): ExecutableQuery<T>,
		modify(modifyObj: any): ExecutableQuery<T>
	}

	declare interface LimitableQuery<T> {
		limit(n: any, m: any): ExecutableQuery<T>
	}

	declare interface MappableQuery<T> {
		map<TMap>(fn: (value: T) => TMap): Query<TMap>
	}

	declare interface Query<T> {
		
	}

	declare interface IndexQuery<T> {
		only(...args: any[]): Query<T>,
		bound(lowerBound: any, upperBound: any): Query<T>,
		upperBound(upperBound: any): Query<T>,
		lowerBound(lowerBound: any): Query<T>,
		range(opts: any): Query<T>,
		all(): Query<T>
	}

	declare interface KeyValuePair<TKey, TValue> {
		key: TKey,
		item: TValue
	}

	declare interface BaseServer {
		getIndexedDB(): IDBDatabase,
		close(): void
	}

	declare interface IndexAccessibleServer {
		[store: string]: TypedObjectStoreServer<any>
	}

	declare interface ObjectStoreServer {
		add<T>(table: string, entity: T): Promise<T>,
		add<T>(table: string, ...entities: T[]): Promise<T[]>,
		add<TKey, TValue>(
		table: string, entity: KeyValuePair<TKey, TValue>
	): Promise<KeyValuePair<TKey, TValue>>,
		add<TKey, TValue>(
		table: string, ...entities: KeyValuePair<TKey, TValue>[]
	): Promise<KeyValuePair<TKey, TValue>[]>,
		update<T>(table: string, entity: T): Promise<T>,
		update<T>(table: string, ...entities: T[]): Promise<T[]>,
		update<TKey, TValue>(
		table: string, entity: KeyValuePair<TKey, TValue>
	): Promise<KeyValuePair<TKey, TValue>>,
		update<TKey, TValue>(
		table: string, ...entities: KeyValuePair<TKey, TValue>[]
	): Promise<KeyValuePair<TKey, TValue>[]>,
		remove<TKey>(table: string, key: TKey): Promise<TKey>,
		remove<TKey>(table: string, ...keys: TKey[]): Promise<TKey[]>,
		clear(table: string): Promise<void>,
		get<T>(table: string, key: any): Promise<T>,
		query<T>(table: string): IndexQuery<T>,
		query<T>(table: string, index: string): IndexQuery<T>,
		count(): Promise<number>,
		count(keyOrRange: any): Promise<number>,
		count(table: string, key: any): Promise<number>,
		addEventListener(type: "abort", listener: (ev: Event) => any): void,
		addEventListener(type: "versionchange", listener: (ev: Event) => any): void,
		addEventListener(type: "error", listener: (err: Error) => any): void,
		addEventListener(type: string, listener: EventListener | ErrorListener): void,
		abort(listener: (ev: Event) => any): ObjectStoreServer,
		versionchange(listener: (ev: Event) => any): ObjectStoreServer,
		error(listener: (ev: Error) => any): ObjectStoreServer
	}

	declare interface TypedObjectStoreServer<T> {
		add(entity: T): Promise<T>,
		add(...entities: T[]): Promise<T[]>,
		add<TKey, TValue>(
		entity: KeyValuePair<TKey, TValue>
	): Promise<KeyValuePair<TKey, TValue>>,
		add<TKey, TValue>(
		...entities: KeyValuePair<TKey, TValue>[]
	): Promise<KeyValuePair<TKey, TValue>[]>,
		update(entity: T): Promise<T>,
		update(...entities: T[]): Promise<T[]>,
		update<TKey, TValue>(
		entity: KeyValuePair<TKey, TValue>
	): Promise<KeyValuePair<TKey, TValue>>,
		update<TKey, TValue>(
		...entities: KeyValuePair<TKey, TValue>[]
	): Promise<KeyValuePair<TKey, TValue>[]>,
		remove<TKey>(key: TKey): Promise<TKey>,
		remove<TKey>(...keys: TKey[]): Promise<TKey[]>,
		clear(): Promise<void>,
		get(key: any): Promise<T>,
		query(): IndexQuery<T>,
		query(index: string): IndexQuery<T>,
		count(key: any): Promise<number>
	}

			
}

declare module 'db' {
					declare module.exports: DbJsStatic


}