週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.2](https://www.nocobase.com/en/blog/v1.6.2)

*リリース日：2025-03-12*

#### 🐛 バグ修正

- **[client]** フォームの日付フィールドの日付範囲選択で、最大日付が除外される ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh
- **[通知：アプリ内メッセージ]** 誤った受信者設定により全ユーザーのクエリを防ぐ ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66
- **[ワークフロー：手動ノード]**
  - テーブルプレフィックスとスキーマロジックが欠落しているマイグレーションスクリプトを修正 ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher
  - マイグレーションスクリプトのバージョン制限を `<1.7.0` に変更 ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher

### [v1.6.3](https://www.nocobase.com/en/blog/v1.6.3)

*リリース日：2025-03-14*

#### 🎉 新機能

- **[WeCom]** サインインボタンのカスタムツールチップ設定をサポート by @2013xile

#### 🐛 バグ修正

- **[client]**

  - 画像URL内の特殊文字が原因で画像が表示されない問題を修正 ([#6459](https://github.com/nocobase/nocobase/pull/6459)) by @mytharcher
  - サブテーブルのページサイズ変更後、データ追加時にページ番号が正しく表示されない問題を修正 ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh
  - ロゴのスタイルが以前と一致しない問題を修正 ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe
- **[Workflow: Manual node]** マイグレーションスクリプトで発生するエラーを修正 ([#6445](https://github.com/nocobase/nocobase/pull/6445)) by @mytharcher
- **[Data visualization]** カスタムフィルタフィールド追加時に、削除済みフィールドが表示される問題を修正 ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile
- **[File manager]** ファイルマネージャーのいくつかの問題を修正 ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher
- **[Action: Custom request]** カスタムリクエストのサーバー側権限検証エラーを修正 ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh
- **[Data source manager]** ロール管理でデータソースを切り替えた際、対応するコレクションが読み込まれない問題を修正 ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh
- **[Action: Batch edit]** バッチ編集送信時にワークフローが起動しない問題を修正 ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher
- **[Workflow: Custom action event]** E2Eテストケースから「only」を除去 by @mytharcher
- **[Workflow: Approval]**

  - 承認フォームにおいて関連データが表示されない問題を修正 by @mytharcher
  - 外部データソースの承認時にエラーが発生する問題を修正 by @mytharcher

### [v1.6.4](https://www.nocobase.com/en/blog/v1.6.4)

*リリース日：2025-03-15*

#### 🎉 新機能

- **[client]** カスケード選択コンポーネントにデータスコープ設定を追加 ([#6386](https://github.com/nocobase/nocobase/pull/6386)) by @Cyx649312038

#### 🚀 改善

- **[utils]** `md5` をユーティリティに移動 ([#6468](https://github.com/nocobase/nocobase/pull/6468)) by @mytharcher

#### 🐛 バグ修正

- **[client]** ツリーブロックでチェックを外すと、データブロック内のデータがクリアされない ([#6460](https://github.com/nocobase/nocobase/pull/6460)) by @zhangzhonghe
- **[File manager]** S3に保存されているファイルを削除できない ([#6467](https://github.com/nocobase/nocobase/pull/6467)) by @chenos
- **[Workflow]** データピッカーからワークフロー設定のバインドボタンを削除 ([#6455](https://github.com/nocobase/nocobase/pull/6455)) by @mytharcher
- **[File storage: S3(Pro)]** S3(Pro)の署名付きURLにアクセスできない問題を解決 by @chenos
- **[Workflow: Approval]** 承認プロセスのテーブルに申請者がいない場合にページがクラッシュするのを防止 by @mytharcher

### [v1.6.5](https://www.nocobase.com/en/blog/v1.6.5)

*リリース日：2025-03-17*

#### 🚀 改善

- **[ファイルマネージャー]** ファイル URL 生成ロジックと API を簡素化 ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher
- **[ファイルストレージ：S3(Pro)]** ファイル URL の生成方法をシンプルに変更 by @mytharcher
- **[バックアップマネージャー]** 同一バージョンのプレリリース版とリリース版間でのバックアップ復元を可能にする by @gchust

#### 🐛 バグ修正

- **[クライアント]**

  - リッチテキストフィールドが送信時にデータをクリアしない ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh
  - ページ右上のアイコンの色がテーマに応じて変更されない ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe
  - フィルターフォームのリセットボタンを押しても、グリッドカードブロックのフィルター条件がクリアされない ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe
- **[ワークフロー：手動ノード]**

  - マイグレーションスクリプトを修正 ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher
  - マイグレーション名を変更して、再実行を保証 ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher
  - フィルター内のワークフロータイトルフィールドを修正 ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher
  - id カラムが存在しない場合のマイグレーションエラーを修正 ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos
  - フィールドからコレクションが同期されるのを回避 ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher
- **[ワークフロー：集約ノード]** 集約結果が null の場合の丸め処理エラーを修正 ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher
- **[ワークフロー]** 削除されたワークフローのタスクをカウントしない ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher
- **[バックアップマネージャー]** デフォルトのバックアップ設定が存在しない場合にサーバーが起動しない問題を修正 by @gchust
- **[ワークフロー：承認]**

  - プロセスフォーム中のファイル関連フィールドのエラーを修正 by @mytharcher
  - フックに基づくタスク数のカウントを修正 by @mytharcher

### [v1.6.6](https://www.nocobase.com/en/blog/v1.6.6)

*リリース日：2025-03-18*

#### 🎉 新機能

- **[client]** 関連フィールドのタイトルフィールドとして長文テキストフィールドをサポート ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh
- **[Workflow: Aggregate node]** 集計結果の精度オプションを設定可能に ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

#### 🚀 改善

- **[File storage: S3(Pro)]** 「アクセス URL 基礎」を「基礎 URL」に変更 by @zhangzhonghe

#### 🐛 バグ修正

- **[evaluators]** 小数点以下の桁数を9桁に戻す ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher
- **[File manager]** URLをエンコード ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos
- **[Data source: Main]** MySQLビューを作成できない ([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie
- **[Workflow]** ワークフロー削除後の旧タスク件数の誤集計を修正 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher
- **[Embed NocoBase]** ページが空白に表示される by @zhangzhonghe
- **[Backup manager]**
  - バックアップテンプレートからサブアプリ作成時にアップロードファイルが正しく復元されなかった by @gchust
  - GTIDセットの重複によりMySQLデータベースの復元が失敗した by @gchust
- **[Workflow: Approval]**
  - 差し戻された承認をToDoに変更 by @mytharcher
  - 承認プロセス表で発起者の確認ボタンが表示されない問題を修正 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.2](https://www.nocobase.com/en/blog/v1.7.0-beta.2)

*リリース日：2025-03-13*

#### 🎉 新機能

- **[client]**

  - テーブルブロックは、インデックス列の非表示設定をサポート（デフォルトは表示） ([#6416](https://github.com/nocobase/nocobase/pull/6416)) by @katherinehhh
  - 連動ルールにおいて、選択可能フィールドオプションの設定をサポート ([#6338](https://github.com/nocobase/nocobase/pull/6338)) by @katherinehhh
  - 連動ルールでの日時フィールドに対し、日付範囲（最小／最大）の設定をサポート ([#6356](https://github.com/nocobase/nocobase/pull/6356)) by @katherinehhh
- **[Block: Action panel]** アクションパネル内で、アクションタイトルの改行をサポート ([#6433](https://github.com/nocobase/nocobase/pull/6433)) by @katherinehhh

#### 🐛 バグ修正

- **[client]**

  - サブテーブルのページサイズ変更後、データ追加時にページ番号が誤って表示される問題を修正 ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh
  - ロゴのスタイルが従来と一致しない問題を修正 ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe
  - サブテーブルのレコード削除時に、マルチセレクトフィールドの値が変化し、オプションが失われる問題を修正 ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh
  - 日付フィールドの範囲選択において、最大日付が含まれない問題を修正 ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh
  - '$anyOf' オペレーター使用時に、連動ルールが無効になる問題を修正 ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe
  - リンクボタンで開かれるポップアップウィンドウ内のデータが更新されない問題を修正 ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe
- **[Action: Batch edit]** 一括編集送信時に、ワークフローが起動しない問題を修正 ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher
- **[Data visualization]** カスタムフィルターフィールド追加時に、削除されたフィールドが表示される問題を修正 ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile
- **[Data source manager]** ロール管理において、データソース切替時に該当するコレクションが読み込まれない問題を修正 ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh
- **[Action: Custom request]** カスタムリクエストのサーバー側権限検証に誤りがある問題を修正 ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh
- **[File manager]** ファイルマネージャーのいくつかの問題を修正 ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher
- **[Notification: In-app message]**

  - 誤った受信者設定により全ユーザーが検索される問題を防止 ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66
  - アプリ内メッセージ一覧の背景色とメッセージカードを区別し、視覚的な階層と可読性を向上させるよう調整 ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66
- **[Workflow: Manual node]**

  - マイグレーションのバージョン制限を `<1.7.0` に変更 ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher
  - テーブルのプレフィックス及びスキーマロジックが欠落していたマイグレーションを修正 ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher

### [v1.7.0-beta.3](https://www.nocobase.com/en/blog/v1.7.0-beta.3)

*リリース日：2025-03-14*

#### 🎉 新機能

- **[WeCom]** サインインボタンにカスタムツールチップを設定可能 by @2013xile

#### 🚀 改善

- **[データ可視化]** 非推奨の `x-designer` を `x-settings` に置き換え ([#6442](https://github.com/nocobase/nocobase/pull/6442)) by @2013xile

#### 🐛 バグ修正

- **[client]** 画像URL内の特殊文字が原因で表示されない問題を修正 ([#6459](https://github.com/nocobase/nocobase/pull/6459)) by @mytharcher
- **[Workflow: Manual node]** マイグレーション時に発生するエラーを修正 ([#6445](https://github.com/nocobase/nocobase/pull/6445)) by @mytharcher
- **[Workflow: Custom action event]** E2Eテストケースから `only` を削除 by @mytharcher
- **[Workflow: Approval]**

  - 外部データソースでの承認時に発生するエラーを修正 by @mytharcher
  - 承認フォームで関連データが表示されない問題を修正 by @mytharcher

### [v1.7.0-beta.4](https://www.nocobase.com/en/blog/v1.7.0-beta.4)

*リリース日：2025-03-15*

#### 🎉 新機能

- **[client]** カスケード選択コンポーネントにデータ範囲設定を追加 ([#6386](https://github.com/nocobase/nocobase/pull/6386)) by @Cyx649312038

#### 🚀 改善

- **[utils]** `md5` をユーティリティに移動 ([#6468](https://github.com/nocobase/nocobase/pull/6468)) by @mytharcher

#### 🐛 バグ修正

- **[client]** ツリーブロック内で、チェックを外すとデータブロック内のデータがクリアされない ([#6460](https://github.com/nocobase/nocobase/pull/6460)) by @zhangzhonghe
- **[ファイルマネージャー]** S3に保存されているファイルを削除できない ([#6467](https://github.com/nocobase/nocobase/pull/6467)) by @chenos
- **[ワークフロー]** データピッカーからワークフロー設定ボタンを削除 ([#6455](https://github.com/nocobase/nocobase/pull/6455)) by @mytharcher
- **[ファイルストレージ：S3(Pro)]** アクセスできないS3 Proの署名付きURLの問題を解消 by @chenos
- **[ワークフロー：承認]** 承認プロセス表に申請者がいない場合のページクラッシュを回避 by @mytharcher

### [v1.7.0-beta.5](https://www.nocobase.com/en/blog/v1.7.0-beta.5)

*リリース日：2025-03-18*

#### 🎉 新機能

- **[client]** インラインテーブル操作でアイコンのみモードをサポートし、ホバー時に操作名を表示 ([#6451](https://github.com/nocobase/nocobase/pull/6451)) by @katherinehhh

#### 🚀 改善

- **[File manager]** ファイル URL 生成ロジックと API を簡素化 ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher
- **[File storage: S3(Pro)]**

  - 「Access URL Base」を「Base URL」に変更 by @zhangzhonghe
  - ファイル URL 生成方法をシンプルな方式に変更 by @mytharcher
- **[Backup manager]** 同一バージョンのプレリリース版とリリース版間でバックアップの復元を可能にする by @gchust

#### 🐛 バグ修正

- **[client]**

  - ページ右上のアイコンの色がテーマに合わせて変更されない問題を修正 ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe
  - リッチテキストフィールドで送信時にデータがクリアされない問題を修正 ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh
  - フィルターフォームのリセットボタンをクリックしてもグリッドカードブロックのフィルター条件がクリアされない問題を修正 ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe
- **[Workflow: Manual node]**

  - マイグレーションの問題を修正 ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher
  - 再実行が確実になるようにマイグレーション名を変更 ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher
  - フィルター内のワークフロータイトルフィールドの問題を修正 ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher
  - フィールドからのコレクション同期を回避 ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher
  - IDカラムが存在しない場合のマイグレーションエラーを修正 ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos
- **[Workflow]** ワークフロー削除時にタスクをカウントしないように修正 ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher
- **[Workflow: Aggregate node]** null 結果に対する丸め処理を修正 ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher
- **[Embed NocoBase]** NocoBase 埋め込み時にページが空白で表示される問題を修正 by @zhangzhonghe
- **[Backup manager]** デフォルトバックアップ設定が欠落している場合にサーバーが起動しない問題を修正 by @gchust
- **[Workflow: Approval]**

  - プロセスフォーム内のファイル関連フィールドのエラーを修正 by @mytharcher
  - フックに基づくタスク数のカウントを修正 by @mytharcher

### [v1.7.0-beta.6](https://www.nocobase.com/en/blog/v1.7.0-beta.6)

*リリース日：2025-03-19*

#### 🎉 新機能

- **[client]** 関連フィールドのタイトルとして長文テキストフィールドをサポート ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh
- **[ワークフロー：集計ノード]** 集計結果の精度設定をサポート ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

#### 🐛 バグ修正

- **[evaluators]** 小数点以下の桁数を9桁に戻す ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher
- **[ワークフロー]** ワークフロー削除後のレガシータスク数の集計誤りを修正 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher
- **[データソース：メイン]** MySQLビューが作成できない問題を修正 ([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie
- **[ファイルマネージャー]** URLのエンコード ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos
- **[バックアップマネージャー]**
  - GTIDセットの重複によるMySQLデータベースリストアの失敗を修正 by @gchust
  - バックアップテンプレートからサブアプリ作成時に、アップロードファイルが正しくリストアされない問題を修正 by @gchust
- **[ワークフロー：承認]**
  - 承認プロセステーブルにおいて発起人確認ボタンが表示されない問題を修正 by @mytharcher
  - 差し戻された承認申請をToDoとして扱うよう変更 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.2](https://www.nocobase.com/ja/blog/v1.7.0-alpha.2)

*リリース日：2025-03-15*

#### 🎉 新機能

- **[client]**

  - カスケード選択コンポーネントにデータスコープ設定を追加 ([#6386](https://github.com/nocobase/nocobase/pull/6386)) by @Cyx649312038
  - テーブルブロックでインデックス列の非表示をサポート（デフォルトは表示） ([#6416](https://github.com/nocobase/nocobase/pull/6416)) by @katherinehhh
  - 連動ルールで選択可能なフィールドオプションの設定をサポート ([#6338](https://github.com/nocobase/nocobase/pull/6338)) by @katherinehhh
  - 連動ルールで時間フィールドの日付範囲（min/max）の設定をサポート ([#6356](https://github.com/nocobase/nocobase/pull/6356)) by @katherinehhh
- **[acl]** ユーザーロールの結合をサポート ([#6301](https://github.com/nocobase/nocobase/pull/6301)) by @aaaaaajie
- **[Block: Action panel]** アクションパネルのアクションタイトルで改行をサポート ([#6433](https://github.com/nocobase/nocobase/pull/6433)) by @katherinehhh
- **[plugin-demo-platform]** "/new" ルートの skipAuthCheck を true に設定 by @sheldon66
- **[WeCom]** サインインボタンにカスタムツールチップを設定可能にする by @2013xile

#### 🚀 改善

- **[utils]**

  - `md5` をユーティリティに移動 ([#6468](https://github.com/nocobase/nocobase/pull/6468)) by @mytharcher
  - デスクトップページのモバイル対応を実装 ([#6393](https://github.com/nocobase/nocobase/pull/6393)) by @zhangzhonghe
- **[client]** router.add に skipAuthCheck を追加し、公共ページアクセス時のログインリダイレクトを防止 ([#6453](https://github.com/nocobase/nocobase/pull/6453)) by @sheldon66
- **[Data visualization]** 非推奨の `x-designer` を `x-settings` に置換 ([#6442](https://github.com/nocobase/nocobase/pull/6442)) by @2013xile

#### 🐛 バグ修正

- **[client]**

  - ツリーブロックでチェックを外した際に、データブロックのデータがクリアされない問題を修正 ([#6460](https://github.com/nocobase/nocobase/pull/6460)) by @zhangzhonghe
  - 画像URL内の特殊文字により画像が表示されない問題を修正 ([#6459](https://github.com/nocobase/nocobase/pull/6459)) by @mytharcher
  - サブテーブルのページサイズ変更後にデータ追加時のページ番号が誤って表示される問題を修正 ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh
  - モバイルブラウザでページ内容が完全に表示されない問題を修正 ([#6446](https://github.com/nocobase/nocobase/pull/6446)) by @zhangzhonghe
  - ロゴのスタイルが以前と一致していない問題を修正 ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe
  - 日付フィールドの範囲選択で最大日付が除外される問題を修正 ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh
  - $anyOf 演算子使用時に連動ルールが無効になる問題を修正 ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe
  - サブテーブルレコード削除時にマルチセレクトフィールドの値が変化し、オプションが失われる問題を修正 ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh
  - リンクボタンで開かれたポップアップウィンドウでデータが更新されない問題を修正 ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe
- **[acl]** ロールユニオン時に関係フィールドが表示されない問題を修正 ([#6456](https://github.com/nocobase/nocobase/pull/6456)) by @aaaaaajie
- **[File manager]**

  - S3に保存されたファイルを削除できない問題を修正 ([#6467](https://github.com/nocobase/nocobase/pull/6467)) by @chenos
  - ファイルマネージャのいくつかの問題を修正 ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher
- **[Workflow]** データピッカーからワークフロー設定ボタンのバインドを削除 ([#6455](https://github.com/nocobase/nocobase/pull/6455)) by @mytharcher
- **[Workflow: Manual node]**

  - マイグレーション実行時のエラーを修正 ([#6445](https://github.com/nocobase/nocobase/pull/6445)) by @mytharcher
  - マイグレーションのバージョン制限を `<1.7.0` に変更 ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher
  - テーブル接頭辞およびスキーマロジックが欠落したマイグレーションを修正 ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher
- **[Access control]**

  - ロール切替が反映されない問題を修正 ([#6454](https://github.com/nocobase/nocobase/pull/6454)) by @aaaaaajie
  - 作成者フィールドが存在しないテーブルで、自分のデータ範囲を設定するとエラーが発生する問題を修正 ([#6428](https://github.com/nocobase/nocobase/pull/6428)) by @aaaaaajie
- **[WEB client]** ctx.state.currentRole（シングルロール）をctx.state.currentRoles（複数ロール対応）に置換 ([#6427](https://github.com/nocobase/nocobase/pull/6427)) by @aaaaaajie
- **[Action: Batch edit]** 一括編集送信時にワークフローが起動しない問題を修正 ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher
- **[Data source manager]** ロール管理でデータソース切替時に対応するコレクションが読み込まれない問題を修正 ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh
- **[Data visualization]** カスタムフィルター追加時に削除されたフィールドが表示される問題を修正 ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile
- **[Notification: In-app message]**

  - アプリ内メッセージリストとメッセージカードの背景色を区別し、視覚階層と可読性を向上 ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66
  - 誤った受信者設定により全ユーザーがクエリされるのを回避 ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66
- **[Action: Custom request]** カスタムリクエストのサーバー側権限検証エラーを修正 ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh
- **[Auth: API keys]** API keysプラグインのロールリストからユニオンを除外 ([#6432](https://github.com/nocobase/nocobase/pull/6432)) by @aaaaaajie
- **[Block: template]** モバイルクライアントでブロックをテンプレートとして保存する際の挙動を修正 ([#6420](https://github.com/nocobase/nocobase/pull/6420)) by @gchust
- **[Workflow: Custom action event]** E2Eテストケースから `only` を削除 by @mytharcher
- **[File storage: S3(Pro)]** S3(Pro)の署名付きURLにアクセスできない問題を解決 by @chenos
- **[Workflow: Approval]**

  - 承認プロセステーブルに申請者がいない場合のページクラッシュを回避 by @mytharcher
  - 承認フォームで関連データが表示されない問題を修正 by @mytharcher
  - 外部データソースで承認時に発生するエラーを修正 by @mytharcher

### [v1.7.0-alpha.3](https://www.nocobase.com/ja/blog/v1.7.0-alpha.3)

*リリース日：2025-03-18*

#### 🎉 新機能

- **[client]** インラインテーブル操作において、アイコンのみモードをサポートし、ホバー時に操作名を表示するようになりました ([#6451](https://github.com/nocobase/nocobase/pull/6451)) by @katherinehhh

#### 🚀 改善

- **[File manager]** ファイルURL生成のロジックとAPIを簡素化しました ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher
- **[File storage: S3(Pro)]**

  - 『Access URL Base』の文言を『Base URL』に変更しました by @zhangzhonghe
  - ファイルURL生成方法をシンプルなものに変更しました by @mytharcher
- **[Backup manager]** 同一バージョンのプレリリース版とリリース版間でバックアップの復元を可能にしました by @gchust

#### 🐛 バグ修正

- **[client]**

  - 連動ルール設定でフィールドが欠落して表示される問題を修正しました ([#6488](https://github.com/nocobase/nocobase/pull/6488)) by @katherinehhh
  - ページ右上のアイコンの色がテーマに合わせて変更されない問題を修正しました ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe
  - リッチテキストフィールドのデータが送信時にクリアされない問題を修正しました ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh
  - フォームのデフォルト値設定における入力フィールドのスタイルが正しく表示されない問題を修正しました ([#6490](https://github.com/nocobase/nocobase/pull/6490)) by @gchust
  - フィルターフォームのリセットボタンをクリックしても、グリッドカードブロックのフィルター条件がクリアされない問題を修正しました ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe
- **[Workflow: Manual node]**

  - 再実行を確実にするため、マイグレーションの名称を変更しました ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher
  - マイグレーションの問題を修正しました ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher
  - フィルター内のワークフロータイトルフィールドの不具合を修正しました ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher
  - IDカラムが存在しない場合のマイグレーションエラーを修正しました ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos
  - フィールドからのコレクション同期を防止しました ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher
- **[Workflow]** ワークフローが削除された場合、タスクをカウントしないようにしました ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher
- **[Variables and secrets]** 変数およびシークレット作成ダイアログでボタンが表示されない問題を修正しました ([#6485](https://github.com/nocobase/nocobase/pull/6485)) by @gchust
- **[Workflow: Aggregate node]** 集計結果がnullの場合の丸め処理に関する不具合を修正しました ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher
- **[Embed NocoBase]** NocoBaseの埋め込み時にページが空白となる問題を修正しました by @zhangzhonghe
- **[Backup manager]** デフォルトのバックアップ設定が存在しない場合にサーバーが起動しない問題を修正しました by @gchust
- **[Workflow: Approval]**

  - 処理フォーム内のファイル関連フィールドのエラーを修正しました by @mytharcher
  - フックに基づくタスク集計の不具合を修正しました by @mytharcher

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供する、プライベートかつオープンソースのノーコードプラットフォームです。チームが変化に迅速に対応し、コストを大幅に削減することを可能にします。数年に及ぶ開発や多額の投資を避け、数分でNocoBaseを展開できます。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3分でNocoBaseを体験！

## 👇 NocoBaseを入手

[**ホームページ**](https://www.nocobase.com/)

[**デモ**](https://demo.nocobase.com/new)

[**ドキュメント**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
