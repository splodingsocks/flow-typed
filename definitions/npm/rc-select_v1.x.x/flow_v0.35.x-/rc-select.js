

declare module 'rc-select' {
					declare module.exports: undefined


}

declare module 'npm$namespace$RcSelect' {
		declare interface SelectProps {
		className?: string,
		prefixCls?: string,
		animation?: string,
		transitionName?: string,
		choiceTransitionName?: string,
		dropdownMatchSelectWidth?: boolean,
		dropdownClassName?: string,
		dropdownStyle?: {
		[key: string]: string
	},
		dropdownMenuStyle?: {
		[key: string]: string
	},
		notFoundContent?: string,
		showSearch?: boolean,
		allowClear?: boolean,
		tags?: boolean,
		maxTagTextLength?: number,
		combobox?: boolean,
		multiple?: boolean,
		disabled?: boolean,
		filterOption?: boolean,
		optionFilterProp?: string,
		optionLabelProp?: string,
		defaultValue?: string | Array<string>,
		value?: string | Array<string>,
		onChange?: (value: string, label: string) => void,
		onSearch?: Function,
		onSelect?: (value: string, ontion: Option) => void,
		onDeselect?: Function,
		defaultLabel?: string | Array<string>,
		defaultActiveFirstOption?: boolean,
		getPopupContainer?: (trigger: Node) => Node
	}

	declare interface OptionProps {
		className?: string,
		disabled?: boolean,
		key?: string,
		value?: string
	}

	declare interface OptGroupProps {
		label?: string | React.ReactElement<any>,
		key?: string,
		value?: string
	}

		declare export class Select extends React$Component<SelectProps, any> {
		
	}

	declare export class Option extends React$Component<OptionProps, any> {
		
	}

	declare export class OptGroup extends React$Component<OptGroupProps, any> {
		
	}

	
}