### 🚀 機能改善

* **[cli]** `nb api resource create` の `--values` で JSON 配列を指定できるようにし、1 回のリクエストで複数のレコードを作成できるようにしました。 ([#10325](https://github.com/nocobase/nocobase/pull/10325)) by @Molunerfinn
  参考ドキュメント：[nb api resource create](https://github.com/nocobase/nocobase/blob/fix/cli-resource-create-array-values/docs/docs/cn/api/cli/api/resource/create.md)

### 🐛 不具合修正

* **[client-v2]**
  * V2 フィールドで桁数の大きい decimal 値を編集・表示した際、値が正しく処理されない問題を修正しました。 ([#10330](https://github.com/nocobase/nocobase/pull/10330)) by @katherinehhh
  * `ctx.form.submit` でフォームデータを正しく送信できない問題を修正しました。 ([#10063](https://github.com/nocobase/nocobase/pull/10063)) by @gchust
  * 現在の Settings タブへのアクセス権限がない場合、アクセス可能なタブへ自動的に切り替わるようにしました。 ([#10332](https://github.com/nocobase/nocobase/pull/10332)) by @zhangzhonghe
  * カンバン列からレコードをクイック作成した際、選択中のグループ値が引き継がれない問題を修正しました。 ([#10321](https://github.com/nocobase/nocobase/pull/10321)) by @jiannx
  * 設定権限がない場合、最初にアクセス可能なページへ移動するようにしました。 ([#10331](https://github.com/nocobase/nocobase/pull/10331)) by @zhangzhonghe
* **[database]** データベースのアンダースコア命名を有効にした場合、キャメルケースのフィールドに対するプレフィックスインデックスを作成できない問題を修正しました。 ([#10329](https://github.com/nocobase/nocobase/pull/10329)) by @2013xile
* **[ブロック：ガントチャート]** ガントチャートで表示幅の短いタスクバーに、レコードのカスタムカラーが適用されない問題を修正しました。 ([#10322](https://github.com/nocobase/nocobase/pull/10322)) by @jiannx
* **[ブロック：ツリー]** Tree ブロックで検索条件に一致する業務レコードがない場合でも、プレースホルダーノードが表示される問題を修正しました。 ([#10323](https://github.com/nocobase/nocobase/pull/10323)) by @jiannx
* **[操作：レコードコピー]** v2 で直接コピーに失敗した際のエラーメッセージを改善し、同じ API エラー情報が重複して表示されないようにしました。 ([#10327](https://github.com/nocobase/nocobase/pull/10327)) by @katherinehhh
* **[履歴]** 大規模なスナップショットテーブルを使用する環境で、履歴データの書き込み性能を向上しました。 by @2013xile
* **[ワークフロー：承認]**
  * Client V2 の承認フォームで、返却範囲オプションが表示されない問題を修正しました。 by @zhangzhonghe
  * 承認フォームで一対多リレーションのレコードを削除した後、再度選択できない問題を修正しました。 by @zhangzhonghe
* **[DingTalk]** v2 のチャネルフォームで DingTalk 通知チャネルを保存した際、選択済みの認証器が失われる問題を修正しました。 by @jiannx
