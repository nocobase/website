### 🐛 不具合修正

* **[client-v2]**
  * テーブルのクイック編集で、複数選択ドロップダウンを閉じた際に編集ポップアップまで閉じてしまう問題と、ドロップダウンの選択肢が送信ボタンに重なる問題を修正しました。 ([#10536](https://github.com/nocobase/nocobase/pull/10536)) by @katherinehhh
  * サブテーブルを無効に設定しても、行内のフィールドを編集できてしまう問題を修正しました。 ([#10532](https://github.com/nocobase/nocobase/pull/10532)) by @katherinehhh
* **[ブロック：カンバン]** Modern Client のカンバンでフィルター条件が設定されていない場合、上部ボタンからレコードを追加しても自動的に更新されない問題を修正しました。 ([#10525](https://github.com/nocobase/nocobase/pull/10525)) by @jiannx
* **[ワークフロー]** ワークフローのユーザーセレクターで、読み込み済みユーザーだけが検索対象になる問題を修正し、API 経由で検索するようにしました。 ([#10537](https://github.com/nocobase/nocobase/pull/10537)) by @mytharcher
* **[部門]** 部門ユーザーディレクトリを、権限を持つロールのみ利用できるようにしました。 ([#10539](https://github.com/nocobase/nocobase/pull/10539)) by @2013xile
* **[メール管理]** メールの返信関係が循環している場合に、メール同期が停止してしまう問題を修正しました。 by @jiannx
