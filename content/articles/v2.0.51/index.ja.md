### 🚀 機能改善

* **[ワークフロー：承認]** 承認フォームの必須バリデーションに関する操作性の問題を修正 by @zhangzhonghe

### 🐛 不具合修正

* **[client]**
  * JS field を読み取り専用に変更した後、js コードを再度編集できない問題を修正。 ([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust
  * フィールド連動ルールで、サブテーブルフィールドへの値の割り当てが反映されない問題を修正。 ([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust
  * ルート管理ページの設定が、ページタブの設定と同期されない問題を修正 ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe
  * 新規追加ポップアップで、関係フィールドのデフォルト値ポップアップが正しく表示されない問題を修正。 ([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust
* **[パスワードポリシー]** 永久ロックされたユーザーのログイン制限が、サービス再起動後に失効する可能性がある問題を修正 by @2013xile
* **[操作：レコードインポート Pro]** 日付フィールドに対する重複チェックが常に失敗する問題を修正 by @mytharcher
* **[ワークフロー：承認]** 承認ワークフロー設定で、レコード選択ドロワーが遮られる問題を修正 by @zhangzhonghe
