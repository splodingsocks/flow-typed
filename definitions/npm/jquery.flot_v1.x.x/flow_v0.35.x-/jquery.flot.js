

declare module 'jquery.flot' {
		declare interface JQueryStatic {
		plot: jquery.flot.plotStatic
	}

			
}

declare module 'flot' {
		declare interface plotOptions {
		colors?: any[],
		series?: seriesOptions,
		legend?: legendOptions,
		xaxis?: axisOptions,
		yaxis?: axisOptions,
		xaxes?: axisOptions[],
		yaxes?: axisOptions[],
		grid?: gridOptions,
		interaction?: interaction,
		hooks?: hooks
	}

	declare interface hooks {
		processOptions: {
		(plot: plot, options: plotOptions): void
	}[],
		processRawData: {
		(plot: plot, series: dataSeries, data: any[], datapoints: datapoints): void
	}[],
		processDatapoints: {
		(plot: plot, series: dataSeries, datapoints: datapoints): void
	}[],
		processOffset: {
		(plot: plot, offset: canvasPoint): void
	}[],
		drawBackground: {
		(plot: plot, context: CanvasRenderingContext2D): void
	}[],
		drawSeries: {
		(plot: plot, context: CanvasRenderingContext2D, series: dataSeries): void
	}[],
		draw: {
		(plot: plot, context: CanvasRenderingContext2D): void
	}[],
		bindEvents: {
		(plot: plot, eventHolder: JQuery): void
	}[],
		drawOverlay: {
		(plot: plot, context: CanvasRenderingContext2D): void
	}[],
		shutdown: {
		(plot: plot, eventHolder: JQuery): void
	}[]
	}

	declare interface interaction {
		redrawOverlayInterval?: number
	}

	declare interface gridOptions {
		show?: boolean,
		aboveData?: boolean,
		color?: any,
		backgroundColor?: any,
		margin?: any,
		labelMargin?: number,
		axisMargin?: number,
		markings?: any,
		borderWidth?: any,
		borderColor?: any,
		minBorderMargin?: number,
		clickable?: boolean,
		hoverable?: boolean,
		autoHighlight?: boolean,
		mouseActiveRadius?: number,
		tickColor?: any,
		markingsColor?: any,
		markingsLineWidth?: number
	}

	declare interface legendOptions {
		show?: boolean,
		labelFormatter?: (label: string, series: any) => string,
		labelBoxBorderColor?: any,
		noColumns?: number,
		position?: string,
		margin?: any,
		backgroundColor?: any,
		backgroundOpacity?: number,
		container?: JQuery,
		sorted?: any
	}

	declare interface seriesOptions {
		color?: any,
		label?: string,
		lines?: linesOptions,
		bars?: barsOptions,
		points?: pointsOptions,
		xaxis?: number,
		yaxis?: number,
		clickable?: boolean,
		hoverable?: boolean,
		shadowSize?: number,
		highlightColor?: any
	}

	declare interface dataSeries {
		data: any[]
	}

	declare interface axisOptions {
		show?: boolean,
		position?: string,
		mode?: string,
		monthNames?: string[],
		color?: any,
		tickColor?: any,
		font?: any,
		min?: number,
		max?: number,
		autoscaleMargin?: number,
		transform?: (v: number) => number,
		inverseTransform?: (v: number) => number,
		ticks?: any,
		tickSize?: any,
		minTickSize?: any,
		tickFormatter?: (t: number, a?: axis) => string,
		tickDecimals?: number,
		labelWidth?: number,
		labelHeight?: number,
		reserveSpace?: boolean,
		tickLength?: number,
		alignTicksWithAxis?: number
	}

	declare interface seriesTypeBase {
		show?: boolean,
		lineWidth?: number,
		fill?: any,
		fillColor?: any
	}

	declare interface linesOptions {
		steps?: boolean
	}

	declare interface barsOptions {
		barWidth?: number,
		align?: string,
		horizontal?: boolean
	}

	declare interface pointsOptions {
		radius?: number,
		symbol?: any
	}

	declare interface gradient {
		colors: any[]
	}

	declare interface item {
		datapoint: number[],
		dataIndex: number,
		series: dataSeries,
		seriesIndex: number,
		pageX: number,
		pageY: number
	}

	declare interface datapoints {
		points: number[],
		pointsize: number,
		format: datapointFormat[]
	}

	declare interface datapointFormat {
		x?: boolean,
		y?: boolean,
		number: boolean,
		required: boolean,
		defaultValue?: number
	}

	declare interface point {
		x: number,
		y: number
	}

	declare interface offset {
		left: number,
		top: number
	}

	declare interface canvasPoint {
		top: number,
		left: number,
		bottom?: number,
		right?: number
	}

	declare interface axes {
		xaxis: axis,
		yaxis: axis,
		x2axis?: axis,
		y2axis?: axis
	}

	declare interface axis {
		options: axisOptions,
		p2c(point: point): canvasPoint,
		c2p(canvasPoint: canvasPoint): point
	}

	declare interface plugin {
		init(options: plotOptions): any,
		options?: any,
		name?: string,
		version?: string
	}

	declare interface plot {
		highlight(series: dataSeries, datapoint: item): void,
		unhighlight(): void,
		unhighlight(series: dataSeries, datapoint: item): void,
		setData(data: any): void,
		setupGrid(): void,
		draw(): void,
		triggerRedrawOverlay(): void,
		width(): number,
		height(): number,
		offset(): JQueryCoordinates,
		pointOffset(point: point): offset,
		resize(): void,
		shutdown(): void,
		getData(): dataSeries[],
		getAxes(): axes,
		getXAxes(): axis[],
		getYAxes(): axis[],
		getPlaceholder(): JQuery,
		getCanvas(): HTMLCanvasElement,
		getPlotOffset(): canvasPoint,
		getOptions(): plotOptions
	}

	declare interface plotStatic {
		(placeholder: JQuery, data: dataSeries[], options?: plotOptions): plot,
		(placeholder: JQuery, data: any[], options?: plotOptions): plot,
		plugins: plugin[]
	}

			
}