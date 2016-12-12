

declare module 'stripe' {
		declare interface StripeStatic {
		setPublishableKey(key: string): void,
		validateCardNumber(cardNumber: string): boolean,
		validateExpiry(month: string, year: string): boolean,
		validateCVC(cardCVC: string): boolean,
		cardType(cardNumber: string): string,
		getToken(
		token: string, responseHandler: (status: number, response: StripeTokenResponse) => void
	): void,
		card: StripeCardData,
		createToken(
		data: StripeTokenData, responseHandler: (status: number, response: StripeTokenResponse) => void
	): void,
		bankAccount: StripeBankAccount
	}

	declare interface StripeTokenData {
		number: string,
		exp_month?: number,
		exp_year?: number,
		exp?: string,
		cvc?: string,
		name?: string,
		address_line1?: string,
		address_line2?: string,
		address_city?: string,
		address_state?: string,
		address_zip?: string,
		address_country?: string
	}

	declare interface StripeTokenResponse {
		id: string,
		card: StripeCardData,
		created: number,
		currency: string,
		livemode: boolean,
		object: string,
		used: boolean,
		error: StripeError
	}

	declare interface StripeError {
		type: string,
		code: string,
		message: string,
		param?: string
	}

	declare interface StripeCardData {
		object: string,
		last4: string,
		type: string,
		exp_month: number,
		exp_year: number,
		fingerprint: string,
		country?: string,
		name?: string,
		address_line1?: string,
		address_line2?: string,
		address_city?: string,
		address_state?: string,
		address_zip?: string,
		address_country?: string,
		createToken(
		data: StripeTokenData, responseHandler: (status: number, response: StripeTokenResponse) => void
	): void
	}

	declare interface StripeBankAccount {
		createToken(
		params: StripeBankTokenParams, stripeResponseHandler: (status: number, response: StripeBankTokenResponse) => void
	): void,
		validateRoutingNumber(routingNumber: number | string, countryCode: string): boolean,
		validateAccountNumber(accountNumber: number | string, countryCode: string): boolean
	}

	declare interface StripeBankTokenParams {
		country: string,
		currency: string,
		account_number: number | string,
		routing_number?: number | string,
		account_holder_name: string,
		account_holder_type: string
	}

	declare interface StripeBankTokenResponse {
		id: string,
		bank_account: {
		id: string,
		country: string,
		bank_name: string,
		last4: number,
		validated: boolean,
		object: string
	},
		created: number,
		livemode: boolean,
		type: string,
		object: string,
		used: boolean,
		error: StripeError
	}

			
}

declare module 'Stripe' {
					declare module.exports: undefined


}