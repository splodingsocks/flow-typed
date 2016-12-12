

declare module 'survey-knockout' {
					
}

declare module 'Survey' {
		declare interface HashTable<T> {
		[key: string]: T
	}

	declare interface ISurvey {
		getValue(name: string): any,
		setValue(name: string, newValue: any): any,
		getComment(name: string): string,
		setComment(name: string, newValue: string): any,
		pageVisibilityChanged(page: IPage, newValue: boolean): any,
		questionVisibilityChanged(question: IQuestion, newValue: boolean): any,
		questionAdded(question: IQuestion, index: number): any,
		questionRemoved(question: IQuestion): any,
		validateQuestion(name: string): SurveyError,
		processHtml(html: string): string,
		processText(text: string): string,
		isDesignMode: boolean,
		requiredText: string
	}

	declare interface IQuestion {
		name: string,
		visible: boolean,
		hasTitle: boolean,
		setVisibleIndex(value: number): any,
		onSurveyValueChanged(newValue: any): any
	}

	declare interface IPage {
		visible: boolean
	}

	declare interface IValidatorOwner {
		validators: Array<SurveyValidator>,
		value: any,
		getValidatorTitle(): string
	}

	declare interface IMatrixData {
		onMatrixRowChanged(row: MatrixRowModel): any
	}

	declare interface IMatrixDropdownData {
		onCellChanged(cell: MatrixDropdownCellModel): any,
		columns: Array<MatrixDropdownColumn>,
		choices: Array<any>,
		optionsCaption: string
	}

	declare interface IMultipleTextData {
		getMultipleTextValue(name: string): any,
		setMultipleTextValue(name: string, value: any): any
	}

	declare interface ISurveyTriggerOwner {
		getObjects(pages: string[], questions: string[]): any[],
		doComplete(): any,
		setTriggerValue(name: string, value: any, isVariable: boolean): any
	}

		declare class ItemValue  {
		Separator: string;
		setData(items: Array<ItemValue>, values: Array<any>): void;
		getData(items: Array<ItemValue>): any;
		constructor(value: any, text?: string): this;
		getType(): string;
		value: any;
		hasText: boolean;
		text: string
	}

	declare class Base  {
		getType(): string
	}

	declare class SurveyError  {
		getText(): string
	}

	declare class Event<T, Options>  {
		isEmpty: boolean;
		fire(sender: any, options: Options): void;
		add(func: T): void;
		remove(func: T): void
	}

	declare class dxSurveyService  {
		serviceUrl: string;
		constructor(): this;
		loadSurvey(
		surveyId: string, onLoad: (success: boolean, result: string, response: any) => void
	): void;
		sendResult(
		postId: string, result: JSON, onSendResult: (success: boolean, response: any) => void, clientId?: string, isPartialCompleted?: boolean
	): void;
		getResult(
		resultId: string, name: string, onGetResult: (success: boolean, data: any, dataList: Array<any>, response: any) => void
	): void;
		isCompleted(
		resultId: string, clientId: string, onIsCompleted: (success: boolean, result: string, response: any) => void
	): void
	}

	declare class AnswerRequiredError extends SurveyError {
		constructor(): this;
		getText(): string
	}

	declare class RequreNumericError extends SurveyError {
		constructor(): this;
		getText(): string
	}

	declare class CustomError extends SurveyError {
		constructor(text: string): this;
		getText(): string
	}

	declare class JsonObjectProperty  {
		name: string;
		className: string;
		classNamePart: string;
		baseClassName: string;
		defaultValue: any;
		onGetValue: (obj: any) => any;
		onSetValue: (obj: any, value: any, jsonConv: JsonObject) => any;
		constructor(name: string): this;
		type: string;
		hasToUseGetValue: (obj: any) => any;
		isDefaultValue(value: any): boolean;
		getValue(obj: any): any;
		hasToUseSetValue: (obj: any, value: any, jsonConv: JsonObject) => any;
		setValue(obj: any, value: any, jsonConv: JsonObject): void;
		getObjType(objType: string): string;
		getClassName(className: string): string;
		choices: Array<any>;
		setChoices(value: Array<any>, valueFunc: () => Array<any>): void
	}

