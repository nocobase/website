### 🎉 新機能

* **[ブロック：カンバン]** カンバンプラグインに client-v2 サポートを追加しました。([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx

### 🚀 機能改善

* **[cli]** NocoBase CLI のインストールおよび管理の対話フローを Inquirer に移行し、プロンプトの表示体験を改善しました。また、関連するインストール、スキル管理、Docker ランタイムの問題も修正しました。([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos
* **[AI 従業員]** ベクターストアへの書き込み検証を追加しました。同名のデータテーブルを検出した場合に警告を表示し、誤操作による上書きを防ぎます。([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock
* **[通知管理]** 送信性能を向上させるため、キュー戦略を調整しました。([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher
* **[ワークフロー：カスタム操作イベント]** block-workbench と workflow-custom-action-trigger プラグインを client v2 に移行し、操作パネルモデルと QR コードスキャンフローを同期しました。([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx
* **[ユーザー認証]** client-v2 の認証設定ページを実装し、再利用可能なテーブル、変数入力、フォームの基本コンポーネントを提供しました。([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn
* **[AI：ナレッジベース]** ベクターストアへの書き込み検証を追加しました。同名のデータテーブルを検出した場合に警告を表示し、誤操作による上書きを防ぎます by @cgyrock
* **[認証：SAML 2.0]** CAS と SAML 認証プラグインに client-v2 の入口を追加し、v2 ログインページと認証器の管理画面設定で正常に使用できるようにしました by @Molunerfinn

### 🐛 不具合修正

* **[client-v2]**
  * クライアント側で dnd-kit 依存関係が提供されていないため、カンバンプラグインの v2 ルートを読み込めない問題を修正しました。([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx
  * v2 の共通 Table コンポーネントで、ページネーションの件数セレクターをデフォルト表示し、動作を v1 と揃えました。([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn
* **[client]**
  * フォーム送信時に、サブフォーム内の js field の値が正しく設定されない問題を修正しました。([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust
  * 操作ボタンのイベントフローで、現在開いているポップアップのレコード変数を解析できない問題を修正しました。([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust
* **[flow-engine]** コンソールに誤ったエラーログが出力される問題を修正しました。([#9502](https://github.com/nocobase/nocobase/pull/9502)) by @gchust
* **[AI 従業員]**
  * ワークフローの AI 従業員ノードで指定した操作担当者ロールの権限が有効にならない問題を修正しました。([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock
  * AI 従業員が OSS ストレージ上のファイルを読み取る際にエラーが発生する問題を修正しました。([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock
* **[API ドキュメント]** Collection API ドキュメントで、クエリパラメーターが相互に影響する問題を修正しました。([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx
* **[データソース：メインデータベース]** フィールド同期後に、フィールドオプションがスキーマに書き込まれる問題を修正しました。([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile
* **[ワークフロー：JavaScript ノード]** 本番ビルドでワークフローの JavaScript ノードが QuickJS ランタイムパッケージを読み込めない問題を修正しました。([#9503](https://github.com/nocobase/nocobase/pull/9503)) by @mytharcher
* **[WEB クライアント]** メニュー削除時に内部ブロックデータを削除するようにしました。([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust
* **[操作：レコードのインポート]** 日付フィールドのインポート後、時刻が正しく表示されない問題を修正しました。([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher
* **[操作：レコードのインポート Pro]** Pro 版の xlsx インポートにおけるタイムゾーン処理の問題を修正しました by @mytharcher
* **[認証：SAML 2.0]** SAML 自動リダイレクトインターセプターがページ遷移のたびにリクエストを繰り返し、アプリの画面ちらつきやドロワーの重複表示が発生する問題を修正しました by @Molunerfinn
* **[操作：レコードのエクスポート Pro]** 添付ファイル URL フィールドで提供された添付ファイルをエクスポートする際にエラーが発生する問題を修正しました by @mytharcher
