

declare module 'numeraljs' {
		declare interface NumeralJSLanguage {
		delimiters: {
		thousands: string,
		decimal: string
	},
		abbreviations: {
		thousand: string,
		million: string,
		billion: string,
		trillion: string
	},
		ordinal(num: number): string,
		currency: {
		symbol: string
	}
	}

	declare interface Numeral {
		(value?: any): Numeral,
		version: string,
		isNumeral: boolean,
		language(key?: string, values?: NumeralJSLanguage): Numeral | string,
		zeroFormat(format: string): string,
		clone(): Numeral,
		format(inputString?: string): string,
		formatCurrency(inputString?: string): string,
		unformat(inputString: string): number,
		value(): number,
		valueOf(): number,
		set(value: any): Numeral,
		add(value: any): Numeral,
		subtract(value: any): Numeral,
		multiply(value: any): Numeral,
		divide(value: any): Numeral,
		difference(value: any): number
	}

			
}

declare module 'numeral' {
					declare module.exports: undefined


}