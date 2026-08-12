### 🐛 不具合修正

* **[client-v2]** `ctx.form.submit` でフォームデータを正しく送信できない問題を修正しました。 ([#10063](https://github.com/nocobase/nocobase/pull/10063)) by @gchust
* **[database]** データベースのアンダースコア命名を有効にした場合、キャメルケースのフィールドに対するプレフィックスインデックスを作成できない問題を修正しました。 ([#10329](https://github.com/nocobase/nocobase/pull/10329)) by @2013xile
* **[操作：レコードコピー]** v2 で直接コピーに失敗した際のエラーメッセージを改善し、同じ API エラー情報が重複して表示されないようにしました。 ([#10327](https://github.com/nocobase/nocobase/pull/10327)) by @katherinehhh
* **[履歴]** 大規模なスナップショットテーブルを使用する環境で、履歴データの書き込み性能を向上しました。 by @2013xile
* **[ワークフロー：承認]** 承認フォームで一対多リレーションのレコードを削除した後、再度選択できない問題を修正しました。 by @zhangzhonghe