	declare class JsonMetadataClass  {
		name: string;
		creator: () => any;
		parentName: string;
		requiredSymbol: string;
		typeSymbol: string;
		properties: Array<JsonObjectProperty>;
		requiredProperties: Array<string>;
		constructor(name: string, propertiesNames: Array<string>, creator?: () => any, parentName?: string): this;
		find(name: string): JsonObjectProperty
	}

	declare class JsonMetadata  {
		addClass(
		name: string, propertiesNames: Array<string>, creator?: () => any, parentName?: string
	): JsonMetadataClass;
		overrideClassCreatore(name: string, creator: () => any): void;
		setPropertyValues(
		name: string, propertyName: string, propertyClassName: string, defaultValue?: any, onGetValue?: (obj: any) => any, onSetValue?: (obj: any, value: any, jsonConv: JsonObject) => any
	): void;
		setPropertyChoices(
		name: string, propertyName: string, choices: Array<any>, choicesFunc?: () => Array<any>
	): void;
		setPropertyClassInfo(
		name: string, propertyName: string, baseClassName: string, classNamePart?: string
	): void;
		getProperties(name: string): Array<JsonObjectProperty>;
		createClass(name: string): any;
		getChildrenClasses(name: string, canBeCreated?: boolean): Array<JsonMetadataClass>;
		getRequiredProperties(name: string): Array<string>
	}

	declare class JsonError  {
		type: string;
		message: string;
		description: string;
		at: Number;
		constructor(type: string, message: string): this;
		getFullDescription(): string
	}

	declare class JsonUnknownPropertyError extends JsonError {
		propertyName: string;
		className: string;
		constructor(propertyName: string, className: string): this
	}

	declare class JsonMissingTypeErrorBase extends JsonError {
		baseClassName: string;
		type: string;
		message: string;
		constructor(baseClassName: string, type: string, message: string): this
	}

	declare class JsonMissingTypeError extends JsonMissingTypeErrorBase {
		propertyName: string;
		baseClassName: string;
		constructor(propertyName: string, baseClassName: string): this
	}

	declare class JsonIncorrectTypeError extends JsonMissingTypeErrorBase {
		propertyName: string;
		baseClassName: string;
		constructor(propertyName: string, baseClassName: string): this
	}

	declare class JsonRequiredPropertyError extends JsonError {
		propertyName: string;
		className: string;
		constructor(propertyName: string, className: string): this
	}

	declare class JsonObject  {
		metaData: JsonMetadata;
		errors: JsonError[];
		toJsonObject(obj: any): any;
		toObject(jsonObj: any, obj: any): void;
		toJsonObjectCore(obj: any, property: JsonObjectProperty): any;
		valueToJson(obj: any, result: any, property: JsonObjectProperty): void;
		valueToObj(value: any, obj: any, key: any, property: JsonObjectProperty): void
	}

	declare class QuestionBase extends Base, IQuestion {
		name: string;
		data: ISurvey;
		width: string;
		visibilityChangedCallback: () => void;
		visibleIndexChangedCallback: () => void;
		constructor(name: string): this;
		visible: boolean;
		visibleIndex: number;
		hasErrors(): boolean;
		hasTitle: boolean;
		hasComment: boolean;
		setData(newValue: ISurvey): void;
		fireCallback(callback: () => void): void;
		onSetData(): void;
		onCreating(): void;
		onSurveyValueChanged(newValue: any): void;
		setVisibleIndex(value: number): void
	}

	declare class QuestionFactory  {
		Instance: QuestionFactory;
		DefaultChoices: (string | {
		value: number,
		text: string
	})[];
		registerQuestion(questionType: string, questionCreator: (name: string) => QuestionBase): void;
		getAllTypes(): Array<string>;
		createQuestion(questionType: string, name: string): QuestionBase
	}

	declare class PageModel extends Base, IPage {
		name: string;
		questions: Array<QuestionBase>;
		data: ISurvey;
		title: string;
		visibleIndex: number;
		constructor(name?: string): this;
		processedTitle: string;
		num: number;
		visible: boolean;
		getType(): string;
		isVisible: boolean;
		addQuestion(question: QuestionBase, index?: number): void;
		addNewQuestion(questionType: string, name: string): QuestionBase;
		removeQuestion(question: QuestionBase): void;
		hasErrors(): boolean;
		addQuestionsToList(list: Array<IQuestion>, visibleOnly?: boolean): void;
		onNumChanged(value: number): void
	}

