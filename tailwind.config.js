/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary10: '#0D0E0B',
				primary20: '#2B2B2B',
				primary30: '#696969',
				primary40: '#848484',
				primary50: '#A0A0A0',
				primary60: '#B7B8B6',
				primary70: '#C9CAC8',
				primary80: '#EEEEEE',
				primary90: '#FCFCFC',
				primary100: '#FFFFFF',
				pear: '#D6BB7D',
				peach: '#E59D5E',
				peachGrey: '#DBA784',
				greyPeach: '#D3B4A0',
				blueRedGrey: '#b9b1bc',
				blueGrey: '#B0AFC4',
				warning: '#B3261E',
				warningHover: '#A31F19'
			}
		}
	},
	plugins: []
};
