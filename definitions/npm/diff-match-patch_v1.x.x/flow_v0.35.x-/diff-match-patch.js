

declare module 'diff-match-patch' {
	declare type Diff = [number, string];

			declare export class Patch  {
		diffs: Diff[];
		start1: number;
		start2: number;
		length1: number;
		length2: number
	}

	declare export class diff_match_patch  {
		new(): diff_match_patch;
		Diff_Timeout: number;
		Diff_EditCost: number;
		Match_Threshold: number;
		Match_Distance: number;
		Patch_DeleteThreshold: number;
		Patch_Margin: number;
		Match_MaxBits: number;
		diff_main(
		text1: string, text2: string, opt_checklines?: boolean, opt_deadline?: number
	): Diff[];
		diff_commonPrefix(text1: string, text2: string): number;
		diff_commonSuffix(text1: string, text2: string): number;
		diff_cleanupSemantic(diffs: Diff[]): void;
		diff_cleanupSemanticLossless(diffs: Diff[]): void;
		diff_cleanupEfficiency(diffs: Diff[]): void;
		diff_cleanupMerge(diffs: Diff[]): void;
		diff_xIndex(diffs: Diff[], loc: number): number;
		diff_prettyHtml(diffs: Diff[]): string;
		diff_text1(diffs: Diff[]): string;
		diff_text2(diffs: Diff[]): string;
		diff_levenshtein(diffs: Diff[]): number;
		diff_toDelta(diffs: Diff[]): string;
		diff_fromDelta(text1: string, delta: string): Diff[];
		patch_make(text1: any, text2?: string): Patch[];
		patch_deepCopy(patches: Patch[]): Patch[];
		patch_apply(patches: Patch[], text: string): [string, boolean[]];
		patch_fromText(text: string): Patch[];
		patch_toText(patches: Patch[]): string
	}

	
}