

declare module 'firebase-simplelogin' {
		declare interface IFirebaseSimpleLoginError {
		code: string,
		message: string
	}

	declare interface IFirebaseSimpleLoginOptions {
		debug?: boolean,
		rememberMe?: boolean,
		email?: string,
		password?: string,
		preferRedirect?: boolean,
		scope?: string,
		access_token?: string,
		oauth_token?: string,
		backgroundColor?: string,
		privacyPolicy?: string,
		siteLogo?: string,
		siteName?: string,
		termsOfService?: string
	}

	declare interface IFirebaseSimpleLoginUser {
		firebaseAuthToken: string,
		id: string,
		provider: string,
		uid: string,
		md5_hash?: string,
		email?: string,
		accessToken?: string,
		displayName?: string,
		thirdPartyUserData?: Object,
		username?: string,
		accessTokenSecret?: string
	}

		declare class FirebaseSimpleLogin  {
		email: string;
		id: string;
		provider: string;
		uid: string;
		username: string;
		constructor(firebase: Firebase, callback: (err: IFirebaseSimpleLoginError, user: IFirebaseSimpleLoginUser) => any): this;
		login(loginType: string, options?: IFirebaseSimpleLoginOptions): void;
		logout(): void;
		createUser(
		email: string, password: string, callback?: (err: IFirebaseSimpleLoginError, user: IFirebaseSimpleLoginUser) => any
	): void;
		changePassword(
		email: string, oldPassword: string, newPassword: string, callback?: (err: IFirebaseSimpleLoginError, success: boolean) => any
	): void;
		sendPasswordResetEmail(
		email: string, callback?: (err: IFirebaseSimpleLoginError, success: boolean) => any
	): void;
		removeUser(
		email: string, password: string, callback?: (err: IFirebaseSimpleLoginError, success: boolean) => any
	): void
	}

	
}