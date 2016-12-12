

declare module 'mongodb' {
	declare export type CursorResult = any | void | boolean;

	declare export type AggregationCursorResult = any | void;

	declare export interface MongoCallback<T> {
		(error: MongoError, result: T): void
	}

	declare export interface MongoClientOptions {
		uri_decode_auth?: boolean,
		db?: DbCreateOptions,
		server?: ServerOptions,
		replSet?: ReplSetOptions,
		mongos?: MongosOptions,
		promiseLibrary?: Object
	}

	declare export interface DbCreateOptions {
		authSource?: string,
		w?: number | string,
		wtimeout?: number,
		j?: boolean,
		native_parser?: boolean,
		forceServerObjectId?: boolean,
		serializeFunctions?: boolean,
		ignoreUndefined?: boolean,
		raw?: boolean,
		promoteLongs?: boolean,
		bufferMaxEntries?: number,
		readPreference?: ReadPreference | string,
		pkFactory?: Object,
		promiseLibrary?: Object,
		readConcern?: {
		level?: Object
	}
	}

	declare export interface SocketOptions {
		autoReconnect?: boolean,
		noDelay?: boolean,
		keepAlive?: number,
		connectTimeoutMS?: number,
		socketTimeoutMS?: number
	}

	declare export interface ServerOptions {
		poolSize?: number,
		ssl?: boolean,
		sslValidate?: Object,
		checkServerIdentity?: boolean | Function,
		sslCA?: Array<Buffer | string>,
		sslCert?: Buffer | string,
		sslKey?: Buffer | string,
		sslPass?: Buffer | string,
		socketOptions?: SocketOptions,
		reconnectTries?: number,
		reconnectInterval?: number
	}

	declare export interface ReplSetOptions {
		ha?: boolean,
		haInterval?: number,
		replicaSet?: string,
		secondaryAcceptableLatencyMS?: number,
		connectWithNoPrimary?: boolean,
		poolSize?: number,
		ssl?: boolean,
		sslValidate?: Object,
		checkServerIdentity?: boolean | Function,
		sslCA?: Array<Buffer | string>,
		sslCert?: Buffer | string,
		sslKey?: Buffer | string,
		sslPass?: Buffer | string,
		socketOptions?: SocketOptions
	}

	declare export interface MongosOptions {
		ha?: boolean,
		haInterval?: number,
		poolSize?: number,
		ssl?: boolean,
		sslValidate?: Object,
		checkServerIdentity?: boolean | Function,
		sslCA?: Array<Buffer | string>,
		sslCert?: Buffer | string,
		sslKey?: Buffer | string,
		sslPass?: Buffer | string,
		socketOptions?: SocketOptions
	}

	declare export interface DbAddUserOptions {
		w?: string | number,
		wtimeout?: number,
		j?: boolean,
		customData?: Object,
		roles?: Object[]
	}

	declare export interface CollectionCreateOptions {
		w?: number | string,
		wtimeout?: number,
		j?: boolean,
		raw?: boolean,
		pkFactory?: Object,
		readPreference?: ReadPreference | string,
		serializeFunctions?: boolean,
		strict?: boolean,
		capped?: boolean,
		size?: number,
		max?: number,
		autoIndexId?: boolean
	}

	declare export interface DbCollectionOptions {
		w?: number | string,
		wtimeout?: number,
		j?: boolean,
		raw?: boolean,
		pkFactory?: Object,
		readPreference?: ReadPreference | string,
		serializeFunctions?: boolean,
		strict?: boolean,
		readConcern?: {
		level: Object
	}
	}

	declare export interface IndexOptions {
		w?: number | string,
		wtimeout?: number,
		j?: boolean,
		unique?: boolean,
		sparse?: boolean,
		background?: boolean,
		dropDups?: boolean,
		min?: number,
		max?: number,
		v?: number,
		expireAfterSeconds?: number,
		name?: string
	}

	declare export interface Admin {
		addUser(username: string, password: string, callback: MongoCallback<any>): void,
		addUser(username: string, password: string, options?: AddUserOptions): Promise<any>,
		addUser(
		username: string, password: string, options: AddUserOptions, callback: MongoCallback<any>
	): void,
		authenticate(username: string, callback: MongoCallback<any>): void,
		authenticate(username: string, password?: string): Promise<any>,
		authenticate(username: string, password: string, callback: MongoCallback<any>): void,
		buildInfo(): Promise<any>,
		buildInfo(callback: MongoCallback<any>): void,
		command(command: Object, callback: MongoCallback<any>): void,
		command(
		command: Object, options?: {
		readPreference?: ReadPreference | string,
		maxTimeMS?: number
	}
	): Promise<any>,
		command(
		command: Object, options: {
		readPreference?: ReadPreference | string,
		maxTimeMS?: number
	}, callback: MongoCallback<any>
	): void,
		listDatabases(): Promise<any>,
		listDatabases(callback: MongoCallback<any>): void,
		logout(): Promise<any>,
		logout(callback: MongoCallback<any>): void,
		ping(): Promise<any>,
		ping(callback: MongoCallback<any>): void,
		profilingInfo(): Promise<any>,
		profilingInfo(callback: MongoCallback<any>): void,
		profilingLevel(): Promise<any>,
		profilingLevel(callback: MongoCallback<any>): void,
		removeUser(username: string, callback: MongoCallback<any>): void,
		removeUser(username: string, options?: FSyncOptions): Promise<any>,
		removeUser(username: string, options: FSyncOptions, callback: MongoCallback<any>): void,
		replSetGetStatus(): Promise<any>,
		replSetGetStatus(callback: MongoCallback<any>): void,
		serverInfo(): Promise<any>,
		serverInfo(callback: MongoCallback<any>): void,
		serverStatus(): Promise<any>,
		serverStatus(callback: MongoCallback<any>): void,
		setProfilingLevel(level: string): Promise<any>,
		setProfilingLevel(level: string, callback: MongoCallback<any>): void,
		validateCollection(collectionNme: string, callback: MongoCallback<any>): void,
		validateCollection(collectionNme: string, options?: Object): Promise<any>,
		validateCollection(collectionNme: string, options: Object, callback: MongoCallback<any>): void
	}

