

declare module 'babel-types' {
	declare export type Expression = ArrayExpression | AssignmentExpression | BinaryExpression | CallExpression | ConditionalExpression | FunctionExpression | Identifier | StringLiteral | NumericLiteral | BooleanLiteral | RegExpLiteral | LogicalExpression | MemberExpression | NewExpression | ObjectExpression | SequenceExpression | ThisExpression | UnaryExpression | UpdateExpression | ArrowFunctionExpression | ClassExpression | MetaProperty | Super | TaggedTemplateExpression | TemplateLiteral | YieldExpression | TypeCastExpression | JSXElement | JSXEmptyExpression | JSXIdentifier | JSXMemberExpression | ParenthesizedExpression | AwaitExpression | BindExpression | DoExpression;

	declare export type Binary = BinaryExpression | LogicalExpression;

	declare export type Scopable = BlockStatement | CatchClause | DoWhileStatement | ForInStatement | ForStatement | FunctionDeclaration | FunctionExpression | Program | ObjectMethod | SwitchStatement | WhileStatement | ArrowFunctionExpression | ClassDeclaration | ClassExpression | ForOfStatement | ClassMethod;

	declare export type BlockParent = BlockStatement | DoWhileStatement | ForInStatement | ForStatement | FunctionDeclaration | FunctionExpression | Program | ObjectMethod | SwitchStatement | WhileStatement | ArrowFunctionExpression | ForOfStatement | ClassMethod;

	declare export type Block = BlockStatement | Program;

	declare export type Statement = BlockStatement | BreakStatement | ContinueStatement | DebuggerStatement | DoWhileStatement | EmptyStatement | ExpressionStatement | ForInStatement | ForStatement | FunctionDeclaration | IfStatement | LabeledStatement | ReturnStatement | SwitchStatement | ThrowStatement | TryStatement | VariableDeclaration | WhileStatement | WithStatement | ClassDeclaration | ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ForOfStatement | ImportDeclaration | DeclareClass | DeclareFunction | DeclareInterface | DeclareModule | DeclareTypeAlias | DeclareVariable | InterfaceDeclaration | TypeAlias;

	declare export type Terminatorless = BreakStatement | ContinueStatement | ReturnStatement | ThrowStatement | YieldExpression | AwaitExpression;

	declare export type CompletionStatement = BreakStatement | ContinueStatement | ReturnStatement | ThrowStatement;

	declare export type Conditional = ConditionalExpression | IfStatement;

	declare export type Loop = DoWhileStatement | ForInStatement | ForStatement | WhileStatement | ForOfStatement;

	declare export type While = DoWhileStatement | WhileStatement;

	declare export type ExpressionWrapper = ExpressionStatement | TypeCastExpression | ParenthesizedExpression;

	declare export type For = ForInStatement | ForStatement | ForOfStatement;

	declare export type ForXStatement = ForInStatement | ForOfStatement;

	declare export type Function = FunctionDeclaration | FunctionExpression | ObjectMethod | ArrowFunctionExpression | ClassMethod;

	declare export type FunctionParent = FunctionDeclaration | FunctionExpression | Program | ObjectMethod | ArrowFunctionExpression | ClassMethod;

	declare export type Pureish = FunctionDeclaration | FunctionExpression | StringLiteral | NumericLiteral | BooleanLiteral | ArrowFunctionExpression | ClassDeclaration | ClassExpression;

	declare export type Declaration = FunctionDeclaration | VariableDeclaration | ClassDeclaration | ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ImportDeclaration | DeclareClass | DeclareFunction | DeclareInterface | DeclareModule | DeclareTypeAlias | DeclareVariable | InterfaceDeclaration | TypeAlias;

	declare export type LVal = Identifier | MemberExpression | RestElement | AssignmentPattern | ArrayPattern | ObjectPattern;

	declare export type Literal = StringLiteral | NumericLiteral | BooleanLiteral | RegExpLiteral | TemplateLiteral;

	declare export type Immutable = StringLiteral | NumericLiteral | BooleanLiteral | JSXAttribute | JSXClosingElement | JSXElement | JSXExpressionContainer | JSXOpeningElement;

	declare export type UserWhitespacable = ObjectMethod | ObjectProperty | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeProperty;

	declare export type Method = ObjectMethod | ClassMethod;

	declare export type ObjectMember = ObjectMethod | ObjectProperty;

	declare export type Property = ObjectProperty | ClassProperty;

	declare export type UnaryLike = UnaryExpression | SpreadElement | RestProperty | SpreadProperty;

	declare export type Pattern = AssignmentPattern | ArrayPattern | ObjectPattern;

	declare export type Class = ClassDeclaration | ClassExpression;

	declare export type ModuleDeclaration = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ImportDeclaration;

	declare export type ExportDeclaration = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration;

	declare export type ModuleSpecifier = ExportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier | ImportSpecifier | ExportDefaultSpecifier | ExportNamespaceSpecifier;

	declare export type Flow = AnyTypeAnnotation | ArrayTypeAnnotation | BooleanTypeAnnotation | BooleanLiteralTypeAnnotation | ClassImplements | ClassProperty | DeclareClass | DeclareFunction | DeclareInterface | DeclareModule | DeclareTypeAlias | DeclareVariable | ExistentialTypeParam | FunctionTypeAnnotation | FunctionTypeParam | GenericTypeAnnotation | InterfaceExtends | InterfaceDeclaration | IntersectionTypeAnnotation | MixedTypeAnnotation | NullableTypeAnnotation | NumericLiteralTypeAnnotation | NumberTypeAnnotation | StringLiteralTypeAnnotation | StringTypeAnnotation | ThisTypeAnnotation | TupleTypeAnnotation | TypeofTypeAnnotation | TypeAlias | TypeAnnotation | TypeCastExpression | TypeParameterDeclaration | TypeParameterInstantiation | ObjectTypeAnnotation | ObjectTypeCallProperty | ObjectTypeIndexer | ObjectTypeProperty | QualifiedTypeIdentifier | UnionTypeAnnotation | VoidTypeAnnotation;

	declare export type FlowTypeAnnotation = AnyTypeAnnotation | ArrayTypeAnnotation | BooleanTypeAnnotation | BooleanLiteralTypeAnnotation | FunctionTypeAnnotation | GenericTypeAnnotation | IntersectionTypeAnnotation | MixedTypeAnnotation | NullableTypeAnnotation | NumericLiteralTypeAnnotation | NumberTypeAnnotation | StringLiteralTypeAnnotation | StringTypeAnnotation | ThisTypeAnnotation | TupleTypeAnnotation | TypeofTypeAnnotation | TypeAnnotation | ObjectTypeAnnotation | UnionTypeAnnotation | VoidTypeAnnotation;

	declare export type FlowBaseAnnotation = AnyTypeAnnotation | BooleanTypeAnnotation | MixedTypeAnnotation | NumberTypeAnnotation | StringTypeAnnotation | ThisTypeAnnotation | VoidTypeAnnotation;

	declare export type FlowDeclaration = DeclareClass | DeclareFunction | DeclareInterface | DeclareModule | DeclareTypeAlias | DeclareVariable | InterfaceDeclaration | TypeAlias;

	declare export type JSX = JSXAttribute | JSXClosingElement | JSXElement | JSXEmptyExpression | JSXExpressionContainer | JSXIdentifier | JSXMemberExpression | JSXNamespacedName | JSXOpeningElement | JSXSpreadAttribute | JSXText;

	declare export interface Comment {
		value: string,
		start: number,
		end: number,
		loc: SourceLocation
	}

	declare export interface CommentBlock {
		type: "CommentBlock"
	}

	declare export interface CommentLine {
		type: "CommentLine"
	}

	declare export interface SourceLocation {
		start: {
		line: number,
		column: number
	},
		end: {
		line: number,
		column: number
	}
	}

	declare export interface Node {
		type: string,
		leadingComments?: Array<Comment>,
		innerComments?: Array<Comment>,
		trailingComments?: Array<Comment>,
		start: number,
		end: number,
		loc: SourceLocation
	}

	declare export interface ArrayExpression {
		type: "ArrayExpression",
		elements: Array<Expression | SpreadElement>
	}

	declare export interface AssignmentExpression {
		type: "AssignmentExpression",
		operator: "=" | "+=" | "-=" | "*=" | "/=" | "%=" | "<<=" | ">>=" | ">>>=" | "|=" | "^=" | "&=",
		left: LVal,
		right: Expression
	}

	declare export interface BinaryExpression {
		type: "BinaryExpression",
		operator: "+" | "-" | "/" | "%" | "*" | "**" | "&" | "|" | ">>" | ">>>" | "<<" | "^" | "==" | "===" | "!=" | "!==" | "in" | "instanceof" | ">" | "<" | ">=" | "<=",
		left: Expression,
		right: Expression
	}

