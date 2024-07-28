module.exports = {
	// 1行の最大文字数
	printWidth: 100,

	// インデントのスペース数
	tabWidth: 2,

	// インデントにタブを使用する
	useTabs: true,

	// 文末にセミコロンを付ける
	semi: true,

	// 文字列にダブルクォートを使用する
	singleQuote: false,

	// オブジェクトのプロパティに引用符を付ける方法
	// "as-needed": 必要な場合のみ付ける
	quoteProps: "as-needed",

	// JSXでシングルクォートを使用しない
	jsxSingleQuote: false,

	// 複数行の場合、可能な限り末尾にカンマを付ける
	trailingComma: "es5",

	// オブジェクトリテラルの括弧前後にスペースを入れる
	bracketSpacing: true,

	// 複数行の場合、閉じ括弧を最終行の最後に配置する
	bracketSameLine: false,

	// アロー関数の引数を常に括弧で囲む
	arrowParens: "always",

	// フォーマットを開始する行番号
	rangeStart: 0,

	// ファイル先頭の特別なコメントを要求しない
	requirePragma: false,

	// ファイル先頭に特別なコメントを挿入しない
	insertPragma: false,

	// Markdownのテキスト折り返し方法
	// "preserve": 折り返しを保持する
	proseWrap: "preserve",

	// HTML内の空白文字の扱い方
	// "css": CSSの display プロパティの値に従う
	htmlWhitespaceSensitivity: "css",

	// Vueファイルのスクリプトとスタイルのインデントを行わない
	vueIndentScriptAndStyle: false,

	// 改行コードの種類
	// "lf": Unix系の改行コード（\n）を使用
	endOfLine: "lf",

	// 埋め込まれた言語のフォーマット方法
	// "auto": 自動的に判断してフォーマット
	embeddedLanguageFormatting: "auto",

	// 属性を複数行に分割しない
	singleAttributePerLine: false,
};
