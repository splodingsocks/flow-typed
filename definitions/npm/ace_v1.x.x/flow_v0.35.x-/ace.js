import type { Ace } from 'npm$namespace$AceAjax'

declare module 'ace' {
					
}

declare module 'npm$namespace$AceAjax' {
		declare export interface Delta {
		action: string,
		range: Range,
		text: string,
		lines: string[]
	}

	declare export interface EditorCommand {
		name: string,
		bindKey: any,
		exec: Function,
		readOnly?: boolean
	}

	declare export interface CommandManager {
		byName: any,
		commands: any,
		platform: string,
		addCommands(commands: EditorCommand[]): void,
		addCommand(command: EditorCommand): void,
		exec(name: string, editor: Editor, args: any): void
	}

	declare export interface Annotation {
		row: number,
		column: number,
		text: string,
		type: string
	}

	declare export interface TokenInfo {
		value: string
	}

	declare export interface Position {
		row: number,
		column: number
	}

	declare export interface KeyBinding {
		setDefaultHandler(kb: any): void,
		setKeyboardHandler(kb: any): void,
		addKeyboardHandler(kb: any, pos: any): void,
		removeKeyboardHandler(kb: any): boolean,
		getKeyboardHandler(): any,
		onCommandKey(e: any, hashId: any, keyCode: any): void,
		onTextInput(text: any): void
	}

	declare export interface TextMode {
		getTokenizer(): any,
		toggleCommentLines(state: any, doc: any, startRow: any, endRow: any): void,
		getNextLineIndent(state: any, line: any, tab: any): string,
		checkOutdent(state: any, line: any, input: any): boolean,
		autoOutdent(state: any, doc: any, row: any): void,
		createWorker(session: any): any,
		createModeDelegates(mapping: any): void,
		transformAction(state: any, action: any, editor: any, session: any, param: any): any
	}

	declare export interface Ace {
		require(moduleName: string): any,
		edit(el: string): Editor,
		edit(el: HTMLElement): Editor,
		createEditSession(text: Document, mode: TextMode): IEditSession,
		createEditSession(text: string, mode: TextMode): IEditSession
	}

	declare export interface Anchor {
		on(event: string, fn: (e: any) => any): void,
		getPosition(): Position,
		getDocument(): Document,
		onChange(e: any): void,
		setPosition(row: number, column: number, noClip: boolean): void,
		detach(): void
	}

	declare export interface BackgroundTokenizer {
		states: any[],
		setTokenizer(tokenizer: Tokenizer): void,
		setDocument(doc: Document): void,
		fireUpdateEvent(firstRow: number, lastRow: number): void,
		start(startRow: number): void,
		stop(): void,
		getTokens(row: number): TokenInfo[],
		getState(row: number): string
	}

	declare export interface Document {
		on(event: string, fn: (e: any) => any): void,
		setValue(text: string): void,
		getValue(): string,
		createAnchor(row: number, column: number): void,
		getNewLineCharacter(): string,
		setNewLineMode(newLineMode: string): void,
		getNewLineMode(): string,
		isNewLine(text: string): boolean,
		getLine(row: number): string,
		getLines(firstRow: number, lastRow: number): string[],
		getAllLines(): string[],
		getLength(): number,
		getTextRange(range: Range): string,
		insert(position: Position, text: string): any,
		insertLines(row: number, lines: string[]): any,
		insertNewLine(position: Position): any,
		insertInLine(position: any, text: string): any,
		remove(range: Range): any,
		removeInLine(row: number, startColumn: number, endColumn: number): any,
		removeLines(firstRow: number, lastRow: number): string[],
		removeNewLine(row: number): void,
		replace(range: Range, text: string): any,
		applyDeltas(deltas: Delta[]): void,
		revertDeltas(deltas: Delta[]): void,
		indexToPosition(index: number, startRow: number): Position,
		positionToIndex(pos: Position, startRow: number): number
	}

