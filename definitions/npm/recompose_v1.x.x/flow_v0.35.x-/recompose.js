

declare module 'recompose' {
	declare type Component<P> = ComponentClass<P> | StatelessComponent<P>;

	declare type mapper<TInner, TOutter> = (input: TInner) => TOutter;

	declare type predicate<T> = mapper<T, boolean>;

	declare type predicateDiff<T> = (current: T, next: T) => boolean;

	declare type EventHandler = Function;

	declare type HandleCreators<TOutter> = {
		[handlerName: string]: mapper<TOutter, EventHandler>
	};

	declare type NameMap = {
		[outterName: string]: string
	};

	declare type reducer<TState, TAction> = (s: TState, a: TAction) => TState;

	declare type componentFactory = (props?: Object, children?: React.ReactNode) => React.ReactElement<any>;

	declare type EventHandlerOf<T, TSubs> = {
		handler: (value: T) => void,
		stream: TSubs
	};

	declare type ObservableConfig = {
		fromESObservable?: <T>(observable: Subscribable<T>) => any,
		toESObservable?: <T>(stream: any) => Subscribable<T>
	};

	declare interface Subscribable<T> {
		subscribe: Function
	}

	declare interface ComponentEnhancer<TInner, TOutter> {
		(component: Component<TInner>): ComponentClass<TOutter>
	}

	declare interface InferableComponentEnhancer {
		(component: TComp): TComp
	}

	declare interface ReactLifeCycleFunctions {
		componentWillMount?: Function,
		componentDidMount?: Function,
		componentWillReceiveProps?: Function,
		shouldComponentUpdate?: Function,
		componentWillUpdate?: Function,
		componentDidUpdate?: Function,
		componentWillUnmount?: Function
	}

	declare export function mapProps<TInner, TOutter>(
		propsMapper: mapper<TOutter, TInner>
	): ComponentEnhancer<TInner, TOutter>

	declare export function withProps<TInner, TOutter>(
		createProps: TInner | mapper<TOutter, TInner>
	): ComponentEnhancer<TInner & TOutter, TOutter>

	declare export function withPropsOnChange<TInner, TOutter>(
		shouldMapOrKeys: string[] | predicateDiff<TOutter>, createProps: mapper<TOutter, TInner>
	): ComponentEnhancer<TInner & TOutter, TOutter>

	declare export function withHandlers<TInner, TOutter>(
		handlerCreators: HandleCreators<TOutter>
	): ComponentEnhancer<TInner, TOutter>

	declare export function defaultProps(props: Object): InferableComponentEnhancer

	declare export function renameProp(outterName: string, innerName: string): ComponentEnhancer<any, any>

	declare export function renameProps(nameMap: NameMap): ComponentEnhancer<any, any>

	declare export function flattenProp(propName: string): ComponentEnhancer<any, any>

	declare export function withState<TOutter>(
		stateName: string, stateUpdaterName: string, initialState: any | mapper<TOutter, any>
	): ComponentEnhancer<TOutter, TOutter>

	declare export function withReducer<TState, TAction>(
		stateName: string, dispatchName: string, reducer: reducer<TState, TAction>, initialState: TState
	): ComponentEnhancer<any, any>

	declare export function withReducer<TOutter, TState, TAction>(
		stateName: string, dispatchName: string, reducer: reducer<TState, TAction>, initialState: (props: TOutter) => TState
	): ComponentEnhancer<any, TOutter>

	declare export function branch<TOutter>(
		test: predicate<TOutter>, trueEnhancer: InferableComponentEnhancer, falseEnhancer: InferableComponentEnhancer
	): ComponentEnhancer<any, TOutter>

	declare export function renderComponent(component: string | Component<any>): ComponentEnhancer<any, any>

	declare export function shouldUpdate<TProps>(test: predicateDiff<TProps>): InferableComponentEnhancer

	declare export function pure<TProps, TComp>(component: TComp): TComp

	declare export function onlyUpdateForKeys(propKeys: Array<string>): InferableComponentEnhancer

	declare export function withContext<TContext, TProps>(
		childContextTypes: ValidationMap<TContext>, getChildContext: mapper<TProps, any>
	): InferableComponentEnhancer

	declare export function getContext<TContext, TProps>(
		contextTypes: ValidationMap<TContext>
	): InferableComponentEnhancer

	declare export function lifecycle(spec: ReactLifeCycleFunctions): InferableComponentEnhancer

	declare export function setStatic<TOutter>(key: string, value: any): ComponentEnhancer<TOutter, TOutter>

	declare export function setPropTypes<TOutter>(propTypes: ValidationMap<TOutter>): ComponentEnhancer<any, TOutter>

	declare export function setDisplayName<TOutter>(displayName: string): ComponentEnhancer<TOutter, TOutter>

	declare export function compose<TInner, TOutter>(...functions: Function[]): ComponentEnhancer<TInner, TOutter>

	declare export function getDisplayName(component: Component<any>): string

	declare export function wrapDisplayName(component: Component<any>, wrapperName: string): string

	declare export function shallowEqual(a: Object, b: Object): boolean

	declare export function isClassComponent(value: any): boolean

	declare export function createEagerElement(
		type: Component<any> | string, props?: Object, children?: React.ReactNode
	): React.ReactElement<any>

	declare export function createEagerFactory(type: Component<any> | string): componentFactory

	declare export function createSink(callback: (props: Object) => void): React.ComponentClass<any>

	declare export function componentFromProp(propName: string): StatelessComponent<any>

	declare export function nest(...Components: (string | Component<any>)[]): React.ComponentClass<any>

	declare export function hoistStatics(hoc: InferableComponentEnhancer): InferableComponentEnhancer

	declare export function componentFromStream<TProps>(
		propsToReactNode: mapper<Subscribable<TProps>, Subscribable<React.ReactNode>>
	): Component<TProps>

	declare export function mapPropsStream<TInner, TOutter>(
		transform: mapper<Subscribable<TOutter>, Subscribable<TInner>>
	): ComponentEnhancer<TInner, TOutter>

	declare export function createEventHandler<T, TSubs>(): EventHandlerOf<T, TSubs>

	declare export function setObservableConfig(config: ObservableConfig): void

		
}

declare module 'recompose/rxjsObservableConfig' {
					declare module.exports: ObservableConfig


}

declare module 'recompose/rxjs4ObservableConfig' {
					declare module.exports: ObservableConfig


}

declare module 'recompose/mostObservableConfig' {
					declare module.exports: ObservableConfig


}

declare module 'recompose/xstreamObservableConfig' {
					declare module.exports: ObservableConfig


}

declare module 'recompose/baconObservableConfig' {
					declare module.exports: ObservableConfig


}

declare module 'recompose/kefirObservableConfig' {
					declare module.exports: ObservableConfig


}