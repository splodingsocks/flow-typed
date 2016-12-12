import type { Base } from 'npm$namespace$ColorBrewer'

declare module 'colorbrewer' {
					declare module.exports: Base


}

declare module 'npm$namespace$ColorBrewer' {
		declare interface ColorScheme {
		[n: number]: string[]
	}

	declare interface EightColorScheme {
		3: [string, string, string],
		4: [string, string, string, string],
		5: [string, string, string, string, string],
		6: [string, string, string, string, string, string],
		7: [string, string, string, string, string, string, string],
		8: [string, string, string, string, string, string, string, string]
	}

	declare interface NineColorScheme {
		9: [string, string, string, string, string, string, string, string, string]
	}

	declare interface ElevenColorScheme {
		10: [string, string, string, string, string, string, string, string, string, string],
		11: [string, string, string, string, string, string, string, string, string, string, string]
	}

	declare interface TwelveColorScheme {
		12: [string, string, string, string, string, string, string, string, string, string, string, string]
	}

	declare interface Base {
		YlGn: NineColorScheme,
		YlGnBu: NineColorScheme,
		GnBu: NineColorScheme,
		BuGn: NineColorScheme,
		PuBuGn: NineColorScheme,
		PuBu: NineColorScheme,
		BuPu: NineColorScheme,
		RdPu: NineColorScheme,
		PuRd: NineColorScheme,
		OrRd: NineColorScheme,
		YlOrRd: NineColorScheme,
		YlOrBr: NineColorScheme,
		Purples: NineColorScheme,
		Blues: NineColorScheme,
		Greens: NineColorScheme,
		Oranges: NineColorScheme,
		Reds: NineColorScheme,
		Greys: NineColorScheme,
		PuOr: ElevenColorScheme,
		BrBG: ElevenColorScheme,
		PRGn: ElevenColorScheme,
		PiYG: ElevenColorScheme,
		RdBu: ElevenColorScheme,
		RdGy: ElevenColorScheme,
		RdYlBu: ElevenColorScheme,
		Spectral: ElevenColorScheme,
		RdYlGn: ElevenColorScheme,
		Accent: EightColorScheme,
		Dark2: EightColorScheme,
		Paired: TwelveColorScheme,
		Pastel1: NineColorScheme,
		Pastel2: EightColorScheme,
		Set1: NineColorScheme,
		Set2: EightColorScheme,
		Set3: TwelveColorScheme
	}

			
}