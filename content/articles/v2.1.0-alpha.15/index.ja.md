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
  * Dashscope で deepseek または minmax モデル使用時にエラーが発生する問題を修正 ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock
