

declare module 'state-machine' {
		declare interface StateMachineErrorCallback {
		(eventName?: string, from?: string, to?: string, args?: any[], errorCode?: number, errorMessage?: string, ex?: Error): void
	}

	declare interface StateMachineEventDef {
		name: string,
		from: any,
		to: string
	}

	declare interface StateMachineEvent {
		(...args: any[]): void
	}

	declare interface StateMachineConfig {
		initial?: any,
		events?: StateMachineEventDef[],
		callbacks?: {
		[s: string]: (event?: string, from?: string, to?: string, ...args: any[]) => any
	},
		target?: StateMachine,
		error?: StateMachineErrorCallback
	}

	declare interface StateMachineIsFinished {
		(state: string): boolean
	}

	declare interface StateMachineStatic {
		VERSION: string,
		WILDCARD: string,
		ASYNC: string,
		Result: {
		SUCCEEDED: number,
		NOTRANSITION: number,
		CANCELLED: number,
		PENDING: number
	},
		Error: {
		INVALID_TRANSITION: number,
		PENDING_TRANSITION: number,
		INVALID_CALLBACK: number
	},
		create(config: StateMachineConfig, target?: StateMachine): StateMachine
	}

	declare interface StateMachineTransition {
		(): void,
		cancel(): void
	}

	declare interface StateMachineIs {
		(state: string): boolean
	}

	declare interface StateMachineCan {
		(evt: string): boolean
	}

	declare interface StateMachineTransitions {
		(): Array<string>
	}

	declare interface StateMachine {
		current: string,
		is: StateMachineIs,
		can: StateMachineCan,
		cannot: StateMachineCan,
		error: StateMachineErrorCallback,
		isFinished: StateMachineIsFinished,
		transition: StateMachineTransition,
		transitions: StateMachineTransitions
	}

			declare module.exports: StateMachineStatic


}

declare module 'javascript-state-machine' {
					
}