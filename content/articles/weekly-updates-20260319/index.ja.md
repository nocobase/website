週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.19](https://www.nocobase.com/ja/blog/v2.0.19)

*リリース日：2026-03-18*

### 🚀 機能改善

* **[ワークフロー]** 正常終了時に、メモリ内のイベントが最後まで処理されない問題を修正 ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher

### 🐛 不具合修正

* **[AI 従業員]** LLM サービスで指定した URL が、テキスト埋め込みモデル呼び出し時に反映されない問題を修正 ([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock
* **[操作：インポート記録 Pro]** サブアプリでインポート処理後に `beforeStop` イベントが発火しない問題を修正 by @mytharcher

### [v2.0.18](https://www.nocobase.com/ja/blog/v2.0.18)

*リリース日：2026-03-17*

### 🎉 新機能

* **[AI 従業員]**
  * AI 会話のチェックポイントデータを定期的に削除する機能を追加 ([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock
  * サブテーブルのポップアップ内で AI 従業員を追加できるように対応 ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile
* **[アプリケーション管理]** アプリ一覧のフィルタに対応<br />起動・停止時に確認ダイアログを追加<br />アプリ状態を環境名順に並び替えるよう改善 by @2013xile

### 🚀 機能改善

* **[server]** pm add のロジックを改善 ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos
* **[client]** ポップアップを閉じる際の確認メッセージを無効にできるように対応 ([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust
* **[非同期タスクマネージャー]** 非同期タスクで worker からエラーメッセージを送信できるように対応 ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock

### 🐛 不具合修正

* **[client]** サブテーブル内の「データを選択」ポップアップで、再度開いた際に正しく読み込めない問題を修正 ([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust
* **[AI 従業員]** AI プラグインのアップグレード用マイグレーションスクリプトで発生する可能性のある変数未定義エラーを修正 ([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock
* **[操作：インポート記録 Pro]** 非同期インポートでエラー発生後に非同期タスクが終了しない問題を修正 by @cgyrock

### [v2.0.17](https://www.nocobase.com/ja/blog/v2.0.17)

*リリース日：2026-03-14*

### 🚀 機能改善

* **[undefined]** README.zh-CN.md を改善 ([#8866](https://github.com/nocobase/nocobase/pull/8866)) by @gaston98765

### 🐛 不具合修正

* **[client]** 一部フィールドのデフォルト値が、ページ更新後に反映されない問題を修正 ([#8834](https://github.com/nocobase/nocobase/pull/8834)) by @gchust
* **[database]** サーバー側の日付フィールド検証の不具合を修正 ([#8867](https://github.com/nocobase/nocobase/pull/8867)) by @2013xile
* **[ローカライズ]** localizationTexts:missing インターフェースの権限エラーを修正 ([#8861](https://github.com/nocobase/nocobase/pull/8861)) by @jiannx
* **[AI: ナレッジベース]** 使用中のベクトルライブラリに紐づくベクトルストレージが削除されないように対応 by @cgyrock

### [v2.0.16](https://www.nocobase.com/ja/blog/v2.0.16)

*リリース日：2026-03-12*

### 🐛 不具合修正

* **[client]**
  * テーブルブロックの高さ設定が反映されない問題を修正 ([#8842](https://github.com/nocobase/nocobase/pull/8842)) by @jiannx
  * データブロックの追加時およびページ更新時に、リフレッシュが 2 回発生する問題を修正。 ([#8851](https://github.com/nocobase/nocobase/pull/8851)) by @gchust
  * 外部データソースでデータブロックを接続する際に、接続可能なフィールドが表示されない問題を修正 ([#8848](https://github.com/nocobase/nocobase/pull/8848)) by @zhangzhonghe
* **[UI テンプレート]** 編集フォームブロックおよび詳細ブロックのテンプレートでエラーが発生する問題を修正。 ([#8859](https://github.com/nocobase/nocobase/pull/8859)) by @gchust
* **[フォーム下書き]** ポップアップを複数回開いた際に、フォーム下書きデータが失われる問題を修正。 ([#8858](https://github.com/nocobase/nocobase/pull/8858)) by @gchust
* **[ローカライズ]** ページが非編集状態のとき、未検出の文言を送信しないように修正 ([#8841](https://github.com/nocobase/nocobase/pull/8841)) by @jiannx
* **[操作：レコードインポート Pro]** インポート設定で、重複判定の基準フィールドを複数選択できない問題を修正 by @jiannx
* **[メール管理]** 返信および全員返信の宛先を調整し、テーブルフィールド追加時の不具合などを修正 by @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.9](https://www.nocobase.com/ja/blog/v2.1.0-beta.9)

*リリース日：2026-03-12*

### 🐛 不具合修正

* **[client]**
  * テーブルブロックの高さ設定が反映されない問題を修正 ([#8842](https://github.com/nocobase/nocobase/pull/8842)) by @jiannx
  * データブロックの追加時およびページ更新時に、リフレッシュが二重に発生する問題を修正。 ([#8851](https://github.com/nocobase/nocobase/pull/8851)) by @gchust
  * 外部データソースでデータブロックを接続する際に、接続可能なフィールドが表示されない問題を修正 ([#8848](https://github.com/nocobase/nocobase/pull/8848)) by @zhangzhonghe
* **[UI テンプレート]** 編集フォームブロックおよび詳細ブロックのテンプレートでエラーが発生する問題を修正。 ([#8859](https://github.com/nocobase/nocobase/pull/8859)) by @gchust
* **[フォーム下書き]** ポップアップを複数回開いた際に、フォーム下書きデータが失われる問題を修正。 ([#8858](https://github.com/nocobase/nocobase/pull/8858)) by @gchust
* **[ローカライズ]** ページが非編集状態のとき、未検出の文言を送信しないように修正 ([#8841](https://github.com/nocobase/nocobase/pull/8841)) by @jiannx
* **[操作：レコードインポート Pro]** インポート設定で、重複判定の基準フィールドを複数選択できない問題を修正 by @jiannx
* **[メール管理]** 返信および全員返信の宛先を調整し、テーブルフィールド追加時の不具合などを修正 by @jiannx
* **[移行管理]** システムテーブルでカスタムルールを設定する際に選択できない問題を修正 by @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.9](https://www.nocobase.com/ja/blog/v2.1.0-alpha.9)

*リリース日：2026-03-14*

### 🎉 新機能

* **[AI 従業員]** サブテーブルのポップアップ内で AI 従業員を追加できるように対応 ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile
* **[AI: MCP サーバー]** MCP サーバープラグインを追加し、MCP 経由で NocoBase システムを構築し、業務フローに対応できるように改善 ([#8824](https://github.com/nocobase/nocobase/pull/8824)) by @2013xile

### 🚀 機能改善

* **[undefined]** README.zh-CN.md を改善 ([#8866](https://github.com/nocobase/nocobase/pull/8866)) by @gaston98765

### 🐛 不具合修正

* **[database]** サーバー側の日付フィールド検証の不具合を修正 ([#8867](https://github.com/nocobase/nocobase/pull/8867)) by @2013xile
* **[client]**
  * 外部データソースで連携データブロックを接続する際、接続可能フィールドが表示されない問題を修正 ([#8848](https://github.com/nocobase/nocobase/pull/8848)) by @zhangzhonghe
  * データブロック追加時およびページ更新時に、2回リフレッシュが発生する問題を修正 ([#8851](https://github.com/nocobase/nocobase/pull/8851)) by @gchust
  * 一部フィールドのデフォルト値が、ページ更新後に反映されない問題を修正 ([#8834](https://github.com/nocobase/nocobase/pull/8834)) by @gchust
  * テーブルブロックの高さが反映されない問題を修正 ([#8842](https://github.com/nocobase/nocobase/pull/8842)) by @jiannx
* **[ローカライズ]**
  * localizationTexts:missing インターフェースの権限エラーを修正 ([#8861](https://github.com/nocobase/nocobase/pull/8861)) by @jiannx
  * ページが編集モードでない場合、未検出の文言を送信しないように修正 ([#8841](https://github.com/nocobase/nocobase/pull/8841)) by @jiannx
* **[フォーム下書き]** ポップアップを複数回開いた際に、フォーム下書きデータが失われる問題を修正 ([#8858](https://github.com/nocobase/nocobase/pull/8858)) by @gchust
* **[UI テンプレート]** 編集フォームブロックおよび詳細ブロックのテンプレートでエラーが発生する問題を修正 ([#8859](https://github.com/nocobase/nocobase/pull/8859)) by @gchust
* **[AI: ナレッジベース]** 使用中のベクトルライブラリに紐づくベクトルストレージが削除されないように対応 by @cgyrock
* **[操作：インポート記録 Pro]** インポート設定で重複判定フィールドを複数選択できない問題を修正 by @jiannx
* **[メール管理]** 返信および全員返信時の受信者設定を調整し、テーブルフィールド追加時の不具合などを修正 by @jiannx
* **[移行管理]** システムテーブルで再カスタマイズルールを選択できない問題を修正 by @cgyrock