	declare export interface IEditSession {
		selection: Selection,
		bgTokenizer: BackgroundTokenizer,
		doc: Document,
		on(event: string, fn: (e: any) => any): void,
		findMatchingBracket(position: Position): void,
		addFold(text: string, range: Range): void,
		getFoldAt(row: number, column: number): any,
		removeFold(arg: any): void,
		expandFold(arg: any): void,
		unfold(arg1: any, arg2: boolean): void,
		screenToDocumentColumn(row: number, column: number): void,
		getFoldDisplayLine(foldLine: any, docRow: number, docColumn: number): any,
		getFoldsInRange(range: Range): any,
		highlight(text: string): void,
		setDocument(doc: Document): void,
		getDocument(): Document,
		$resetRowCache(row: number): void,
		setValue(text: string): void,
		setMode(mode: string): void,
		getValue(): string,
		getSelection(): Selection,
		getState(row: number): string,
		getTokens(row: number): TokenInfo[],
		getTokenAt(row: number, column: number): TokenInfo,
		setUndoManager(undoManager: UndoManager): void,
		getUndoManager(): UndoManager,
		getTabString(): string,
		setUseSoftTabs(useSoftTabs: boolean): void,
		getUseSoftTabs(): boolean,
		setTabSize(tabSize: number): void,
		getTabSize(): number,
		isTabStop(position: any): boolean,
		setOverwrite(overwrite: boolean): void,
		getOverwrite(): boolean,
		toggleOverwrite(): void,
		addGutterDecoration(row: number, className: string): void,
		removeGutterDecoration(row: number, className: string): void,
		getBreakpoints(): number[],
		setBreakpoints(rows: any[]): void,
		clearBreakpoints(): void,
		setBreakpoint(row: number, className: string): void,
		clearBreakpoint(row: number): void,
		addMarker(range: Range, clazz: string, type: Function, inFront: boolean): number,
		addMarker(range: Range, clazz: string, type: string, inFront: boolean): number,
		addDynamicMarker(marker: any, inFront: boolean): void,
		removeMarker(markerId: number): void,
		getMarkers(inFront: boolean): any[],
		setAnnotations(annotations: Annotation[]): void,
		getAnnotations(): any,
		clearAnnotations(): void,
		$detectNewLine(text: string): void,
		getWordRange(row: number, column: number): Range,
		getAWordRange(row: number, column: number): any,
		setNewLineMode(newLineMode: string): void,
		getNewLineMode(): string,
		setUseWorker(useWorker: boolean): void,
		getUseWorker(): boolean,
		onReloadTokenizer(): void,
		$mode(mode: TextMode): void,
		getMode(): TextMode,
		setScrollTop(scrollTop: number): void,
		getScrollTop(): number,
		setScrollLeft(): void,
		getScrollLeft(): number,
		getScreenWidth(): number,
		getLine(row: number): string,
		getLines(firstRow: number, lastRow: number): string[],
		getLength(): number,
		getTextRange(range: Range): string,
		insert(position: Position, text: string): any,
		remove(range: Range): any,
		undoChanges(deltas: any[], dontSelect: boolean): Range,
		redoChanges(deltas: any[], dontSelect: boolean): Range,
		setUndoSelect(enable: boolean): void,
		replace(range: Range, text: string): any,
		moveText(fromRange: Range, toPosition: any): Range,
		indentRows(startRow: number, endRow: number, indentString: string): void,
		outdentRows(range: Range): void,
		moveLinesUp(firstRow: number, lastRow: number): number,
		moveLinesDown(firstRow: number, lastRow: number): number,
		duplicateLines(firstRow: number, lastRow: number): number,
		setUseWrapMode(useWrapMode: boolean): void,
		getUseWrapMode(): boolean,
		setWrapLimitRange(min: number, max: number): void,
		adjustWrapLimit(desiredLimit: number): boolean,
		getWrapLimit(): number,
		getWrapLimitRange(): any,
		$getDisplayTokens(str: string, offset: number): void,
		$getStringScreenWidth(str: string, maxScreenColumn: number, screenColumn: number): number[],
		getRowLength(row: number): number,
		getScreenLastRowColumn(screenRow: number): number,
		getDocumentLastRowColumn(docRow: number, docColumn: number): number,
		getDocumentLastRowColumnPosition(docRow: number, docColumn: number): number,
		getRowSplitData(): string,
		getScreenTabSize(screenColumn: number): number,
		screenToDocumentPosition(screenRow: number, screenColumn: number): any,
		documentToScreenPosition(docRow: number, docColumn: number): any,
		documentToScreenColumn(row: number, docColumn: number): number,
		documentToScreenRow(docRow: number, docColumn: number): void,
		getScreenLength(): number
	}