	declare export interface AddUserOptions {
		w?: number | string,
		wtimeout?: number,
		j?: boolean,
		fsync: boolean,
		customData?: Object,
		roles?: Object[]
	}

	declare export interface FSyncOptions {
		w?: number | string,
		wtimeout?: number,
		j?: boolean,
		fsync?: boolean
	}

	declare export interface Collection {
		collectionName: string,
		namespace: string,
		writeConcern: any,
		readConcern: any,
		hint: any,
		aggregate(pipeline: Object[], callback: MongoCallback<any>): AggregationCursor,
		aggregate(
		pipeline: Object[], options?: CollectionAggregationOptions, callback?: MongoCallback<any>
	): AggregationCursor,
		bulkWrite(operations: Object[], callback: MongoCallback<BulkWriteOpResultObject>): void,
		bulkWrite(
		operations: Object[], options?: CollectionBluckWriteOptions
	): Promise<BulkWriteOpResultObject>,
		bulkWrite(
		operations: Object[], options: CollectionBluckWriteOptions, callback: MongoCallback<BulkWriteOpResultObject>
	): void,
		count(query: Object, callback: MongoCallback<number>): void,
		count(query: Object, options?: MongoCountPreferences): Promise<number>,
		count(
		query: Object, options: MongoCountPreferences, callback: MongoCallback<number>
	): void,
		createIndex(fieldOrSpec: string | any, callback: MongoCallback<string>): void,
		createIndex(fieldOrSpec: string | any, options?: IndexOptions): Promise<string>,
		createIndex(
		fieldOrSpec: string | any, options: IndexOptions, callback: MongoCallback<string>
	): void,
		createIndexes(indexSpecs: Object[]): Promise<any>,
		createIndexes(indexSpecs: Object[], callback: MongoCallback<any>): void,
		deleteMany(filter: Object, callback: MongoCallback<DeleteWriteOpResultObject>): void,
		deleteMany(
		filter: Object, options?: CollectionOptions
	): Promise<DeleteWriteOpResultObject>,
		deleteMany(
		filter: Object, options: CollectionOptions, callback: MongoCallback<DeleteWriteOpResultObject>
	): void,
		deleteOne(filter: Object, callback: MongoCallback<DeleteWriteOpResultObject>): void,
		deleteOne(
		filter: Object, options?: {
		w?: number | string,
		wtimmeout?: number,
		j?: boolean,
		bypassDocumentValidation?: boolean
	}
	): Promise<DeleteWriteOpResultObject>,
		deleteOne(
		filter: Object, options: {
		w?: number | string,
		wtimmeout?: number,
		j?: boolean,
		bypassDocumentValidation?: boolean
	}, callback: MongoCallback<DeleteWriteOpResultObject>
	): void,
		distinct(key: string, query: Object, callback: MongoCallback<any>): void,
		distinct(
		key: string, query: Object, options?: {
		readPreference?: ReadPreference | string
	}
	): Promise<any>,
		distinct(
		key: string, query: Object, options: {
		readPreference?: ReadPreference | string
	}, callback: MongoCallback<any>
	): void,
		drop(): Promise<any>,
		drop(callback: MongoCallback<any>): void,
		dropIndex(indexName: string, callback: MongoCallback<any>): void,
		dropIndex(indexName: string, options?: CollectionOptions): Promise<any>,
		dropIndex(
		indexName: string, options: CollectionOptions, callback: MongoCallback<any>
	): void,
		dropIndexes(): Promise<any>,
		dropIndexes(callback?: MongoCallback<any>): void,
		find(query?: Object): Cursor,
		find(
		query: Object, fields?: Object, skip?: number, limit?: number, timeout?: number
	): Cursor,
		findOne(filter: Object, callback: MongoCallback<any>): void,
		findOne(filter: Object, options?: FindOneOptions): Promise<any>,
		findOne(filter: Object, options: FindOneOptions, callback: MongoCallback<any>): void,
		findOneAndDelete(
		filter: Object, callback: MongoCallback<FindAndModifyWriteOpResultObject>
	): void,
		findOneAndDelete(
		filter: Object, options?: {
		projection?: Object,
		sort?: Object,
		maxTimeMS?: number
	}
	): Promise<FindAndModifyWriteOpResultObject>,
		findOneAndDelete(
		filter: Object, options: {
		projection?: Object,
		sort?: Object,
		maxTimeMS?: number
	}, callback: MongoCallback<FindAndModifyWriteOpResultObject>
	): void,
		findOneAndReplace(
		filter: Object, replacement: Object, callback: MongoCallback<FindAndModifyWriteOpResultObject>
	): void,
		findOneAndReplace(
		filter: Object, replacement: Object, options?: FindOneAndReplaceOption
	): Promise<FindAndModifyWriteOpResultObject>,
		findOneAndReplace(
		filter: Object, replacement: Object, options: FindOneAndReplaceOption, callback: MongoCallback<FindAndModifyWriteOpResultObject>
	): void,
		findOneAndUpdate(
		filter: Object, update: Object, callback: MongoCallback<FindAndModifyWriteOpResultObject>
	): void,
		findOneAndUpdate(
		filter: Object, update: Object, options?: FindOneAndReplaceOption
	): Promise<FindAndModifyWriteOpResultObject>,
		findOneAndUpdate(
		filter: Object, update: Object, options: FindOneAndReplaceOption, callback: MongoCallback<FindAndModifyWriteOpResultObject>
	): void,
		geoHaystackSearch(x: number, y: number, callback: MongoCallback<any>): void,
		geoHaystackSearch(x: number, y: number, options?: GeoHaystackSearchOptions): Promise<any>,
		geoHaystackSearch(
		x: number, y: number, options: GeoHaystackSearchOptions, callback: MongoCallback<any>
	): void,
		geoNear(x: number, y: number, callback: MongoCallback<any>): void,
		geoNear(x: number, y: number, options?: GeoNearOptions): Promise<any>,
		geoNear(
		x: number, y: number, options: GeoNearOptions, callback: MongoCallback<any>
	): void,
		group(
		keys: Object | Array<any> | Function | Code, condition: Object, initial: Object, reduce: Function | Code, finalize: Function | Code, command: boolean, callback: MongoCallback<any>
	): void,
		group(
		keys: Object | Array<any> | Function | Code, condition: Object, initial: Object, reduce: Function | Code, finalize: Function | Code, command: boolean, options?: {
		readPreference?: ReadPreference | string
	}
	): Promise<any>,
		group(
		keys: Object | Array<any> | Function | Code, condition: Object, initial: Object, reduce: Function | Code, finalize: Function | Code, command: boolean, options: {
		readPreference?: ReadPreference | string
	}, callback: MongoCallback<any>
	): void,
		indexes(): Promise<any>,
		indexes(callback: MongoCallback<any>): void,
		indexExists(indexes: string | string[]): Promise<boolean>,
		indexExists(indexes: string | string[], callback: MongoCallback<boolean>): void,
		indexInformation(callback: MongoCallback<any>): void,
		indexInformation(options?: {
		full: boolean
	}): Promise<any>,
		indexInformation(options: {
		full: boolean
	}, callback: MongoCallback<any>): void,
		initializeOrderedBulkOp(options?: CollectionOptions): OrderedBulkOperation,
		initializeUnorderedBulkOp(options?: CollectionOptions): UnorderedBulkOperation,
		insert(docs: Object, callback: MongoCallback<InsertOneWriteOpResult>): void,
		insert(
		docs: Object, options?: CollectionInsertOneOptions
	): Promise<InsertOneWriteOpResult>,
		insert(
		docs: Object, options: CollectionInsertOneOptions, callback: MongoCallback<InsertOneWriteOpResult>
	): void,
		insertMany(docs: Object[], callback: MongoCallback<InsertWriteOpResult>): void,
		insertMany(
		docs: Object[], options?: CollectionInsertManyOptions
	): Promise<InsertWriteOpResult>,
		insertMany(
		docs: Object[], options: CollectionInsertManyOptions, callback: MongoCallback<InsertWriteOpResult>
	): void,
		insertOne(docs: Object, callback: MongoCallback<InsertOneWriteOpResult>): void,
		insertOne(
		docs: Object, options?: CollectionInsertOneOptions
	): Promise<InsertOneWriteOpResult>,
		insertOne(
		docs: Object, options: CollectionInsertOneOptions, callback: MongoCallback<InsertOneWriteOpResult>
	): void,
		isCapped(): Promise<any>,
		isCapped(callback: MongoCallback<any>): void,
		listIndexes(
		options?: {
		batchSize?: number,
		readPreference?: ReadPreference | string
	}
	): CommandCursor,
		mapReduce(
		map: Function | string, reduce: Function | string, callback: MongoCallback<any>
	): void,
		mapReduce(
		map: Function | string, reduce: Function | string, options?: MapReduceOptions
	): Promise<any>,
		mapReduce(
		map: Function | string, reduce: Function | string, options: MapReduceOptions, callback: MongoCallback<any>
	): void,
		options(): Promise<any>,
		options(callback: MongoCallback<any>): void,
		parallelCollectionScan(callback: MongoCallback<Cursor[]>): void,
		parallelCollectionScan(options?: ParallelCollectionScanOptions): Promise<Cursor[]>,
		parallelCollectionScan(
		options: ParallelCollectionScanOptions, callback: MongoCallback<Cursor[]>
	): void,
		reIndex(): Promise<any>,
		reIndex(callback: MongoCallback<any>): void,
		remove(selector: Object, callback: MongoCallback<WriteOpResult>): void,
		remove(
		selector: Object, options?: CollectionOptions & {
		single?: boolean
	}
	): Promise<WriteOpResult>,
		remove(
		selector: Object, options?: CollectionOptions & {
		single?: boolean
	}, callback?: MongoCallback<WriteOpResult>
	): void,
		rename(newName: string, callback: MongoCallback<Collection>): void,
		rename(newName: string, options?: {
		dropTarget?: boolean
	}): Promise<Collection>,
		rename(
		newName: string, options: {
		dropTarget?: boolean
	}, callback: MongoCallback<Collection>
	): void,
		replaceOne(
		filter: Object, doc: Object, callback: MongoCallback<UpdateWriteOpResult>
	): void,
		replaceOne(
		filter: Object, doc: Object, options?: ReplaceOneOptions
	): Promise<UpdateWriteOpResult>,
		replaceOne(
		filter: Object, doc: Object, options: ReplaceOneOptions, callback: MongoCallback<UpdateWriteOpResult>
	): void,
		save(doc: Object, callback: MongoCallback<WriteOpResult>): void,
		save(doc: Object, options?: CollectionOptions): Promise<WriteOpResult>,
		save(
		doc: Object, options: CollectionOptions, callback: MongoCallback<WriteOpResult>
	): void,
		stats(callback: MongoCallback<CollStats>): void,
		stats(options?: {
		scale: number
	}): Promise<CollStats>,
		stats(options: {
		scale: number
	}, callback: MongoCallback<CollStats>): void,
		update(filter: Object, update: Object, callback: MongoCallback<WriteOpResult>): void,
		update(
		filter: Object, update: Object, options?: ReplaceOneOptions & {
		multi?: boolean
	}
	): Promise<WriteOpResult>,
		update(
		filter: Object, update: Object, options: ReplaceOneOptions & {
		multi?: boolean
	}, callback: MongoCallback<WriteOpResult>
	): void,
		updateMany(
		filter: Object, update: Object, callback: MongoCallback<UpdateWriteOpResult>
	): void,
		updateMany(
		filter: Object, update: Object, options?: {
		upsert?: boolean,
		w?: any,
		wtimeout?: number,
		j?: boolean
	}
	): Promise<UpdateWriteOpResult>,
		updateMany(
		filter: Object, update: Object, options: {
		upsert?: boolean,
		w?: any,
		wtimeout?: number,
		j?: boolean
	}, callback: MongoCallback<UpdateWriteOpResult>
	): void,
		updateOne(
		filter: Object, update: Object, callback: MongoCallback<UpdateWriteOpResult>
	): void,
		updateOne(
		filter: Object, update: Object, options?: ReplaceOneOptions
	): Promise<UpdateWriteOpResult>,
		updateOne(
		filter: Object, update: Object, options: ReplaceOneOptions, callback: MongoCallback<UpdateWriteOpResult>
	): void
	}

