

declare module 'greensock' {
	declare type Tween = TweenLite | TweenMax;

	declare type Timeline = SimpleTimeline | TimelineLite | TimelineMax;

	declare type TweenConfig = {
		[tweenProp: string]: any,
		delay?: number,
		ease?: Ease,
		repeat?: number,
		repeatDelay?: number,
		yoyo?: boolean,
		paused?: boolean,
		overwrite?: string | number,
		onComplete?: Function,
		immediateRender?: boolean,
		onCompleteParams?: any[],
		onCompleteScope?: Object,
		onRepeat?: Function,
		onRepeatScope?: Object,
		onReverseComplete?: Function,
		onReverseCompleteParams?: any[],
		onReverseCompleteScope?: Object,
		onStart?: Function,
		onStartParams?: any[],
		onStartScope?: Object,
		onUpdate?: Function,
		onUpdateParams?: any[],
		onUpdateScope?: Object,
		startAt?: Object,
		useFrames?: boolean,
		lazy?: boolean,
		onOverwrite?: Function,
		autoCSS?: boolean,
		callbackScope?: Object
	};

	declare type RoughEaseConfig = {
		clamp?: boolean,
		points?: number,
		randomize?: boolean,
		strength?: number,
		taper?: string,
		template?: Ease
	};

	declare interface IDispatcher {
		addEventListener(
		type: string, callback: Function, scope?: Object, useParam?: boolean, priority?: number
	): void,
		removeEventListener(type: string, callback: Function): void
	}

	declare interface BezierPlugin {
		bezierThrough(
		values: any[], curviness?: number, quadratic?: boolean, correlate?: string, prepend?: Object, calcDifs?: boolean
	): Object,
		cubicToQuadratic(a: number, b: number, c: number, d: number): any[],
		quadraticToCubic(a: number, b: number, c: number): Object
	}

	declare interface ColorPropsPlugin {
		
	}

	declare interface CSSPlugin {
		
	}

	declare interface CSSRulePlugin {
		getRule(selector: string): Object
	}

	declare interface EaselPlugin {
		
	}

	declare interface RaphaelPlugin {
		
	}

	declare interface RoundPropsPlugin {
		
	}

	declare interface ScrollToPlugin {
		
	}

	declare interface TweenPlugin {
		activate(plugins: any[]): boolean
	}

		declare class Animation  {
		ticker: IDispatcher;
		data: any;
		timeline: SimpleTimeline;
		vars: Object;
		constructor(duration?: number, vars?: Object): this;
		delay(): number;
		delay(value: number): Animation;
		duration(): number;
		duration(value: number): Animation;
		eventCallback(type: string): Function;
		eventCallback(type: string, callback: Function, params?: any[], scope?: any): Animation;
		invalidate(): Animation;
		isActive(): boolean;
		kill(vars?: Object, target?: Object): Animation;
		pause(atTime?: any, suppressEvents?: boolean): Animation;
		paused(): boolean;
		paused(value: boolean): Animation;
		play(from?: any, suppressEvents?: boolean): Animation;
		progress(): number;
		progress(value: number, supressEvents?: boolean): Animation;
		restart(includeDelay?: boolean, suppressEvents?: boolean): Animation;
		resume(from?: any, suppressEvents?: boolean): Animation;
		reverse(from?: any, suppressEvents?: boolean): Animation;
		reversed(): boolean;
		reversed(value: boolean): Animation;
		seek(time: any, suppressEvents?: boolean): Animation;
		startTime(): number;
		startTime(value: number): Animation;
		time(): number;
		time(value: number, suppressEvents?: boolean): Animation;
		timeScale(): number;
		timeScale(value: number): Animation;
		totalDuration(): number;
		totalDuration(value: number): Animation;
		totalProgress(): number;
		totalProgress(value: number): Animation;
		totalTime(): number;
		totalTime(time: number, suppressEvents?: boolean): Animation
	}

	declare class SimpleTimeline extends Animation {
		autoRemoveChildren: boolean;
		smoothChildTiming: boolean;
		constructor(vars?: Object): this;
		add(value: any, position?: any, align?: string, stagger?: number): SimpleTimeline;
		render(time: number, suppressEvents?: boolean, force?: boolean): void
	}

