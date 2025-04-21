毎週の製品更新ログを要約し、最新のリリースは[当社のブログ](https://www.nocobase.com/ja/blog/tags/release-notes)で確認できます。

**現在のNocoBaseの更新は、`main`、`next`、および `develop`の3つのブランチが含まれます。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現在までに最も安定したバージョンであり、インストールを推奨します。
* `next`：ベータ版で、今後の新機能が含まれており、初期テストが行われています。既知または未知の問題が存在する可能性があります。主にテストユーザーからのフィードバックを収集し、さらなる機能の最適化を目的としています。新機能を早期に体験し、フィードバックを提供したいテストユーザーに最適です。
* `develop`：アルファ版で、最新の機能コードが含まれており、不完全または不安定である可能性が高く、主に内部開発および迅速な反復に使用されます。製品の最先端に興味のある技術ユーザー向けですが、多くの問題や不完全な機能がある可能性があるため、プロダクション環境での使用は推奨されません。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.52](https://www.nocobase.com/ja/blog/v1.3.52)

*リリース日： 2024-11-21*

### 🚀 改善点

- **[ワークフロー]**

  - クエリノードのページ制限を削除する ([#5694](https://github.com/nocobase/nocobase/pull/5694)) by @mytharcher
  - ワークフロー削除時に実行を削除しないよう変更 ([#5666](https://github.com/nocobase/nocobase/pull/5666)) by @mytharcher
- **[データソース: REST API]** REST APIプラグインのテキスト説明を最適化 by @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.2](https://www.nocobase.com/ja/blog/v1.4.0-beta.2)

*リリース日：2024-11-21*

### 🐛 バグ修正

- **[ビルド]** クライアントビルドツールを `rspack` から `vite` に戻し、 `create-nocobase-app` コマンド実行後に `yarn dev` コマンドがエラーを報告する問題を修正しました ([#5697](https://github.com/nocobase/nocobase/pull/5697)) by @gchust
- **[クライアント]** 列数が少ないときに右固定列が右に整列しない問題を修正しました ([#5690](https://github.com/nocobase/nocobase/pull/5690)) by @katherinehhh
- **[モバイル]** モバイル設定ページで、'フィールド値の割り当て' モーダルが隠れる問題を修正しました ([#5701](https://github.com/nocobase/nocobase/pull/5701)) by @zhangzhonghe

## [v1.4.0-beta.3](https://www.nocobase.com/ja/blog/v1.4.0-beta.3)

*リリース日：2024-11-21*

### 🐛 バグ修正

- **[クライアント]**

  - 外部データソースビューコレクションから「データベースから同期」ボタンを削除しました ([#5696](https://github.com/nocobase/nocobase/pull/5696)) by @katherinehhh
  - `Variable.TextArea`で非文字列値に対するフォールバックを追加しました ([#5704](https://github.com/nocobase/nocobase/pull/5704)) by @mytharcher
- **[カレンダー]** 開始日と終了日が月をまたぐ場合にカレンダーブロックでイベントが表示されない問題を修正しました ([#5699](https://github.com/nocobase/nocobase/pull/5699)) by @katherinehhh

## [v1.4.0-beta.5](https://www.nocobase.com/ja/blog/v1.4.0-beta.5)

*リリース日：2024-11-24*

### 🐛 バグ修正

- **[クライアント]**
  - 水平レイアウトにおける関連フィールドのラベル幅の問題を修正しました ([#5709](https://github.com/nocobase/nocobase/pull/5709)) @katherinehhhによる
  - マルチレイヤーサブフォーム内のネストされたサブテーブルにおける関連データのリンクの問題を修正しました ([#5710](https://github.com/nocobase/nocobase/pull/5710)) @katherinehhhによる
  - 水平レイアウトにおける関連フィールドのラベル幅の問題を修正しました ([#5709](https://github.com/nocobase/nocobase/pull/5709)) @katherinehhhによる

## [v1.4.0-beta.6](https://www.nocobase.com/ja/blog/v1.4.0-beta.6)

*リリース日：2024-11-26*

### 🚀 かくじょう

- **[クライアント]** インターフェース上でプラグインを一括で有効化するサポートを追加しました ([#5730](https://github.com/nocobase/nocobase/pull/5730)) by @chenos

### 🐛 バグ修正

- **[クライアント]** フォームの横並びモードにおけるサブテーブルのラベル幅の問題を修正しました ([#5719](https://github.com/nocobase/nocobase/pull/5719)) by @katherinehhh

## [v1.4.0-beta.7](https://www.nocobase.com/ja/blog/v1.4.0-beta.7)

*リリース日：2024-11-27*

### 🎉 新機能

- **[認証]** 登録フォームにユーザーテーブルのフィールドを追加できるようにする ([#5741](https://github.com/nocobase/nocobase/pull/5741)) by @2013xile

### 🐛 バグ修正

- **[クライアント]** 最初のレンダリング時に選択されたオプションラベルがロードされない問題を修正しました([#5736](https://github.com/nocobase/nocobase/pull/5736)) by @sheldon66

## [v1.4.0-beta.8](https://www.nocobase.com/ja/blog/v1.4.0-beta.8)

*リリース日：2024-11-27*

### 🐛 バグ修正

**[通知：アプリ内メッセージ]** アプリ内メッセージのタイトル文字列のスライスロジックを削除しました。 ([#5728](https://github.com/nocobase/nocobase/pull/5728)) by @sheldon66

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.5](https://www.nocobase.com/ja/blog/v1.5.0-alpha.5)

*リリース日：2024-11-23*

### 🐛 バグ修正

- **[build]** `create-nocobase-app` 後に `yarn dev` を実行するとエラーが発生する問題を修正しました ([#5708](https://github.com/nocobase/nocobase/pull/5708)) by @gchust

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供するプライベートなオープンソースのノーコードプラットフォームです。チームが迅速に変化に適応できるようにしつつ、コストを大幅に削減します。NocoBaseを数分で展開することで、数年の開発や多額の投資を避けることができます。

**NocoBaseに関する詳細を[こちらで確認](https://www.nocobase.com/)**
