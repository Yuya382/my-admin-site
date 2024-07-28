module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"next/core-web-vitals",
		"prettier", // Prettier と競合するルールをオフにする
	],
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"react/react-in-jsx-scope": "off", // Next.js では React のインポートが不要
		"react/prop-types": "off", // TypeScript を使用する場合は不要
		"@typescript-eslint/explicit-module-boundary-types": "off", // 必要に応じてオンにする
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
		"@typescript-eslint/no-explicit-any": "warn",
		"jsx-a11y/anchor-is-valid": [
			"error",
			{
				components: ["Link"],
				specialLink: ["hrefLeft", "hrefRight"],
				aspects: ["invalidHref", "preferButton"],
			},
		],
	},
};