	declare class ValidatorResult  {
		value: any;
		error: SurveyError;
		constructor(value: any, error?: SurveyError): this
	}

	declare class SurveyValidator extends Base {
		text: string;
		constructor(): this;
		getErrorText(name: string): string;
		getDefaultErrorText(name: string): string;
		validate(value: any, name?: string): ValidatorResult
	}

	declare class ValidatorRunner  {
		run(owner: IValidatorOwner): SurveyError
	}

	declare class NumericValidator extends SurveyValidator {
		minValue: number;
		maxValue: number;
		constructor(minValue?: number, maxValue?: number): this;
		getType(): string;
		validate(value: any, name?: string): ValidatorResult;
		getDefaultErrorText(name: string): any
	}

	declare class TextValidator extends SurveyValidator {
		minLength: number;
		constructor(minLength?: number): this;
		getType(): string;
		validate(value: any, name?: string): ValidatorResult;
		getDefaultErrorText(name: string): any
	}

	declare class AnswerCountValidator extends SurveyValidator {
		minCount: number;
		maxCount: number;
		constructor(minCount?: number, maxCount?: number): this;
		getType(): string;
		validate(value: any, name?: string): ValidatorResult;
		getDefaultErrorText(name: string): string
	}

	declare class RegexValidator extends SurveyValidator {
		regex: string;
		constructor(regex?: string): this;
		getType(): string;
		validate(value: any, name?: string): ValidatorResult
	}

	declare class EmailValidator extends SurveyValidator {
		constructor(): this;
		getType(): string;
		validate(value: any, name?: string): ValidatorResult;
		getDefaultErrorText(name: string): any
	}

	declare class Question extends QuestionBase, IValidatorOwner {
		name: string;
		errors: Array<SurveyError>;
		validators: Array<SurveyValidator>;
		valueChangedCallback: () => void;
		commentChangedCallback: () => void;
		errorsChangedCallback: () => void;
		constructor(name: string): this;
		hasTitle: boolean;
		title: string;
		processedTitle: string;
		supportComment(): boolean;
		supportOther(): boolean;
		isRequired: boolean;
		hasComment: boolean;
		hasOther: boolean;
		onSetData(): void;
		value: any;
		comment: string;
		isEmpty(): boolean;
		hasErrors(): boolean;
		requiredText: string;
		onCheckForErrors(errors: Array<SurveyError>): void;
		runValidators(): SurveyError;
		setNewValue(newValue: any): void;
		onValueChanged(): void;
		onSurveyValueChanged(newValue: any): void;
		getValidatorTitle(): string
	}

	declare class QuestionSelectBase extends Question {
		otherItem: ItemValue;
		choicesValues: Array<ItemValue>;
		otherErrorText: string;
		choicesOrderValue: string;
		constructor(name: string): this;
		isOtherSelected: boolean;
		choices: Array<any>;
		choicesOrder: string;
		otherText: string;
		visibleChoices: Array<ItemValue>;
		supportComment(): boolean;
		supportOther(): boolean;
		onCheckForErrors(errors: Array<SurveyError>): void;
		sortVisibleChoices(array: Array<ItemValue>): Array<ItemValue>;
		sortArray(array: Array<ItemValue>, mult: number): Array<ItemValue>;
		randomizeArray(array: Array<ItemValue>): Array<ItemValue>
	}

	declare class QuestionCheckboxBase extends QuestionSelectBase {
		name: string;
		colCountChangedCallback: () => void;
		constructor(name: string): this;
		colCount: number
	}

	declare class QuestionCheckboxModel extends QuestionCheckboxBase {
		name: string;
		constructor(name: string): this;
		isOtherSelected: boolean;
		getType(): string
	}

	declare class QuestionCommentModel extends Question {
		name: string;
		rows: number;
		cols: number;
		constructor(name: string): this;
		getType(): string;
		isEmpty(): boolean
	}

	declare class QuestionDropdownModel extends QuestionSelectBase {
		name: string;
		constructor(name: string): this;
		optionsCaption: string;
		getType(): string
	}

	declare class QuestionHtmlModel extends QuestionBase {
		name: string;
		constructor(name: string): this;
		getType(): string;
		html: string;
		processedHtml: string
	}

