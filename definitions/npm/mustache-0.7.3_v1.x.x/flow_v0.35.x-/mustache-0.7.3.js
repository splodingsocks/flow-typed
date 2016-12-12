

declare module 'mustache-0.7.3' {
		declare interface MustacheScanner {
		string: string,
		tail: string,
		pos: number,
		eos(): boolean,
		scan(re: RegExp): string,
		scanUntil(re: RegExp): string
	}

	declare interface MustacheContext {
		view: any,
		parent: MustacheContext,
		clearCache(): void,
		push(view: any): MustacheContext,
		lookup(name: string): any
	}

	declare interface MustacheWriter {
		(view: any): string,
		clearCache(): void,
		compile(template: string, tags: any): any,
		compilePartial(name: string, template: string, tags: any): any,
		compileTokens(tokens: string[], template: string): any,
		render(template: string, view: any, partials: any): any
	}

	declare interface MustacheStatic {
		name: string,
		version: string,
		tags: string,
		Scanner: MustacheScanner,
		Context: MustacheContext,
		Writer: MustacheWriter,
		escape: any,
		parse(template: string, tags: any): any,
		clearCache(): MustacheWriter,
		compile(template: string): MustacheWriter,
		compile(template: string, tags: any): MustacheWriter,
		compilePartial(name: string, template: string, tags: any): MustacheWriter,
		compileTokens(tokens: string[], template: string): MustacheWriter,
		render(template: string, view: any, partials?: any): string,
		to_html(template: string, view: any, partials?: any, send?: any): string
	}

			
}