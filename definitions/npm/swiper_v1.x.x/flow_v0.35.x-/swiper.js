

declare module 'swiper' {
		declare interface SwiperOptions {
		speed?: number,
		autoplay?: number,
		mode?: string,
		loop?: boolean,
		loopAdditionalSlides?: number,
		slidesPerView?: any,
		slidesPerGroup?: number,
		calculateHeight?: boolean,
		updateOnImagesReady?: boolean,
		releaseFormElements?: boolean,
		watchActiveIndex?: boolean,
		visibilityFullFit?: boolean,
		autoResize?: boolean,
		resizeReInit?: boolean,
		DOMAnimation?: boolean,
		resistance?: any,
		noSwiping?: boolean,
		preventLinks?: boolean,
		initialSlide?: number,
		useCSS3Transforms?: boolean,
		freeMode?: boolean,
		freeModeFluid?: boolean,
		scrollContainer?: boolean,
		momentumRatio?: number,
		momentumBounce?: boolean,
		momentumBounceRatio?: number,
		centeredSlides?: boolean,
		offsetPxBefore?: number,
		offsetPxAfter?: number,
		offsetSlidesBefore?: number,
		offsetSlidesAfter?: number,
		touchRatio?: number,
		simulateTouch?: boolean,
		onlyExternal?: boolean,
		followFinger?: boolean,
		grabCursor?: boolean,
		shortSwipes?: boolean,
		moveStartThreshold?: number,
		keyboardControl?: boolean,
		mousewheelControl?: boolean,
		nextButton?: string | HTMLElement,
		prevButton?: string | HTMLElement,
		pagination?: any,
		paginationClickable?: boolean,
		paginationAsRange?: boolean,
		createPagination?: boolean,
		wrapperClass?: string,
		slideClass?: string,
		slideActiveClass?: string,
		slideVisibleClass?: string,
		slideElement?: string,
		noSwipingClass?: string,
		paginationElement?: string,
		paginationElementClass?: string,
		paginationActiveClass?: string,
		paginationVisibleClass?: string,
		queueStartCallbacks?: boolean,
		queueEndCallbacks?: boolean,
		onTouchStart?: (swiper: Swiper) => void,
		onTouchMove?: (swiper: Swiper) => void,
		onTouchEnd?: (swiper: Swiper) => void,
		onSlideReset?: (swiper: Swiper) => void,
		onSlideChangeStart?: (swiper: Swiper) => void,
		onSlideChangeEnd?: (swiper: Swiper) => void,
		onSlideClick?: (swiper: Swiper) => void,
		onSlideTouch?: (swiper: Swiper) => void,
		onImagesReady?: (swiper: Swiper) => void,
		onMomentumBounce?: (swiper: Swiper) => void,
		onResistanceBefore?: (swiper: Swiper, distance: <<UNKNOWN PARAM FORMAT>>) => void,
		onResistanceAfter?: (swiper: Swiper, distance: <<UNKNOWN PARAM FORMAT>>) => void,
		loader?: {
		slides?: any[],
		slidesHTMLType?: string,
		surroundGroups?: number,
		logic?: string,
		loadAllSlides?: boolean
	},
		scrollbar?: SwiperScrollbarOptions
	}

	declare interface SwiperScrollbarOptions {
		container: string,
		draggable?: boolean,
		hide?: boolean,
		snapOnRelease?: boolean
	}

		declare class SwiperSlide  {
		append(): SwiperSlide;
		clone(): SwiperSlide;
		getWidth(): number;
		getHeight(): number;
		getOffset(): {
		top: number,
		left: number
	};
		insertAfter(index: number): SwiperSlide;
		prepend(): SwiperSlide;
		remove(): void
	}

	declare class Swiper  {
		constructor(container: string | Element, options?: SwiperOptions): this;
		width: number;
		height: number;
		params: ;
		positions: ;
		support: {
		touch: boolean,
		transforms: boolean,
		transforms3d: boolean,
		transitions: boolean
	};
		browser: {
		ie8: boolean,
		ie10: boolean
	};
		activeIndex: number;
		activeLoopIndex: number;
		activeLoaderIndex: number;
		previousIndex: number;
		swipeNext(internal?: boolean): boolean;
		swipePrev(internal?: boolean): boolean;
		swipeReset(): boolean;
		swipeTo(index: number, speed?: number, runCallbacks?: boolean): boolean;
		activeSlide(): SwiperSlide;
		updateActiveSlide(index: number): void;
		touches: ;
		isTouched: boolean;
		clickedSlideIndex: number;
		clickedSlide: SwiperSlide;
		wrapperTransitionEnd(callback: () => void, permanent: boolean): void;
		destroy(removeResizeEvent?: boolean): void;
		reInit(forceCalcSlides?: boolean): void;
		resizeFix(reInit?: boolean): void;
		autoplay: boolean;
		startAutoplay(): void;
		stopAutoplay(): void;
		getWrapperTranslate(axis: string): number;
		setWrapperTranslate(x: number, y: number, z: number): void;
		setWrapperTransition(duration: <<UNKNOWN PARAM FORMAT>>): void;
		slides: SwiperSlide[];
		createSlide(html: string, slideClassList?: string, element?: string): SwiperSlide;
		appendSlide(html: string, slideClassList?: string, element?: string): SwiperSlide;
		appendSlide(slideInstance: HTMLElement): SwiperSlide;
		prependSlide(html: string, slideClassList?: string, element?: string): SwiperSlide;
		prependSlide(slideInstance: HTMLElement): SwiperSlide;
		insertSlideAfter(
		index: number, html: string, slideClassList?: string, element?: string
	): SwiperSlide;
		insertSlideAfter(index: number, slideInstance: HTMLElement): SwiperSlide;
		removeSlide(index: number): boolean;
		removeLastSlide(): boolean;
		removeAllSlides(): void;
		getSlide(index: number): SwiperSlide;
		getLastSlide(): SwiperSlide;
		getFirstSlide(): SwiperSlide
	}

	
}