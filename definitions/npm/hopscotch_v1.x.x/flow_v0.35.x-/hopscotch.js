

declare module 'hopscotch' {
	declare type CallbackNameNamesOrDefinition = string | string[] | (() => void);

	declare interface HopscotchConfiguration {
		bubbleWidth?: number,
		buddleHeight?: number,
		smoothScroll?: boolean,
		scrollDuration?: number,
		scrollTopMargin?: number,
		showCloseButton?: boolean,
		showNextButton?: boolean,
		showPrevButton?: boolean,
		arrowWidth?: number,
		skipIfNoElement?: boolean,
		nextOnTargetClick?: boolean,
		onNext?: CallbackNameNamesOrDefinition,
		onPrev?: CallbackNameNamesOrDefinition,
		onStart?: CallbackNameNamesOrDefinition,
		onEnd?: CallbackNameNamesOrDefinition,
		onClose?: CallbackNameNamesOrDefinition,
		onError?: CallbackNameNamesOrDefinition,
		i18n?: {
		nextBtn?: string,
		prevBtn?: string,
		doneBtn?: string,
		skipBtn?: string,
		closeTooltip?: string,
		stepNums?: string[]
	}
	}

	declare interface TourDefinition {
		id: string,
		steps: StepDefinition[]
	}

	declare interface StepDefinition {
		placement: string,
		target: string | HTMLElement | Array<string | HTMLElement>,
		title?: string,
		content?: string,
		width?: number,
		padding?: number,
		xOffset?: number,
		yOffset?: number,
		arrowOffset?: number,
		delay?: number,
		zIndex?: number,
		showNextButton?: boolean,
		showPrevButton?: boolean,
		showCTAButton?: boolean,
		ctaLabel?: string,
		multipage?: boolean,
		showSkip?: boolean,
		fixedElement?: boolean,
		nextOnTargetClick?: boolean,
		onPrev?: CallbackNameNamesOrDefinition,
		onNext?: CallbackNameNamesOrDefinition,
		onShow?: CallbackNameNamesOrDefinition,
		onCTA?: CallbackNameNamesOrDefinition
	}

	declare interface HopscotchStatic {
		startTour(tour: TourDefinition, stepNum?: number): void,
		showStep(id: number): void,
		prevStep(): void,
		nextStep(): void,
		endTour(clearCookie: boolean): void,
		configure(options: HopscotchConfiguration): void,
		getCurrTour(): TourDefinition,
		getCurrStepNum(): number,
		getState(): string,
		listen(eventName: string, callback: () => void): void,
		unlisten(eventName: string, callback: () => void): void,
		removeCallbacks(eventName?: string, tourOnly?: boolean): void,
		registerHelper(id: string, helper: (...args: any[]) => void): void,
		resetDefaultI18N(): void,
		resetDefaultOptions(): void
	}

			declare module.exports: HopscotchStatic


}