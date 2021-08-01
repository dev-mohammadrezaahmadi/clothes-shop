module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				"item-height": "24rem",
				"item-sm-height": "20rem",
				"item-md-height": "22rem",
				"item-lg-height": "28rem",
				"item-sm-width": "14rem",
				"item-md-width": "16rem",
				"item-lg-width": "20rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
