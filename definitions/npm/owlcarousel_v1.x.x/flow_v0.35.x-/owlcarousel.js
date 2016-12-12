

declare module 'owlcarousel' {
		declare interface IOwlCarouselOptions {
		items: number,
		itemsDesktop: number[],
		itemsDesktopSmall: number[],
		itemsTablet: number[],
		itemsTabletSmall: any,
		itemsMobile: number[],
		itemsCustom: any,
		singleItem: boolean,
		itemsScaleUp: boolean,
		slideSpeed: number,
		paginationSpeed: number,
		rewindSpeed: number,
		autoPlay: any,
		stopOnHover: boolean,
		navigation: boolean,
		navigationText: any,
		rewindNav: boolean,
		scrollPerPage: boolean,
		pagination: boolean,
		paginationNumbers: boolean,
		responsive: boolean,
		responsiveRefreshRate: number,
		responsiveBaseWidth: JQuery,
		baseClass: string,
		theme: string,
		lazyLoad: boolean,
		lazyFollow: boolean,
		lazyEffect: any,
		autoHeight: boolean,
		jsonPath: any,
		jsonSuccess: (data: any) => void,
		dragBeforeAnimFinish: boolean,
		mouseDrag: boolean,
		touchDrag: boolean,
		addClassActive: boolean,
		transitionStyle: any,
		beforeUpdate: (params?: any) => void,
		afterUpdate: (params?: any) => void,
		beforeInit: (params?: any) => void,
		afterInit: (params?: any) => void,
		beforeMove: (params?: any) => void,
		afterMove: (params?: any) => void,
		afterAction: (params?: any) => void,
		startDragging: (params?: any) => void,
		afterLazyLoad: (params?: any) => void
	}

	declare interface JQuery {
		owlCarousel(options?: any): JQuery
	}

			
}