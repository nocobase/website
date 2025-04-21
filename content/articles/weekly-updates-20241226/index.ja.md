毎週の製品更新ログを要約し、最新のリリースは[当社のブログ](https://www.nocobase.com/ja/blog/tags/release-notes)で確認できます。

**現在のNocoBaseの更新は、`main`、`next`、および `develop`の3つのブランチが含まれます。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現在までに最も安定したバージョンであり、インストールを推奨します。
* `next`：ベータ版で、今後の新機能が含まれており、初期テストが行われています。既知または未知の問題が存在する可能性があります。主にテストユーザーからのフィードバックを収集し、さらなる機能の最適化を目的としています。新機能を早期に体験し、フィードバックを提供したいテストユーザーに最適です。
* `develop`：アルファ版で、最新の機能コードが含まれており、不完全または不安定である可能性が高く、主に内部開発および迅速な反復に使用されます。製品の最先端に興味のある技術ユーザー向けですが、多くの問題や不完全な機能がある可能性があるため、プロダクション環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.11](https://www.nocobase.com/ja/blog/v1.4.11)

*リリース日： 2024-12-18*

#### 🚀 改善点

* **[クライアント]** より多くのコンポーネントが「省略文字列出内容」設定項目をサポートするようにしました ([#5888](https://github.com/nocobase/nocobase/pull/5888)) by @zhangzhonghe
* **[データベース]** リレーションリポジトリにfirstOrCreateとupdateOrCreateを追加しました ([#5894](https://github.com/nocobase/nocobase/pull/5894)) by @chareice

#### 🐛 バグ修正

* **[クライアント]**
  * 外部データソースブロックの複製リクエストテンプレートにx-data-sourceパラメーターが抜けていた問題を修正 ([#5882](https://github.com/nocobase/nocobase/pull/5882)) by @katherinehhh
  * プラグイン内のテーブルで水平スクロールバーの問題を修正 ([#5899](https://github.com/nocobase/nocobase/pull/5899)) by @katherinehhh
  * 関連フィールドのドロップダウンで時々余計な「N/A」オプションが表示される問題を修正 ([#5878](https://github.com/nocobase/nocobase/pull/5878)) by @zhangzhonghe
  * PGビュー作成の問題を修正、スキーマ間でビューを選択する際のエラーを解決 ([#5881](https://github.com/nocobase/nocobase/pull/5881)) by @katherinehhh
  * フォームブロックのグループスタイルの問題を修正（レイアウトが水平に設定された場合） ([#5884](https://github.com/nocobase/nocobase/pull/5884)) by @katherinehhh
* **[ユーザー]**
  * ユーザー管理でユーザーを追加または編集後、フォームがリセットされない問題を修正 ([#5875](https://github.com/nocobase/nocobase/pull/5875)) by @2013xile
  * ユーザープロファイルの編集と送信後、ページ切り替えやページサイズの変更後にユーザー管理のページネーション設定がリセットされる問題を修正 ([#5893](https://github.com/nocobase/nocobase/pull/5893)) by @2013xile
* **[データソースマネージャー]** 外部データソースコレクションのフィルタリング問題を修正 ([#5890](https://github.com/nocobase/nocobase/pull/5890)) by @chareice
* **[公開フォーム]** グローバルテーマスイッチが公開フォームのプレビューページテーマに影響を与える問題を修正 ([#5883](https://github.com/nocobase/nocobase/pull/5883)) by @katherinehhh

### [v1.4.13](https://www.nocobase.com/ja/blog/v1.4.13)

*リリース日： 2024-12-19*

#### 🚀 改善点

* **[コレクション：SQL]** SQLで危険なキーワードと関数の使用を禁止しました。 ([#5913](https://github.com/nocobase/nocobase/pull/5913)) by @2013xile
* **[テーマエディター]** ユーザープロフィール編集とパスワード更新のためのAPI検証を最適化しました ([#5912](https://github.com/nocobase/nocobase/pull/5912)) by @2013xile

#### 🐛 バグ修正

* **[データソース：メイン]** 外部キーの読み込み問題を修正しました ([#5903](https://github.com/nocobase/nocobase/pull/5903)) by @chareice
* **[コレクション：SQL]** SQLコレクションを更新した後にフィールドが消える問題を修正しました。 ([#5909](https://github.com/nocobase/nocobase/pull/5909)) by @chareice
* **[バックアップマネージャー]** Windowsでバックアップ復元が機能しない問題を修正しました by @gchust

### [v1.4.14](https://www.nocobase.com/ja/blog/v1.4.14)

*リリース日： 2024-12-21*

####🐛 バグ修正

* **[データ可視化]** チャートクエリでネストされた多対多関連を使用したフィルタリング時のエラーを修正しました。([#5917](https://github.com/nocobase/nocobase/pull/5917)) by @2013xile
* **[ワークフロー：集計ノード]** トランザクションによって引き起こされた不正確な集計結果を修正しました。([#5916](https://github.com/nocobase/nocobase/pull/5916)) by @mytharcher

### [v1.4.15](https://www.nocobase.com/ja/blog/v1.4.15)

*リリース日： 2024-12-25*

#### 🐛 バグ修正

* **[サーバー]** プラグインを有効化した際にコレクションが自動的に作成されない問題を修正しました ([#5939](https://github.com/nocobase/nocobase/pull/5939)) by @chenos
* **[クライアント]** リンクルールでのプロパティフィールド検索が正しいデータと一致しない問題を修正しました ([#5925](https://github.com/nocobase/nocobase/pull/5925)) by @katherinehhh
* **[ワークフロー]**
  * 日付フィールドのタイムゾーンなしのスケジュールトリガーを修正しました ([#5938](https://github.com/nocobase/nocobase/pull/5938)) by @mytharcher
  * 日付スコープ変数の翻訳を修正しました ([#5919](https://github.com/nocobase/nocobase/pull/5919)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.13](https://www.nocobase.com/ja/blog/v1.5.0-beta.13)

*リリース日：2024-12-21*

#### 🚀 改善点

* **[データ可視化]** チャートクエリにオフセットパラメーターを追加しました ([#5911](https://github.com/nocobase/nocobase/pull/5911)) by @Albert-mah

### [v1.5.0-beta.14](https://www.nocobase.com/ja/blog/v1.5.0-beta.14)

*リリース日：2024-12-21*

#### 🐛 バグ修正

* **[データ可視化]** チャートクエリでネストされた多対多関連を使用したフィルタリング時のエラーを修正しました。([#5917](https://github.com/nocobase/nocobase/pull/5917)) by @2013xile
* **[ワークフロー：集計ノード]** トランザクションによって引き起こされた不正確な集計結果を修正しました。([#5916](https://github.com/nocobase/nocobase/pull/5916)) by @mytharcher

### [v1.5.0-beta.15](https://www.nocobase.com/ja/blog/v1.5.0-beta.15)

*リリース日：2024-12-23*

#### 🎉 新機能

* **[クライアント]** 日付フィールドコンポーネントに日付限定範囲を追加しました ([#5852](https://github.com/nocobase/nocobase/pull/5852)) by @Cyx649312038

### [v1.5.0-beta.16](https://www.nocobase.com/ja/blog/v1.5.0-beta.16)

*リリース日：2024-12-24*

#### 🐛 バグ修正

* **[ビルド]** `APP_PUBLIC_PATH` 環境変数を設定した後の読み込み問題を修正しました ([#5924](https://github.com/nocobase/nocobase/pull/5924)) by @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.6](https://www.nocobase.com/ja/blog/v1.6.0-alpha.6)

*リリース日：2024-12-19*

#### 🎉 新機能

* **[クライアント]** 多数関連フィールドのサブフォームで既存のデータを選択する機能をサポートしました ([#5849](https://github.com/nocobase/nocobase/pull/5849)) by @katherinehhh

### [v1.6.0-alpha.7](https://www.nocobase.com/ja/blog/v1.6.0-alpha.7)

*リリース日：2024-12-25*

#### 🎉 新機能

* **[ユーザー]** ユーザー管理でユーザープロフィールフォームの設定をサポートし、ユーザーの作成と編集フォームもサポートしました。([#5698](https://github.com/nocobase/nocobase/pull/5698)) by @2013xile

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供するプライベートなオープンソースのノーコードプラットフォームです。チームが迅速に変化に適応できるようにしつつ、コストを大幅に削減します。NocoBaseを数分で展開することで、数年の開発や多額の投資を避けることができます。

**NocoBaseに関する詳細を[こちらで確認](https://www.nocobase.com/)**
