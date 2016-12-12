

declare module 'auth0.lock' {
	declare type Auth0LockAdditionalSignUpFieldOptionsCallback = (error: Auth0Error, options: Auth0LockAdditionalSignUpFieldOption[]) => void;

	declare type Auth0LockAdditionalSignUpFieldOptionsFunction = (callback: Auth0LockAdditionalSignUpFieldOptionsCallback) => void;

	declare type Auth0LockAdditionalSignUpFieldPrefillCallback = (error: Auth0Error, prefill: string) => void;

	declare type Auth0LockAdditionalSignUpFieldPrefillFunction = (callback: Auth0LockAdditionalSignUpFieldPrefillCallback) => void;

	declare type Auth0LockAvatarUrlCallback = (error: Auth0Error, url: string) => void;

	declare type Auth0LockAvatarDisplayNameCallback = (error: Auth0Error, displayName: string) => void;

	declare interface Auth0LockAdditionalSignUpFieldOption {
		value: string,
		label: string
	}

	declare interface Auth0LockAdditionalSignUpField {
		icon?: string,
		name: string,
		options?: Auth0LockAdditionalSignUpFieldOption[] | Auth0LockAdditionalSignUpFieldOptionsFunction,
		placeholder: string,
		prefill?: string | Auth0LockAdditionalSignUpFieldPrefillFunction,
		type?: "select" | "text",
		validator?: (input: string) => {
		valid: boolean,
		hint?: string
	}
	}

	declare interface Auth0LockAvatarOptions {
		url: (email: string, callback: Auth0LockAvatarUrlCallback) => void,
		displayName: (email: string, callback: Auth0LockAvatarDisplayNameCallback) => void
	}

	declare interface Auth0LockThemeOptions {
		logo?: string,
		primaryColor?: string
	}

	declare interface Auth0LockAuthParamsOptions {
		access_token?: any,
		connection_scopes?: any,
		device?: any,
		nonce?: any,
		protocol?: any,
		request_id?: any,
		scope?: string,
		state?: string
	}

	declare interface Auth0LockAuthOptions {
		params?: Auth0LockAuthParamsOptions,
		redirect?: boolean,
		redirectUrl?: string,
		responseType?: string,
		sso?: boolean
	}

	declare interface Auth0LockPopupOptions {
		width: number,
		height: number,
		left: number,
		top: number
	}

	declare interface Auth0LockConstructorOptions {
		additionalSignUpFields?: Auth0LockAdditionalSignUpField[],
		allowedConnections?: string[],
		allowForgotPassword?: boolean,
		allowLogin?: boolean,
		allowSignUp?: boolean,
		assetsUrl?: string,
		auth?: Auth0LockAuthOptions,
		autoclose?: boolean,
		autofocus?: boolean,
		avatar?: Auth0LockAvatarOptions,
		closable?: boolean,
		container?: string,
		defaultADUsernameFromEmailPrefix?: string,
		defaultDatabaseConnection?: string,
		defaultEnterpriseConnection?: string,
		forgotPasswordLink?: string,
		initialScreen?: "login" | "signUp" | "forgotPassword",
		language?: string,
		languageDictionary?: any,
		loginAfterSignUp?: boolean,
		mustAcceptTerms?: boolean,
		popupOptions?: Auth0LockPopupOptions,
		prefill?: {
		email?: string,
		username?: string
	},
		rememberLastLogin?: boolean,
		signupLink?: string,
		socialButtonStyle?: "big" | "small",
		theme?: Auth0LockThemeOptions,
		usernameStyle?: string
	}

	declare interface Auth0LockStatic {
		new (
		clientId: string, domain: string, options?: Auth0LockConstructorOptions
	): Auth0LockStatic,
		getProfile(
		token: string, callback: (error: Auth0Error, profile: Auth0UserProfile) => void
	): void,
		show(): void,
		hide(): void,
		logout(query: any): void,
		on(event: "show", callback: () => void): void,
		on(event: "hide", callback: () => void): void,
		on(event: "unrecoverable_error", callback: (error: Auth0Error) => void): void,
		on(event: "authorization_error", callback: (error: Auth0Error) => void): void,
		on(event: "authenticated", callback: (authResult: any) => void): void,
		on(event: string, callback: (...args: any[]) => void): void
	}

			
}

declare module 'auth0-lock' {
					declare module.exports: undefined


}