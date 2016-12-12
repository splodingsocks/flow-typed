

declare module 'winjs' {
		declare interface Element {
		winControl: any
	}

	declare interface IOHelper {
		exists(filename: string): WinJS.Promise<boolean>,
		readText(fileName: string, def?: string): WinJS.Promise<string>,
		remove(fileName: string): WinJS.Promise<void>,
		writeText(fileName: string, text: string): WinJS.Promise<number>,
		storage: any
	}

			declare module.exports: undefined


}

declare module 'Application' {
		declare interface IPromiseEvent {
		setPromise(promise: IPromise<any>): void
	}

	declare function addEventListener(type: string, listener: Function, capture?: boolean): void

	declare function checkpoint(): void

	declare function queueEvent(eventRecord: any): void

	declare function removeEventListener(type: string, listener: Function, useCapture?: any): void

	declare function start(): void

	declare function stop(): void

	declare function onactivated(eventInfo: IPromiseEvent): void

	declare function oncheckpoint(eventInfo: IPromiseEvent): void

	declare function onerror(eventInfo: IPromiseEvent): void

	declare function onloaded(eventInfo: IPromiseEvent): void

	declare function onready(eventInfo: IPromiseEvent): void

	declare function onsettings(eventInfo: IPromiseEvent): void

	declare function onunload(eventInfo: IPromiseEvent): void

	declare function onbackclick(eventInfo: IPromiseEvent): void

		
}

declare module 'Binding' {
		declare interface FilteredListProjection<T> {
		getItem(index: number): IKeyDataPair<T>,
		indexOfKey(key: string): number,
		notifyMutated(index: number): void,
		setAt(index: number, newValue: T): void,
		length: number
	}

	declare interface GroupsListProjection<T> {
		getItem(index: number): IKeyDataPair<T>,
		getItemFromKey(key: string): IKeyDataPair<T>,
		indexOfKey(key: string): number,
		length: number
	}

	declare interface GroupedSortedListProjection<T, G> {
		groups: GroupsListProjection<G>,
		getItem(index: number): IGroupKeyDataPair<T>
	}

	declare interface ListBase<T> {
		onitemchanged(eventInfo: CustomEvent): void,
		oniteminserted(eventInfo: CustomEvent): void,
		onitemmoved(eventInfo: CustomEvent): void,
		onitemmutated(eventInfo: CustomEvent): void,
		onitemremoved(eventInfo: CustomEvent): void,
		onreload(eventInfo: CustomEvent): void,
		addEventListener(type: string, listener: Function, useCapture?: boolean): void,
		bind(name: string, action: Function): any,
		concat(...item: T[]): T[],
		createFiltered(predicate: (x: T) => boolean): FilteredListProjection<T>,
		createGrouped<G>(
		groupKey: (x: T) => string, groupData: (x: T) => G, groupSorter?: (left: string, right: string) => number
	): GroupedSortedListProjection<T, G>,
		createSorted(sorter: (left: T, right: T) => number): SortedListProjection<T>,
		dispatchEvent(type: string, eventProperties: any): boolean,
		every(
		callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any
	): boolean,
		filter(callback: (value: T, index: number, array: T[]) => any, thisArg?: any): T[],
		forEach(callback: (value: T, index: number, array: T[]) => void, thisArg?: any): void,
		getAt(index: number): T,
		indexOf(searchElement: T, fromIndex?: number): number,
		join(separator?: string): string,
		lastIndexOf(searchElement: T, fromIndex?: number): number,
		map<G>(callback: (value: T, index: number, array: T[]) => G, thisArg?: any): G[],
		notify(name: string, newValue: any, oldValue: any): Promise<any>,
		notifyReload(): void,
		reduce(
		callback: (previousValue: any, currentValue: any, currentIndex: number, array: T[]) => T, initiallValue?: T
	): T,
		reduceRight(
		callback: (previousValue: any, currentValue: any, currentIndex: number, array: T[]) => T, initialValue?: T
	): T,
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void,
		slice(begin: number, end?: number): T[],
		some(
		callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any
	): boolean,
		unbind(name: string, action: Function): any,
		dataSource: WinJS.UI.IListDataSource<T>
	}

	declare interface ListBaseWithMutators<T> {
		pop(): T,
		push(value: T): number,
		push(...values: T[]): number,
		shift(): T,
		unshift(value: T): number,
		unshift(...values: T[]): number
	}

	declare interface ListProjection<T> {
		dispose(): void,
		getItemFromKey(key: string): IKeyDataPair<T>,
		move(index: number, newIndex: number): void,
		splice(start: number, howMany?: number, ...item: T[]): T[]
	}

	declare interface SortedListProjection<T> {
		getItem(index: number): IKeyDataPair<T>,
		indexOfKey(key: string): number,
		notifyMutated(index: number): void,
		setAt(index: number, newValue: T): void,
		length: number
	}

	declare interface IKeyDataPair<T> {
		key: string,
		data: T
	}

	declare interface IGroupKeyDataPair<T> {
		groupSize: number,
		firstItemIndexHint: number,
		firstItemKey: string
	}

	declare function addClassOneTime(source: any, sourceProperties: any[], dest: HTMLElement): void

	declare function as<U>(data: U): U

	declare function bind(observable: any, bindingDescriptor: any): any

	declare function converter(convert: Function): Function

	declare function defaultBind(source: any, sourceProperties: any, dest: any, destProperties: any): any

	declare function define(data: any): Function

	declare function expandProperties(shape: any): any

	declare function getValue(obj: any, path?: any): any

	declare function initializer(customInitializer: Function): Function

	declare function oneTime(source: any, sourceProperties: any, dest: any, destProperties: any): any

	declare function processAll(
		rootElement?: Element, dataContext?: any, skipRoot?: boolean, bindingCache?: any, defaultInitializer?: Function
	): Promise<void>

	declare function setAttribute(
		source: any, sourceProperties: any[], dest: Element, destProperties: any[]
	): any

	declare function setAttributeOneTime(
		source: any, sourceProperties: any[], dest: Element, destProperties: any[]
	): void

	declare function unwrap(data: any): any

	declare class List<T> extends ListBaseWithMutators<T> {
		constructor(list?: T[], options?: any): this;
		onitemchanged(eventInfo: CustomEvent): void;
		oniteminserted(eventInfo: CustomEvent): void;
		onitemmoved(eventInfo: CustomEvent): void;
		onitemmutated(eventInfo: CustomEvent): void;
		onitemremoved(eventInfo: CustomEvent): void;
		onreload(eventInfo: CustomEvent): void;
		addEventListener(type: string, listener: Function, useCapture?: boolean): void;
		bind(name: string, action: Function): any;
		concat(...item: T[]): T[];
		createFiltered(predicate: (x: T) => boolean): FilteredListProjection<T>;
		createGrouped<G>(
		groupKey: (x: T) => string, groupData: (x: T) => G, groupSorter?: (left: string, right: string) => number
	): GroupedSortedListProjection<T, G>;
		createSorted(sorter: (left: T, right: T) => number): SortedListProjection<T>;
		dispatchEvent(type: string, eventProperties: any): boolean;
		every(
		callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any
	): boolean;
		filter(callback: (value: T, index: number, array: T[]) => any, thisArg?: any): T[];
		forEach(callback: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
		getAt(index: number): T;
		getItem(index: number): IKeyDataPair<T>;
		getItemFromKey(key: string): IKeyDataPair<T>;
		indexOf(searchElement: T, fromIndex?: number): number;
		indexOfKey(key: string): number;
		join(separator?: string): string;
		lastIndexOf(searchElement: T, fromIndex?: number): number;
		map<G>(callback: (value: T, index: number, array: T[]) => G, thisArg?: any): G[];
		move(index: number, newIndex: number): void;
		notify(name: string, newValue: any, oldValue: any): Promise<any>;
		notifyMutated(index: number): void;
		notifyReload(): void;
		pop(): T;
		push(value: T): number;
		push(...values: T[]): number;
		reduce(
		callback: (previousValue: any, currentValue: any, currentIndex: number, array: T[]) => T, initiallValue?: T
	): T;
		reduceRight(
		callback: (previousValue: any, currentValue: any, currentIndex: number, array: T[]) => T, initialValue?: T
	): T;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		reverse(): void;
		setAt(index: number, newValue: T): void;
		shift(): T;
		slice(begin: number, end?: number): T[];
		some(
		callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any
	): boolean;
		sort(sortFunction?: (left: T, right: T) => number): void;
		splice(start: number, howMany?: number, ...item: T[]): T[];
		unbind(name: string, action: Function): any;
		unshift(value: T): number;
		unshift(...values: T[]): number;
		dataSource: WinJS.UI.IListDataSource<T>;
		length: number;
		supportedForProcessing: boolean
	}

