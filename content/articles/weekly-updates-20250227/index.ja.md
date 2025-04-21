週次の製品更新ログを要約し、最新のリリースは[私たちのブログ](https://www.nocobase.com/ja/blog/tags/release-notes)で確認できます。

**NocoBaseは現在、`main`、`next`、`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現在までの最も安定したバージョンで、インストールを推奨します。
* `next`：ベータ版で、今後の新機能を含み、初期テストが行われています。既知または未知の問題があるかもしれません。主にテストユーザー向けで、フィードバックを収集し、機能をさらに最適化するために使用されます。新機能を早期に体験し、フィードバックを提供したいテストユーザーに最適です。
* `develop`：アルファ版で、最新の機能コードを含み、未完成または不安定な場合があります。主に内部開発と迅速な反復のために使用されます。製品の最先端に興味がある技術ユーザーに適していますが、潜在的な問題や未完成の機能がある可能性があります。生産環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.11](https://www.nocobase.com/ja/blog/v1.5.11)

*リリース日：2025-02-20*

#### 🎉 新機能

- **[ワークフロー]** ワークフローの指示グループを拡張するサポート ([#6237](https://github.com/nocobase/nocobase/pull/6237)) by @mytharcher
  参考文献：[ノードグループの拡張](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)

#### 🐛 バグ修正

- **[クライアント]**

  - モバイルでの関連ブロックの関連アクションポップアップの問題 ([#6235](https://github.com/nocobase/nocobase/pull/6235)) by @katherinehhh
  - フィルターフォームフィールドのピッカー形式の不一致 ([#6234](https://github.com/nocobase/nocobase/pull/6234)) by @katherinehhh
  - 無効モードで `<Variable.TextArea />` コンポーネントを正しく表示 ([#6197](https://github.com/nocobase/nocobase/pull/6197)) by @mytharcher
  - アップロード後にファイルが欠落する問題を修正 ([#6247](https://github.com/nocobase/nocobase/pull/6247)) by @mytharcher
- **[ワークフロー]**

  - ワークフローキャンバスのスタイルの詳細を修正 ([#6240](https://github.com/nocobase/nocobase/pull/6240)) by @mytharcher
  - パスワード変更時にワークフローをトリガーするサポート ([#6248](https://github.com/nocobase/nocobase/pull/6248)) by @mytharcher

### [v1.5.12](https://www.nocobase.com/ja/blog/v1.5.12)

*リリース日：2025-02-21*

#### 🚀 改善

- **[ワークフロー]** ワークフローキャンバスのノードカードからノードIDを非表示にする ([#6251](https://github.com/nocobase/nocobase/pull/6251)) by @mytharcher

#### 🐛 バグ修正

- **[ファイルマネージャー]** MinIOアップロードバグを修正するためにAWS SDKバージョンをアップグレードする ([#6253](https://github.com/nocobase/nocobase/pull/6253)) by @mytharcher

### [v1.5.13](https://www.nocobase.com/ja/blog/v1.5.13)

*リリース日：2025-02-22*

#### 🐛 バグ修正

- **[client]** 一つずつアップロードしたファイルが消える問題を修正しました ([#6260](https://github.com/nocobase/nocobase/pull/6260)) by @mytharcher
- **[ワークフロー：アクション前イベント]** レスポンスメッセージノードからのエラーメッセージが表示されない問題を修正しました by @mytharcher

### [v1.5.14](https://www.nocobase.com/ja/blog/v1.5.14)

*リリース日：2025-02-24*

#### 🐛 バグ修正

- **[バックアップマネージャー]** 「ローカルバックアップ復元」操作ダイアログ内で、削除アイコンをクリックしてもファイルリストがクリアされません by @gchust

### [v1.5.15](https://www.nocobase.com/ja/blog/v1.5.15)

*リリース日：2025-02-25*

#### 🚀 改善

* **[ファイルマネージャー]**
  * URLの長さを1024に増やしました ([#6275](https://github.com/nocobase/nocobase/pull/6275)) by @mytharcher
  * アップロード時のファイル名がランダムから、ランダムサフィックス付きの元の名前に変更されます ([#6217](https://github.com/nocobase/nocobase/pull/6217)) by @chenos
* **[ブロック: アクションパネル]**
  * モバイルスタイルを最適化しました ([#6270](https://github.com/nocobase/nocobase/pull/6270)) by @zhangzhonghe

#### 🐛 バグ修正

* **[CLI]** Nocobaseアップグレードコマンドの内部ロジックを改善しました ([#6280](https://github.com/nocobase/nocobase/pull/6280)) by @chenos

### [v1.5.16](https://www.nocobase.com/ja/blog/v1.5.16)

*リリース日：2025-02-26*

#### 🚀 改善

* **[バックアップマネージャー]**
  * プラグインが一部欠けている場合でもアプリケーションにバックアップを復元できるようにしました ([#6287](https://github.com/nocobase/nocobase/pull/6287)) by @gchust

#### 🐛 バグ修正

* **[クライアント]**
  * リッチテキストフィールドコンポーネントが完全にクリアできない問題を修正しました ([#6287](https://github.com/nocobase/nocobase/pull/6287)) by @katherinehhh
* **[ファイルマネージャー]**
  * マイグレーションを修正し、テストケースを追加しました ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher
  * ファイルコレクションの `path` 列の型を修正しました ([#6294](https://github.com/nocobase/nocobase/pull/6294)) by @mytharcher
  * マイグレーションを修正し、テストケースを追加しました ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.6.0-beta.11

*リリース日：2025-02-27*

#### 🎉 新機能

* **[ワークフロー]** ワークフローの命令グループの拡張をサポートしました ([#6237](https://github.com/nocobase/nocobase/pull/6237)) by @mytharcher
  参考: [ノードグループの拡張](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)
* **[ワークフロー: カスタムアクションイベント]** グローバルまたは一括レコードでカスタムアクションイベントをトリガーする機能を追加しました ([#272](https://github.com/nocobase/pro-plugins/pull/272)) by @mytharcher
* **[クライアント]**
  * コレクションのプリセットフィールドの拡張をサポートしました ([#6183](https://github.com/nocobase/nocobase/pull/6183)) by @katherinehhh
  * フロントエンドフィルターオペレーターの拡張をサポートしました ([#6085](https://github.com/nocobase/nocobase/pull/6085)) by @katherinehhh
  * ブロックの説明プロパティの設定をサポートしました ([#6015](https://github.com/nocobase/nocobase/pull/6015)) by @katherinehhh
  * 添付ファイルのファイル名を表示するための `schemaSetting` を追加しました ([#5995](https://github.com/nocobase/nocobase/pull/5995)) by @katherinehhh
* **[カレンダー]** Kanban、カレンダー、フォーミュラフィールドプラグインのオプションフィールドの拡張をサポートしました ([#6076](https://github.com/nocobase/nocobase/pull/6076)) by @katherinehhh
* **[ローカライゼーション]** デスクトップとモバイルルートのローカライゼーションを追加しました ([#6180](https://github.com/nocobase/nocobase/pull/6180)) by @2013xile
* **[ブロック: アクションパネル]** モバイルアクションパネルのアイコン数を設定できるようにしました ([#6046](https://github.com/nocobase/nocobase/pull/6046)) by @katherinehhh
* **[WEBクライアント]** ページタブの権限設定とルート管理ページを追加しました ([#5955](https://github.com/nocobase/nocobase/pull/5955)) by @zhangzhonghe
  参考: [ルート](https://docs.nocobase.com/handbook/routes)
* **[認証]** トークンセキュリティ設定をサポートしました ([#5948](https://github.com/nocobase/nocobase/pull/5948)) by @sheldon66
  参考: [トークンセキュリティポリシー](https://docs.nocobase.com/handbook/token-policy)
* **[ワークフロー: 手動ノード]** ToDoブロックにタスクタイトル列を追加しました ([#6051](https://github.com/nocobase/nocobase/pull/6051)) by @mytharcher
* **[変数とシークレット]** 動的環境変数とシークレットの設定をサポートしました ([#5966](https://github.com/nocobase/nocobase/pull/5966)) by @katherinehhh

#### 🚀 改善

* **[コレクションフィールド: Markdown(Vditor)]** Vditor CDNを使用するのをローカルリソースに変更しました ([#6229](https://github.com/nocobase/nocobase/pull/6229)) by @chenos
* **[ワークフロー]** ワークフローキャンバスのノードカードからノードIDを隠しました ([#6251](https://github.com/nocobase/nocobase/pull/6251)) by @mytharcher
* **[クライアント]** ユーザーパーソナルセンターの拡張と改善を行いました ([#6213](https://github.com/nocobase/nocobase/pull/6213)) by @katherinehhh
* **[クライアント]**
  * ページタイトルをデフォルトでルートのタイトルを使用するようにしました ([#6188](https://github.com/nocobase/nocobase/pull/6188)) by @zhangzhonghe
  * `IconPicker`にさらに多くのアイコンを追加しました ([#5996](https://github.com/nocobase/nocobase/pull/5996)) by @katherinehhh
* **[サーバー]**
  * AesEncryptorをコアに移動しました ([#6132](https://github.com/nocobase/nocobase/pull/6132)) by @chenos
  * 1. クライアントのIPアドレスを抽出するサーバーミドルウェアを追加しました。
    2. IPがブロックされた場合の無限リロード問題を解決しました。
    3. ローカルデバッグ用にプロキシで`X-Forwarded-For` HTTPヘッダーを有効化しました ([#6069](https://github.com/nocobase/nocobase/pull/6069)) by @sheldon66
* **[ワークフロー]** バインドワークフロー設定をプラグインに移動しました ([#6143](https://github.com/nocobase/nocobase/pull/6143)) by @mytharcher
* **[データソースマネージャー]** テスト関数ログインを非同期に変更し、関連するテストケースを更新しました ([#6181](https://github.com/nocobase/nocobase/pull/6181)) by @sheldon66

#### 🐛 バグ修正

* **[クライアント]**
  * 埋め込みページでフィールドリンクポップアップを開くことができない問題を修正しました ([#6222](https://github.com/nocobase/nocobase/pull/6222)) by @gchust
  * サブページを閉じる際に複数のブロックデータリクエストがトリガーされる問題を修正しました ([#6233](https://github.com/nocobase/nocobase/pull/6233)) by @zhangzhonghe
  * フィルターフォームフィールドのピッカーフォーマットが一致しない問題を修正しました ([#6234](https://github.com/nocobase/nocobase/pull/6234)) by @katherinehhh
  * UIの関連フィールドサブメニューに一意のキーが欠落している問題を修正しました ([#6230](https://github.com/nocobase/nocobase/pull/6230)) by @gchust
  * `<Variable.TextArea />`コンポーネントを無効モードで正しく表示するように修正しました ([#6197](https://github.com/nocobase/nocobase/pull/6197)) by @mytharcher
  * ページの水平スクロールバーの問題を修正しました ([#6232](https://github.com/nocobase/nocobase/pull/6232)) by @katherinehhh
  * メールチャンネル設定フォームの入力フィールドでHTMLタグ文字が表示される問題を修正しました ([#6221](https://github.com/nocobase/nocobase/pull/6221)) by @sheldon66
  * モバイルで関連ブロックのアソシエートアクションポップアップの問題を修正しました ([#6235](https://github.com/nocobase/nocobase/pull/6235)) by @katherinehhh
  * アップロード後にファイルが表示されない問題を修正しました ([#6247](https://github.com/nocobase/nocobase/pull/6247)) by @mytharcher
  * CurrentUserProviderの認証エラーをスキップしました ([#6252](https://github.com/nocobase/nocobase/pull/6252)) by @sheldon66
* **[ワークフロー: ループノード]** ループノード内部の保留状態でループが早期に終了する問題を修正しました ([#6236](https://github.com/nocobase/nocobase/pull/6236)) by @mytharcher
* **[ファイルマネージャー]** MinIOアップロードのバグを修正するためにAWS SDKバージョンを更新しました ([#6253](https://github.com/nocobase/nocobase/pull/6253)) by @mytharcher
* **[モバイル]** モバイルメニューのデータが権限設定テーブルで不完全な問題を修正しました ([#6219](https://github.com/nocobase/nocobase/pull/6219)) by @zhangzhonghe
* **[ワークフロー]**
  * ワークフローキャンバスのスタイルの詳細を修正しました ([#6240](https://github.com/nocobase/nocobase/pull/6240)) by @mytharcher
  * パスワード変更時にワークフローをトリガーする機能を追加しました ([#6248](https://github.com/nocobase/nocobase/pull/6248)) by @mytharcher
* **[データビジュアライゼーション]** データソース名にハイフン`-`が含まれる場合にフィルターがエラーになる問題を修正しました ([#6231](https://github.com/nocobase/nocobase/pull/6231)) by @2013xile
* **[ワークフロー: 事前アクションイベント]** レスポンスメッセージノードからのエラーメッセージが表示されない問題を修正しました ([#277](https://github.com/nocobase/pro-plugins/pull/277)) by @mytharcher
* **[クライアント]** 1つずつアップロードしたファイルが表示されない問題を修正しました ([#6260](https://github.com/nocobase/nocobase/pull/6260)) by @mytharcher
* **[クライアント]** 「既存のデータから選択」オプションが「複数許可」を無効にした場合にまだ表示される問題を修正しました ([#6167](https://github.com/nocobase/nocobase/pull/6167)) by @katherinehhh
* **[認証]** コンカレンシーによってトークン更新が失敗する問題を防ぐために、クライアント認証ミドルウェアのロジックを更新しました ([#6135](https://github.com/nocobase/nocobase/pull/6135)) by @sheldon66
* **[WEBクライアント]**
  * アップグレード後にルーティング権限が異常になる問題を修正しました ([#6177](https://github.com/nocobase/nocobase/pull/6177)) by @zhangzhonghe
  * デフォルトのページタブタイトルを削除しました ([#6178](https://github.com/nocobase/nocobase/pull/6178)) by @zhangzhonghe
* **[データソースマネージャー]** loginWithJtiを使用して認証関連のテストケースを更新し、エラーを防止しました ([#6175](https://github.com/nocobase/nocobase/pull/6175)) by @sheldon66
* **[マルチアプリマネージャー]** サブアプリはメインアプリから始まる場合のみ、それをアップグレードします ([#6133](https://github.com/nocobase/nocobase/pull/6133)) by @chenos
* **[認証]** 発行されたトークンとトークンポリシーコンフィグのマイグレーションルールを更新しました ([#6107](https://github.com/nocobase/nocobase/pull/6107)) by @sheldon66
* **[ワークフロー]** DatePickerコンポーネントの値タイプを修正しました ([#6039](https://github.com/nocobase/nocobase/pull/6039)) by @mytharcher

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供するプライベートなオープンソースのノーコードプラットフォームです。チームが迅速に変化に適応できるようにしつつ、コストを大幅に削減します。NocoBaseを数分で展開することで、数年の開発や多額の投資を避けることができます。

**NocoBaseに関する詳細を[こちらで確認](https://www.nocobase.com/)**
