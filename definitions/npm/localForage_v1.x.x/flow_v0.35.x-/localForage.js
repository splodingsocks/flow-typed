

declare module 'localForage' {
		declare interface LocalForageOptions {
		driver?: string | LocalForageDriver | LocalForageDriver[],
		name?: string,
		size?: number,
		storeName?: string,
		version?: number,
		description?: string
	}

	declare interface LocalForageDbMethods {
		getItem<T>(key: string): Promise<T>,
		getItem<T>(key: string, callback: (err: any, value: T) => void): void,
		setItem<T>(key: string, value: T): Promise<T>,
		setItem<T>(key: string, value: T, callback: (err: any, value: T) => void): void,
		removeItem(key: string): Promise<void>,
		removeItem(key: string, callback: (err: any) => void): void,
		clear(): Promise<void>,
		clear(callback: (err: any) => void): void,
		length(): Promise<number>,
		length(callback: (err: any, numberOfKeys: number) => void): void,
		key(keyIndex: number): Promise<string>,
		key(keyIndex: number, callback: (err: any, key: string) => void): void,
		keys(): Promise<string[]>,
		keys(callback: (err: any, keys: string[]) => void): void,
		iterate(
		iteratee: (value: any, key: string, iterationNumber: number) => any
	): Promise<any>,
		iterate(
		iteratee: (value: any, key: string, iterationNumber: number) => any, callback: (err: any, result: any) => void
	): void
	}

	declare interface LocalForageDriverSupportFunc {
		(): Promise<boolean>
	}

	declare interface LocalForageDriver {
		_driver: string,
		_initStorage(options: LocalForageOptions): void,
		_support: boolean | LocalForageDriverSupportFunc
	}

	declare interface LocalForageSerializer {
		serialize<T>(
		value: T | ArrayBuffer | Blob, callback: (value: string, error: any) => {
		
	}
	): void,
		deserialize<T>(value: string): T | ArrayBuffer | Blob,
		stringToBuffer(serializedString: string): ArrayBuffer,
		bufferToString(buffer: ArrayBuffer): string
	}

	declare interface LocalForage {
		LOCALSTORAGE: string,
		WEBSQL: string,
		INDEXEDDB: string,
		config(options: LocalForageOptions): boolean,
		createInstance(options: LocalForageOptions): LocalForage,
		driver(): string,
		setDriver(driver: string | string[]): Promise<void>,
		setDriver(
		driver: string | string[], callback: () => void, errorCallback: (error: any) => void
	): void,
		defineDriver(driver: LocalForageDriver): Promise<void>,
		defineDriver(
		driver: LocalForageDriver, callback: () => void, errorCallback: (error: any) => void
	): void,
		getDriver(driver: string): Promise<LocalForageDriver>,
		getSerializer(): Promise<LocalForageSerializer>,
		getSerializer(callback: (serializer: LocalForageSerializer) => void): void,
		supports(driverName: string): boolean
	}

			
}

declare module 'localforage' {
					declare module.exports: LocalForage


}