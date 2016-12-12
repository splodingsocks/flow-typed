

declare module 'recaptcha' {
		declare interface RecaptchaOptions {
		tabindex?: number,
		theme?: string,
		callback?: Function,
		lang?: string,
		custom_theme_widget?: string,
		custom_translations?: CustomTranslations
	}

	declare interface CustomTranslations {
		visual_challenge?: string,
		audio_challenge?: string,
		refresh_btn?: string,
		instructions_visual?: string,
		instructions_audio?: string,
		help_btn?: string,
		play_again?: string,
		cant_hear_this?: string,
		incorrect_try_again?: string,
		image_alt_text?: string,
		privacy_and_terms?: string
	}

		declare class Recaptcha  {
		constructor(): this;
		reload(): void;
		switch_type(newtype: string): void;
		showhelp(): void;
		get_challenge(): string;
		get_response(): string;
		focus_response_field(): void;
		create(public_key: string, element: string, options: RecaptchaOptions): void;
		destroy(): void
	}

	
}