	declare export interface CollStats {
		ns: string,
		count: number,
		size: number,
		avgObjSize: number,
		storageSize: number,
		numExtents: number,
		nindexes: number,
		lastExtentSize: number,
		paddingFactor: number,
		userFlags: number,
		totalIndexSize: number,
		indexSizes: {
		_id_: number,
		username: number
	},
		capped: boolean,
		maxSize: boolean,
		wiredTiger: any,
		indexDetails: any,
		ok: number
	}

	declare export interface CollectionAggregationOptions {
		readPreference?: ReadPreference | string,
		cursor?: {
		batchSize: number
	},
		explain?: boolean,
		allowDiskUse?: boolean,
		maxTimeMS?: boolean,
		bypassDocumentValidation?: boolean
	}

	declare export interface CollectionInsertManyOptions {
		w?: number | string,
		wtimeout?: number,
		j?: boolean,
		serializeFunctions?: boolean,
		forceServerObjectId?: boolean
	}

	declare export interface CollectionBluckWriteOptions {
		w?: number | string,
		wtimeout?: number,
		j?: boolean,
		serializeFunctions?: boolean,
		ordered?: boolean,
		bypassDocumentValidation?: boolean
	}

	declare export interface BulkWriteOpResultObject {
		insertedCount?: number,
		matchedCount?: number,
		modifiedCount?: number,
		deletedCount?: number,
		upsertedCount?: number,
		insertedIds?: any,
		upsertedIds?: any,
		result?: any
	}

