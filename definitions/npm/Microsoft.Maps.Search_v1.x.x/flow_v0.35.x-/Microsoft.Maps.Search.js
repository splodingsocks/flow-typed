

declare module 'Microsoft.Maps.Search' {
					
}

declare module 'Search' {
		declare export interface Address {
		addressLine: string,
		adminDistrict: string,
		countryRegion: string,
		district: string,
		formattedAddress: string,
		locality: string,
		postalCode: string,
		postalTown: string
	}

	declare export interface GeocodeLocation {
		location: Location,
		name: string,
		precision: LocationPrecision
	}

	declare export interface GeocodeRequestOptions {
		bounds?: LocationRect,
		callback?: (result: GeocodeResult, userData: any) => any,
		count: number,
		errorCallback?: (options: GeocodeRequestOptions) => any,
		timeout?: number,
		userData?: any,
		where: string
	}

	declare export interface GeocodeResult {
		parsedAddress: Address,
		parsedKeyword: string,
		parsedSeparator: string,
		results: Array<PlaceResult>
	}

	declare export interface PlaceResult {
		bestView: LocationRect,
		location: GeocodeLocation,
		locations: Array<GeocodeLocation>,
		matchCode: MatchCode,
		matchConfidence: MatchConfidence,
		name: string
	}

	declare export interface ReverseGeocodeRequestOptions {
		callback?: (result: PlaceResult, userData: any) => any,
		errorCallback?: (options: ReverseGeocodeRequestOptions) => any,
		location?: Location,
		timeout?: number,
		userData?: any
	}

	declare export interface SearchParseResult {
		keyword: string,
		location: GeocodeLocation,
		matchConfidence: MatchConfidence
	}

	declare export interface SearchRegion {
		address: Address,
		geocodeLocations: Array<GeocodeLocation>,
		explicitLocation: GeocodeLocation,
		mapBounds: LocationRect,
		matchCode: MatchCode,
		matchConfidence: MatchConfidence,
		source: string
	}

	declare export interface SearchRequestOptions {
		callback?: (result: SearchResponse, userData: any) => any,
		count: number,
		errorCallback?: (options: SearchRequestOptions) => any,
		query?: string,
		startIndex?: number,
		timeout?: number,
		entityType?: string,
		userData?: any,
		what?: string,
		where?: string
	}

	declare export interface SearchResponse {
		alternateSearchRegions: Array<SearchRegion>,
		hasMore: boolean,
		parseResults: Array<SearchParseResult>,
		responseSummary: SearchResponseSummary,
		searchRegion: SearchRegion,
		searchResults: Array<SearchResult>
	}

	declare export interface SearchResponseSummary {
		authResultCode: number,
		copyright: string,
		errorMessage: string,
		statusCode: number,
		traceId: number
	}

	declare export interface SearchResult {
		address: Address,
		city: string,
		country: string,
		entityType: string,
		hoursOfOperation: string,
		id: number,
		location: Location,
		name: string,
		phone: string,
		postalCode: string,
		reviewCount: number,
		userRating: number,
		website: string
	}

		declare export class SearchManager  {
		constructor(map: Map): this;
		geocode(request: GeocodeRequestOptions): void;
		reverseGeocode(request: ReverseGeocodeRequestOptions): void;
		search(request: SearchRequestOptions): void
	}

	
}