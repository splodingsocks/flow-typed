

declare module 'Microsoft.Maps' {
					
}

declare module 'Maps' {
		declare export interface KeyEventArgs {
		altKey: boolean,
		ctrlKey: boolean,
		eventName: boolean,
		handled: boolean,
		keyCode: string,
		originalEvent: any,
		shiftKey: boolean
	}

	declare export interface ZoomRange {
		min: number,
		max: number
	}

	declare export interface MapModeOptions {
		shouldClipPolygons?: boolean,
		drawShapesInSingleLayer?: boolean
	}

	declare export interface MapOptions {
		backgroundColor?: Color,
		credentials?: string,
		customizeOverlays?: boolean,
		disableBirdseye?: boolean,
		disableKeyboardInput?: boolean,
		disableMouseInput?: boolean,
		disablePanning?: boolean,
		disableTouchInput?: boolean,
		disableUserInput?: boolean,
		disableZooming?: boolean,
		enableClickableLogo?: boolean,
		enableSearchLogo?: boolean,
		fixedMapPosition?: boolean,
		height?: number,
		inertiaIntensity?: number,
		navigationBarMode?: number,
		showBreadcrumb?: boolean,
		showCopyright?: boolean,
		showDashboard?: boolean,
		showMapTypeSelector?: boolean,
		showScalebar?: boolean,
		theme?: any,
		tileBuffer?: number,
		useInertia?: boolean,
		width?: number,
		center?: Location,
		zoom?: number,
		mapTypeId?: MapTypeId
	}

	declare export interface ViewOptions {
		animate?: boolean,
		bounds?: LocationRect,
		center?: Location,
		centerOffset?: Point,
		heading?: number,
		labelOverlay?: LabelOverlay,
		mapTypeId?: string,
		padding?: number,
		zoom?: number
	}

	declare export interface EntityChangeArgs {
		collection: EntityCollection,
		entity: Entity
	}

	declare export interface EntityCollectionOptions {
		bubble?: boolean,
		visible?: boolean,
		zIndex?: number
	}

	declare export interface Action {
		label?: string,
		icon?: string,
		eventHandler: (args?: any) => void
	}

	declare export interface InfoboxOptions {
		actions?: Array<Action>,
		description?: string,
		htmlContent?: string,
		id?: string,
		location?: Location,
		offset?: Point,
		showCloseButton?: boolean,
		showPointer?: boolean,
		pushpin?: Pushpin,
		title?: string,
		titleAction?: {
		label?: string,
		eventHandler: (mouseEvent?: MouseEvent) => void
	},
		titleClickHandler?: (mouseEvent?: MouseEvent) => void,
		typeName?: InfoboxType,
		visible?: boolean,
		width?: number,
		height?: number
	}

	declare export interface Entity {
		
	}

	declare export interface PolylineOptions {
		strokeColor?: Color,
		strokeDashArray?: string,
		strokeThickness?: number,
		visible?: boolean
	}

	declare export interface PolygonOptions {
		fillColor?: Color,
		infobox?: Infobox,
		strokeColor?: Color,
		strokeDashArray?: string,
		strokeThickness?: number,
		visible?: boolean
	}

	declare export interface PushpinOptions {
		anchor?: Point,
		draggable?: boolean,
		height?: number,
		htmlContent?: string,
		icon?: string,
		infobox?: Infobox,
		state?: EntityState,
		text?: string,
		textOffset?: Point,
		typeName?: string,
		visible?: boolean,
		width?: number,
		zIndex?: number
	}

	declare export interface TileSourceOptions {
		height?: number,
		uriConstructor: any,
		width?: number
	}

	declare export interface TileLayerOptions {
		animationDisplay?: AnimationVisibility,
		downloadTimeout?: number,
		mercator?: TileSource,
		opacity?: number,
		visible?: boolean,
		zIndex?: number
	}

	declare export interface PositionOptionsErrorCallbackResult {
		internalError: PositionError,
		errorCode: number
	}

	declare export interface PositionOptionsSuccessCallbackResult {
		center: Location,
		position: Position
	}

	declare export interface PositionOptions {
		enableHighAccuracy?: boolean,
		errorCallback?: (result: PositionOptionsErrorCallbackResult) => void,
		showAccuracyCircle?: boolean,
		timeout?: number,
		updateMapView?: boolean,
		maximumAge?: number,
		successCallback?: (result: PositionOptionsSuccessCallbackResult) => void
	}