	declare class Template  {
		constructor(element: HTMLElement, options?: any): this;
		render(dataContext: any, container?: HTMLElement): Promise<HTMLElement>;
		renderItem<T>(
		item: WinJS.Promise<T>, recyled: HTMLElement
	): {
		element: WinJS.Promise<HTMLElement>,
		renderComplete: WinJS.Promise<any>
	};
		render(href: string, dataContext: any, container?: HTMLElement): Promise<HTMLElement>;
		bindingInitializer: any;
		debugBreakOnRender: boolean;
		disableOptimizedProcessing: boolean;
		element: HTMLElement;
		extractChild: boolean;
		processTimeout: number;
		isDeclarativeControlContainer: boolean;
		supportedForProcessing: boolean
	}

	
}

declare module 'Class' {
			declare function define(constructor?: Function, instanceMembers?: any, staticMembers?: any): any

	declare function derive(
		baseClass: any, constructor: Function, instanceMembers?: any, staticMembers?: any
	): any

	declare function mix(constructor: Function, ...mixin: any[]): any

		
}

declare module 'npm$namespace$WinJS' {
		declare interface IPromise<T> {
		cancel(): void,
		done<U>(
		onComplete?: (value: T) => any, onError?: (error: any) => any, onProgress?: (progress: any) => void
	): void,
		then<U>(
		onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => U, onProgress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => void, onProgress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		onComplete?: (value: T) => U, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		onComplete?: (value: T) => U, onError?: (error: any) => U, onProgress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		onComplete?: (value: T) => U, onError?: (error: any) => void, onProgress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		onComplete?: (value: T) => void, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		onComplete?: (value: T) => void, onError?: (error: any) => U, onProgress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		onComplete?: (value: T) => void, onError?: (error: any) => void, onProgress?: (progress: any) => void
	): IPromise<U>
	}

	declare interface IXHROptions {
		type?: string,
		url: string,
		user?: string,
		password?: string,
		headers?: any,
		data?: any,
		responseType?: string,
		customRequestInitializer?: (request: XMLHttpRequest) => void
	}

	declare function log(message: string, tags?: string, type?: string): void

	declare function log(message: () => string, tags?: string, type?: string): void

	declare function xhr(options: IXHROptions): Promise<XMLHttpRequest>

	declare class ErrorFromName  {
		constructor(name: string, message?: string): this;
		supportedForProcessing: boolean
	}

	declare class Promise<T> extends IPromise<T> {
		constructor(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): this;
		onerror(eventInfo: CustomEvent): void;
		addEventListener(type: string, listener: Function, capture?: boolean): void;
		any(value: IPromise<any>[]): IPromise<any>;
		any(value: any): IPromise<any>;
		as<U>(value?: U): IPromise<U>;
		cancel(): void;
		cancel: IPromise<any>;
		dispatchEvent(type: string, details: any): boolean;
		done<U>(
		onComplete?: (value: T) => any, onError?: (error: any) => any, onProgress?: (progress: any) => void
	): void;
		is(value: any): boolean;
		join(values: any): IPromise<any>;
		removeEventListener(eventType: string, listener: Function, capture?: boolean): void;
		then<U>(
		onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void
	): IPromise<U>;
		then<U>(
		onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => U, onProgress?: (progress: any) => void
	): IPromise<U>;
		then<U>(
		onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => void, onProgress?: (progress: any) => void
	): IPromise<U>;
		then<U>(
		onComplete?: (value: T) => U, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void
	): IPromise<U>;
		then<U>(
		onComplete?: (value: T) => U, onError?: (error: any) => U, onProgress?: (progress: any) => void
	): IPromise<U>;
		then<U>(
		onComplete?: (value: T) => U, onError?: (error: any) => void, onProgress?: (progress: any) => void
	): IPromise<U>;
		then<U>(
		onComplete?: (value: T) => void, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void
	): IPromise<U>;
		then<U>(
		onComplete?: (value: T) => void, onError?: (error: any) => U, onProgress?: (progress: any) => void
	): IPromise<U>;
		then<U>(
		onComplete?: (value: T) => void, onError?: (error: any) => void, onProgress?: (progress: any) => void
	): IPromise<U>;
		then(
		promise: IPromise<any>, onComplete?: (value: any) => any, onError?: (error: any) => any, onProgress?: (progress: any) => void
	): IPromise<any>;
		thenEach(
		values: any, complete?: (value: any) => void, error?: (error: any) => void, progress?: (progress: any) => void
	): IPromise<any>;
		timeout(timeout?: number, promise?: IPromise<any>): IPromise<any>;
		wrap<U>(value?: U): IPromise<U>;
		wrapError<U>(error: U): IPromise<U>;
		supportedForProcessing: boolean
	}

	
}

declare module 'Namespace' {
			declare function define(name?: string, members?: any): any

	declare function defineWithParent(parentNamespace?: any, name?: string, members?: any): any

		
}

declare module 'Navigation' {
			declare function addEventListener(eventType: string, listener: Function, capture?: boolean): void

	declare function back(distance?: number): Promise<boolean>

	declare function forward(distance?: number): Promise<boolean>

	declare function navigate(location: any, initialState?: any): Promise<boolean>

	declare function removeEventListener(eventType: string, listener: Function, useCapture?: boolean): void

	declare function onbeforenavigate(eventInfo: CustomEvent): void

	declare function onnavigated(eventInfo: CustomEvent): void

	declare function onnavigating(eventInfo: CustomEvent): void

		
}

declare module 'Resources' {
			declare function addEventListener(type: string, listener: Function, useCapture?: boolean): void

	declare function dispatchEvent(type: string, details: any): void

	declare function getString(resourceId: string): {
		value: string,
		empty?: boolean,
		lang?: string
	}

	declare function processAll(rootElement?: HTMLElement): Promise<void>

	declare function removeEventListener(type: string, listener: Function, useCapture?: boolean): void

	declare function oncontextchanged(eventInfo: CustomEvent): void

		
}

declare module 'Animation' {
		declare interface IAnimationMethodResponse {
		execute(): Promise<any>
	}

	declare function createAddToListAnimation(added: any, affected: any): IAnimationMethodResponse

	declare function createAddToSearchListAnimation(added: any, affected: any): IAnimationMethodResponse

	declare function createCollapseAnimation(hidden: any, affected: any): IAnimationMethodResponse

	declare function createDeleteFromListAnimation(deleted: any, remaining: any): IAnimationMethodResponse

	declare function createDeleteFromSearchListAnimation(deleted: any, remaining: any): IAnimationMethodResponse

	declare function createExpandAnimation(revealed: any, affected: any): IAnimationMethodResponse

	declare function createPageNavigationAnimations(
		currentPreferredAnimation: string, nextPreferredAnimation: string, movingBackwards: boolean
	): {
		exit: Function,
		entrance: Function
	}

	declare function createPeekAnimation(element: any): IAnimationMethodResponse

	declare function createRepositionAnimation(element: any): IAnimationMethodResponse

	declare function crossFade(incoming: any, outgoing: any): Promise<any>

