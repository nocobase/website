### 🎉 新機能

* **[クライアント]** フォントサイズ、フォントウェイト、フォントスタイルのフィールドスタイル設定をサポート ([#6489](https://github.com/nocobase/nocobase/pull/6489)) @katherinehhh による
* **[変数とシークレット]** リンクボタンURLでの環境変数のサポート ([#6494](https://github.com/nocobase/nocobase/pull/6494)) @katherinehhh による

### 🚀 改善

* **[クライアント]** フィルターボタンで選択したフィールドのファジーマッチングをサポート ([#6496](https://github.com/nocobase/nocobase/pull/6496)) @katherinehhh による
* **[ワークフロー: メール配信ノード]** セキュアフィールド構成説明を追加 ([#6510](https://github.com/nocobase/nocobase/pull/6510)) @sheldon66 による
* **[WEBクライアント]** キャッシュをクリアするための二次確認プロンプトを追加 ([#6505](https://github.com/nocobase/nocobase/pull/6505)) @katherinehhh による
* **[通知: メール]** セキュアフィールド構成説明を追加 ([#6501](https://github.com/nocobase/nocobase/pull/6501)) @sheldon66 による
* **[メールマネージャー]** メール送信時の再認可と自動アカウント選択をサポート (@jiannx)

### 🐛 バグ修正

* **[サーバー]** アップグレードコマンドがワークフローのエラーを引き起こす可能性がある ([#6524](https://github.com/nocobase/nocobase/pull/6524)) @gchust による
* **[クライアント]**
  * フォーム内のサブテーブルの高さがフォームの高さに設定される ([#6518](https://github.com/nocobase/nocobase/pull/6518)) @katherinehhh による
  * 中国語ロケールでのタイムフィールド送信エラー（type time の無効な入力構文） ([#6511](https://github.com/nocobase/nocobase/pull/6511)) @katherinehhh による
  * アクションボタンの透明度がホバー時に設定表示の問題を引き起こす ([#6529](https://github.com/nocobase/nocobase/pull/6529)) @katherinehhh による
* **[認証]**
  * 認証オプションのトリム ([#6527](https://github.com/nocobase/nocobase/pull/6527)) @2013xile による
  * X-Authenticator が見つからない ([#6526](https://github.com/nocobase/nocobase/pull/6526)) @chenos による
* **[ブロック: マップ]**
  * マップブロックのキー管理の問題がリクエストの失敗を引き起こす（見えない文字のため） ([#6521](https://github.com/nocobase/nocobase/pull/6521)) @katherinehhh による
  * マップ管理でのシークレットキーフィールドがバリデーションを引き起こさない ([#6509](https://github.com/nocobase/nocobase/pull/6509)) @katherinehhh による
* **[ファイルマネージャー]** COS に保存されたファイルにアクセスできない ([#6512](https://github.com/nocobase/nocobase/pull/6512)) @chenos による
* **[アクション: レコードのエクスポート Pro]** 添付ファイルをエクスポートできない (@chenos)
* **[バックアップマネージャー]** 復元がワークフローの実行エラーを引き起こす可能性がある (@gchust)
* **[WeCom]** 通知構成を取得する際に環境変数とシークレットを解決する (@2013xile)
* **[ワークフロー: 承認]**
  * ジョブが削除されたときにプロセステーブルのエラーを修正 (@mytharcher)
  * クエリノード結果を追加するときにスローされるエラーを修正 (@mytharcher)
  * NULL のユーザーがクラッシュを引き起こすのを修正 (@mytharcher)