	declare export interface Directive {
		type: "Directive",
		value: DirectiveLiteral
	}

	declare export interface DirectiveLiteral {
		type: "DirectiveLiteral",
		value: string
	}

	declare export interface BlockStatement {
		type: "BlockStatement",
		directives?: Directive[],
		body: Statement[]
	}

	declare export interface BreakStatement {
		type: "BreakStatement",
		label: Identifier
	}

	declare export interface CallExpression {
		type: "CallExpression",
		callee: Expression | Super,
		arguments: Array<Expression | SpreadElement>
	}

	declare export interface CatchClause {
		type: "CatchClause",
		param: Pattern,
		body: BlockStatement
	}

	declare export interface ConditionalExpression {
		type: "ConditionalExpression",
		test: Expression,
		consequent: Expression,
		alternate: Expression
	}

	declare export interface ContinueStatement {
		type: "ContinueStatement",
		label: Identifier
	}

	declare export interface DebuggerStatement {
		type: "DebuggerStatement"
	}

	declare export interface DoWhileStatement {
		type: "DoWhileStatement",
		test: Expression,
		body: Statement
	}

	declare export interface EmptyStatement {
		type: "EmptyStatement"
	}

	declare export interface ExpressionStatement {
		type: "ExpressionStatement",
		expression: Expression
	}

	declare export interface File {
		type: "File",
		program: Program,
		comments: Comment[],
		tokens: any[]
	}

	declare export interface ForInStatement {
		type: "ForInStatement",
		left: VariableDeclaration | LVal,
		right: Expression,
		body: Statement
	}

	declare export interface ForStatement {
		type: "ForStatement",
		init: VariableDeclaration | Expression,
		test: Expression,
		update: Expression,
		body: Statement
	}

	declare export interface FunctionDeclaration {
		type: "FunctionDeclaration",
		id: Identifier,
		params: Pattern[],
		body: BlockStatement,
		generator: boolean,
		async: boolean,
		returnType?: TypeAnnotation,
		typeParameters?: TypeParameterDeclaration
	}

	declare export interface FunctionExpression {
		type: "FunctionExpression",
		id: Identifier,
		params: Pattern[],
		body: BlockStatement,
		generator: boolean,
		async: boolean,
		returnType?: TypeAnnotation,
		typeParameters?: TypeParameterDeclaration
	}

	declare export interface Identifier {
		type: "Identifier",
		name: string,
		typeAnnotation?: TypeAnnotation
	}

	declare export interface IfStatement {
		type: "IfStatement",
		test: Expression,
		consequent: Statement,
		alternate: Statement
	}

	declare export interface LabeledStatement {
		type: "LabeledStatement",
		label: Identifier,
		body: Statement
	}

	declare export interface StringLiteral {
		type: "StringLiteral",
		value: string
	}

	declare export interface NumericLiteral {
		type: "NumericLiteral",
		value: number
	}

	declare export interface NullLiteral {
		type: "NullLiteral"
	}

	declare export interface BooleanLiteral {
		type: "BooleanLiteral",
		value: boolean
	}

	declare export interface RegExpLiteral {
		type: "RegExpLiteral",
		pattern: string,
		flags?: string
	}

	declare export interface LogicalExpression {
		type: "LogicalExpression",
		operator: "||" | "&&",
		left: Expression,
		right: Expression
	}

	declare export interface MemberExpression {
		type: "MemberExpression",
		object: Expression | Super,
		property: Expression,
		computed: boolean
	}

	declare export interface NewExpression {
		type: "NewExpression",
		callee: Expression | Super,
		arguments: Array<Expression | SpreadElement>
	}

	declare export interface Program {
		type: "Program",
		sourceType: "script" | "module",
		directives?: Directive[],
		body: Array<Statement | ModuleDeclaration>
	}

	declare export interface ObjectExpression {
		type: "ObjectExpression",
		properties: Array<ObjectProperty | ObjectMethod | SpreadProperty>
	}

	declare export interface ObjectMethod {
		type: "ObjectMethod",
		key: Expression,
		kind: "get" | "set" | "method",
		shorthand: boolean,
		computed: boolean,
		value: Expression,
		decorators?: Decorator[],
		id: Identifier,
		params: Pattern[],
		body: BlockStatement,
		generator: boolean,
		async: boolean,
		returnType?: TypeAnnotation,
		typeParameters?: TypeParameterDeclaration
	}

	declare export interface ObjectProperty {
		type: "ObjectProperty",
		key: Expression,
		computed: boolean,
		value: Expression,
		decorators?: Decorator[],
		shorthand: boolean
	}

	declare export interface RestElement {
		type: "RestElement",
		argument: LVal,
		typeAnnotation?: TypeAnnotation
	}

	declare export interface ReturnStatement {
		type: "ReturnStatement",
		argument: Expression
	}

	declare export interface SequenceExpression {
		type: "SequenceExpression",
		expressions: Expression[]
	}

	declare export interface SwitchCase {
		type: "SwitchCase",
		test: Expression,
		consequent: Statement[]
	}

	declare export interface SwitchStatement {
		type: "SwitchStatement",
		discriminant: Expression,
		cases: SwitchCase[]
	}

	declare export interface ThisExpression {
		type: "ThisExpression"
	}

	declare export interface ThrowStatement {
		type: "ThrowStatement",
		argument: Expression
	}

	declare export interface TryStatement {
		type: "TryStatement",
		block: BlockStatement,
		handler: CatchClause,
		finalizer: BlockStatement
	}

	declare export interface UnaryExpression {
		type: "UnaryExpression",
		operator: "-" | "+" | "!" | "~" | "typeof" | "void" | "delete",
		prefix: boolean,
		argument: Expression
	}

	declare export interface UpdateExpression {
		type: "UpdateExpression",
		operator: "++" | "--",
		prefix: boolean,
		argument: Expression
	}

	declare export interface VariableDeclaration {
		type: "VariableDeclaration",
		declarations: VariableDeclarator[],
		kind: "var" | "let" | "const"
	}

	declare export interface VariableDeclarator {
		type: "VariableDeclarator",
		id: LVal,
		init: Expression
	}

	declare export interface WhileStatement {
		type: "WhileStatement",
		test: Expression,
		body: Statement
	}

	declare export interface WithStatement {
		type: "WithStatement",
		object: Expression,
		body: BlockStatement | Statement
	}

	declare export interface AssignmentPattern {
		type: "AssignmentPattern",
		left: Pattern,
		right: Expression
	}

	declare export interface ArrayPattern {
		type: "ArrayPattern",
		elements: Array<Pattern>,
		typeAnnotation?: TypeAnnotation
	}

	declare export interface ArrowFunctionExpression {
		type: "ArrowFunctionExpression",
		id: Identifier,
		params: Pattern[],
		body: BlockStatement | Expression,
		generator: boolean,
		async: boolean,
		expression: boolean,
		returnType?: TypeAnnotation,
		typeParameters?: TypeParameterDeclaration
	}

	declare export interface ClassBody {
		type: "ClassBody",
		body: Array<ClassMethod | ClassProperty>
	}

	declare export interface ClassDeclaration {
		type: "ClassDeclaration",
		id: Identifier,
		superClass: Expression,
		body: ClassBody,
		decorators?: Decorator[],
		implements?: ClassImplements[],
		mixins?: any[],
		typeParameters?: TypeParameterDeclaration,
		superTypeParameters?: TypeParameterInstantiation
	}

	declare export interface ClassExpression {
		type: "ClassExpression",
		id: Identifier,
		superClass: Expression,
		body: ClassBody,
		decorators?: Decorator[],
		implements?: ClassImplements[],
		mixins?: any[],
		typeParameters?: TypeParameterDeclaration,
		superTypeParameters?: TypeParameterInstantiation
	}

	declare export interface ExportAllDeclaration {
		type: "ExportAllDeclaration",
		source: StringLiteral
	}

	declare export interface ExportDefaultDeclaration {
		type: "ExportDefaultDeclaration",
		declaration: Declaration | Expression
	}

	declare export interface ExportNamedDeclaration {
		type: "ExportNamedDeclaration",
		declaration: Declaration,
		specifiers: ExportSpecifier[],
		source: StringLiteral
	}

	declare export interface ExportSpecifier {
		type: "ExportSpecifier",
		local: Identifier,
		imported: Identifier,
		exported: Identifier
	}

	declare export interface ForOfStatement {
		type: "ForOfStatement",
		left: VariableDeclaration | LVal,
		right: Expression,
		body: Statement
	}

	declare export interface ImportDeclaration {
		type: "ImportDeclaration",
		specifiers: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>,
		source: StringLiteral
	}