	declare class MatrixRowModel extends Base {
		name: any;
		text: string;
		fullName: string;
		rowValue: any;
		constructor(name: any, text: string, fullName: string, data: IMatrixData, value: any): this;
		value: any;
		onValueChanged(): void
	}

	declare class QuestionMatrixModel extends Question, IMatrixData {
		name: string;
		constructor(name: string): this;
		getType(): string;
		hasRows: boolean;
		columns: Array<any>;
		rows: Array<any>;
		visibleRows: Array<MatrixRowModel>;
		createMatrixRow(name: any, text: string, fullName: string, value: any): MatrixRowModel;
		onValueChanged(): void;
		onMatrixRowChanged(row: MatrixRowModel): void
	}

	declare class QuestionRadiogroupModel extends QuestionCheckboxBase {
		name: string;
		constructor(name: string): this;
		getType(): string
	}

	declare class QuestionTextModel extends Question {
		name: string;
		size: number;
		constructor(name: string): this;
		getType(): string;
		isEmpty(): boolean
	}

	declare class MatrixDropdownColumn extends Base {
		name: string;
		optionsCaption: string;
		constructor(name: string, title?: string): this;
		getType(): string;
		title: string;
		choices: Array<any>;
		cellType: string;
		colCount: number
	}

	declare class MatrixDropdownCellModel  {
		column: MatrixDropdownColumn;
		row: MatrixDropdownRowModel;
		constructor(column: MatrixDropdownColumn, row: MatrixDropdownRowModel, data: IMatrixDropdownData, value: any): this;
		choices: Array<any>;
		optionsCaption: string;
		question: Question;
		value: any;
		onValueChanged(): void;
		createQuestion(): Question;
		createDropdown(name: string): QuestionDropdownModel;
		createCheckbox(name: string): QuestionCheckboxModel;
		createRadiogroup(name: string): QuestionRadiogroupModel;
		createText(name: string): QuestionTextModel;
		createComment(name: string): QuestionCommentModel;
		createDropdownCore(name: string): QuestionDropdownModel;
		createCheckboxCore(name: string): QuestionCheckboxModel;
		createRadiogroupCore(name: string): QuestionRadiogroupModel;
		getQuestionName(): string
	}

	declare class MatrixDropdownRowModel  {
		name: any;
		text: string;
		data: IMatrixDropdownData;
		rowValue: any;
		cells: Array<MatrixDropdownCellModel>;
		constructor(name: any, text: string, data: IMatrixDropdownData, value: any): this;
		value: any;
		createCell(column: MatrixDropdownColumn, value: any): MatrixDropdownCellModel;
		getCellValue(column: MatrixDropdownColumn): any
	}

	declare class QuestionMatrixDropdownModel extends Question, IMatrixDropdownData {
		name: string;
		constructor(name: string): this;
		getType(): string;
		columns: Array<MatrixDropdownColumn>;
		rows: Array<any>;
		choices: Array<any>;
		optionsCaption: string;
		addColumn(name: string, title?: string): MatrixDropdownColumn;
		visibleRows: Array<MatrixDropdownRowModel>;
		createMatrixRow(name: any, text: string, value: any): MatrixDropdownRowModel;
		onValueChanged(): void;
		onCellChanged(cell: MatrixDropdownCellModel): void
	}

	declare class MultipleTextItemModel extends Base, IValidatorOwner {
		name: any;
		validators: Array<SurveyValidator>;
		constructor(name?: any, title?: string): this;
		getType(): string;
		setData(data: IMultipleTextData): void;
		title: string;
		value: any;
		onValueChanged(newValue: any): void;
		getValidatorTitle(): string
	}

	declare class QuestionMultipleTextModel extends Question, IMultipleTextData {
		name: string;
		colCountChangedCallback: () => void;
		itemSize: number;
		constructor(name: string): this;
		getType(): string;
		items: Array<MultipleTextItemModel>;
		AddItem(name: string, title?: string): MultipleTextItemModel;
		colCount: number;
		getRows(): Array<any>;
		onValueChanged(): void;
		createTextItem(name: string, title: string): MultipleTextItemModel;
		onItemValueChanged(): void;
		runValidators(): SurveyError;
		getMultipleTextValue(name: string): any;
		setMultipleTextValue(name: string, value: any): void
	}