	declare export interface Editor {
		on(ev: string, callback: (e: any) => any): void,
		addEventListener(ev: "change", callback: (ev: EditorChangeEvent) => any): void,
		addEventListener(ev: string, callback: Function): void,
		inMultiSelectMode: boolean,
		selectMoreLines(n: number): void,
		onTextInput(text: string): void,
		onCommandKey(e: any, hashId: any, keyCode: any): void,
		commands: CommandManager,
		session: IEditSession,
		selection: Selection,
		renderer: VirtualRenderer,
		keyBinding: KeyBinding,
		container: HTMLElement,
		onSelectionChange(e: any): void,
		onChangeMode(e?: any): void,
		execCommand(command: string, args?: any): void,
		setOption(optionName: any, optionValue: any): void,
		setOptions(keyValueTuples: any): void,
		getOption(name: any): any,
		getOptions(): any,
		$blockScrolling: number,
		setKeyboardHandler(keyboardHandler: string): void,
		getKeyboardHandler(): string,
		setSession(session: IEditSession): void,
		getSession(): IEditSession,
		setValue(val: string, cursorPos?: number): string,
		getValue(): string,
		getSelection(): Selection,
		resize(force?: boolean): void,
		setTheme(theme: string): void,
		getTheme(): string,
		setStyle(style: string): void,
		unsetStyle(): void,
		setFontSize(size: string): void,
		focus(): void,
		isFocused(): void,
		blur(): void,
		onFocus(): void,
		onBlur(): void,
		onDocumentChange(e: any): void,
		onCursorChange(): void,
		getCopyText(): string,
		onCopy(): void,
		onCut(): void,
		onPaste(text: string): void,
		insert(text: string): void,
		setOverwrite(overwrite: boolean): void,
		getOverwrite(): boolean,
		toggleOverwrite(): void,
		setScrollSpeed(speed: number): void,
		getScrollSpeed(): number,
		setDragDelay(dragDelay: number): void,
		getDragDelay(): number,
		setSelectionStyle(style: string): void,
		getSelectionStyle(): string,
		setHighlightActiveLine(shouldHighlight: boolean): void,
		getHighlightActiveLine(): void,
		setHighlightSelectedWord(shouldHighlight: boolean): void,
		getHighlightSelectedWord(): boolean,
		setShowInvisibles(showInvisibles: boolean): void,
		getShowInvisibles(): boolean,
		setShowPrintMargin(showPrintMargin: boolean): void,
		getShowPrintMargin(): boolean,
		setPrintMarginColumn(showPrintMargin: number): void,
		getPrintMarginColumn(): number,
		setReadOnly(readOnly: boolean): void,
		getReadOnly(): boolean,
		setBehavioursEnabled(enabled: boolean): void,
		getBehavioursEnabled(): boolean,
		setWrapBehavioursEnabled(enabled: boolean): void,
		getWrapBehavioursEnabled(): void,
		setShowFoldWidgets(show: boolean): void,
		getShowFoldWidgets(): void,
		remove(dir: string): void,
		removeWordRight(): void,
		removeWordLeft(): void,
		removeToLineStart(): void,
		removeToLineEnd(): void,
		splitLine(): void,
		transposeLetters(): void,
		toLowerCase(): void,
		toUpperCase(): void,
		indent(): void,
		blockIndent(): void,
		blockOutdent(arg?: string): void,
		toggleCommentLines(): void,
		getNumberAt(): number,
		modifyNumber(amount: number): void,
		removeLines(): void,
		moveLinesDown(): number,
		moveLinesUp(): number,
		moveText(fromRange: Range, toPosition: any): Range,
		copyLinesUp(): number,
		copyLinesDown(): number,
		getFirstVisibleRow(): number,
		getLastVisibleRow(): number,
		isRowVisible(row: number): boolean,
		isRowFullyVisible(row: number): boolean,
		selectPageDown(): void,
		selectPageUp(): void,
		gotoPageDown(): void,
		gotoPageUp(): void,
		scrollPageDown(): void,
		scrollPageUp(): void,
		scrollToRow(): void,
		scrollToLine(line: number, center: boolean, animate: boolean, callback: Function): void,
		centerSelection(): void,
		getCursorPosition(): Position,
		getCursorPositionScreen(): number,
		getSelectionRange(): Range,
		selectAll(): void,
		clearSelection(): void,
		moveCursorTo(row: number, column?: number, animate?: boolean): void,
		moveCursorToPosition(position: Position): void,
		jumpToMatching(): void,
		gotoLine(lineNumber: number, column?: number, animate?: boolean): void,
		navigateTo(row: number, column: number): void,
		navigateUp(times?: number): void,
		navigateDown(times?: number): void,
		navigateLeft(times?: number): void,
		navigateRight(times: number): void,
		navigateLineStart(): void,
		navigateLineEnd(): void,
		navigateFileEnd(): void,
		navigateFileStart(): void,
		navigateWordRight(): void,
		navigateWordLeft(): void,
		replace(replacement: string, options?: any): void,
		replaceAll(replacement: string, options?: any): void,
		getLastSearchOptions(): any,
		find(needle: string, options?: any, animate?: boolean): void,
		findNext(options?: any, animate?: boolean): void,
		findPrevious(options?: any, animate?: boolean): void,
		undo(): void,
		redo(): void,
		destroy(): void
	}

