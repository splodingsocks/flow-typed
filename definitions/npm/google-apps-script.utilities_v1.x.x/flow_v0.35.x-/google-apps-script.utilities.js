

declare module 'google-apps-script.utilities' {
					
}

declare module 'Utilities' {
		declare export interface Utilities {
		Charset: Charset,
		DigestAlgorithm: DigestAlgorithm,
		MacAlgorithm: MacAlgorithm,
		base64Decode(encoded: string): Byte[],
		base64Decode(encoded: string, charset: Charset): Byte[],
		base64DecodeWebSafe(encoded: string): Byte[],
		base64DecodeWebSafe(encoded: string, charset: Charset): Byte[],
		base64Encode(data: Byte[]): string,
		base64Encode(data: string): string,
		base64Encode(data: string, charset: Charset): string,
		base64EncodeWebSafe(data: Byte[]): string,
		base64EncodeWebSafe(data: string): string,
		base64EncodeWebSafe(data: string, charset: Charset): string,
		computeDigest(algorithm: DigestAlgorithm, value: string): Byte[],
		computeDigest(algorithm: DigestAlgorithm, value: string, charset: Charset): Byte[],
		computeHmacSha256Signature(value: string, key: string): Byte[],
		computeHmacSha256Signature(value: string, key: string, charset: Charset): Byte[],
		computeHmacSignature(algorithm: MacAlgorithm, value: string, key: string): Byte[],
		computeHmacSignature(algorithm: MacAlgorithm, value: string, key: string, charset: Charset): Byte[],
		computeRsaSha256Signature(value: string, key: string): Byte[],
		computeRsaSha256Signature(value: string, key: string, charset: Charset): Byte[],
		formatDate(date: Date, timeZone: string, format: string): string,
		formatString(template: string, ...args: Object[]): string,
		newBlob(data: Byte[]): Base.Blob,
		newBlob(data: Byte[], contentType: string): Base.Blob,
		newBlob(data: Byte[], contentType: string, name: string): Base.Blob,
		newBlob(data: string): Base.Blob,
		newBlob(data: string, contentType: string): Base.Blob,
		newBlob(data: string, contentType: string, name: string): Base.Blob,
		parseCsv(csv: string): String[][],
		parseCsv(csv: string, delimiter: Char): String[][],
		sleep(milliseconds: Integer): void,
		unzip(blob: Base.BlobSource): Base.Blob[],
		zip(blobs: Base.BlobSource[]): Base.Blob,
		zip(blobs: Base.BlobSource[], name: string): Base.Blob,
		jsonParse(jsonString: string): Object,
		jsonStringify(obj: Object): string
	}

			
}