	declare class TweenLite extends Animation {
		defaultEase: Ease;
		defaultOverwrite: string;
		selector: any;
		target: Object;
		constructor(target: Object, duration: number, vars: Object): this;
		delayedCall(
		delay: number, callback: Function, params?: any[], scope?: any, useFrames?: boolean
	): TweenLite;
		endTime(includeRepeats?: boolean): number;
		from(target: Object | Object[], duration: number, vars: Object): TweenLite;
		fromTo(
		target: Object | Object[], duration: number, fromVars: Object, toVars: Object
	): TweenLite;
		getTweensOf(target: Object, onlyActive: boolean): Tween[];
		killDelayedCallsTo(func: Function): void;
		killTweensOf(target: Object, onlyActive?: boolean, vars?: Object): void;
		lagSmoothing(threshold: number, adjustedLag: number): void;
		set(target: Object, vars: Object): TweenLite;
		to(target: Object, duration: number, vars: TweenConfig): TweenLite
	}

	declare class TweenMax extends TweenLite {
		constructor(target: Object, duration: number, vars: Object): this;
		delayedCall(
		delay: number, callback: Function, params?: any[], scope?: Object, useFrames?: boolean
	): TweenMax;
		from(target: Object, duration: number, vars: Object): TweenMax;
		fromTo(target: Object, duration: number, fromVars: Object, toVars: Object): TweenMax;
		getAllTweens(includeTimelines?: boolean): Tween[];
		getTweensOf(target: Object): Tween[];
		isTweening(target: Object): boolean;
		killAll(
		complete?: boolean, tweens?: boolean, delayedCalls?: boolean, timelines?: boolean
	): void;
		killChildTweensOf(parent: any, complete?: boolean): void;
		killDelayedCallsTo(func: Function): void;
		killTweensOf(target: Object, vars?: Object): void;
		pauseAll(tweens?: boolean, delayedCalls?: boolean, timelines?: boolean): void;
		repeat(): number;
		repeat(value: number): TweenMax;
		repeatDelay(): number;
		repeatDelay(value: number): TweenMax;
		resumeAll(tweens?: boolean, delayedCalls?: boolean, timelines?: boolean): void;
		set(target: Object, vars: Object): TweenMax;
		staggerFrom(
		targets: any, duration: number, vars: Object, stagger: number, onCompleteAll?: Function, onCompleteAllParams?: any[], onCompleteAllScope?: any
	): any[];
		staggerFromTo(
		targets: any, duration: number, fromVars: Object, toVars: Object, stagger: number, onCompleteAll?: Function, onCompleteAllParams?: any[], onCompleteAllScope?: any
	): any[];
		staggerTo(
		targets: any, duration: number, vars: Object, stagger: number, onCompleteAll?: Function, onCompleteAllParams?: any[], onCompleteAllScope?: any
	): any[];
		to(target: Object, duration: number, vars: TweenConfig): TweenMax;
		updateTo(vars: Object, resetDuration?: boolean): TweenMax;
		yoyo(): boolean;
		yoyo(value?: boolean): TweenMax
	}

	declare class TimelineLite extends SimpleTimeline {
		constructor(vars?: Object): this;
		add(value: any, position?: any, align?: string, stagger?: number): TimelineLite;
		addLabel(label: string, position: any): TimelineLite;
		addPause(position?: any, callback?: Function, params?: any[], scope?: any): TimelineLite;
		call(callback: Function, params?: any[], scope?: any, position?: any): TimelineLite;
		clear(labels?: boolean): TimelineLite;
		endTime(includeRepeats?: boolean): number;
		exportRoot(vars?: Object, omitDelayedCalls?: boolean): TimelineLite;
		from(target: Object, duration: number, vars: Object, position?: any): TimelineLite;
		fromTo(
		target: Object, duration: number, fromVars: Object, toVars: Object, position?: any
	): TimelineLite;
		getChildren(
		nested?: boolean, tweens?: boolean, timelines?: boolean, ignoreBeforeTime?: number
	): (Tween | Timeline)[];
		getLabelTime(label: string): number;
		getTweensOf(target: Object, nested?: boolean): Tween[];
		recent(): Animation;
		remove(value: any): TimelineLite;
		removeLabel(label: string): any;
		set(target: Object, vars: Object, position?: any): TimelineLite;
		shiftChildren(
		amount: number, adjustLabels?: boolean, ignoreBeforeTime?: number
	): TimelineLite;
		staggerFrom(
		targets: any, duration: number, vars: Object, stagger?: number, position?: any, onCompleteAll?: Function, onCompleteAllParams?: any[], onCompleteScope?: any
	): TimelineLite;
		staggerFromTo(
		targets: any, duration: number, fromVars: Object, toVars: Object, stagger?: number, position?: any, onCompleteAll?: Function, onCompleteAllParams?: any[], onCompleteAllScope?: any
	): TimelineLite;
		staggerTo(
		targets: any, duration: number, vars: Object, stagger: number, position?: any, onCompleteAll?: Function, onCompleteAllParams?: any[], onCompleteAllScope?: any
	): TimelineLite;
		to(target: Object, duration: number, vars: Object, position?: any): TimelineLite;
		usesFrames(): boolean
	}