	declare export interface ImportDefaultSpecifier {
		type: "ImportDefaultSpecifier",
		local: Identifier
	}

	declare export interface ImportNamespaceSpecifier {
		type: "ImportNamespaceSpecifier",
		local: Identifier
	}

	declare export interface ImportSpecifier {
		type: "ImportSpecifier",
		local: Identifier,
		imported: Identifier
	}

	declare export interface MetaProperty {
		type: "MetaProperty",
		meta: Identifier,
		property: Identifier
	}

	declare export interface ClassMethod {
		type: "ClassMethod",
		key: Expression,
		value?: FunctionExpression,
		kind: "constructor" | "method" | "get" | "set",
		computed: boolean,
		static: boolean,
		decorators?: Decorator[],
		id: Identifier,
		params: Pattern[],
		body: BlockStatement,
		generator: boolean,
		async: boolean,
		expression: boolean,
		returnType?: TypeAnnotation,
		typeParameters?: TypeParameterDeclaration
	}

	declare export interface AssignmentProperty {
		type: "ObjectProperty",
		key: Expression,
		computed: boolean,
		value: Pattern,
		decorators?: Decorator[],
		shorthand: boolean
	}

	declare export interface ObjectPattern {
		type: "ObjectPattern",
		properties: Array<AssignmentProperty | RestProperty>,
		typeAnnotation?: TypeAnnotation
	}

	declare export interface SpreadElement {
		type: "SpreadElement",
		argument: Expression
	}

	declare export interface Super {
		type: "Super"
	}

	declare export interface TaggedTemplateExpression {
		type: "TaggedTemplateExpression",
		tag: Expression,
		quasi: TemplateLiteral
	}

	declare export interface TemplateElement {
		type: "TemplateElement",
		tail: boolean,
		value: {
		cooked: string,
		raw: string
	}
	}

	declare export interface TemplateLiteral {
		type: "TemplateLiteral",
		quasis: TemplateElement[],
		expressions: Expression[]
	}

	declare export interface YieldExpression {
		type: "YieldExpression",
		argument: Expression,
		delegate: boolean
	}

	declare export interface AnyTypeAnnotation {
		type: "AnyTypeAnnotation"
	}

	declare export interface ArrayTypeAnnotation {
		type: "ArrayTypeAnnotation",
		elementType: FlowTypeAnnotation
	}

	declare export interface BooleanTypeAnnotation {
		type: "BooleanTypeAnnotation"
	}

	declare export interface BooleanLiteralTypeAnnotation {
		type: "BooleanLiteralTypeAnnotation"
	}

	declare export interface NullLiteralTypeAnnotation {
		type: "NullLiteralTypeAnnotation"
	}

	declare export interface ClassImplements {
		type: "ClassImplements",
		id: Identifier,
		typeParameters: TypeParameterInstantiation
	}

	declare export interface ClassProperty {
		type: "ClassProperty",
		key: Identifier,
		value: Expression,
		decorators?: Decorator[],
		typeAnnotation?: TypeAnnotation
	}

	declare export interface DeclareClass {
		type: "DeclareClass",
		id: Identifier,
		typeParameters: TypeParameterDeclaration,
		extends: InterfaceExtends[],
		body: ObjectTypeAnnotation
	}

	declare export interface DeclareFunction {
		type: "DeclareFunction",
		id: Identifier
	}

	declare export interface DeclareInterface {
		type: "DeclareInterface",
		id: Identifier,
		typeParameters: TypeParameterDeclaration,
		extends: InterfaceExtends[],
		body: ObjectTypeAnnotation
	}

	declare export interface DeclareModule {
		type: "DeclareModule",
		id: StringLiteral | Identifier,
		body: BlockStatement
	}

	declare export interface DeclareTypeAlias {
		type: "DeclareTypeAlias",
		id: Identifier,
		typeParameters: TypeParameterDeclaration,
		right: FlowTypeAnnotation
	}

	declare export interface DeclareVariable {
		type: "DeclareVariable",
		id: Identifier
	}

	declare export interface ExistentialTypeParam {
		type: "ExistentialTypeParam"
	}

	declare export interface FunctionTypeAnnotation {
		type: "FunctionTypeAnnotation",
		typeParameters: TypeParameterDeclaration,
		params: FunctionTypeParam[],
		rest: FunctionTypeParam,
		returnType: FlowTypeAnnotation
	}

	declare export interface FunctionTypeParam {
		type: "FunctionTypeParam",
		name: Identifier,
		typeAnnotation: FlowTypeAnnotation
	}

	declare export interface GenericTypeAnnotation {
		type: "GenericTypeAnnotation",
		id: Identifier,
		typeParameters: TypeParameterInstantiation
	}

	declare export interface InterfaceExtends {
		type: "InterfaceExtends",
		id: Identifier,
		typeParameters: TypeParameterInstantiation
	}

	declare export interface InterfaceDeclaration {
		type: "InterfaceDeclaration",
		id: Identifier,
		typeParameters: TypeParameterDeclaration,
		extends: InterfaceExtends[],
		mixins?: any[],
		body: ObjectTypeAnnotation
	}

	declare export interface IntersectionTypeAnnotation {
		type: "IntersectionTypeAnnotation",
		types: FlowTypeAnnotation[]
	}

	declare export interface MixedTypeAnnotation {
		type: "MixedTypeAnnotation"
	}

	declare export interface NullableTypeAnnotation {
		type: "NullableTypeAnnotation",
		typeAnnotation: FlowTypeAnnotation
	}

	declare export interface NumericLiteralTypeAnnotation {
		type: "NumericLiteralTypeAnnotation"
	}

	declare export interface NumberTypeAnnotation {
		type: "NumberTypeAnnotation"
	}

	declare export interface StringLiteralTypeAnnotation {
		type: "StringLiteralTypeAnnotation"
	}

	declare export interface StringTypeAnnotation {
		type: "StringTypeAnnotation"
	}

	declare export interface ThisTypeAnnotation {
		type: "ThisTypeAnnotation"
	}

	declare export interface TupleTypeAnnotation {
		type: "TupleTypeAnnotation",
		types: FlowTypeAnnotation[]
	}

	declare export interface TypeofTypeAnnotation {
		type: "TypeofTypeAnnotation",
		argument: FlowTypeAnnotation
	}

	declare export interface TypeAlias {
		type: "TypeAlias",
		id: Identifier,
		typeParameters: TypeParameterDeclaration,
		right: FlowTypeAnnotation
	}

	declare export interface TypeAnnotation {
		type: "TypeAnnotation",
		typeAnnotation: FlowTypeAnnotation
	}

	declare export interface TypeCastExpression {
		type: "TypeCastExpression",
		expression: Expression,
		typeAnnotation: FlowTypeAnnotation
	}

	declare export interface TypeParameterDeclaration {
		type: "TypeParameterDeclaration",
		params: Identifier[]
	}

	declare export interface TypeParameterInstantiation {
		type: "TypeParameterInstantiation",
		params: FlowTypeAnnotation[]
	}

	declare export interface ObjectTypeAnnotation {
		type: "ObjectTypeAnnotation",
		properties: ObjectTypeProperty[],
		indexers: ObjectTypeIndexer[],
		callProperties: ObjectTypeCallProperty[]
	}

	declare export interface ObjectTypeCallProperty {
		type: "ObjectTypeCallProperty",
		value: FlowTypeAnnotation
	}

	declare export interface ObjectTypeIndexer {
		type: "ObjectTypeIndexer",
		id: Expression,
		key: FlowTypeAnnotation,
		value: FlowTypeAnnotation
	}

	declare export interface ObjectTypeProperty {
		type: "ObjectTypeProperty",
		key: Expression,
		value: FlowTypeAnnotation
	}

	declare export interface QualifiedTypeIdentifier {
		type: "QualifiedTypeIdentifier",
		id: Identifier,
		qualification: Identifier | QualifiedTypeIdentifier
	}

	declare export interface UnionTypeAnnotation {
		type: "UnionTypeAnnotation",
		types: FlowTypeAnnotation[]
	}

	declare export interface VoidTypeAnnotation {
		type: "VoidTypeAnnotation"
	}

	declare export interface JSXAttribute {
		type: "JSXAttribute",
		name: JSXIdentifier | JSXNamespacedName,
		value: JSXElement | StringLiteral | JSXExpressionContainer
	}

	declare export interface JSXClosingElement {
		type: "JSXClosingElement",
		name: JSXIdentifier | JSXMemberExpression
	}

	declare export interface JSXElement {
		type: "JSXElement",
		openingElement: JSXOpeningElement,
		closingElement: JSXClosingElement,
		children: Array<JSXElement | JSXExpressionContainer | JSXText>,
		selfClosing?: boolean
	}

