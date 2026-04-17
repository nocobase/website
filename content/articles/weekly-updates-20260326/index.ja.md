週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.26](https://www.nocobase.com/ja/blog/v2.0.26)

*リリース日：2026-03-25*

### 🚀 機能改善

* **[client]** フォームボタンの横並びレイアウトを改善しました ([#8869](https://github.com/nocobase/nocobase/pull/8869)) by @jiannx

### 🐛 不具合修正

* **[flow-engine]** フォームフィールド削除時に、状態がフィールド設定へ正しく同期されるよう修正しました ([#8857](https://github.com/nocobase/nocobase/pull/8857)) by @jiannx
* **[カスタム変数]** 公開フォーム送信後に No permissions エラーが発生する問題を修正しました ([#8942](https://github.com/nocobase/nocobase/pull/8942)) by @chenos

### [v2.0.25](https://www.nocobase.com/ja/blog/v2.0.25)

*リリース日：2026-03-24*

### 🚀 機能改善

* **[ワークフロー：承認]** 承認処理の記録リスト読み込み時に、JSON フィールド起因のパフォーマンス問題を改善 by @mytharcher

### 🐛 不具合修正

* **[server]** Pub-Sub の停止タイミングを `beforeStop` に変更し、データベース停止後にメッセージ送信や処理が行われてしまう問題を回避 ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher
* **[ローカライズ]** 権限がない場合に localizationTexts:missing API が呼び出されてしまう問題を修正 ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos
* **[データソース：外部 Oracle]** Oracle データソースの読み込みエラーを修正 by @2013xile

### [v2.0.24](https://www.nocobase.com/ja/blog/v2.0.24)

*リリース日：2026-03-22*

### 🐛 不具合修正

* **[resourcer]** 外部データソースを正しく読み込めない不具合を修正 ([#8929](https://github.com/nocobase/nocobase/pull/8929)) by @2013xile
* **[操作：レコードインポート Pro]** 「ワークフローをトリガーする」オプションが未選択でも、ワークフローがトリガーされる不具合を修正 by @mytharcher

### [v2.0.23](https://www.nocobase.com/ja/blog/v2.0.23)

*リリース日：2026-03-21*

### 🐛 不具合修正

* **[database]** 追加関連データのパラメータが不正な場合、警告ログを出力して該当フィールドをスキップし、エラーで処理が実行できなくなる問題を回避 ([#8923](https://github.com/nocobase/nocobase/pull/8923)) by @mytharcher
* **[ワークフロー：承認]** v2 承認フォームの差し戻しボタンの翻訳、ノード選択、差し戻し先に関する問題を修正 by @zhangzhonghe

### [v2.0.22](https://www.nocobase.com/ja/blog/v2.0.22)

*リリース日：2026-03-20*

### 🐛不具合修正

* **[移行管理]** マイグレーションのアップロード時、対象環境に新規作成対象のテーブルが存在しないことでエラーが発生し、移行が中断される問題を修正 by @Andrew1989Y

### [v2.0.21](https://www.nocobase.com/ja/blog/v2.0.21)

*リリース日：2026-03-20*

### 🚀 機能改善

* **[ワークフロー]** 実行記録一覧にフィルタ機能を追加 ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher
* **[ワークフロー：承認]** トリガーでデータテーブルが設定されていない場合、承認者設定画面を利用できないように対応 by @mytharcher

### 🐛 不具合修正

* **[resourcer]**`filterByTk` パラメータの配列要素が 100 件を超えた際、自動的にオブジェクトへ変換される問題を回避 ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile
* **[client]** 非管理者が関連フィールド値をクリアできない問題を修正 ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx
* **[操作：インポート記録 Pro]**
  * 同期モードでインポート時にエラーが発生する問題を修正 by @mytharcher
  * ファイルストリームの重複読み取りにより、約 30 列を超えるファイルのインポートでエラーが発生する問題を修正 by @mytharcher
* **[ワークフロー：承認]** 追加承認時の同時実行に関する問題を修正 by @mytharcher

### [v2.0.20](https://www.nocobase.com/ja/blog/v2.0.20)

*リリース日：2026-03-19*

### 🐛 不具合修正

* **[server]** ワーカープロセスがアプリケーションライフサイクルイベントを送信することで、サービスインスタンスが停止してしまう問題を修正 ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher
* **[データソース管理]** AI 従業員が作成したデータテーブルで、「作成者」「更新者」フィールドが常に欠けている問題を修正 ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock
* **[操作：インポート記録 Pro]** 遅延読み込みによって発生する SES エラーを修正 by @mytharcher
* **[テンプレート印刷]** SQL データテーブルの印刷時にエラーが発生する問題を修正 by @jiannx
* **[メール管理]** メールが存在しない場合にページでエラーになる問題を修正 by @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.11](https://www.nocobase.com/ja/blog/v2.1.0-beta.11)

*リリース日：2026-03-20*

### 🚀 機能改善

* **[ワークフロー]** 実行記録一覧にフィルタ機能を追加 ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher
* **[ワークフロー：承認]** トリガーでデータテーブルが設定されていない場合、承認者設定画面を利用できないように対応 by @mytharcher

### 🐛 不具合修正

* **[server]** ワーカープロセスがアプリケーションライフサイクルイベントを送信することで、サービスインスタンスが停止してしまう問題を修正 ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher
* **[client]** 非管理者が関連フィールド値をクリアできない問題を修正 ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx
* **[resourcer]**`filterByTk` パラメータの配列要素が 100 件を超えた際、自動的にオブジェクトへ変換される問題を回避 ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile
* **[操作：インポート記録 Pro]**
  * 同期モードでインポート時にエラーが発生する問題を修正 by @mytharcher
  * ファイルストリームの重複読み取りにより、約 30 列を超えるファイルのインポートでエラーが発生する問題を修正 by @mytharcher
* **[ワークフロー：承認]** 追加承認時の同時実行に関する問題を修正 by @mytharcher
* **[移行管理]** マイグレーションのアップロード時、対象環境に新規作成対象のテーブルが存在しないことでエラーが発生し、移行が中断される問題を修正 by @Andrew1989Y

### [v2.1.0-beta.10](https://www.nocobase.com/ja/blog/v2.1.0-beta.10)

*リリース日：2026-03-19*

### 🎉 新機能

* **[AI 従業員]**
  * サブテーブルのポップアップ内で AI 従業員を追加できるように対応 ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile
  * AI 会話のチェックポイントデータを定期的に削除する機能を追加 ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock
* **[アプリケーション管理]** アプリ一覧のフィルタに対応<br />起動・停止時に確認ダイアログを追加<br />アプリ状態を環境名順に並び替えるよう改善 by @2013xile

### 🚀 機能改善

* **[server]** pm add のロジックを改善 ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos
* **[undefined]** README.zh-CN.md を改善 ([#8866](https://github.com/nocobase/nocobase/pull/8866)) by @gaston98765
* **[client]** ポップアップを閉じる際の確認メッセージを無効にできるように対応 ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust
* **[ワークフロー]** 正常終了時に、メモリ内のイベントが最後まで処理されない問題を修正 ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher
* **[非同期タスクマネージャー]** 非同期タスクで worker からエラーメッセージを送信できるように対応 ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock

### 🐛 不具合修正

* **[client]**
  * サブテーブル内の「データを選択」ポップアップで、再度開いた際に正しく読み込めない問題を修正 ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust
  * 一部フィールドのデフォルト値が、ページ更新後に反映されない問題を修正 ([#8834](https://github.com/nocobase/nocobase/pull/8834)) by @gchust
* **[database]** サーバー側の日付フィールド検証の不具合を修正 ([#8867](https://github.com/nocobase/nocobase/pull/8867)) by @2013xile
* **[データソース管理]** AI 従業員が作成したデータテーブルで、「作成者」「更新者」フィールドが常に欠けている問題を修正 ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock
* **[AI 従業員]**
  * LLM サービスで指定した URL が、テキスト埋め込みモデル呼び出し時に反映されない問題を修正 ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock
  * AI プラグインのアップグレード用マイグレーションスクリプトで発生する可能性のある変数未定義エラーを修正 ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock
* **[ローカライズ]** localizationTexts:missing インターフェースの権限エラーを修正 ([#8861](https://github.com/nocobase/nocobase/pull/8861)) by @jiannx
* **[操作：インポート記録 Pro]**
  * サブアプリでインポート処理後に `beforeStop` イベントが発火しない問題を修正 by @mytharcher
  * 遅延読み込みによって発生する SES エラーを修正 by @mytharcher
  * 非同期インポートでエラー発生後に非同期タスクが終了しない問題を修正 by @cgyrock
* **[AI: ナレッジベース]** 使用中のベクトルライブラリに紐づくベクトルストレージが削除されないように対応 by @cgyrock
* **[テンプレート印刷]** SQL データテーブルの印刷時にエラーが発生する問題を修正 by @jiannx
* **[メール管理]** メールが存在しない場合にページでエラーになる問題を修正 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.11](https://www.nocobase.com/ja/blog/v2.1.0-alpha.11)

*リリース日：2026-03-25*

### 🎉 新機能

* **[client]** JS item 操作を追加しました ([#8911](https://github.com/nocobase/nocobase/pull/8911)) by @jiannx
* **[AI 従業員]** AI 従業員に SKILLS 機能を追加しました ([#8797](https://github.com/nocobase/nocobase/pull/8797)) by @cgyrock
* **[データソース管理]** MCP ツールのオンデマンド読み込みに対応しました ([#8936](https://github.com/nocobase/nocobase/pull/8936)) by @2013xile

### 🚀 機能改善

* **[flow-engine]** ページ構築関連 API のスキーマ検証を強化しました。 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
* **[client]** フォームボタンの横並びレイアウトを改善しました ([#8869](https://github.com/nocobase/nocobase/pull/8869)) by @jiannx
* **[app]** client-v1 に Rsbuild ベースの開発ワークフローを追加し、ローカルプラグイン開発と現在の `/v2/` 環境との互換性を維持しました ([#8902](https://github.com/nocobase/nocobase/pull/8902)) by @Molunerfinn
* **[データテーブルフィールド：中国行政区画]** 中国行政区画フィールドが 2.0 に対応しました ([#8831](https://github.com/nocobase/nocobase/pull/8831)) by @jiannx
* **[ワークフロー]** すべてのトリガーとノードに検証ルールを追加しました ([#8930](https://github.com/nocobase/nocobase/pull/8930)) by @mytharcher
* **[ワークフロー：承認]** 承認処理記録リストの読み込み時に、JSON フィールド起因のパフォーマンス問題を改善しました by @mytharcher

### 🐛 不具合修正

* **[flow-engine]** フォームフィールド削除時に、状態がフィールド設定へ正しく同期されるよう修正しました ([#8857](https://github.com/nocobase/nocobase/pull/8857)) by @jiannx
* **[resourcer]** 外部データソースが正しく読み込まれない問題を修正しました ([#8929](https://github.com/nocobase/nocobase/pull/8929)) by @2013xile
* **[database]** 関連データ追加パラメータに誤りがある場合、警告ログを出力して該当フィールドをスキップし、エラーにより処理が実行できなくなる問題を回避しました ([#8923](https://github.com/nocobase/nocobase/pull/8923)) by @mytharcher
* **[server]** Pub-Sub の停止タイミングを `beforeStop` に変更し、データベース停止後にメッセージ送信や処理が行われてしまう問題を回避しました ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher
* **[カスタム変数]** 公開フォーム送信データの後に No permissions エラーが発生する問題を修正しました ([#8942](https://github.com/nocobase/nocobase/pull/8942)) by @chenos
* **[AI 従業員]** core パッケージ内の ai モジュールで通らないテストケースを修正しました ([#8941](https://github.com/nocobase/nocobase/pull/8941)) by @cgyrock
* **[ローカライズ]** 権限がない場合に localizationTexts:missing API が呼び出されてしまう問題を修正しました ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos
* **[操作：レコードインポート Pro]** 「ワークフローをトリガー」オプションを選択していない場合でも、ワークフローが実行される問題を修正しました by @mytharcher
* **[データソース：外部 Oracle]** Oracle データソースの読み込みエラーを修正しました by @2013xile
* **[ワークフロー：承認]** v2 承認フォームの戻るボタンの翻訳、ノード選択、および差し戻し先に関する問題を修正しました by @zhangzhonghe

### [v2.1.0-alpha.10](https://www.nocobase.com/ja/blog/v2.1.0-alpha.10)

*リリース日：2026-03-20*

### 🎉 新機能

* **[IdP: OAuth]** IdP: OAuth プラグインを追加し、MCP サービスの OAuth 認証に対応 ([#8896](https://github.com/nocobase/nocobase/pull/8896)) by @2013xile
* **[AI 従業員]** AI 会話のチェックポイントデータを定期的に削除する機能を追加 ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock
* **[アプリケーション管理]** アプリ一覧のフィルタに対応<br />起動・停止時に確認ダイアログを追加<br />アプリ状態を環境名順に並び替えるよう改善 by @2013xile

### 🚀 機能改善

* **[server]** pm add のロジックを改善 ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos
* **[client]** ポップアップを閉じる際の確認メッセージを無効にできるように対応 ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust
* **[undefined]** v1 を維持したまま、client-v2 の独立エントリを追加し、rsbuild による独立ビルドに対応 ([#8743](https://github.com/nocobase/nocobase/pull/8743)) by @Molunerfinn
* **[ワークフロー]**
  * 正常終了時に、メモリ内のイベントが最後まで処理されない問題を修正 ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher
  * 実行記録一覧にフィルタ機能を追加 ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher
* **[非同期タスクマネージャー]** 非同期タスクで worker からエラーメッセージを送信できるように対応 ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock
* **[ワークフロー：承認]** トリガーでデータテーブルが設定されていない場合、承認者設定画面を利用できないように対応 by @mytharcher

### 🐛 不具合修正

* **[client]**
  * 非管理者が関連フィールド値をクリアできない問題を修正 ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx
  * サブテーブル内の「データを選択」ポップアップで、再度開いた際に正しく読み込めない問題を修正 ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust
* **[resourcer]**`filterByTk` パラメータの配列要素が 100 件を超えた際、自動的にオブジェクトへ変換される問題を回避 ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile
* **[server]** ワーカープロセスがアプリケーションライフサイクルイベントを送信することで、サービスインスタンスが停止してしまう問題を修正 ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher
* **[データソース管理]** AI 従業員が作成したデータテーブルで、「作成者」「更新者」フィールドが常に欠けている問題を修正 ([#8895](https://github.com/nocobase/nocobase/pull/8895)) by @cgyrock
* **[AI 従業員]**
  * LLM サービスで指定した URL が、テキスト埋め込みモデル呼び出し時に反映されない問題を修正 ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock
  * AI プラグインのアップグレード用マイグレーションスクリプトで発生する可能性のある変数未定義エラーを修正 ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock
* **[操作：インポート記録 Pro]**
  * ファイルストリームの重複読み取りにより、約 30 列を超えるファイルのインポートでエラーが発生する問題を修正 by @mytharcher
  * 同期モードでインポート時にエラーが発生する問題を修正 by @mytharcher
  * サブアプリでインポート処理後に `beforeStop` イベントが発火しない問題を修正 by @mytharcher
  * 非同期インポートでエラー発生後に非同期タスクが終了しない問題を修正 by @cgyrock
  * 遅延読み込みによって発生する SES エラーを修正 by @mytharcher
* **[テンプレート印刷]** SQL データテーブルの印刷時にエラーが発生する問題を修正 by @jiannx
* **[ワークフロー：承認]** 追加承認時の同時実行に関する問題を修正 by @mytharcher
* **[メール管理]** メールが存在しない場合にページでエラーになる問題を修正 by @jiannx
* **[移行管理]** マイグレーションのアップロード時、対象環境に新規作成対象のテーブルが存在しないことでエラーが発生し、移行が中断される問題を修正 by @Andrew1989Y