	declare export interface PositionCircleOptions {
		polygonOptions: PolygonOptions,
		showOnMap?: boolean
	}

	declare export interface ModuleOptions {
		callback?: () => void,
		styleURLS?: Array<string>,
		culture?: string,
		homeRegion?: string
	}

	declare export function loadModule(moduleKey: string, options?: ModuleOptions): void

	declare export function moduleLoaded(moduleKey: string): void

	declare export function registerModule(moduleKey: string, scriptUrl: string, options?: ModuleOptions): void

	declare export class Location  {
		constructor(latitude: number, longitude: number, altitude?: number, altitudeReference?: AltitudeReference): this;
		altitude: number;
		altitudeReference: AltitudeReference;
		latitude: number;
		longitude: number;
		areEqual(location1: Location, location2: Location): boolean;
		normalizeLongitude(longitude: number): number;
		clone(): Location;
		toString(): string
	}

	declare export class LocationRect  {
		constructor(center: Location, width: number, height: number): this;
		center: Location;
		height: number;
		width: number;
		fromCorners(northwest: Location, southeast: Location): LocationRect;
		fromEdges(
		north: number, west: number, south: number, east: number, altitude: number, altitudeReference: AltitudeReference
	): LocationRect;
		fromLocations(locations: Array<Location>): LocationRect;
		fromString(value: string): LocationRect;
		clone(): LocationRect;
		contains(location: Location): boolean;
		getEast(): number;
		getNorth(): number;
		getNorthwest(): Location;
		getSouth(): number;
		getSoutheast(): Location;
		getWest(): number;
		intersects(rect: LocationRect): boolean;
		toString(): string
	}

	declare export class Point  {
		constructor(x: number, y: number): this;
		x: number;
		y: number;
		areEqual(p1: Point, p2: Point): boolean;
		clone(p: Point): Point;
		clone(): Point;
		toString(): string
	}

	declare export class Events  {
		addHandler(target: any, eventName: string, handler: (e: any) => void): any;
		addThrottledHandler(
		target: any, eventName: string, handler: (e: any) => void, throttleInterval: number
	): any;
		hasHandler(target: any, eventName: string): boolean;
		invoke(target: any, eventName: string, args: any): void;
		removeHandler(handlerId: any): void
	}

	declare export class Map  {
		constructor(containerElement: HTMLElement, options?: MapOptions): this;
		constructor(containerElement: HTMLElement, options?: ViewOptions): this;
		entities: EntityCollection;
		getVersion(): string;
		blur(): void;
		dispose(): void;
		focus(): void;
		getBounds(): LocationRect;
		getCenter(): Location;
		getCopyrights(callback: (copyrights: Array<string>) => void): void;
		getCredentials(callback: (credentials: Array<string>) => void): void;
		getHeading(): string;
		getHeight(): number;
		getImageryId: string;
		getMapTypeId(): string;
		getMetersPerPixel(): number;
		getMode(): MapMode;
		getModeLayer(): HTMLElement;
		getOptions(): MapOptions;
		getPageX(): number;
		getPageY(): number;
		getRootElement(): HTMLElement;
		getTargetBounds(): LocationRect;
		getTargetCenter(): Location;
		getTargetHeading(): number;
		getTargetMetersPerPixel(): number;
		getTargetZoom(): number;
		getUserLayer(): HTMLElement;
		getViewportX(): number;
		getViewportY(): number;
		getWidth(): number;
		getZoom(): number;
		getZoomRange(): ZoomRange;
		isDownloadingTiles(): boolean;
		isMercator(): boolean;
		isRotationEnabled(): boolean;
		setMapType(mapTypeId: MapTypeId): void;
		setOptions(options: MapOptions): void;
		setView(options: ViewOptions): void;
		tryLocationToPixel(locations: Location, reference?: PixelReference): Point;
		tryLocationToPixel(locations: Array<Location>, reference?: PixelReference): Array<Point>;
		tryPixelToLocation(points: Point, reference?: PixelReference): Location;
		tryPixelToLocation(points: Array<Point>, reference?: PixelReference): Array<Location>
	}

	declare export class MapMode  {
		getDrawShapesInSingleLayer(): boolean;
		getShouldClipPolygons(): boolean;
		setOptions(options: MapModeOptions): void;
		setViewChangeEndDelay(delay: number): void
	}

