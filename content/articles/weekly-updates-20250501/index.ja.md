週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.23](https://www.nocobase.com/en/blog/v1.6.23)

*リリース日：2025-04-23*

#### 🚀 改善点

* **[cli]**`nocobase upgrade`コマンドの内部ロジックを最適化しました ([#6754](https://github.com/nocobase/nocobase/pull/6754)) by @chenos
* **[テンプレート印刷]** データソースアクションコントロールをクライアントロールベースのアクセスコントロールに置き換えました by @sheldon66

#### 🐛 バグ修正

* **[cli]** アップグレード時に`package.json`を自動更新するようにしました ([#6747](https://github.com/nocobase/nocobase/pull/6747)) by @chenos
* **[client]**
  * 既に関連付けられたデータのフィルターが欠落していた問題を修正しました ([#6750](https://github.com/nocobase/nocobase/pull/6750)) by @katherinehhh
  * 木構造テーブルの「子を追加」ボタンのリンクルールに「現在のレコード」が欠落していた問題を修正しました ([#6752](https://github.com/nocobase/nocobase/pull/6752)) by @katherinehhh
* **[アクション: レコードのインポート]** フィールド権限を設定すると発生するインポートとエクスポートの例外を修正しました ([#6677](https://github.com/nocobase/nocobase/pull/6677)) by @aaaaaajie
* **[ブロック: Gantt]** カレンダーヘッダーの月表示で月が重なる問題を修正しました ([#6753](https://github.com/nocobase/nocobase/pull/6753)) by @katherinehhh
* **[アクション: レコードのエクスポート Pro]**
  * テーブルカラムを並べ替えた後にプロエクスポートボタンがフィルターパラメーターを失う問題を修正しました by @katherinehhh
  * フィールド権限を設定すると発生するインポートとエクスポートの例外を修正しました by @aaaaaajie
* **[ファイルストレージ: S3(Pro)]** アップロードされたファイルのレスポンスデータを修正しました by @mytharcher
* **[ワークフロー: 承認]** レコードのプリロード関連フィールドを修正しました by @mytharcher

### [v1.6.24](https://www.nocobase.com/en/blog/v1.6.24)

*リリース日：2025-04-24*

#### 🚀 機能改善

* **[クライアント]** アップロードメッセージを調整（[#6757](https://github.com/nocobase/nocobase/pull/6757)） by @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * `writableView` が false の場合、ビューコレクションでエクスポートアクションのみをサポート（[#6763](https://github.com/nocobase/nocobase/pull/6763)） by @katherinehhh
  * 作成フォーム内のサブフォーム / サブテーブル下の関連フィールド表示時に予期せぬ関連データが作成される問題（[#6727](https://github.com/nocobase/nocobase/pull/6727)） by @katherinehhh
  * フォーム内の多対多配列フィールドから関連テーブルデータを取得する際のデータ不正問題（[#6744](https://github.com/nocobase/nocobase/pull/6744)） by @2013xile

### [v1.6.25](https://www.nocobase.com/en/blog/v1.6.25)

*リリース日：2025-04-29*

#### 🎉 新機能

* **[未分類]** ライセンスキット用のパブリッシュ CI を追加しました。（[#6786](https://github.com/nocobase/nocobase/pull/6786)） by @jiannx
* **[データビジュアライゼーション: ECharts]** 棒グラフに「Y 軸反転」設定を追加しました。 by @2013xile

#### 🚀 機能改善

* **[ユーティリティ]** フィルターボタンのフィールドリストの高さを増やし、フィールドをソート・カテゴライズしました。（[#6779](https://github.com/nocobase/nocobase/pull/6779)） by @zhangzhonghe
* **[クライアント]** サブテーブルの追加ボタンのスタイルを最適化し、ページネーターを同行に配置するようにしました。（[#6790](https://github.com/nocobase/nocobase/pull/6790)） by @katherinehhh
* **[ファイルマネージャー]** OSS のタイムアウトオプションを追加し、デフォルトを 10 分に設定しました。（[#6795](https://github.com/nocobase/nocobase/pull/6795)） by @mytharcher
* **[パスワードポリシー]** パスワードの有効期限をデフォルトで「期限なし」に変更しました。 by @2013xile
* **[企業微信（WeCom）]** ユーザーのメールアドレスを更新する際に、個人メールよりも企業メールを優先するようにしました。 by @2013xile

#### 🐛 不具合修正

* **[クライアント]**
  * 折りたたみブロックで、関連フィールドの検索ボックスのクリアボタンをクリックしてもデータ範囲が削除されないように修正しました。（[#6782](https://github.com/nocobase/nocobase/pull/6782)） by @zhangzhonghe
  * 関連コレクションのフィールドを表示する際に、関連フィールドがデータを送信しない問題を修正しました。（[#6798](https://github.com/nocobase/nocobase/pull/6798)） by @katherinehhh
  * ページタブの前後にメニューを移動できないように禁止しました。（[#6777](https://github.com/nocobase/nocobase/pull/6777)） by @zhangzhonghe
  * テーブルブロックでフィルタリング時に重複データが表示される問題を修正しました。（[#6792](https://github.com/nocobase/nocobase/pull/6792)） by @zhangzhonghe
  * フィルターフォームで、フィールドの演算子を切り替えてからページを更新するとエラーが発生する問題を修正しました。（[#6781](https://github.com/nocobase/nocobase/pull/6781)） by @zhangzhonghe
* **[データベース]**
  * データ型が文字列でない場合にエラーが発生するのを回避しました。（[#6797](https://github.com/nocobase/nocobase/pull/6797)） by @mytharcher
  * SQL コレクションとビューコレクションに `unavailableActions` を追加しました。（[#6765](https://github.com/nocobase/nocobase/pull/6765)） by @katherinehhh
* **[create-nocobase-app]** mariadb の問題を一時的に修正するため、2.5.6 にダウングレードしました。（[#6762](https://github.com/nocobase/nocobase/pull/6762)） by @chenos
* **[認証]** 認証器の名前を変更できないようにしました。（[#6808](https://github.com/nocobase/nocobase/pull/6808)） by @2013xile
* **[テンプレート印刷]** 修正：不正なアクションを防止するため、権限検証ロジックを正しく修正しました。 by @sheldon66
* **[ファイルストレージ: S3 (Pro)]** アクセス URL の有効期限切れの設定が機能しない問題を修正しました。 by @jiannx
* **[ブロック：ツリー]** 外部キーで接続した後、クリックしてフィルタリングをトリガーするとフィルタ条件が空になる問題を修正しました。 by @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.22](https://www.nocobase.com/en/blog/v1.7.0-beta.22)

*リリース日：2025-04-24*

#### 🚀 機能改善

* **[cli]** `nocobase upgrade` コマンドの内部ロジックを最適化（[#6754](https://github.com/nocobase/nocobase/pull/6754)） by @chenos

#### 🐛 不具合修正

* **[クライアント]** 多段階関連データにおける連携ルールの表示問題（[#6755](https://github.com/nocobase/nocobase/pull/6755)） by @katherinehhh

### [v1.7.0-beta.23](https://www.nocobase.com/en/blog/v1.7.0-beta.23)

*リリース日：2025-04-24*

#### 🎉 新機能

* **[アクション：カスタムリクエスト]** カスタムリクエストアクションの成功メッセージにレスポンス変数をサポート（[#6694](https://github.com/nocobase/nocobase/pull/6694)） by @katherinehhh

#### 🚀 機能改善

* **[クライアント]** アップロードメッセージを調整（[#6757](https://github.com/nocobase/nocobase/pull/6757)） by @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * フォーム内の多対多配列フィールドから関連テーブルデータを取得する際のデータ不正問題（[#6744](https://github.com/nocobase/nocobase/pull/6744)） by @2013xile
  * `writableView` が false の場合、ビューコレクションでエクスポートアクションのみをサポート（[#6763](https://github.com/nocobase/nocobase/pull/6763)） by @katherinehhh
  * 作成フォーム内のサブフォーム / サブテーブル下の関連フィールド表示時に予期せぬ関連データが作成される問題（[#6727](https://github.com/nocobase/nocobase/pull/6727)） by @katherinehhh

### [v1.7.0-beta.24](https://www.nocobase.com/en/blog/v1.7.0-beta.24)

*リリース日：2025-04-25*

#### 🎉 新機能

* **[クライアント]** ブロック内で連携ルールを設定して動的に表示 / 非表示を制御できるようにサポート（[#6636](https://github.com/nocobase/nocobase/pull/6636)） by @katherinehhh

#### 🚀 機能改善

* **[クライアント]** 参照テンプレートの機能を維持（[#6743](https://github.com/nocobase/nocobase/pull/6743)） by @gchust
* **[データビジュアライゼーション]** フィールドインターフェイス設定の拡張 API を追加（[#6742](https://github.com/nocobase/nocobase/pull/6742)） by @2013xile

#### 🐛 不具合修正

* **[create-nocobase-app]** mariadb の問題を一時的に修正するため、2.5.6 にダウングレード（[#6762](https://github.com/nocobase/nocobase/pull/6762)） by @chenos
* **[データベース]** SQL コレクションとビューコレクションに `unavailableActions` を追加（[#6765](https://github.com/nocobase/nocobase/pull/6765)） by @katherinehhh
* **[クライアント]** URL のクエリパラメータ演算子の問題（[#6770](https://github.com/nocobase/nocobase/pull/6770)） by @katherinehhh
* **[ブロック：アクションパネル]** アイコンのみ表示時にアクションパネルのアイコンが表示されない問題（[#6773](https://github.com/nocobase/nocobase/pull/6773)） by @katherinehhh
* **[ワークフロー：日付計算ノード]** `Intl` API を持たない古いブラウザで発生するエラーを修正 by @mytharcher

### [v1.7.0-beta.25](https://www.nocobase.com/en/blog/v1.7.0-beta.25)

*リリース日：2025-04-28*

#### 🎉 新機能

* **[ファイルマネージャー]** 機能：ファイルストリーミングをサポートするための `getFileStream` API を追加しました。（[#6741](https://github.com/nocobase/nocobase/pull/6741)） by @sheldon66

#### 🚀 機能改善

* **[クライアント]** アクションアイコンにマウスをホバーすると、ツールチップでボタンのタイトルを表示するようにしました。（[#6761](https://github.com/nocobase/nocobase/pull/6761)） by @katherinehhh
* **[企業微信（WeCom）]** ユーザーのメールアドレスを更新する際に、個人メールよりも企業メールを優先するようにしました。 by @2013xile

#### 🐛 不具合修正

* **[ファイルストレージ: S3 (Pro)]** アクセス URL の有効期限切れの設定が機能しない問題を修正しました。 by @jiannx
* **[テンプレート印刷]** 修正：不正なアクションを防止するため、権限検証ロジックを正しく修正しました。 by @sheldon66
* **[ブロック：ツリー]** 外部キーで接続した後、クリックしてフィルタリングをトリガーするとフィルタ条件が空になる問題を修正しました。 by @zhangzhonghe

### [v1.7.0-beta.26](https://www.nocobase.com/en/blog/v1.7.0-beta.26)

*リリース日：2025-04-28*

#### 🎉 新機能

* **[未分類]** ライセンスキット用のパブリッシュ CI を追加しました。（[#6786](https://github.com/nocobase/nocobase/pull/6786)） by @jiannx

#### 🚀 機能改善

* **[ユーティリティ]** フィルターボタンのフィールドリストの高さを増やし、フィールドをソート / カテゴライズしました。（[#6779](https://github.com/nocobase/nocobase/pull/6779)） by @zhangzhonghe

#### 🐛 不具合修正

* **[クライアント]**
  * 折りたたみブロックで、関連フィールドの検索ボックスのクリアボタンをクリックしてもデータ範囲が削除されないように修正しました。（[#6782](https://github.com/nocobase/nocobase/pull/6782)） by @zhangzhonghe
  * フィルターフォームで、フィールドの演算子を切り替えてからページを更新するとエラーが発生する問題を修正しました。（[#6781](https://github.com/nocobase/nocobase/pull/6781)） by @zhangzhonghe
  * テーブルブロックでフィルタリング時に重複データが表示される問題を修正しました。（[#6792](https://github.com/nocobase/nocobase/pull/6792)） by @zhangzhonghe
  * ツリーテーブルの子レコード追加ボタンの位置合わせ問題を修正しました。（[#6791](https://github.com/nocobase/nocobase/pull/6791)） by @katherinehhh
  * ページタブの前後にメニューを移動できないように禁止しました。（[#6777](https://github.com/nocobase/nocobase/pull/6777)） by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.12](https://www.nocobase.com/ja/blog/v1.7.0-alpha.12)

*リリース日：2025-04-24*

#### 🚀 改善点

* **[cli]**`nocobase upgrade`コマンドの内部ロジックを最適化しました ([#6754](https://github.com/nocobase/nocobase/pull/6754)) by @chenos
* **[create-nocobase-app]** 依存関係をアップグレードし、SQLiteのサポートを削除しました ([#6708](https://github.com/nocobase/nocobase/pull/6708)) by @chenos
* **[モバイル]** モバイル日付ピッカーのポップアップの開く速度を最適化しました ([#6735](https://github.com/nocobase/nocobase/pull/6735)) by @zhangzhonghe
* **[ブロック: テンプレート]** テンプレートブロックを通常のブロックに変換する機能を追加しました ([#6662](https://github.com/nocobase/nocobase/pull/6662)) by @gchust
* **[ファイルマネージャー]** ユーティリティAPIを公開しました ([#6705](https://github.com/nocobase/nocobase/pull/6705)) by @mytharcher
* **[テーマエディター]** テーマ設定でサイドバーの幅を設定できるようになりました ([#6720](https://github.com/nocobase/nocobase/pull/6720)) by @chenos
* **[ワークフロー]** 変数のタイプセットに日付タイプを追加しました ([#6717](https://github.com/nocobase/nocobase/pull/6717)) by @mytharcher
* **[テンプレート印刷]** データソースアクションコントロールをクライアントロールベースのアクセスコントロールに置き換えました by @sheldon66

#### 🐛 バグ修正

* **[client]**
  * マルチレベルの関連データのリンクルールの表示問題を修正しました ([#6755](https://github.com/nocobase/nocobase/pull/6755)) by @katherinehhh
  * 木構造テーブルの「子を追加」ボタンのリンクルールに「現在のレコード」が欠落していた問題を修正しました ([#6752](https://github.com/nocobase/nocobase/pull/6752)) by @katherinehhh
  * 成功した提出の後にデータブロックが更新されない問題を修正しました ([#6748](https://github.com/nocobase/nocobase/pull/6748)) by @zhangzhonghe
  * 左メニューの折りたたみボタンがワークフローポップアップウィンドウに隠れる問題を修正しました ([#6733](https://github.com/nocobase/nocobase/pull/6733)) by @zhangzhonghe
  * モバイルトップナビゲーションバーのアイコンが削除しにくい問題を修正しました ([#6734](https://github.com/nocobase/nocobase/pull/6734)) by @zhangzhonghe
  * 「インデックス列を有効にする」の値表示が間違っていた問題を修正しました ([#6724](https://github.com/nocobase/nocobase/pull/6724)) by @katherinehhh
  * リンクルールで日時フィールドの条件が機能しない問題を修正しました ([#6728](https://github.com/nocobase/nocobase/pull/6728)) by @katherinehhh
  * リンクルールを再開する際にアクションオプションの制約が欠落していた問題を修正しました ([#6723](https://github.com/nocobase/nocobase/pull/6723)) by @katherinehhh
  * リンクルールによって隠された必須フィールドはフォームの提出に影響を与えないように修正しました ([#6709](https://github.com/nocobase/nocobase/pull/6709)) by @zhangzhonghe
  * 既に関連付けられたデータのフィルターが欠落していた問題を修正しました ([#6750](https://github.com/nocobase/nocobase/pull/6750)) by @katherinehhh
* **[server]** create-migrationによって生成されたappVersionが間違っていた問題を修正しました ([#6740](https://github.com/nocobase/nocobase/pull/6740)) by @chenos
* **[cli]** アップグレード時に`package.json`を自動更新するようにしました ([#6747](https://github.com/nocobase/nocobase/pull/6747)) by @chenos
* **[build]** tarコマンドで発生するエラーを修正しました ([#6722](https://github.com/nocobase/nocobase/pull/6722)) by @mytharcher
* **[ブロック: Gantt]** Ganttチャートブロックがカレンダーヘッダーで月が重なる問題を修正しました ([#6753](https://github.com/nocobase/nocobase/pull/6753)) by @katherinehhh
* **[アクション: レコードのインポート]** フィールド権限を設定すると発生するインポートとエクスポートの例外を修正しました ([#6677](https://github.com/nocobase/nocobase/pull/6677)) by @aaaaaajie
* **[ブロック: テンプレート]** MySQL環境でブロックテンプレートが使用できない問題を修正しました ([#6726](https://github.com/nocobase/nocobase/pull/6726)) by @gchust
* **[ワークフロー]** サブフローでスケジュールイベントを実行する際に発生するエラーを修正しました ([#6721](https://github.com/nocobase/nocobase/pull/6721)) by @mytharcher
* **[ワークフロー: カスタムアクションイベント]** 複数レコードモードで実行できるようにしました by @mytharcher
* **[アクション: レコードのエクスポート Pro]**
  * フィールド権限を設定すると発生するインポートとエクスポートの例外を修正しました by @aaaaaajie
  * テーブルカラムを並べ替えた後にプロエクスポートボタンがフィルターパラメーターを失う問題を修正しました by @katherinehhh
* **[ファイルストレージ: S3(Pro)]**
  * アップロードされたファイルのレスポンスデータを修正しました by @mytharcher
  * サーバーサイドアップロード用の multer 構築ロジックを追加しました by @mytharcher
* **[ワークフロー: 承認]** レコードのプリロード関連フィールドを修正しました by @mytharcher
