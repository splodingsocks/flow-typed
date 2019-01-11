// Based on https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md

declare module 'react-datepicker' {
  declare type Props = {|
    allowSameDay?: boolean,
    autoComplete?: string,
    autoFocus?: boolean,
    calendarClassName?: string,
    children?: Node,
    className?: string,
    clearButtonTitle?: string,
    customInput?: Node | React$Element<*>,
    customInputRef?: string,
    dateFormat?: string | Array<string>,
    dateFormatCalendar?: string,
    dayClassName?: () => ?string,
    disabled?: boolean,
    disabledKeyboardNavigation?: boolean,
    dropdownMode?: 'scroll' | 'select',
    endDate?: Date,
    excludeDates?: Array<Date>,
    excludeTimes?: Array<Date>,
    filterDate?: () => boolean,
    fixedHeight?: boolean,
    forceShowMonthNavigation?: boolean,
    formatWeekNumber?: () => string,
    highlightDates?: Array<Date>,
    id?: string,
    includeDates?: Array<Date>,
    includeTimes?: Array<Date>,
    injectTimes?: Array<Date>,
    inline?: boolean,
    isClearable?: boolean,
    locale?: string,
    maxDate?: Date,
    maxTime?: Date,
    minDate?: Date,
    minTime?: Date,
    monthsShown?: number,
    name?: string,
    onBlur?: () => void,
    onChange: moment$Moment => void,
    onChangeRaw?: () => void,
    onClickOutside?: Event => void,
    onFocus?: (SyntheticEvent<>) => void,
    onKeyDown?: () => void,
    onMonthChange?: moment$Moment => void,
    onYearChange?: moment$Moment => void,
    onSelect?: moment$Moment => void,
    onWeekSelect?: moment$Moment => void,
    openToDate?: Date,
    peekNextMonth?: boolean,
    placeholderText?: string,
    popperClassName?: string,
    popperContainer?: () => Node,
    popperModifiers?: {},
    popperPlacement?: 'auto' | 'top' | 'right' | 'bottom' | 'left',
    readOnly?: boolean,
    required?: boolean,
    scrollableYearDropdown?: boolean,
    selected?: Date,
    selectsEnd?: boolean,
    selectsStart?: boolean,
    shouldCloseOnSelect?: boolean,
    showMonthDropdown?: boolean,
    showTimeSelect?: boolean,
    showWeekNumbers?: boolean,
    showYearDropdown?: boolean,
    startDate?: Date,
    startOpen?: boolean,
    tabIndex?: number,
    timeFormat?: string,
    timeIntervals?: number,
    title?: string,
    todayButton?: Node,
    useWeekdaysShort?: boolean,
    utcOffset?: number | string,
    value?: string,
    weekLabel?: string,
    withPortal?: boolean,
    yearDropdownItemNumber?: number
  |};

  declare class Datepicker extends React$Component<Props> {}

  declare module.exports: typeof Datepicker;
}
