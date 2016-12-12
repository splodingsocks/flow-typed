

declare module 'i18next-xhr-backend' {
		declare interface Interpolator {
		interpolate: () => string
	}

	declare interface Services {
		interpolator: Interpolator
	}

	declare interface BackendOptions {
		loadPath?: string | Function,
		addPath?: string,
		allowMultiLoading?: boolean,
		parse?: Function,
		crossDomain?: boolean,
		withCredentials?: boolean,
		ajax?: Function
	}

		declare export default class Backend  {
		type: "backend";
		services: Services;
		options: BackendOptions;
		constructor(services?: Services, options?: BackendOptions): this;
		init(services?: Services, options?: BackendOptions): void;
		readMulti(languages: any[], namespaces: any[], callback: Function): void;
		read(language: {
		
	}, namespace: {
		
	}, callback: Function): void;
		loadUrl(url: string, callback: Function): void;
		create(languages: any[], namespace: string, key: string, fallbackValue: string): void
	}

	
}