	declare export interface MongoCountPreferences {
		limit?: number,
		skip?: boolean,
		hint?: string,
		readPreference?: ReadPreference | string
	}

	declare export interface DeleteWriteOpResultObject {
		result: {
		ok?: number,
		n?: number
	},
		connection?: any,
		deletedCount?: number
	}

	declare export interface FindAndModifyWriteOpResultObject {
		value?: any,
		lastErrorObject?: any,
		ok?: number
	}

	declare export interface FindOneAndReplaceOption {
		projection?: Object,
		sort?: Object,
		maxTimeMS?: number,
		upsert?: boolean,
		returnOriginal?: boolean
	}

	declare export interface GeoHaystackSearchOptions {
		readPreference?: ReadPreference | string,
		maxDistance?: number,
		search?: Object,
		limit?: number
	}

	declare export interface GeoNearOptions {
		readPreference?: ReadPreference | string,
		num?: number,
		minDistance?: number,
		maxDistance?: number,
		distanceMultiplier?: number,
		query?: Object,
		spherical?: boolean,
		uniqueDocs?: boolean,
		includeLocs?: boolean
	}

	declare export interface CollectionOptions {
		w?: number | string,
		wtimeout?: number,
		j?: boolean
	}

	declare export interface OrderedBulkOperation {
		length: number,
		execute(callback: MongoCallback<BulkWriteResult>): void,
		execute(options?: FSyncOptions): Promise<BulkWriteResult>,
		execute(options: FSyncOptions, callback: MongoCallback<BulkWriteResult>): void,
		find(selector: Object): FindOperatorsOrdered,
		insert(doc: Object): OrderedBulkOperation
	}

