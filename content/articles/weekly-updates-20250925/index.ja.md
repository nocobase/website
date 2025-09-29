週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.26](https://www.nocobase.com/ja/blog/v1.8.26)

*リリース日：2025-09-20*

#### 🚀 機能改善

* **[クライアント]** ツールチップとグループ項目のタイトルにローカライズ機能を追加サポート（[#7485](https://github.com/nocobase/nocobase/pull/7485)）@katherinehhh
* **[カレンダー]** カレンダーヘッダーのロケールマッピング表示をサポート（[#7508](https://github.com/nocobase/nocobase/pull/7508)）@katherinehhh

#### 🐛 不具合修正

* **[クライアント]** メニューアイコン設定のポップオーバーが隠れる問題を修正（[#7515](https://github.com/nocobase/nocobase/pull/7515)）@zhangzhonghe
* **[通知：アプリ内メッセージ]**
  * 通知リンクの解析が不正確になる問題を修正（[#7509](https://github.com/nocobase/nocobase/pull/7509)）@mytharcher
  * 通知ポップアップを開いた際に最新のメッセージが表示されない問題を修正（[#7514](https://github.com/nocobase/nocobase/pull/7514)）@mytharcher
* **[ワークフロー]** ワークフローのバックグラウンドタスクキューにおける不正なサブスクリプションロジックにより実行メッセージが誤って処理される問題を修正（[#7507](https://github.com/nocobase/nocobase/pull/7507)）@mytharcher
* **[ワークフロー：承認]**
  * 外部データソースからデータを削除する際にエラーが発生する問題を修正 @mytharcher
  * 承認フォーム内の数式フィールドが自動的に更新されない問題を修正 @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.8](https://www.nocobase.com/ja/blog/v1.9.0-beta.8)

*リリース日：2025-09-20*

#### 🚀 機能改善

* **[auth]** ユーザー名に`.`を使用することをサポート（[#7504](https://github.com/nocobase/nocobase/pull/7504)）@2013xile
* **[client]** ツールチップとグループ項目のタイトルにローカライズをサポート（[#7485](https://github.com/nocobase/nocobase/pull/7485)）@katherinehhh
* **[Workflow: Manual node]** 無効化されたワークフロー内の保留中の手動タスクを表示および再開することをサポート（[#7493](https://github.com/nocobase/nocobase/pull/7493)）@mytharcher
* **[Calendar]** カレンダーヘッダーのロケールマッピング表示をサポート（[#7508](https://github.com/nocobase/nocobase/pull/7508)）@katherinehhh
* **[Theme editor]** サイドメニューの色のカスタマイズをサポート（[#7483](https://github.com/nocobase/nocobase/pull/7483)）@duannyuuu
* **[Redis queue adapter]** Redis メッセージキューアダプターに標準的なシステムロガーを使用 @mytharcher

#### 🐛 不具合修正

* **[client]**
  * ボタンアイコン設定のポップアップが覆われる / 重なる問題を修正（[#7506](https://github.com/nocobase/nocobase/pull/7506)）@zhangzhonghe
  * メニューアイコン設定のポップオーバーが隠れる問題を修正（[#7515](https://github.com/nocobase/nocobase/pull/7515)）@zhangzhonghe
  * ポップオーバーコンポーネントが重なったり覆われたりする問題を修正（[#7491](https://github.com/nocobase/nocobase/pull/7491)）@zhangzhonghe
* **[Notification: In-app message]**
  * 通知リンクの解析が不正確になる問題を修正（[#7509](https://github.com/nocobase/nocobase/pull/7509)）@mytharcher
  * 通知ポップアップを開いた際に最新のメッセージが表示されない問題を修正（[#7514](https://github.com/nocobase/nocobase/pull/7514)）@mytharcher
* **[Workflow]**
  * ワークフローログのキャッシュに関連する潜在的なエラーを修正（[#7490](https://github.com/nocobase/nocobase/pull/7490)）@mytharcher
  * ワークフローのバックグラウンドタスクキューにおける不正なサブスクリプションロジックにより実行メッセージが誤って処理される問題を修正（[#7507](https://github.com/nocobase/nocobase/pull/7507)）@mytharcher
* **[Data source: REST API]** REST API の URL 検証ルールを修正 @katherinehhh
* **[HTTP request encryption]** リクエストパラメーターがネイティブの URLSearchParams 型をサポートしない問題を修正 @mytharcher
* **[Template print]** chinaRegions フィールドをサポート @jiannx
* **[Workflow: Approval]**
  * 承認フォーム内の数式フィールドが自動的に更新されない問題を修正 @mytharcher
  * 外部データソースからデータを削除する際にエラーが発生する問題を修正 @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.16](https://www.nocobase.com/ja/blog/v1.9.0-alpha.16)

*リリース日：2025-09-24*

#### 🚀 機能改善

* **[クライアント]**
  * 画像プレビュー時に回転機能をサポート（[#7523](https://github.com/nocobase/nocobase/pull/7523)）@mytharcher
  * ツールチップとグループ項目のタイトルにローカライズをサポート（[#7485](https://github.com/nocobase/nocobase/pull/7485)）@katherinehhh
* **[RabbitMQ queue adapter]** RabbitMQ の接続処理とメッセージ処理ロジックを改善 @sdp-ncd

#### 🐛 不具合修正

* **[クライアント]**
  * サイドバーのサブメニューが正しくハイライト表示されない問題を修正（[#7520](https://github.com/nocobase/nocobase/pull/7520)）@duannyuuu
  * メニューアイコン設定のポップオーバーが隠れる問題を修正（[#7515](https://github.com/nocobase/nocobase/pull/7515)）@zhangzhonghe
* **[通知：アプリ内メッセージ]** 通知ポップアップを開いた際に最新のメッセージが表示されない問題を修正（[#7514](https://github.com/nocobase/nocobase/pull/7514)）@mytharcher
* **[ワークフロー]** ワークフロー設定で関連フィールドのコンテキストを読み込む際に、ワークフローリストの条件が不正確になる問題を修正（[#7516](https://github.com/nocobase/nocobase/pull/7516)）@mytharcher
* **[ワークフロー：ループノード]** ループノードの条件が満たされていない場合でも、プロセスが次の項目に不正に進んでしまう問題を修正（[#7521](https://github.com/nocobase/nocobase/pull/7521)）@mytharcher
* **[ワークフロー：承認]**
  * 外部データソースからデータを削除する際にエラーが発生する問題を修正 @mytharcher
  * 承認フォーム内の数式フィールドが自動的に更新されない問題を修正 @mytharcher
