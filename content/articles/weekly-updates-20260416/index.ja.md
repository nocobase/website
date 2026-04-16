週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.37](https://www.nocobase.com/ja/blog/v2.0.37)

*リリース日：2026-04-14*

### 🚀 最適化

- **[undefined]**

  - フランス語READMEに目次を追加 ([#9037](https://github.com/nocobase/nocobase/pull/9037)) by @saraTabbane
  - README.zh-CN.mdに目次を追加 ([#9038](https://github.com/nocobase/nocobase/pull/9038)) by @gaston98765
  - アラビア語ドキュメントトップページの翻訳を追加 ([#9043](https://github.com/nocobase/nocobase/pull/9043)) by @gaston98765
  - ドキュメント：get-started入門ページのアラビア語翻訳を追加 ([#9044](https://github.com/nocobase/nocobase/pull/9044)) by @gaston98765
- **[client]** フォーム必須項目検証スイッチを追加 ([#9060](https://github.com/nocobase/nocobase/pull/9060)) by @jiannx

### 🐛 修正

- **[utils]** サーバー側のHTTPリクエストにセキュリティ制御を追加し、可能なSSRFリスクを回避 ([#9079](https://github.com/nocobase/nocobase/pull/9079)) by @marcharcher
  参考ドキュメント：[環境変数](https://docs.nocobase.com/cn/get-started/installation/env)

### [v2.0.36](https://www.nocobase.com/ja/blog/v2.0.36)

*リリース日：2026-04-10*

### 🐛 不具合修正

* **[client]** サブテーブルで多対多の項目を追加するとエラーが発生する問題を修正 ([#9070](https://github.com/nocobase/nocobase/pull/9070)) by @jiannx
* **[flow-engine]** 外部データソースの多対一フィールドをテーブルブロックに追加できない問題を修正 ([#9068](https://github.com/nocobase/nocobase/pull/9068)) by @jiannx
* **[通知管理]** ワークフローでのサイト内通知送信におけるパフォーマンス問題を修正し、同期送信処理のブロッキングを軽減 ([#9066](https://github.com/nocobase/nocobase/pull/9066)) by @mytharcher

### [v2.0.35](https://www.nocobase.com/ja/blog/v2.0.35)

*リリース日：2026-04-09*

### 🐛 不具合修正

* **[client]** サブテーブルのデータ選択ボタンから開くモーダル内で、上位項目の変数値を正しく解析できない問題を修正。 ([#8996](https://github.com/nocobase/nocobase/pull/8996)) by @gchust
* **[データテーブルフィールド：コード]** コードフィールドの UI タイプを修正 ([#9061](https://github.com/nocobase/nocobase/pull/9061)) by @2013xile


## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.16](https://www.nocobase.com/ja/blog/v2.1.0-alpha.16)

*リリース日：2026-04-14*

### 🚀 最適化

- **[undefined]**

  - README.zh-CN.mdに目次を追加 ([#9038](https://github.com/nocobase/nocobase/pull/9038)) by @gaston98765
  - フランス語READMEに目次を追加 ([#9037](https://github.com/nocobase/nocobase/pull/9037)) by @saraTabbane
- **[server]** プラグイン管理関連のSwagger APIドキュメントを完善 ([#9080](https://github.com/nocobase/nocobase/pull/9080)) by @2013xile

### 🐛 修正

- **[AI従業員]** AI従業員会話中の異常メッセージが表示されない問題を修正 ([#9097](https://github.com/nocobase/nocobase/pull/9097)) by @cgyrock
- **[権限管理]** 権限管理のswaggerドキュメントを更新し、MCPサービスを強化 ([#9096](https://github.com/nocobase/nocobase/pull/9096)) by @Andrew1989Y

### [v2.1.0-alpha.15](https://www.nocobase.com/ja/blog/v2.1.0-alpha.15)

*リリース日：2026-04-10*

### 🎉 新機能

* **[ブロック：ツリー]** ツリーフィルターブロックを追加 ([#9016](https://github.com/nocobase/nocobase/pull/9016)) by @jiannx
* **[認証：API キー]**`pm list` と `generate-api-key` コマンドを追加 ([#9076](https://github.com/nocobase/nocobase/pull/9076)) by @chenos
* **[AI 従業員]**
  * AI 従業員向けに、データ集計クエリツールと業務分析レポートツールを追加 ([#9040](https://github.com/nocobase/nocobase/pull/9040)) by @2013xile
  * AI 従業員に、LLM ベースのオンライン検索ツールを追加 ([#9032](https://github.com/nocobase/nocobase/pull/9032)) by @cgyrock
* **[移行管理]** migration コマンドに対応 by @chenos
* **[メール管理]** gmail でメールエイリアス送信に対応 by @jiannx

### 🐛 不具合修正

* **[flow-engine]** 外部データソースの多対一フィールドをテーブルブロックに追加できない問題を修正 ([#9068](https://github.com/nocobase/nocobase/pull/9068)) by @jiannx
* **[client]**
  * サブテーブルで多対多の項目を追加するとエラーになる問題を修正 ([#9070](https://github.com/nocobase/nocobase/pull/9070)) by @jiannx
  * サブテーブルのデータ選択ボタンから開くモーダル内で、上位項目の変数値を正しく解析できない問題を修正。 ([#8996](https://github.com/nocobase/nocobase/pull/8996)) by @gchust
  * 一括編集時に誤った未保存確認メッセージが表示される問題を修正 ([#9054](https://github.com/nocobase/nocobase/pull/9054)) by @gchust
  * モーダルのサブテーブルからレコード追加後、フォーム送信時に誤った再確認モーダルが表示される問題を修正。 ([#9035](https://github.com/nocobase/nocobase/pull/9035)) by @gchust
  * ctx.request で Authorization ヘッダーを上書きできない問題を修正。 ([#8850](https://github.com/nocobase/nocobase/pull/8850)) by @gchust
* **[data-source-manager]** データベースからフィールドを同期したあと、一部のフィールドタイプが正しく更新されない問題を修正 ([#9046](https://github.com/nocobase/nocobase/pull/9046)) by @2013xile
* **[通知管理]** ワークフローでのサイト内通知送信におけるパフォーマンス問題を修正し、同期送信処理のブロッキングを軽減 ([#9066](https://github.com/nocobase/nocobase/pull/9066)) by @mytharcher
* **[データテーブルフィールド：コード]** コードフィールドの UI タイプを修正 ([#9061](https://github.com/nocobase/nocobase/pull/9061)) by @2013xile
* **[ワークフロー：HTTP リクエストノード]** ワークフロー HTTP リクエストノードの結果構造を整理し、リクエスト設定が露出しないよう改善。新しいノードではデフォルトでレスポンスデータのみを返し、リクエスト失敗時にはデバッグログを追加。 ([#9024](https://github.com/nocobase/nocobase/pull/9024)) by @mytharcher
* **[AI 従業員]**
  * AI 従業員の推論処理を中断するとサービスがクラッシュする問題を修正 ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock
  * APP\_PUBLIC\_PATH 設定後、サブパス環境で AI 従業員がアップロードしたドキュメントにアクセスできない問題を修正 ([#9034](https://github.com/nocobase/nocobase/pull/9034)) by @cgyrock
  * Dashscope で Deepseek または MiniMax モデル使用時にエラーが発生する問題を修正 ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock
