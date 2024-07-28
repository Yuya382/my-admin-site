"use client";

import React from "react";

//Tailwindcssの設定ファイルから値を取得する
const colorPalette = {
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
};

const ColorBlock = ({ color, name }: { color: string; name: string }) => (
	<div className="flex flex-col items-center mb-4">
		<div className="w-20 h-20 rounded-md shadow-md" style={{ backgroundColor: color }}></div>
		<p className="mt-2 text-sm font-medium">{name}</p>
		<p className="text-xs">{color}</p>
	</div>
);

const ColorPalettePage = () => {
	return (
		<div className="container mx-auto px-4 py-8 text-font-black-50">
			<h1 className="text-3xl font-bold mb-8">Color Palette</h1>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4">App Colors</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{Object.entries(colorPalette.app).map(([name, color]) => (
						<ColorBlock key={name} color={color} name={`app.${name}`} />
					))}
				</div>
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4">Font Colors</h2>
				{Object.entries(colorPalette.font).map(([category, colors]) => (
					<div key={category} className="mb-8">
						<h3 className="text-xl font-medium mb-4">Font {category}</h3>
						<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
							{Object.entries(colors).map(([shade, color]) => (
								<ColorBlock
									key={`${category}-${shade}`}
									color={color}
									name={`font.${category}.${shade}`}
								/>
							))}
						</div>
					</div>
				))}
			</section>

			<section className="mb-12">
				<h2 className="text-2xl font-semibold mb-4">Usage Examples</h2>
				<div className="space-y-4">
					<div className="p-4 ">
						<h3 className="text-xl font-semibold mb-2">Welcome to our Eco-friendly Website</h3>
						<p className="text-[#2E3F2F]">
							We are committed to sustainable practices and green solutions.
						</p>
						<button className="mt-2 px-4 py-2  text-font-white-10 rounded">Learn More</button>
					</div>
					<div className="p-4 bg-white shadow-md rounded">
						<p className="text-[#9CAB9C] mb-2">Product Highlight</p>
						<h4 className="text-[#66BB6A] font-medium">Organic Cotton T-Shirt</h4>
						<p className="text-[#2E3F2F] text-sm">100% sustainably sourced materials</p>
						<p className="text-[#FF5722] text-sm mt-2">Only 5 left in stock!</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ColorPalettePage;