	declare export interface BulkWriteResult {
		ok: number,
		nInserted: number,
		nUpdated: number,
		nUpserted: number,
		nModified: number,
		nRemoved: number,
		getInsertedIds(): Array<Object>,
		getLastOp(): Object,
		getRawResponse(): Object,
		getUpsertedIdAt(index: number): Object,
		getUpsertedIds(): Array<Object>,
		getWriteConcernError(): WriteConcernError,
		getWriteErrorAt(index: number): WriteError,
		getWriteErrorCount(): number,
		getWriteErrors(): Array<Object>,
		hasWriteErrors(): boolean
	}

	declare export interface WriteError {
		code: number,
		index: number,
		errmsg: string
	}

	declare export interface WriteConcernError {
		code: number,
		errmsg: string
	}

	declare export interface FindOperatorsOrdered {
		delete(): OrderedBulkOperation,
		deleteOne(): OrderedBulkOperation,
		replaceOne(doc: Object): OrderedBulkOperation,
		update(doc: Object): OrderedBulkOperation,
		updateOne(doc: Object): OrderedBulkOperation,
		upsert(): FindOperatorsOrdered
	}

	declare export interface UnorderedBulkOperation {
		length: number,
		execute(callback: MongoCallback<BulkWriteResult>): void,
		execute(options?: FSyncOptions): Promise<BulkWriteResult>,
		execute(options: FSyncOptions, callback: MongoCallback<BulkWriteResult>): void,
		find(selector: Object): FindOperatorsUnordered,
		insert(doc: Object): UnorderedBulkOperation
	}

	declare export interface FindOperatorsUnordered {
		length: number,
		remove(): UnorderedBulkOperation,
		removeOne(): UnorderedBulkOperation,
		replaceOne(doc: Object): UnorderedBulkOperation,
		update(doc: Object): UnorderedBulkOperation,
		updateOne(doc: Object): UnorderedBulkOperation,
		upsert(): FindOperatorsUnordered
	}

	declare export interface FindOneOptions {
		limit?: number,
		sort?: Array<any> | Object,
		fields?: Object,
		skip?: number,
		hint?: Object,
		explain?: boolean,
		snapshot?: boolean,
		timeout?: boolean,
		tailable?: boolean,
		batchSize?: number,
		returnKey?: boolean,
		maxScan?: number,
		min?: number,
		max?: number,
		showDiskLoc?: boolean,
		comment?: string,
		raw?: boolean,
		readPreference?: ReadPreference | string,
		partial?: boolean,
		maxTimeMs?: number
	}

	declare export interface InsertWriteOpResult {
		insertedCount: number,
		ops: Array<any>,
		insertedIds: Array<ObjectID>,
		connection: any,
		result: {
		ok: number,
		n: number
	}
	}

	declare export interface CollectionInsertOneOptions {
		w?: number | string,
		wtimeout?: number,
		j?: boolean,
		serializeFunctions?: boolean,
		forceServerObjectId?: boolean,
		bypassDocumentValidation?: boolean
	}

	declare export interface InsertOneWriteOpResult {
		insertedCount: number,
		ops: Array<any>,
		insertedId: ObjectID,
		connection: any,
		result: {
		ok: number,
		n: number
	}
	}

	declare export interface ParallelCollectionScanOptions {
		readPreference?: ReadPreference | string,
		batchSize?: number,
		numCursors?: number,
		raw?: boolean
	}

	declare export interface ReplaceOneOptions {
		upsert?: boolean,
		w?: number | string,
		wtimeout?: number,
		j?: boolean,
		bypassDocumentValidation?: boolean
	}

	declare export interface UpdateWriteOpResult {
		result: {
		ok: number,
		n: number,
		nModified: number
	},
		connection: any,
		matchedCount: number,
		modifiedCount: number,
		upsertedCount: number,
		upsertedId: {
		_id: ObjectID
	}
	}

	declare export interface MapReduceOptions {
		readPreference?: ReadPreference | string,
		out?: Object,
		query?: Object,
		sort?: Object,
		limit?: number,
		keeptemp?: boolean,
		finalize?: Function | string,
		scope?: Object,
		jsMode?: boolean,
		verbose?: boolean,
		bypassDocumentValidation?: boolean
	}

	declare export interface WriteOpResult {
		ops: Array<any>,
		connection: any,
		result: any
	}

	declare export interface Readable {
		pause(): void,
		pipe(destination: Writable, options?: Object): void,
		read(size: number): string | Buffer | void,
		resume(): void,
		setEncoding(encoding: string): void,
		unpipe(destination?: Writable): void,
		unshift(stream: Buffer | string): void,
		wrap(stream: Stream): void
	}

	declare export interface Writable {
		
	}

	declare export interface Stream {
		
	}

