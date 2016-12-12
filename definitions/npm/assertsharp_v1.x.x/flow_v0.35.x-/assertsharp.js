

declare module 'assertsharp' {
				declare export default class Assert  {
		AreEqual<T>(expected: T, actual: T, message?: string): void;
		AreNotEqual<T>(notExpected: T, actual: T, message?: string): void;
		AreNotSame<T>(notExpected: T, actual: T, message?: string): void;
		AreSequenceEqual<T>(
		expected: T[], actual: T[], equals?: (x: any, y: any) => boolean, message?: string
	): void;
		Fail(message?: string): void;
		IsFalse(actual: boolean, message?: string): void;
		IsInstanceOfType(actual: any, expectedType: Function, message?: string): void;
		IsNotInstanceOfType(actual: any, wrongType: Function, message?: string): void;
		IsNotNull(actual: any, message?: string): void;
		IsNull(actual: any, message?: string): void;
		IsTrue(actual: boolean, message?: string): void;
		Throws(fn: () => void, message?: string): void
	}

	
}