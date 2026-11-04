### 🐛 不具合修正

* **[データソース管理]** 外部データソースのデータテーブル一覧で、同じフィールドに複数のフィルター条件を設定するとデータを取得できない問題を修正。 ([#11306](https://github.com/nocobase/nocobase/pull/11306)) by @zhouyanliang
* **[認証：API キー]** システムで「ロールの和集合のみ」を使用している場合、API キーが作成者に付与された他のロールの権限まで継承してしまう問題を修正。API キーは常に、紐付けられたロールの権限とデータ範囲に従うように変更。 ([#11316](https://github.com/nocobase/nocobase/pull/11316)) by @zhouyanliang
* **[ワークフロー]** ワークフロー v2 のデータ追加ノードとデータ更新ノードで、パスワードフィールドへの値の設定を行えない問題を修正。 ([#11318](https://github.com/nocobase/nocobase/pull/11318)) by @zhouyanliang
* **[通知管理]** ワークフローの通知ノードで、2 ページ目以降の通知チャネルを検索または選択できない問題を修正。 ([#11317](https://github.com/nocobase/nocobase/pull/11317)) by @zhouyanliang
* **[AI 従業員]** AI 従業員が JavaScript ブロックの内容を読み取る際、ツール実行が中断されたと誤って表示される問題を修正 ([#11305](https://github.com/nocobase/nocobase/pull/11305)) by @zhouyanliang
