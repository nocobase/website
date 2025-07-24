週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.10](https://www.nocobase.com/ja/blog/v1.8.10)

*リリース日：2025-07-24*


### [v1.8.7](https://www.nocobase.com/ja/blog/v1.8.7)

*リリース日：2025-07-18*

#### 🎉 新機能

* **[ワークフロー：日付計算ノード]** ノードのテスト実行をサポート @mytharcher

#### 🚀 機能改善

* **[クライアント]** カラーピッカー：推奨カラーを 4 色追加（[#7226](https://github.com/nocobase/nocobase/pull/7226)）@zhangzhonghe
* **[ワークフロー]** 日付値の比較を互換性あるものにする（[#7237](https://github.com/nocobase/nocobase/pull/7237)）@mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * テーブルアクション列にスタイルルールが適用されない問題（[#7225](https://github.com/nocobase/nocobase/pull/7225)）@katherinehhh
  * メニューを削除した際に、uiSchemas テーブルの対応データが削除されない問題（[#7232](https://github.com/nocobase/nocobase/pull/7232)）@zhangzhonghe
  * appends で非関連フィールドが選択されるのを回避（[#7231](https://github.com/nocobase/nocobase/pull/7231)）@mytharcher
* **[ワークフロー：サブフロー]** 取消シグナルが到着したが保留中の実行が現在のインスタンスに存在しない場合に発生するエラーを修正 @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.3](https://www.nocobase.com/ja/blog/v1.9.0-alpha.3)

*リリース日：2025-07-18*

#### 🎉 新機能

* **[データソース：メイン]** メインデータソースにプラグインで定義されたテーブルを表示できるようにサポート（[#7187](https://github.com/nocobase/nocobase/pull/7187)）@aaaaaajie
* **[ワークフロー：日付計算ノード]** ノードのテスト実行をサポート @mytharcher

#### 🚀 機能改善

* **[クライアント]** カラーピッカー：推奨カラーを 4 色追加（[#7226](https://github.com/nocobase/nocobase/pull/7226)）@zhangzhonghe
* **[ワークフロー]** 日付値の比較を互換性あるものにする（[#7237](https://github.com/nocobase/nocobase/pull/7237)）@mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * テーブルアクション列にスタイルルールが適用されない問題（[#7225](https://github.com/nocobase/nocobase/pull/7225)）@katherinehhh
  * appends で非関連フィールドが選択されるのを回避（[#7231](https://github.com/nocobase/nocobase/pull/7231)）@mytharcher
  * エラー修正：'react-device-detect' を解決できない問題（[#7224](https://github.com/nocobase/nocobase/pull/7224)）@zhangzhonghe
  * メニューを削除した際に、uiSchemas テーブルの対応データが削除されない問題（[#7232](https://github.com/nocobase/nocobase/pull/7232)）@zhangzhonghe
* **[データベース]** 外部データソーステーブルでシンプルページネーションを有効にした際のエラーを修正（[#7222](https://github.com/nocobase/nocobase/pull/7222)）@aaaaaajie
* **[コレクションフィールド：ソート]** レコード複製時にソートフィールドの選択が欠落する問題（[#7116](https://github.com/nocobase/nocobase/pull/7116)）@katherinehhh
* **[ワークフロー：サブフロー]** 取消シグナルが到着したが保留中の実行が現在のインスタンスに存在しない場合に発生するエラーを修正 @mytharcher
* **[ワークフロー：承認]**
  * 承認送信時の多階層関連データを修正 @mytharcher
  * レコード一覧において削除された承認に対するフォールトトレランスを追加 @mytharcher
* **[メールマネージャー]** メールメッセージ一覧のパフォーマンスを最適化 @jiannx