	declare function dragBetweenEnter(target: any, offset?: any): Promise<any>

	declare function dragBetweenLeave(target: any): Promise<any>

	declare function dragSourceEnd(dragSource: any, offset?: any, affected?: any): Promise<any>

	declare function dragSourceStart(dragSource: any, affected?: any): Promise<any>

	declare function drillInIncoming(incomingPage: HTMLElement): Promise<any>

	declare function drillInOutgoing(outgoingPage: HTMLElement): Promise<any>

	declare function drillOutIncoming(incomingPage: HTMLElement): Promise<any>

	declare function drillOutOutgoing(outgoingPage: HTMLElement): Promise<any>

	declare function enterContent(incoming: any, offset?: any, options?: any): Promise<any>

	declare function enterPage(element: any, offset?: any): Promise<any>

	declare function exitContent(outgoing: any, offset?: any): Promise<any>

	declare function exitPage(outgoing: any, offset?: any): Promise<any>

	declare function fadeIn(shown: any): Promise<any>

	declare function fadeOut(hidden: any): Promise<any>

	declare function hideEdgeUI(element: any, offset?: any, options?: any): Promise<any>

	declare function hidePanel(element: any, offset?: any): Promise<any>

	declare function hidePopup(element: any): Promise<any>

	declare function pointerDown(element: any): Promise<any>

	declare function pointerUp(element: any): Promise<any>

	declare function showEdgeUI(element: any, offset?: any, options?: any): Promise<any>

	declare function showPanel(element: any, offset?: any): Promise<any>

	declare function showPopup(element: any, offset?: any): Promise<any>

	declare function swipeDeselect(deselected: any, selection: any): Promise<any>

	declare function swipeReveal(target: any, offset?: any): Promise<any>

	declare function swipeSelect(selected: any, selection: any): Promise<any>

	declare function updateBadge(incoming: any, offset?: any): Promise<any>

	declare function slideUp(incoming: any): Promise<any>

	declare function slideDown(incoming: any): Promise<any>

	declare function slideLeftIn(page: any, first: any, second: any, third: any): Promise<any>

	declare function slideLeftOut(page: any, first: any, second: any, third: any): Promise<any>

	declare function slideRightIn(page: any, first: any, second: any, third: any): Promise<any>

	declare function slideRightOut(page: any, first: any, second: any, third: any): Promise<any>

	declare function continuumForwardIn(page: any, itemRoot: any, itemContent: any): Promise<any>

	declare function continuumForwardOut(page: any, item: any): Promise<any>

	declare function continuumBackwardIn(page: any, item: any): Promise<any>

	declare function continuumBackwardOut(page: any): Promise<any>

	declare function turnstileForwardIn(incoming: any): Promise<any>

	declare function turnstileForwardOut(outgoing: any): Promise<any>

	declare function turnstileBackwardIn(incoming: any): Promise<any>

	declare function turnstileBackwardOut(outgoing: any): Promise<any>

		
}

declare module 'UI' {
		declare export interface ICommand {
		addEventListener(type: string, listener: Function, useCapture?: boolean): void,
		dispose(): void,
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void,
		disabled: boolean,
		element: HTMLElement,
		extraClass: string,
		firstElementFocus: HTMLElement,
		flyout: Flyout,
		hidden: boolean,
		icon: string,
		id: string,
		label: string,
		lastElementFocus: HTMLElement,
		onclick: Function,
		section: string,
		selected: boolean,
		tooltip: string,
		type: string,
		priority: number
	}

	declare interface IFetchResult<T> {
		absoluteIndex: number,
		atEnd: boolean,
		atStart: boolean,
		items: T[],
		offset: number,
		totalCount: number
	}

	declare interface IItem<T> {
		data: T,
		groupKey: string,
		handle: string,
		index: number,
		key: string
	}

	declare interface IItemPromise<T> {
		release(): void,
		retain(): IItemPromise<T>,
		handle: string,
		index: number
	}

	declare interface ILayout2 {
		dragLeave(): void,
		dragOver(x: number, y: number, dragInfo: number): void,
		executeAnimations(): void,
		getAdjacent(currentItem: any, pressedKey: WinJS.Utilities.Key): any,
		hitTest(x: number, y: number): any,
		initialize(site: ILayoutSite2, groupsEnabled: boolean): void,
		itemsFromRange(firstPixel: number, lastPixel: number): void,
		layout(tree: any, changedRange: any, modifiedItems: any, modifiedGroups: any): any,
		setupAnimations(): void,
		uninitialize(): void,
		orientation: any
	}

	declare interface ILayoutSite {
		animationsDisabled: boolean,
		itemSurface: HTMLElement,
		rtl: boolean,
		scrollbarPos: number,
		surface: HTMLElement,
		viewport: HTMLElement,
		viewportSize: any
	}

	declare interface ILayoutSite2 {
		groupCount: number,
		itemCount: Promise<number>,
		realizedRange: any,
		tree: any,
		visibleRange: any
	}

	declare interface IListBinding<T> {
		current(): IItemPromise<IItem<T>>,
		first(): IItemPromise<IItem<T>>,
		fromDescription(description: string): IItemPromise<IItem<T>>,
		fromIndex(index: number): IItemPromise<IItem<T>>,
		fromKey(key: string, hints?: any): IItemPromise<IItem<T>>,
		jumpToItem(item: IItem<T>): IItemPromise<IItem<T>>,
		last(): IItemPromise<IItem<T>>,
		next(): IItemPromise<IItem<T>>,
		previous(): IItemPromise<IItem<T>>,
		release(): void,
		releaseItem(item: IItem<T>): void
	}

	declare interface IListDataAdapter<T> {
		change(key: string, newData: T, indexHint: number): Promise<void>,
		getCount(): Promise<number>,
		insertAfter(
		key: string, data: T, previousKey: string, previousIndexHint: number
	): Promise<IItem<T>>,
		insertAtEnd(key: string, data: T): Promise<IItem<T>>,
		insertAtStart(key: string, data: T): Promise<IItem<T>>,
		insertBefore(
		key: string, data: T, nextKey: string, nextIndexHint: number
	): Promise<IItem<T>>,
		itemsFromDescription(
		description: string, countBefore: number, countAfter: number
	): Promise<IFetchResult<T>>,
		itemsFromEnd(count: number): Promise<IFetchResult<T>>,
		itemsFromIndex(
		index: number, countBefore: number, countAfter: number
	): Promise<IFetchResult<T>>,
		itemsFromKey(key: string, countBefore: number, countAfter: number): Promise<IFetchResult<T>>,
		itemsFromStart(count: number): Promise<IFetchResult<T>>,
		itemSignature(item: IItem<T>): string,
		moveAfter(
		key: string, previousKey: any, indexHint: string, previousIndexHint: number
	): Promise<IItem<T>>,
		moveBefore(
		key: string, nextKey: any, indexHint: string, nextIndexHint: number
	): Promise<IItem<T>>,
		moveToEnd(key: string, indexHint: number): Promise<IItem<T>>,
		moveToStart(key: string, indexHint: number): Promise<IItem<T>>,
		remove(key: string, data: T, indexHint: number): Promise<void>,
		setNotificationHandler(notificationHandler: IListDataNotificationHandler<T>): void,
		compareByIdentity: boolean
	}

	declare interface IListDataNotificationHandler<T> {
		beginNotifications(): void,
		changed(item: IItem<T>): void,
		endNotifications(): void,
		inserted(newItem: IItem<T>, previousKey: string, nextKey: string, index?: number): void,
		invalidateAll(): Promise<any>,
		moved(
		item: IItem<T>, previousKey: string, nextKey: string, oldIndex?: number, newIndex?: number
	): void,
		reload(): void,
		removed(key: string, index?: number): void
	}

