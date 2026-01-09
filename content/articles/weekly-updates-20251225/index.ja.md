週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.32](https://www.nocobase.com/ja/blog/v1.9.32)

*リリース日：2025-12-24*

### 🎉 新機能

* **[ワークフロー]** 「アプリケーションインスタンス ID」「Snowflake ID の生成」など、新しいシステム変数を追加 ([#8223](https://github.com/nocobase/nocobase/pull/8223)) by @mytharcher

### 🐛 不具合修正

* **[client]** 関連フィールドの遅延読み込み時に、無限ループが発生してスタックオーバーフローになる不具合を修正 ([#8262](https://github.com/nocobase/nocobase/pull/8262)) by @zhangzhonghe
* **[操作：レコードインポート]** インポート時にエラーが発生した場合でも、行番号が常に 1 と表示されてしまう問題を修正 ([#8244](https://github.com/nocobase/nocobase/pull/8244)) by @mytharcher
* **[ワークフロー：手動処理ノード]** 削除済みワークフローの実行計画をキャンセルする際にエラーが発生する不具合を修正 ([#8258](https://github.com/nocobase/nocobase/pull/8258)) by @mytharcher
* **[データテーブルフィールド：自動採番]** field-sequence プラグインの repair 実行時、存在しないコレクションが原因でエラーになる問題を修正 ([#8251](https://github.com/nocobase/nocobase/pull/8251)) by @cgyrock
* **[操作：レコードインポート Pro]** 重複フィールドのチェック処理を見直し、一意フィールドが null の場合にエラーを返すよう修正 by @mytharcher
* **[ワークフロー：承認]** 同一トランザクションを重複してロールバックしてしまう不具合を修正 by @mytharcher

### [v1.9.31](https://www.nocobase.com/ja/blog/v1.9.31)

*リリース日：2025-12-22*

### 🚀 機能改善

* **[非同期タスクマネージャー]** タスクのクリーンアップ処理に例外処理を追加し、アプリケーションのクラッシュを防いで安定性を向上 ([#8215](https://github.com/nocobase/nocobase/pull/8215)) by @mytharcher
* **[ワークフロー]** ワークフロー複製 API に、複製元ワークフローのインスタンスを指定できるパラメータを追加 ([#8225](https://github.com/nocobase/nocobase/pull/8225)) by @mytharcher

### 🐛 不具合修正

* **[client]** 連動ルールが未設定の場合でもエラーが発生しないよう修正 ([#8239](https://github.com/nocobase/nocobase/pull/8239)) by @zhangzhonghe
* **[部門]** 集約検索でユーザーを正しく特定できない不具合を修正 ([#8222](https://github.com/nocobase/nocobase/pull/8222)) by @2013xile

### [v1.9.30](https://www.nocobase.com/ja/blog/v1.9.30)

*リリース日：2025-12-19*

### 🚀 機能改善

* **[ワークフロー]** データテーブルイベントにおける「変更されたフィールド」設定の説明を見直し、誤解が生じにくい表現に改善 ([#8216](https://github.com/nocobase/nocobase/pull/8216)) by @mytharcher

### 🐛 不具合修正

* **[cli]** DB\_PASSWORD が未設定の場合でも license-kit が正しく動作するよう対応 ([#8220](https://github.com/nocobase/nocobase/pull/8220)) by @jiannx
* **[database]** メインデータソースと外部データソース間で、日付フィールドの検索結果が一致しない不具合を修正 ([#8181](https://github.com/nocobase/nocobase/pull/8181)) by @cgyrock
* **[ライセンス設定]** ライセンスプラグインの表示に関する不具合を修正 ([#8214](https://github.com/nocobase/nocobase/pull/8214)) by @jiannx
* **[ワークフロー：承認]**
  * 承認完了時にリレーションフィールドで不要な新規データが作成される不具合を修正 by @mytharcher
  * 承認完了時に多対多リレーションフィールドで不要な新規データが作成される不具合を修正 by @mytharcher

### [v1.9.29](https://www.nocobase.com/ja/blog/v1.9.29)

*リリース日：2025-12-18*

### 🐛 不具合修正

* **[ワークフロー]** メイン以外のワークフローバージョンを削除する際にエラーが発生する不具合を修正 ([#8203](https://github.com/nocobase/nocobase/pull/8203)) by @mytharcher
* **[マイグレーション管理]** ユーザー入力のマイグレーション説明が失われる不具合を修正し、未入力時は現在時刻をデフォルトの説明として設定するよう改善 by @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.58](https://www.nocobase.com/ja/blog/v2.0.0-alpha.58)

*リリース日：2025-12-24*

### 🐛 不具合修正

* **[AI 従業員]** LLM ノードのメッセージが正しく表示されない不具合を修正 ([#8257](https://github.com/nocobase/nocobase/pull/8257)) by @heziqiang

### [v2.0.0-alpha.57](https://www.nocobase.com/ja/blog/v2.0.0-alpha.57)

*リリース日：2025-12-24*

### 🎉 新機能

* **[ワークフロー]** 「アプリケーションインスタンス ID」「Snowflake ID の生成」など、新しいシステム変数を追加 ([#8223](https://github.com/nocobase/nocobase/pull/8223)) by @mytharcher

### 🚀 機能改善

* **[client]** 操作列の列幅設定を、選択式（Select）で指定できるように改善 ([#8218](https://github.com/nocobase/nocobase/pull/8218)) by @katherinehhh
* **[AI 従業員]** 初回編集後に送信しても反応しない不具合を解消し、内蔵 AI 従業員の整理と権限初期設定を実施。エラー処理や出力結果を改善するとともに、モーダルのコンテキスト変数対応、外部データソース対応を追加。大量データ処理時に会話内容が切り捨てられる問題も修正 ([#8191](https://github.com/nocobase/nocobase/pull/8191)) by @heziqiang
* **[ワークフロー]**
  * ワークフロー複製 API に、複製元ワークフローのインスタンスを指定できるパラメータを追加 ([#8225](https://github.com/nocobase/nocobase/pull/8225)) by @mytharcher
  * データテーブルイベントにおける「変更が発生したフィールド」の説明を見直し、誤解を防止 ([#8216](https://github.com/nocobase/nocobase/pull/8216)) by @mytharcher
* **[非同期タスクマネージャー]** タスクのクリーンアップ処理に例外処理を追加し、クラッシュ防止と安定性を向上 ([#8215](https://github.com/nocobase/nocobase/pull/8215)) by @mytharcher
* **[ブロック：操作パネル]** 設定画面でブロック／操作／フィールドを非表示にした場合の表示を改善 ([#8174](https://github.com/nocobase/nocobase/pull/8174)) by @katherinehhh
* **[UI テンプレート]** ブロックテンプレートおよびモーダルテンプレートを再利用できる UI テンプレートプラグインを追加 ([#8163](https://github.com/nocobase/nocobase/pull/8163)) by @gchust
* **[操作：レコードエクスポート Pro]** Import Pro／Export Pro ボタンに権限制御を追加 by @katherinehhh
* **[ワークフロー：承認]** フロー完了時に `approval.data` を最新の承認データへ更新し、「最新」表示モードに対応 by @mytharcher

### 🐛 不具合修正

* **[flow-engine]**
  * ツリーテーブルで子レコードを追加する際の権限判定不具合を修正 ([#8240](https://github.com/nocobase/nocobase/pull/8240)) by @katherinehhh
  * 一部ブロックのモーダルで、レコード関連変数が正しく表示されない問題を修正 ([#8060](https://github.com/nocobase/nocobase/pull/8060)) by @gchust
  * 操作やタブをドラッグ後に、新しく追加した操作やタブが表示されない問題を修正 ([#8224](https://github.com/nocobase/nocobase/pull/8224)) by @gchust
  * 外部データソースの権限判定に関する不具合を修正 ([#8221](https://github.com/nocobase/nocobase/pull/8221)) by @katherinehhh
  * 権限がある外部データソース操作が非表示になる問題を修正 ([#8217](https://github.com/nocobase/nocobase/pull/8217)) by @katherinehhh
* **[client]**
  * 連動ルールが未設定の場合でもエラーが発生しないよう対応 ([#8239](https://github.com/nocobase/nocobase/pull/8239)) by @zhangzhonghe
  * テーブルブロックの操作列を削除できない問題を修正 ([#8230](https://github.com/nocobase/nocobase/pull/8230)) by @gchust
  * プレビュー実行時に JSX のコンパイル結果が保存時に反映されてしまう問題を修正 ([#8171](https://github.com/nocobase/nocobase/pull/8171)) by @gchust
  * S3 Pro の添付ファイルアップロードエラーを修正し、プレビュー表示を改善 ([#8211](https://github.com/nocobase/nocobase/pull/8211)) by @katherinehhh
* **[cli]** DB\_PASSWORD が未設定の場合でも license-kit が動作するよう対応 ([#8220](https://github.com/nocobase/nocobase/pull/8220)) by @jiannx
* **[database]** メインデータソースと外部データソース間で、日付フィールドの検索結果が一致しない問題を修正 ([#8181](https://github.com/nocobase/nocobase/pull/8181)) by @cgyrock
* **[データテーブルフィールド：自動採番]** field-sequence プラグインの repair 実行時、存在しないコレクションによりエラーが発生する問題を修正 ([#8251](https://github.com/nocobase/nocobase/pull/8251)) by @cgyrock
* **[ワークフロー：手動処理ノード]** 削除済みワークフローの実行計画をキャンセルする際のエラーを修正 ([#8258](https://github.com/nocobase/nocobase/pull/8258)) by @mytharcher
* **[UI テンプレート]** リレーションフィールドのモーダルで、非リレーション用テンプレートを開くとエラーになる問題を修正 ([#8233](https://github.com/nocobase/nocobase/pull/8233)) by @gchust
* **[部門]** 集約検索でユーザーを正しく特定できない問題を修正 ([#8222](https://github.com/nocobase/nocobase/pull/8222)) by @2013xile
* **[データテーブルフィールド：多対多（配列）]** 対象キーが Snowflake ID（53 bits）の場合に、多対多（配列）フィールドを作成できない問題を修正 ([#8226](https://github.com/nocobase/nocobase/pull/8226)) by @2013xile
* **[認可設定]** 認可プラグインの表示不具合を修正 ([#8214](https://github.com/nocobase/nocobase/pull/8214)) by @jiannx
* **[操作：レコードインポート]** インポート時のエラーで、行番号が常に 1 と表示される問題を修正 ([#8244](https://github.com/nocobase/nocobase/pull/8244)) by @mytharcher
* **[テンプレート印刷]** 外部データソースに対応していないテンプレート印刷リクエストの不具合を修正 by @katherinehhh
* **[ワークフロー：承認]**
  * 同一トランザクションを重複してロールバックしてしまう問題を修正 by @mytharcher
  * 承認完了時にリレーションフィールドへ新規データが作成される問題を修正 by @mytharcher
  * 承認完了時に多対多リレーションフィールドへ新規データが作成される問題を修正 by @mytharcher

### [v2.0.0-alpha.56](https://www.nocobase.com/ja/blog/v2.0.0-alpha.56)

*リリース日：2025-12-18*

### 🚀 機能改善

* **[client]** テーブルの列幅設定で、任意の幅を直接入力できるように改善 ([#8200](https://github.com/nocobase/nocobase/pull/8200)) by @katherinehhh

### 🐛 不具合修正

* **[client]** 列幅調整時に、1 行の合計幅が制限を超えないようにする不具合を修正 ([#8166](https://github.com/nocobase/nocobase/pull/8166)) by @zhangzhonghe
* **[flow-engine]** モーダルの uid を再利用して開いた際、モーダル内フォーム送信後にブロックデータが更新されない不具合を修正 ([#8202](https://github.com/nocobase/nocobase/pull/8202)) by @gchust
* **[データテーブルフィールド：数式]** BigInt フィールドを詳細ブロックおよびフォームブロックに追加できない不具合を修正 ([#8201](https://github.com/nocobase/nocobase/pull/8201)) by @katherinehhh
* **[ワークフロー]** メイン以外のワークフローバージョン削除時にエラーが発生する不具合を修正 ([#8203](https://github.com/nocobase/nocobase/pull/8203)) by @mytharcher
