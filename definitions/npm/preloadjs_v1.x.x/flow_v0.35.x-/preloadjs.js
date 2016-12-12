

declare module 'preloadjs' {
					
}

declare module 'npm$namespace$createjs' {
				declare export class AbstractLoader extends EventDispatcher {
		BINARY: string;
		canceled: boolean;
		CSS: string;
		GET: string;
		IMAGE: string;
		JAVASCRIPT: string;
		JSON: string;
		JSONP: string;
		loaded: boolean;
		MANIFEST: string;
		POST: string;
		progress: number;
		resultFormatter: () => any;
		SOUND: string;
		SPRITESHEET: string;
		SVG: string;
		TEXT: string;
		type: string;
		VIDEO: string;
		XML: string;
		cancel(): void;
		destroy(): void;
		getItem(value?: string): Object;
		getLoadedItems(): Object[];
		getResult(value?: any, rawResult?: boolean): Object;
		getTag(): Object;
		load(): void;
		setTag(tag: Object): void;
		toString(): string
	}

	declare export class AbstractMediaLoader  {
		constructor(loadItem: Object, preferXHR: boolean, type: string): this
	}

	declare export class AbstractRequest  {
		constructor(item: LoadItem): this;
		cancel(): void;
		destroy(): void;
		load(): void
	}

	declare export class BinaryLoader  {
		constructor(loadItem: Object): this;
		canLoadItem(item: Object): boolean
	}

	declare export class CSSLoader  {
		constructor(loadItem: Object, preferXHR: boolean): this;
		canLoadItem(item: Object): boolean
	}

	declare export class ErrorEvent  {
		constructor(title?: string, message?: string, data?: Object): this;
		data: Object;
		message: string;
		title: string
	}

	declare export class ImageLoader  {
		constructor(loadItem: Object, preferXHR: boolean): this;
		canLoadItem(item: Object): boolean
	}

	declare export class JavaScriptLoader  {
		constructor(loadItem: Object, preferXHR: boolean): this;
		canLoadItem(item: Object): boolean
	}

	declare export class JSONLoader  {
		constructor(loadItem: Object): this;
		canLoadItem(item: Object): boolean
	}

	declare export class JSONPLoader  {
		constructor(loadItem: Object): this;
		canLoadItem(item: Object): boolean
	}

	declare export class LoadItem  {
		callback: string;
		crossOrigin: boolean;
		data: Object;
		headers: Object;
		id: string;
		loadTimeout: number;
		maintainOrder: boolean;
		method: string;
		mimeType: string;
		src: string;
		type: string;
		values: Object;
		withCredentials: boolean;
		create(value: LoadItem | string | Object): Object | LoadItem;
		set(props: Object): LoadItem
	}

	declare export class LoadQueue extends AbstractLoader {
		constructor(preferXHR?: boolean, basePath?: string, crossOrigin?: string | boolean): this;
		maintainScriptOrder: boolean;
		next: LoadQueue;
		stopOnError: boolean;
		close(): void;
		getItems(loaded: boolean): Object[];
		installPlugin(plugin: () => any): void;
		loadFile(file: Object | string, loadNow?: boolean, basePath?: string): void;
		loadManifest(manifest: Object | string | any[], loadNow?: boolean, basePath?: string): void;
		registerLoader(loader: AbstractLoader): void;
		remove(idsOrUrls: string | any[]): void;
		removeAll(): void;
		reset(): void;
		setMaxConnections(value: number): void;
		setPaused(value: boolean): void;
		setPreferXHR(value: boolean): boolean;
		setUseXHR(value: boolean): void;
		unregisterLoader(loader: AbstractLoader): void
	}

	declare export class ManifestLoader  {
		constructor(loadItem: LoadItem | Object): this;
		canLoadItem(item: LoadItem | Object): boolean
	}

	declare export class MediaTagRequest  {
		constructor(loadItem: LoadItem, tag: HTMLAudioElement | HTMLVideoElement, srcAttribute: string): this
	}

	declare export class PreloadJS  {
		buildDate: string;
		version: string
	}

	declare export class ProgressEvent  {
		constructor(loaded: number, total?: number): this;
		loaded: number;
		progress: number;
		total: number;
		clone(): ProgressEvent
	}

	declare export class RequestUtils  {
		ABSOLUTE_PATH: RegExp;
		EXTENSION_PATT: RegExp;
		RELATIVE_PATH: RegExp;
		buildPath(src: string, data?: Object): string;
		formatQueryString(data: Object, query?: Object[]): string;
		getTypeByExtension(extension: string): string;
		isAudioTag(item: Object): boolean;
		isBinary(type: string): boolean;
		isCrossDomain(item: Object): boolean;
		isImageTag(item: Object): boolean;
		isLocal(item: Object): boolean;
		isText(type: string): boolean;
		isVideoTag(item: Object): boolean;
		parseURI(path: string): Object
	}

	declare export class SoundLoader  {
		constructor(loadItem: Object, preferXHR: boolean): this;
		canLoadItem(item: Object): boolean
	}

	declare export class SpriteSheetLoader  {
		constructor(loadItem: Object): this;
		canLoadItem(item: Object): boolean
	}

	declare export class SVGLoader  {
		constructor(loadItem: Object, preferXHR: boolean): this;
		canLoadItem(item: Object): boolean
	}

	declare export class TagRequest  {
		
	}

	declare export class TextLoader  {
		constructor(loadItem: Object): this;
		canLoadItem(item: Object): boolean
	}

	declare export class VideoLoader  {
		constructor(loadItem: Object, preferXHR: boolean): this;
		canLoadItem(item: Object): boolean
	}

	declare export class XHRRequest extends AbstractLoader {
		constructor(item: Object): this;
		getAllResponseHeaders(): string;
		getResponseHeader(header: string): string
	}

	declare export class XMLLoader  {
		constructor(loadItem: Object): this;
		canLoadItem(item: Object): boolean
	}

	
}

declare module 'DataUtils' {
			declare export function parseJSON(value: string): Object

	declare export function parseXML(text: string, type: string): XMLDocument

		
}