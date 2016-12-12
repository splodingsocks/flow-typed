

declare module 'rx-dom' {
					
}

declare module 'DOM' {
		declare export interface AjaxSettings {
		async?: boolean,
		body?: string,
		crossDomain?: boolean,
		headers?: any,
		method?: string,
		password?: string,
		progressObserver?: Rx.Observer<any>,
		responseType?: string,
		url?: string,
		user?: string
	}

	declare export interface AjaxSuccessResponse {
		response: any,
		status: number,
		responseType: string,
		xhr: XMLHttpRequest,
		originalEvent: Event
	}

	declare export interface AjaxErrorResponse {
		type: string,
		status: number,
		xhr: XMLHttpRequest,
		originalEvent: Event
	}

	declare export interface JsonpSettings {
		async?: boolean,
		jsonp?: string,
		jsonpCallback?: string,
		url?: string
	}

	declare export interface JsonpSuccessResponse {
		response: any,
		status: number,
		responseType: string,
		originalEvent: Event
	}

	declare export interface JsonpErrorResponse {
		type: string,
		status: number,
		originalEvent: Event
	}

	declare export interface GeolocationOptions {
		enableHighAccuracy?: boolean,
		timeout?: number,
		maximumAge?: number
	}

	declare function fromEvent<T>(
		element: any, eventName: string, selector?: Function, useCapture?: boolean
	): Rx.Observable<T>

	declare function ready(): Rx.Observable<any>

	declare function blur(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<FocusEvent>

	declare function change(element: Element, selector?: Function): Rx.Observable<Event>

	declare function click(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<MouseEvent>

	declare function contextmenu(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<MouseEvent>

	declare function dblclick(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<MouseEvent>

	declare function error(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<Event>

	declare function focus(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<FocusEvent>

	declare function focusin(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<MouseEvent>

	declare function focusout(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<MouseEvent>

	declare function keydown(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<KeyboardEvent>

	declare function keypress(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<KeyboardEvent>

	declare function keyup(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<KeyboardEvent>

	declare function load(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<UIEvent>

	declare function mousedown(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<MouseEvent>

	declare function mouseenter(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<MouseEvent>

	declare function mouseleave(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<MouseEvent>

	declare function mousemove(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<MouseEvent>

	declare function mouseout(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<MouseEvent>

	declare function mouseover(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<MouseEvent>

	declare function mouseup(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<MouseEvent>

	declare function resize(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<UIEvent>

	declare function scroll(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<UIEvent>

	declare function select(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<Event>

	declare function submit(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<Event>

	declare function unload(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<Event>

	declare function pointerdown(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<PointerEvent>

	declare function pointerenter(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<PointerEvent>

	declare function pointerleave(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<PointerEvent>

	declare function pointermove(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<PointerEvent>

	declare function pointerout(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<PointerEvent>

	declare function pointerover(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<PointerEvent>

	declare function pointerup(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<PointerEvent>

	declare function touchcancel(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<TouchEvent>

	declare function touchend(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<TouchEvent>

	declare function touchmove(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<TouchEvent>

	declare function touchstart(
		element: Element, selector?: Function, useCapture?: boolean
	): Rx.Observable<TouchEvent>

	declare function ajax(url: string): Rx.Observable<AjaxSuccessResponse>

	declare function ajax(settings: AjaxSettings): Rx.Observable<AjaxSuccessResponse>

	declare function get(url: string): Rx.Observable<AjaxSuccessResponse>

	declare function getJSON(url: string): Rx.Observable<string>

	declare function post(url: string, body: any): Rx.Observable<AjaxSuccessResponse>

	declare function jsonpRequest(url: string): Rx.Observable<string>

	declare function jsonpRequest(settings: JsonpSettings): Rx.Observable<JsonpSuccessResponse>

	declare function fromEventSource<T>(url: string, openObservable?: Rx.Observer<T>): Rx.Observable<T>

	declare function fromWebSocket(
		url: string, protocol: string, openObserver?: Rx.Observer<Event>, closingObserver?: Rx.Observer<CloseEvent>
	): Rx.Subject<MessageEvent>

	declare function fromWebWorker(url: string): Rx.Subject<string>

	declare function fromMutationObserver(target: Node, options: MutationObserverInit): Rx.Observable<MutationEvent>

		
}

declare module 'geolocation' {
			declare function getCurrentPosition(geolocationOptions?: GeolocationOptions): Rx.Observable<Position>

	declare function watchPosition(geolocationOptions?: GeolocationOptions): Rx.Observable<Position>

		
}

declare module 'rx.DOM' {
					


}