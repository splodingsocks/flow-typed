

declare module 'bootstrap.v3.datetimepicker-3.0.0' {
		declare interface JQuery {
		datetimepicker(): JQuery,
		datetimepicker(options: BootstrapV3DatetimePicker.DatetimepickerOptions): JQuery,
		off(
		events: "dp.change", selector?: string, handler?: (eventobject: BootstrapV3DatetimePicker.DatetimepickerChangeEventObject) => any
	): JQuery,
		off(
		events: "dp.change", handler: (eventobject: BootstrapV3DatetimePicker.DatetimepickerChangeEventObject) => any
	): JQuery,
		on(
		events: "dp.change", selector: string, data: any, handler?: (eventobject: BootstrapV3DatetimePicker.DatetimepickerChangeEventObject) => any
	): JQuery,
		on(
		events: "dp.change", selector: string, handler: (eventobject: BootstrapV3DatetimePicker.DatetimepickerChangeEventObject) => any
	): JQuery,
		on(
		events: "dp.change", handler: (eventObject: BootstrapV3DatetimePicker.DatetimepickerChangeEventObject) => any
	): JQuery,
		off(
		events: "dp.show", selector?: string, handler?: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any
	): JQuery,
		off(
		events: "dp.show", handler: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any
	): JQuery,
		on(
		events: "dp.show", selector: string, data: any, handler?: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any
	): JQuery,
		on(
		events: "dp.show", selector: string, handler: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any
	): JQuery,
		on(
		events: "dp.show", handler: (eventObject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any
	): JQuery,
		off(
		events: "dp.hide", selector?: string, handler?: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any
	): JQuery,
		off(
		events: "dp.hide", handler: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any
	): JQuery,
		on(
		events: "dp.hide", selector: string, data: any, handler?: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any
	): JQuery,
		on(
		events: "dp.hide", selector: string, handler: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any
	): JQuery,
		on(
		events: "dp.hide", handler: (eventObject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any
	): JQuery,
		off(
		events: "dp.error", selector?: string, handler?: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any
	): JQuery,
		off(
		events: "dp.error", handler: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any
	): JQuery,
		on(
		events: "dp.error", selector: string, data: any, handler?: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any
	): JQuery,
		on(
		events: "dp.error", selector: string, handler: (eventobject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any
	): JQuery,
		on(
		events: "dp.error", handler: (eventObject: BootstrapV3DatetimePicker.DatetimepickerEventObject) => any
	): JQuery,
		data(key: "DateTimePicker"): BootstrapV3DatetimePicker.Datetimepicker
	}

			
}

declare module 'npm$namespace$BootstrapV3DatetimePicker' {
		declare interface DatetimepickerChangeEventObject {
		oldDate: moment.Moment
	}

	declare interface DatetimepickerEventObject {
		date: moment.Moment
	}

	declare interface DatetimepickerIcons {
		time?: string,
		date?: string,
		up?: string,
		down?: string
	}

	declare interface DatetimepickerOptions {
		pickDate?: boolean,
		pickTime?: boolean,
		useMinutes?: boolean,
		useSeconds?: boolean,
		useCurrent?: boolean,
		minuteStepping?: number,
		minDate?: moment.Moment | Date | string,
		maxDate?: moment.Moment | Date | string,
		showToday?: boolean,
		collapse?: boolean,
		language?: string,
		defaultDate?: moment.Moment | Date | string,
		disabledDates?: Array<moment.Moment | Date | string>,
		enabledDates?: Array<moment.Moment | Date | string>,
		icons?: DatetimepickerIcons,
		useStrict?: boolean,
		direction?: string,
		sideBySide?: boolean,
		daysOfWeekDisabled?: Array<number>,
		calendarWeeks?: boolean,
		format?: string | boolean,
		locale?: string,
		showTodayButton?: boolean,
		viewMode?: string,
		inline?: boolean,
		toolbarPlacement?: string,
		showClear?: boolean,
		ignoreReadonly?: boolean
	}

	declare interface Datetimepicker {
		date(date: moment.Moment | Date | string): void,
		date(): moment.Moment,
		minDate(date: moment.Moment | Date | string): void,
		minDate(): moment.Moment | boolean,
		maxDate(date: moment.Moment | Date | string): void,
		maxDate(): moment.Moment | boolean,
		show(): void,
		disable(): void,
		enable(): void,
		destroy(): void,
		toggle(): void
	}

			
}