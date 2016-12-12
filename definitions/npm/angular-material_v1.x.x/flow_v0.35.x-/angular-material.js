

declare module 'angular-material' {
					declare module.exports: undefined


}

declare module 'material' {
		declare interface IBottomSheetOptions {
		templateUrl?: string,
		template?: string,
		scope?: angular.IScope,
		preserveScope?: boolean,
		controller?: string | Function,
		locals?: {
		[index: string]: any
	},
		clickOutsideToClose?: boolean,
		disableBackdrop?: boolean,
		escapeToClose?: boolean,
		resolve?: {
		[index: string]: () => angular.IPromise<any>
	},
		controllerAs?: string,
		parent?: Function | string | Object,
		disableParentScroll?: boolean
	}

	declare interface IBottomSheetService {
		show(options: IBottomSheetOptions): angular.IPromise<any>,
		hide(response?: any): void,
		cancel(response?: any): void
	}

	declare interface IPresetDialog<T> {
		title(title: string): T,
		textContent(textContent: string): T,
		htmlContent(htmlContent: string): T,
		ok(ok: string): T,
		theme(theme: string): T,
		templateUrl(templateUrl?: string): T,
		template(template?: string): T,
		targetEvent(targetEvent?: MouseEvent): T,
		scope(scope?: angular.IScope): T,
		preserveScope(preserveScope?: boolean): T,
		disableParentScroll(disableParentScroll?: boolean): T,
		hasBackdrop(hasBackdrop?: boolean): T,
		clickOutsideToClose(clickOutsideToClose?: boolean): T,
		escapeToClose(escapeToClose?: boolean): T,
		focusOnOpen(focusOnOpen?: boolean): T,
		controller(controller?: string | Function): T,
		locals(locals?: {
		[index: string]: any
	}): T,
		bindToController(bindToController?: boolean): T,
		resolve(resolve?: {
		[index: string]: () => angular.IPromise<any>
	}): T,
		controllerAs(controllerAs?: string): T,
		parent(parent?: string | Element | JQuery): T,
		onComplete(onComplete?: Function): T,
		ariaLabel(ariaLabel: string): T
	}

	declare interface IAlertDialog {
		
	}

	declare interface IConfirmDialog {
		cancel(cancel: string): IConfirmDialog
	}

	declare interface IPromptDialog {
		cancel(cancel: string): IPromptDialog,
		placeholder(placeholder: string): IPromptDialog,
		initialValue(initialValue: string): IPromptDialog
	}

	declare interface IColorExpression {
		[cssPropertyName: string]: string
	}

	declare interface IColorService {
		applyThemeColors(element: Element | JQuery, colorExpression: IColorExpression): void,
		getThemeColor(expression: string): string,
		hasTheme(): boolean
	}

	declare interface IDialogOptions {
		templateUrl?: string,
		template?: string,
		contentElement?: string | Element,
		autoWrap?: boolean,
		targetEvent?: MouseEvent,
		openFrom?: any,
		closeTo?: any,
		scope?: angular.IScope,
		preserveScope?: boolean,
		disableParentScroll?: boolean,
		hasBackdrop?: boolean,
		clickOutsideToClose?: boolean,
		escapeToClose?: boolean,
		focusOnOpen?: boolean,
		controller?: string | Function,
		locals?: {
		[index: string]: any
	},
		bindToController?: boolean,
		resolve?: {
		[index: string]: () => angular.IPromise<any>
	},
		controllerAs?: string,
		parent?: string | Element | JQuery,
		onShowing?: Function,
		onComplete?: Function,
		onRemoving?: Function,
		skipHide?: boolean,
		fullscreen?: boolean
	}

	declare interface IDialogService {
		show(
		dialog: IDialogOptions | IAlertDialog | IConfirmDialog | IPromptDialog
	): angular.IPromise<any>,
		confirm(): IConfirmDialog,
		alert(): IAlertDialog,
		prompt(): IPromptDialog,
		hide(response?: any): angular.IPromise<any>,
		cancel(response?: any): void
	}

	declare interface IIcon {
		(id: string): angular.IPromise<Element>
	}

	declare interface IIconProvider {
		icon(id: string, url: string, viewBoxSize?: number): IIconProvider,
		iconSet(id: string, url: string, viewBoxSize?: number): IIconProvider,
		defaultIconSet(url: string, viewBoxSize?: number): IIconProvider,
		defaultViewBoxSize(viewBoxSize: number): IIconProvider,
		defaultFontSet(name: string): IIconProvider
	}

	declare interface IMedia {
		(media: string): boolean
	}

	declare interface ISidenavObject {
		toggle(): angular.IPromise<void>,
		open(): angular.IPromise<void>,
		close(): angular.IPromise<void>,
		isOpen(): boolean,
		isLockedOpen(): boolean,
		onClose(onClose: Function): void
	}

	declare interface ISidenavService {
		(component: string, enableWait: boolean): angular.IPromise<ISidenavObject>,
		(component: string): ISidenavObject
	}

	declare interface IToastPreset<T> {
		textContent(content: string): T,
		action(action: string): T,
		highlightAction(highlightAction: boolean): T,
		highlightClass(highlightClass: string): T,
		capsule(capsule: boolean): T,
		theme(theme: string): T,
		hideDelay(delay: number): T,
		position(position: string): T,
		parent(parent?: string | Element | JQuery): T,
		toastClass(toastClass: string): T
	}

	declare interface ISimpleToastPreset {
		
	}

	declare interface IToastOptions {
		templateUrl?: string,
		template?: string,
		autoWrap?: boolean,
		scope?: angular.IScope,
		preserveScope?: boolean,
		hideDelay?: number,
		position?: string,
		toastClass?: string,
		controller?: string | Function,
		locals?: {
		[index: string]: any
	},
		bindToController?: boolean,
		resolve?: {
		[index: string]: () => angular.IPromise<any>
	},
		controllerAs?: string,
		parent?: string | Element | JQuery
	}

	declare interface IToastService {
		show(optionsOrPreset: IToastOptions | IToastPreset<any>): angular.IPromise<any>,
		showSimple(content: string): angular.IPromise<any>,
		simple(): ISimpleToastPreset,
		build(): IToastPreset<any>,
		updateContent(newContent: string): void,
		updateTextContent(newContent: string): void,
		hide(response?: any): void,
		cancel(response?: any): void
	}

	declare interface IPalette {
		0?: string,
		50?: string,
		100?: string,
		200?: string,
		300?: string,
		400?: string,
		500?: string,
		600?: string,
		700?: string,
		800?: string,
		900?: string,
		A100?: string,
		A200?: string,
		A400?: string,
		A700?: string,
		contrastDefaultColor?: string,
		contrastDarkColors?: string | string[],
		contrastLightColors?: string | string[]
	}

	declare interface IThemeHues {
		default?: string,
		hue-1?: string,
		hue-2?: string,
		hue-3?: string
	}

	declare interface IThemePalette {
		name: string,
		hues: IThemeHues
	}

	declare interface IBrowserColors {
		theme: string,
		palette: string,
		hue: string
	}

	declare interface IThemeColors {
		accent: IThemePalette,
		background: IThemePalette,
		primary: IThemePalette,
		warn: IThemePalette
	}

	declare interface IThemeGrayScalePalette {
		1: string,
		2: string,
		3: string,
		4: string,
		name: string
	}

	declare interface ITheme {
		name: string,
		isDark: boolean,
		colors: IThemeColors,
		foregroundPalette: IThemeGrayScalePalette,
		foregroundShadow: string,
		accentPalette(name: string, hues?: IThemeHues): ITheme,
		primaryPalette(name: string, hues?: IThemeHues): ITheme,
		warnPalette(name: string, hues?: IThemeHues): ITheme,
		backgroundPalette(name: string, hues?: IThemeHues): ITheme,
		dark(isDark?: boolean): ITheme
	}

	declare interface IThemingProvider {
		alwaysWatchTheme(alwaysWatch: boolean): void,
		definePalette(name: string, palette: IPalette): IThemingProvider,
		enableBrowserColor(browserColors: IBrowserColors): Function,
		extendPalette(name: string, palette: IPalette): IPalette,
		registerStyles(styles: String): void,
		setDefaultTheme(theme: string): void,
		setNonce(nonce: string): void,
		theme(name: string, inheritFrom?: string): ITheme
	}

	declare interface IDateLocaleProvider {
		months: string[],
		shortMonths: string[],
		days: string[],
		shortDays: string[],
		dates: string[],
		firstDayOfWeek: number,
		parseDate(dateString: string): Date,
		formatDate(date: Date): string,
		monthHeaderFormatter(date: Date): string,
		weekNumberFormatter(weekNumber: number): string,
		msgCalendar: string,
		msgOpenCalendar: string
	}

	declare interface IMenuService {
		hide(response?: any, options?: any): angular.IPromise<any>
	}

