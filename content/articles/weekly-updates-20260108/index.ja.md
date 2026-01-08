週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.33](https://www.nocobase.com/ja/blog/v1.9.33)

*リリース日：2026-01-04*

### 🎉 新機能

* **[client]** アプリがメンテナンス状態に入った際、プラグインで定義したメンテナンス表示コンポーネントを表示できるよう対応 ([#8252](https://github.com/nocobase/nocobase/pull/8252)) by @cgyrock
* **[ファイルマネージャー]** ストレージでファイル名のリネーム方法を設定できるように改善 ([#8231](https://github.com/nocobase/nocobase/pull/8231)) by @JAVA-LW
* **[ファイルストレージ：S3 (Pro)]** S3 Pro ストレージにリネーム方式の選択オプションを追加 by @mytharcher

### 🚀 機能改善

* **[マイグレーション管理]** マイグレーションのチェックや SQL ダウンロード、ログ表示形式、実行状況の可視化を含む操作体験を全体的に改善 by @cgyrock

### 🐛 不具合修正

* **[database]**
  * 多対多リレーションのデータ取得時に、through scope 条件が正しく適用されるよう修正 ([#8277](https://github.com/nocobase/nocobase/pull/8277)) by @2013xile
  * オブジェクト型 `appends` パラメータの処理を見直し、配列パラメータの上限を拡張 ([#8328](https://github.com/nocobase/nocobase/pull/8328)) by @mytharcher
* **[client]** 手動ノードのフォームで、多対多データセレクターのブロックメニューにエラーが発生する不具合を修正 ([#8282](https://github.com/nocobase/nocobase/pull/8282)) by @mytharcher
* **[非同期タスクマネージャー]** バックグラウンドタスクをキャンセルする際の表示メッセージを修正 ([#8245](https://github.com/nocobase/nocobase/pull/8245)) by @mytharcher
* **[ファイルマネージャー]** AWS S3 へ 5MB 超のファイルをアップロードするとエラーになる問題を修正 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) by @mytharcher
* **[ワークフロー]** 外部データソース更新後に、関連するデータテーブルイベントが無効になる不具合を修正 ([#8207](https://github.com/nocobase/nocobase/pull/8207)) by @cgyrock
* **[データテーブル：ツリー]** ツリーノードを一括作成した後に、パス情報が正しく更新されない問題を修正 ([#8267](https://github.com/nocobase/nocobase/pull/8267)) by @2013xile
* **[データソース：外部 PostgreSQL]** 外部データソース更新後に、関連イベントが無効になる問題を修正 by @cgyrock
* **[データソース：外部 Oracle]** 外部データソース更新後に、関連イベントが無効になる問題を修正 by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.6](https://www.nocobase.com/ja/blog/v2.0.0-beta.6)

*リリース日：2026-01-07*

### 🚀 機能改善

* **[ワークフロー：承認]** クエリパラメータを整理し、検索パフォーマンスを向上 by @mytharcher

### 🐛 不具合修正

* **[sdk]** トークン共有の仕組みを見直し、実装を改善 ([#8357](https://github.com/nocobase/nocobase/pull/8357)) by @chenos
* **[client]** フォームブロック内の外部データソースの関連テーブルで、リレーションフィールドのデータが正しく読み込まれない不具合を修正 ([#8356](https://github.com/nocobase/nocobase/pull/8356)) by @katherinehhh
* **[ワークフロー：ループノード]** 条件分岐内で失敗したノードの状態が上位の分岐に反映されず、処理が誤動作する問題を修正 ([#8360](https://github.com/nocobase/nocobase/pull/8360)) by @mytharcher
* **[権限管理]** リレーションフィールドでターゲットキーを用いた関連付けができるよう改善 ([#8352](https://github.com/nocobase/nocobase/pull/8352)) by @2013xile
* **[ワークフロー：Webhook トリガー]** サブアプリケーションで webhook リクエストが 404 エラーになる不具合を修正 by @mytharcher
* **[メール管理]** Outlook の返信処理がまれに中断される問題を修正 by @jiannx

### [v2.0.0-beta.5](https://www.nocobase.com/ja/blog/v2.0.0-beta.5)

*リリース日：2026-01-06*

### 🚀 機能改善

* **[client]** AI 編集タスクフォームのテキスト入力欄で、入力内容に応じて高さが自動調整されるよう改善 ([#8350](https://github.com/nocobase/nocobase/pull/8350)) by @heziqiang
* **[ワークフロー：承認]** 起案者のデータ範囲について、マイグレーション後に不整合を補正する処理を追加 by @mytharcher

### 🐛 不具合修正

* **[client]** 詳細・一覧・フォームブロックでページを切り替えた際に、フィールドや操作の権限が再計算されない不具合を修正 ([#8336](https://github.com/nocobase/nocobase/pull/8336)) by @gchust
* **[ワークフロー：承認]** 依存関係の不足により発生していたビルドエラーを修正 by @mytharcher

### [v2.0.0-beta.4](https://www.nocobase.com/ja/blog/v2.0.0-beta.4)

*リリース日：2026-01-05*

### 🐛 不具合修正

* **[操作：レコードインポート]** xlsx ファイルの非同期インポート時に一意制約エラーが発生した場合、エラーメッセージが正しく表示されない不具合を修正 ([#8342](https://github.com/nocobase/nocobase/pull/8342)) by @cgyrock
* **[操作：レコードエクスポート Pro]** メインアプリでインポート／エクスポート Pro プラグインが無効な場合に、サブアプリで非同期のインポート／エクスポート処理を実行するとエラーになる不具合を修正 by @cgyrock
* **[メール管理]** 「全員に返信」ボタンを表示し、データ範囲のフィルターでサブメールも対象にできるよう改善 by @jiannx

### [v2.0.0-beta.3](https://www.nocobase.com/ja/blog/v2.0.0-beta.3)

*リリース日：2026-01-05*

### 🚀 機能改善

* **[権限管理]** ネストされたリレーションフィールドを編集する際の権限チェックロジックを見直し、判定の精度を向上 ([#7856](https://github.com/nocobase/nocobase/pull/7856)) by @2013xile

### 🐛 不具合修正

* **[client]**`FilterAction` コンポーネントでリレーションフィールドが正しく表示されない不具合を修正 ([#8295](https://github.com/nocobase/nocobase/pull/8295)) by @mytharcher
* **[データソース：メインデータベース]** ビューテーブルのメタデータに、元のフィールド情報が正しく含まれるよう修正 ([#8337](https://github.com/nocobase/nocobase/pull/8337)) by @2013xile
* **[ワークフロー：承認]** 待ちタスクセンターでフィルターフィールドが正常に利用できない不具合を修正 by @mytharcher

### [v2.0.0-beta.2](https://www.nocobase.com/ja/blog/v2.0.0-beta.2)

*リリース日：2026-01-04*

### 🐛 不具合修正

* **[flow-engine]** モーダルを繰り返し開いた際に、状態が意図せず引き継がれてしまう不具合を修正 ([#8327](https://github.com/nocobase/nocobase/pull/8327)) by @gchust
* **[database]** オブジェクト型 `appends` パラメータの処理を見直し、パラメータ解析時の `arrayLimit` の上限を拡張 ([#8328](https://github.com/nocobase/nocobase/pull/8328)) by @mytharcher

### [v2.0.0-beta.1](https://www.nocobase.com/ja/blog/v2.0.0-beta.1)

*リリース日：2026-01-01*

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.63](https://www.nocobase.com/ja/blog/v2.0.0-alpha.63)

*リリース日：2026-01-07*

### 🚀 機能改善

* **[client]**
  * セル更新時にテーブル全体が再描画されてしまう挙動を改善 ([#8349](https://github.com/nocobase/nocobase/pull/8349)) by @katherinehhh
  * AI 編集タスクフォームのテキスト入力欄で、入力内容に応じて高さが自動調整されるよう改善 ([#8350](https://github.com/nocobase/nocobase/pull/8350)) by @heziqiang
* **[ワークフロー：承認]**
  * 起案者のデータ範囲について、マイグレーション後の不整合を補正する処理を追加 by @mytharcher
  * クエリパラメータを整理し、検索パフォーマンスを向上 by @mytharcher

### 🐛 不具合修正

* **[client]**
  * 詳細・一覧・フォームブロックでページを切り替えた際に、フィールドや操作の権限が再計算されない不具合を修正 ([#8336](https://github.com/nocobase/nocobase/pull/8336)) by @gchust
  * フォームブロック内の外部データソースの関連テーブルで、リレーションフィールドのデータが正しく読み込まれない不具合を修正 ([#8356](https://github.com/nocobase/nocobase/pull/8356)) by @katherinehhh
* **[sdk]** トークン共有の仕組みを見直し、実装を改善 ([#8357](https://github.com/nocobase/nocobase/pull/8357)) by @chenos
* **[権限管理]** リレーションフィールドでターゲットキーを用いた関連付けができるよう改善 ([#8352](https://github.com/nocobase/nocobase/pull/8352)) by @2013xile
* **[ワークフロー：ループノード]** 条件分岐内で失敗したノードの状態が上位の分岐に反映されず、処理が誤動作する問題を修正 ([#8360](https://github.com/nocobase/nocobase/pull/8360)) by @mytharcher
* **[ワークフロー：Webhook トリガー]** サブアプリケーションで webhook リクエストが 404 エラーになる不具合を修正 by @mytharcher
* **[ワークフロー：承認]** 依存関係の不足により発生していたビルドエラーを修正 by @mytharcher
* **[メール管理]** Outlook の返信処理がまれに中断される問題を修正 by @jiannx

### [v2.0.0-alpha.62](https://www.nocobase.com/ja/blog/v2.0.0-alpha.62)

*リリース日：2026-01-05*

### 🚀 機能改善

* **[権限管理]** ネストされたリレーションフィールドを変更する際の権限チェックロジックを見直し、判定をより適切に改善 ([#7856](https://github.com/nocobase/nocobase/pull/7856)) by @2013xile

### 🐛 不具合修正

* **[client]**
  * targetKey の選択可能フィールドに関する処理を修正 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
  * `FilterAction` コンポーネントでリレーションフィールドが正しく表示されない不具合を修正 ([#8295](https://github.com/nocobase/nocobase/pull/8295)) by @mytharcher
  * 編集中のサブテーブルで、リレーションフィールドの Select に設定される filter パラメータが誤っている問題を修正 ([#8335](https://github.com/nocobase/nocobase/pull/8335)) by @katherinehhh
* **[flow-engine]** モーダルを繰り返し開いた際に、状態が意図せず引き継がれてしまう不具合を修正 ([#8327](https://github.com/nocobase/nocobase/pull/8327)) by @gchust
* **[database]** オブジェクト型 `appends` パラメータの処理を見直し、パラメータ解析時の `arrayLimit` の上限を拡張 ([#8328](https://github.com/nocobase/nocobase/pull/8328)) by @mytharcher
* **[操作：レコードインポート]** xlsx ファイルの非同期インポート時に、一意制約エラーが発生した場合のエラーメッセージが正しく表示されない問題を修正 ([#8342](https://github.com/nocobase/nocobase/pull/8342)) by @cgyrock
* **[データソース：メインデータベース]** ビュー用テーブルのメタデータに、元のフィールド情報が含まれるよう対応 ([#8337](https://github.com/nocobase/nocobase/pull/8337)) by @2013xile
* **[操作：レコードエクスポート Pro]** メインアプリで Pro プラグインが無効な場合に、サブアプリの非同期インポート／エクスポート処理でエラーが発生する問題を修正 by @cgyrock
* **[ワークフロー：承認]** 待ちタスクセンターでフィルターフィールドが正常に動作しない不具合を修正 by @mytharcher
* **[メール管理]** 「全員に返信」ボタンを表示し、データ範囲のフィルターでサブメールも対象にできるよう改善 by @jiannx

### [v2.0.0-alpha.59](https://www.nocobase.com/ja/blog/v2.0.0-alpha.59)

*リリース日：2025-12-25*

### 🚀 機能改善

* **[flow-engine]**
  * 設定モード切り替え時の動作パフォーマンスを改善 ([#8241](https://github.com/nocobase/nocobase/pull/8241)) by @zhangzhonghe
  * runjs 環境で FormData オブジェクトを利用できるように対応 ([#8263](https://github.com/nocobase/nocobase/pull/8263)) by @gchust

### 🐛 不具合修正

* **[client]** 関連フィールドを遅延読み込みで表示する際、無限ループによりスタックオーバーフローが発生する不具合を修正 ([#8262](https://github.com/nocobase/nocobase/pull/8262)) by @zhangzhonghe
