### 🚀 機能改善

* **[utils]** 新しい環境変数を追加し、サーバーから IP アドレスへの直接リクエストやリダイレクトを禁止できるように対応 ([#10490](https://github.com/nocobase/nocobase/pull/10490)) by @2013xile
* **[client-v2]** iOS 上での V2 フォームの QR コード読み取りの安定性を向上。 ([#10456](https://github.com/nocobase/nocobase/pull/10456)) by @katherinehhh
* **[企業 WeChat]** 企業 WeChat プラグインの型安全性を改善し、通知受信者の選択コンポーネントを統一。 by @chenzhizdt

### 🐛 不具合修正

* **[client-v2]**
  * ワークフローのデータ追加・更新ノードのフィールド値設定で、サーバー側が対応していない組み込み日付変数を非表示に変更。 ([#10442](https://github.com/nocobase/nocobase/pull/10442)) by @mytharcher
  * 設定ページへの遷移時にページ全体がリロードされる問題を修正 ([#10474](https://github.com/nocobase/nocobase/pull/10474)) by @zhangzhonghe
  * v2 のデータ更新アクションで、設定済みのフィールドが削除された後にフィールド設定を開けなくなる問題を修正。 ([#10483](https://github.com/nocobase/nocobase/pull/10483)) by @katherinehhh
  * V2 の既存のフィールド値設定で、削除済みフィールドに統一された削除済みメッセージを表示。 ([#10484](https://github.com/nocobase/nocobase/pull/10484)) by @katherinehhh
  * フィルターフォームのカスタムラジオボタンとチェックボックスで、オプション値を続けて入力できない問題を修正 ([#10480](https://github.com/nocobase/nocobase/pull/10480)) by @zhangzhonghe
  * v2 フォームで、対多リレーションの表示フィールドを読み取り専用のサブテーブルとして表示できるように対応。 ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh
  * V2 フォームで親側のリレーションにドロップダウン選択を使用した際、ネストされたリレーションフィールドが空で表示される問題を修正。 ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh
  * v2 のフィールド設定で、逆リレーションのタイプを変更できてしまう問題を修正。 ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh
  * モバイルのフィルターフォームで折りたたみ操作が機能しない問題を修正 ([#10479](https://github.com/nocobase/nocobase/pull/10479)) by @zhangzhonghe
* **[server]** サブアプリケーションのデプロイ環境が利用できないにもかかわらず、「準備中」と誤って表示される問題を修正 ([#10485](https://github.com/nocobase/nocobase/pull/10485)) by @2013xile
* **[cli]** 既存のローカルアップロードファイル URL を、デフォルトではログイン済みユーザーのみアクセス可能に変更し、公開アクセスを明示的に有効化できる互換設定を追加。 ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher
* **[ワークフロー：遅延ノード]** 遅延ノードの遅延時間変数の検証を修正し、変数の解析結果が無効な場合は直ちにエラーを返すことで、意図しない待機を防止。 ([#10469](https://github.com/nocobase/nocobase/pull/10469)) by @mytharcher
* **[データソース管理]**
  * v2 のリレーションフィールド編集時に、逆方向フィールドの選択状態が保持されない問題を修正。 ([#10482](https://github.com/nocobase/nocobase/pull/10482)) by @katherinehhh
  * v2 の権限のデータ範囲で、「現在のユーザー」と「現在のロール」を変数として選択できるように追加 ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx
* **[通知：サイト内通知]** サイト内通知のタイトルと詳細リンクで、すべての種類のワークフロー変数を使用できるように改善。 ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher
* **[権限制御]** ロール権限で下位階層のメニューを選択した際、すべての上位メニューが自動的に選択されない問題を修正 ([#10473](https://github.com/nocobase/nocobase/pull/10473)) by @zhangzhonghe
* **[ブロック：カンバン]** カンバンで新規作成したレコードが作成直後に表示されない問題を修正。 ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar
* **[ファイルマネージャー]** ファイルリダイレクトで期限切れの署名付きストレージ URL が再利用されないように修正。 ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher
* **[フロントエンドフローエンジン]** 非管理者ユーザーで、フォーム連動ルール、参照テンプレート、スクリプト内の変数が正しく解析されない問題を修正。 ([#10467](https://github.com/nocobase/nocobase/pull/10467)) by @gchust
* **[ワークフロー：承認]** 承認ドラフトを編集して保存した後も、申請カードに古い内容が表示される問題を修正 by @zhangzhonghe
* **[アプリケーション監督]** ローリングアップデートまたはデプロイ環境の切り替え後に、サブアプリケーションへアクセスできなくなる問題を修正 by @2013xile
