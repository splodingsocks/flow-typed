

declare module 'js-beautify' {
		declare interface JsBeautifyOptions {
		indent_size?: number,
		indent_char?: string,
		eol?: string,
		indent_level?: number,
		indent_with_tabs?: boolean,
		preserve_newlines?: boolean,
		max_preserve_newlines?: number,
		jslint_happy?: boolean,
		space_after_anon_function?: boolean,
		brace_style?: "collapse-preserve-inline" | "collapse" | "expand" | "end-expand" | "none",
		keep_array_indentation?: boolean,
		keep_function_indentation?: boolean,
		space_before_conditional?: boolean,
		break_chained_methods?: boolean,
		eval_code?: boolean,
		unescape_strings?: boolean,
		wrap_line_length?: number,
		wrap_attributes?: "auto" | "force",
		wrap_attributes_indent_size?: number,
		end_with_newline?: boolean
	}

	declare interface HTMLBeautifyOptions {
		indent_size?: number,
		indent_char?: string,
		indent_with_tabs?: boolean,
		eol?: string,
		end_with_newline?: boolean,
		preserve_newlines?: boolean,
		max_preserve_newlines?: number,
		indent_inner_html?: boolean,
		brace_style?: "collapse-preserve-inline" | "collapse" | "expand" | "end-expand" | "none",
		indent_scripts?: boolean,
		wrap_line_length?: number,
		wrap_attributes?: "auto" | "force",
		wrap_attributes_indent_size?: number,
		unformatted?: string,
		extra_liners?: string
	}

	declare interface CSSBeautifyOptions {
		indent_size?: number,
		indent_char?: string,
		indent_with_tabs?: boolean,
		eol?: string,
		end_with_newline?: boolean,
		selector_separator_newline?: boolean,
		newline_between_rules?: boolean
	}

	declare interface jsb {
		(js_source_text: string, options?: JsBeautifyOptions): string,
		js: (js_source_text: string, options?: JsBeautifyOptions) => string,
		beautify_js: (js_source_text: string, options?: JsBeautifyOptions) => string,
		css: (js_source_text: string, options?: CSSBeautifyOptions) => string,
		css_beautify: (js_source_text: string, options?: CSSBeautifyOptions) => string,
		html: (js_source_text: string, options?: HTMLBeautifyOptions) => string,
		html_beautify: (js_source_text: string, options?: HTMLBeautifyOptions) => string
	}

			declare module.exports: jsb


}