	declare export class MouseEventArgs  {
		eventName: string;
		handled: boolean;
		isPrimary: boolean;
		isSecondary: boolean;
		isTouchEvent: boolean;
		originalEvent: any;
		pageX: number;
		pageY: number;
		target: any;
		targetType: string;
		wheelDelta: number;
		getX(): number;
		getY(): number
	}

	declare export class Color  {
		constructor(alpha: number, red: number, green: number, blue: number): this;
		a: number;
		r: number;
		g: number;
		b: number;
		clone(color: Color): Color;
		fromHex(hex: string): Color;
		clone(): Color;
		getOpacity(): number;
		toHex(): string;
		toString(): string
	}

	declare export class EntityCollection  {
		constructor(options?: EntityCollectionOptions): this;
		clear(): void;
		get(index: number): Entity;
		getLength(): number;
		getVisible(): boolean;
		getZIndex(): number;
		indexOf(entity: Entity): number;
		insert(entity: Entity, index: number): void;
		pop(): Entity;
		push(entity: Entity): void;
		remove(entity: Entity): Entity;
		removeAt(index: number): Entity;
		setOptions(options: EntityCollectionOptions): void;
		toString(): string
	}

	declare export class Infobox  {
		constructor(location: Location, options?: InfoboxOptions): this;
		getActions(): any;
		getAnchor(): Point;
		getDescription(): string;
		getHeight(): number;
		getHtmlContent(): string;
		getId(): string;
		getLocation(): Location;
		getOffset(): Point;
		getOptions(): InfoboxOptions;
		getShowCloseButton(): boolean;
		getShowPointer(): boolean;
		getTitle(): string;
		getTitleAction(): any;
		getTitleClickHandler(): (mouseEvent?: MouseEvent) => void;
		getVisible(): boolean;
		getWidth(): number;
		getZIndex(): number;
		setHtmlContent(content: string): void;
		setLocation(location: Location): void;
		setMap(map: Map): void;
		setOptions(options: InfoboxOptions): void;
		toString(): string
	}

	declare export class Polyline extends Entity {
		constructor(locations: Array<Location>, options?: PolylineOptions): this;
		getLocations(): Array<Location>;
		getStrokeColor(): Color;
		getStrokeDashArray(): string;
		getStrokeThickness(): number;
		getVisible(): boolean;
		setLocations(locations: Array<Location>): void;
		setOptions(options: PolylineOptions): void;
		toString(): string
	}

	declare export class Position  {
		coords: Coordinates;
		timestamp: string
	}

	declare export class Polygon extends Entity {
		constructor(locations: Array<Location>, options?: PolygonOptions): this;
		getFillColor(): Color;
		getLocations(): Array<Location>;
		getStrokeColor(): Color;
		getStrokeDashArray(): string;
		getStrokeThickness(): number;
		getVisible(): boolean;
		setLocations(locations: Location[]): void;
		setOptions(options: PolylineOptions): void;
		toString(): string
	}

	declare export class Pushpin extends Entity {
		constructor(location: Location, options?: PushpinOptions): this;
		getAnchor(): Point;
		getIcon(): string;
		getHeight(): number;
		getLocation(): Location;
		getText(): string;
		getTextOffset(): Point;
		getTypeName(): string;
		getVisible(): boolean;
		getWidth(): number;
		getZIndex(): number;
		setLocation(location: Location): void;
		setOptions(options: PushpinOptions): void;
		toString(): string
	}

	declare export class TileLayer extends Entity {
		constructor(options: TileLayerOptions): this;
		getOpacity(): number;
		getTileSource(projection: string): TileSource;
		getZIndex(): number;
		setOptions(options: TileLayerOptions): void;
		toString(): string
	}

	declare export class TileSource  {
		constructor(options: TileSourceOptions): this;
		getHeight(): number;
		getUriConstructor(): string;
		getWidth(): string;
		toString(): string
	}

	declare export class Coordinates  {
		accuracy: number;
		altitude: number;
		altitudeAccuracy: number;
		heading: number;
		latitude: number;
		longitude: number
	}

	declare export class GeoLocationProvider  {
		constructor(map: Map): this;
		addAccuracyCircle(
		center: Location, radiusInMeters: number, segments: number, options: PositionCircleOptions
	): void;
		cancelCurrentRequest(): void;
		getCurrentPosition(options?: PositionOptions): void;
		removeAccuracyCircle(): void
	}

	declare export class PositionError  {
		errorCode: number;
		internalError: string
	}

	
}