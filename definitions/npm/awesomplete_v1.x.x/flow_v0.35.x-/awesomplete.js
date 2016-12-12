

declare module 'awesomplete' {
		declare interface AwesompleteOptions {
		list?: string | string[] | Element | {
		label: string,
		value: any
	}[] | [string, string][],
		minChars?: Number,
		maxItems?: Number,
		autoFirst?: boolean,
		data?: Function,
		filter?: Function,
		sort?: Function,
		item?: Function,
		replace?: Function
	}

		declare class Awesomplete  {
		constructor(input: Element | HTMLElement | string, o?: AwesompleteOptions): this;
		all: Array<any>;
		$$: (expr: string | NodeSelector, con?: any) => NodeList;
		ITEM: (text: string, input: string) => HTMLElement;
		$: {
		(expr: string | Element, con?: NodeSelector): string | Element,
		regExpEscape: (s: {
		replace: (arg0: RegExp, arg1: string) => void
	}) => any,
		create: (tag: string, o: any) => HTMLElement,
		fire: (target: EventTarget, type: string, properties: any) => any,
		siblingIndex: (el: Element) => number
	};
		FILTER_STARTSWITH: (text: string, input: string) => boolean;
		FILTER_CONTAINS: (text: string, input: string) => boolean;
		SORT_BYLENGTH: (a: number | any[], b: number | any[]) => number;
		REPLACE: (text: any) => void;
		next: () => void;
		container: HTMLElement;
		select: (selected?: HTMLElement, originalTarget?: HTMLElement) => void;
		previous: () => void;
		index: number;
		opened: number;
		list: string | string[] | Element | {
		label: string,
		value: any
	}[] | [string, string][];
		input: HTMLElement | string;
		goto: (i: number) => void;
		ul: HTMLElement;
		close: () => void;
		evaluate: () => void;
		selected: boolean;
		open: () => void;
		status: HTMLElement
	}

	
}