### 🚀 機能改善

* **[企業 WeChat]** 企業 WeChat プラグインの型安全性を改善し、通知受信者の選択コンポーネントを統一。 by @chenzhizdt

### 🐛 不具合修正

* **[client-v2]**
  * v2 フォームで、対多リレーションの表示フィールドを読み取り専用のサブテーブルとして表示できるように対応。 ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh
  * v2 のフィールド設定で、逆リレーションのタイプを変更できてしまう問題を修正。 ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh
  * V2 フォームで親側のリレーションにドロップダウン選択を使用した際、ネストされたリレーションフィールドが空で表示される問題を修正。 ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh
* **[cli]** 既存のローカルアップロードファイル URL を、デフォルトではログイン済みユーザーのみアクセス可能に変更し、公開アクセスを明示的に有効化できる互換設定を追加。 ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher
* **[ワークフロー：JavaScript ノード]** JavaScript ワークフローノードがタイムアウトした際、ワークフローを誤って中断し、「例外発生時も実行を続行する」設定が反映されない場合がある問題を修正。 ([#10461](https://github.com/nocobase/nocobase/pull/10461)) by @mytharcher
* **[ファイルマネージャー]** ファイルリダイレクトで期限切れの署名付きストレージ URL が再利用されないように修正。 ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher
* **[通知：サイト内通知]** サイト内通知のタイトルと詳細リンクで、すべての種類のワークフロー変数を使用できるように改善。 ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher
* **[データソース管理]** v2 の権限のデータ範囲で、「現在のユーザー」と「現在のロール」を変数として選択できるように追加 ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx
* **[ブロック：カンバン]** カンバンで新規作成したレコードが作成直後に表示されない問題を修正。 ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar
* **[DingTalk]** DingTalk 通知の受信者選択コンポーネントを統一。 by @chenzhizdt
