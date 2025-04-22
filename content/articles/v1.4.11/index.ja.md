### 🚀 改善点

* **[クライアント]** より多くのコンポーネントが「省略文字列出内容」設定項目をサポートするようにしました ([#5888](https://github.com/nocobase/nocobase/pull/5888)) by @zhangzhonghe
* **[データベース]** リレーションリポジトリにfirstOrCreateとupdateOrCreateを追加しました ([#5894](https://github.com/nocobase/nocobase/pull/5894)) by @chareice

### 🐛 バグ修正

* **[クライアント]**
  * 外部データソースブロックの複製リクエストテンプレートにx-data-sourceパラメーターが抜けていた問題を修正 ([#5882](https://github.com/nocobase/nocobase/pull/5882)) by @katherinehhh
  * プラグイン内のテーブルで水平スクロールバーの問題を修正 ([#5899](https://github.com/nocobase/nocobase/pull/5899)) by @katherinehhh
  * 関連フィールドのドロップダウンで時々余計な「N/A」オプションが表示される問題を修正 ([#5878](https://github.com/nocobase/nocobase/pull/5878)) by @zhangzhonghe
  * PGビュー作成の問題を修正、スキーマ間でビューを選択する際のエラーを解決 ([#5881](https://github.com/nocobase/nocobase/pull/5881)) by @katherinehhh
  * フォームブロックのグループスタイルの問題を修正（レイアウトが水平に設定された場合） ([#5884](https://github.com/nocobase/nocobase/pull/5884)) by @katherinehhh
* **[ユーザー]**
  * ユーザー管理でユーザーを追加または編集後、フォームがリセットされない問題を修正 ([#5875](https://github.com/nocobase/nocobase/pull/5875)) by @2013xile
  * ユーザープロファイルの編集と送信後、ページ切り替えやページサイズの変更後にユーザー管理のページネーション設定がリセットされる問題を修正 ([#5893](https://github.com/nocobase/nocobase/pull/5893)) by @2013xile
* **[データソースマネージャー]** 外部データソースコレクションのフィルタリング問題を修正 ([#5890](https://github.com/nocobase/nocobase/pull/5890)) by @chareice
* **[公開フォーム]** グローバルテーマスイッチが公開フォームのプレビューページテーマに影響を与える問題を修正 ([#5883](https://github.com/nocobase/nocobase/pull/5883)) by @katherinehhh
