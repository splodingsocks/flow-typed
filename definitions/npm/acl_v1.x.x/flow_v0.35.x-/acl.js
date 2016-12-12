

declare module 'acl' {
	declare type strings = string | string[];

	declare type Value = string | number;

	declare type Values = Value | Value[];

	declare type Action = () => any;

	declare type Callback = (err: Error) => any;

	declare type AnyCallback = (err: Error, obj: any) => any;

	declare type AllowedCallback = (err: Error, allowed: boolean) => any;

	declare type GetUserId = (req: http.IncomingMessage, res: http.ServerResponse) => Value;

	declare interface AclStatic {
		new (backend: Backend<any>, logger: Logger, options: Option): Acl,
		new (backend: Backend<any>, logger: Logger): Acl,
		new (backend: Backend<any>): Acl,
		memoryBackend: MemoryBackendStatic
	}

	declare interface Logger {
		debug: (msg: string) => any
	}

	declare interface Acl {
		addUserRoles: (userId: Value, roles: strings, cb?: Callback) => Promise<void>,
		removeUserRoles: (userId: Value, roles: strings, cb?: Callback) => Promise<void>,
		userRoles: (userId: Value, cb?: (err: Error, roles: string[]) => any) => Promise<string[]>,
		roleUsers: (role: Value, cb?: (err: Error, users: Values) => any) => Promise<any>,
		hasRole: (
		userId: Value, role: string, cb?: (err: Error, isInRole: boolean) => any
	) => Promise<boolean>,
		addRoleParents: (role: string, parents: Values, cb?: Callback) => Promise<void>,
		removeRole: (role: string, cb?: Callback) => Promise<void>,
		removeResource: (resource: string, cb?: Callback) => Promise<void>,
		allow: {
		(roles: Values, resources: strings, permissions: strings, cb?: Callback): Promise<void>,
		(aclSets: AclSet | AclSet[]): Promise<void>
	},
		removeAllow: (
		role: string, resources: strings, permissions: strings, cb?: Callback
	) => Promise<void>,
		removePermissions: (
		role: string, resources: strings, permissions: strings, cb?: Function
	) => Promise<void>,
		allowedPermissions: (userId: Value, resources: strings, cb?: AnyCallback) => Promise<void>,
		isAllowed: (
		userId: Value, resources: strings, permissions: strings, cb?: AllowedCallback
	) => Promise<boolean>,
		areAnyRolesAllowed: (
		roles: strings, resource: strings, permissions: strings, cb?: AllowedCallback
	) => Promise<any>,
		whatResources: (roles: strings, permissions: strings, cb?: AnyCallback) => Promise<any>,
		permittedResources: (roles: strings, permissions: strings, cb?: Function) => Promise<void>,
		middleware: (
		numPathComponents: number, userId: Value | GetUserId, actions: strings
	) => Promise<any>
	}

	declare interface Option {
		buckets?: BucketsOption
	}

	declare interface BucketsOption {
		meta?: string,
		parents?: string,
		permissions?: string,
		resources?: string,
		roles?: string,
		users?: string
	}

	declare interface AclSet {
		roles: strings,
		allows: AclAllow[]
	}

	declare interface AclAllow {
		resources: strings,
		permissions: strings
	}

	declare interface MemoryBackend {
		
	}

	declare interface MemoryBackendStatic {
		new (): MemoryBackend
	}

	declare interface Backend<T> {
		begin: () => T,
		end: (transaction: T, cb?: Action) => void,
		clean: (cb?: Action) => void,
		get: (bucket: string, key: Value, cb?: Action) => void,
		union: (bucket: string, keys: Value[], cb?: Action) => void,
		add: (transaction: T, bucket: string, key: Value, values: Values) => void,
		del: (transaction: T, bucket: string, keys: Value[]) => void,
		remove: (transaction: T, bucket: string, key: Value, values: Values) => void,
		endAsync: Function,
		getAsync: Function,
		cleanAsync: Function,
		unionAsync: Function
	}

	declare interface Contract {
		(args: IArguments): Contract | NoOp,
		debug: boolean,
		fulfilled: boolean,
		args: any[],
		checkedParams: string[],
		params: (...types: string[]) => Contract | NoOp,
		end: () => void
	}

	declare interface NoOp {
		params: (...types: string[]) => NoOp,
		end: () => void
	}

	declare interface AclStatic {
		redisBackend: RedisBackendStatic
	}

	declare interface RedisBackend {
		
	}

	declare interface RedisBackendStatic {
		new (redis: redis.RedisClient, prefix: string): RedisBackend,
		new (redis: redis.RedisClient): RedisBackend
	}

	declare interface AclStatic {
		mongodbBackend: MongodbBackendStatic
	}

	declare interface MongodbBackend {
		
	}

	declare interface MongodbBackendStatic {
		new (db: mongo.Db, prefix: string, useSingle: boolean): MongodbBackend,
		new (db: mongo.Db, prefix: string): MongodbBackend,
		new (db: mongo.Db): MongodbBackend
	}

			declare module.exports: AclStatic


}