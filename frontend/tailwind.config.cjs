/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'custom-bg': '#0A141E',
				'custom-text': '#C8D2DC'
			}
		}
	},
	plugins: []
};
