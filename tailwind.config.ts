import { url } from "inspector";
import type { Config } from "tailwindcss";
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			backgroundImage: {},
			scrollBehavior: ["smooth"],
			colors: {
				//Daisy Ui colors
				"primary-content": "#ffd9d4",
				"secondary-content": "#140b16",
				"accent-content": "#0e0c16",
				neutral: "#100605",
				"neutral-content": "#c9c5c5",
				"base-100": "#fff7f6",
				"base-200": "#ded7d6",
				"base-300": "#beb7b7",
				"base-content": "#161515",
				info: "#a8a29e",
				"info-content": "#0a0a09",
				success: "#bef264",
				"success-content": "#0d1403",
				warning: "#fdba74",
				"warning-content": "#160d05",
				error: "#fca5a5",
				"error-content": "#160a0a",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",

				//shadCn colours
				primary: {
					DEFAULT: "#dc2626",
					foreground: "#ffd9d4",
				},
				secondary: {
					DEFAULT: "#7B1313",
					foreground: "#ffffff",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "#8b8988",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "#c4b5fd",
					foreground: "#0e0c16",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},

			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				first: "moveVertical 30s ease infinite",
				second: "moveInCircle 20s reverse infinite",
				third: "moveInCircle 40s linear infinite",
				fourth: "moveHorizontal 40s ease infinite",
				fifth: "moveInCircle 20s ease infinite",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				moveHorizontal: {
					"0%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
					"50%": {
						transform: "translateX(50%) translateY(10%)",
					},
					"100%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
				},
				moveInCircle: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"50%": {
						transform: "rotate(180deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				moveVertical: {
					"0%": {
						transform: "translateY(-50%)",
					},
					"50%": {
						transform: "translateY(50%)",
					},
					"100%": {
						transform: "translateY(-50%)",
					},
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-animate"),
		addVariablesForColors,
		require("daisyui"),
	],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#dc2626",
					"primary-content": "#ffd9d4",
					secondary: "#f0abfc",
					"secondary-content": "#140b16",
					accent: "#c4b5fd",
					"accent-content": "#0e0c16",
					neutral: "#100605",
					"neutral-content": "#c9c5c5",
					"base-100": "#fff7f6",
					"base-200": "#ded7d6",
					"base-300": "#beb7b7",
					"base-content": "#161515",
					info: "#a8a29e",
					"info-content": "#0a0a09",
					success: "#bef264",
					"success-content": "#0d1403",
					warning: "#fdba74",
					"warning-content": "#160d05",
					error: "#fca5a5",
					"error-content": "#160a0a",
				},
			},
		], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "du-", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables
	},
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}

export default config;
