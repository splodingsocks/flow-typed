

declare module 'Microsoft.Maps.VenueMaps' {
					
}

declare module 'VenueMaps' {
		declare export interface MouseResponse {
		eventArgs: MouseEventArgs
	}

	declare export interface PrimitiveResponse {
		eventArgs: Primitive
	}

	declare export interface Directory {
		addToDOM(
		div: HTMLElement, sortOrder: DirectorySortOrder, to_group_or_not: DirectoryGrouping
	): void,
		createUIElements(): void,
		handleMouseClick(e: (response: MouseResponse) => void): void,
		handleMouseClick(e: (response: PrimitiveResponse) => void): void,
		handleMouseOut(e: (response: MouseResponse) => void): void,
		handleMouseOut(e: (response: PrimitiveResponse) => void): void,
		handleMouseOver(e: (response: MouseResponse) => void): void,
		handleMouseOver(e: (response: PrimitiveResponse) => void): void,
		isInDOM(): boolean,
		removeFromDOM(): void,
		setHeight(height: number): void
	}

	declare export interface Floor {
		name: string,
		primitives: Array<Primitive>,
		zoomRange: Array<number>
	}

	declare export interface Footprint {
		polygons: Array<Polygon>,
		zoomRange: Array<number>
	}

	declare export interface Metadata {
		CenterLatitude: number,
		CenterLongitude: number,
		DefaultFloor: string,
		FloorHeader: string,
		Floors: Array<Floor>,
		Footprint: Footprint,
		MapId: string,
		MapType: string,
		Name: string,
		YpId: string
	}

	declare export interface NearbyVenue {
		distance: number,
		metadata: Metadata
	}

	declare export interface NearbyVenueOptions {
		callback?: (maps: Array<VenueMap>) => any,
		location?: Location,
		map?: Map,
		radius?: number
	}

	declare export interface Polygon {
		bounds: LocationRect,
		center: Location,
		locations: Array<Location>
	}

	declare export interface Primitive {
		bounds: LocationRect,
		businessId: string,
		categoryId: string,
		categoryName: string,
		center: Location,
		floor: Floor,
		id: string,
		locations: Array<Location>,
		name: string,
		highlight(): void,
		unhighlight(): void
	}

	declare export interface VenueMap {
		address: string,
		bestMapView: ViewOptions,
		businessId: string,
		center: Location,
		defaultFloor: string,
		directory: Directory,
		floorHeader: string,
		floors: Array<Floor>,
		footprint: Footprint,
		id: string,
		name: string,
		phoneNumber: string,
		type: string,
		dispose(): void,
		getActiveFloor(): string,
		hide(): void,
		setActiveFloor(floor: string): void,
		show(): void
	}

	declare export interface VenueMapCreationOptions {
		error: (errorCode: number, args: any) => any,
		success: (venueMap: VenueMap, args: any) => any,
		venueMapId: string
	}

		declare export class VenueMapFactory  {
		constructor(map: Map): this;
		create(options: VenueMapCreationOptions): void;
		getNearbyVenues(options: NearbyVenueOptions): void
	}

	
}