	declare interface IListDataSource<T> {
		statuschanged(eventInfo: CustomEvent): void,
		beginEdits(): void,
		change(key: string, newData: T): Promise<IItem<T>>,
		createListBinding(notificationHandler?: IListNotificationHandler<T>): IListBinding<T>,
		endEdits(): void,
		getCount(): Promise<number>,
		insertAfter(key: string, data: T, previousKey: string): Promise<IItem<T>>,
		insertAtEnd(key: string, data: T): Promise<IItem<T>>,
		insertAtStart(key: string, data: T): Promise<IItem<T>>,
		insertBefore(key: string, data: T, nextKey: string): Promise<IItem<T>>,
		invalidateAll(): Promise<any>,
		itemFromDescription(description: any): Promise<IItem<T>>,
		itemFromIndex(index: number): Promise<IItem<T>>,
		itemFromKey(key: string, description?: any): Promise<IItem<T>>,
		moveAfter(key: string, previousKey: string): Promise<IItem<T>>,
		moveBefore(key: string, nextKey: string): Promise<IItem<T>>,
		moveToEnd(key: string): Promise<IItem<T>>,
		moveToStart(key: string): Promise<IItem<T>>,
		remove(key: string): Promise<IItem<T>>
	}

	declare interface IListNotificationHandler<T> {
		beginNotifications(): void,
		changed(newItem: IItem<T>, oldItem: IItem<T>): void,
		countChanged(newCount: number, oldCount: number): void,
		endNotifications(): void,
		indexChanged(handle: string, newIndex: number, oldIndex: number): void,
		inserted(itemPromise: IItemPromise<T>, previousHandle: string, nextHandle: string): void,
		itemAvailable(item: IItem<T>): void,
		moved(item: IItemPromise<T>, previousHandle: string, nextHandle: string): void,
		removed(handle: string, mirage: boolean): void
	}

	declare interface IListViewItem {
		index?: number,
		key?: string,
		hasFocus?: boolean,
		showFocus?: boolean,
		type?: WinJS.UI.ObjectType
	}

	declare interface ISelection<T> {
		add(items: any): Promise<any>,
		clear(): Promise<any>,
		count(): number,
		getIndices(): number[],
		getItems(): Promise<IItem<T>[]>,
		getRanges(): ISelectionRange[],
		isEverything(): boolean,
		remove(items: any): Promise<any>,
		selectAll(): void,
		set(items: any): Promise<any>
	}

	declare interface ISelectionRange {
		firstIndex: number,
		firstKey: any,
		lastIndex: number,
		lastKey: any
	}

	declare interface IZoomableView<T> {
		beginZoom(): void,
		configureForZoom(
		isZoomedOut: boolean, isCurrentView: boolean, triggerZoom: Function, prefetchedPages: number
	): void,
		endZoom(isCurrentView: boolean): void,
		getCurrentItem(): Promise<{
		item: T,
		position: Utilities.IPosition
	}>,
		getPanAxis(): string,
		handlePointer(pointerId: string): void,
		positionItem(item: T, position: Utilities.IPosition): void,
		setCurrentItem(x: number, y: number): void
	}

	declare interface ContentDialogHideInfo {
		result: string
	}

	declare interface ContentDialogHideEvent {
		detail: ContentDialogHideInfo
	}

	declare interface MediaCommand {
		audioTracks: string,
		cast: string,
		chapterSkipBack: string,
		chapterSkipForward: string,
		closedCaptions: string,
		fastForward: string,
		goToLive: string,
		nextTrack: string,
		pause: string,
		play: string,
		playbackRate: string,
		playFromBeginning: string,
		previousTrack: string,
		rewind: string,
		seek: string,
		stop: string,
		timeSkipBack: string,
		timeSkipForward: string,
		volume: string,
		zoom: string
	}

	declare interface MarkerType {
		advertisement: string,
		chapter: string,
		custom: string
	}

	declare interface IListGroupDataSource<T> {
		groups: IListDataSource<T>
	}

	declare function computeDataSourceGroups<T>(
		listDataSource: IListDataSource<T>, groupKey: Function, groupData: Function, options?: any
	): IListGroupDataSource<T>

	declare function disableAnimations(): void

	declare function enableAnimations(): void

	declare function eventHandler(handler: any): any

	declare function executeAnimation(element: HTMLElement, animation: any): Promise<any>

	declare function executeTransition(element: HTMLElement, transition: any): Promise<any>

	declare function getItemsFromRanges<U>(
		dataSource: IListDataSource<U>, ranges: ISelectionRange[]
	): Promise<IItem<U>>

	declare function isAnimationEnabled(): boolean

	declare function optionsParser(value: string, context?: any, functionContext?: any): any

	declare function processAll(rootElement?: Element, skipRoot?: boolean): Promise<any>

	declare function process(element: Element): Promise<any>

	declare function scopedSelect(selector: string, element: HTMLElement): HTMLElement

	declare function setOptions(control: any, options?: any): void

	declare function simpleItemRenderer(fn: Function): Function

	declare class AppBar  {
		constructor(element?: HTMLElement, options?: any): this;
		onafterclose: (eventInfo: CustomEvent) => void;
		onafteropen: (eventInfo: CustomEvent) => void;
		onbeforeclose: (eventInfo: CustomEvent) => void;
		onbeforeopen: (eventInfo: CustomEvent) => void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		removeEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(eventName: string, eventProperties: any): boolean;
		dispose(): void;
		getCommandById(id: string): ICommand;
		showOnlyCommands(commands: Array<string | ICommand>): void;
		open(): void;
		close(): void;
		forceLayout(): void;
		closedDisplayMode: string;
		data: WinJS.Binding.List<ICommand>;
		element: HTMLElement;
		opened: boolean;
		placement: string;
		ClosedDisplayMode: {
		none: string,
		minimal: string,
		compact: string,
		full: string
	};
		Placement: {
		top: string,
		bottom: string
	};
		supportedForProcessing: boolean
	}

	declare class AppBarCommand extends ICommand {
		constructor(element?: HTMLElement, options?: any): this;
		addEventListener(type: string, listener: Function, useCapture?: boolean): void;
		dispose(): void;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		disabled: boolean;
		element: HTMLElement;
		extraClass: string;
		firstElementFocus: HTMLElement;
		flyout: Flyout;
		hidden: boolean;
		icon: string;
		id: string;
		label: string;
		lastElementFocus: HTMLElement;
		onclick: Function;
		section: string;
		selected: boolean;
		tooltip: string;
		type: string;
		priority: number;
		supportedForProcessing: boolean
	}

	declare class AutoSuggestBox  {
		constructor(element?: HTMLElement, options?: any): this;
		onquerychanged(eventInfo: CustomEvent): void;
		onquerysubmitted(eventInfo: CustomEvent): void;
		onresultsuggestionchosen(eventInfo: CustomEvent): void;
		onsuggestionsrequested(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		setLocalContentSuggestionSettings(settings: any): void;
		chooseSuggestionOnEnter: boolean;
		disabled: boolean;
		element: HTMLElement;
		placeholderText: string;
		queryText: string;
		searchHistoryContext: string;
		searchHistoryDisabled: boolean;
		supportedForProcessing: boolean;
		createResultSuggestionImage(url: string): any
	}

	declare class BackButton  {
		constructor(element?: HTMLElement, options?: any): this;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		refresh(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		element: HTMLElement;
		supportedForProcessing: boolean
	}

	declare class CellSpanningLayout  {
		constructor(options?: any): this;
		dragLeave(): void;
		dragOver(): void;
		executeAnimations(): void;
		getAdjacent(currentItem: any, pressedKey: WinJS.Utilities.Key): any;
		hitTest(x: number, y: number): void;
		initialize(site: ILayoutSite2, groupsEnabled: boolean): void;
		itemsFromRange(firstPixel: number, lastPixel: number): void;
		layout(
		tree: ILayoutSite2, changedRange: any, modifiedItems: any, modifiedGroups: any
	): void;
		setupAnimations(): void;
		uninitialize(): void;
		groupHeaderPosition: WinJS.UI.HeaderPosition;
		groupInfo: Function;
		itemInfo: Function;
		maximumRowsOrColumns: number;
		numberOfItemsPerItemsBlock: any;
		orientation: WinJS.UI.Orientation;
		supportedForProcessing: boolean
	}

