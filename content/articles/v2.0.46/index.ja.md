### 🐛 不具合修正

- **[client]**

  - サブテーブル内のレコードが削除された後，再次添加レコード時にデフォルト値が有効にならない問題を修正。 ([#9192](https://github.com/nocobase/nocobase/pull/9192)) by @gchust
  - クイック編集ポップオーバーの最大高さとスクロール制限を設定し、画面下部の送信ボタンに到達できるように確保 ([#9226](https://github.com/nocobase/nocobase/pull/9226)) by @jiannx
- **[ユーザー認証]** パスワード変更後、古いセッションが引き続き使用できる問題を修正 ([#9261](https://github.com/nocobase/nocobase/pull/9261)) by @2013xile
- **[データソース：外部 MariaDB]** インポートモジュールが不正確导致的测试用例失败問題を修正 by @mytharcher
