週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.31](https://www.nocobase.com/ja/blog/v2.0.31)

*リリース日：2026-04-01*

### 🚀 機能改善

* **[AI 従業員]** deepseek がサポートしていないファイル形式を処理する際の案内表示を改善しました ([#9003](https://github.com/nocobase/nocobase/pull/9003)) by @cgyrock
* **[ワークフロー]** 有効化スイッチのサイズを小さめに調整しました ([#9010](https://github.com/nocobase/nocobase/pull/9010)) by @mytharcher

### 🐛 不具合修正

* **[client]** テーブル内の関連フィールドの表示文言が、初回レンダリング時に正しく表示されない問題を修正しました ([#9007](https://github.com/nocobase/nocobase/pull/9007)) by @jiannx
* **[flow-engine]** ポップアップ内で設定メニューの表示が切れてしまう問題を修正しました ([#9005](https://github.com/nocobase/nocobase/pull/9005)) by @gchust
* **[通知：サイト内メッセージ]** サイト内メッセージ操作のホワイトリスト処理を修正し、本人以外による権限外操作を防止しました ([#9001](https://github.com/nocobase/nocobase/pull/9001)) by @mytharcher
* **[AI 従業員]** Qwen モデル使用時に Web 検索の動作が異常になる問題を修正しました ([#9012](https://github.com/nocobase/nocobase/pull/9012)) by @cgyrock

### [v2.0.30](https://www.nocobase.com/ja/blog/v2.0.30)

*リリース日：2026-03-30*

### 🚀 機能改善

* **[ワークフロー：JavaScript ノード]**`isolated-vm` を JavaScript ノードのデフォルト実行エンジンに設定しました ([#8973](https://github.com/nocobase/nocobase/pull/8973)) by @mytharcher
  参考ドキュメント：[JavaScript ノード](https://docs.nocobase.com/cn/workflow/nodes/javascript)

### 🐛 不具合修正

* **[client]** 複数階層のポップアップでフォームデータを変更した後、ポップアップを閉じる際の確認メッセージが正しく表示されない問題を修正しました。 ([#8944](https://github.com/nocobase/nocobase/pull/8944)) by @gchust
* **[ワークフロー：SQL ノード]** SQL ノードのセキュリティ問題を修正しました ([#8989](https://github.com/nocobase/nocobase/pull/8989)) by @mytharcher
* **[AI 従業員]** AI セッション API に所有権チェックを追加しました ([#8993](https://github.com/nocobase/nocobase/pull/8993)) by @cgyrock
* **[ワークフロー：承認]** 新バージョン導入後の起動エラーを防ぐため、過去の移行スクリプトに関するバージョン制限設定を修正しました by @mytharcher

### [v2.0.29](https://www.nocobase.com/ja/blog/v2.0.29)

*リリース日：2026-03-30*

### 🚀 機能改善

* **[undefined]** LibreOffice と Oracle Instant Client をサイレントモードで解凍することで、サーバー起動時の不要なログ出力を削減しました ([#8984](https://github.com/nocobase/nocobase/pull/8984)) by @Rishabh1925

### 🐛 不具合修正

* **[client]** 変数式に空白が含まれている場合に、名前が正しく表示されない問題を修正しました ([#8988](https://github.com/nocobase/nocobase/pull/8988)) by @mytharcher
* **[flow-engine]** 設定モードで UI コンポーネントの幅が狭すぎる場合に、メニュー項目を選択できない問題を修正しました。 ([#8954](https://github.com/nocobase/nocobase/pull/8954)) by @gchust
* **[データ可視化]** チャートで変数を含むフィルタ条件を使用した際、初回レンダリング時に変数値を正しく解析できない問題を修正しました ([#8964](https://github.com/nocobase/nocobase/pull/8964)) by @2013xile

### [v2.0.28](https://www.nocobase.com/ja/blog/v2.0.28)

*リリース日：2026-03-27*

### 🐛 不具合修正

* **[操作：レコードインポート]** スペースプラグイン有効化後にインポートが失敗する問題を修正しました ([#8968](https://github.com/nocobase/nocobase/pull/8968)) by @jiannx
* **[データ可視化]** スペースプラグイン有効化後に、root ロールのチャートデータ集計が異常になる問題を修正しました ([#8969](https://github.com/nocobase/nocobase/pull/8969)) by @jiannx
* **[ワークフロー：JavaScript ノード]** コード実行時のセキュリティ問題を修正しました ([#8967](https://github.com/nocobase/nocobase/pull/8967)) by @mytharcher
* **[AI 従業員]** AI 対話内のツールカードコンポーネント間の間隔に関する調整を行いました ([#8965](https://github.com/nocobase/nocobase/pull/8965)) by @cgyrock
* **[操作：レコードエクスポート]** インポートおよびエクスポート設定で、多段階の関連フィールドを制限しました ([#8893](https://github.com/nocobase/nocobase/pull/8893)) by @jiannx
* **[操作：レコードインポート Pro]** インポートおよびエクスポート設定で、多段階の関連フィールドを制限しました by @jiannx

### [v2.0.27](https://www.nocobase.com/ja/blog/v2.0.27)

*リリース日：2026-03-26*

### 🚀 機能改善

* **[ワークフロー]** 1 ページあたりの件数パラメータで変数を使えるようにしました ([#8951](https://github.com/nocobase/nocobase/pull/8951)) by @mytharcher
* **[ワークフロー：サブフロー]** ワークフローが例外発生時に処理途中で止まってしまうのを防ぐため、防御ロジックを追加しました by @mytharcher

### 🐛 不具合修正

* **[client]** ポップアップ内のツリーテーブルで子ノード追加時にエラーが発生する問題を修正 ([#8872](https://github.com/nocobase/nocobase/pull/8872)) by @jiannx
* **[フロントエンドフローエンジン]** uiSchema テーブルからコピーされた旧イベントを削除し、呼び出し後にエラーが発生する問題を回避 ([#8957](https://github.com/nocobase/nocobase/pull/8957)) by @mytharcher
* **[ユーザー認証]** ACL がカスタム state フィルタパラメータに対応するように修正 ([#8918](https://github.com/nocobase/nocobase/pull/8918)) by @jiannx
* **[メール管理]** テンプレート使用時に署名が上書きされてしまう問題を修正 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.13](https://www.nocobase.com/ja/blog/v2.1.0-alpha.13)

*リリース日：2026-03-27*

### 🎉 新機能

* **[client]** イベントフローに JS 変数を追加しました ([#8938](https://github.com/nocobase/nocobase/pull/8938)) by @jiannx

### 🚀 機能改善

* **[client]** runjs を使ってフィールドスタイルを設定できるようにしました ([#8933](https://github.com/nocobase/nocobase/pull/8933)) by @jiannx
* **[flow-engine]** ページ構築関連 API のスキーマ検証を強化しました。 ([#8881](https://github.com/nocobase/nocobase/pull/8881)) by @gchust
* **[ワークフロー：操作前イベント]** トリガーとノードに検証ルールを追加しました ([#8971](https://github.com/nocobase/nocobase/pull/8971)) by @mytharcher
* **[ワークフロー]** 1 ページあたりの件数パラメータで変数を使えるようにしました ([#8951](https://github.com/nocobase/nocobase/pull/8951)) by @mytharcher
* **[ワークフロー：Webhook トリガー]** トリガーおよびノード作成 API に検証処理を追加しました by @mytharcher
* **[ワークフロー：サブフロー]**
  * 新規ノード作成 API に検証処理を追加しました by @mytharcher
  * ワークフローが例外発生時に処理途中で止まってしまうのを防ぐため、防御ロジックを追加しました by @mytharcher
* **[ワークフロー：承認]** トリガーおよびノード API に検証処理を追加しました by @mytharcher

### 🐛 不具合修正

* **[client]** ポップアップ内のツリーテーブルで子ノード追加時にエラーが発生する問題を修正しました ([#8872](https://github.com/nocobase/nocobase/pull/8872)) by @jiannx
* **[操作：レコードエクスポート]** インポートおよびエクスポート設定で、多段階の関連フィールドを制限しました ([#8893](https://github.com/nocobase/nocobase/pull/8893)) by @jiannx
* **[データ可視化]** スペースプラグイン有効化後に、root ロールのチャートデータ集計が異常になる問題を修正しました ([#8969](https://github.com/nocobase/nocobase/pull/8969)) by @jiannx
* **[操作：レコードインポート]** スペースプラグイン有効化後にインポートが失敗する問題を修正しました ([#8968](https://github.com/nocobase/nocobase/pull/8968)) by @jiannx
* **[ワークフロー：JavaScript ノード]** コード実行時のセキュリティ問題を修正しました ([#8967](https://github.com/nocobase/nocobase/pull/8967)) by @mytharcher
* **[AI 従業員]** AI 対話内のツールカードコンポーネント間の間隔に関する問題を調整しました ([#8965](https://github.com/nocobase/nocobase/pull/8965)) by @cgyrock
* **[フロントエンドフローエンジン]** uiSchema テーブルからコピーされた旧イベントを削除し、呼び出し後にエラーが発生する問題を回避しました ([#8957](https://github.com/nocobase/nocobase/pull/8957)) by @mytharcher
* **[ユーザー認証]** ACL がカスタム state フィルタパラメータに対応するように修正しました ([#8918](https://github.com/nocobase/nocobase/pull/8918)) by @jiannx
* **[操作：レコードインポート Pro]** インポートおよびエクスポート設定で、多段階の関連フィールドを制限しました by @jiannx
* **[メール管理]** テンプレート使用時に署名が上書きされてしまう問題を修正しました by @jiannx
