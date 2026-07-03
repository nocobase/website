### 🚀 機能改善

* **[cli]** Nginx/Caddy のプロキシ設定を手動生成できるようにしました。これにより、Docker デプロイで Nginx を内蔵せずに実行できるようになり、プロキシと CDN に関するランタイム設定も統一されました。 ([#9943](https://github.com/nocobase/nocobase/pull/9943)) by @chenos
* **[undefined]** 外部ストレージにおける PDF プレビューのセキュリティ説明を調整しました。 ([#9901](https://github.com/nocobase/nocobase/pull/9901)) by @mytharcher
  参考ドキュメント：[ファイルプレビュー](https://github.com/nocobase/nocobase/blob/docs/file-preview-security/docs/docs/cn/file-manager/file-preview/index.md)
* **[utils]** `<span>SERVER_REQUEST_WHITELIST</span>` が未設定で、サーバーから外部へ送信されるリクエストの送信先に SSRF リスクがある場合、ログ警告を出力するようにしました。 ([#9966](https://github.com/nocobase/nocobase/pull/9966)) by @mytharcher
  参考ドキュメント：[環境変数](https://docs.nocobase.com/cn/get-started/installation/env), [グローバル環境変数](https://docs.nocobase.com/cn/api/app/env)
* **[AI: ナレッジベース]** ナレッジベースのドキュメントアップロードに、ZIP ファイル名のエンコーディングオプションを追加しました。非 UTF-8 エンコーディングで作成された ZIP ファイル内のファイル名が文字化けするのを防げるようになりました。 by @cgyrock

### 🐛 不具合修正

* **[client-v2]** ルート配下のサブページを更新した後、ページが空白になる、または余白が不自然になる問題を修正しました。 ([#9961](https://github.com/nocobase/nocobase/pull/9961)) by @zhangzhonghe
* **[ワークフロー]** 並行キュー処理時に、ワークフロースケジューラーが不要なデータベース再取得リトライを行わないようにしました。 ([#9953](https://github.com/nocobase/nocobase/pull/9953)) by @mytharcher
* **[操作：レコードエクスポート]** XLSX エクスポートで、テキスト系フィールドの値が数式として解釈される文字で始まる場合、Excel で開いた後に数式として実行される可能性がある問題を修正しました。 ([#9973](https://github.com/nocobase/nocobase/pull/9973)) by @mytharcher
* **[AIワーカー]** カスタム Base URL を空にした後、LLM プロバイダーがデフォルト Base URL にフォールバックできない問題を修正しました。 ([#9958](https://github.com/nocobase/nocobase/pull/9958)) by @cgyrock
* **[データソース：外部 NocoBase]** 外部 NocoBase データソースで、添付ファイルフィールドのアップロードや更新が正しく行えない問題を修正しました。 by @2013xile
