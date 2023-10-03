/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			primary: "#0582CA",
			secondary: "#CF5C36",
			accent: "#DBF3FF",
			dark: "#051923",
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			red: colors.red,
			green: colors.green,

		},
		extend: {},
	},
	plugins: [],
};
