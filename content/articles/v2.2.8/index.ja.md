### 🚀 機能改善

* **[企業 WeChat]** 企業 WeChat プラグインの型安全性を改善し、通知受信者の選択コンポーネントを統一。 by @chenzhizdt

### 🐛 不具合修正

* **[server]** 未デプロイの環境でアプリケーションが誤って起動される問題を修正 ([#10464](https://github.com/nocobase/nocobase/pull/10464)) by @2013xile
* **[通知：サイト内通知]** サイト内通知のタイトルと詳細リンクで、すべての種類のワークフロー変数を使用できるように改善。 ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher
* **[ファイルマネージャー]** ファイルリダイレクトで期限切れの署名付きストレージ URL が再利用されないように修正。 ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher
* **[データソース管理]** v2 の権限のデータ範囲で、「現在のユーザー」と「現在のロール」を変数として選択できるように追加 ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx
* **[ワークフロー：JavaScript ノード]** JavaScript ワークフローノードがタイムアウトした際、ワークフローを誤って中断し、「例外発生時も実行を続行する」設定が反映されない場合がある問題を修正。 ([#10461](https://github.com/nocobase/nocobase/pull/10461)) by @mytharcher
* **[AI 従業員]** AI 従業員のナレッジベースプロンプトに検索内容のプレースホルダーがない場合、ナレッジベースを繰り返し検索する可能性がある問題を修正し、設定保存時に分かりやすいバリデーション案内を表示。 ([#10413](https://github.com/nocobase/nocobase/pull/10413)) by @cgyrock
* **[AI：ナレッジベース]** AI ナレッジベースの PGVector 接続テスト、ZIP インポート結果の表示、ドキュメント分割設定の継承、Chunk overlap パラメータの検証に関する問題を修正。 by @cgyrock
* **[アプリケーション監督]** アプリケーション管理 API のレスポンスからサブアプリケーションの認証キーが漏洩する問題を修正 by @2013xile
* **[DingTalk]** DingTalk 通知の受信者選択コンポーネントを統一。 by @chenzhizdt
