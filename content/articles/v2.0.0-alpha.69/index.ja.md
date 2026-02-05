### 🎉 新機能

* **[client]** データ読み込み方式を設定できるように対応 ([#8551](https://github.com/nocobase/nocobase/pull/8551)) by @zhangzhonghe
* **[flow-engine]** ESM\_CDN\_BASE\_URL 環境変数の設定に対応 ([#8529](https://github.com/nocobase/nocobase/pull/8529)) by @chenos
* **[認証：DingTalk]**`unionId` によるユーザー連携をサポート by @2013xile

### 🚀 機能改善

* **[flow-engine]** JS model コードエディターの自動補完およびヒント機能を改善。 ([#8575](https://github.com/nocobase/nocobase/pull/8575)) by @gchust
* **[client]**
  * インライン編集におけるサブテーブル列幅の設定方法をドロップダウン選択方式に変更 ([#8561](https://github.com/nocobase/nocobase/pull/8561)) by @katherinehhh
  * `ResourceActionProvider` で不要なデフォルト `appends` パラメータを無効化できるように対応 ([#8527](https://github.com/nocobase/nocobase/pull/8527)) by @2013xile
* **[acl]** ACL に generalFixedParams メソッドを追加 ([#8363](https://github.com/nocobase/nocobase/pull/8363)) by @jiannx
* **[データテーブルフィールド：Markdown(Vditor)]** デフォルト編集モード設定を追加し、コンポーネント設定から初期編集状態を選択可能に ([#8408](https://github.com/nocobase/nocobase/pull/8408)) by @Cyx649312038
* **[ワークフロー]** ワークフロー関連ページのルーティングを `/admin/settings/workflow` 配下に統一 ([#8519](https://github.com/nocobase/nocobase/pull/8519)) by @mytharcher
* **[AI: ナレッジベース]** ビルド成果物を最適化し、AI ナレッジベースプラグインのパッケージサイズを削減 by @cgyrock
* **[マルチスペース]** マルチスペースの権限制御を ACL に対応 by @jiannx
* **[認証：DingTalk]** 既定で `userid` によるユーザー連携を使用し、従来の電話番号ベース認証との互換性を維持 by @2013xile

### 🐛 不具合修正

* **[client]**
  * ツリーテーブル有効時、「子レコードを追加」操作にページ更新が必要となる問題を修正 ([#8574](https://github.com/nocobase/nocobase/pull/8574)) by @katherinehhh
  * Grid レイアウトで不要なプレースホルダーが表示される問題を修正 ([#8535](https://github.com/nocobase/nocobase/pull/8535)) by @zhangzhonghe
  * サブテーブルのインライン編集時、列幅変更が即時反映されない問題および複数行テキスト入力欄が列幅に追従しない問題を修正 ([#8573](https://github.com/nocobase/nocobase/pull/8573)) by @katherinehhh
  * 編集フォームでリレーションフィールドのクイック追加ボタンからデータ追加時にフォーム内容が上書きされる問題を修正。 ([#8567](https://github.com/nocobase/nocobase/pull/8567)) by @gchust
  * 非ツリー構造テーブルで「ツリーテーブルを有効化」と「すべての行を既定で展開」設定を非表示に変更 ([#8566](https://github.com/nocobase/nocobase/pull/8566)) by @katherinehhh
  * 追加操作ポップアップに不要なテーブル（追加）メニューが表示される問題を修正。 ([#8562](https://github.com/nocobase/nocobase/pull/8562)) by @gchust
  * nanoid フィールドで新規フォーム送信後に既定値が再生成されない問題を修正 ([#8538](https://github.com/nocobase/nocobase/pull/8538)) by @katherinehhh
  * イベントフローがポップアップをまたぐターゲットブロック更新に反映されない問題を修正。 ([#8541](https://github.com/nocobase/nocobase/pull/8541)) by @gchust
  * フィルター関連の既知問題を修正 ([#8514](https://github.com/nocobase/nocobase/pull/8514)) by @zhangzhonghe
  * フォーム送信後にデータブロックが重複更新される問題を修正。 ([#8531](https://github.com/nocobase/nocobase/pull/8531)) by @gchust
  * 初回ポップアップ表示後に閉じるとページデータが誤更新される問題を修正。 ([#8548](https://github.com/nocobase/nocobase/pull/8548)) by @gchust
  * 多階層の対多フィールドでサブフォーム連動ルールにフォーム変数を使用できない問題を修正。 ([#8518](https://github.com/nocobase/nocobase/pull/8518)) by @gchust
  * カスケードコンポーネントで既定値設定時にデータ表示が異常となる問題を修正 ([#8537](https://github.com/nocobase/nocobase/pull/8537)) by @katherinehhh
  * 多段ポップアップおよびブロック間データ変更後に更新されない問題を修正。 ([#8471](https://github.com/nocobase/nocobase/pull/8471)) by @gchust
* **[flow-engine]**
  * サブテーブル（ポップアップ編集）で createModelOptions 設定時に列削除操作が機能しない問題を修正 ([#8576](https://github.com/nocobase/nocobase/pull/8576)) by @katherinehhh
  * ページ切替後にポップアップからフォーム送信しても画面が更新されない問題を修正。 ([#8554](https://github.com/nocobase/nocobase/pull/8554)) by @gchust
  * JS block 内で一部サードパーティライブラリを正しく読み込めない問題を修正。 ([#8545](https://github.com/nocobase/nocobase/pull/8545)) by @gchust
  * runjs が一部 ESM ライブラリを AMD モジュールと誤認識し、読み込み処理が誤動作する問題を修正。 ([#8536](https://github.com/nocobase/nocobase/pull/8536)) by @gchust
  * 外部データソースで filterTargetKey が単一要素配列の場合に FilterByTK が正しく処理されない問題を修正 ([#8522](https://github.com/nocobase/nocobase/pull/8522)) by @katherinehhh
  * サブテーブル（ポップアップ編集）で createModelOptions 設定時に列削除操作が機能しない問題を修正 ([#8560](https://github.com/nocobase/nocobase/pull/8560)) by @katherinehhh
* **[データテーブルフィールド：添付ファイル（URL）]** 編集フォームで添付ファイル URL フィールドのファイル名表示が有効にならない問題を修正 ([#8571](https://github.com/nocobase/nocobase/pull/8571)) by @katherinehhh
* **[AI 従業員]**
  * LLM ノードのメッセージ送信失敗問題を修正 ([#8569](https://github.com/nocobase/nocobase/pull/8569)) by @2013xile
  * ビルド後にシステムが起動できない問題を修正 ([#8523](https://github.com/nocobase/nocobase/pull/8523)) by @cgyrock
  * AI モデリング時にツール自動呼び出しで発生する例外を修正 ([#8532](https://github.com/nocobase/nocobase/pull/8532)) by @cgyrock
* **[UI テンプレート]** リレーションフィールド新規レコードフォームポップアップをテンプレート保存後、再度開いて送信するとエラーが発生する問題を修正。 ([#8564](https://github.com/nocobase/nocobase/pull/8564)) by @gchust
* **[操作：レコードインポート]** インポート処理におけるセキュリティリスクを修正 ([#8544](https://github.com/nocobase/nocobase/pull/8544)) by @mytharcher
* **[ファイルマネージャー]** ローカルストレージのファイルパス処理を強化し、アップロードディレクトリ外へのアクセスを防止 ([#8539](https://github.com/nocobase/nocobase/pull/8539)) by @mytharcher
* **[ワークフロー]** テーブルレコード選択コンポーネントにエラーハンドリングを追加し、テーブル削除後のエラー発生を回避 ([#8528](https://github.com/nocobase/nocobase/pull/8528)) by @mytharcher
* **[ワークフロー：カスタム操作イベント]** カスタム操作ワークフロー実行時にパラメータおよびペイロードが正しく渡されない問題を修正 by @mytharcher
* **[マルチスペース]**
  * スペースフィールドから read-pretty 属性を削除 by @jiannx
  * スペースフィールドの x-ready-pretty を削除するマイグレーションスクリプトを追加 by @jiannx
* **[AI: ナレッジベース]** ビルド後にシステムが起動できない問題を修正 by @cgyrock
* **[操作：レコードインポート Pro]** インポート結果の統計値およびメッセージ翻訳を修正 by @mytharcher
* **[ワークフロー：サブフロー]** ワークフローリンクのルーティングパスを修正 by @mytharcher
* **[テンプレート印刷]** テンプレート印刷ボタン設定ページのフィールド一覧表示不具合を修正 by @katherinehhh
* **[ワークフロー：承認]**
  * リスト API 読み込み時、JSON フィールド追加により発生するパフォーマンス問題（MySQL）を修正 by @mytharcher
  * 削除済みワークフローに対するエラーハンドリングを追加し、未処理タスク一覧の読み込みエラーを回避 by @mytharcher
  * 既存の担当者範囲ワークフローを無効化後、ユーザーへロール追加時に発生するエラーを修正 by @mytharcher
* **[メール管理]** テキスト選択時に本文が折りたたまれないよう修正。添付ファイルのダウンロード失敗を修正 by @jiannx
* **[企業微信]** ユーザーに携帯番号がない場合に自動登録できない問題を修正 by @2013xile
