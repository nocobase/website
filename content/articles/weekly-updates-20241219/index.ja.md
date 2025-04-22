毎週の製品更新ログを要約し、最新のリリースは[当社のブログ](https://www.nocobase.com/ja/blog/tags/release-notes)で確認できます。

**現在のNocoBaseの更新は、`main`、`next`、および `develop`の3つのブランチが含まれます。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現在までに最も安定したバージョンであり、インストールを推奨します。
* `next`：ベータ版で、今後の新機能が含まれており、初期テストが行われています。既知または未知の問題が存在する可能性があります。主にテストユーザーからのフィードバックを収集し、さらなる機能の最適化を目的としています。新機能を早期に体験し、フィードバックを提供したいテストユーザーに最適です。
* `develop`：アルファ版で、最新の機能コードが含まれており、不完全または不安定である可能性が高く、主に内部開発および迅速な反復に使用されます。製品の最先端に興味のある技術ユーザー向けですが、多くの問題や不完全な機能がある可能性があるため、プロダクション環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.9](https://www.nocobase.com/ja/blog/v1.4.9)

*リリース日： 2024-12-12*

#### 🐛 バグ修正

* **[sdk]** デフォルトのロケールを削除 ([#5867](https://github.com/nocobase/nocobase/pull/5867)) by @chenos
* **[クライアント]**
  * データスコープ内のネストされた関連フィールド変数が空値になる問題を修正 ([#5866](https://github.com/nocobase/nocobase/pull/5866)) by @zhangzhonghe
  * 右側に固定された列がある場合に少数の列でスクロールバーが表示される問題を修正 ([#5864](https://github.com/nocobase/nocobase/pull/5864)) by @katherinehhh
  * `FilterItem` コンポーネントの位置スタイルが間違っている問題を修正 ([#5851](https://github.com/nocobase/nocobase/pull/5851)) by @mytharcher
* **[バックアップマネージャー]** カスタムドメインを持つサブアプリのバックアップダウンロード失敗を修正 by @gchust

### [v1.4.10](https://www.nocobase.com/ja/blog/v1.4.10)

*リリース日： 2024-12-12*

#### 🎉 新機能

* **[アクション：カスタムリクエスト]** カスタムリクエストボタンで「現在のフォーム」変数を使用するサポートを追加 ([#5871](https://github.com/nocobase/nocobase/pull/5871)) by @zhangzhonghe

#### 🚀 改善点

* **[データビジュアライゼーション]** チャートのクエリ設定で外部キーを使用できるようにする ([#5869](https://github.com/nocobase/nocobase/pull/5869)) by @2013xile

#### 🐛 バグ修正

* **[クライアント]** ファイル選択を使用時にファイルテーブルセレクターが非設定モードで表示されない問題を修正 ([#5874](https://github.com/nocobase/nocobase/pull/5874)) by @katherinehhh
* **[アクセス制御]** 権限設定後のレプリケーションレコードに関する問題を修正 ([#5839](https://github.com/nocobase/nocobase/pull/5839)) by @chareice
* **[ワークフロー]** 自動削除時のトランザクションタイムアウトを修正 ([#5870](https://github.com/nocobase/nocobase/pull/5870)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.7](https://www.nocobase.com/ja/blog/v1.5.0-beta.7)

*リリース日：2024-12-13*

#### 🚀 改善点

* **[認証]** 監査アクションのメタデータ取得ロジックを最適化しました。([#5814](https://github.com/nocobase/nocobase/pull/5814)) by @chenzhizdt

#### 🐛 バグ修正

* **[データビジュアライゼーション]** チャートブロックの初期高さを修正しました。([#5879](https://github.com/nocobase/nocobase/pull/5879)) by @2013xile
* **[ワークフロー]** 手動実行のワークフローで非同期ノード再開時にスローされるエラーを修正しました。([#5877](https://github.com/nocobase/nocobase/pull/5877)) by @mytharcher

### [v1.5.0-beta.9](https://www.nocobase.com/ja/blog/v1.5.0-beta.9)

*リリース日：2024-12-15*

#### 🎉 新機能

* **[モバイル]** モバイルですべてのバックボタンを制御するグローバルスイッチを追加（デフォルトで有効）([#5868](https://github.com/nocobase/nocobase/pull/5868)) by @katherinehhh

#### 🐛 バグ修正

* **[ユーザーデータ同期]** 同期ボタンとタスクボタンの表示問題を修正。([#5896](https://github.com/nocobase/nocobase/pull/5896)) by @2013xile

### [v1.5.0-beta.10](https://www.nocobase.com/ja/blog/v1.5.0-beta.10)

*リリース日：2024-12-18*

#### 🚀 改善点

* **[モバイル]** モバイル向けに時間・日付範囲ピッカーコンポーネントを適応 ([#5863](https://github.com/nocobase/nocobase/pull/5863)) by @katherinehhh

#### 🐛 バグ修正

* **[データソース：メイン]** フィルターフォームブロック内のシステムフィールドが編集できない問題を修正 ([#5885](https://github.com/nocobase/nocobase/pull/5885)) by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.5](https://www.nocobase.com/ja/blog/v1.6.0-alpha.5)

*リリース日：2024-12-11*

#### 🐛 バグ修正

* **[クライアント]**
  * ページを切り替えた後、ブラウザタブのタイトルが更新されない問題を修正 ([#5857](https://github.com/nocobase/nocobase/pull/5857)) by @zhangzhonghe
  * データソース管理ページでページを更新するとホームページにリダイレクトされる問題を修正 ([#5855](https://github.com/nocobase/nocobase/pull/5855)) by @zhangzhonghe
  * サブテーブルのページネーション後、データが変わらない問題を修正 ([#5856](https://github.com/nocobase/nocobase/pull/5856)) by @zhangzhonghe
  * ユーザー管理テーブルにロールデータが表示されない問題を修正 ([#5846](https://github.com/nocobase/nocobase/pull/5846)) by @zhangzhonghe
  * リファレンステンプレート内の関連フィールドが時々データを表示しない問題を修正 ([#5848](https://github.com/nocobase/nocobase/pull/5848)) by @zhangzhonghe
  * 「カスタムリクエスト」ボタンが追加された後すぐに表示されない問題を修正 ([#5845](https://github.com/nocobase/nocobase/pull/5845)) by @zhangzhonghe
  * 非表示ページが他のページとの相互作用に影響を及ぼさないよう予防策をとる ([#5836](https://github.com/nocobase/nocobase/pull/5836)) by @zhangzhonghe
  * ポップアップウィンドウに追加されたブロックがポップアップを再開した際に表示されない問題を修正 ([#5838](https://github.com/nocobase/nocobase/pull/5838)) by @zhangzhonghe
* **[サーバー]** ACLのデフォルト利用可能なアクションを設定 ([#5847](https://github.com/nocobase/nocobase/pull/5847)) by @chenos

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供するプライベートなオープンソースのノーコードプラットフォームです。チームが迅速に変化に適応できるようにしつつ、コストを大幅に削減します。NocoBaseを数分で展開することで、数年の開発や多額の投資を避けることができます。

**NocoBaseに関する詳細を[こちらで確認](https://www.nocobase.com/)**
