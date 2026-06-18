### 🐛 不具合修正

- **[ai]**

  - AI 関連パッケージにおいて、`@langchain/openai` をパッチレベルの更新のみに固定しました。 ([#9829](https://github.com/nocobase/nocobase/pull/9829)) by @cgyrock
  - AI プラグインにおける LangChain 依存関係の解決に関する非互換性を修正しました。 ([#9831](https://github.com/nocobase/nocobase/pull/9831)) by @cgyrock
- **[AI: ナレッジベース]**

  - AI プラグインが有効化されていない状態で AI ナレッジベースプラグインを有効化した際のエラーメッセージが不明瞭だった問題を修正しました。 by @cgyrock
  - AI ナレッジベースプラグインにおける LangChain 依存関係の解決に関する非互換性を修正しました。 by @cgyrock
