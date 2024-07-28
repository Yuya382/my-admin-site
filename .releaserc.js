module.exports = {
	// リリースを行うブランチを指定
	branches: ["main"],

	// 使用するプラグインとその設定
	plugins: [
		// コミットメッセージを解析してバージョンを決定
		"@semantic-release/commit-analyzer",

		// リリースノートを生成
		"@semantic-release/release-notes-generator",

		// CHANGELOGファイルを生成・更新
		"@semantic-release/changelog",

		// package.jsonのバージョンを更新
		"@semantic-release/npm",

		// 変更をGitにコミットし、タグを作成
		[
			"@semantic-release/git",
			{
				// コミットに含めるファイル
				assets: ["package.json", "CHANGELOG.md"],
				// コミットメッセージのフォーマット
				message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
			},
		],

		// GitHubリリースを作成し、アセットをアップロード
		[
			"@semantic-release/github",
			{
				// リリースに含めるアセット
				assets: [
					{ path: "dist/**/*.js", label: "JS distribution" },
					{ path: "dist/**/*.css", label: "CSS distribution" },
				],
			},
		],
	],
};
