毎週の製品更新ログを要約し、最新のリリースは[当社のブログ](https://www.nocobase.com/ja/blog/tags/release-notes)で確認できます。

**現在のNocoBaseの更新は、`main`、`next`、および `develop`の3つのブランチが含まれます。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現在までに最も安定したバージョンであり、インストールを推奨します。
* `next`：ベータ版で、今後の新機能が含まれており、初期テストが行われています。既知または未知の問題が存在する可能性があります。主にテストユーザーからのフィードバックを収集し、さらなる機能の最適化を目的としています。新機能を早期に体験し、フィードバックを提供したいテストユーザーに最適です。
* `develop`：アルファ版で、最新の機能コードが含まれており、不完全または不安定である可能性が高く、主に内部開発および迅速な反復に使用されます。製品の最先端に興味のある技術ユーザー向けですが、多くの問題や不完全な機能がある可能性があるため、プロダクション環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.21](https://www.nocobase.com/ja/blog/v1.4.21)

*リリース日： 2025-01-10*

#### 🚀 改善

* **[クライアント]** 詳細ブロックでリンケージルールをサポートし、隠す（予約済み値）機能を追加しました ([#6031](https://github.com/nocobase/nocobase/pull/6031)) by @katherinehhh

#### 🐛 バグ修正

* **[クライアント]**
  * アイコンファイルパスに欠けているパブリックパスを解決しました ([#6034](https://github.com/nocobase/nocobase/pull/6034)) by @chenos
  * サブテーブルのフィールド値に依存するフォームのリンケージルールが失敗する問題を修正しました ([#5876](https://github.com/nocobase/nocobase/pull/5876)) by @zhangzhonghe
  * サブ詳細で「現在のレコード」変数のフィールドが間違っている問題を修正しました ([#6030](https://github.com/nocobase/nocobase/pull/6030)) by @zhangzhonghe
* **[バックアップマネージャー]** 環境変数 API\_BASE\_PATH が `/api` でない場合のバックアップダウンロード失敗を修正しました by @gchust

### [v1.4.22](https://www.nocobase.com/ja/blog/v1.4.22)

*リリース日： 2025-01-11*

#### 🚀 改善点

* **[評価者]** ライブラリ formula.js のバージョンを 4.4.9 にアップグレード ([#6037](https://github.com/nocobase/nocobase/pull/6037)) @mytharcher による
* **[ワークフロー]** ワークフロー プラグインのロガー API を修正 ([#6036](https://github.com/nocobase/nocobase/pull/6036)) @mytharcher による

#### 🐛 バグ修正

* **[ワークフロー]** 重複トリガーを避けるための防衛ロジックを追加 ([#6022](https://github.com/nocobase/nocobase/pull/6022)) @mytharcher による

### [v1.4.23](https://www.nocobase.com/ja/blog/v1.4.23)

*リリース日： 2025-01-13*

#### 🐛 バグ修正

* **[クライアント]** テーブルで固定アクション列が正しく動作しない問題を修正しました ([#6048](https://github.com/nocobase/nocobase/pull/6048)) by @zhangzhonghe
* **[ユーザー]** ユーザーマネージメントでユーザーのパスワードを設定する際にブラウザのオートフィルを無効化しました ([#6041](https://github.com/nocobase/nocobase/pull/6041)) by @2013xile
* **[ワークフロー]** アプリが起動した後に日付フィールドに基づくスケジュールイベントがトリガーされない問題を修正しました ([#6042](https://github.com/nocobase/nocobase/pull/6042)) by @mytharcher

### [v1.4.24](https://www.nocobase.com/ja/blog/v1.4.24)

*リリース日： 2025-01-14*

#### 🚀 改善

* **[クライアント]** datePicker コンポーネントの入力を読み取り専用にしました ([#6061](https://github.com/nocobase/nocobase/pull/6061)) by @Cyx649312038

#### 🐛 バグ修正

* **[クライアント]**
  * テーブルブロックでモーダル関連フィールドの読み込みが間違っている問題を修正しました ([#6060](https://github.com/nocobase/nocobase/pull/6060)) by @katherinehhh
  * 詳細ブロックのサブテーブルのスタイル問題を修正しました ([#6049](https://github.com/nocobase/nocobase/pull/6049)) by @katherinehhh
  * readPretty モードの数値フィールドフォーマットが編集モードに影響を与える問題を修正しました ([#6050](https://github.com/nocobase/nocobase/pull/6050)) by @katherinehhh
  * ant-table のテーブルヘッダーセルのスタイル問題を修正しました ([#6052](https://github.com/nocobase/nocobase/pull/6052)) by @katherinehhh
* **[データベース]** プライマリキーでソートフィールドを初期化する際の問題を修正しました ([#6059](https://github.com/nocobase/nocobase/pull/6059)) by @chareice
* **[データ可視化]** チャートクエリで次元を設定せずに集計関数を使用する場合、`LIMIT` 句を削除しました ([#6062](https://github.com/nocobase/nocobase/pull/6062)) by @2013xile
* **[バックアップマネージャー]** サブアプリのみにログインしたユーザーのバックアップダウンロードエラーを修正しました by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.27](https://www.nocobase.com/ja/blog/v1.5.0-beta.27)

*リリース日：2025-01-10*

#### 🚀 改善

* **[クライアント]** アソシエートボタンからのリンケージルールを削除しました ([#6016](https://github.com/nocobase/nocobase/pull/6016)) by @katherinehhh

#### 🐛 バグ修正

* **[クライアント]**
  * サブテーブルのフィールド値に依存するフォームのリンケージルールが失敗する問題を修正しました ([#5876](https://github.com/nocobase/nocobase/pull/5876)) by @zhangzhonghe
  * 認証チェックリクエストが完了した後にページのレンダリングを継続する問題を修正しました ([#6020](https://github.com/nocobase/nocobase/pull/6020)) by @2013xile

### [v1.5.0-beta.28](https://www.nocobase.com/ja/blog/v1.5.0-beta.28)

*リリース日：2025-01-14*

#### 🐛 バグ修正

* **[クライアント]**
  * ワークフローの手動ノードでフォームボタンのフィールド割り当てが無効な問題を修正しました ([#6054](https://github.com/nocobase/nocobase/pull/6054)) by @zhangzhonghe
  * フィールド有効リンクモーダルで現在のポップアップ変数が欠けている問題を修正しました ([#6045](https://github.com/nocobase/nocobase/pull/6045)) by @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.11](https://www.nocobase.com/ja/blog/v1.6.0-alpha.11)

*リリース日：2025-01-09*

#### 🎉 新機能

* **[クライアント]** 添付ファイルのファイル名を表示するための schemaSetting を追加しました ([#5995](https://github.com/nocobase/nocobase/pull/5995)) by @katherinehhh

### [v1.6.0-alpha.13](https://www.nocobase.com/ja/blog/v1.6.0-alpha.13)

*リリース日：2025-01-14*

#### 🚀 改善

* **[ワークフロー: JSON 計算]** JSON クエリノードの名前を JSON 計算に変更しました by @mytharcher

#### 🐛 バグ修正

* **[ワークフロー]** DatePicker コンポーネントの値タイプを修正しました ([#6039](https://github.com/nocobase/nocobase/pull/6039)) by @mytharcher

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供するプライベートなオープンソースのノーコードプラットフォームです。チームが迅速に変化に適応できるようにしつつ、コストを大幅に削減します。NocoBaseを数分で展開することで、数年の開発や多額の投資を避けることができます。

**NocoBaseに関する詳細を[こちらで確認](https://www.nocobase.com/)**