	declare export interface JSXEmptyExpression {
		type: "JSXEmptyExpression"
	}

	declare export interface JSXExpressionContainer {
		type: "JSXExpressionContainer",
		expression: Expression
	}

	declare export interface JSXIdentifier {
		type: "JSXIdentifier",
		name: string
	}

	declare export interface JSXMemberExpression {
		type: "JSXMemberExpression",
		object: JSXMemberExpression | JSXIdentifier,
		property: JSXIdentifier
	}

	declare export interface JSXNamespacedName {
		type: "JSXNamespacedName",
		namespace: JSXIdentifier,
		name: JSXIdentifier
	}

	declare export interface JSXOpeningElement {
		type: "JSXOpeningElement",
		name: JSXIdentifier | JSXMemberExpression,
		selfClosing: boolean,
		attributes: JSXAttribute[]
	}

	declare export interface JSXSpreadAttribute {
		type: "JSXSpreadAttribute",
		argument: Expression
	}

	declare export interface JSXText {
		type: "JSXText",
		value: string
	}

	declare export interface Noop {
		type: "Noop"
	}

	declare export interface ParenthesizedExpression {
		type: "ParenthesizedExpression",
		expression: Expression
	}

	declare export interface AwaitExpression {
		type: "AwaitExpression",
		argument: Expression
	}

	declare export interface BindExpression {
		type: "BindExpression",
		object: Expression,
		callee: Expression
	}

	declare export interface Decorator {
		type: "Decorator",
		expression: Expression
	}

	declare export interface DoExpression {
		type: "DoExpression",
		body: BlockStatement
	}

	declare export interface ExportDefaultSpecifier {
		type: "ExportDefaultSpecifier",
		exported: Identifier
	}

	declare export interface ExportNamespaceSpecifier {
		type: "ExportNamespaceSpecifier",
		exported: Identifier
	}

	declare export interface RestProperty {
		type: "RestProperty",
		argument: LVal
	}

	declare export interface SpreadProperty {
		type: "SpreadProperty",
		argument: Expression
	}

	declare export function arrayExpression(elements?: Array<Expression | SpreadElement>): ArrayExpression

	declare export function assignmentExpression(operator?: string, left?: LVal, right?: Expression): AssignmentExpression

	declare export function binaryExpression(
		operator?: "+" | "-" | "/" | "%" | "*" | "**" | "&" | "|" | ">>" | ">>>" | "<<" | "^" | "==" | "===" | "!=" | "!==" | "in" | "instanceof" | ">" | "<" | ">=" | "<=", left?: Expression, right?: Expression
	): BinaryExpression

	declare export function directive(value?: DirectiveLiteral): Directive

	declare export function directiveLiteral(value?: string): DirectiveLiteral

	declare export function blockStatement(body?: Statement[], directives?: Directive[]): BlockStatement

	declare export function breakStatement(label?: Identifier): BreakStatement

	declare export function callExpression(
		callee?: Expression, _arguments?: Array<Expression | SpreadElement>
	): CallExpression

	declare export function catchClause(param?: Identifier, body?: BlockStatement): CatchClause

	declare export function conditionalExpression(
		test?: Expression, consequent?: Expression, alternate?: Expression
	): ConditionalExpression

	declare export function continueStatement(label?: Identifier): ContinueStatement

	declare export function debuggerStatement(): DebuggerStatement

	declare export function doWhileStatement(test?: Expression, body?: Statement): DoWhileStatement

	declare export function emptyStatement(): EmptyStatement

	declare export function expressionStatement(expression?: Expression): ExpressionStatement

	declare export function file(program?: Program, comments?: Comment[], tokens?: any[]): File

	declare export function forInStatement(
		left?: VariableDeclaration | LVal, right?: Expression, body?: Statement
	): ForInStatement

	declare export function forStatement(
		init?: VariableDeclaration | Expression, test?: Expression, update?: Expression, body?: Statement
	): ForStatement

	declare export function functionDeclaration(
		id?: Identifier, params?: Pattern[], body?: BlockStatement, generator?: boolean, async?: boolean
	): FunctionDeclaration

	declare export function functionExpression(
		id?: Identifier, params?: Pattern[], body?: BlockStatement, generator?: boolean, async?: boolean
	): FunctionExpression

	declare export function identifier(name?: string): Identifier

	declare export function ifStatement(test?: Expression, consequent?: Statement, alternate?: Statement): IfStatement

	declare export function labeledStatement(label?: Identifier, body?: Statement): LabeledStatement

	declare export function stringLiteral(value?: string): StringLiteral

	declare export function numericLiteral(value?: number): NumericLiteral

	declare export function nullLiteral(): NullLiteral

	declare export function booleanLiteral(value?: boolean): BooleanLiteral

	declare export function regExpLiteral(pattern?: string, flags?: string): RegExpLiteral

	declare export function logicalExpression(
		operator?: "||" | "&&", left?: Expression, right?: Expression
	): LogicalExpression

	declare export function memberExpression(
		object?: Expression | Super, property?: Expression, computed?: boolean
	): MemberExpression

	declare export function newExpression(
		callee?: Expression | Super, _arguments?: Array<Expression | SpreadElement>
	): NewExpression

	declare export function program(body?: Array<Statement | ModuleDeclaration>, directives?: Directive[]): Program

	declare export function objectExpression(
		properties?: Array<ObjectProperty | ObjectMethod | SpreadProperty>
	): ObjectExpression

	declare export function objectMethod(
		kind?: "get" | "set" | "method", key?: Expression, params?: Pattern[], body?: BlockStatement, computed?: boolean
	): ObjectMethod

	declare export function objectProperty(
		key?: Expression, value?: Expression, computed?: boolean, shorthand?: boolean, decorators?: Decorator[]
	): ObjectProperty

	declare export function restElement(argument?: LVal, typeAnnotation?: TypeAnnotation): RestElement

	declare export function returnStatement(argument?: Expression): ReturnStatement

	declare export function sequenceExpression(expressions?: Expression[]): SequenceExpression

	declare export function switchCase(test?: Expression, consequent?: Statement[]): SwitchCase

	declare export function switchStatement(discriminant?: Expression, cases?: SwitchCase[]): SwitchStatement

	declare export function thisExpression(): ThisExpression

	declare export function throwStatement(argument?: Expression): ThrowStatement

	declare export function tryStatement(
		block?: BlockStatement, handler?: CatchClause, finalizer?: BlockStatement
	): TryStatement

	declare export function unaryExpression(
		operator?: "void" | "delete" | "!" | "+" | "-" | "++" | "--" | "~" | "typeof", argument?: Expression, prefix?: boolean
	): UnaryExpression

	declare export function updateExpression(
		operator?: "++" | "--", argument?: Expression, prefix?: boolean
	): UpdateExpression

	declare export function variableDeclaration(
		kind?: "var" | "let" | "const", declarations?: VariableDeclarator[]
	): VariableDeclaration

	declare export function variableDeclarator(id?: LVal, init?: Expression): VariableDeclarator

	declare export function whileStatement(test?: Expression, body?: BlockStatement | Statement): WhileStatement

	declare export function withStatement(object?: Expression, body?: BlockStatement | Statement): WithStatement

	declare export function assignmentPattern(left?: Identifier, right?: Expression): AssignmentPattern

	declare export function arrayPattern(elements?: Array<Pattern>, typeAnnotation?: TypeAnnotation): ArrayPattern

	declare export function arrowFunctionExpression(
		params?: Pattern[], body?: BlockStatement | Expression, async?: boolean
	): ArrowFunctionExpression

	declare export function classBody(body?: Array<ClassMethod | ClassProperty>): ClassBody

	declare export function classDeclaration(
		id?: Identifier, superClass?: Expression, body?: ClassBody, decorators?: Decorator[]
	): ClassDeclaration

	declare export function classExpression(
		id?: Identifier, superClass?: Expression, body?: ClassBody, decorators?: Decorator[]
	): ClassExpression

	declare export function exportAllDeclaration(source?: StringLiteral): ExportAllDeclaration

	declare export function exportDefaultDeclaration(
		declaration?: FunctionDeclaration | ClassDeclaration | Expression
	): ExportDefaultDeclaration

	declare export function exportNamedDeclaration(
		declaration?: Declaration, specifiers?: ExportSpecifier[], source?: StringLiteral
	): ExportNamedDeclaration

	declare export function exportSpecifier(local?: Identifier, exported?: Identifier): ExportSpecifier

	declare export function forOfStatement(
		left?: VariableDeclaration | LVal, right?: Expression, body?: Statement
	): ForOfStatement

	declare export function importDeclaration(
		specifiers?: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>, source?: StringLiteral
	): ImportDeclaration

