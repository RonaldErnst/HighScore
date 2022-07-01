/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/colors/themes")[
						"[data-theme=light]"
					],
					primary: "#008F6D",
                    secondary: "#00CC63",
                    accent: "#E17714",
				},
                dark: {
                    ...require("daisyui/src/colors/themes")[
						"[data-theme=dark]"
					],
                    primary: "#008F6D",
                    secondary: "#00CC63",
                    accent: "#E17714",
                }
				// dark: {
				// 	primary: "#008F6D",
				// 	secondary: "#00CC63",
				// 	accent: "#ED8B2F",
				// 	neutral: "#25262D",
				// 	"base-100": "#363745",
				// 	info: "#47AFFF",
				// 	success: "#186D56",
				// 	warning: "#EE5A1B",
				// 	error: "#F2021A",
				// },
				// light: {
				// 	primary: "#008F6D",
				// 	secondary: "#00CC63",
				// 	accent: "#ED8B2F",
				// 	neutral: "#FAF8F2",
				// 	"base-100": "#FAF8F2",
				// 	info: "#47AFFF",
				// 	success: "#186D56",
				// 	warning: "#EE5A1B",
				// 	error: "#F2021A",
				// },
			},
		],
	},
	plugins: [require("daisyui")],
};
