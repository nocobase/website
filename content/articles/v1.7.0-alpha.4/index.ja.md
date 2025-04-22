### 🎉 新機能

* **[クライアント]**
  * 関連フィールドのタイトルフィールドとして長テキストフィールドをサポート ([#6495](https://github.com/nocobase/nocobase/pull/6495)) @katherinehhh による
  * フォントサイズ、フォントウェイト、フォントスタイルのフィールドスタイル設定をサポート ([#6489](https://github.com/nocobase/nocobase/pull/6489)) @katherinehhh による
* **[変数とシークレット]** リンクボタンURLでの環境変数のサポート ([#6494](https://github.com/nocobase/nocobase/pull/6494)) @katherinehhh による
* **[ワークフロー: アグリゲートノード]** アグリゲーション結果の精度設定をサポート ([#6491](https://github.com/nocobase/nocobase/pull/6491)) @mytharcher による

### 🚀 改善

* **[クライアント]** フィルターボタンで選択したフィールドのファジーマッチングをサポート ([#6496](https://github.com/nocobase/nocobase/pull/6496)) @katherinehhh による
* **[通知: メール]** セキュアフィールド構成説明を追加 ([#6501](https://github.com/nocobase/nocobase/pull/6501)) @sheldon66 による
* **[ワークフロー: メール配信ノード]** セキュアフィールド構成説明を追加 ([#6510](https://github.com/nocobase/nocobase/pull/6510)) @sheldon66 による
* **[カレンダー]** 日历插件添加开启或关闭快速创建事件可选设置 ([#6391](https://github.com/nocobase/nocobase/pull/6391)) @Cyx649312038 による
* **[WEBクライアント]** キャッシュをクリアするための二次確認プロンプトを追加 ([#6505](https://github.com/nocobase/nocobase/pull/6505)) @katherinehhh による
* **[メールマネージャー]** メール送信時の再認可と自動アカウント選択をサポート (@jiannx)

### 🐛 バグ修正

* **[クライアント]**
  * アクションボタンの透明度がホバー時に設定表示の問題を引き起こす ([#6529](https://github.com/nocobase/nocobase/pull/6529)) @katherinehhh による
  * 中国語ロケールでのタイムフィールド送信エラー（type time の無効な入力構文） ([#6511](https://github.com/nocobase/nocobase/pull/6511)) @katherinehhh による
  * フォーム内のサブテーブルの高さがフォームの高さに設定される ([#6518](https://github.com/nocobase/nocobase/pull/6518)) @katherinehhh による
  * 連携ルールフィールドのデフォルト非表示に値が残っている場合に動作しない ([#6503](https://github.com/nocobase/nocobase/pull/6503)) @katherinehhh による
  * 子ボタンがアイコンのみモードで表示されない ([#6504](https://github.com/nocobase/nocobase/pull/6504)) @katherinehhh による
* **[サーバー]** アップグレードコマンドがワークフローのエラーを引き起こす可能性がある ([#6524](https://github.com/nocobase/nocobase/pull/6524)) @gchust による
* **[utils]** 既知の「デスクトップレスポンシブ」バグ ([#6476](https://github.com/nocobase/nocobase/pull/6476)) @zhangzhonghe による
* **[評価者]** 小数点以下の桁数を9に戻す ([#6492](https://github.com/nocobase/nocobase/pull/6492)) @mytharcher による
* **[認証]**
  * 認証オプションのトリム ([#6527](https://github.com/nocobase/nocobase/pull/6527)) @2013xile による
  * X-Authenticator が見つからない ([#6526](https://github.com/nocobase/nocobase/pull/6526)) @chenos による
* **[ブロック: マップ]**
  * マップブロックのキー管理の問題がリクエストの失敗を引き起こす（見えない文字のため） ([#6521](https://github.com/nocobase/nocobase/pull/6521)) @katherinehhh による
  * マップ管理でのシークレットキーフィールドがバリデーションを引き起こさない ([#6509](https://github.com/nocobase/nocobase/pull/6509)) @katherinehhh による
* **[ファイルマネージャー]**
  * COS に保存されたファイルにアクセスできない ([#6512](https://github.com/nocobase/nocobase/pull/6512)) @chenos による
  * URL をエンコードする ([#6497](https://github.com/nocobase/nocobase/pull/6497)) @chenos による
* **[WEBクライアント]** ルート管理テーブルのパスが実際のパスと異なる ([#6483](https://github.com/nocobase/nocobase/pull/6483)) @zhangzhonghe による
* **[ブロック: アクションパネル]** 権限コントロールでボタンを隠した後のモバイルアクションパネルのレイアウト問題 ([#6502](https://github.com/nocobase/nocobase/pull/6502)) @katherinehhh による
* **[データソース: メイン]** MySQL ビューを作成できない ([#6477](https://github.com/nocobase/nocobase/pull/6477)) @aaaaaajie による
* **[ワークフロー]** ワークフローを削除した後の未処理タスク数の修正 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) @mytharcher による
* **[アクション: エクスポートレコードPro]** 添付ファイルをエクスポートできない (@chenos)
* **[バックアップマネージャー]**
  * バックアップテンプレートからサブアプリを作成した際にファイルが復元されていない (@gchust)
  * 復元がワークフローの実行エラーを引き起こす可能性がある (@gchust)
  * GTID セットの重複による MySQL データベース復元エラー (@gchust)
* **[WeCom]** 通知構成を取得する際に環境変数とシークレットを解決する (@2013xile)
* **[ワークフロー: 承認]**
  * ジョブが削除されたときにプロセステーブルのエラーを修正 (@mytharcher)
  * 戻り値の承認を承認済みとして処理 (@mytharcher)
  * クエリノード結果を追加するときにスローされるエラーを修正 (@mytharcher)
  * プロセステーブルにアクションボタンが表示されない問題を修正 (@mytharcher)
  * 「新規適用」ポップアップダイアログのスタイル問題 (@zhangzhonghe)