	declare class Command extends AppBarCommand, ICommand {
		supportedForProcessing: boolean
	}

	declare class ContentDialog  {
		DismissalResult: {
		none: string,
		primary: string,
		secondary: string
	};
		supportedForProcessing: boolean;
		constructor(element?: HTMLElement, options?: any): this;
		element: HTMLElement;
		hidden: boolean;
		title: string;
		primaryCommandText: string;
		primaryCommandDisabled: boolean;
		secondaryCommandText: string;
		secondaryCommandDisabled: boolean;
		show(): Promise<ContentDialogHideInfo>;
		hide(result?: any): void;
		dispose(): void;
		addEventListener(type: string, listener: Function, useCapture?: boolean): void;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		onbeforeshow(eventInfo: Event): void;
		onaftershow(eventInfo: Event): void;
		onbeforehide(eventInfo: ContentDialogHideEvent): void;
		onafterhide(eventInfo: ContentDialogHideEvent): void
	}

	declare class DatePicker  {
		constructor(element?: HTMLElement, options?: any): this;
		onchange(eventInfo: CustomEvent): void;
		addEventListener(type: string, listener: Function, capture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		getInformation(startDate: any, endDate: any, calendar?: any, datePatterns?: any): any;
		removeEventListener(type: string, listener: Function, useCapture?: any): void;
		calendar: string;
		current: Date;
		datePattern: string;
		disabled: boolean;
		element: HTMLElement;
		maxYear: number;
		minYear: number;
		monthPattern: string;
		yearPattern: string;
		supportedForProcessing: boolean
	}

	declare class FlipView<T>  {
		constructor(element?: HTMLElement, options?: any): this;
		ondatasourcecountchanged(eventInfo: Event): void;
		onpagecompleted(eventInfo: CustomEvent): void;
		onpageselected(eventInfo: CustomEvent): void;
		onpagevisibilitychanged(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		count(): Promise<number>;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		forceLayout(): void;
		next(): boolean;
		previous(): boolean;
		removeEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		setCustomAnimations(animations: any): void;
		currentPage: number;
		element: HTMLElement;
		itemDataSource: IListDataSource<T>;
		itemSpacing: number;
		itemTemplate: any;
		orientation: string;
		supportedForProcessing: boolean;
		datasourceCountChangedEvent: string;
		pageCompletedEvent: string;
		pageSelectedEvent: string;
		pageVisibilityChangedEvent: string
	}

	declare class Flyout  {
		constructor(element?: HTMLElement, options?: any): this;
		onafterhide(eventInfo: Event): void;
		onaftershow(eventInfo: Event): void;
		onbeforehide(eventInfo: Event): void;
		onbeforeshow(eventInfo: Event): void;
		addEventListener(type: string, listener: Function, useCapture?: boolean): void;
		dispatchEvent(eventName: string, eventProperties: any): boolean;
		dispose(): void;
		hide(): void;
		show(anchor?: HTMLElement, placement?: string, alignment?: string): void;
		showAt(coordinates: {
		x: number,
		y: number
	}): void;
		showAt(mouseEventObj: MouseEvent): void;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		alignment: string;
		anchor: HTMLElement;
		disabled: boolean;
		element: HTMLElement;
		hidden: boolean;
		placement: string;
		supportedForProcessing: boolean
	}

	declare class GridLayout  {
		constructor(options?: any): this;
		dragLeave(): void;
		dragOver(): void;
		executeAnimations(): void;
		getAdjacent(currentItem: any, pressedKey: WinJS.Utilities.Key): any;
		hitTest(x: number, y: number): void;
		initialize(site: ILayoutSite2, groupsEnabled: boolean): void;
		itemsFromRange(firstPixel: number, lastPixel: number): void;
		layout(tree: any, changedRange: any, modifiedItems: any, modifiedGroups: any): void;
		setupAnimations(): void;
		uninitialize(): void;
		backdropColor: string;
		disableBackdrop: boolean;
		groupHeaderPosition: WinJS.UI.HeaderPosition;
		groupInfo: Function;
		itemInfo: Function;
		maximumRowsOrColumns: number;
		maxRows: number;
		numberOfItemsPerItemsBlock: any;
		orientation: WinJS.UI.Orientation;
		supportedForProcessing: boolean
	}