	declare export interface Cursor {
		sortValue: string,
		timeout: boolean,
		readPreference: ReadPreference,
		addCursorFlag(flag: string, value: boolean): Cursor,
		addQueryModifier(name: string, value: boolean): Cursor,
		batchSize(value: number): Cursor,
		clone(): Cursor,
		close(): Promise<CursorResult>,
		close(callback: MongoCallback<CursorResult>): void,
		comment(value: string): Cursor,
		count(applySkipLimit: boolean, callback: MongoCallback<number>): void,
		count(applySkipLimit: boolean, options?: CursorCommentOptions): Promise<number>,
		count(
		applySkipLimit: boolean, options: CursorCommentOptions, callback: MongoCallback<number>
	): void,
		explain(): Promise<CursorResult>,
		explain(callback: MongoCallback<CursorResult>): void,
		filter(filter: Object): Cursor,
		forEach(iterator: IteratorCallback, callback: EndCallback): void,
		hasNext(): Promise<boolean>,
		hasNext(callback: MongoCallback<boolean>): void,
		hint(hint: Object): Cursor,
		isClosed(): boolean,
		limit(value: number): Cursor,
		map(transform: Function): Cursor,
		max(max: number): Cursor,
		maxAwaitTimeMS(value: number): Cursor,
		maxScan(maxScan: Object): Cursor,
		maxTimeMS(value: number): Cursor,
		min(min: number): Cursor,
		next(): Promise<CursorResult>,
		next(callback: MongoCallback<CursorResult>): void,
		pause(): void,
		pipe(destination: Writable, options?: Object): void,
		project(value: Object): Cursor,
		read(size: number): string | Buffer | void,
		resume(): void,
		returnKey(returnKey: Object): Cursor,
		rewind(): void,
		setCursorOption(field: string, value: Object): Cursor,
		setEncoding(encoding: string): void,
		setReadPreference(readPreference: string | ReadPreference): Cursor,
		showRecordId(showRecordId: Object): Cursor,
		skip(value: number): Cursor,
		snapshot(snapshot: Object): Cursor,
		sort(keyOrList: string | Object[] | Object | Object, direction?: number): Cursor,
		stream(options?: {
		transform?: Function
	}): Cursor,
		toArray(): Promise<any[]>,
		toArray(callback: MongoCallback<any[]>): void,
		unpipe(destination?: Writable): void,
		unshift(stream: Buffer | string): void,
		wrap(stream: Stream): void
	}

	declare export interface CursorCommentOptions {
		skip?: number,
		limit?: number,
		maxTimeMS?: number,
		hint?: string,
		readPreference?: ReadPreference | string
	}

	declare export interface IteratorCallback {
		(doc: any): void
	}

	declare export interface EndCallback {
		(error: MongoError): void
	}

	declare export interface AggregationCursor {
		batchSize(value: number): AggregationCursor,
		clone(): AggregationCursor,
		close(): Promise<AggregationCursorResult>,
		close(callback: MongoCallback<AggregationCursorResult>): void,
		each(callback: MongoCallback<AggregationCursorResult>): void,
		explain(): Promise<AggregationCursorResult>,
		explain(callback: MongoCallback<AggregationCursorResult>): void,
		geoNear(document: Object): AggregationCursor,
		group(document: Object): AggregationCursor,
		isClosed(): boolean,
		limit(value: number): AggregationCursor,
		match(document: Object): AggregationCursor,
		maxTimeMS(value: number): AggregationCursor,
		next(): Promise<AggregationCursorResult>,
		next(callback: MongoCallback<AggregationCursorResult>): void,
		out(destination: string): AggregationCursor,
		pause(): void,
		pipe(destination: Writable, options?: Object): void,
		project(document: Object): AggregationCursor,
		read(size: number): string | Buffer | void,
		redact(document: Object): AggregationCursor,
		resume(): void,
		rewind(): AggregationCursor,
		setEncoding(encoding: string): void,
		skip(value: number): AggregationCursor,
		sort(document: Object): AggregationCursor,
		toArray(): Promise<any[]>,
		toArray(callback: MongoCallback<any[]>): void,
		unpipe(destination?: Writable): void,
		unshift(stream: Buffer | string): void,
		unwind(field: string): AggregationCursor,
		wrap(stream: Stream): void
	}

	declare export interface CommandCursor {
		batchSize(value: number): CommandCursor,
		clone(): CommandCursor,
		close(): Promise<AggregationCursorResult>,
		close(callback: MongoCallback<AggregationCursorResult>): void,
		each(callback: MongoCallback<AggregationCursorResult>): void,
		isClosed(): boolean,
		maxTimeMS(value: number): CommandCursor,
		next(): Promise<AggregationCursorResult>,
		next(callback: MongoCallback<AggregationCursorResult>): void,
		pause(): void,
		pipe(destination: Writable, options?: Object): void,
		read(size: number): string | Buffer | void,
		resume(): void,
		rewind(): CommandCursor,
		setEncoding(encoding: string): void,
		setReadPreference(readPreference: string | ReadPreference): CommandCursor,
		toArray(): Promise<any[]>,
		toArray(callback: MongoCallback<any[]>): void,
		unpipe(destination?: Writable): void,
		unshift(stream: Buffer | string): void,
		wrap(stream: Stream): void
	}

