### 🚀 機能改善

* **[client]** v1 と v2 アプリで条件判断機能を共通化しました。([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe
* **[ローカリゼーション]** Lina のローカリゼーション翻訳タスクを改善し、翻訳範囲、参照言語の設定、クイック編集に対応しました。([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile
* **[ワークフロー：承認]** 関連する承認をタイムラインカードで表示するようにしました by @zhangzhonghe

### 🐛 不具合修正

* **[undefined]** Nginx 設定パスを統一しました。([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos
* **[cli-v1]** create-nocobase-app プロジェクトを開発モードで起動できない問題を修正し、公開済みのアプリシェルを再利用してローカルプラグイン開発に対応しました。([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn
* **[client]**
  * メニューバッジの値が 0 の場合でも赤いドットが表示される問題を修正しました。([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe
  * フィルターフォームで現在のフォーム変数を使用できない問題を修正しました。([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe
* **[ユーザー認証]** WebSocket 認証 token が未読み込みまたは欠落した authType に紐づいた場合、サービスプロセスがクラッシュする問題を修正しました。([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn
* **[カレンダー]**
  * カレンダーで「さらに表示」から日程を展開した際、表示が崩れる問題を修正しました。([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe
  * カレンダーのその他項目パネルで、項目にホバーしてもポインターカーソルが表示されない問題を修正しました。([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx
* **[ライセンス設定]** 依存関係のシンボリックリンクに関する問題を解消しました。([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos
