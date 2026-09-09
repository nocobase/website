### 🐛 不具合修正

* **[client-v2]**
  * v2 のデータ更新アクションで、設定済みのフィールドが削除された後にフィールド設定を開けなくなる問題を修正。 ([#10483](https://github.com/nocobase/nocobase/pull/10483)) by @katherinehhh
  * V2 の既存フィールド値設定で、削除済みフィールドに統一された削除済みメッセージを表示。 ([#10484](https://github.com/nocobase/nocobase/pull/10484)) by @katherinehhh
  * モバイルのフィルターフォームで折りたたみ操作が機能しない問題を修正 ([#10479](https://github.com/nocobase/nocobase/pull/10479)) by @zhangzhonghe
  * v2 フォームで、対多リレーションの表示フィールドを読み取り専用のサブテーブルとして表示できるように対応。 ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh
  * V2 フォームで親側のリレーションにドロップダウン選択を使用した際、ネストされたリレーションフィールドが空で表示される問題を修正。 ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh
  * v2 のフィールド設定で、逆リレーションのタイプを変更できてしまう問題を修正。 ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh
  * フィルターフォームのカスタムラジオボタンとチェックボックスで、オプション値を続けて入力できない問題を修正 ([#10480](https://github.com/nocobase/nocobase/pull/10480)) by @zhangzhonghe
  * 設定ページへの遷移時にページ全体がリロードされる問題を修正 ([#10474](https://github.com/nocobase/nocobase/pull/10474)) by @zhangzhonghe
* **[cli]** 既存のローカルアップロードファイル URL を、デフォルトではログイン済みユーザーのみアクセス可能に変更し、公開アクセスを明示的に有効化できる互換設定を追加。 ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher
* **[データソース管理]** v2 のリレーションフィールド編集時に、逆方向フィールドの選択状態が保持されない問題を修正。 ([#10482](https://github.com/nocobase/nocobase/pull/10482)) by @katherinehhh
* **[フロントエンドフローエンジン]** 非管理者ユーザーで、フォーム連動ルール、参照テンプレート、スクリプト内の変数が正しく解析されない問題を修正。 ([#10467](https://github.com/nocobase/nocobase/pull/10467)) by @gchust
* **[権限制御]** ロール権限で下位階層のメニューを選択した際、すべての上位メニューが自動的に選択されない問題を修正 ([#10473](https://github.com/nocobase/nocobase/pull/10473)) by @zhangzhonghe
* **[ブロック：カンバン]** カンバンで新規作成したレコードが作成直後に表示されない問題を修正。 ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar
* **[ワークフロー：承認]** 承認ドラフトを編集して保存した後も、申請カードに古い内容が表示される問題を修正 by @zhangzhonghe