		declare export class MongoClient  {
		constructor(): this;
		connect(uri: string, callback: MongoCallback<Db>): void;
		connect(uri: string, options?: MongoClientOptions): Promise<Db>;
		connect(uri: string, options: MongoClientOptions, callback: MongoCallback<Db>): void;
		connect(uri: string, callback: MongoCallback<Db>): void;
		connect(uri: string, options?: MongoClientOptions): Promise<Db>;
		connect(uri: string, options: MongoClientOptions, callback: MongoCallback<Db>): void
	}

	declare export class MongoError extends Error {
		constructor(message: string): this;
		create(options: Object): MongoError
	}

	declare export class ReadPreference  {
		constructor(mode: string, tags: Object): this;
		mode: string;
		tags: any;
		PRIMARY: string;
		PRIMARY_PREFERRED: string;
		SECONDARY: string;
		SECONDARY_PREFERRED: string;
		NEAREST: string;
		isValid(mode: string): boolean;
		isValid(mode: string): boolean
	}

	declare export class Db extends EventEmitter {
		constructor(databaseName: string, serverConfig: Server | ReplSet | Mongos, options?: DbCreateOptions): this;
		serverConfig: Server | ReplSet | Mongos;
		bufferMaxEntries: number;
		databaseName: string;
		options: any;
		native_parser: boolean;
		slaveOk: boolean;
		writeConcern: any;
		addUser(username: string, password: string, callback: MongoCallback<any>): void;
		addUser(username: string, password: string, options?: DbAddUserOptions): Promise<any>;
		addUser(
		username: string, password: string, options: DbAddUserOptions, callback: MongoCallback<any>
	): void;
		admin(): Admin;
		authenticate(userName: string, password: string, callback: MongoCallback<any>): void;
		authenticate(
		userName: string, password: string, options?: {
		authMechanism: string
	}
	): Promise<any>;
		authenticate(
		userName: string, password: string, options: {
		authMechanism: string
	}, callback: MongoCallback<any>
	): void;
		close(callback: MongoCallback<void>): void;
		close(forceClose?: boolean): Promise<void>;
		close(forceClose: boolean, callback: MongoCallback<void>): void;
		collection(name: string): Collection;
		collection(name: string, callback: MongoCallback<Collection>): Collection;
		collection(
		name: string, options: DbCollectionOptions, callback: MongoCallback<Collection>
	): Collection;
		collections(): Promise<Collection[]>;
		collections(callback: MongoCallback<Collection[]>): void;
		command(command: Object, callback: MongoCallback<any>): void;
		command(
		command: Object, options?: {
		readPreference: ReadPreference | string
	}
	): Promise<any>;
		command(
		command: Object, options: {
		readPreference: ReadPreference | string
	}, callback: MongoCallback<any>
	): void;
		createCollection(name: string, callback: MongoCallback<Collection>): void;
		createCollection(name: string, options?: CollectionCreateOptions): Promise<Collection>;
		createCollection(
		name: string, options: CollectionCreateOptions, callback: MongoCallback<Collection>
	): void;
		createIndex(name: string, fieldOrSpec: string | Object, callback: MongoCallback<any>): void;
		createIndex(
		name: string, fieldOrSpec: string | Object, options?: IndexOptions
	): Promise<any>;
		createIndex(
		name: string, fieldOrSpec: string | Object, options: IndexOptions, callback: MongoCallback<any>
	): void;
		db(dbName: string): Db;
		db(
		dbName: string, options: {
		noListener?: boolean,
		returnNonCachedInstance?: boolean
	}
	): Db;
		dropCollection(name: string): Promise<boolean>;
		dropCollection(name: string, callback: MongoCallback<boolean>): void;
		dropDatabase(): Promise<any>;
		dropDatabase(callback: MongoCallback<any>): void;
		executeDbAdminCommand(command: Object, callback: MongoCallback<any>): void;
		executeDbAdminCommand(
		command: Object, options?: {
		readPreference?: ReadPreference | string,
		maxTimeMS?: number
	}
	): Promise<any>;
		executeDbAdminCommand(
		command: Object, options: {
		readPreference?: ReadPreference | string,
		maxTimeMS?: number
	}, callback: MongoCallback<any>
	): void;
		indexInformation(name: string, callback: MongoCallback<any>): void;
		indexInformation(
		name: string, options?: {
		full?: boolean,
		readPreference?: ReadPreference | string
	}
	): Promise<any>;
		indexInformation(
		name: string, options: {
		full?: boolean,
		readPreference?: ReadPreference | string
	}, callback: MongoCallback<any>
	): void;
		listCollections(
		filter: Object, options?: {
		batchSize?: number,
		readPreference?: ReadPreference | string
	}
	): CommandCursor;
		logout(callback: MongoCallback<any>): void;
		logout(options?: {
		dbName?: string
	}): Promise<any>;
		logout(options: {
		dbName?: string
	}, callback: MongoCallback<any>): void;
		open(): Promise<Db>;
		open(callback: MongoCallback<Db>): void;
		removeUser(username: string, callback: MongoCallback<any>): void;
		removeUser(
		username: string, options?: {
		w?: number | string,
		wtimeout?: number,
		j?: boolean
	}
	): Promise<any>;
		removeUser(
		username: string, options: {
		w?: number | string,
		wtimeout?: number,
		j?: boolean
	}, callback: MongoCallback<any>
	): void;
		renameCollection(
		fromCollection: string, toCollection: string, callback: MongoCallback<Collection>
	): void;
		renameCollection(
		fromCollection: string, toCollection: string, options?: {
		dropTarget?: boolean
	}
	): Promise<Collection>;
		renameCollection(
		fromCollection: string, toCollection: string, options: {
		dropTarget?: boolean
	}, callback: MongoCallback<Collection>
	): void;
		stats(callback: MongoCallback<any>): void;
		stats(options?: {
		scale?: number
	}): Promise<any>;
		stats(options: {
		scale?: number
	}, callback: MongoCallback<any>): void
	}