	declare export function importDefaultSpecifier(local?: Identifier): ImportDefaultSpecifier

	declare export function importNamespaceSpecifier(local?: Identifier): ImportNamespaceSpecifier

	declare export function importSpecifier(local?: Identifier, imported?: Identifier): ImportSpecifier

	declare export function metaProperty(meta?: string, property?: string): MetaProperty

	declare export function classMethod(
		kind?: "constructor" | "method" | "get" | "set", key?: Expression, params?: Pattern[], body?: BlockStatement, computed?: boolean, _static?: boolean
	): ClassMethod

	declare export function objectPattern(
		properties?: Array<AssignmentProperty | RestProperty>, typeAnnotation?: TypeAnnotation
	): ObjectPattern

	declare export function spreadElement(argument?: Expression): SpreadElement

	declare export function taggedTemplateExpression(tag?: Expression, quasi?: TemplateLiteral): TaggedTemplateExpression

	declare export function templateElement(
		value?: {
		cooked?: string,
		raw?: string
	}, tail?: boolean
	): TemplateElement

	declare export function templateLiteral(quasis?: TemplateElement[], expressions?: Expression[]): TemplateLiteral

	declare export function yieldExpression(argument?: Expression, delegate?: boolean): YieldExpression

	declare export function anyTypeAnnotation(): AnyTypeAnnotation

	declare export function arrayTypeAnnotation(elementType?: FlowTypeAnnotation): ArrayTypeAnnotation

	declare export function booleanTypeAnnotation(): BooleanTypeAnnotation

	declare export function booleanLiteralTypeAnnotation(): BooleanLiteralTypeAnnotation

	declare export function nullLiteralTypeAnnotation(): NullLiteralTypeAnnotation

	declare export function classImplements(id?: Identifier, typeParameters?: TypeParameterInstantiation): ClassImplements

	declare export function classProperty(
		key?: Identifier, value?: Expression, typeAnnotation?: TypeAnnotation, decorators?: Decorator[]
	): ClassProperty

	declare export function declareClass(
		id?: Identifier, typeParameters?: TypeParameterDeclaration, _extends?: InterfaceExtends[], body?: ObjectTypeAnnotation
	): DeclareClass

	declare export function declareFunction(id?: Identifier): DeclareFunction

	declare export function declareInterface(
		id?: Identifier, typeParameters?: TypeParameterDeclaration, _extends?: InterfaceExtends[], body?: ObjectTypeAnnotation
	): DeclareInterface

	declare export function declareModule(id?: StringLiteral | Identifier, body?: BlockStatement): DeclareModule

	declare export function declareTypeAlias(
		id?: Identifier, typeParameters?: TypeParameterDeclaration, right?: FlowTypeAnnotation
	): DeclareTypeAlias

	declare export function declareVariable(id?: Identifier): DeclareVariable

	declare export function existentialTypeParam(): ExistentialTypeParam

	declare export function functionTypeAnnotation(
		typeParameters?: TypeParameterDeclaration, params?: FunctionTypeParam[], rest?: FunctionTypeParam, returnType?: FlowTypeAnnotation
	): FunctionTypeAnnotation

	declare export function functionTypeParam(name?: Identifier, typeAnnotation?: FlowTypeAnnotation): FunctionTypeParam

	declare export function genericTypeAnnotation(
		id?: Identifier, typeParameters?: TypeParameterInstantiation
	): GenericTypeAnnotation

	declare export function interfaceExtends(id?: Identifier, typeParameters?: TypeParameterInstantiation): InterfaceExtends

	declare export function interfaceDeclaration(
		id?: Identifier, typeParameters?: TypeParameterDeclaration, _extends?: InterfaceExtends[], body?: ObjectTypeAnnotation
	): InterfaceDeclaration

	declare export function intersectionTypeAnnotation(types?: FlowTypeAnnotation[]): IntersectionTypeAnnotation

	declare export function mixedTypeAnnotation(): MixedTypeAnnotation

	declare export function nullableTypeAnnotation(typeAnnotation?: FlowTypeAnnotation): NullableTypeAnnotation

	declare export function numericLiteralTypeAnnotation(): NumericLiteralTypeAnnotation

	declare export function numberTypeAnnotation(): NumberTypeAnnotation

	declare export function stringLiteralTypeAnnotation(): StringLiteralTypeAnnotation

	declare export function stringTypeAnnotation(): StringTypeAnnotation

	declare export function thisTypeAnnotation(): ThisTypeAnnotation

	declare export function tupleTypeAnnotation(types?: FlowTypeAnnotation[]): TupleTypeAnnotation

	declare export function typeofTypeAnnotation(argument?: FlowTypeAnnotation): TypeofTypeAnnotation

	declare export function typeAlias(
		id?: Identifier, typeParameters?: TypeParameterDeclaration, right?: FlowTypeAnnotation
	): TypeAlias

	declare export function typeAnnotation(typeAnnotation?: FlowTypeAnnotation): TypeAnnotation

	declare export function typeCastExpression(
		expression?: Expression, typeAnnotation?: FlowTypeAnnotation
	): TypeCastExpression

	declare export function typeParameterDeclaration(params?: Identifier[]): TypeParameterDeclaration

	declare export function typeParameterInstantiation(params?: FlowTypeAnnotation[]): TypeParameterInstantiation

	declare export function objectTypeAnnotation(
		properties?: ObjectTypeProperty[], indexers?: ObjectTypeIndexer[], callProperties?: ObjectTypeCallProperty[]
	): ObjectTypeAnnotation

	declare export function objectTypeCallProperty(value?: FlowTypeAnnotation): ObjectTypeCallProperty

	declare export function objectTypeIndexer(
		id?: Expression, key?: FlowTypeAnnotation, value?: FlowTypeAnnotation
	): ObjectTypeIndexer

	declare export function objectTypeProperty(key?: Expression, value?: FlowTypeAnnotation): ObjectTypeProperty

	declare export function qualifiedTypeIdentifier(
		id?: Identifier, qualification?: Identifier | QualifiedTypeIdentifier
	): QualifiedTypeIdentifier

	declare export function unionTypeAnnotation(types?: FlowTypeAnnotation[]): UnionTypeAnnotation

	declare export function voidTypeAnnotation(): VoidTypeAnnotation

	declare export function jSXAttribute(
		name?: JSXIdentifier | JSXNamespacedName, value?: JSXElement | StringLiteral | JSXExpressionContainer
	): JSXAttribute

	declare export function jSXClosingElement(name?: JSXIdentifier | JSXMemberExpression): JSXClosingElement

	declare export function jSXElement(
		openingElement?: JSXOpeningElement, closingElement?: JSXClosingElement, children?: Array<JSXElement | JSXExpressionContainer | JSXText>, selfClosing?: boolean
	): JSXElement

	declare export function jSXEmptyExpression(): JSXEmptyExpression

	declare export function jSXExpressionContainer(expression?: Expression): JSXExpressionContainer

	declare export function jSXIdentifier(name?: string): JSXIdentifier

	declare export function jSXMemberExpression(
		object?: JSXMemberExpression | JSXIdentifier, property?: JSXIdentifier
	): JSXMemberExpression

	declare export function jSXNamespacedName(namespace?: JSXIdentifier, name?: JSXIdentifier): JSXNamespacedName

	declare export function jSXOpeningElement(
		name?: JSXIdentifier | JSXMemberExpression, attributes?: JSXAttribute[], selfClosing?: boolean
	): JSXOpeningElement

	declare export function jSXSpreadAttribute(argument?: Expression): JSXSpreadAttribute

	declare export function jSXText(value?: string): JSXText

	declare export function noop(): Noop

	declare export function parenthesizedExpression(expression?: Expression): ParenthesizedExpression

	declare export function awaitExpression(argument?: Expression): AwaitExpression

	declare export function bindExpression(object?: Expression, callee?: Expression): BindExpression

	declare export function decorator(expression?: Expression): Decorator

	declare export function doExpression(body?: BlockStatement): DoExpression

	declare export function exportDefaultSpecifier(exported?: Identifier): ExportDefaultSpecifier

	declare export function exportNamespaceSpecifier(exported?: Identifier): ExportNamespaceSpecifier

	declare export function restProperty(argument?: LVal): RestProperty

	declare export function spreadProperty(argument?: Expression): SpreadProperty

	declare export function isArrayExpression(node: Object, opts?: Object): ArrayExpression

	declare export function isAssignmentExpression(node: Object, opts?: Object): AssignmentExpression

	declare export function isBinaryExpression(node: Object, opts?: Object): BinaryExpression

	declare export function isDirective(node: Object, opts?: Object): Directive

	declare export function isDirectiveLiteral(node: Object, opts?: Object): DirectiveLiteral

