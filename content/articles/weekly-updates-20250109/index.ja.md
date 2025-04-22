毎週の製品更新ログを要約し、最新のリリースは[当社のブログ](https://www.nocobase.com/ja/blog/tags/release-notes)で確認できます。

**現在のNocoBaseの更新は、`main`、`next`、および `develop`の3つのブランチが含まれます。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現在までに最も安定したバージョンであり、インストールを推奨します。
* `next`：ベータ版で、今後の新機能が含まれており、初期テストが行われています。既知または未知の問題が存在する可能性があります。主にテストユーザーからのフィードバックを収集し、さらなる機能の最適化を目的としています。新機能を早期に体験し、フィードバックを提供したいテストユーザーに最適です。
* `develop`：アルファ版で、最新の機能コードが含まれており、不完全または不安定である可能性が高く、主に内部開発および迅速な反復に使用されます。製品の最先端に興味のある技術ユーザー向けですが、多くの問題や不完全な機能がある可能性があるため、プロダクション環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.18](https://www.nocobase.com/ja/blog/v1.4.18)

*リリース日： 2025-01-06*

#### 🚀 改善

* **[ワークフロー: テストキット]** テスト収集の日付フィールドの精度を修正しました ([#5983](https://github.com/nocobase/nocobase/pull/5983)) by @mytharcher

#### 🐛 バグ修正

* **[クライアント]**
  * サブページでデータブロックをフルハイトに設定した際のスクロールバーの問題を修正しました ([#5989](https://github.com/nocobase/nocobase/pull/5989)) by @katherinehhh
  * アクションカラムのボタンが隠れている際のアライメントの問題を修正しました ([#5987](https://github.com/nocobase/nocobase/pull/5987)) by @katherinehhh
  * コレクションマネージャーでシステムフィールドと汎用フィールドを一括削除する際の問題を修正しました ([#5988](https://github.com/nocobase/nocobase/pull/5988)) by @katherinehhh
  * モバイルページで 'URL サーチパラメーター' 変数が動作しない問題を修正しました ([#5968](https://github.com/nocobase/nocobase/pull/5968)) by @Cyx649312038
* **[サーバー]** バックアップ復元中にアプリがクラッシュする可能性のある問題を修正しました ([#5981](https://github.com/nocobase/nocobase/pull/5981))  by @gchust
* **[モバイル]** モバイルデバイスで下部ボタンが隠れる問題を修正しました ([#5991](https://github.com/nocobase/nocobase/pull/5991))  by @zhangzhonghe
* **[データ可視化]** サブページのチャートで使用された "現在のポップアップ変数" がページリフレッシュ後に空になる問題を修正しました ([#5984](https://github.com/nocobase/nocobase/pull/5984))  by @2013xile
* **[ブロック: カンバン]** カンバンで親コレクションフィールドがロードされない問題を修正しました ([#5985](https://github.com/nocobase/nocobase/pull/5985))  by @katherinehhh

### [v1.4.19](https://www.nocobase.com/ja/blog/v1.4.19)

*リリース日： 2025-01-06*

#### 🐛 バグ修正

* **[クライアント]** フィルター形式/アクションの日付範囲ピッカーが showTime が設定されている場合に時間ピッカーを表示しない問題を修正しました ([#5994](https://github.com/nocobase/nocobase/pull/5994)) by @katherinehhh

### [v1.4.20](https://www.nocobase.com/ja/blog/v1.4.20)

*リリース日： 2025-01-09*

#### 🎉 新機能

* **[クライアント]** app.getHref() メソッドを追加しました ([#6019](https://github.com/nocobase/nocobase/pull/6019)) by @chenos

#### 🚀 改善

* **[クライアント]**
  * アクションボタンにバインドするワークフローの並べ替えを可能にしました ([#6017](https://github.com/nocobase/nocobase/pull/6017)) by @mytharcher
  * 評価者の参照リンクをドキュメントサイトに変更しました ([#6021](https://github.com/nocobase/nocobase/pull/6021)) by @mytharcher
  * マルチセレクトドロップダウンコンポーネントで maxTagCount: 'responsive' をサポートしました ([#6007](https://github.com/nocobase/nocobase/pull/6007)) by @katherinehhh
  * フィルター欄の時間範囲コンポーネントのデフォルト終了時間を 23:59:59 に設定しました ([#6012](https://github.com/nocobase/nocobase/pull/6012)) by @katherinehhh
* **[アクション: 一括編集]** 一括編集フォームの送信ボタンをリファクタリング: フィールド割り当てとリンクルールを削除しました ([#6008](https://github.com/nocobase/nocobase/pull/6008)) by @katherinehhh

#### 🐛 バグ修正

* **[クライアント]**
  * リッチテキストエディターでデータを削除した後、必須検証が動作しない問題を修正しました ([#6006](https://github.com/nocobase/nocobase/pull/6006)) by @katherinehhh
  * アクションカラムのボタンが隠れている際の位置ズレ問題を修正しました ([#6014](https://github.com/nocobase/nocobase/pull/6014)) by @katherinehhh
  * REST API ページのコレクションタブをクリックした際の「コレクション作成」ボタンの問題を修正しました ([#5992](https://github.com/nocobase/nocobase/pull/5992)) by @katherinehhh
  * 一対多の関連で targetKey が NanoID フィールドを選択できない問題を修正しました ([#5999](https://github.com/nocobase/nocobase/pull/5999)) by @katherinehhh
  * コンパクトテーマの設定ボタンのスタイルを修正しました ([#6001](https://github.com/nocobase/nocobase/pull/6001)) by @katherinehhh
  * リストコンポーネントのスタイルを修正しました ([#5998](https://github.com/nocobase/nocobase/pull/5998)) by @mytharcher
  * クライアントリクエストに含まれるヘッダーが上書きされる問題を修正しました ([#6009](https://github.com/nocobase/nocobase/pull/6009)) by @2013xile
  * foreignKey, targetKey, sourceKey が中国語文字によるフィルターをサポートするように修正しました ([#5997](https://github.com/nocobase/nocobase/pull/5997)) by @katherinehhh
* **[アクション: レコードのインポート]** belongs to many 関連を使用する異なる target key のインポートを修正しました ([#6024](https://github.com/nocobase/nocobase/pull/6024)) by @chareice
* **[ブロック: マップ]** 詳細ブロックのマップフィールドがマップブロックとしてレンダリングされる問題を修正しました ([#6010](https://github.com/nocobase/nocobase/pull/6010)) by @katherinehhh
* **[NocoBase の埋め込み]** 埋め込みのトークンが認証と競合する問題を修正しました by @chenos

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.5.0-beta.20

*リリース日：2024-12-31*

#### 🎉 新機能

- **[[インポート Pro](https://docs-jp.nocobase.com/handbook/action-import-pro)]**: データのインポート機能を強化し、非同期インポート、百万行のレコードインポート、重複データの識別と処理、データの更新、およびワークフロートトリガーのサポートを追加します。
- **[[エクスポート Pro](https://docs-jp.nocobase.com/handbook/action-export-pro)]**: 非同期エクスポート、百万行レコードエクスポート、および添付エクスポートのサポートでデータエクスポート機能を強化します。

### [v1.5.0-beta.22](https://www.nocobase.com/ja/blog/v1.5.0-beta.22)

*リリース日：2025-01-04*

#### 🐛 バグ修正

* **[クライアント]** iOSで空のサブテーブルが1行の空データを表示する問題を修正しました ([#5990](https://github.com/nocobase/nocobase/pull/5990)) by @zhangzhonghe

### [v1.5.0-beta.26](https://www.nocobase.com/ja/blog/v1.5.0-beta.26)

*リリース日：2025-01-08*

#### 🐛 バグ修正

* **[クライアント]** テーブルの行をドラッグして並べ替えられない問題を修正しました ([#6013](https://github.com/nocobase/nocobase/pull/6013)) by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.8](https://www.nocobase.com/ja/blog/v1.6.0-alpha.8)

*リリース日：2025-01-02*

#### 🎉 新機能

* **[ワークフロー：手動ノード]** すべてのタイプのワークフローToDoに固定のグローバルエントリーを追加しました ([#5858](https://github.com/nocobase/nocobase/pull/5858)) by @mytharcher
* **[パスワードポリシー]** 新しいプラグイン：パスワードポリシーを追加しました。これはすべてのユーザーのパスワードルールとサインインロックアウトポリシーを設定するために使用されます by @2013xile 参照：[パスワードポリシーとユーザーロックアウト](https://docs.nocobase.com/handbook/password-policy)

#### 🚀 改善点

* **[クライアント]** プラグインマネージャーにフィルターキーワード「セキュリティ」を追加しました ([#5977](https://github.com/nocobase/nocobase/pull/5977)) by @2013xile
* **[ワークフロー：カスタムアクションイベント]** 手動実行のAPIを変更しました by @mytharcher

#### 🐛 バグ修正

* **[ワークフロー]** `WorkflowVariableWrapper`コンポーネントで`onChange`が動作しない問題を修正しました ([#5964](https://github.com/nocobase/nocobase/pull/5964)) by @mytharcher

### [v1.6.0-alpha.9](https://www.nocobase.com/ja/blog/v1.6.0-alpha.9)

*リリース日：2025-01-06*

#### 🚀 改善

* **[モバイル]** モバイルのテーブルで現在のページ番号を表示するサポートを追加しました ([#5946](https://github.com/nocobase/nocobase/pull/5946)) by @katherinehhh
* **[ファイルマネージャー]** 他のストレージプラグインのサポートを追加しました ([#5930](https://github.com/nocobase/nocobase/pull/5930)) by @jiannx

### [v1.6.0-alpha.10](https://www.nocobase.com/ja/blog/v1.6.0-alpha.10)

*リリース日：2025-01-08*

#### 🎉 新機能

- **[環境変数]** 動的環境変数とシークレットの設定をサポートしました ([#5966](https://github.com/nocobase/nocobase/pull/5966)) by @katherinehhh

#### 🚀 改善

- **[クライアント]** IconPickerにさらに多くのアイコンを追加しました ([#5996](https://github.com/nocobase/nocobase/pull/5996)) by @katherinehhh
- **[コレクションフィールド: 添付ファイル(URL)]** plugin-file-storage-s3-pro に関連するファイルコレクションをフィルターします。by @jiannx

#### 🐛 バグ修正

- **[コレクションフィールド: 添付ファイル(URL)]** コンポーネントフック内の変更されたAPIを修正しました by @mytharcher

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供するプライベートなオープンソースのノーコードプラットフォームです。チームが迅速に変化に適応できるようにしつつ、コストを大幅に削減します。NocoBaseを数分で展開することで、数年の開発や多額の投資を避けることができます。

**NocoBaseに関する詳細を[こちらで確認](https://www.nocobase.com/)**
