

declare module 'mustache' {
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
		parentContext: MustacheContext,
		push(view: any): MustacheContext,
		lookup(name: string): any
	}

	declare interface MustacheWriter {
		(view: any): string,
		clearCache(): void,
		parse(template: string, tags?: any): any,
		render(template: string, view: any, partials: any): string,
		renderTokens(
		tokens: string[], context: MustacheContext, partials: any, originalTemplate: any
	): string
	}

	declare interface MustacheStatic {
		name: string,
		version: string,
		tags: string,
		Scanner: MustacheScanner,
		Context: MustacheContext,
		Writer: MustacheWriter,
		escape: any,
		clearCache(): MustacheWriter,
		parse(template: string, tags?: any): any,
		render(template: string, view: any, partials?: any): string,
		to_html(template: string, view: any, partials?: any, send?: any): any
	}

			declare module.exports: MustacheStatic


}