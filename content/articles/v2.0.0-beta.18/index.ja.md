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
