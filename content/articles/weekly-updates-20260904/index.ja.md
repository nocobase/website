週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.6

*リリース日: 2026-09-02*

### 🚀 機能改善

* **[マイグレーション管理]** マイグレーション一覧のファイルサイズを読みやすいバイナリ単位で表示し、バイト単位の数値をそのまま表示しないように改善 by @hongboji

### 🐛 不具合修正

* **[utils]** API 経由で書き込まれたリッチテキストによって、表示時または編集時にストアド XSS が実行される脆弱性を修正。 ([#10425](https://github.com/nocobase/nocobase/pull/10425)) by @katherinehhh
* **[database]** SQL Server の文字列フィルターで、角括弧そのものやその他の `<span>LIKE</span>` ワイルドカードに一致できない問題を修正 ([#10436](https://github.com/nocobase/nocobase/pull/10436)) by @hongboji
* **[データテーブルフィールド：Markdown(Vditor)]** V2 の Markdown Vditor フィールドでテーブル操作を再び利用できるように修正。 ([#10438](https://github.com/nocobase/nocobase/pull/10438)) by @katherinehhh
* **[ファイルマネージャー]** v2 ファイルテーブルの新規作成フォームと編集フォームで、ファイルストレージの選択項目が表示されない問題を修正。 ([#10439](https://github.com/nocobase/nocobase/pull/10439)) by @katherinehhh
* **[ファイルストレージ：S3 (Pro)]** S3 Pro で 5 MB を超えるバックアップファイルのマルチパートアップロードが失敗する問題を修正。 by @mytharcher

### v2.2.5

*リリース日: 2026-08-31*

### 🐛 不具合修正

* **[ワークフロー]**
  * ワークフロー ToDo センターのモバイル向け詳細画面を改善し、フル幅のドロワーを使用するとともに、承認内容のレイアウトをモバイル表示に最適化。 ([#10428](https://github.com/nocobase/nocobase/pull/10428)) by @mytharcher
  * ワークフロータスクのステータスと ID に複合インデックスを追加し、待処理タスクを復元する際のクエリを最適化。 ([#10427](https://github.com/nocobase/nocobase/pull/10427)) by @mytharcher
  * スケジュールタスク（静的モード）が「終了日時」を過ぎた後に、余分に 1 回実行される問題を修正 ([#10411](https://github.com/nocobase/nocobase/pull/10411)) by @Tespera
* **[通知管理]** ワークフローで受信者に指定するユーザー変数に「Variable parsing failed」と表示される問題を修正し、各ワークフローノードのユーザー選択コンポーネントを共通化。 ([#10432](https://github.com/nocobase/nocobase/pull/10432)) by @mytharcher
* **[ワークフロー：承認]**
  * 承認タスクの詳細画面およびリモートフォームについて、モバイルの狭い画面幅でのレイアウトを改善。 by @mytharcher
  * 承認者変数に「Variable parsing failed」と表示される問題を修正し、ワークフロー共通のユーザー選択コンポーネントを使用するように変更。 by @mytharcher

### v2.2.4

*リリース日: 2026-08-28*

### 🐛 不具合修正

* **[AI：ナレッジベース]** Root ユーザーが AI 従業員を使用する際、ナレッジベースへのアクセス権限がないと誤って判定される問題を修正 by @hongboji
* **[ワークフロー：承認]** v1 ワークフローページで、サブフローノードから承認ワークフローを選択した場合に、トリガー変数のフォームが表示されない問題を修正。 by @mytharcher
* **[DingTalk]** v1 クライアントで、DingTalk の Stream モードの同期ソースを保存できない問題を修正。 by @chenzhizdt

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.6

*リリース日: 2026-08-31*

### 🐛 不具合修正

* **[ワークフロー]**
  * ワークフロータスクのステータスと ID に複合インデックスを追加し、待処理タスクを復元する際のクエリを最適化。 ([#10427](https://github.com/nocobase/nocobase/pull/10427)) by @mytharcher
  * スケジュールタスク（静的モード）が「終了日時」を過ぎた後に、余分に 1 回実行される問題を修正 ([#10411](https://github.com/nocobase/nocobase/pull/10411)) by @Tespera
  * ワークフロー ToDo センターのモバイル向け詳細画面を改善し、フル幅のドロワーを使用するとともに、承認内容のレイアウトをモバイル表示に最適化。 ([#10428](https://github.com/nocobase/nocobase/pull/10428)) by @mytharcher
* **[通知管理]** ワークフローで受信者に指定するユーザー変数に「Variable parsing failed」と表示される問題を修正し、各ワークフローノードのユーザー選択コンポーネントを共通化。 ([#10432](https://github.com/nocobase/nocobase/pull/10432)) by @mytharcher
* **[ワークフロー：承認]**
  * 承認者変数に「Variable parsing failed」と表示される問題を修正し、ワークフロー共通のユーザー選択コンポーネントを使用するように変更。 by @mytharcher
  * 承認タスクの詳細画面およびリモートフォームについて、モバイルの狭い画面幅でのレイアウトを改善。 by @mytharcher
* **[DingTalk]** v1 クライアントで、DingTalk の Stream モードの同期ソースを保存できない問題を修正。 by @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.3

*リリース日: 2026-09-02*

### 🚀 機能改善

* **[AI 従業員]** AI コンテキスト用に永続化されていたデータソース設定とセレクターを削除し、データソースを直接クエリする機能は引き続き利用可能。 ([#10450](https://github.com/nocobase/nocobase/pull/10450)) by @cgyrock

### v2.4.0-alpha.2

*リリース日: 2026-09-02*

### 🚀 機能改善

* **[undefined]** ルートパッケージのライセンスメタデータを Apache-2.0 に修正し、Node.js の最低バージョンを 22 に引き上げ ([#10448](https://github.com/nocobase/nocobase/pull/10448)) by @hongboji
* **[DingTalk]** DingTalk の ActionCard ボタンリンクを外部ブラウザで開くよう設定できるように改善。 by @chenzhizdt

### 🐛 不具合修正

* **[ファイルマネージャー]** AI 従業員のワークフローノードから NocoBase の永続的なファイル URL にアクセスできない問題と、内部ファイルが不必要に AI ストレージへコピーされる問題を修正。 ([#10408](https://github.com/nocobase/nocobase/pull/10408)) by @cgyrock
* **[AI 従業員]** グラフを含むビジネス分析レポートを開けない問題を修正。 ([#10440](https://github.com/nocobase/nocobase/pull/10440)) by @cgyrock

### v2.4.0-alpha.1

*リリース日: 2026-09-02*

### 🚀 機能改善

* **[マイグレーション管理]** マイグレーション一覧のファイルサイズを読みやすいバイナリ単位で表示し、バイト単位の数値をそのまま表示しないように改善 by @hongboji

### 🐛 不具合修正

* **[database]** SQL Server の文字列フィルターで、角括弧そのものやその他の `<span>LIKE</span>` ワイルドカードに一致できない問題を修正 ([#10436](https://github.com/nocobase/nocobase/pull/10436)) by @hongboji
* **[utils]** API 経由で書き込まれたリッチテキストによって、表示時または編集時にストアド XSS が実行される脆弱性を修正。 ([#10425](https://github.com/nocobase/nocobase/pull/10425)) by @katherinehhh
* **[データテーブルフィールド：Markdown(Vditor)]** V2 の Markdown Vditor フィールドでテーブル操作を再び利用できるように修正。 ([#10438](https://github.com/nocobase/nocobase/pull/10438)) by @katherinehhh
* **[ファイルマネージャー]** v2 ファイルテーブルの新規作成フォームと編集フォームで、ファイルストレージの選択項目が表示されない問題を修正。 ([#10439](https://github.com/nocobase/nocobase/pull/10439)) by @katherinehhh
* **[ファイルストレージ：S3 (Pro)]** S3 Pro で 5 MB を超えるバックアップファイルのマルチパートアップロードが失敗する問題を修正。 by @mytharcher
