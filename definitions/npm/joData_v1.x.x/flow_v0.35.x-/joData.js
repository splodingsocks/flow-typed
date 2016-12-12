

declare module 'joData' {
				declare class jo  {
		constructor(baseUri: string): this;
		baseUri: string;
		ExpandSettings: jo.ExpandSettings;
		FilterSettings: jo.InlineCountSettings;
		FormatSettings: jo.FormatSettings;
		InlineCountSettings: jo.InlineCountSettings;
		OrderBySettings: jo.OrderBySettings;
		SelectSettings: jo.SelectSettings;
		SkipSettings: jo.SkipSettings;
		TopSettings: jo.TopSettings;
		currentHashRoute: string;
		updateHashRoute: (hashRoute: string) => void;
		setOrderByDefault(property: string, order?: string): jo;
		toggleOrderBy(property: string, callback?: Function): jo;
		orderBy(property: string): jo;
		desc(): jo;
		asc(): jo;
		resetOrderBy(): jo;
		setTopDefault(top: number): jo;
		top(top: number): jo;
		resetTop(): jo;
		setSkipDefault(skip: number): jo;
		skip(skip: number): jo;
		resetSkip(): jo;
		setSelectDefault(select: string[]): jo;
		select(select: string[]): jo;
		resetSelect(): jo;
		setExpandDefault(expand: string): jo;
		expand(expand: string): jo;
		resetExpand(): jo;
		format(): jo.FormatOptions;
		formatDefault(): jo.FormatOptions;
		resetFormat(): void;
		inlineCount(): jo.InlineCountOptions;
		inlineCountDefault(): jo.InlineCountOptions;
		resetInlineCount(): void;
		filter(filterClause: jo.FilterClause | jo.PrecedenceGroup): jo;
		andFilter(filterClause: jo.FilterClause | jo.PrecedenceGroup): jo;
		orFilter(filterClause: jo.FilterClause | jo.PrecedenceGroup): jo;
		removeFilter(property: string): jo;
		captureFilter(): void;
		resetFilter(): jo;
		resetToCapturedFilter(): jo;
		defaultFilter(filterClause: jo.FilterClause): jo;
		defaultAndFilter(filterClause: jo.FilterClause): jo;
		defaultOrFilter(filterClause: jo.FilterClause): jo;
		literal: (stringLiteral: string) => string;
		datetime: (stringLiteral: string) => string;
		guid: (stringLiteral: string) => string;
		decimal: (stringLiteral: number) => string;
		double: (stringLiteral: number) => string;
		single: (stringLiteral: number) => string;
		toString: () => string;
		toJson: () => string;
		saveLocal: (key?: string) => void;
		loadLocal: (key?: string) => jo
	}

	
}

declare module 'npm$namespace$jo' {
		declare interface FormatOptions {
		atom(): jo,
		custom(value: string): jo,
		json(): jo,
		xml(): jo
	}

	declare interface InlineCountOptions {
		allPages(): jo,
		none(): jo
	}

	declare interface ISettings {
		toString: () => string,
		reset: () => void,
		isSet: () => Boolean
	}

	declare interface OrderBySettings {
		Property: string,
		Order: string,
		DefaultProperty: string,
		DefaultOrder: string
	}

	declare interface TopSettings {
		Top: number,
		DefaultTop: number
	}

	declare interface SkipSettings {
		Skip: number,
		DefaultSkip: number
	}

	declare interface SelectSettings {
		Select: string[],
		DefaultSelect: string[]
	}

	declare interface ExpandSettings {
		Expand: string,
		DefaultExpand: string
	}

	declare interface FormatSettings {
		Format: string,
		DefaultFormat: string
	}

	declare interface InlineCountSettings {
		InlineCount: string,
		DefaultInlineCount: string
	}

	declare interface FilterSettings {
		Filters: FilterClause[],
		DefaultFilters: FilterClause[],
		CapturedFilter: FilterClause[],
		fullReset: () => void,
		loadFromJson: (filterSettings: any) => void
	}

		declare export class FilterClause  {
		constructor(): this;
		constructor(property: string): this;
		toString(): string;
		isEmpty(): Boolean;
		Property: string;
		Components: string[];
		IsClauseEmpty: Boolean;
		PropertyIncluded: Boolean;
		UsingNot: Boolean;
		Value: any;
		FuncReturnType: any;
		transformFunc: Function;
		eq(value: string | number | boolean): jo.FilterClause;
		ne(value: string | number | boolean): jo.FilterClause;
		gt(value: string | number | boolean): jo.FilterClause;
		ge(value: string | number | boolean): jo.FilterClause;
		lt(value: string | number | boolean): jo.FilterClause;
		le(value: string | number | boolean): jo.FilterClause;
		not(): jo.FilterClause;
		add(amount: number): jo.FilterClause;
		sub(amount: number): jo.FilterClause;
		mul(amount: number): jo.FilterClause;
		div(amount: number): jo.FilterClause;
		mod(amount: number): jo.FilterClause;
		substringof(value: string): jo.FilterClause;
		substring(position: number, length?: number): jo.FilterClause;
		toLower(): jo.FilterClause;
		toUpper(): jo.FilterClause;
		trim(): jo.FilterClause;
		endswith(value: string): jo.FilterClause;
		startswith(value: string): jo.FilterClause;
		length(): jo.FilterClause;
		indexof(value: string): jo.FilterClause;
		replace(find: string, replace: string): jo.FilterClause;
		Concat(concat: jo.Concat): jo.FilterClause;
		day(): jo.FilterClause;
		hour(): jo.FilterClause;
		minute(): jo.FilterClause;
		month(): jo.FilterClause;
		second(): jo.FilterClause;
		year(): jo.FilterClause;
		round(): jo.FilterClause;
		floor(): jo.FilterClause;
		ceiling(): jo.FilterClause
	}

	declare export class PrecedenceGroup  {
		constructor(filterClause: jo.FilterClause): this;
		andFilter(filterClause: jo.FilterClause): jo.FilterClause;
		orFilter(filterClause: jo.FilterClause): jo.FilterClause
	}

	declare export class Concat  {
		constructor(value1: string | jo.Concat, value2: string | jo.Concat): this;
		LeftSide: string | jo.Concat;
		RightSide: string | jo.Concat;
		toString(): string
	}

	
}