	declare class Hub  {
		constructor(element?: HTMLElement, options?: any): this;
		oncontentanimating(eventInfo: CustomEvent): void;
		onheaderinvoked(eventInfo: CustomEvent): void;
		onloadingstatechanged(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		forceLayout(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		element: HTMLElement;
		headerTemplate: any;
		indexOfFirstVisible: number;
		indexOfLastVisible: number;
		loadingState: string;
		orientation: Orientation;
		scrollPosition: number;
		sectionOnScreen: number;
		sections: WinJS.Binding.List<HubSection>;
		zoomableView: IZoomableView<any>;
		supportedForProcessing: boolean;
		AnimationType: {
		entrance: string,
		contentTransition: string,
		insert: string,
		remove: string
	};
		LoadingState: {
		loading: string,
		complete: string
	}
	}

	declare class HubSection  {
		constructor(element?: HTMLElement, options?: any): this;
		dispose(): void;
		contentElement: HTMLElement;
		element: HTMLElement;
		header: string;
		isHeaderStatic: boolean;
		isDeclarativeControlContainer: any;
		supportedForProcessing: boolean
	}

	declare class HtmlControl  {
		constructor(element?: HTMLElement, options?: any): this;
		supportedForProcessing: boolean
	}

	declare class ItemContainer  {
		constructor(element?: HTMLElement, options?: any): this;
		oninvoked(eventInfo: CustomEvent): void;
		onselectionchanged(eventInfo: CustomEvent): void;
		onselectionchanging(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		forceLayout(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		draggable: boolean;
		element: HTMLElement;
		selected: boolean;
		selectionDisabled: boolean;
		swipeBehavior: WinJS.UI.SwipeBehavior;
		swipeOrientation: Orientation;
		tapBehavior: TapBehavior;
		supportedForProcessing: boolean
	}

	declare class Layout  {
		supportedForProcessing: boolean
	}

	declare class ListLayout  {
		constructor(options?: any): this;
		dragLeave(): void;
		dragOver(): void;
		executeAnimations(): void;
		getAdjacent(currentItem: any, pressedKey: WinJS.Utilities.Key): any;
		hitTest(x: number, y: number): void;
		initialize(): void;
		itemsFromRange(firstPixel: number, lastPixel: number): void;
		layout(tree: any, changedRange: any, modifiedItems: any, modifiedGroups: any): void;
		setupAnimations(): void;
		uninitialize(): void;
		backdropColor: string;
		disableBackdrop: boolean;
		groupHeaderPosition: WinJS.UI.HeaderPosition;
		numberOfItemsPerItemsBlock: any;
		orientation: WinJS.UI.Orientation;
		supportedForProcessing: boolean
	}

	declare class ListView<T>  {
		constructor(element?: HTMLElement, options?: any): this;
		onaccessibilityannotationcomplete(eventInfo: CustomEvent): void;
		oncontentanimating(eventInfo: CustomEvent): void;
		ongroupheaderinvoked(eventInfo: CustomEvent): void;
		onitemdragbetween(eventInfo: CustomEvent): void;
		onitemdragchanged(eventInfo: CustomEvent): void;
		onitemdragdrop(eventInfo: CustomEvent): void;
		onitemdragend(eventInfo: CustomEvent): void;
		onitemdragenter(eventInfo: CustomEvent): void;
		onitemdragleave(eventInfo: CustomEvent): void;
		onitemdragstart(eventInfo: CustomEvent): void;
		oniteminvoked(eventInfo: CustomEvent): void;
		onkeyboardnavigating(eventInfo: CustomEvent): void;
		onloadingstatechanged(eventInfo: CustomEvent): void;
		onselectionchanged(eventInfo: CustomEvent): void;
		onselectionchanging(eventInfo: CustomEvent): void;
		onheadervisibilitychanged(eventInfo: CustomEvent): void;
		onfootervisibilitychanged(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		elementFromIndex(itemIndex: number): HTMLElement;
		ensureVisible(itemIndex: number): void;
		forceLayout(): void;
		indexOfElement(element: HTMLElement): number;
		loadMorePages(): void;
		recalculateItemPosition(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		triggerDispose(): void;
		automaticallyLoadPages: boolean;
		currentItem: IListViewItem;
		element: HTMLElement;
		groupDataSource: IListDataSource<T>;
		groupHeaderTapBehavior: GroupHeaderTapBehavior;
		groupHeaderTemplate: any;
		indexOfFirstVisible: number;
		indexOfLastVisible: number;
		itemDataSource: IListDataSource<T>;
		itemsDraggable: boolean;
		itemsReorderable: boolean;
		itemTemplate: any;
		layout: ILayout2;
		footer: HTMLElement;
		header: HTMLElement;
		loadingBehavior: string;
		loadingState: string;
		maxDeferredItemCleanup: number;
		pagesToLoad: number;
		pagesToLoadThreshold: number;
		maxLeadingPages: number;
		maxTrailingPages: number;
		resetGroupHeader: (header: any, element: HTMLElement) => void;
		resetItem: (item: T, element: HTMLElement) => void;
		scrollPosition: number;
		selection: ISelection<T>;
		selectionMode: SelectionMode;
		swipeBehavior: WinJS.UI.SwipeBehavior;
		tapBehavior: TapBehavior;
		zoomableView: IZoomableView<ListView<T>>;
		supportedForProcessing: boolean
	}

	declare class Pivot  {
		constructor(element?: HTMLElement, options?: any): this;
		onitemanimationend(eventInfo: Event): void;
		onitemanimationstart(eventInfo: Event): void;
		onselectionchanged(eventInfo: Event): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		forceLayout(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		element: HTMLElement;
		customLeftHeader: HTMLElement;
		customRightHeader: HTMLElement;
		items: Binding.List<PivotItem>;
		locked: boolean;
		selectedIndex: number;
		selectedItem: PivotItem;
		supportedForProcessing: boolean;
		title: string
	}

	declare class PivotItem  {
		constructor(element?: HTMLElement, options?: any): this;
		dispose(): void;
		contentElement: HTMLElement;
		element: HTMLElement;
		header: string;
		isDeclarativeControlContainer: any;
		supportedForProcessing: boolean
	}

	declare class Menu  {
		constructor(element?: HTMLElement, options?: any): this;
		onafterhide(eventInfo: Event): void;
		onaftershow(eventInfo: Event): void;
		onbeforehide(eventInfo: Event): void;
		onbeforeshow(eventInfo: Event): void;
		addEventListener(type: string, listener: Function, useCapture?: boolean): void;
		dispatchEvent(eventName: string, eventProperties: any): boolean;
		dispose(): void;
		getCommandById(id: string): MenuCommand;
		hide(): void;
		hideCommands(commands: any[], immediate?: boolean): void;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		show(anchor: HTMLElement, placement?: string, alignment?: string): void;
		showAt(coordinates: {
		x: number,
		y: number
	}): void;
		showAt(mouseEventObj: MouseEvent): void;
		showCommands(commands: any[], immediate?: boolean): void;
		showOnlyCommands(commands: any[], immediate?: boolean): void;
		alignment: string;
		anchor: HTMLElement;
		commands: MenuCommand[];
		disabled: boolean;
		element: HTMLElement;
		hidden: boolean;
		placement: string;
		supportedForProcessing: boolean
	}

	declare class MenuCommand  {
		constructor(element?: HTMLElement, options?: any): this;
		addEventListener(type: string, listener: Function, useCapture?: boolean): void;
		dispose(): void;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		disabled: boolean;
		element: HTMLElement;
		extraClass: string;
		flyout: Flyout;
		hidden: boolean;
		id: string;
		label: string;
		onclick: Function;
		selected: boolean;
		supportedForProcessing: boolean;
		type: string
	}

	declare class NavBar  {
		constructor(element?: HTMLElement, options?: any): this;
		onafterclose(eventInfo: Event): void;
		onafteropen(eventInfo: Event): void;
		onbeforeclose(eventInfo: Event): void;
		onbeforeopen(eventInfo: Event): void;
		onchildrenprocessed(eventInfo: Event): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		close(): void;
		hideCommands(commands: any[], immediate?: boolean): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		open(): void;
		showCommands(commands: any[], immediate?: boolean): void;
		showOnlyCommands(commands: any[], immediate?: boolean): void;
		closedDisplayMode: string;
		commands: AppBarCommand;
		element: HTMLElement;
		getCommandById(id: string): NavBarCommand;
		hidden: boolean;
		opened: boolean;
		placement: string;
		isDeclarativeControlContainer: any;
		supportedForProcessing: boolean
	}

	declare class NavBarCommand  {
		constructor(element?: HTMLElement, options?: any): this;
		oninvoked: any;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		element: HTMLElement;
		icon: string;
		label: string;
		location: any;
		splitButton: boolean;
		splitOpened: boolean;
		state: any;
		supportedForProcessing: boolean;
		tooltip: string
	}

	declare class NavBarContainer  {
		constructor(element?: HTMLElement, options?: any): this;
		oninvoked(eventInfo: CustomEvent): void;
		onsplittoggle(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		forceLayout(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		currentIndex: number;
		data: WinJS.Binding.List<NavBarCommand>;
		element: HTMLElement;
		fixedSize: boolean;
		layout: Orientation;
		maxRows: number;
		supportedForProcessing: boolean;
		template: WinJS.Binding.Template
	}

	declare class Rating  {
		constructor(element?: HTMLElement, options?: any): this;
		oncancel(eventInfo: Event): void;
		onchange(eventInfo: CustomEvent): void;
		onpreviewchange(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispose(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		averageRating: number;
		disabled: boolean;
		element: HTMLElement;
		enableClear: boolean;
		maxRating: number;
		supportedForProcessing: boolean;
		tooltipStrings: string[];
		userRating: number
	}

	declare class Repeater  {
		constructor(element?: HTMLElement, options?: any): this;
		onitemchanged(eventInfo: CustomEvent): void;
		onitemchanging(eventInfo: CustomEvent): void;
		oniteminserted(eventInfo: CustomEvent): void;
		oniteminserting(eventInfo: CustomEvent): void;
		onitemmoved(eventInfo: CustomEvent): void;
		onitemmoving(eventInfo: CustomEvent): void;
		onitemremoved(eventInfo: CustomEvent): void;
		onitemremoving(eventInfo: CustomEvent): void;
		onitemsloaded(eventInfo: CustomEvent): void;
		onitemsreloaded(eventInfo: CustomEvent): void;
		onitemsreloading(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		elementFromIndex(index: number): HTMLElement;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		data: WinJS.Binding.List<any>;
		element: HTMLElement;
		length: number;
		isDeclarativeControlContainer: any;
		supportedForProcessing: boolean;
		template: WinJS.Binding.Template
	}

	declare class SearchBox  {
		constructor(element?: HTMLElement, options?: any): this;
		onquerychanged(eventInfo: CustomEvent): void;
		onquerysubmitted(eventInfo: CustomEvent): void;
		onresultsuggestionchosen(eventInfo: CustomEvent): void;
		onsuggestionsrequested(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		setLocalContentSuggestionSettings(settings: any): void;
		chooseSuggestionOnEnter: boolean;
		disabled: boolean;
		element: HTMLElement;
		focusOnKeyboardInput: boolean;
		placeholderText: string;
		queryText: string;
		searchHistoryContext: string;
		searchHistoryDisabled: boolean;
		supportedForProcessing: boolean;
		createResultSuggestionImage(url: string): any
	}

	declare class SemanticZoom  {
		constructor(element?: HTMLElement, options?: any): this;
		onzoomchanged(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		forceLayout(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		setTimeoutAfterTTFF(callback: Function, delay: number): void;
		element: HTMLElement;
		enableButton: boolean;
		locked: boolean;
		supportedForProcessing: boolean;
		zoomedOut: boolean;
		zoomFactor: number;
		zoomedInItem: (any: any) => any;
		zoomedOutItem: (any: any) => any
	}

	declare class SettingsFlyout  {
		constructor(element?: HTMLElement, options?: any): this;
		onafterhide(eventInfo: Event): void;
		onaftershow(eventInfo: Event): void;
		onbeforehide(eventInfo: Event): void;
		onbeforeshow(eventInfo: Event): void;
		addEventListener(type: string, listener: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		hide(): void;
		populateSettings(e: CustomEvent): void;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		show(): void;
		show(): void;
		showSettings(id: string, path: any): void;
		supportedForProcessing: boolean;
		disabled: boolean;
		element: HTMLElement;
		hidden: boolean;
		settingsCommandId: string;
		width: string
	}

	declare class SplitView  {
		PanePlacement: {
		left: string,
		right: string,
		top: string,
		bottom: string
	};
		ClosedDisplayMode: {
		none: string,
		inline: string
	};
		OpenedDisplayMode: {
		inline: string,
		overlay: string
	};
		supportedForProcessing: boolean;
		constructor(element?: HTMLElement, options?: any): this;
		element: HTMLElement;
		paneElement: HTMLElement;
		contentElement: HTMLElement;
		panePlacement: string;
		closedDisplayMode: string;
		openedDisplayMode: string;
		paneOpened: boolean;
		openPane(): void;
		closePane(): void;
		dispose(): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		onbeforeopen(eventInfo: Event): void;
		onafteropen(eventInfo: Event): void;
		onbeforeclose(eventInfo: Event): void;
		onafterclose(eventInfo: Event): void
	}

	declare class SplitViewPaneToggle  {
		constructor(element?: HTMLButtonElement, options?: any): this;
		element: HTMLButtonElement;
		splitView: HTMLElement;
		dispose(): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		oninvoked(eventInfo: Event): void;
		supportedForProcessing: boolean
	}

	declare class SplitViewCommand  {
		constructor(element?: HTMLElement, options?: any): this;
		oninvoked(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		element: HTMLElement;
		icon: string;
		label: string;
		supportedForProcessing: boolean;
		tooltip: string
	}

	declare class StorageDataSource<T>  {
		constructor(query: any, options?: any): this;
		loadThumbnail(item: IItem<T>, image: HTMLImageElement): Promise<void>;
		addEventListener(type: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, details: any): boolean;
		removeEventListener(type: string, eventHandler: Function, useCapture?: any): void;
		supportedForProcessing: boolean
	}

	declare class TabContainer  {
		constructor(element: HTMLElement, options?: any): this;
		dispose(): void;
		childFocus: HTMLElement;
		supportedForProcessing: boolean;
		tabIndex: number
	}

	declare class TimePicker  {
		constructor(element?: HTMLElement, options?: any): this;
		onchange(eventInfo: CustomEvent): void;
		addEventListener(type: string, listener: Function, capture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		getInformation(clock: any, minuteIncrement: any, timerPatterns?: any): any;
		removeEventListener(type: string, listener: Function, useCapture?: any): void;
		clock: string;
		current: Date;
		disabled: boolean;
		element: HTMLElement;
		hourPattern: string;
		minuteIncrement: number;
		minutePattern: string;
		periodPattern: string;
		supportedForProcessing: boolean
	}

	declare class ToggleSwitch  {
		constructor(element?: HTMLElement, options?: any): this;
		onchange(eventInfo: Event): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		dispose(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		checked: boolean;
		disabled: boolean;
		element: HTMLElement;
		labelOff: string;
		labelOn: string;
		supportedForProcessing: boolean;
		title: string
	}

	declare class ToolBar  {
		ClosedDisplayMode: {
		compact: string,
		full: string
	};
		supportedForProcessing: boolean;
		element: HTMLElement;
		data: WinJS.Binding.List<ICommand>;
		closedDisplayMode: string;
		constructor(element?: HTMLElement, options?: any): this;
		dispose(): void;
		forceLayout(): void;
		open(): void;
		close(): void;
		getCommandById(id: string): ICommand;
		showOnlyCommands(commands: Array<string | ICommand>): void;
		opened: boolean;
		onbeforeopen: (eventInfo: CustomEvent) => void;
		onafteropen: (eventInfo: CustomEvent) => void;
		onbeforeclose: (eventInfo: CustomEvent) => void;
		onafterclose: (eventInfo: CustomEvent) => void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		removeEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(eventName: string, eventProperties: any): boolean
	}

	declare class Tooltip  {
		constructor(element?: HTMLElement, options?: any): this;
		onbeforeclose(eventInfo: CustomEvent): void;
		onbeforeopen(eventInfo: CustomEvent): void;
		onclosed(eventInfo: CustomEvent): void;
		onopened(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		close(): void;
		dispose(): void;
		open(type?: string): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		contentElement: HTMLElement;
		element: HTMLElement;
		extraClass: string;
		infotip: boolean;
		innerHTML: string;
		placement: string;
		supportedForProcessing: boolean
	}

	declare class ViewBox  {
		constructor(element?: HTMLElement, options?: any): this;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(eventName: string, eventProperties: any): boolean;
		dispose(): void;
		forceLayout(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		element: HTMLElement;
		supportedForProcessing: boolean
	}

	declare class VirtualizedDataSource<T>  {
		constructor(listDataAdapter: IListDataAdapter<T>, options?: any): this;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		supportedForProcessing: boolean
	}

	
}

declare module 'DOMEventMixin' {
			declare export function addEventListener(type: string, listener: Function, useCapture?: boolean): void

	declare export function dispatchEvent(type: string, eventProperties: any): boolean

	declare export function removeEventListener(type: string, listener: Function, useCapture?: boolean): void

		
}

declare module 'XYFocus' {
		declare export interface XYFocusOptions {
		focusRoot?: HTMLElement,
		historyRect?: IRect,
		referenceElement?: HTMLElement,
		referenceRect?: IRect
	}

	declare export interface IRect {
		left: number,
		right?: number,
		top: number,
		bottom?: number,
		height: number,
		width: number
	}

	declare export interface XYFocusEvent {
		detail: {
		nextFocusElement: HTMLElement,
		keyCode: number,
		previousFocusElement: HTMLElement
	}
	}

	declare export function addEventListener(type: string, handler: EventListener): void

	declare export function dispatchEvent(type: string, eventProperties: any): boolean

	declare export function removeEventListener(type: string, handler: EventListener): void

	declare export function findNextFocusElement(direction: string, options?: XYFocusOptions): HTMLElement

	declare export function findNextFocusElement(direction: "left", options?: XYFocusOptions): HTMLElement

	declare export function findNextFocusElement(direction: "right", options?: XYFocusOptions): HTMLElement

	declare export function findNextFocusElement(direction: "up", options?: XYFocusOptions): HTMLElement

	declare export function findNextFocusElement(direction: "down", options?: XYFocusOptions): HTMLElement

	declare export function moveFocus(direction: string, options?: XYFocusOptions): HTMLElement

	declare export function moveFocus(direction: "left", options?: XYFocusOptions): HTMLElement

	declare export function moveFocus(direction: "right", options?: XYFocusOptions): HTMLElement

	declare export function moveFocus(direction: "up", options?: XYFocusOptions): HTMLElement

	declare export function moveFocus(direction: "down", options?: XYFocusOptions): HTMLElement

	declare export function onfocuschanged(eventInfo: CustomEvent): void

	declare export function onfocuschanging(eventInfo: CustomEvent): void

		
}

declare module 'Fragments' {
			declare function cache(href: string): Promise<any>

	declare function clearCache(href: string): void

	declare function clearCache(href: HTMLElement): void

	declare function render(href: string, element?: HTMLElement): Promise<HTMLElement>

	declare function renderCopy(href: string, target?: HTMLElement): Promise<HTMLElement>

	declare function renderCopy(href: HTMLElement, target?: HTMLElement): Promise<HTMLElement>

		
}

declare module 'Pages' {
		declare interface IPageControlMembers {
		error(err: any): any,
		init(element: HTMLElement, options: any): any,
		load(uri: string): any,
		processed(element: HTMLElement, options: any): any,
		ready(element: HTMLElement, options: any): any,
		render(element: HTMLElement, options: any, loadResult: Promise<any>): void
	}

	declare function define(
		uri: string, members: IPageControlMembers
	): (
		element?: HTMLElement, options?: any, complete?: (page: any) => void, parentedPromise?: Promise<any>
	) => void

	declare function get(
		uri: string
	): (
		element?: HTMLElement, options?: any, complete?: (page: any) => void, parentedPromise?: Promise<any>
	) => void

	declare function render(
		uri: string, element?: HTMLElement, options?: any, parentedPromise?: Promise<any>
	): Promise<any>

		
}

declare module 'TrackTabBehavior' {
			declare function attach(element: HTMLElement, tabIndex: number): void

	declare function detach(element: HTMLElement): void

		
}

declare module 'Utilities' {
		declare interface ILogOptions {
		type?: string,
		action?: (message: string, tags: string, type: string) => void,
		excludeTags?: string,
		tags?: string
	}

	declare interface IPosition {
		left: number,
		top: number,
		width: number,
		height: number
	}

	declare function addClass<T>(e: T, name: string): T

	declare function children(element: HTMLElement): QueryCollection<HTMLElement>

	declare function convertToPixels(element: HTMLElement, value: string): number

	declare function createEventProperties(...events: string[]): any

	declare function data(element: HTMLElement): any

	declare function disposeSubTree(element: HTMLElement): void

	declare function empty<T>(element: T): T

	declare function eventWithinElement(element: HTMLElement, event: Event): boolean

	declare function formatLog(message: string, tag: string, type: string): string

	declare function getContentHeight(element: HTMLElement): number

	declare function getContentWidth(element: HTMLElement): number

	declare function getMember(name: string, root?: any): any

	declare function getPosition(element: HTMLElement): IPosition

	declare function getRelativeLeft(element?: HTMLElement, parent?: HTMLElement): number

	declare function getRelativeTop(element?: HTMLElement, parent?: HTMLElement): number

	declare function getScrollPosition(element: HTMLElement): {
		scrollLeft: number,
		scrollTop: number
	}

	declare function getTabIndex(element: HTMLElement): number

	declare function getTotalHeight(element: HTMLElement): number

	declare function getTotalWidth(element: HTMLElement): number

	declare function hasClass(e: HTMLElement, name: string): boolean

	declare function id(id: string): QueryCollection<HTMLElement>

	declare function insertAdjacentHTML(element: HTMLElement, position: string, text: string): void

	declare function insertAdjacentHTMLUnsafe(element: HTMLElement, position: string, text: string): void

	declare function markDisposable(element: HTMLElement, disposeImpl?: Function): void

	declare function markSupportedForProcessing<U>(func: U): U

	declare function query(query: any, element?: HTMLElement): QueryCollection<HTMLElement>

	declare function ready(callback?: Function, async?: boolean): Promise<any>

	declare function removeClass<T>(e: T, name: string): T

	declare function requireSupportedForProcessing<T>(value: T): T

	declare function setInnerHTML(element: HTMLElement, text: string): void

	declare function setInnerHTMLUnsafe(element: HTMLElement, text: string): void

	declare function setOuterHTML(element: HTMLElement, text: string): void

	declare function setOuterHTMLUnsafe(element: HTMLElement, text: string): void

	declare function setScrollPosition(
		element: HTMLElement, position: {
		scrollLeft: number,
		scrollTop: number
	}
	): void

	declare function startLog(options?: ILogOptions): void

	declare function startLog(tags?: string): void

	declare function stopLog(): void

	declare function toggleClass<T>(e: T, name: string): T

	declare class QueryCollection<T> extends Array<T> {
		addClass(name: string): QueryCollection<T>;
		clearStyle(name: string): QueryCollection<T>;
		control(ctor: any, options?: any): QueryCollection<T>;
		forEach(
		callbackFn: (value: T, index: number, array: T[]) => void, thisArg?: any
	): QueryCollection<T>;
		get(index: number): T;
		getAttribute(name: string): any;
		hasClass(name: string): boolean;
		include(items: T): void;
		include(items: T[]): void;
		include(items: HTMLCollection): void;
		listen(eventType: string, listener: Function, capture?: boolean): void;
		query(query: any): QueryCollection<T>;
		removeClass(name: string): QueryCollection<T>;
		removeEventListener(eventType: string, listener: Function, capture?: boolean): QueryCollection<T>;
		setAttribute(name: string, value: any): QueryCollection<T>;
		setStyle(name: string, value: any): QueryCollection<T>;
		template(
		templateElement: HTMLElement, data: any, renderDonePromiseCallback?: Function
	): QueryCollection<T>;
		toggleClass(name: string): QueryCollection<T>;
		supportedForProcessing: boolean;
		concat<U>(...items: U[]): T[];
		concat(...items: T[]): T[];
		join(separator?: string): string;
		pop(): T;
		push(...items: T[]): number;
		reverse(): T[];
		shift(): T;
		slice(start?: number, end?: number): T[];
		sort(compareFn?: (a: T, b: T) => number): T[];
		splice(start: number): T[];
		splice(start: number, deleteCount: number, ...items: T[]): T[];
		unshift(...items: T[]): number;
		indexOf(searchElement: T, fromIndex?: number): number;
		lastIndexOf(searchElement: T, fromIndex?: number): number;
		every(
		callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any
	): boolean;
		some(
		callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any
	): boolean;
		map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
		filter(
		callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any
	): T[];
		reduce(
		callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T
	): T;
		reduce<U>(
		callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U
	): U;
		reduceRight(
		callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T
	): T;
		reduceRight<U>(
		callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U
	): U;
		length: number;
		[n: number]: T
	}

	
}

declare module 'Scheduler' {
		declare interface IJob {
		cancel(): void,
		pause(): void,
		resume(): void,
		completed: boolean,
		id: number,
		name: string,
		owner: IOwnerToken,
		priority: Priority
	}

	declare interface IJobInfo {
		setPromise(promise: Promise<any>): void,
		setWork(work: Function): void,
		job: IJob,
		shouldYield: boolean
	}

	declare interface IOwnerToken {
		cancelAll(): void
	}

	declare function createOwnerToken(): IOwnerToken

	declare function execHigh<U>(callback: () => U): U

	declare function retrieveState(): string

	declare function requestDrain(priority?: Priority, name?: string): Promise<any>

	declare function schedule(
		work: (jobInfo: IJobInfo) => any, priority?: Priority, thisArg?: any, name?: string
	): IJob

	declare function schedulePromiseAboveNormal<U>(promiseValue?: U, jobName?: string): Promise<U>

	declare function schedulePromiseBelowNormal<U>(promiseValue?: U, jobName?: string): Promise<U>

	declare function schedulePromiseHigh<U>(promiseValue?: U, jobName?: string): Promise<U>

	declare function schedulePromiseIdle<U>(promiseValue?: U, jobName?: string): Promise<U>

	declare function schedulePromiseNormal<U>(promiseValue?: U, jobName?: string): Promise<U>

		
}