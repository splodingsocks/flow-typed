

declare module 'alexa-sdk' {
		declare interface AlexaObject {
		_event: any,
		_context: any,
		_callback: any,
		state: any,
		appId: any,
		response: any,
		dynamoDBTableName: any,
		saveBeforeResponse: boolean,
		registerHandlers: (...handlers: Handlers[]) => any,
		execute: () => void
	}

	declare interface Handlers {
		[intent: string]: () => void
	}

	declare interface Handler {
		on: any,
		emit(event: string, ...args: any[]): boolean,
		emitWithState: any,
		state: any,
		handler: any,
		event: RequestBody,
		attributes: any,
		context: any,
		name: any,
		isOverriden: any
	}

	declare interface Context {
		callbackWaitsForEmptyEventLoop: boolean,
		logGroupName: string,
		logStreamName: string,
		functionName: string,
		memoryLimitInMB: string,
		functionVersion: string,
		invokeid: string,
		awsRequestId: string
	}

	declare interface RequestBody {
		version: string,
		session: Session,
		request: LaunchRequest | IntentRequest | SessionEndedRequest
	}

	declare interface Session {
		new: boolean,
		sessionId: string,
		attributes: any,
		application: SessionApplication,
		user: SessionUser
	}

	declare interface SessionApplication {
		applicationId: string
	}

	declare interface SessionUser {
		userId: string,
		accessToken: string
	}

	declare interface LaunchRequest {
		
	}

	declare interface IntentRequest {
		intent: Intent
	}

	declare interface Intent {
		name: string,
		slots: any
	}

	declare interface SessionEndedRequest {
		reason: string
	}

	declare interface IRequest {
		type: "LaunchRequest" | "IntentRequest" | "SessionEndedRequest",
		requestId: string,
		timeStamp: string
	}

	declare interface ResponseBody {
		version: string,
		sessionAttributes?: any,
		response: Response
	}

	declare interface Response {
		outputSpeech?: OutputSpeech,
		card?: Card,
		reprompt?: Reprompt,
		shouldEndSession: boolean
	}

	declare interface OutputSpeech {
		type: "PlainText" | "SSML",
		text?: string,
		ssml?: string
	}

	declare interface Card {
		type: "Simple" | "Standard" | "LinkAccount",
		title?: string,
		content?: string,
		text?: string,
		image?: Image
	}

	declare interface Image {
		smallImageUrl: string,
		largeImageUrl: string
	}

	declare interface Reprompt {
		outputSpeech: OutputSpeech
	}

	declare export function handler(event: RequestBody, context: Context, callback?: Function): AlexaObject

	declare export function CreateStateHandler(state: string, obj: any): any

		
}