	declare export function isBlockStatement(node: Object, opts?: Object): BlockStatement

	declare export function isBreakStatement(node: Object, opts?: Object): BreakStatement

	declare export function isCallExpression(node: Object, opts?: Object): CallExpression

	declare export function isCatchClause(node: Object, opts?: Object): CatchClause

	declare export function isConditionalExpression(node: Object, opts?: Object): ConditionalExpression

	declare export function isContinueStatement(node: Object, opts?: Object): ContinueStatement

	declare export function isDebuggerStatement(node: Object, opts?: Object): DebuggerStatement

	declare export function isDoWhileStatement(node: Object, opts?: Object): DoWhileStatement

	declare export function isEmptyStatement(node: Object, opts?: Object): EmptyStatement

	declare export function isExpressionStatement(node: Object, opts?: Object): ExpressionStatement

	declare export function isFile(node: Object, opts?: Object): File

	declare export function isForInStatement(node: Object, opts?: Object): ForInStatement

	declare export function isForStatement(node: Object, opts?: Object): ForStatement

	declare export function isFunctionDeclaration(node: Object, opts?: Object): FunctionDeclaration

	declare export function isFunctionExpression(node: Object, opts?: Object): FunctionExpression

	declare export function isIdentifier(node: Object, opts?: Object): Identifier

	declare export function isIfStatement(node: Object, opts?: Object): IfStatement

	declare export function isLabeledStatement(node: Object, opts?: Object): LabeledStatement

	declare export function isStringLiteral(node: Object, opts?: Object): StringLiteral

	declare export function isNumericLiteral(node: Object, opts?: Object): NumericLiteral

	declare export function isNullLiteral(node: Object, opts?: Object): NullLiteral

	declare export function isBooleanLiteral(node: Object, opts?: Object): BooleanLiteral

	declare export function isRegExpLiteral(node: Object, opts?: Object): RegExpLiteral

	declare export function isLogicalExpression(node: Object, opts?: Object): LogicalExpression

	declare export function isMemberExpression(node: Object, opts?: Object): MemberExpression

	declare export function isNewExpression(node: Object, opts?: Object): NewExpression

	declare export function isProgram(node: Object, opts?: Object): Program

	declare export function isObjectExpression(node: Object, opts?: Object): ObjectExpression

	declare export function isObjectMethod(node: Object, opts?: Object): ObjectMethod

	declare export function isObjectProperty(node: Object, opts?: Object): ObjectProperty

	declare export function isRestElement(node: Object, opts?: Object): RestElement

	declare export function isReturnStatement(node: Object, opts?: Object): ReturnStatement

	declare export function isSequenceExpression(node: Object, opts?: Object): SequenceExpression

	declare export function isSwitchCase(node: Object, opts?: Object): SwitchCase

	declare export function isSwitchStatement(node: Object, opts?: Object): SwitchStatement

	declare export function isThisExpression(node: Object, opts?: Object): ThisExpression

	declare export function isThrowStatement(node: Object, opts?: Object): ThrowStatement

	declare export function isTryStatement(node: Object, opts?: Object): TryStatement

	declare export function isUnaryExpression(node: Object, opts?: Object): UnaryExpression

	declare export function isUpdateExpression(node: Object, opts?: Object): UpdateExpression

	declare export function isVariableDeclaration(node: Object, opts?: Object): VariableDeclaration

	declare export function isVariableDeclarator(node: Object, opts?: Object): VariableDeclarator

	declare export function isWhileStatement(node: Object, opts?: Object): WhileStatement

	declare export function isWithStatement(node: Object, opts?: Object): WithStatement

	declare export function isAssignmentPattern(node: Object, opts?: Object): AssignmentPattern

	declare export function isArrayPattern(node: Object, opts?: Object): ArrayPattern

	declare export function isArrowFunctionExpression(node: Object, opts?: Object): ArrowFunctionExpression

	declare export function isClassBody(node: Object, opts?: Object): ClassBody

	declare export function isClassDeclaration(node: Object, opts?: Object): ClassDeclaration

	declare export function isClassExpression(node: Object, opts?: Object): ClassExpression

	declare export function isExportAllDeclaration(node: Object, opts?: Object): ExportAllDeclaration

	declare export function isExportDefaultDeclaration(node: Object, opts?: Object): ExportDefaultDeclaration

	declare export function isExportNamedDeclaration(node: Object, opts?: Object): ExportNamedDeclaration

	declare export function isExportSpecifier(node: Object, opts?: Object): ExportSpecifier

	declare export function isForOfStatement(node: Object, opts?: Object): ForOfStatement

	declare export function isImportDeclaration(node: Object, opts?: Object): ImportDeclaration

	declare export function isImportDefaultSpecifier(node: Object, opts?: Object): ImportDefaultSpecifier

	declare export function isImportNamespaceSpecifier(node: Object, opts?: Object): ImportNamespaceSpecifier

	declare export function isImportSpecifier(node: Object, opts?: Object): ImportSpecifier

	declare export function isMetaProperty(node: Object, opts?: Object): MetaProperty

	declare export function isClassMethod(node: Object, opts?: Object): ClassMethod

	declare export function isObjectPattern(node: Object, opts?: Object): ObjectPattern

	declare export function isSpreadElement(node: Object, opts?: Object): SpreadElement

	declare export function isSuper(node: Object, opts?: Object): Super

	declare export function isTaggedTemplateExpression(node: Object, opts?: Object): TaggedTemplateExpression

	declare export function isTemplateElement(node: Object, opts?: Object): TemplateElement

	declare export function isTemplateLiteral(node: Object, opts?: Object): TemplateLiteral

	declare export function isYieldExpression(node: Object, opts?: Object): YieldExpression

	declare export function isAnyTypeAnnotation(node: Object, opts?: Object): AnyTypeAnnotation

	declare export function isArrayTypeAnnotation(node: Object, opts?: Object): ArrayTypeAnnotation

	declare export function isBooleanTypeAnnotation(node: Object, opts?: Object): BooleanTypeAnnotation

	declare export function isBooleanLiteralTypeAnnotation(node: Object, opts?: Object): BooleanLiteralTypeAnnotation

	declare export function isNullLiteralTypeAnnotation(node: Object, opts?: Object): NullLiteralTypeAnnotation

	declare export function isClassImplements(node: Object, opts?: Object): ClassImplements

	declare export function isClassProperty(node: Object, opts?: Object): ClassProperty

	declare export function isDeclareClass(node: Object, opts?: Object): DeclareClass

	declare export function isDeclareFunction(node: Object, opts?: Object): DeclareFunction

	declare export function isDeclareInterface(node: Object, opts?: Object): DeclareInterface

	declare export function isDeclareModule(node: Object, opts?: Object): DeclareModule

	declare export function isDeclareTypeAlias(node: Object, opts?: Object): DeclareTypeAlias

	declare export function isDeclareVariable(node: Object, opts?: Object): DeclareVariable

	declare export function isExistentialTypeParam(node: Object, opts?: Object): ExistentialTypeParam

	declare export function isFunctionTypeAnnotation(node: Object, opts?: Object): FunctionTypeAnnotation

	declare export function isFunctionTypeParam(node: Object, opts?: Object): FunctionTypeParam

	declare export function isGenericTypeAnnotation(node: Object, opts?: Object): GenericTypeAnnotation

	declare export function isInterfaceExtends(node: Object, opts?: Object): InterfaceExtends

	declare export function isInterfaceDeclaration(node: Object, opts?: Object): InterfaceDeclaration

	declare export function isIntersectionTypeAnnotation(node: Object, opts?: Object): IntersectionTypeAnnotation

	declare export function isMixedTypeAnnotation(node: Object, opts?: Object): MixedTypeAnnotation

	declare export function isNullableTypeAnnotation(node: Object, opts?: Object): NullableTypeAnnotation

	declare export function isNumericLiteralTypeAnnotation(node: Object, opts?: Object): NumericLiteralTypeAnnotation

	declare export function isNumberTypeAnnotation(node: Object, opts?: Object): NumberTypeAnnotation

	declare export function isStringLiteralTypeAnnotation(node: Object, opts?: Object): StringLiteralTypeAnnotation

	declare export function isStringTypeAnnotation(node: Object, opts?: Object): StringTypeAnnotation

	declare export function isThisTypeAnnotation(node: Object, opts?: Object): ThisTypeAnnotation

	declare export function isTupleTypeAnnotation(node: Object, opts?: Object): TupleTypeAnnotation

	declare export function isTypeofTypeAnnotation(node: Object, opts?: Object): TypeofTypeAnnotation

	declare export function isTypeAlias(node: Object, opts?: Object): TypeAlias

	declare export function isTypeAnnotation(node: Object, opts?: Object): TypeAnnotation