	declare class TimelineMax extends TimelineLite {
		constructor(vars?: Object): this;
		addCallback(callback: Function, position: any, params?: any[], scope?: any): TimelineMax;
		currentLabel(): string;
		currentLabel(value: string): TimelineMax;
		getActive(nested?: boolean, tweens?: boolean, timelines?: boolean): Tween | Timeline[];
		getLabelAfter(time: number): string;
		getLabelBefore(time: number): string;
		getLabelsArray(): any[];
		removeCallback(callback: Function, timeOrLabel?: any): TimelineMax;
		repeat(): number;
		repeat(value: number): TimelineMax;
		repeatDelay(): number;
		repeatDelay(value: number): TimelineMax;
		tweenFromTo(fromPosition: any, toPosition: any, vars?: Object): TweenLite;
		tweenTo(position: any, vars?: Object): TweenLite;
		yoyo(): boolean;
		yoyo(value: boolean): TimelineMax
	}

	declare class Ease  {
		constructor(func: Function, extraParams: any[], type: number, power: number): this;
		getRatio(p: number): number
	}

	declare class EaseLookup  {
		find(name: string): Ease
	}

	declare class Back extends Ease {
		easeIn: Back;
		easeInOut: Back;
		easeOut: Back;
		config(overshoot: number): Elastic
	}

	declare class Bounce extends Ease {
		easeIn: Bounce;
		easeInOut: Bounce;
		easeOut: Bounce
	}

	declare class Circ extends Ease {
		easeIn: Circ;
		easeInOut: Circ;
		easeOut: Circ
	}

	declare class Cubic extends Ease {
		easeIn: Cubic;
		easeInOut: Cubic;
		easeOut: Cubic
	}

	declare class Elastic extends Ease {
		easeIn: Elastic;
		easeInOut: Elastic;
		easeOut: Elastic;
		config(amplitude: number, period: number): Elastic
	}

	declare class Expo extends Ease {
		easeIn: Expo;
		easeInOut: Expo;
		easeOut: Expo
	}

	declare class Linear extends Ease {
		ease: Linear;
		easeIn: Linear;
		easeInOut: Linear;
		easeNone: Linear;
		easeOut: Linear
	}

	declare class Quad extends Ease {
		easeIn: Quad;
		easeInOut: Quad;
		easeOut: Quad
	}

	declare class Quart extends Ease {
		easeIn: Quart;
		easeInOut: Quart;
		easeOut: Quart
	}

	declare class Quint extends Ease {
		easeIn: Quint;
		easeInOut: Quint;
		easeOut: Quint
	}

	declare class Sine extends Ease {
		easeIn: Sine;
		easeInOut: Sine;
		easeOut: Sine
	}

	declare class SlowMo extends Ease {
		ease: SlowMo;
		config(linearRatio: number, power: number, yoyoMode: boolean): SlowMo
	}

	declare class SteppedEase extends Ease {
		constructor(staps: number): this;
		config(steps: number): SteppedEase
	}

	declare class RoughEase extends Ease {
		ease: RoughEase;
		constructor(vars: RoughEaseConfig): this;
		config(steps: number): SteppedEase
	}

	
}