	declare export class Server extends EventEmitter {
		constructor(host: string, port: number, options?: ServerOptions): this;
		connections(): Array<any>
	}

	declare export class ReplSet extends EventEmitter {
		constructor(servers: Array<Server>, options?: ReplSetOptions): this;
		connections(): Array<any>
	}

	declare export class Mongos extends EventEmitter {
		constructor(servers: Array<Server>, options?: MongosOptions): this;
		connections(): Array<any>
	}

	declare export class ObjectID  {
		constructor(s?: string | number): this;
		generationTime: number;
		createFromHexString(hexString: string): ObjectID;
		createFromTime(time: number): ObjectID;
		isValid(id: string | number): boolean;
		equals(otherID: ObjectID): boolean;
		generate(time?: number): string;
		getTimestamp(): Date;
		toHexString(): string;
		toString(): string
	}

	declare export class Binary  {
		constructor(buffer: Buffer, subType?: number): this;
		SUBTYPE_BYTE_ARRAY: number;
		SUBTYPE_DEFAULT: number;
		SUBTYPE_FUNCTION: number;
		SUBTYPE_MD5: number;
		SUBTYPE_USER_DEFINED: number;
		SUBTYPE_UUID: number;
		SUBTYPE_UUID_OLD: number;
		length(): number;
		put(byte_value: number | string): void;
		read(position: number, length: number): Buffer;
		value(): string;
		write(buffer: Buffer | string, offset: number): void
	}

	declare export class Double  {
		constructor(value: number): this;
		valueOf(): number
	}

	declare export class Long  {
		constructor(low: number, high: number): this;
		MAX_VALUE: Long;
		MIN_VALUE: Long;
		NEG_ONE: Long;
		ONE: Long;
		ZERO: Long;
		fromBits(lowBits: number, highBits: number): Long;
		fromInt(value: number): Long;
		fromNumber(value: number): Long;
		fromString(str: string, radix?: number): Long;
		add(other: Long): Long;
		and(other: Long): Long;
		compare(other: Long): number;
		div(other: Long): Long;
		equals(other: Long): boolean;
		getHighBits(): number;
		getLowBits(): number;
		getLowBitsUnsigned(): number;
		getNumBitsAbs(): number;
		greaterThan(other: Long): number;
		greaterThanOrEqual(other: Long): number;
		isNegative(): boolean;
		isOdd(): boolean;
		isZero(): boolean;
		lessThan(other: Long): boolean;
		lessThanOrEqual(other: Long): boolean;
		modulo(other: Long): Long;
		multiply(other: Long): Long;
		negate(): Long;
		not(): Long;
		notEquals(other: Long): boolean;
		or(other: Long): Long;
		shiftLeft(other: number): Long;
		shiftRight(other: number): Long;
		shiftRightUnsigned(other: number): Long;
		subtract(other: Long): Long;
		toInt(): number;
		toJSON(): string;
		toNumber(): number;
		toString(radix?: number): string;
		xor(other: Long): Long
	}

	declare export class MaxKey  {
		
	}

	declare export class MinKey  {
		
	}

	declare export class Timestamp  {
		constructor(low: number, high: number): this;
		MAX_VALUE: Timestamp;
		MIN_VALUE: Timestamp;
		NEG_ONE: Timestamp;
		ONE: Timestamp;
		ZERO: Timestamp;
		fromBits(lowBits: number, highBits: number): Timestamp;
		fromInt(value: number): Timestamp;
		fromNumber(value: number): Timestamp;
		fromString(str: string, radix?: number): Timestamp;
		add(other: Timestamp): Timestamp;
		and(other: Timestamp): Timestamp;
		compare(other: Timestamp): number;
		div(other: Timestamp): Timestamp;
		equals(other: Timestamp): boolean;
		getHighBits(): number;
		getLowBits(): number;
		getLowBitsUnsigned(): number;
		getNumBitsAbs(): number;
		greaterThan(other: Timestamp): number;
		greaterThanOrEqual(other: Timestamp): number;
		isNegative(): boolean;
		isOdd(): boolean;
		isZero(): boolean;
		lessThan(other: Timestamp): boolean;
		lessThanOrEqual(other: Timestamp): boolean;
		modulo(other: Timestamp): Timestamp;
		multiply(other: Timestamp): Timestamp;
		negate(): Timestamp;
		not(): Timestamp;
		notEquals(other: Timestamp): boolean;
		or(other: Timestamp): Timestamp;
		shiftLeft(other: number): Timestamp;
		shiftRight(other: number): Timestamp;
		shiftRightUnsigned(other: number): Timestamp;
		subtract(other: Timestamp): Timestamp;
		toInt(): number;
		toJSON(): string;
		toNumber(): number;
		toString(radix?: number): string;
		xor(other: Timestamp): Timestamp
	}

	declare export class Code  {
		constructor(code: string | Function, scope?: Object): this;
		code: string | Function;
		scope: any
	}

	
}