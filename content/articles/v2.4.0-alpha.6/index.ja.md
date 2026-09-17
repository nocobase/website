### 🚀 機能改善

* **[utils]** 新しい環境変数を追加し、サーバーから IP アドレスへの直接リクエストやリダイレクトを禁止できるように対応 ([#10490](https://github.com/nocobase/nocobase/pull/10490)) by @2013xile
* **[client-v2]** iOS 上での V2 フォームの QR コード読み取りの安定性を向上。 ([#10456](https://github.com/nocobase/nocobase/pull/10456)) by @katherinehhh

### 🐛 不具合修正

* **[server]**
  * カスタムリクエスト URL を介して機密性の高い環境変数が漏洩する問題を防止 ([#10503](https://github.com/nocobase/nocobase/pull/10503)) by @2013xile
  * サブアプリケーションのデプロイ環境が利用できないにもかかわらず、「準備中」と誤って表示される問題を修正 ([#10485](https://github.com/nocobase/nocobase/pull/10485)) by @2013xile
* **[client-v2]**
  * ワークフローのクエリノードの条件で、3 階層より深い変数を使用できない問題を修正 ([#10494](https://github.com/nocobase/nocobase/pull/10494)) by @mytharcher
  * モバイルのフィルターフォームで折りたたみ操作が機能しない問題を修正 ([#10479](https://github.com/nocobase/nocobase/pull/10479)) by @zhangzhonghe
  * フィルターフォームのカスタムラジオボタンとチェックボックスで、オプション値を続けて入力できない問題を修正 ([#10480](https://github.com/nocobase/nocobase/pull/10480)) by @zhangzhonghe
  * v2 のデータ更新アクションで、設定済みのフィールドが削除された後にフィールド設定を開けなくなる問題を修正。 ([#10483](https://github.com/nocobase/nocobase/pull/10483)) by @katherinehhh
  * 設定ページへの遷移時にページ全体がリロードされる問題を修正 ([#10474](https://github.com/nocobase/nocobase/pull/10474)) by @zhangzhonghe
  * ワークフローのデータ追加・更新ノードのフィールド値設定で、サーバー側が対応していない組み込み日付変数を非表示に変更。 ([#10442](https://github.com/nocobase/nocobase/pull/10442)) by @mytharcher
  * V2 の既存のフィールド値設定で、削除済みフィールドに統一された削除済みメッセージを表示。 ([#10484](https://github.com/nocobase/nocobase/pull/10484)) by @katherinehhh
* **[AI 従業員]** データテーブルのロール権限で現在のユーザーに基づくデータ範囲を設定している場合、AI 従業員のデータクエリツールでレコードを取得できない問題を修正 ([#10501](https://github.com/nocobase/nocobase/pull/10501)) by @cgyrock
* **[Office ファイルプレビュー]** Office ファイルのプレビュー時に誤ったファイル URL が使用される問題を修正 ([#10496](https://github.com/nocobase/nocobase/pull/10496)) by @mytharcher
* **[ワークフロー：遅延ノード]** 遅延ノードの遅延時間変数の検証を修正し、変数の解析結果が無効な場合は直ちにエラーを返すことで、意図しない待機を防止。 ([#10469](https://github.com/nocobase/nocobase/pull/10469)) by @mytharcher
* **[ワークフロー]** MySQL 8.3 以降でワークフロー一覧のパラメータが無効になる問題を修正 ([#10486](https://github.com/nocobase/nocobase/pull/10486)) by @mytharcher
* **[権限制御]** ロール権限で下位階層のメニューを選択した際、すべての上位メニューが自動的に選択されない問題を修正 ([#10473](https://github.com/nocobase/nocobase/pull/10473)) by @zhangzhonghe
* **[データソース管理]** v2 のリレーションフィールド編集時に、逆方向フィールドの選択状態が保持されない問題を修正。 ([#10482](https://github.com/nocobase/nocobase/pull/10482)) by @katherinehhh
* **[フロントエンドフローエンジン]** 非管理者ユーザーで、フォーム連動ルール、参照テンプレート、スクリプト内の変数が正しく解析されない問題を修正。 ([#10467](https://github.com/nocobase/nocobase/pull/10467)) by @gchust
* **[ワークフロー：承認]** 承認ドラフトを編集して保存した後も、申請カードに古い内容が表示される問題を修正 by @zhangzhonghe
* **[アプリケーション監督]** ローリングアップデートまたはデプロイ環境の切り替え後に、サブアプリケーションへアクセスできなくなる問題を修正 by @2013xile