	declare interface EditorChangeEvent {
		start: Position,
		end: Position,
		action: string,
		lines: any[]
	}

	declare export interface PlaceHolder {
		on(event: string, fn: (e: any) => any): void,
		setup(): void,
		showOtherMarkers(): void,
		hideOtherMarkers(): void,
		onUpdate(): void,
		onCursorChange(): void,
		detach(): void,
		cancel(): void
	}

	declare export interface IRangeList {
		ranges: Range[],
		pointIndex(pos: Position, startIndex?: number): void,
		addList(ranges: Range[]): void,
		add(ranges: Range): void,
		merge(): Range[],
		substractPoint(pos: Position): void
	}

	declare export interface Range {
		startRow: number,
		startColumn: number,
		endRow: number,
		endColumn: number,
		start: Position,
		end: Position,
		isEmpty(): boolean,
		isEqual(range: Range): void,
		toString(): void,
		contains(row: number, column: number): boolean,
		compareRange(range: Range): number,
		comparePoint(p: Range): number,
		containsRange(range: Range): boolean,
		intersects(range: Range): boolean,
		isEnd(row: number, column: number): boolean,
		isStart(row: number, column: number): boolean,
		setStart(row: number, column: number): void,
		setEnd(row: number, column: number): void,
		inside(row: number, column: number): boolean,
		insideStart(row: number, column: number): boolean,
		insideEnd(row: number, column: number): boolean,
		compare(row: number, column: number): number,
		compareStart(row: number, column: number): number,
		compareEnd(row: number, column: number): number,
		compareInside(row: number, column: number): number,
		clipRows(firstRow: number, lastRow: number): Range,
		extend(row: number, column: number): Range,
		isMultiLine(): boolean,
		clone(): Range,
		collapseRows(): Range,
		toScreenRange(session: IEditSession): Range,
		fromPoints(start: Range, end: Range): Range
	}

	declare export interface RenderLoop {
		
	}

	declare export interface ScrollBar {
		onScroll(e: any): void,
		getWidth(): number,
		setHeight(height: number): void,
		setInnerHeight(height: number): void,
		setScrollTop(scrollTop: number): void
	}

	declare export interface Search {
		set(options: any): Search,
		getOptions(): any,
		setOptions(An: any): void,
		find(session: IEditSession): Range,
		findAll(session: IEditSession): Range[],
		replace(input: string, replacement: string): string
	}

	declare export interface Selection {
		addEventListener(ev: string, callback: Function): void,
		moveCursorWordLeft(): void,
		moveCursorWordRight(): void,
		fromOrientedRange(range: Range): void,
		setSelectionRange(match: any): void,
		getAllRanges(): Range[],
		on(event: string, fn: (e: any) => any): void,
		addRange(range: Range): void,
		isEmpty(): boolean,
		isMultiLine(): boolean,
		getCursor(): Position,
		setSelectionAnchor(row: number, column: number): void,
		getSelectionAnchor(): any,
		getSelectionLead(): any,
		shiftSelection(columns: number): void,
		isBackwards(): boolean,
		getRange(): Range,
		clearSelection(): void,
		selectAll(): void,
		setRange(range: Range, reverse: boolean): void,
		selectTo(row: number, column: number): void,
		selectToPosition(pos: any): void,
		selectUp(): void,
		selectDown(): void,
		selectRight(): void,
		selectLeft(): void,
		selectLineStart(): void,
		selectLineEnd(): void,
		selectFileEnd(): void,
		selectFileStart(): void,
		selectWordRight(): void,
		selectWordLeft(): void,
		getWordRange(): void,
		selectWord(): void,
		selectAWord(): void,
		selectLine(): void,
		moveCursorUp(): void,
		moveCursorDown(): void,
		moveCursorLeft(): void,
		moveCursorRight(): void,
		moveCursorLineStart(): void,
		moveCursorLineEnd(): void,
		moveCursorFileEnd(): void,
		moveCursorFileStart(): void,
		moveCursorLongWordRight(): void,
		moveCursorLongWordLeft(): void,
		moveCursorBy(rows: number, chars: number): void,
		moveCursorToPosition(position: any): void,
		moveCursorTo(row: number, column: number, keepDesiredColumn?: boolean): void,
		moveCursorToScreen(row: number, column: number, keepDesiredColumn: boolean): void
	}

