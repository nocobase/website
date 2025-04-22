週次の製品更新ログを要約し、最新のリリースは[私たちのブログ](https://www.nocobase.com/ja/blog/tags/release-notes)で確認できます。

**先週、[NocoBase 1.5.0バージョン](https://www.nocobase.com/ja/blog/nocobase-1-5-0)をリリースしました。これは、コアの最適化、大規模なデータのインポートとエクスポート、メール管理、テンプレート印刷など、多数の新機能をもたらします。**

**NocoBaseは現在、`main`、`next`、`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現在までの最も安定したバージョンで、インストールを推奨します。
* `next`：ベータ版で、今後の新機能を含み、初期テストが行われています。既知または未知の問題があるかもしれません。主にテストユーザー向けで、フィードバックを収集し、機能をさらに最適化するために使用されます。新機能を早期に体験し、フィードバックを提供したいテストユーザーに最適です。
* `develop`：アルファ版で、最新の機能コードを含み、未完成または不安定な場合があります。主に内部開発と迅速な反復のために使用されます。製品の最先端に興味がある技術ユーザーに適していますが、潜在的な問題や未完成の機能がある可能性があります。生産環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.1](https://www.nocobase.com/ja/blog/v1.5.1)

*リリース日：2025-02-06*

#### 🐛 バグ修正

* **[クライアント]**
  * `サブフォーム（ポップオーバー）`のタイトルの翻訳が正しくない問題を修正しました ([#6159](https://github.com/nocobase/nocobase/pull/6159)) by @gchust
  * サブフォームフィールドが「非表示（予約値）」に設定されている場合、デフォルト値の変数が正しく機能しない問題を修正しました ([#6165](https://github.com/nocobase/nocobase/pull/6165)) by @zhangzhonghe

### [v1.5.2](https://www.nocobase.com/ja/blog/v1.5.2)

*リリース日：2025-02-06*

#### 🚀 改善

* **[モバイル]** 設定権限がない場合、モバイル設定ページのヘッダーを隠します ([#6171](https://github.com/nocobase/nocobase/pull/6171)) by @zhangzhonghe

#### 🐛 バグ修正

* **[ワークフロー: 通知ノード]** ユーザー入力に Handlebars のような構文が含まれている場合でも、通知が正しく送信されるようにしました ([#6164](https://github.com/nocobase/nocobase/pull/6164)) by @sheldon66
* **[ワークフロー: 手動ノード]** ターミナルボタンの送信時にフォーム値が解析されない問題を修正しました ([#6160](https://github.com/nocobase/nocobase/pull/6160)) by @mytharcher

### [v1.5.3](https://www.nocobase.com/ja/blog/v1.5.3)

*リリース日：2025-02-07*

#### 🐛 バグ修正

* **[クライアント]**
  * belongsToArrayフィールドをクリックして開いたポップアップが間違ったデータを取得する問題を修正しました ([#6173](https://github.com/nocobase/nocobase/pull/6173)) by @zhangzhonghe
  * フィルターフォームで時間フィールドの演算子を「between」に設定した場合、コンポーネントが時間範囲ピッカーに変更されない問題を修正しました ([#6170](https://github.com/nocobase/nocobase/pull/6170)) by @katherinehhh
  * カンバンとカレンダーブロックのポップアップ編集フォームに「保存されていない変更」が表示されない問題を修正しました ([#6172](https://github.com/nocobase/nocobase/pull/6172)) by @katherinehhh

### [v1.5.4](https://www.nocobase.com/ja/blog/v1.5.4)

*リリース日：2025-02-10*

#### 🚀 改善

- **[ワークフロー]** 複製アクションにローディングを追加 ([#6179](https://github.com/nocobase/nocobase/pull/6179)) by @mytharcher

#### 🐛 バグ修正

- **[クライアント]**

  - ノードフィールド設定の作成時に発生するエラーを修正 ([#6187](https://github.com/nocobase/nocobase/pull/6187)) by @mytharcher
  - フィルターフォームにおいて、関連フィールドの「複数選択を許可」設定が表示されない ([#6174](https://github.com/nocobase/nocobase/pull/6174)) by @zhangzhonghe
  - リンクルールによって隠されたフィールドが隠れたままになる ([#6182](https://github.com/nocobase/nocobase/pull/6182)) by @zhangzhonghe
- **[ユーティリティ]** ストレージ/プラグインの読み取りロジックを最適化 ([#6186](https://github.com/nocobase/nocobase/pull/6186)) by @chenos
- **[通知：アプリ内メッセージ]** 修正：チャネルリストAPIのメッセージのタイムスタンプとタイトルのサブクエリにユーザーフィルターを追加し、データの隔離を確保。 ([#6185](https://github.com/nocobase/nocobase/pull/6185)) by @deepure
- **[バックアップマネージャー]** 容認モードの復元中にバックアップからアップロードフォルダーにファイルがコピーされなかった by @gchust

### [v1.5.5](https://www.nocobase.com/ja/blog/v1.5.5)

*リリース日：2025-02-11*

#### 🚀 改善

- **[通知：アプリ内メッセージ]** アプリ内チャネルで最新のメッセージタイトルとタイムスタンプを取得するテストを追加しました。 ([#6189](https://github.com/nocobase/nocobase/pull/6189)) by @sheldon66

### [v1.5.6](https://www.nocobase.com/ja/blog/v1.5.6)

*リリース日：2025-02-12*

#### 🐛 バグ修正

- **[クライアント]**

  - ページナビゲーション後にブロックが更新されない ([#6200](https://github.com/nocobase/nocobase/pull/6200)) by @zhangzhonghe
  - テーブル行のポップアップアクションで作成フォームを追加する際、フォームブロックが表示されない ([#6190](https://github.com/nocobase/nocobase/pull/6190)) by @katherinehhh
  - データがない場合、テーブルブロックの高さ設定が適用されない ([#6192](https://github.com/nocobase/nocobase/pull/6192)) by @katherinehhh
- **[アクション：カスタムリクエスト]**

  - カスタムリクエストボタンの「現在のレコード」変数の値が不正確 ([#6196](https://github.com/nocobase/nocobase/pull/6196)) by @zhangzhonghe
  - カスタムリクエストボタンがレガシー変数と互換性がない ([#6194](https://github.com/nocobase/nocobase/pull/6194)) by @zhangzhonghe
- **[データ可視化]** アクションパネルのポップアップに追加したチャートブロックが表示されない ([#6198](https://github.com/nocobase/nocobase/pull/6198)) by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.4](https://www.nocobase.com/ja/blog/v1.6.0-beta.4)

*リリース日：2025-02-11*

#### 🚀 改善

- **[バックアップマネージャー]** UI から耐障害モードを削除 by @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.21](https://www.nocobase.com/ja/blog/v1.6.0-alpha.21)

*リリース日：2025-02-07*

#### 🎉 新機能

* **[IP 制限]** IP 制限設定が存在しない場合のアプリエラーを修正しました。 by @sheldon66

#### 🐛 バグ修正

* **[認証]** 複数要求によるトークン更新の失敗を防ぐために、クライアント認証ミドルウェアのロジックを更新しました ([#6135](https://github.com/nocobase/nocobase/pull/6135)) by @sheldon66

### [v1.6.0-alpha.23](https://www.nocobase.com/ja/blog/v1.6.0-alpha.23)

*リリース日：2025-02-07*

#### 🐛 バグ修正

* **[クライアント]** 複数関連サブフォームで「Allow multiple」を無効化した場合、「既存のデータから選択」オプションがまだ表示される問題を修正しました ([#6167](https://github.com/nocobase/nocobase/pull/6167)) by @katherinehhh
* **[データソースマネージャー]** 認証関連のテストケースを更新し、loginWithJtiを使用してエラーを防止しました ([#6175](https://github.com/nocobase/nocobase/pull/6175)) by @sheldon66
* **[WEBクライアント]** アップグレード後、ルーティング権限が異常になる問題を修正しました ([#6177](https://github.com/nocobase/nocobase/pull/6177)) by @zhangzhonghe

### [v1.6.0-alpha.24](https://www.nocobase.com/ja/blog/v1.6.0-alpha.24)

*リリース日：2025-02-11*

#### 🎉 新機能

- **[ローカリゼーション]** デスクトップおよびモバイルルートのローカリゼーション ([#6180](https://github.com/nocobase/nocobase/pull/6180)) by @2013xile

#### 🚀 改善

- **[クライアント]** ページタイトルはルートのタイトルをデフォルトで使用します ([#6188](https://github.com/nocobase/nocobase/pull/6188)) by @zhangzhonghe
- **[データソースマネージャー]** テスト関数loginを非同期に変更し、関連するテストケースを更新します。 ([#6181](https://github.com/nocobase/nocobase/pull/6181)) by @sheldon66
- **[ワークフロー：カスタムアクションイベント]** 関連するテストケースを非同期loginを使用するように更新します。 by @sheldon66
- **[ワークフロー：承認]** 関連するテストケースを非同期loginを使用するように更新します。 by @sheldon66

#### 🐛 バグ修正

- **[WEBクライアント]** デフォルトのページタブタイトルを削除します ([#6178](https://github.com/nocobase/nocobase/pull/6178)) by @zhangzhonghe

## NocoBaseについて

NocoBaseは、完全なコントロールと無限のスケーラビリティを提供するプライベートなオープンソースのノーコードプラットフォームです。チームが迅速に変化に適応できるようにしつつ、コストを大幅に削減します。NocoBaseを数分で展開することで、数年の開発や多額の投資を避けることができます。

**NocoBaseに関する詳細を[こちらで確認](https://www.nocobase.com/)**
