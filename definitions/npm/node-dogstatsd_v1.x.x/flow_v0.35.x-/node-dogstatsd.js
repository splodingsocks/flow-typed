

declare module 'node-dogstatsd' {
		declare export interface StatsDOptions {
		global_tags?: string[]
	}

		declare export class StatsD  {
		constructor(host: string, port?: number, socket?: string, options?: StatsDOptions): this;
		timing(stat: string, time: number, sample_rate?: number, tags?: string[]): void;
		increment(stat: string, sample_rate?: number, tags?: string[]): void;
		incrementBy(stat: string, value: number, tags?: string[]): void;
		decrement(stat: string, sample_rate?: number, tags?: string[]): void;
		decrementBy(stat: string, value: number, tags?: string[]): void;
		gauge(stat: string, value: number, sample_rate?: number, tags?: string[]): void;
		histogram(stat: string, time: number, sample_rate?: number, tags?: string[]): void;
		close(): void
	}

	
}