### 🎉 新機能

* **[ワークフロー: HTTP リクエストノード]** `multipart/form-data`形式のリクエストをサポート（[#7087](https://github.com/nocobase/nocobase/pull/7087)）@shushu992

### 🚀 機能改善

* **[ワークフロー]**
  * モバイル表示スタイルを最適化（[#7040](https://github.com/nocobase/nocobase/pull/7040)）@mytharcher
  * `getCollectionFieldOptions` API を調整（[#7095](https://github.com/nocobase/nocobase/pull/7095)）@mytharcher
* **[公開フォーム]** 公開フォーム内の日付コンポーネントのパフォーマンスを最適化（[#7117](https://github.com/nocobase/nocobase/pull/7117)）@zhangzhonghe
* **[ワークフロー：事前アクションイベント]** 変数 API を調整 @mytharcher
* **[ワークフロー：承認]** 変数 API を調整 @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 時間付き日付フィールドの範囲制限が誤って適用される問題（[#7107](https://github.com/nocobase/nocobase/pull/7107)）@katherinehhh
  * URL クエリパラメータ変数が空の場合、データ範囲条件が削除されない問題（[#7104](https://github.com/nocobase/nocobase/pull/7104)）@zhangzhonghe
* **[ワークフロー]**
  * タスク内のレコード読み込み時のパラメータを修正（[#7123](https://github.com/nocobase/nocobase/pull/7123)）@mytharcher
  * 大きな整数値のチェック処理が誤って実行される問題を修正（[#7099](https://github.com/nocobase/nocobase/pull/7099)）@mytharcher
  * ワークフローの非現行バージョンによる統計情報の連鎖削除を修正（[#7103](https://github.com/nocobase/nocobase/pull/7103)）@mytharcher
* **[モバイル]** モバイルポップアップの z-index 設定不具合を修正（[#7110](https://github.com/nocobase/nocobase/pull/7110)）@zhangzhonghe
* **[WEB クライアント]** ロールメニュー権限設定後にページ下のブロックが表示されない問題を修正（[#7112](https://github.com/nocobase/nocobase/pull/7112)）@aaaaaajie
* **[カレンダー]** カレンダーブロックのクイック作成フォームにおける日付フィールドの問題（[#7106](https://github.com/nocobase/nocobase/pull/7106)）@katherinehhh
* **[アクション：レコードインポート]** ユーザー名とパスワードの一括インポート後のログイン失敗問題を解消（[#7076](https://github.com/nocobase/nocobase/pull/7076)）@aaaaaajie
* **[ワークフロー：承認]**
  * 承認関連コレクションが削除された際のエラーを修正 @mytharcher
  * モバイル表示スタイルを修正 @mytharcher
  * トリガー内の申請者変数名を修正 @mytharcher
  * 承認の詳細は参加者のみ閲覧可能に設定 @mytharcher
  * エラーを発生させる旧バージョンの変数 API を修正 @mytharcher