	declare class QuestionRatingModel extends Question {
		name: string;
		defaultRateValues: ItemValue[];
		mininumRateDescription: string;
		maximumRateDescription: string;
		rateValuesChangedCallback: () => void;
		constructor(name: string): this;
		rateValues: Array<any>;
		visibleRateValues: ItemValue[];
		getType(): string;
		supportComment(): boolean;
		supportOther(): boolean
	}

	declare class Trigger extends Base {
		operatorsValue: HashTable<Function>;
		operators: HashTable<Function>;
		value: any;
		constructor(): this;
		operator: string;
		check(value: any): void;
		onSuccess(): void;
		onFailure(): void
	}

	declare class SurveyTrigger extends Trigger {
		name: string;
		owner: ISurveyTriggerOwner;
		constructor(): this;
		setOwner(owner: ISurveyTriggerOwner): void;
		isOnNextPage: boolean
	}

	declare class SurveyTriggerVisible extends SurveyTrigger {
		pages: string[];
		questions: string[];
		constructor(): this;
		getType(): string;
		onSuccess(): void;
		onFailure(): void;
		onItemSuccess(item: any): void;
		onItemFailure(item: any): void
	}

	declare class SurveyTriggerComplete extends SurveyTrigger {
		constructor(): this;
		getType(): string;
		isOnNextPage: boolean;
		onSuccess(): void
	}

	declare class SurveyTriggerSetValue extends SurveyTrigger {
		setToName: string;
		setValue: any;
		isVariable: boolean;
		constructor(): this;
		getType(): string;
		onSuccess(): void
	}

	declare class TextPreProcessor  {
		onProcess: (name: string) => any;
		onHasValue: (name: string) => boolean;
		constructor(): this;
		process(text: string): string
	}

	declare class SurveyModel extends Base, ISurvey {
		surveyId: string;
		surveyPostId: string;
		clientId: string;
		cookieName: string;
		sendResultOnPageNext: boolean;
		commentPrefix: string;
		title: string;
		showNavigationButtons: boolean;
		showTitle: boolean;
		showPageTitles: boolean;
		completedHtml: string;
		requiredText: string;
		showProgressBar: string;
		pages: Array<PageModel>;
		triggers: Array<SurveyTrigger>;
		onComplete: Event<(sender: SurveyModel) => any, any>;
		onCurrentPageChanged: Event<(sender: SurveyModel, options: any) => any, any>;
		onValueChanged: Event<(sender: SurveyModel, options: any) => any, any>;
		onVisibleChanged: Event<(sender: SurveyModel, options: any) => any, any>;
		onPageVisibleChanged: Event<(sender: SurveyModel, options: any) => any, any>;
		onQuestionAdded: Event<(sender: SurveyModel, options: any) => any, any>;
		onQuestionRemoved: Event<(sender: SurveyModel, options: any) => any, any>;
		onValidateQuestion: Event<(sender: SurveyModel, options: any) => any, any>;
		onProcessHtml: Event<(sender: SurveyModel, options: any) => any, any>;
		onSendResult: Event<(sender: SurveyModel, options: any) => any, any>;
		onGetResult: Event<(sender: SurveyModel, options: any) => any, any>;
		jsonErrors: Array<JsonError>;
		mode: string;
		constructor(jsonObj?: any): this;
		getType(): string;
		locale: string;
		getLocString(str: string): any;
		emptySurveyText: string;
		pagePrevText: string;
		pageNextText: string;
		completeText: string;
		showPageNumbers: boolean;
		showQuestionNumbers: string;
		data: any;
		comments: any;
		visiblePages: Array<PageModel>;
		isEmpty: boolean;
		PageCount: number;
		visiblePageCount: number;
		currentPage: PageModel;
		state: string;
		clear(): void;
		mergeValues(src: any, dest: any): void;
		currentPageChanged(newValue: PageModel, oldValue: PageModel): void;
		getProgress(): number;
		isDesignMode: boolean;
		hasCookie: boolean;
		setCookie(): void;
		deleteCookie(): void;
		nextPage(): boolean;
		isCurrentPageHasErrors: boolean;
		prevPage(): boolean;
		completeLastPage(): boolean;
		isFirstPage: boolean;
		isLastPage: boolean;
		doComplete(): void;
		setCompleted(): void;
		processedCompletedHtml: string;
		processedLoadingHtml: string;
		progressText: string;
		getPage(index: number): PageModel;
		addPage(page: PageModel): void;
		addNewPage(name: string): PageModel;
		removePage(page: PageModel): void;
		getQuestionByName(name: string, caseInsensitive?: boolean): IQuestion;
		getQuestionsByNames(names: string[], caseInsensitive?: boolean): IQuestion[];
		getPageByQuestion(question: IQuestion): PageModel;
		getPageByName(name: string): PageModel;
		getPagesByNames(names: string[]): PageModel[];
		getAllQuestions(visibleOnly?: boolean): Array<IQuestion>;
		createNewPage(name: string): PageModel;
		doSurveyValueChanged(question: IQuestion, newValue: any): void;
		sendResult(postId?: string, clientId?: string, isPartialCompleted?: boolean): void;
		getResult(resultId: string, name: string): void;
		loadSurveyFromService(surveyId?: string): void;
		onLoadingSurveyFromService(): void;
		onLoadSurveyFromService(): void;
		onBeforeCreating(): void;
		onCreating(): void;
		getVariable(name: string): any;
		setVariable(name: string, newValue: any): void;
		getValue(name: string): any;
		setValue(name: string, newValue: any): void;
		getComment(name: string): string;
		setComment(name: string, newValue: string): void;
		questionVisibilityChanged(question: IQuestion, newValue: boolean): void;
		pageVisibilityChanged(page: IPage, newValue: boolean): void;
		questionAdded(question: IQuestion, index: number): void;
		questionRemoved(question: IQuestion): void;
		validateQuestion(name: string): SurveyError;
		processHtml(html: string): string;
		processText(text: string): string;
		getObjects(pages: string[], questions: string[]): any[];
		setTriggerValue(name: string, value: any, isVariable: boolean): void
	}

