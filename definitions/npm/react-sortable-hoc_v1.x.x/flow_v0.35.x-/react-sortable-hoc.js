

declare module 'react-sortable-hoc' {
	declare export type Axis = "x" | "y";

	declare export type Offset = number | string;

	declare export type SortEvent = React.MouseEvent | React.TouchEvent;

	declare export type SortStartHandler = (sort: SortStart, event: SortEvent) => void;

	declare export type SortMoveHandler = (event: SortEvent) => void;

	declare export type SortEndHandler = (sort: SortEnd, event: SortEvent) => void;

	declare export type ContainerGetter = (element: React.ReactElement<any>) => HTMLElement;

	declare export type WrappedComponentFactory<P> = (props: P) => JSX.Element;

	declare export type WrappedComponent<P> = React.ComponentClass<P> | WrappedComponentFactory<P>;

	declare export interface SortStart {
		node: React.ReactNode,
		index: number,
		collection: Offset
	}

	declare export interface SortEnd {
		oldIndex: number,
		newIndex: number,
		collection: Offset
	}

	declare export interface SortableContainerProps {
		axis?: Axis,
		lockAxis?: Axis,
		helperClass?: string,
		transitionDuration?: number,
		pressDelay?: number,
		onSortStart?: SortStartHandler,
		onSortMove?: SortMoveHandler,
		onSortEnd?: SortEndHandler,
		useDragHandle?: boolean,
		useWindowAsScrollContainer?: boolean,
		hideSortableGhost?: boolean,
		lockToContainerEdges?: boolean,
		lockOffset?: Offset | [Offset, Offset],
		getContainer?: ContainerGetter
	}

	declare export interface SortableElementProps {
		index: number,
		collection?: Offset,
		disabled?: boolean
	}

	declare export interface Config {
		withRef: boolean
	}

	declare export function SortableContainer<P>(
		wrappedComponent: WrappedComponent<P>, config?: Config
	): React.ComponentClass<P & SortableContainerProps>

	declare export function SortableElement<P>(
		wrappedComponent: WrappedComponent<P>, config?: Config
	): React.ComponentClass<P & SortableElementProps>

	declare export function SortableHandle<P>(
		wrappedComponent: WrappedComponent<P>, config?: Config
	): React.ComponentClass<P>

	declare export function arrayMove<T>(collection: Array<T>, previousIndex: number, newIndex: number): Array<T>

		
}