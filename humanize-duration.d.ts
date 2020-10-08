declare module "@maknapp/humanize-duration" {
	export interface HumanizeDurationOptions {
		largest?: number;
		language?: string;
		delimiter?: string;
		spacer?: string;
		serialComma?: string;
		units?: string[];
		languages?: {};
		round?: boolean;
		unitMeasures?: {
			y: number;
			mo: number;
			w: number;
			d: number;
			h: number;
			m: number;
			s: number;
			ms: number;
		};
	}

	export function humanizeDuration(duration: number, options?: HumanizeDurationOptions): string;
}
