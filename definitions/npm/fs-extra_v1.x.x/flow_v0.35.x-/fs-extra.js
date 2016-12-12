

declare module 'fs-extra' {
	declare export type CopyFilter = CopyFilterFunction | RegExp;

	declare export interface CopyFilterFunction {
		(src: string): boolean
	}

	declare export interface CopyOptions {
		clobber?: boolean,
		preserveTimestamps?: boolean,
		dereference?: boolean,
		filter?: CopyFilter,
		recursive?: boolean
	}

	declare export interface MoveOptions {
		clobber?: boolean,
		limit?: number
	}

	declare export interface OpenOptions {
		encoding?: string,
		flag?: string
	}

	declare export interface MkdirOptions {
		fs?: any,
		mode?: number
	}

	declare export function copy(src: string, dest: string, callback?: (err: Error) => void): void

	declare export function copy(
		src: string, dest: string, filter: CopyFilter, callback?: (err: Error) => void
	): void

	declare export function copy(
		src: string, dest: string, options: CopyOptions, callback?: (err: Error) => void
	): void

	declare export function copySync(src: string, dest: string): void

	declare export function copySync(src: string, dest: string, filter: CopyFilter): void

	declare export function copySync(src: string, dest: string, options: CopyOptions): void

	declare export function move(src: string, dest: string, callback?: (err: Error) => void): void

	declare export function move(
		src: string, dest: string, options: MoveOptions, callback?: (err: Error) => void
	): void

	declare export function createFile(file: string, callback?: (err: Error) => void): void

	declare export function createFileSync(file: string): void

	declare export function mkdirs(dir: string, callback?: (err: Error) => void): void

	declare export function mkdirp(dir: string, callback?: (err: Error) => void): void

	declare export function mkdirs(dir: string, options?: MkdirOptions, callback?: (err: Error) => void): void

	declare export function mkdirp(dir: string, options?: MkdirOptions, callback?: (err: Error) => void): void

	declare export function mkdirsSync(dir: string, options?: MkdirOptions): void

	declare export function mkdirpSync(dir: string, options?: MkdirOptions): void

	declare export function outputFile(file: string, data: any, callback?: (err: Error) => void): void

	declare export function outputFileSync(file: string, data: any): void

	declare export function outputJson(file: string, data: any, callback?: (err: Error) => void): void

	declare export function outputJSON(file: string, data: any, callback?: (err: Error) => void): void

	declare export function outputJsonSync(file: string, data: any): void

	declare export function outputJSONSync(file: string, data: any): void

	declare export function readJson(file: string, callback: (err: Error, jsonObject: any) => void): void

	declare export function readJson(
		file: string, options: OpenOptions, callback: (err: Error, jsonObject: any) => void
	): void

	declare export function readJSON(file: string, callback: (err: Error, jsonObject: any) => void): void

	declare export function readJSON(
		file: string, options: OpenOptions, callback: (err: Error, jsonObject: any) => void
	): void

	declare export function readJsonSync(file: string, options?: OpenOptions): any

	declare export function readJSONSync(file: string, options?: OpenOptions): any

	declare export function remove(dir: string, callback?: (err: Error) => void): void

	declare export function removeSync(dir: string): void

	declare export function writeJson(file: string, object: any, callback?: (err: Error) => void): void

	declare export function writeJson(
		file: string, object: any, options?: OpenOptions, callback?: (err: Error) => void
	): void

	declare export function writeJSON(file: string, object: any, callback?: (err: Error) => void): void

	declare export function writeJSON(
		file: string, object: any, options?: OpenOptions, callback?: (err: Error) => void
	): void

	declare export function writeJsonSync(file: string, object: any, options?: OpenOptions): void

	declare export function writeJSONSync(file: string, object: any, options?: OpenOptions): void

	declare export function ensureDir(path: string, cb: (err: Error) => void): void

	declare export function ensureDirSync(path: string): void

	declare export function ensureFile(path: string, cb: (err: Error) => void): void

	declare export function ensureFileSync(path: string): void

	declare export function ensureLink(path: string, cb: (err: Error) => void): void

	declare export function ensureLinkSync(path: string): void

	declare export function ensureSymlink(path: string, cb: (err: Error) => void): void

	declare export function ensureSymlinkSync(path: string): void

	declare export function emptyDir(path: string, callback?: (err: Error) => void): void

	declare export function emptyDirSync(path: string): boolean

		
}