	declare export function isTypeCastExpression(node: Object, opts?: Object): TypeCastExpression

	declare export function isTypeParameterDeclaration(node: Object, opts?: Object): TypeParameterDeclaration

	declare export function isTypeParameterInstantiation(node: Object, opts?: Object): TypeParameterInstantiation

	declare export function isObjectTypeAnnotation(node: Object, opts?: Object): ObjectTypeAnnotation

	declare export function isObjectTypeCallProperty(node: Object, opts?: Object): ObjectTypeCallProperty

	declare export function isObjectTypeIndexer(node: Object, opts?: Object): ObjectTypeIndexer

	declare export function isObjectTypeProperty(node: Object, opts?: Object): ObjectTypeProperty

	declare export function isQualifiedTypeIdentifier(node: Object, opts?: Object): QualifiedTypeIdentifier

	declare export function isUnionTypeAnnotation(node: Object, opts?: Object): UnionTypeAnnotation

	declare export function isVoidTypeAnnotation(node: Object, opts?: Object): VoidTypeAnnotation

	declare export function isJSXAttribute(node: Object, opts?: Object): JSXAttribute

	declare export function isJSXClosingElement(node: Object, opts?: Object): JSXClosingElement

	declare export function isJSXElement(node: Object, opts?: Object): JSXElement

	declare export function isJSXEmptyExpression(node: Object, opts?: Object): JSXEmptyExpression

	declare export function isJSXExpressionContainer(node: Object, opts?: Object): JSXExpressionContainer

	declare export function isJSXIdentifier(node: Object, opts?: Object): JSXIdentifier

	declare export function isJSXMemberExpression(node: Object, opts?: Object): JSXMemberExpression

	declare export function isJSXNamespacedName(node: Object, opts?: Object): JSXNamespacedName

	declare export function isJSXOpeningElement(node: Object, opts?: Object): JSXOpeningElement

	declare export function isJSXSpreadAttribute(node: Object, opts?: Object): JSXSpreadAttribute

	declare export function isJSXText(node: Object, opts?: Object): JSXText

	declare export function isNoop(node: Object, opts?: Object): Noop

	declare export function isParenthesizedExpression(node: Object, opts?: Object): ParenthesizedExpression

	declare export function isAwaitExpression(node: Object, opts?: Object): AwaitExpression

	declare export function isBindExpression(node: Object, opts?: Object): BindExpression

	declare export function isDecorator(node: Object, opts?: Object): Decorator

	declare export function isDoExpression(node: Object, opts?: Object): DoExpression

	declare export function isExportDefaultSpecifier(node: Object, opts?: Object): ExportDefaultSpecifier

	declare export function isExportNamespaceSpecifier(node: Object, opts?: Object): ExportNamespaceSpecifier

	declare export function isRestProperty(node: Object, opts?: Object): RestProperty

	declare export function isSpreadProperty(node: Object, opts?: Object): SpreadProperty

	declare export function isExpression(node: Object, opts?: Object): Expression

	declare export function isBinary(node: Object, opts?: Object): Binary

	declare export function isScopable(node: Object, opts?: Object): Scopable

	declare export function isBlockParent(node: Object, opts?: Object): BlockParent

	declare export function isBlock(node: Object, opts?: Object): Block

	declare export function isStatement(node: Object, opts?: Object): Statement

	declare export function isTerminatorless(node: Object, opts?: Object): Terminatorless

	declare export function isCompletionStatement(node: Object, opts?: Object): CompletionStatement

	declare export function isConditional(node: Object, opts?: Object): Conditional

	declare export function isLoop(node: Object, opts?: Object): Loop

	declare export function isWhile(node: Object, opts?: Object): While

	declare export function isExpressionWrapper(node: Object, opts?: Object): ExpressionWrapper

	declare export function isFor(node: Object, opts?: Object): For

	declare export function isForXStatement(node: Object, opts?: Object): ForXStatement

	declare export function isFunction(node: Object, opts?: Object): Function

	declare export function isFunctionParent(node: Object, opts?: Object): FunctionParent

	declare export function isPureish(node: Object, opts?: Object): Pureish

	declare export function isDeclaration(node: Object, opts?: Object): Declaration

	declare export function isLVal(node: Object, opts?: Object): LVal

	declare export function isLiteral(node: Object, opts?: Object): Literal

	declare export function isImmutable(node: Object, opts?: Object): Immutable

	declare export function isUserWhitespacable(node: Object, opts?: Object): UserWhitespacable

	declare export function isMethod(node: Object, opts?: Object): Method

	declare export function isObjectMember(node: Object, opts?: Object): ObjectMember

	declare export function isProperty(node: Object, opts?: Object): Property

	declare export function isUnaryLike(node: Object, opts?: Object): UnaryLike

	declare export function isPattern(node: Object, opts?: Object): Pattern

	declare export function isClass(node: Object, opts?: Object): Class

	declare export function isModuleDeclaration(node: Object, opts?: Object): ModuleDeclaration

	declare export function isExportDeclaration(node: Object, opts?: Object): ExportDeclaration

	declare export function isModuleSpecifier(node: Object, opts?: Object): ModuleSpecifier

	declare export function isFlow(node: Object, opts?: Object): Flow

	declare export function isFlowBaseAnnotation(node: Object, opts?: Object): FlowBaseAnnotation

	declare export function isFlowDeclaration(node: Object, opts?: Object): FlowDeclaration

	declare export function isJSX(node: Object, opts?: Object): JSX

	declare export function isNumberLiteral(node: Object, opts?: Object): NumericLiteral

	declare export function isRegexLiteral(node: Object, opts?: Object): RegExpLiteral

	declare export function isReferencedIdentifier(node: Object, opts?: Object): boolean

	declare export function isReferencedMemberExpression(node: Object, opts?: Object): boolean

	declare export function isBindingIdentifier(node: Object, opts?: Object): boolean

	declare export function isScope(node: Object, opts?: Object): boolean

	declare export function isReferenced(node: Object, opts?: Object): boolean

	declare export function isBlockScoped(node: Object, opts?: Object): boolean

	declare export function isVar(node: Object, opts?: Object): boolean

	declare export function isUser(node: Object, opts?: Object): boolean

	declare export function isGenerated(node: Object, opts?: Object): boolean

	declare export function isPure(node: Object, opts?: Object): boolean

	declare export function assertArrayExpression(node: Object, opts?: Object): void

	declare export function assertAssignmentExpression(node: Object, opts?: Object): void

	declare export function assertBinaryExpression(node: Object, opts?: Object): void

	declare export function assertDirective(node: Object, opts?: Object): void

	declare export function assertDirectiveLiteral(node: Object, opts?: Object): void

	declare export function assertBlockStatement(node: Object, opts?: Object): void

	declare export function assertBreakStatement(node: Object, opts?: Object): void

	declare export function assertCallExpression(node: Object, opts?: Object): void

	declare export function assertCatchClause(node: Object, opts?: Object): void

	declare export function assertConditionalExpression(node: Object, opts?: Object): void

	declare export function assertContinueStatement(node: Object, opts?: Object): void

	declare export function assertDebuggerStatement(node: Object, opts?: Object): void

	declare export function assertDoWhileStatement(node: Object, opts?: Object): void

	declare export function assertEmptyStatement(node: Object, opts?: Object): void

	declare export function assertExpressionStatement(node: Object, opts?: Object): void

	declare export function assertFile(node: Object, opts?: Object): void

	declare export function assertForInStatement(node: Object, opts?: Object): void

	declare export function assertForStatement(node: Object, opts?: Object): void

	declare export function assertFunctionDeclaration(node: Object, opts?: Object): void

	declare export function assertFunctionExpression(node: Object, opts?: Object): void

	declare export function assertIdentifier(node: Object, opts?: Object): void

	declare export function assertIfStatement(node: Object, opts?: Object): void

	declare export function assertLabeledStatement(node: Object, opts?: Object): void

	declare export function assertStringLiteral(node: Object, opts?: Object): void

	declare export function assertNumericLiteral(node: Object, opts?: Object): void

	declare export function assertNullLiteral(node: Object, opts?: Object): void

	declare export function assertBooleanLiteral(node: Object, opts?: Object): void

	declare export function assertRegExpLiteral(node: Object, opts?: Object): void

	declare export function assertLogicalExpression(node: Object, opts?: Object): void

	declare export function assertMemberExpression(node: Object, opts?: Object): void

	declare export function assertNewExpression(node: Object, opts?: Object): void

	declare export function assertProgram(node: Object, opts?: Object): void

	declare export function assertObjectExpression(node: Object, opts?: Object): void

	declare export function assertObjectMethod(node: Object, opts?: Object): void

	declare export function assertObjectProperty(node: Object, opts?: Object): void

