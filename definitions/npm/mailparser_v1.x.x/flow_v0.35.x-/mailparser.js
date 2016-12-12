

declare module 'mailparser' {
		declare interface Options {
		debug?: boolean,
		streamAttachments?: boolean,
		unescapeSMTP?: boolean,
		defaultCharset?: string,
		showAttachmentLinks?: boolean
	}

	declare interface EmailAddress {
		address: string,
		name: string
	}

	declare interface Attachment {
		contentType: string,
		fileName: string,
		contentDisposition: string,
		contentId: string,
		transferEncoding: string,
		length: number,
		generatedFileName: string,
		checksum: string,
		content: Buffer,
		stream: Stream
	}

	declare interface ParsedMail {
		headers: any,
		from: EmailAddress[],
		to: EmailAddress[],
		cc?: EmailAddress[],
		bcc?: EmailAddress[],
		subject: string,
		references?: string[],
		inReplyTo?: string[],
		priority?: string,
		text: string,
		html: string,
		date?: Date,
		attachments?: Attachment[]
	}

		declare class MailParser extends StreamModule$Writable {
		constructor(options?: Options): this;
		on(event: string, callback: (any: any) => void): this;
		writable: boolean;
		write(buffer: Buffer, cb?: Function): boolean;
		write(str: string, cb?: Function): boolean;
		write(str: string, encoding?: string, cb?: Function): boolean;
		end(): void;
		end(buffer: Buffer, cb?: Function): void;
		end(str: string, cb?: Function): void;
		end(str: string, encoding?: string, cb?: Function): void;
		listenerCount(emitter: EventEmitter, event: string): number;
		addListener(event: string, listener: Function): this;
		on(event: string, listener: Function): this;
		once(event: string, listener: Function): this;
		removeListener(event: string, listener: Function): this;
		removeAllListeners(event?: string): this;
		setMaxListeners(n: number): this;
		getMaxListeners(): number;
		listeners(event: string): Function[];
		emit(event: string, ...args: any[]): boolean;
		listenerCount(type: string): number
	}

	
}