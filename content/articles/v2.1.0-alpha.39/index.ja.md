### 🎉 新機能

* **[ブロック：カンバン]** カンバンプラグインに client-v2 サポートを追加しました。([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx

### 🚀 機能改善

* **[client]** v1 と v2 アプリで条件判断機能を共通化しました。([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe
* **[ローカリゼーション]** Lina のローカリゼーション翻訳タスクを改善し、翻訳範囲、参照言語の設定、クイック編集に対応しました。([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile
* **[AI 従業員]** ベクターストアへの書き込み検証を追加しました。同名のデータテーブルを検出した場合に警告を表示し、誤操作による上書きを防ぎます。([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock
* **[通知管理]** 送信性能を向上させるため、キュー戦略を調整しました。([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher
* **[ワークフロー：カスタム操作イベント]** block-workbench と workflow-custom-action-trigger プラグインを client v2 に移行し、操作パネルモデルと QR コードスキャンフローを同期しました。([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx
* **[ユーザー認証]** client-v2 の認証設定ページを実装し、再利用可能なテーブル、変数入力、フォームの基本コンポーネントを提供しました。([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn
* **[AI：ナレッジベース]** ベクターストアへの書き込み検証を追加しました。同名のデータテーブルを検出した場合に警告を表示し、誤操作による上書きを防ぎます by @cgyrock
* **[認証：SAML 2.0]** CAS と SAML 認証プラグインに client-v2 の入口を追加し、v2 ログインページと認証器の管理画面設定で正常に使用できるようにしました by @Molunerfinn
* **[ワークフロー：承認]** 関連する承認をタイムラインカードで表示するようにしました by @zhangzhonghe

### 🐛 不具合修正

* **[undefined]** Nginx 設定パスを統一しました。([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos
* **[cli-v1]** create-nocobase-app プロジェクトを開発モードで起動できない問題を修正し、公開済みのアプリシェルを再利用してローカルプラグイン開発に対応しました。([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn
* **[client]**
  * フィルターフォームで現在のフォーム変数を使用できない問題を修正しました。([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe
  * メニューバッジの値が 0 の場合でも赤いドットが表示される問題を修正しました。([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe
* **[client-v2]**
  * v2 の共通 Table コンポーネントで、ページネーションの件数セレクターをデフォルト表示し、動作を v1 と揃えました。([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn
  * クライアント側で dnd-kit 依存関係が提供されていないため、カンバンプラグインの v2 ルートを読み込めない問題を修正しました。([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx
* **[カレンダー]**
  * カレンダーのその他項目パネルで、項目にホバーしてもポインターカーソルが表示されない問題を修正しました。([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx
  * カレンダーで「さらに表示」から日程を展開した際、表示が崩れる問題を修正しました。([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe
* **[ライセンス設定]** 依存関係のシンボリックリンクに関する問題を解消しました。([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos
* **[AI 従業員]**
  * ワークフローの AI 従業員ノードで指定した操作担当者ロールの権限が有効にならない問題を修正しました。([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock
  * AI 従業員が OSS ストレージ上のファイルを読み取る際にエラーが発生する問題を修正しました。([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock
* **[ユーザー認証]** WebSocket 認証 token が未読み込みまたは欠落した authType に紐づいた場合、サービスプロセスがクラッシュする問題を修正しました。([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn
* **[API ドキュメント]** Collection API ドキュメントで、クエリパラメーターが相互に影響する問題を修正しました。([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx
* **[データソース：メインデータベース]** フィールド同期後に、フィールドオプションがスキーマに書き込まれる問題を修正しました。([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile
* **[認証：SAML 2.0]** SAML 自動リダイレクトインターセプターがページ遷移のたびにリクエストを繰り返し、アプリの画面ちらつきやドロワーの重複表示が発生する問題を修正しました by @Molunerfinn
