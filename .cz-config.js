module.exports = {
    types: [
      { value: 'feat', name: '新機能: 新しい機能' },
      { value: 'fix', name: 'バグ修正: バグの修正' },
      { value: 'docs', name: 'ドキュメント: ドキュメントのみの変更' },
      { value: 'style', name: 'スタイル: コードの意味に影響を与えない変更（空白、フォーマット、セミコロンの欠落など）' },
      { value: 'refactor', name: 'リファクタリング: バグの修正や機能の追加ではないコードの変更' },
      { value: 'perf', name: 'パフォーマンス: パフォーマンスを向上させるコードの変更' },
      { value: 'test', name: 'テスト: 不足しているテストの追加や既存のテストの修正' },
      { value: 'chore', name: 'チョア: ビルドプロセスやドキュメント生成などの補助ツールやライブラリの変更' },
    ],
  
    scopes: [
      { name: 'フロントエンド' },
      { name: 'バックエンド' },
      { name: 'デプロイ' },
      { name: 'データベース' },
      { name: '設定' },
      { name: 'その他' }
    ],
  
    messages: {
      type: "コミットする変更タイプを選択してください:",
      scope: "この変更の影響範囲を選択してください (オプション):",
      customScope: "この変更の影響範囲を入力してください:",
      subject: "変更内容を簡潔に説明してください:\n",
      body: '変更内容の詳細を記入してください (オプション). "|" を使用して改行できます:\n',
      breaking: "破壊的変更がある場合は記述してください (オプション):\n",
      footer: "この変更で解決されるissueを記入してください (オプション). 例: #31, #34:\n",
      confirmCommit: "上記のコミット内容でよろしいですか?",
    },
  
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    subjectLimit: 100,
  };