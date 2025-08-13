週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.15](https://www.nocobase.com/ja/blog/v1.8.15)

*リリース日：2025-08-12*

#### 🚀 機能改善

* **[クライアント]**
  * 「一昨日」の日付変数をサポート（[#7359](https://github.com/nocobase/nocobase/pull/7359)）@katherinehhh
  * ポップアップタブ切り替え時のパフォーマンスを最適化（[#7353](https://github.com/nocobase/nocobase/pull/7353)）@zhangzhonghe
* **[ワークフロー]**
  * 不安定なテストケースを修正（[#7349](https://github.com/nocobase/nocobase/pull/7349)）@mytharcher
  * 対応するバージョンが無効化されていても、タスクカードのワークフロータイトルに取り消し線が表示されないように変更（[#7339](https://github.com/nocobase/nocobase/pull/7339)）@mytharcher
* **[オフィスファイルプレビューワー]** `.odt`ファイルのプレビューをサポート（[#7347](https://github.com/nocobase/nocobase/pull/7347)）@mytharcher
* **[バックアップマネージャー]** MySQL データベースのバックアップ操作のパフォーマンスを改善 @gchust

#### 🐛 不具合修正

* **[クライアント]**
  * モバイルデバイスで複数列フォームレイアウトが単列レイアウトに変換されない問題を修正（[#7355](https://github.com/nocobase/nocobase/pull/7355)）@zhangzhonghe
  * コレクションの一括削除エラーを修正（[#7345](https://github.com/nocobase/nocobase/pull/7345)）@aaaaaajie
  * 個別に権限を設定する際に、以前に保存したデータ範囲が事前に選択されない問題を修正（[#7288](https://github.com/nocobase/nocobase/pull/7288)）@aaaaaajie
* **[ワークフロー]**
  * 「ノード追加」メニューをリファクタリングし、それに起因するワークフローキャンバスの描画パフォーマンス問題を修正（[#7363](https://github.com/nocobase/nocobase/pull/7363)）@mytharcher
  * 単一のタスクアイテムを取得する際のフィルター条件が不正確な問題を修正（[#7366](https://github.com/nocobase/nocobase/pull/7366)）@mytharcher
  * フィールド選択におけるキーワード一致の問題を修正（[#7356](https://github.com/nocobase/nocobase/pull/7356)）@mytharcher
  * 停止時にイベントキューに発行することで引き起こされるエラーを回避（[#7348](https://github.com/nocobase/nocobase/pull/7348)）@mytharcher
* **[通知：アプリ内メッセージ]** サイト内メッセージを受信したがポップアップで表示されない問題を修正（[#7364](https://github.com/nocobase/nocobase/pull/7364)）@mytharcher
* **[モバイル]** 日付範囲制限を適用した場合に、モバイルデバイスの日付ピッカーが不正に表示される問題を解消（[#7362](https://github.com/nocobase/nocobase/pull/7362)）@katherinehhh
* **[ファイルマネージャー]** 権限設定をサポートするため、ファイルコレクションに`storageId`フィールドを追加（[#7351](https://github.com/nocobase/nocobase/pull/7351)）@mytharcher
* **[ワークフロー：並列ノード]** MySQL 環境下で、並列ノードが再開後に中断する問題を修正（[#7346](https://github.com/nocobase/nocobase/pull/7346)）@mytharcher
* **[ワークフロー: CC]** ブロックを削除できない問題を修正（[#7338](https://github.com/nocobase/nocobase/pull/7338)）@mytharcher
* **[オフィスファイルプレビューワー]** URL のみで`.docx`、`.xlsx`、`.pptx`ファイルのプレビューをサポート（[#7336](https://github.com/nocobase/nocobase/pull/7336)）@mytharcher
* **[データ可視化]** チャートフィルターブロックの日付フィールドのデフォルト値における日付変数の問題（[#7291](https://github.com/nocobase/nocobase/pull/7291)）@katherinehhh
* **[ワークフロー：承認]**
  * 承認元の詳細ブロックにおいて連動規則が機能しない問題を修正 @mytharcher
  * ドラフトを送信する際の関連データ更新を修正 @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.10](https://www.nocobase.com/ja/blog/v1.9.0-alpha.10)

*リリース日：2025-08-09*

#### 🐛 不具合修正

* **[メールマネージャー]** リッチエディターがソフト改行をサポートするように修正 @jiannx

### [v1.9.0-alpha.9](https://www.nocobase.com/ja/blog/v1.9.0-alpha.9)

*リリース日：2025-08-09*

#### 🚀 機能改善

* **[ワークフロー]** 不安定なテストケースを修正（[#7349](https://github.com/nocobase/nocobase/pull/7349)）@mytharcher

#### 🐛 不具合修正

* **[クライアント]** モバイルデバイスで複数列フォームレイアウトが単列レイアウトに変換されない問題を修正（[#7355](https://github.com/nocobase/nocobase/pull/7355)）@zhangzhonghe
* **[ワークフロー]** フィールド選択におけるキーワード一致の問題を修正（[#7356](https://github.com/nocobase/nocobase/pull/7356)）@mytharcher

### [v1.9.0-alpha.8](https://www.nocobase.com/ja/blog/v1.9.0-alpha.8)

*リリース日：2025-08-09*

#### 🚀 機能改善

* **[ワークフロー]** 不安定なテストケースを修正（[#7349](https://github.com/nocobase/nocobase/pull/7349)）@mytharcher

#### 🐛 不具合修正

* **[クライアント]** モバイルデバイスで複数列フォームレイアウトが単列レイアウトに変換されない問題を修正（[#7355](https://github.com/nocobase/nocobase/pull/7355)）@zhangzhonghe
* **[ワークフロー]** フィールド選択におけるキーワード一致の問題を修正（[#7356](https://github.com/nocobase/nocobase/pull/7356)）@mytharcher
