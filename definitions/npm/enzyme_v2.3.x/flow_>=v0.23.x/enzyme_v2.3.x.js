declare module 'enzyme' {
  declare type PredicateFunction<T: Wrapper> = (wrapper: T) => boolean;
  declare type NodeOrNodes = React$Element<any> | Array<React$Element<any>>;
  declare type EnzymeSelector = string | ReactClass<any> | Object;
  declare class Wrapper {
    find(selector: EnzymeSelector): this;
    findWhere(predicate: PredicateFunction<this>): this;
    filter(selector: EnzymeSelector): this;
    filterWhere(predicate: PredicateFunction<this>): this;
    contains(nodeOrNodes: NodeOrNodes): boolean;
    containsMatchingElement(node: React$Element<any>): boolean;
    containsAllMatchingElements(nodes: NodeOrNodes): boolean;
    containsAnyMatchingElements(nodes: NodeOrNodes): boolean;
    matchesElement(node: React$Element<any>): boolean;
    hasClass(className: string): boolean;
    is(selector: EnzymeSelector): boolean;
    not(selector: EnzymeSelector): boolean;
    children(selector?: EnzymeSelector): this;
    childAt(index: number): this;
    parents(selector?: EnzymeSelector): this;
    parent(): this;
    closest(selector: EnzymeSelector): this;
    render(): CheerioWrapper;
    unmount(): this;
    text(): string;
    html(): string;
    get(index: number): React$Element<any>;
    at(index: number): this;
    first(): this;
    last(): this;
    state(key?: string): any;
    context(key?: string): any;
    props(): Object;
    prop(key: string): any;
    key(): string;
    simulate(event: string, ...args: Array<any>): this;
    setState(state: Object): this;
    setProps(props: Object): this;
    setContext(context: Object): this;
    instance(): React$Component<any, any, any>;
    update(): this;
    debug(): string;
    type(): string | Function | null;
    name(): string;
    forEach(fn: (node: this) => any): this;
    map<T>(fn: (node: this) => T): Array<T>;
    reduce<T>(fn: (value: T, node: this, index: number) => T, initialValue?: T): Array<T>;
    reduceRight<T>(fn: (value: T, node: this, index: number) => T, initialValue?: T): Array<T>;
    some(selector: EnzymeSelector): boolean;
    someWhere(predicate: PredicateFunction<this>): boolean;
    every(selector: EnzymeSelector): boolean;
    everyWhere(predicate: PredicateFunction<this>): boolean;
  }
  declare class ReactWrapper extends Wrapper {
    mount(): this;
    ref(refName: string): this;
    detach(): void;
  }
  declare class ShallowWrapper extends Wrapper {
    equals(node: React$Element<any>): boolean;
    shallow(options?: { context?: Object }): ShallowWrapper;
  }
  declare class CheerioWrapper extends Wrapper {}
  declare function shallow(node: React$Element<any>, options?: { context?: Object }): ShallowWrapper;
  declare function mount(node: React$Element<any>, options?: { context?: Object, attachTo?: HTMLElement, childContextTypes?: Object }): ReactWrapper;
  declare function render(node: React$Element<any>, options?: { context?: Object }): CheerioWrapper;
}
