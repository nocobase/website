週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.42](https://www.nocobase.com/ja/blog/v1.9.42)

*リリース日：2026-02-02*

### 🚀 機能改善

* **[認証：DingTalk]** ユーザーの紐付けに `userid` をデフォルトで使用しつつ、既存の認証方式で用いられている携帯電話番号との互換性も維持するよう改善 by @2013xile

### 🐛 不具合修正

* **[ワークフロー：承認]** 一覧 API の読み込み時に、JSON フィールド追加が原因で発生していたパフォーマンス低下を修正（MySQL） by @mytharcher
* **[WeCom（企業微信）]** 携帯電話番号を持たないユーザーが自動登録できない不具合を修正 by @2013xile

### [v1.9.41](https://www.nocobase.com/ja/blog/v1.9.41)

*リリース日：2026-02-02*

### 🚀 機能改善

* **[client]**`ResourceActionProvider` において、不要なデフォルトの `appends` パラメータを無効化できるよう改善 ([#8527](https://github.com/nocobase/nocobase/pull/8527)) by @2013xile

### 🐛 不具合修正

* **[ワークフロー]** テーブルレコード選択コンポーネントの耐障害性を向上し、テーブル削除後にエラーが発生しないよう修正 ([#8528](https://github.com/nocobase/nocobase/pull/8528)) by @mytharcher
* **[ファイルマネージャー]** ローカルストレージエンジンのファイルパス処理を見直し、アップロードディレクトリ外へアクセスできないよう修正 ([#8539](https://github.com/nocobase/nocobase/pull/8539)) by @mytharcher
* **[ワークフロー：サブフロー]** ワークフローリンクのルーティングパスに関する不具合を修正 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.19](https://www.nocobase.com/ja/blog/v2.0.0-beta.19)

*リリース日：2026-02-05*

### 🎉 新機能

* **[認証：DingTalk]**`unionId` によるユーザー連携をサポート by @2013xile

### 🚀 機能改善

* **[client]** インライン編集におけるサブテーブル列幅の設定方法をドロップダウン選択方式に変更 ([#8561](https://github.com/nocobase/nocobase/pull/8561)) by @katherinehhh
* **[データテーブルフィールド：Markdown(Vditor)]** デフォルトの編集モード設定を追加し、コンポーネント設定から初期編集状態を選択可能に ([#8408](https://github.com/nocobase/nocobase/pull/8408)) by @Cyx649312038
* **[マルチスペース]** マルチスペースの権限制御を ACL に対応 by @jiannx
* **[AI: ナレッジベース]** ビルド成果物を最適化し、AI ナレッジベースプラグインのパッケージサイズを削減 by @cgyrock

### 🐛 不具合修正

* **[client]**
  * 編集フォームでリレーションフィールドセレクターのクイック追加ボタンからデータを追加した際、フォーム内データが上書きされる問題を修正。 ([#8567](https://github.com/nocobase/nocobase/pull/8567)) by @gchust
  * Grid レイアウトに不要なプレースホルダーが表示される問題を修正 ([#8535](https://github.com/nocobase/nocobase/pull/8535)) by @zhangzhonghe
  * ツリーテーブル有効時、「子レコードを追加」操作を追加するためにページ更新が必要になる問題を修正 ([#8574](https://github.com/nocobase/nocobase/pull/8574)) by @katherinehhh
  * サブテーブルのインライン編集時、列幅を縮小しても即時反映されない問題、および複数行テキストフィールドで列幅拡張後に入力欄が列幅に追従しない問題を修正 ([#8573](https://github.com/nocobase/nocobase/pull/8573)) by @katherinehhh
  * 追加操作のポップアップにテーブル（追加）メニューが表示される問題を修正。 ([#8562](https://github.com/nocobase/nocobase/pull/8562)) by @gchust
* **[flow-engine]**
  * JS block 内で一部のサードパーティライブラリを正しく読み込めない問題を修正。 ([#8545](https://github.com/nocobase/nocobase/pull/8545)) by @gchust
  * ページ切替後に再度ポップアップを開いてフォーム送信しても画面が更新されない問題を修正。 ([#8554](https://github.com/nocobase/nocobase/pull/8554)) by @gchust
* **[UI テンプレート]** リレーションフィールドの新規レコードフォームポップアップをテンプレート保存後、再度開いて送信するとエラーが発生する問題を修正。 ([#8564](https://github.com/nocobase/nocobase/pull/8564)) by @gchust
* **[データテーブルフィールド：添付ファイル（URL）]** 編集フォーム内の添付ファイル URL フィールド設定で、ファイル名表示が有効にならない問題を修正 ([#8571](https://github.com/nocobase/nocobase/pull/8571)) by @katherinehhh
* **[AI 従業員]** LLM ノードからのメッセージ送信に失敗する問題を修正 ([#8569](https://github.com/nocobase/nocobase/pull/8569)) by @2013xile
* **[操作：レコードインポート]** インポート処理におけるセキュリティリスクを修正 ([#8544](https://github.com/nocobase/nocobase/pull/8544)) by @mytharcher
* **[ワークフロー：カスタム操作イベント]** カスタム操作ワークフロー実行時にパラメータおよびペイロードが正しく渡されない問題を修正 by @mytharcher
* **[マルチスペース]**
  * スペースフィールドの x-ready-pretty を削除するマイグレーションスクリプトを追加 by @jiannx
  * スペースフィールドから read-pretty 属性を削除 by @jiannx
* **[ワークフロー：承認]** リスト API 読み込み時、JSON フィールド追加によって発生するパフォーマンス問題（MySQL）を修正 by @mytharcher

### [v2.0.0-beta.18](https://www.nocobase.com/ja/blog/v2.0.0-beta.18)

*リリース日：2026-02-02*

### 🎉 新機能

* **[flow-engine]** ESM\_CDN\_BASE\_URL 環境変数の設定に対応 ([#8529](https://github.com/nocobase/nocobase/pull/8529)) by @chenos

### 🚀 機能改善

* **[acl]** acl に generalFixedParams メソッドを追加 ([#8363](https://github.com/nocobase/nocobase/pull/8363)) by @jiannx
* **[client]**`ResourceActionProvider` で不要なデフォルト `appends` パラメータを無効化できるよう改善 ([#8527](https://github.com/nocobase/nocobase/pull/8527)) by @2013xile
* **[認証：DingTalk]** ユーザーの紐付けに `userid` をデフォルトで使用しつつ、既存の認証方式で利用されている携帯電話番号との互換性も維持するよう改善 by @2013xile

### 🐛 不具合修正

* **[client]**
  * イベントストリーム更新が、モーダルをまたぐターゲットブロックに反映されない不具合を修正 ([#8541](https://github.com/nocobase/nocobase/pull/8541)) by @gchust
  * 初回のモーダル表示後、モーダルを閉じた際にページデータが誤って更新される不具合を修正 ([#8548](https://github.com/nocobase/nocobase/pull/8548)) by @gchust
  * フォーム送信後にデータブロックが重複して更新される不具合を修正 ([#8531](https://github.com/nocobase/nocobase/pull/8531)) by @gchust
  * nanoid フィールドで、新規フォーム送信後にデフォルト値が再生成されない不具合を修正 ([#8538](https://github.com/nocobase/nocobase/pull/8538)) by @katherinehhh
  * カスケードコンポーネントでデフォルト値設定時にデータ表示が乱れる不具合を修正 ([#8537](https://github.com/nocobase/nocobase/pull/8537)) by @katherinehhh
* **[flow-engine]** runjs がモジュール解析時に一部の ESM ライブラリを AMD と誤認識し、読み込み処理が正しく行われない不具合を修正 ([#8536](https://github.com/nocobase/nocobase/pull/8536)) by @gchust
* **[ファイルマネージャー]** ローカルストレージエンジンのファイルパス処理を見直し、アップロードディレクトリ外へアクセスできないよう修正 ([#8539](https://github.com/nocobase/nocobase/pull/8539)) by @mytharcher
* **[ワークフロー]** テーブル削除後もエラーが発生しないよう、レコード選択コンポーネントの耐障害性を向上 ([#8528](https://github.com/nocobase/nocobase/pull/8528)) by @mytharcher
* **[AI 従業員]** AI モデリング時にツールを自動呼び出しする際に発生する例外を修正 ([#8532](https://github.com/nocobase/nocobase/pull/8532)) by @cgyrock
* **[操作：レコードインポート Pro]** インポート結果の集計数値およびメッセージ翻訳を修正 by @mytharcher
* **[ワークフロー：サブフロー]** ワークフローリンクのルーティングパスに関する不具合を修正 by @mytharcher
* **[テンプレート印刷]** テンプレート設定ページで、印刷ボタンのフィールド一覧表示が乱れる不具合を修正 by @katherinehhh
* **[ワークフロー：承認]**
  * 担当者範囲を持つ既存ワークフローを無効化した後、ユーザーにロールを追加する際に発生するエラーを修正 by @mytharcher
  * 削除済みワークフローに対する耐障害処理を追加し、未処理タスクリスト読み込み時のエラーを防止 by @mytharcher
* **[WeCom（企業微信）]** 携帯電話番号を持たないユーザーが自動登録できない不具合を修正 by @2013xile
