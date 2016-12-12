

declare module 'angular-notifications' {
					
}

declare module 'notifications' {
		declare interface IAnimation {
		duration: number,
		enabled: boolean
	}

	declare interface ISettings {
		info: IAnimation,
		warning: IAnimation,
		error: IAnimation,
		success: IAnimation,
		progress: IAnimation,
		custom: IAnimation,
		details: boolean,
		localStorage: boolean,
		html5Mode: boolean,
		html5DefaultIcon: string
	}

	declare interface INotification {
		type: string,
		image: string,
		icon: string,
		title: string,
		content: string,
		timestamp: string,
		userData: string
	}

	declare interface INotificationFactory {
		disableHtml5Mode(): void,
		disableType(notificationType: string): void,
		enableHtml5Mode(): void,
		enableType(notificationType: string): void,
		getSettings(): ISettings,
		toggleType(notificationType: string): void,
		toggleHtml5Mode(): void,
		requestHtml5ModePermissions(): boolean,
		getAll(): Array<INotification>,
		getQueue(): Array<INotification>,
		info(title: string): INotification,
		info(title: string, content: string): INotification,
		info(title: string, content: string, userData: any): INotification,
		error(title: string): INotification,
		error(title: string, content: string): INotification,
		error(title: string, content: string, userData: any): INotification,
		success(title: string): INotification,
		success(title: string, content: string): INotification,
		success(title: string, content: string, userData: any): INotification,
		warning(title: string): INotification,
		warning(title: string, content: string): INotification,
		warning(title: string, content: string, userData: any): INotification,
		awesomeNotify(
		type: string, icon: string, title: string, content: string, userData: any
	): INotification,
		notify(image: string, title: string, content: string, userData: any): INotification,
		makeNotification(
		type: string, image: string, icon: string, title: string, content: string, userData: any
	): INotification,
		save(): void,
		restore(): void,
		clear(): void
	}

			
}