	declare class SurveyWindowModel extends Base {
		surveyElementName: string;
		surveyValue: SurveyModel;
		windowElement: HTMLDivElement;
		isShowingValue: boolean;
		isExpandedValue: boolean;
		titleValue: string;
		templateValue: string;
		constructor(jsonObj: any): this;
		getType(): string;
		survey: SurveyModel;
		isShowing: boolean;
		isExpanded: boolean;
		title: string;
		expand(): void;
		collapse(): void;
		createSurvey(jsonObj: any): SurveyModel;
		expandcollapse(value: boolean): void
	}

	declare class Page extends PageModel {
		koNo: any;
		constructor(name?: string): this;
		onCreating(): void;
		onNumChanged(value: number): void
	}

	declare class QuestionImplementorBase  {
		question: QuestionBase;
		koVisible: any;
		koNo: any;
		koErrors: any;
		constructor(question: QuestionBase): this;
		onVisibilityChanged(): void;
		onVisibleIndexChanged(): void;
		getNo(): string
	}

	declare class QuestionImplementor extends QuestionImplementorBase {
		question: Question;
		koValue: any;
		koComment: any;
		constructor(question: Question): this;
		onValueChanged(): void;
		onCommentChanged(): void;
		onVisibilityChanged(): void;
		onVisibleIndexChanged(): void;
		onErrorsChanged(): void;
		createkoValue(): any;
		setkoValue(newValue: any): void;
		updateValue(newValue: any): void;
		updateComment(newValue: any): void;
		getNo(): string
	}

	declare class QuestionSelectBaseImplementor extends QuestionImplementor {
		koOtherVisible: any;
		constructor(question: Question): this;
		isOtherSelected: boolean
	}

	declare class QuestionCheckboxBaseImplementor extends QuestionSelectBaseImplementor {
		koWidth: any;
		constructor(question: Question): this;
		onColCountChanged(): void;
		colWidth: string
	}

	declare class QuestionCheckbox extends QuestionCheckboxModel {
		name: string;
		constructor(name: string): this
	}

	declare class QuestionComment extends QuestionCommentModel {
		name: string;
		constructor(name: string): this
	}

	declare class QuestionDropdown extends QuestionDropdownModel {
		name: string;
		constructor(name: string): this
	}

	declare class QuestionHtml extends QuestionHtmlModel {
		name: string;
		constructor(name: string): this
	}

	declare class MatrixRow extends MatrixRowModel {
		name: any;
		text: string;
		fullName: string;
		koValue: any;
		constructor(name: any, text: string, fullName: string, data: IMatrixData, value: any): this;
		onValueChanged(): void
	}