	declare export function assertRestElement(node: Object, opts?: Object): void

	declare export function assertReturnStatement(node: Object, opts?: Object): void

	declare export function assertSequenceExpression(node: Object, opts?: Object): void

	declare export function assertSwitchCase(node: Object, opts?: Object): void

	declare export function assertSwitchStatement(node: Object, opts?: Object): void

	declare export function assertThisExpression(node: Object, opts?: Object): void

	declare export function assertThrowStatement(node: Object, opts?: Object): void

	declare export function assertTryStatement(node: Object, opts?: Object): void

	declare export function assertUnaryExpression(node: Object, opts?: Object): void

	declare export function assertUpdateExpression(node: Object, opts?: Object): void

	declare export function assertVariableDeclaration(node: Object, opts?: Object): void

	declare export function assertVariableDeclarator(node: Object, opts?: Object): void

	declare export function assertWhileStatement(node: Object, opts?: Object): void

	declare export function assertWithStatement(node: Object, opts?: Object): void

	declare export function assertAssignmentPattern(node: Object, opts?: Object): void

	declare export function assertArrayPattern(node: Object, opts?: Object): void

	declare export function assertArrowFunctionExpression(node: Object, opts?: Object): void

	declare export function assertClassBody(node: Object, opts?: Object): void

	declare export function assertClassDeclaration(node: Object, opts?: Object): void

	declare export function assertClassExpression(node: Object, opts?: Object): void

	declare export function assertExportAllDeclaration(node: Object, opts?: Object): void

	declare export function assertExportDefaultDeclaration(node: Object, opts?: Object): void

	declare export function assertExportNamedDeclaration(node: Object, opts?: Object): void

	declare export function assertExportSpecifier(node: Object, opts?: Object): void

	declare export function assertForOfStatement(node: Object, opts?: Object): void

	declare export function assertImportDeclaration(node: Object, opts?: Object): void

	declare export function assertImportDefaultSpecifier(node: Object, opts?: Object): void

	declare export function assertImportNamespaceSpecifier(node: Object, opts?: Object): void

	declare export function assertImportSpecifier(node: Object, opts?: Object): void

	declare export function assertMetaProperty(node: Object, opts?: Object): void

	declare export function assertClassMethod(node: Object, opts?: Object): void

	declare export function assertObjectPattern(node: Object, opts?: Object): void

	declare export function assertSpreadElement(node: Object, opts?: Object): void

	declare export function assertSuper(node: Object, opts?: Object): void

	declare export function assertTaggedTemplateExpression(node: Object, opts?: Object): void

	declare export function assertTemplateElement(node: Object, opts?: Object): void

	declare export function assertTemplateLiteral(node: Object, opts?: Object): void

	declare export function assertYieldExpression(node: Object, opts?: Object): void

	declare export function assertAnyTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertArrayTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertBooleanTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertBooleanLiteralTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertNullLiteralTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertClassImplements(node: Object, opts?: Object): void

	declare export function assertClassProperty(node: Object, opts?: Object): void

	declare export function assertDeclareClass(node: Object, opts?: Object): void

	declare export function assertDeclareFunction(node: Object, opts?: Object): void

	declare export function assertDeclareInterface(node: Object, opts?: Object): void

	declare export function assertDeclareModule(node: Object, opts?: Object): void

	declare export function assertDeclareTypeAlias(node: Object, opts?: Object): void

	declare export function assertDeclareVariable(node: Object, opts?: Object): void

	declare export function assertExistentialTypeParam(node: Object, opts?: Object): void

	declare export function assertFunctionTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertFunctionTypeParam(node: Object, opts?: Object): void

	declare export function assertGenericTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertInterfaceExtends(node: Object, opts?: Object): void

	declare export function assertInterfaceDeclaration(node: Object, opts?: Object): void

	declare export function assertIntersectionTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertMixedTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertNullableTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertNumericLiteralTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertNumberTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertStringLiteralTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertStringTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertThisTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertTupleTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertTypeofTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertTypeAlias(node: Object, opts?: Object): void

	declare export function assertTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertTypeCastExpression(node: Object, opts?: Object): void

	declare export function assertTypeParameterDeclaration(node: Object, opts?: Object): void

	declare export function assertTypeParameterInstantiation(node: Object, opts?: Object): void

	declare export function assertObjectTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertObjectTypeCallProperty(node: Object, opts?: Object): void

	declare export function assertObjectTypeIndexer(node: Object, opts?: Object): void

	declare export function assertObjectTypeProperty(node: Object, opts?: Object): void

	declare export function assertQualifiedTypeIdentifier(node: Object, opts?: Object): void

	declare export function assertUnionTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertVoidTypeAnnotation(node: Object, opts?: Object): void

	declare export function assertJSXAttribute(node: Object, opts?: Object): void

	declare export function assertJSXClosingElement(node: Object, opts?: Object): void

	declare export function assertJSXElement(node: Object, opts?: Object): void

	declare export function assertJSXEmptyExpression(node: Object, opts?: Object): void

	declare export function assertJSXExpressionContainer(node: Object, opts?: Object): void

	declare export function assertJSXIdentifier(node: Object, opts?: Object): void

	declare export function assertJSXMemberExpression(node: Object, opts?: Object): void

	declare export function assertJSXNamespacedName(node: Object, opts?: Object): void

	declare export function assertJSXOpeningElement(node: Object, opts?: Object): void

	declare export function assertJSXSpreadAttribute(node: Object, opts?: Object): void

	declare export function assertJSXText(node: Object, opts?: Object): void

	declare export function assertNoop(node: Object, opts?: Object): void

	declare export function assertParenthesizedExpression(node: Object, opts?: Object): void

	declare export function assertAwaitExpression(node: Object, opts?: Object): void

	declare export function assertBindExpression(node: Object, opts?: Object): void

	declare export function assertDecorator(node: Object, opts?: Object): void

	declare export function assertDoExpression(node: Object, opts?: Object): void

	declare export function assertExportDefaultSpecifier(node: Object, opts?: Object): void

	declare export function assertExportNamespaceSpecifier(node: Object, opts?: Object): void

	declare export function assertRestProperty(node: Object, opts?: Object): void

	declare export function assertSpreadProperty(node: Object, opts?: Object): void

	declare export function assertExpression(node: Object, opts?: Object): void

	declare export function assertBinary(node: Object, opts?: Object): void

	declare export function assertScopable(node: Object, opts?: Object): void

	declare export function assertBlockParent(node: Object, opts?: Object): void

	declare export function assertBlock(node: Object, opts?: Object): void

	declare export function assertStatement(node: Object, opts?: Object): void

	declare export function assertTerminatorless(node: Object, opts?: Object): void

	declare export function assertCompletionStatement(node: Object, opts?: Object): void

	declare export function assertConditional(node: Object, opts?: Object): void

	declare export function assertLoop(node: Object, opts?: Object): void

	declare export function assertWhile(node: Object, opts?: Object): void

	declare export function assertExpressionWrapper(node: Object, opts?: Object): void

	declare export function assertFor(node: Object, opts?: Object): void

	declare export function assertForXStatement(node: Object, opts?: Object): void

	declare export function assertFunction(node: Object, opts?: Object): void

	declare export function assertFunctionParent(node: Object, opts?: Object): void

	declare export function assertPureish(node: Object, opts?: Object): void

	declare export function assertDeclaration(node: Object, opts?: Object): void

	declare export function assertLVal(node: Object, opts?: Object): void

	declare export function assertLiteral(node: Object, opts?: Object): void

	declare export function assertImmutable(node: Object, opts?: Object): void

	declare export function assertUserWhitespacable(node: Object, opts?: Object): void

	declare export function assertMethod(node: Object, opts?: Object): void

	declare export function assertObjectMember(node: Object, opts?: Object): void

	declare export function assertProperty(node: Object, opts?: Object): void

	declare export function assertUnaryLike(node: Object, opts?: Object): void

	declare export function assertPattern(node: Object, opts?: Object): void

	declare export function assertClass(node: Object, opts?: Object): void

	declare export function assertModuleDeclaration(node: Object, opts?: Object): void

	declare export function assertExportDeclaration(node: Object, opts?: Object): void

	declare export function assertModuleSpecifier(node: Object, opts?: Object): void

	declare export function assertFlow(node: Object, opts?: Object): void

	declare export function assertFlowBaseAnnotation(node: Object, opts?: Object): void

	declare export function assertFlowDeclaration(node: Object, opts?: Object): void

	declare export function assertJSX(node: Object, opts?: Object): void

	declare export function assertNumberLiteral(node: Object, opts?: Object): void

	declare export function assertRegexLiteral(node: Object, opts?: Object): void

		
}