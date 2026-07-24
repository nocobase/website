### 🚀 機能改善

* **[client-v2]** v2 の QR コード・バーコード読み取り機能、カメラライフサイクル管理の安全性、レスポンシブプレビュー体験を改善しました。 ([#10145](https://github.com/nocobase/nocobase/pull/10145)) by @katherinehhh
* **[client]** 旧システム設定の言語選択にミャンマー語（`my-MM`）を追加しました。 ([#10153](https://github.com/nocobase/nocobase/pull/10153)) by @hongboji
* **[ワークフロー：承認]**
  * 承認申請開始リストに利用ガイドを追加し、開始可能な承認をカード形式で選択できるようにしました。 by @mytharcher
  * 承認タイムラインのステータスアイコン、時間情報、ユーザーアバター、レスポンシブレイアウト、および複数回提出時の接続表示を改善しました。 by @mytharcher

### 🐛 不具合修正

* **[client-v2]**
  * v2 の日付フィールド範囲指定で RunJS の値が反映されない問題を修正しました。 ([#10157](https://github.com/nocobase/nocobase/pull/10157)) by @katherinehhh
  * `/v/` ブランチで旧ページや存在しないページを表示した際のエラーメッセージを改善しました。 ([#10159](https://github.com/nocobase/nocobase/pull/10159)) by @zhangzhonghe
  * v2 テーブル操作が連動ルールで無効化された後、連動更新やページ更新時に編集操作のタイトルが古い内容へ戻る問題を修正しました。 ([#10140](https://github.com/nocobase/nocobase/pull/10140)) by @katherinehhh
  * ポップアップ内のサブテーブルフォームで、リレーションフィールドが親側データ範囲を使用すると選択値がクリアされ、必須チェックが誤って実行される問題を修正しました。 ([#10146](https://github.com/nocobase/nocobase/pull/10146)) by @katherinehhh
  * client v2 のデータ選択ポップアップで新規レコード追加後、一覧が更新されない問題を修正しました。 ([#10142](https://github.com/nocobase/nocobase/pull/10142)) by @katherinehhh
* **[flow-engine]** v2 ブロック設定のドロップダウンメニューで、現在のトリガーボタンをクリックすると誤って閉じてしまう問題を修正しました。 ([#10143](https://github.com/nocobase/nocobase/pull/10143)) by @katherinehhh
* **[ユーザー認証]**
  * Redis キャッシュを有効にした際、アプリ終了処理中にまれに発生するデータベース接続エラーを修正しました。 ([#10151](https://github.com/nocobase/nocobase/pull/10151)) by @mytharcher
  * カスタムドメインを利用するサブアプリで、SSO ログイン後のリダイレクト先が誤る問題を修正しました。 ([#10170](https://github.com/nocobase/nocobase/pull/10170)) by @2013xile
* **[AIワーカー]** Nathan が形式不正または変更のないコードパッチを、誤ってアプリケーション成功として報告する問題を修正しました。 ([#10174](https://github.com/nocobase/nocobase/pull/10174)) by @2013xile
* **[データテーブルフィールド：自動採番]** v2 自動採番ルールで入力値を保存できない問題、および固定テキスト設定後も必須エラーが表示される問題を修正しました。 ([#10156](https://github.com/nocobase/nocobase/pull/10156)) by @katherinehhh
* **[バックアップ管理]** v2 バックアップ管理でリストアリクエストが失敗した際、エラー表示が行われない問題を修正しました。 ([#10158](https://github.com/nocobase/nocobase/pull/10158)) by @katherinehhh
* **[ブロック：ダッシュボード]** カレンダーおよびダッシュボードブロックでコピーしたポップアップテンプレートを利用した場合、テンプレートが適用されない、または誤って削除される問題を修正しました。 ([#9856](https://github.com/nocobase/nocobase/pull/9856)) by @jiannx
* **[アプリケーション SSO]** サブアプリのサーバーが公開 Issuer にアクセスできない場合、アプリケーション SSO が失敗する問題を修正しました。 by @2013xile
* **[認証：OIDC]** サブアプリのカスタムドメイン経由で OIDC ログインした後、リダイレクト先が誤る問題を修正しました。 by @2013xile
* **[ワークフロー：承認]** UI Editor が無効の場合、承認画面の設定入口を非表示にしました。 by @zhangzhonghe