	declare class QuestionMatrix extends QuestionMatrixModel {
		name: string;
		constructor(name: string): this;
		createMatrixRow(name: any, text: string, fullName: string, value: any): MatrixRowModel
	}

	declare class QuestionRadiogroup extends QuestionRadiogroupModel {
		name: string;
		constructor(name: string): this
	}

	declare class QuestionText extends QuestionTextModel {
		name: string;
		constructor(name: string): this
	}

	declare class MatrixDropdownCell extends MatrixDropdownCellModel {
		column: MatrixDropdownColumn;
		row: MatrixDropdownRowModel;
		constructor(column: MatrixDropdownColumn, row: MatrixDropdownRowModel, data: IMatrixDropdownData, value: any): this;
		createText(name: string): QuestionTextModel;
		createComment(name: string): QuestionCommentModel;
		createDropdownCore(name: string): QuestionDropdownModel;
		createCheckboxCore(name: string): QuestionCheckboxModel;
		createRadiogroupCore(name: string): QuestionRadiogroupModel
	}

	declare class MatrixDropdownRow extends MatrixDropdownRowModel {
		name: any;
		text: string;
		constructor(name: any, text: string, data: IMatrixDropdownData, value: any): this;
		createCell(column: MatrixDropdownColumn, value: any): MatrixDropdownCellModel
	}

	declare class QuestionMatrixDropdown extends QuestionMatrixDropdownModel {
		name: string;
		constructor(name: string): this;
		createMatrixRow(name: any, text: string, value: any): MatrixDropdownRowModel
	}

	declare class MultipleTextItem extends MultipleTextItemModel {
		name: any;
		koValue: any;
		constructor(name?: any, title?: string): this;
		onValueChanged(newValue: any): void
	}

	declare class QuestionMultipleTextImplementor extends QuestionImplementor {
		koRows: any;
		constructor(question: Question): this;
		onColCountChanged(): void
	}

	declare class QuestionMultipleText extends QuestionMultipleTextModel {
		name: string;
		constructor(name: string): this;
		createTextItem(name: string, title: string): MultipleTextItemModel
	}

	declare class QuestionRating extends QuestionRatingModel {
		name: string;
		itemCss: string;
		constructor(name: string): this;
		onSetData(): void
	}

	declare class SurveyBase extends SurveyModel {
		onRendered: Event<(sender: SurveyModel) => any, any>;
		koCurrentPage: any;
		koIsFirstPage: any;
		koIsLastPage: any;
		dummyObservable: any;
		koState: any;
		koProgress: any;
		koProgressText: any;
		constructor(jsonObj?: any, renderedElement?: any, css?: any): this;
		css: any;
		render(element?: any): void;
		loadSurveyFromService(surveyId?: string, renderedElement?: any): void;
		setCompleted(): void;
		createNewPage(name: string): Page;
		createCssObject(): any;
		getTemplate(): string;
		onBeforeCreating(): void;
		currentPageChanged(newValue: PageModel, oldValue: PageModel): void;
		onLoadSurveyFromService(): void;
		onLoadingSurveyFromService(): void
	}

	declare class SurveyWindowBase extends SurveyWindowModel {
		koExpanded: any;
		doExpand: any;
		constructor(jsonObj: any): this;
		createSurvey(jsonObj: any): SurveyModel;
		expandcollapse(value: boolean): void;
		template: string;
		show(): void;
		getDefaultTemplate(): string;
		hide(): void
	}

	declare class SurveyTemplateTextBase  {
		constructor(): this;
		replaceText(replaceText: string, id: string, questionType?: string): void;
		getId(id: string, questionType: string): string;
		text: string
	}

	declare class Survey extends SurveyBase {
		constructor(jsonObj?: any, renderedElement?: any, css?: any): this;
		getTemplate(): string;
		createCssObject(): any
	}

	declare class SurveyWindow extends SurveyWindowBase {
		koExpanded: any;
		doExpand: any;
		constructor(jsonObj: any): this;
		createSurvey(jsonObj: any): SurveyModel;
		getDefaultTemplate(): string
	}

	declare class SurveyTemplateText extends SurveyTemplateTextBase {
		text: string
	}

	
}