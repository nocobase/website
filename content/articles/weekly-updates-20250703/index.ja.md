週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.18](https://www.nocobase.com/ja/blog/v1.7.18)

*リリース日：2025-06-26*

#### 🚀 機能改善

* **[ワークフロー]** モバイル表示スタイルを最適化（[#7040](https://github.com/nocobase/nocobase/pull/7040)）@mytharcher
* **[公開フォーム]** 公開フォーム内の日付コンポーネントのパフォーマンスを最適化（[#7117](https://github.com/nocobase/nocobase/pull/7117)）@zhangzhonghe

#### 🐛 不具合修正

* **[ワークフロー]** タスク内のレコード読み込み時のパラメータを修正（[#7123](https://github.com/nocobase/nocobase/pull/7123)）@mytharcher
* **[WEB クライアント]** ロールメニュー権限設定後にページ下のブロックが表示されない問題を修正（[#7112](https://github.com/nocobase/nocobase/pull/7112)）@aaaaaajie
* **[ワークフロー：承認]**
  * トリガー内の申請者変数名を修正 @mytharcher
  * モバイル表示スタイルを修正 @mytharcher
  * 承認関連コレクションが削除された際のエラーを修正 @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.11](https://www.nocobase.com/ja/blog/v1.8.0-beta.11)

*リリース日：2025-06-27*

#### 🎉 新機能

* **[ワークフロー: HTTP リクエストノード]** `multipart/form-data`形式のリクエストをサポート（[#7087](https://github.com/nocobase/nocobase/pull/7087)）@shushu992

#### 🚀 機能改善

* **[ワークフロー]**
  * モバイル表示スタイルを最適化（[#7040](https://github.com/nocobase/nocobase/pull/7040)）@mytharcher
  * `getCollectionFieldOptions` API を調整（[#7095](https://github.com/nocobase/nocobase/pull/7095)）@mytharcher
* **[公開フォーム]** 公開フォーム内の日付コンポーネントのパフォーマンスを最適化（[#7117](https://github.com/nocobase/nocobase/pull/7117)）@zhangzhonghe
* **[ワークフロー：事前アクションイベント]** 変数 API を調整 @mytharcher
* **[ワークフロー：承認]** 変数 API を調整 @mytharcher

#### 🐛 不具合修正

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.12](https://www.nocobase.com/ja/blog/v1.8.0-alpha.12)

*リリース日：2025-07-02*

#### 🚀 機能改善

* **[データベース]** 環境変数からプールオプションを追加できるようにサポート（[#7133](https://github.com/nocobase/nocobase/pull/7133)）@mytharcher
* **[ワークフロー]**
  * JSON フィールドを除くことで実行履歴一覧のロードパフォーマンスを改善（[#7138](https://github.com/nocobase/nocobase/pull/7138)）@mytharcher
  * ノードテスト用のログ API を追加（[#7129](https://github.com/nocobase/nocobase/pull/7129)）@mytharcher
* **[ワークフロー：承認]** タイムラインの時間表示を絶対時間に変更 @mytharcher

#### 🐛 不具合修正

* **[ユーティリティ]** DateOnly やタイムゾーンなしの Datetime に対し、Exact day 変数を使用したフィルタリング不具合（[#7113](https://github.com/nocobase/nocobase/pull/7113)）@katherinehhh
* **[cli]**
  * プラグインダウンロード時の未定義エラー（[#7143](https://github.com/nocobase/nocobase/pull/7143)）@jiannx
  * プラグインインストール時のライセンスコピー処理を調整（[#7135](https://github.com/nocobase/nocobase/pull/7135)）@jiannx
* **[クライアント]**
  * 'x-acl-action' に基づく設定のフォールトトレランス（[#7128](https://github.com/nocobase/nocobase/pull/7128)）@mytharcher
  * 接続ビュー内のフィールド displayName 設定が機能しない問題（[#7130](https://github.com/nocobase/nocobase/pull/7130)）@aaaaaajie
  * ワークフロー手動ノードの UI 設定：連動規則で「現在のフォーム変数」が選択できない問題（[#7125](https://github.com/nocobase/nocobase/pull/7125)）@zhangzhonghe
* **[ワークフロー]** 循環インポートによるエラーを修正（[#7134](https://github.com/nocobase/nocobase/pull/7134)）@mytharcher
* **[plugin-commercial]**
  * 開発モード時のライセンスポップアップ非表示問題 @jiannx
  * ライセンス検証ポップアップの一時的閉鎖機能追加 @jiannx
  * ライセンス検証ロジックを調整し、パンドメイン名マッチングをサポート @jiannx
* **[パスワードポリシー]** ユーザーアカウントの永続ロックをサポート @2013xile
* **[ワークフロー：サブフロー]** クラスターモード時の不具合を修正 @mytharcher
* **[ワークフロー：承認]**
  * フォームレイアウト設定を追加 @mytharcher
  * フィルターからフィルタ不能なフィールドを削除 @mytharcher

### [v1.8.0-alpha.11](https://www.nocobase.com/ja/blog/v1.8.0-alpha.11)

*リリース日：2025-06-27*

#### 🎉 新機能

* **[ライセンス設定]** ライセンス設定を追加し、プラグインダウンロード前にライセンス検証を行う（[#7026](https://github.com/nocobase/nocobase/pull/7026)）@jiannx

#### 🚀 機能改善

* **[マルチアプリマネージャー]** マルチアプリ管理にフィルター機能を追加（[#7124](https://github.com/nocobase/nocobase/pull/7124)）@katherinehhh
* **[ワークフロー]** モバイル表示スタイルを最適化（[#7040](https://github.com/nocobase/nocobase/pull/7040)）@mytharcher
* **[公開フォーム]** 公開フォーム内の日付コンポーネントのパフォーマンスを最適化（[#7117](https://github.com/nocobase/nocobase/pull/7117)）@zhangzhonghe
* **[plugin-commercial]** ログ送信を暗号化し、ライセンス情報表示を改善 @jiannx

#### 🐛 不具合修正

* **[クライアント]** 関連フィールドの初期値がサブテーブルの既存データを上書きする問題（[#7120](https://github.com/nocobase/nocobase/pull/7120)）@katherinehhh
* **[ワークフロー]** タスク内のレコード読み込み時のパラメータを修正（[#7123](https://github.com/nocobase/nocobase/pull/7123)）@mytharcher
* **[WEB クライアント]** ロールメニュー権限設定後にページ下のブロックが表示されない問題を修正（[#7112](https://github.com/nocobase/nocobase/pull/7112)）@aaaaaajie
* **[ワークフロー：承認]** トリガー内の申請者変数名を修正 @mytharcher
