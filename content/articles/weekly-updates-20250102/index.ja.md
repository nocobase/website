毎週の製品更新ログを要約し、最新のリリースは[当社のブログ](https://www.nocobase.com/ja/blog/tags/release-notes)で確認できます。

**現在のNocoBaseの更新は、`main`、`next`、および `develop`の3つのブランチが含まれます。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現在までに最も安定したバージョンであり、インストールを推奨します。
* `next`：ベータ版で、今後の新機能が含まれており、初期テストが行われています。既知または未知の問題が存在する可能性があります。主にテストユーザーからのフィードバックを収集し、さらなる機能の最適化を目的としています。新機能を早期に体験し、フィードバックを提供したいテストユーザーに最適です。
* `develop`：アルファ版で、最新の機能コードが含まれており、不完全または不安定である可能性が高く、主に内部開発および迅速な反復に使用されます。製品の最先端に興味のある技術ユーザー向けですが、多くの問題や不完全な機能がある可能性があるため、プロダクション環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.16](https://www.nocobase.com/ja/blog/v1.4.16)

*リリース日： 2024-12-26*

#### 🐛 バグ修正

* **[クライアント]** UnixTimestampフィールドの精度変換問題を修正しました ([#5931](https://github.com/nocobase/nocobase/pull/5931)) by @chenos
* **[アクション：重複レコード]** o2o関連フィールドが詳細とフォームブロックで設定された対象コレクションフィールドを表示しない問題を修正しました ([#5921](https://github.com/nocobase/nocobase/pull/5921)) by @katherinehhh
* **[バックアップマネージャー]** mysqldumpのバージョンが8以下の場合のバックアップエラーを修正しました by @gchust

### [v1.4.17](https://www.nocobase.com/ja/blog/v1.4.17)

*リリース日： 2024-12-31*

#### 🎉 新機能

* **[クライアント]** m2m配列フィールドで「テーブル選択レコード」変数を使用するサポートを追加しました ([#5974](https://github.com/nocobase/nocobase/pull/5974)) by @2013xile

#### 🚀 改善点

* **[未定義]** テーマプラグインをデフォルトで有効化しました ([#5957](https://github.com/nocobase/nocobase/pull/5957)) by @zhangzhonghe
* **[データソース：メイン]** システムコレクションと同じ名前のコレクションを作成するユーザーを防ぐため、名前競合バリデーションを追加しました ([#5962](https://github.com/nocobase/nocobase/pull/5962)) by @chareice
* **[ワークフロー]** フィルターコンポーネントを除き、ほとんどすべての場所で日付範囲変数の誤用を避けます ([#5954](https://github.com/nocobase/nocobase/pull/5954)) by @mytharcher

#### 🐛 バグ修正

* **[データベース]**
  * filterByTkでフィルターパラメーターを使用してデータが削除できなかったdestroyアクションの問題を修正しました ([#5976](https://github.com/nocobase/nocobase/pull/5976)) by @chareice
  * リポジトリのfirstOrCreateとupdateOrCreateメソッドがコンテキストを失う問題を修正しました ([#5973](https://github.com/nocobase/nocobase/pull/5973)) by @chenos
* **[クライアント]**
  * フォームに一对一関係フィールドを追加する際の問題を修正しました ([#5975](https://github.com/nocobase/nocobase/pull/5975)) by @katherinehhh
  * データ削除後、再びデータを選択した際にサブテーブルでのフィールド割り当てに関する問題を修正しました ([#5958](https://github.com/nocobase/nocobase/pull/5958)) by @katherinehhh
  * データに'children'という名前のフィールドを含むとテーブルブロックエラーが発生する問題を修正しました ([#5951](https://github.com/nocobase/nocobase/pull/5951)) by @zhangzhonghe
* **[データソース：メイン]** unixTimestampフィールドのレガシーサポートに関する問題を修正しました ([#5967](https://github.com/nocobase/nocobase/pull/5967)) by @chareice
* **[ワークフロー]** マニュアルノードUI設定でサブ詳細ブロックがエラーを投げる問題を修正しました ([#5953](https://github.com/nocobase/nocobase/pull/5953)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.18](https://www.nocobase.com/ja/blog/v1.5.0-beta.18)

*リリース日：2024-12-27*

#### 🐛 バグ修正

* **[クライアント]**
  * 第三者プラグインでテーブルセルが予期せず表示される問題を修正しました ([#5934](https://github.com/nocobase/nocobase/pull/5934)) by @zhangzhonghe
  * ブロックテンプレート管理ページで削除ボタンが無効になる問題を修正しました ([#5922](https://github.com/nocobase/nocobase/pull/5922)) by @zhangzhonghe
* **[検証]**
  * 検証設定ページで編集ドロワーを開くと空のフォームフィールドになる問題を修正しました ([#5949](https://github.com/nocobase/nocobase/pull/5949)) by @chenos
* **[ワークフロー：カスタムアクションイベント]**
  * SQLiteでテストケースが失敗する問題を修正しました by @mytharcher
  * カスタムアクショントリガーのテストケースを修正しました by @mytharcher
* **[ワークフロー：プリアクションイベント]**
  * リクエストインターセプターのテストケースを修正しました by @mytharcher

### [v1.5.0-beta.19](https://www.nocobase.com/ja/blog/v1.5.0-beta.19)

*リリース日：2024-12-31*

#### 🐛 バグ修正

* **[クライアント]**
  * フィルターフォーム/アクションで日時ピッカーがshowTimeを設定しても時間ピッカーを表示しない問題を修正しました ([#5956](https://github.com/nocobase/nocobase/pull/5956)) by @katherinehhh
  * 関連フィールドをクリックしてもポップアップダイアログが開かない問題を修正しました ([#5972](https://github.com/nocobase/nocobase/pull/5972)) by @zhangzhonghe
* **[ワークフロー：レスポンスメッセージ]** 使用されていたパラメーター名が間違っていた問題を修正しました by @mytharcher

### v1.5.0-beta.20

*リリース日：2024-12-31*

#### 🎉 新機能

- **[[インポート Pro](https://docs-jp.nocobase.com/handbook/action-import-pro)]**: データのインポート機能を強化し、非同期インポート、百万行のレコードインポート、重複データの識別と処理、データの更新、およびワークフロートトリガーのサポートを追加します。
- **[[エクスポート Pro](https://docs-jp.nocobase.com/handbook/action-export-pro)]**: 非同期エクスポート、百万行レコードエクスポート、および添付エクスポートのサポートでデータエクスポート機能を強化します。

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供するプライベートなオープンソースのノーコードプラットフォームです。チームが迅速に変化に適応できるようにしつつ、コストを大幅に削減します。NocoBaseを数分で展開することで、数年の開発や多額の投資を避けることができます。

**NocoBaseに関する詳細を[こちらで確認](https://www.nocobase.com/)**
