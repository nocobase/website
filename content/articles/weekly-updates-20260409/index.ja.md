週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.34](https://www.nocobase.com/ja/blog/v2.0.34)

*リリース日：2026-04-09*

### 🎉 新機能

* **[移行管理]** migration コマンドに対応 by @chenos

### [v2.0.33](https://www.nocobase.com/ja/blog/v2.0.33)

*リリース日：2026-04-08*

### 🎉 新機能

* **[AI 従業員]** AI 従業員に、LLM ベースのオンライン検索ツールを追加 ([#9032](https://github.com/nocobase/nocobase/pull/9032)) by @cgyrock

### 🐛 不具合修正

* **[client]**
  * 一括編集時に誤った未保存確認メッセージが表示される問題を修正 ([#9054](https://github.com/nocobase/nocobase/pull/9054)) by @gchust
  * モーダルのサブテーブルからレコード追加後、フォーム送信時に誤った再確認モーダルが表示される問題を修正。 ([#9035](https://github.com/nocobase/nocobase/pull/9035)) by @gchust
* **[data-source-manager]** データベースからフィールドを同期したあと、一部のフィールドタイプが正しく更新されない問題を修正 ([#9046](https://github.com/nocobase/nocobase/pull/9046)) by @2013xile
* **[AI 従業員]** APP\_PUBLIC\_PATH 設定後、サブパス環境で AI 従業員がアップロードしたドキュメントにアクセスできない問題を修正 ([#9034](https://github.com/nocobase/nocobase/pull/9034)) by @cgyrock

### [v2.0.32](https://www.nocobase.com/ja/blog/v2.0.32)

*リリース日：2026-04-04*

### 🚀 機能改善

* **[undefined]** README に目次を追加 ([#8878](https://github.com/nocobase/nocobase/pull/8878)) by @gaston98765

### 🐛 不具合修正

* **[client]**
  * サブテーブルの関連フィールドを保存できない問題を修正 ([#9004](https://github.com/nocobase/nocobase/pull/9004)) by @jiannx
  * フィールドのサブフォームにデータが表示されない問題を修正 ([#9008](https://github.com/nocobase/nocobase/pull/9008)) by @jiannx
  * ctx.request で Authorization ヘッダーを上書きできない問題を修正 ([#8850](https://github.com/nocobase/nocobase/pull/8850)) by @gchust
* **[server]** サービスモードではないインスタンスがアプリ状態を更新しないよう、配信アプリの状態にサービスモードのチェックを追加 ([#8959](https://github.com/nocobase/nocobase/pull/8959)) by @mytharcher
* **[AI 従業員]**
  * Dashscope で deepseek または minmax モデルを使用した際にエラーが発生する問題を修正 ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock
  * AI 従業員の推論処理を中断するとサービスがクラッシュする問題を修正 ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock
* **[ワークフロー：HTTP リクエストノード]** ワークフロー HTTP リクエストノードの結果構造を整理し、リクエスト設定が露出しないよう改善。新しいノードではデフォルトでレスポンスデータのみを返し、リクエスト失敗時にはデバッグログを追加。 ([#9024](https://github.com/nocobase/nocobase/pull/9024)) by @mytharcher
* **[データテーブルフィールド：ソート]** scopeKey が未定義の場合に、field-sort プラグインがクラッシュする問題を修正 ([#9019](https://github.com/nocobase/nocobase/pull/9019)) by @gaston98765
* **[ブロック：グリッドカード]** グリッドカード更新時にボタンが更新されない問題を修正 ([#9021](https://github.com/nocobase/nocobase/pull/9021)) by @jiannx
* **[ワークフロー：承認]**
  * 削除されたワークフローに対する例外処理を追加し、ToDo リストの読み込みエラーを回避 by @mytharcher
  * 「提出ラウンド」データが不足している場合の例外処理を追加 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.13](https://www.nocobase.com/ja/blog/v2.1.0-beta.13)

*リリース日：2026-04-09*

### 🎉 新機能

* **[移行管理]** migration コマンドに対応 by @chenos

### [v2.1.0-beta.12](https://www.nocobase.com/ja/blog/v2.1.0-beta.12)

*リリース日：2026-04-08*

### 🎉 新機能

* **[client]**
  * イベントフローで js 変数を追加できるように対応 ([#8938](https://github.com/nocobase/nocobase/pull/8938)) by @jiannx
  * JS item 操作を追加 ([#8911](https://github.com/nocobase/nocobase/pull/8911)) by @jiannx
* **[AI 従業員]** AI 従業員に、LLM ベースのオンライン検索ツールを追加 ([#9032](https://github.com/nocobase/nocobase/pull/9032)) by @cgyrock

### 🚀 機能改善

* **[undefined]**
  * README に目次を追加 ([#8878](https://github.com/nocobase/nocobase/pull/8878)) by @gaston98765
  * LibreOffice と Oracle Instant Client をサイレント展開し、サーバー起動時の冗長なログを削減 ([#8984](https://github.com/nocobase/nocobase/pull/8984)) by @Rishabh1925
* **[client]**
  * runjs を使ったフィールドスタイル設定に対応 ([#8933](https://github.com/nocobase/nocobase/pull/8933)) by @jiannx
  * フォームボタンの横並びレイアウトを改善 ([#8869](https://github.com/nocobase/nocobase/pull/8869)) by @jiannx
* **[ワークフロー：JavaScript ノード]**`isolated-vm` を JavaScript ノードのデフォルト実行エンジンに設定 ([#8973](https://github.com/nocobase/nocobase/pull/8973)) by @mytharcher
  参考ドキュメント：[JavaScript ノード](https://docs.nocobase.com/cn/workflow/nodes/javascript)
* **[ワークフロー]**
  * 有効化スイッチのサイズを小さく調整 ([#9010](https://github.com/nocobase/nocobase/pull/9010)) by @mytharcher
  * 1 ページあたりの件数パラメータで変数を使えるように対応 ([#8951](https://github.com/nocobase/nocobase/pull/8951)) by @mytharcher
* **[AI 従業員]** deepseek が未対応のファイル形式を処理する際の案内を改善 ([#9003](https://github.com/nocobase/nocobase/pull/9003)) by @cgyrock
* **[操作：カスタムリクエスト]** カスタムリクエスト用の操作ボタンを追加 ([#8890](https://github.com/nocobase/nocobase/pull/8890)) by @jiannx
* **[データテーブルフィールド：中国行政区画]** 中国行政区画フィールド 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) by @jiannx
* **[ワークフロー：サブフロー]** ワークフローが異常時に停止しないよう、防御的なロジックを追加 by @mytharcher
* **[ワークフロー：承認]** 承認処理記録リスト読み込み時の JSON フィールドによる性能問題を改善 by @mytharcher

### 🐛 不具合修正

* **[client]**
  * 一括編集時に誤った未保存確認メッセージが表示される問題を修正 ([#9054](https://github.com/nocobase/nocobase/pull/9054)) by @gchust
  * モーダルのサブテーブルからレコード追加後、フォーム送信時に誤った再確認モーダルが表示される問題を修正。 ([#9035](https://github.com/nocobase/nocobase/pull/9035)) by @gchust
  * ctx.request で Authorization ヘッダーを上書きできない問題を修正。 ([#8850](https://github.com/nocobase/nocobase/pull/8850)) by @gchust
  * サブテーブルの関連フィールドを保存できない問題を修正 ([#9004](https://github.com/nocobase/nocobase/pull/9004)) by @jiannx
  * フィールドのサブフォームにデータが表示されない問題を修正 ([#9008](https://github.com/nocobase/nocobase/pull/9008)) by @jiannx
  * テーブル内の関連フィールド文言が初回レンダリング時に正しく表示されない問題を修正 ([#9007](https://github.com/nocobase/nocobase/pull/9007)) by @jiannx
  * 多段モーダルでフォームデータを変更後に閉じると、再確認メッセージが正しく表示されない問題を修正。 ([#8944](https://github.com/nocobase/nocobase/pull/8944)) by @gchust
  * 変数式に空白が含まれる場合、名前が正しく表示されない問題を修正 ([#8988](https://github.com/nocobase/nocobase/pull/8988)) by @mytharcher
  * モーダル内のツリーテーブルで子ノード追加時に異常が発生する問題を修正 ([#8872](https://github.com/nocobase/nocobase/pull/8872)) by @jiannx
* **[data-source-manager]** データベースからフィールド同期後、一部のフィールドタイプが正しく更新されない問題を修正 ([#9046](https://github.com/nocobase/nocobase/pull/9046)) by @2013xile
* **[server]**
  * 非サービスモードのインスタンスがアプリ状態を更新しないよう、配信アプリ状態にサービスモードチェックを追加 ([#8959](https://github.com/nocobase/nocobase/pull/8959)) by @mytharcher
  * データベース停止後のメッセージ送受信と処理を防ぐため、Pub-Sub の停止タイミングを `beforeStop` に変更 ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher
* **[flow-engine]**
  * モーダル内で設定メニューが切れてしまう問題を修正 ([#9005](https://github.com/nocobase/nocobase/pull/9005)) by @gchust
  * 設定画面で UI コンポーネントの幅が狭すぎるとメニューを選択できない問題を修正。 ([#8954](https://github.com/nocobase/nocobase/pull/8954)) by @gchust
  * フォームコントロールと詳細コントロール設定用の js スニペットを追加 ([#8974](https://github.com/nocobase/nocobase/pull/8974)) by @jiannx
  * フォームフィールド削除時に状態をフィールド設定へ同期 ([#8857](https://github.com/nocobase/nocobase/pull/8857)) by @jiannx
* **[database]** 関連データ追加パラメータが不正な場合、警告ログを出してそのフィールドをスキップし、エラーで処理できなくなるのを回避 ([#8923](https://github.com/nocobase/nocobase/pull/8923)) by @mytharcher
* **[resourcer]** 外部データソースを正しく読み込めない問題を修正 ([#8929](https://github.com/nocobase/nocobase/pull/8929)) by @2013xile
* **[AI 従業員]**
  * APP\_PUBLIC\_PATH 設定後、サブパス環境で AI 従業員のアップロード文書にアクセスできない問題を修正 ([#9034](https://github.com/nocobase/nocobase/pull/9034)) by @cgyrock
  * Dashscope で deepseek または minmax モデル使用時にエラーが発生する問題を修正 ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock
  * AI 従業員の推論処理を中断するとサービスがクラッシュする問題を修正 ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock
  * Qwen 大規模言語モデル使用時にオンライン検索の挙動が異常になる問題を修正 ([#9012](https://github.com/nocobase/nocobase/pull/9012)) by @cgyrock
  * AI セッション API に所有権チェックを追加 ([#8993](https://github.com/nocobase/nocobase/pull/8993)) by @cgyrock
  * AI 対話内のツールカードコンポーネント間の間隔を調整 ([#8965](https://github.com/nocobase/nocobase/pull/8965)) by @cgyrock
* **[ワークフロー：HTTP リクエストノード]** ワークフロー HTTP リクエストノードの結果構造を整理し、リクエスト設定が露出しないよう改善。新しいノードではデフォルトでレスポンスデータのみを返し、リクエスト失敗時にはデバッグログを追加。 ([#9024](https://github.com/nocobase/nocobase/pull/9024)) by @mytharcher
* **[データテーブルフィールド：ソート]** scopeKey が未定義の場合に field-sort プラグインがクラッシュする問題を修正 ([#9019](https://github.com/nocobase/nocobase/pull/9019)) by @gaston98765
* **[ブロック：グリッドカード]** グリッドカード更新時にボタンが更新されない問題を修正 ([#9021](https://github.com/nocobase/nocobase/pull/9021)) by @jiannx
* **[通知：サイト内メッセージ]** サイト内メッセージ操作のホワイトリスト処理を修正し、本人以外による不正な権限操作を防止 ([#9001](https://github.com/nocobase/nocobase/pull/9001)) by @mytharcher
* **[ワークフロー：SQL ノード]** SQL ノードのセキュリティ問題を修正 ([#8989](https://github.com/nocobase/nocobase/pull/8989)) by @mytharcher
* **[データ可視化]**
  * 変数付きフィルター条件を使った場合、初回レンダリング時に変数値を正しく解析できない問題を修正 ([#8964](https://github.com/nocobase/nocobase/pull/8964)) by @2013xile
  * スペースプラグイン有効化後、root ロールのチャートデータ集計が異常になる問題を修正 ([#8969](https://github.com/nocobase/nocobase/pull/8969)) by @jiannx
* **[操作：レコードインポート]** スペースプラグイン有効化後にインポートが失敗する問題を修正 ([#8968](https://github.com/nocobase/nocobase/pull/8968)) by @jiannx
* **[ワークフロー：JavaScript ノード]** コード実行のセキュリティ問題を修正 ([#8967](https://github.com/nocobase/nocobase/pull/8967)) by @mytharcher
* **[操作：レコードエクスポート]** インポート / エクスポート設定で多段関連フィールドを制限 ([#8893](https://github.com/nocobase/nocobase/pull/8893)) by @jiannx
* **[カスタム変数]** 公開フォーム送信データの後に No permissions が表示される問題を修正 ([#8942](https://github.com/nocobase/nocobase/pull/8942)) by @chenos
* **[ローカライズ]** 権限がない場合に localizationTexts:missing インターフェースを呼び出してしまう問題を修正 ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos
* **[ユーザー認証]** acl がカスタム state フィルターパラメータをサポートするよう修正 ([#8918](https://github.com/nocobase/nocobase/pull/8918)) by @jiannx
* **[フロントエンドフローエンジン]** uiSchema テーブルからコピーされた古いイベントを削除し、呼び出し後のエラーを回避 ([#8957](https://github.com/nocobase/nocobase/pull/8957)) by @mytharcher
* **[操作：レコードインポート Pro]**
  * インポート / エクスポート設定で多段関連フィールドを制限 by @jiannx
  * 「ワークフローをトリガー」オプション未選択時でもワークフローが実行される問題を修正 by @mytharcher
* **[データソース：外部 Oracle]** Oracle データソースの読み込みエラーを修正 by @2013xile
* **[ワークフロー：承認]**
  * 履歴移行スクリプトのバージョン制限を修正し、新バージョン展開後の起動エラーを回避 by @mytharcher
  * 削除されたワークフローに対する例外処理を追加し、ToDo リスト読み込みエラーを回避 by @mytharcher
  * v2 承認フォームの差し戻しボタン翻訳、ノード選択、差し戻し先の問題を修正 by @zhangzhonghe
  * 「提出ラウンド」データ不足時の例外処理を追加 by @mytharcher
* **[メール管理]**
  * テンプレート使用時に署名が上書きされる問題を修正 by @jiannx
  * メール送信後に閉じる確認が表示されない問題を修正 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.14](https://www.nocobase.com/ja/blog/v2.1.0-alpha.14)

*リリース日：2026-04-07*

### 🎉 新機能

* **[AI 従業員]** AI 従業員が sub agents を呼び出せるように対応 ([#8935](https://github.com/nocobase/nocobase/pull/8935)) by @cgyrock
* **[AI: MCP サーバー]** MCP 経由で呼び出せる汎用的なデータテーブル検索インターフェースを追加 ([#8985](https://github.com/nocobase/nocobase/pull/8985)) by @2013xile

### 🚀 機能改善

* **[undefined]**
  * README に目次を追加 ([#8878](https://github.com/nocobase/nocobase/pull/8878)) by @gaston98765
  * LibreOffice と Oracle Instant Client をサイレント展開し、サーバー起動時の冗長なログを削減 ([#8984](https://github.com/nocobase/nocobase/pull/8984)) by @Rishabh1925
* **[フロントエンドフローエンジン]** UI 構築向けの API を追加。 ([#8992](https://github.com/nocobase/nocobase/pull/8992)) by @gchust
* **[ワークフロー]** 有効化スイッチのサイズを小さく調整 ([#9010](https://github.com/nocobase/nocobase/pull/9010)) by @mytharcher
* **[AI 従業員]** deepseek が未対応のファイル形式を処理する際の案内を改善 ([#9003](https://github.com/nocobase/nocobase/pull/9003)) by @cgyrock
* **[操作：カスタムリクエスト]** カスタムリクエスト用の操作ボタンを追加 ([#8890](https://github.com/nocobase/nocobase/pull/8890)) by @jiannx
* **[ワークフロー：JavaScript ノード]**`isolated-vm` を JavaScript ノードのデフォルト実行エンジンに設定 ([#8973](https://github.com/nocobase/nocobase/pull/8973)) by @mytharcher
  参考ドキュメント：[JavaScript ノード](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 不具合修正

* **[server]**
  * 非サービスモードのインスタンスがアプリ状態を更新しないよう、配信アプリの状態にサービスモードチェックを追加 ([#8959](https://github.com/nocobase/nocobase/pull/8959)) by @mytharcher
  * hostname による受理アプリの取得をサポート ([#8978](https://github.com/nocobase/nocobase/pull/8978)) by @2013xile
* **[client]**
  * サブテーブルの関連フィールドを保存できない問題を修正 ([#9004](https://github.com/nocobase/nocobase/pull/9004)) by @jiannx
  * フィールドのサブフォームにデータが表示されない問題を修正 ([#9008](https://github.com/nocobase/nocobase/pull/9008)) by @jiannx
  * テーブル内の関連フィールド文言が初回レンダリング時に正しく表示されない問題を修正 ([#9007](https://github.com/nocobase/nocobase/pull/9007)) by @jiannx
  * 多段モーダルでフォームデータを変更したあとに閉じる際、再確認メッセージが正しく表示されない問題を修正。 ([#8944](https://github.com/nocobase/nocobase/pull/8944)) by @gchust
  * 変数式に空白が含まれる場合、名前が正しく表示されない問題を修正 ([#8988](https://github.com/nocobase/nocobase/pull/8988)) by @mytharcher
* **[flow-engine]**
  * モーダル内で設定メニューが切れてしまう問題を修正 ([#9005](https://github.com/nocobase/nocobase/pull/9005)) by @gchust
  * UI コンポーネントの幅が狭すぎる場合に、設定画面でメニューを選択できない問題を修正。 ([#8954](https://github.com/nocobase/nocobase/pull/8954)) by @gchust
  * フォームコントロールと詳細コントロール向けの js スニペットを追加 ([#8974](https://github.com/nocobase/nocobase/pull/8974)) by @jiannx
* **[ワークフロー：メール送信ノード]** 変数を利用できるフィールドの検証ルールを修正 ([#9047](https://github.com/nocobase/nocobase/pull/9047)) by @mytharcher
* **[データテーブルフィールド：ソート]** scopeKey が未定義の場合に field-sort プラグインがクラッシュする問題を修正 ([#9019](https://github.com/nocobase/nocobase/pull/9019)) by @gaston98765
* **[AI 従業員]**
  * AI 従業員が skills を利用できない問題を修正 ([#9023](https://github.com/nocobase/nocobase/pull/9023)) by @cgyrock
  * getSkill ツールを無効化したあとも大規模言語モデルがスキルを読み込もうとする問題を修正 ([#9013](https://github.com/nocobase/nocobase/pull/9013)) by @cgyrock
  * Qwen 大規模言語モデル使用時にオンライン検索の挙動が異常になる問題を修正 ([#9012](https://github.com/nocobase/nocobase/pull/9012)) by @cgyrock
  * AI セッション API に所有権チェックを追加 ([#8993](https://github.com/nocobase/nocobase/pull/8993)) by @cgyrock
* **[ブロック：グリッドカード]** グリッドカード更新時にボタンが更新されない問題を修正 ([#9021](https://github.com/nocobase/nocobase/pull/9021)) by @jiannx
* **[ワークフロー]**
  * 条件ノードの誤った検証ルールを修正 ([#9017](https://github.com/nocobase/nocobase/pull/9017)) by @mytharcher
  * データテーブルトリガーのトリガーモードを「新規追加または更新」に設定できない問題を修正 ([#8980](https://github.com/nocobase/nocobase/pull/8980)) by @mytharcher
* **[通知：サイト内メッセージ]** サイト内メッセージ操作のホワイトリスト処理を修正し、本人以外による不正な権限操作を防止 ([#9001](https://github.com/nocobase/nocobase/pull/9001)) by @mytharcher
* **[データソース管理]** MCP ツールの命名を改善し、冗長な API 出力を簡素化して AI 会話コンテキストの過剰消費を抑制 ([#9000](https://github.com/nocobase/nocobase/pull/9000)) by @2013xile
* **[ワークフロー：SQL ノード]** SQL ノードのセキュリティ問題を修正 ([#8989](https://github.com/nocobase/nocobase/pull/8989)) by @mytharcher
* **[データ可視化]** 変数付きフィルター条件を使用した際、チャート初回レンダリング時に変数値を正しく解析できない問題を修正 ([#8964](https://github.com/nocobase/nocobase/pull/8964)) by @2013xile
* **[ワークフロー：承認]**
  * 削除されたワークフローに対する例外処理を追加し、ToDo リスト読み込み時のエラーを回避 by @mytharcher
  * 「提出ラウンド」データが不足している場合の例外処理を追加 by @mytharcher
  * 履歴移行スクリプトのバージョン制限を修正し、新バージョン展開後の起動エラーを回避 by @mytharcher
* **[メール管理]** メール送信後に閉じる確認が表示されない問題を修正 by @jiannx