	declare interface IColorPalette {
		red: IPalette,
		pink: IPalette,
		deep-purple: IPalette,
		indigo: IPalette,
		blue: IPalette,
		light-blue: IPalette,
		cyan: IPalette,
		teal: IPalette,
		green: IPalette,
		light-green: IPalette,
		lime: IPalette,
		yellow: IPalette,
		amber: IPalette,
		orange: IPalette,
		deep-orange: IPalette,
		brown: IPalette,
		grey: IPalette,
		blue-grey: IPalette
	}

	declare interface IPanelConfig {
		id?: string,
		template?: string,
		templateUrl?: string,
		controller?: string | Function,
		controllerAs?: string,
		bindToController?: boolean,
		locals?: {
		[index: string]: any
	},
		resolve?: {
		[index: string]: () => angular.IPromise<any>
	},
		attachTo?: string | JQuery | Element,
		propagateContainerEvents?: boolean,
		panelClass?: string,
		zIndex?: number,
		position?: IPanelPosition,
		clickOutsideToClose?: boolean,
		escapeToClose?: boolean,
		trapFocus?: boolean,
		focusOnOpen?: boolean,
		fullscreen?: boolean,
		animation?: IPanelAnimation,
		hasBackdrop?: boolean,
		disableParentScroll?: boolean,
		onDomAdded?: Function,
		onOpenComplete?: Function,
		onRemoving?: Function,
		onDomRemoved?: Function,
		origin?: string | JQuery | Element,
		onCloseSuccess?: ((panel: IPanelRef, closeReason: string) => any)
	}

	declare interface IPanelRef {
		id: string,
		config: IPanelConfig,
		isAttached: boolean,
		open(): angular.IPromise<any>,
		close(): angular.IPromise<any>,
		attach(): angular.IPromise<any>,
		detach(): angular.IPromise<any>,
		show(): angular.IPromise<any>,
		hide(): angular.IPromise<any>,
		destroy(): void,
		addClass(newClass: string): void,
		removeClass(oldClass: string): void,
		toggleClass(toggleClass: string): void,
		updatePosition(position: IPanelPosition): void,
		registerInterceptor(type: string, callback: () => angular.IPromise<any>): IPanelRef,
		removeInterceptor(type: string, callback: () => angular.IPromise<any>): IPanelRef,
		removeAllInterceptors(type?: string): IPanelRef
	}

	declare interface IPanelPosition {
		absolute(): IPanelPosition,
		relativeTo(someElement: string | JQuery | Element): IPanelPosition,
		top(top?: string): IPanelPosition,
		bottom(bottom?: string): IPanelPosition,
		start(start?: string): IPanelPosition,
		end(end?: string): IPanelPosition,
		left(left?: string): IPanelPosition,
		right(right?: string): IPanelPosition,
		centerHorizontally(): IPanelPosition,
		centerVertically(): IPanelPosition,
		center(): IPanelPosition,
		addPanelPosition(xPosition: string, yPosition: string): IPanelPosition,
		withOffsetX(offsetX: string | ((panel: IPanelPosition) => string)): IPanelPosition,
		withOffsetY(offsetY: string | ((panel: IPanelPosition) => string)): IPanelPosition
	}

	declare interface IPanelAnimation {
		openFrom(
		from: string | Element | Event | {
		top: number,
		left: number
	}
	): IPanelAnimation,
		closeTo(to: string | Element | {
		top: number,
		left: number
	}): IPanelAnimation,
		withAnimation(cssClass: string | {
		open: string,
		close: string
	}): IPanelAnimation
	}

	declare interface IPanelService {
		create(opt_config: IPanelConfig): IPanelRef,
		open(opt_config: IPanelConfig): angular.IPromise<IPanelRef>,
		newPanelPosition(): IPanelPosition,
		newPanelAnimation(): IPanelAnimation,
		xPosition: {
		CENTER: string,
		ALIGN_START: string,
		ALIGN_END: string,
		OFFSET_START: string,
		OFFSET_END: string
	},
		yPosition: {
		CENTER: string,
		ALIGN_TOPS: string,
		ALIGN_BOTTOMS: string,
		ABOVE: string,
		BELOW: string
	},
		animation: {
		SLIDE: string,
		SCALE: string,
		FADE: string
	},
		interceptorTypes: {
		CLOSE: string
	},
		closeReasons: {
		CLICK_OUTSIDE: string,
		ESCAPE: string
	},
		absPosition: {
		TOP: string,
		RIGHT: string,
		BOTTOM: string,
		LEFT: string
	}
	}

			
}