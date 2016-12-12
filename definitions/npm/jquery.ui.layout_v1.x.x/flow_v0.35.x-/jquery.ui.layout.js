

declare module 'jquery.ui.layout' {
		declare interface JQuery {
		layout(options?: JQueryUILayout.Options): JQueryUILayout.Layout
	}

			
}

declare module 'npm$namespace$JQueryUILayout' {
		declare interface PaneOptions {
		applyDefaultStyles?: boolean,
		scrollToBookmarkOnLoad?: boolean,
		showOverflowOnHover?: boolean,
		closable?: boolean,
		resizable?: boolean,
		slidable?: boolean,
		paneSelector?: string,
		contentSelector?: string,
		contentIgnoreSelector?: string,
		paneClass?: string,
		resizerClass?: string,
		togglerClass?: string,
		buttonClass?: string,
		size?: string | number,
		minSize?: number,
		maxSize?: number,
		spacing_open?: number,
		spacing_closed?: number,
		resizerTip?: string,
		resizerCursor?: string,
		resizerDragOpacity?: number,
		maskIframesOnResize?: boolean | string,
		sliderTip?: string,
		sliderCursor?: string,
		slideTrigger_open?: string,
		slideTrigger_close?: string,
		togglerTip_open?: string,
		togglerTip_closed?: string,
		togglerLength_open?: number | string,
		togglerLength_closed?: number | string,
		hideTogglerOnSlide?: boolean,
		togglerAlign_open?: string | number,
		togglerAlign_closed?: string | number,
		togglerContent_open?: string,
		togglerContent_closed?: string,
		enableCursorHotkey?: boolean,
		customHotkeyModifier?: string,
		customHotkey?: string | number,
		fxName?: string,
		fxSpeed?: string | number,
		fxSettings?: JQueryAnimationOptions,
		initClosed?: boolean,
		initHidden?: boolean,
		onshow_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		onshow_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		onshow?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		onhide_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		onhide_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		onhide?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		onopen_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		onopen_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		onopen?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		onclose_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		onclose_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		onclose?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		onresize_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		onresize_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		onresize?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	}
	}

	declare interface Options {
		defaults?: PaneOptions,
		north?: PaneOptions,
		east?: PaneOptions,
		south?: PaneOptions,
		west?: PaneOptions,
		center?: PaneOptions,
		defaults__applyDefaultStyles?: boolean,
		defaults__scrollToBookmarkOnLoad?: boolean,
		defaults__showOverflowOnHover?: boolean,
		defaults__closable?: boolean,
		defaults__resizable?: boolean,
		defaults__slidable?: boolean,
		defaults__paneSelector?: string,
		defaults__contentSelector?: string,
		defaults__contentIgnoreSelector?: string,
		defaults__paneClass?: string,
		defaults__resizerClass?: string,
		defaults__togglerClass?: string,
		defaults__buttonClass?: string,
		defaults__size?: string | number,
		defaults__minSize?: number,
		defaults__maxSize?: number,
		defaults__spacing_open?: number,
		defaults__spacing_closed?: number,
		defaults__resizerTip?: string,
		defaults__resizerCursor?: string,
		defaults__resizerDragOpacity?: number,
		defaults__maskIframesOnResize?: boolean | string,
		defaults__sliderTip?: string,
		defaults__sliderCursor?: string,
		defaults__slideTrigger_open?: string,
		defaults__slideTrigger_close?: string,
		defaults__togglerTip_open?: string,
		defaults__togglerTip_closed?: string,
		defaults__togglerLength_open?: number | string,
		defaults__togglerLength_closed?: number | string,
		defaults__hideTogglerOnSlide?: boolean,
		defaults__togglerAlign_open?: string | number,
		defaults__togglerAlign_closed?: string | number,
		defaults__togglerContent_open?: string,
		defaults__togglerContent_closed?: string,
		defaults__enableCursorHotkey?: boolean,
		defaults__customHotkeyModifier?: string,
		defaults__customHotkey?: string | number,
		defaults__fxName?: string,
		defaults__fxSpeed?: string | number,
		defaults__fxSettings?: JQueryAnimationOptions,
		defaults__initClosed?: boolean,
		defaults__initHidden?: boolean,
		defaults__onshow_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		defaults__onshow_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		defaults__onshow?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		defaults__onhide_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		defaults__onhide_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		defaults__onhide?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		defaults__onopen_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		defaults__onopen_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		defaults__onopen?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		defaults__onclose_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		defaults__onclose_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		defaults__onclose?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		defaults__onresize_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		defaults__onresize_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		defaults__onresize?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		north__applyDefaultStyles?: boolean,
		north__scrollToBookmarkOnLoad?: boolean,
		north__showOverflowOnHover?: boolean,
		north__closable?: boolean,
		north__resizable?: boolean,
		north__slidable?: boolean,
		north__paneSelector?: string,
		north__contentSelector?: string,
		north__contentIgnoreSelector?: string,
		north__paneClass?: string,
		north__resizerClass?: string,
		north__togglerClass?: string,
		north__buttonClass?: string,
		north__size?: string | number,
		north__minSize?: number,
		north__maxSize?: number,
		north__spacing_open?: number,
		north__spacing_closed?: number,
		north__resizerTip?: string,
		north__resizerCursor?: string,
		north__resizerDragOpacity?: number,
		north__maskIframesOnResize?: boolean | string,
		north__sliderTip?: string,
		north__sliderCursor?: string,
		north__slideTrigger_open?: string,
		north__slideTrigger_close?: string,
		north__togglerTip_open?: string,
		north__togglerTip_closed?: string,
		north__togglerLength_open?: number | string,
		north__togglerLength_closed?: number | string,
		north__hideTogglerOnSlide?: boolean,
		north__togglerAlign_open?: string | number,
		north__togglerAlign_closed?: string | number,
		north__togglerContent_open?: string,
		north__togglerContent_closed?: string,
		north__enableCursorHotkey?: boolean,
		north__customHotkeyModifier?: string,
		north__customHotkey?: string | number,
		north__fxName?: string,
		north__fxSpeed?: string | number,
		north__fxSettings?: JQueryAnimationOptions,
		north__initClosed?: boolean,
		north__initHidden?: boolean,
		north__onshow_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		north__onshow_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		north__onshow?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		north__onhide_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		north__onhide_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		north__onhide?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		north__onopen_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		north__onopen_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		north__onopen?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		north__onclose_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		north__onclose_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		north__onclose?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		north__onresize_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		north__onresize_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		north__onresize?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		east__applyDefaultStyles?: boolean,
		east__scrollToBookmarkOnLoad?: boolean,
		east__showOverflowOnHover?: boolean,
		east__closable?: boolean,
		east__resizable?: boolean,
		east__slidable?: boolean,
		east__paneSelector?: string,
		east__contentSelector?: string,
		east__contentIgnoreSelector?: string,
		east__paneClass?: string,
		east__resizerClass?: string,
		east__togglerClass?: string,
		east__buttonClass?: string,
		east__size?: string | number,
		east__minSize?: number,
		east__maxSize?: number,
		east__spacing_open?: number,
		east__spacing_closed?: number,
		east__resizerTip?: string,
		east__resizerCursor?: string,
		east__resizerDragOpacity?: number,
		east__maskIframesOnResize?: boolean | string,
		east__sliderTip?: string,
		east__sliderCursor?: string,
		east__slideTrigger_open?: string,
		east__slideTrigger_close?: string,
		east__togglerTip_open?: string,
		east__togglerTip_closed?: string,
		east__togglerLength_open?: number | string,
		east__togglerLength_closed?: number | string,
		east__hideTogglerOnSlide?: boolean,
		east__togglerAlign_open?: string | number,
		east__togglerAlign_closed?: string | number,
		east__togglerContent_open?: string,
		east__togglerContent_closed?: string,
		east__enableCursorHotkey?: boolean,
		east__customHotkeyModifier?: string,
		east__customHotkey?: string | number,
		east__fxName?: string,
		east__fxSpeed?: string | number,
		east__fxSettings?: JQueryAnimationOptions,
		east__initClosed?: boolean,
		east__initHidden?: boolean,
		east__onshow_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		east__onshow_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		east__onshow?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		east__onhide_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		east__onhide_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		east__onhide?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		east__onopen_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		east__onopen_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		east__onopen?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		east__onclose_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		east__onclose_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		east__onclose?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		east__onresize_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		east__onresize_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		east__onresize?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		south__applyDefaultStyles?: boolean,
		south__scrollToBookmarkOnLoad?: boolean,
		south__showOverflowOnHover?: boolean,
		south__closable?: boolean,
		south__resizable?: boolean,
		south__slidable?: boolean,
		south__paneSelector?: string,
		south__contentSelector?: string,
		south__contentIgnoreSelector?: string,
		south__paneClass?: string,
		south__resizerClass?: string,
		south__togglerClass?: string,
		south__buttonClass?: string,
		south__size?: string | number,
		south__minSize?: number,
		south__maxSize?: number,
		south__spacing_open?: number,
		south__spacing_closed?: number,
		south__resizerTip?: string,
		south__resizerCursor?: string,
		south__resizerDragOpacity?: number,
		south__maskIframesOnResize?: boolean | string,
		south__sliderTip?: string,
		south__sliderCursor?: string,
		south__slideTrigger_open?: string,
		south__slideTrigger_close?: string,
		south__togglerTip_open?: string,
		south__togglerTip_closed?: string,
		south__togglerLength_open?: number | string,
		south__togglerLength_closed?: number | string,
		south__hideTogglerOnSlide?: boolean,
		south__togglerAlign_open?: string | number,
		south__togglerAlign_closed?: string | number,
		south__togglerContent_open?: string,
		south__togglerContent_closed?: string,
		south__enableCursorHotkey?: boolean,
		south__customHotkeyModifier?: string,
		south__customHotkey?: string | number,
		south__fxName?: string,
		south__fxSpeed?: string | number,
		south__fxSettings?: JQueryAnimationOptions,
		south__initClosed?: boolean,
		south__initHidden?: boolean,
		south__onshow_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		south__onshow_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		south__onshow?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		south__onhide_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		south__onhide_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		south__onhide?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		south__onopen_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		south__onopen_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		south__onopen?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		south__onclose_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		south__onclose_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		south__onclose?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		south__onresize_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		south__onresize_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		south__onresize?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		west__applyDefaultStyles?: boolean,
		west__scrollToBookmarkOnLoad?: boolean,
		west__showOverflowOnHover?: boolean,
		west__closable?: boolean,
		west__resizable?: boolean,
		west__slidable?: boolean,
		west__paneSelector?: string,
		west__contentSelector?: string,
		west__contentIgnoreSelector?: string,
		west__paneClass?: string,
		west__resizerClass?: string,
		west__togglerClass?: string,
		west__buttonClass?: string,
		west__size?: string | number,
		west__minSize?: number,
		west__maxSize?: number,
		west__spacing_open?: number,
		west__spacing_closed?: number,
		west__resizerTip?: string,
		west__resizerCursor?: string,
		west__resizerDragOpacity?: number,
		west__maskIframesOnResize?: boolean | string,
		west__sliderTip?: string,
		west__sliderCursor?: string,
		west__slideTrigger_open?: string,
		west__slideTrigger_close?: string,
		west__togglerTip_open?: string,
		west__togglerTip_closed?: string,
		west__togglerLength_open?: number | string,
		west__togglerLength_closed?: number | string,
		west__hideTogglerOnSlide?: boolean,
		west__togglerAlign_open?: string | number,
		west__togglerAlign_closed?: string | number,
		west__togglerContent_open?: string,
		west__togglerContent_closed?: string,
		west__enableCursorHotkey?: boolean,
		west__customHotkeyModifier?: string,
		west__customHotkey?: string | number,
		west__fxName?: string,
		west__fxSpeed?: string | number,
		west__fxSettings?: JQueryAnimationOptions,
		west__initClosed?: boolean,
		west__initHidden?: boolean,
		west__onshow_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		west__onshow_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		west__onshow?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		west__onhide_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		west__onhide_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		west__onhide?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		west__onopen_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		west__onopen_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		west__onopen?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		west__onclose_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		west__onclose_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		west__onclose?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		west__onresize_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		west__onresize_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		west__onresize?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		center__applyDefaultStyles?: boolean,
		center__scrollToBookmarkOnLoad?: boolean,
		center__showOverflowOnHover?: boolean,
		center__closable?: boolean,
		center__resizable?: boolean,
		center__slidable?: boolean,
		center__paneSelector?: string,
		center__contentSelector?: string,
		center__contentIgnoreSelector?: string,
		center__paneClass?: string,
		center__resizerClass?: string,
		center__togglerClass?: string,
		center__buttonClass?: string,
		center__size?: string | number,
		center__minSize?: number,
		center__maxSize?: number,
		center__spacing_open?: number,
		center__spacing_closed?: number,
		center__resizerTip?: string,
		center__resizerCursor?: string,
		center__resizerDragOpacity?: number,
		center__maskIframesOnResize?: boolean | string,
		center__sliderTip?: string,
		center__sliderCursor?: string,
		center__slideTrigger_open?: string,
		center__slideTrigger_close?: string,
		center__togglerTip_open?: string,
		center__togglerTip_closed?: string,
		center__togglerLength_open?: number | string,
		center__togglerLength_closed?: number | string,
		center__hideTogglerOnSlide?: boolean,
		center__togglerAlign_open?: string | number,
		center__togglerAlign_closed?: string | number,
		center__togglerContent_open?: string,
		center__togglerContent_closed?: string,
		center__enableCursorHotkey?: boolean,
		center__customHotkeyModifier?: string,
		center__customHotkey?: string | number,
		center__fxName?: string,
		center__fxSpeed?: string | number,
		center__fxSettings?: JQueryAnimationOptions,
		center__initClosed?: boolean,
		center__initHidden?: boolean,
		center__onshow_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		center__onshow_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		center__onshow?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		center__onhide_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		center__onhide_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		center__onhide?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		center__onopen_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		center__onopen_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		center__onopen?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		center__onclose_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		center__onclose_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		center__onclose?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		center__onresize_start?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): (boolean | void)
	},
		center__onresize_end?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	},
		center__onresize?: string | {
		(name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void
	}
	}

	declare interface PaneState {
		isClosed: boolean,
		isSliding: boolean,
		isResizing: boolean,
		isHidden: boolean,
		noRoom: boolean,
		size: number,
		minSize: number,
		maxSize: number
	}

	declare interface Layout {
		panes: {
		north: JQuery | boolean,
		east: JQuery | boolean,
		south: JQuery | boolean,
		west: JQuery | boolean
	},
		options: Options,
		state: {
		north: PaneState,
		east: PaneState,
		south: PaneState,
		west: PaneState
	},
		toggle(pane: string): JQuery,
		open(pane: string): JQuery,
		close(pane: string): JQuery,
		show(pane: string, openPane?: boolean): JQuery,
		hide(pane: string): JQuery,
		sizePane(pane: string, sizeInPixels: number): JQuery,
		resizeContent(pane: string): JQuery,
		resizeAll(): JQuery,
		addToggleBtn(selector: string, pane: string): JQuery,
		addCloseBtn(selector: string, pane: string): JQuery,
		addOpenBtn(selector: string, pane: string): JQuery,
		addPinBtn(selector: string, pane: string): JQuery,
		allowOverflow(elemOrPane: HTMLElement | string): JQuery,
		resetOverflow(elemOrPane: HTMLElement | string): JQuery
	}

			
}