	declare export interface Split {
		getSplits(): number,
		getEditor(idx: number): void,
		getCurrentEditor(): Editor,
		focus(): void,
		blur(): void,
		setTheme(theme: string): void,
		setKeyboardHandler(keybinding: string): void,
		forEach(callback: Function, scope: string): void,
		setFontSize(size: number): void,
		setSession(session: IEditSession, idx: number): void,
		getOrientation(): number,
		setOrientation(orientation: number): void,
		resize(): void
	}

	declare export interface TokenIterator {
		stepBackward(): string[],
		stepForward(): string,
		getCurrentToken(): TokenInfo,
		getCurrentTokenRow(): number,
		getCurrentTokenColumn(): number
	}

	declare export interface Tokenizer {
		getLineTokens(): any
	}

	declare export interface UndoManager {
		execute(options: any): void,
		undo(dontSelect?: boolean): Range,
		redo(dontSelect: boolean): void,
		reset(): void,
		hasUndo(): boolean,
		hasRedo(): boolean,
		isClean(): boolean,
		markClean(): void
	}

	declare export interface VirtualRenderer {
		scroller: any,
		characterWidth: number,
		lineHeight: number,
		screenToTextCoordinates(left: number, top: number): void,
		setSession(session: IEditSession): void,
		updateLines(firstRow: number, lastRow: number): void,
		updateText(): void,
		updateFull(force: boolean): void,
		updateFontSize(): void,
		onResize(force: boolean, gutterWidth: number, width: number, height: number): void,
		adjustWrapLimit(): void,
		setAnimatedScroll(shouldAnimate: boolean): void,
		getAnimatedScroll(): boolean,
		setShowInvisibles(showInvisibles: boolean): void,
		getShowInvisibles(): boolean,
		setShowPrintMargin(showPrintMargin: boolean): void,
		getShowPrintMargin(): boolean,
		setPrintMarginColumn(showPrintMargin: boolean): void,
		getPrintMarginColumn(): boolean,
		getShowGutter(): boolean,
		setShowGutter(show: boolean): void,
		getContainerElement(): HTMLElement,
		getMouseEventTarget(): HTMLElement,
		getTextAreaContainer(): HTMLElement,
		getFirstVisibleRow(): number,
		getFirstFullyVisibleRow(): number,
		getLastFullyVisibleRow(): number,
		getLastVisibleRow(): number,
		setPadding(padding: number): void,
		getHScrollBarAlwaysVisible(): boolean,
		setHScrollBarAlwaysVisible(alwaysVisible: boolean): void,
		updateFrontMarkers(): void,
		updateBackMarkers(): void,
		addGutterDecoration(): void,
		removeGutterDecoration(): void,
		updateBreakpoints(): void,
		setAnnotations(annotations: any[]): void,
		updateCursor(): void,
		hideCursor(): void,
		showCursor(): void,
		scrollCursorIntoView(): void,
		getScrollTop(): number,
		getScrollLeft(): number,
		getScrollTopRow(): number,
		getScrollBottomRow(): number,
		scrollToRow(row: number): void,
		scrollToLine(line: number, center: boolean, animate: boolean, callback: Function): void,
		scrollToY(scrollTop: number): number,
		scrollToX(scrollLeft: number): number,
		scrollBy(deltaX: number, deltaY: number): void,
		isScrollableBy(deltaX: number, deltaY: number): boolean,
		textToScreenCoordinates(row: number, column: number): any,
		visualizeFocus(): void,
		visualizeBlur(): void,
		showComposition(position: number): void,
		setCompositionText(text: string): void,
		hideComposition(): void,
		setTheme(theme: string): void,
		getTheme(): string,
		setStyle(style: string): void,
		unsetStyle(style: string): void,
		destroy(): void
	}

			
}