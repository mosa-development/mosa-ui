import { browser } from '$app/environment';

function createThemeStore() {
	let current = $state('light');

	return {
		get value() {
			return current;
		},

		set(theme) {
			current = theme;
			if (browser) {
				localStorage.setItem('theme', theme);
				document.documentElement.setAttribute('data-theme', theme);
			}
		},

		toggle() {
			const newTheme = current === 'light' ? 'dark' : 'light';
			this.set(newTheme);
		},

		init() {
			if (browser) {
				const stored = localStorage.getItem('theme');
				const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				const theme = stored || (prefersDark ? 'dark' : 'light');
				this.set(theme);
			}
		}
	};
}

export const theme = createThemeStore();
