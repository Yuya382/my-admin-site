/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/style/globals.css", // この行を追加
	],
	theme: {
		extend: {
			colors: {
				app: {
					primary: "#4CAF50", // 鮮やかな緑
					secondary: "#8BC34A", // ライムグリーン
					background: "#FBFDFB", // 非常に薄い緑
					surface: "#FFFFFF", // 純白
					danger: "#FF5722", // 深いオレンジ（自然な警告色）
					warning: "#FFC107", // 黄色（自然な注意色）
					black: "#2E3F2F", // 深い森の緑に近い黒
					white: "#FFFFFF", // 純白
				},
				font: {
					topic: {
						"10": "#E8F5E9", // 最も薄い緑
						"20": "#C8E6C9",
						"30": "#A5D6A7",
						"40": "#81C784",
						"50": "#66BB6A", // 最も濃い緑
					},
					black: {
						"10": "#F1F3F1", // 最も薄い - ほぼ白に近い薄いグレー
						"20": "#D8DED8", // やや薄い - 明るいグレー
						"30": "#BEC7BE", // 中間 - ミディアムグレー
						"40": "#9CAB9C", // 基準色 - グリーングレー
						"50": "#7A8D7A", // やや濃い - ダークグリーングレー
						"60": "#5A6D5A", // 濃い - より深いグリーングレー
						"70": "#3D4F3D", // より濃い - 非常に深いグリーングレー
						"80": "#233223", // 非常に濃い - ほぼ黒に近い深緑
						"90": "#0D160D", // 最も濃い - 黒に非常に近い深緑
						"100": "#000000", // 純黒
					},
					white: {
						"10": "#FFFFFF", // 純白
						"20": "#FAFDF9",
						"30": "#F4FAF3",
						"40": "#EAF5E9",
						"50": "#E0F0DF", // 最も暗い白（非常に薄い緑）
					},
				},
			},
			fontFamily: {
				sans: ["var(--font-inter)", ...fontFamily.sans],
			},
			fontSize: {
				xs: ["0.75rem", { lineHeight: "1rem" }],
				sm: ["0.875rem", { lineHeight: "1.25rem" }],
				base: ["1rem", { lineHeight: "1.5rem" }],
				lg: ["1.125rem", { lineHeight: "1.75rem" }],
				xl: ["1.25rem", { lineHeight: "1.75rem" }],
				"2xl": ["1.5rem", { lineHeight: "2rem" }],
				"3xl": ["1.875rem", { lineHeight: "2.25rem" }],
				"4xl": ["2.25rem", { lineHeight: "2.5rem" }],
				"5xl": ["3rem", { lineHeight: "1" }],
				"6xl": ["3.75rem", { lineHeight: "1" }],
			},
			spacing: {
				"128": "32rem",
				"144": "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			boxShadow: {
				"inner-lg": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
	darkMode: "class", // or 'media' if you prefer
};

export default config;
