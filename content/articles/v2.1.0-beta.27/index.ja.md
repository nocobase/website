### 🎉 新機能

* **[server]** AI 従業員が Bash コマンドで内蔵ドキュメントを検索できるように ([#9269](https://github.com/nocobase/nocobase/pull/9269)) by @2013xile
* **[AI 従業員]** ワークフローの AI 従業員ノードで、添付ファイルフィールドからファイルを読み込めるように ([#9402](https://github.com/nocobase/nocobase/pull/9402)) by @cgyrock
* **[テキストコピー]** 読み取り表示のテキストフィールドで「コピーを有効化」設定をサポート ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh

### 🚀 機能改善

* **[client]** フィールド値の割り当てで自動採番フィールドを使用可能に ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher
* **[ブロック：カンバン]** v2 詳細フィールドの間隔を揃え、カンバンカードと列間隔がテーマ設定により適切に対応するよう改善。 ([#9390](https://github.com/nocobase/nocobase/pull/9390)) by @jiannx
* **[AI 従業員]** Nathan の RunJS 編集ツールを改善し、長い AI 会話での動作の重さを軽減 ([#9311](https://github.com/nocobase/nocobase/pull/9311)) by @2013xile
* **[ワークフロー：承認]** 承認フォームの必須バリデーションに関する操作性の問題を修正 by @zhangzhonghe

### 🐛 不具合修正

* **[flow-engine]** v2 Flow フォームで、データテーブルフィールドのバリデーションメッセージが翻訳されない問題を修正 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx
* **[client]**
  * フィルターフォームを折りたためない問題を修正 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe
  * カスタムドロップダウン複数選択でスカラーフィールドをフィルタリングする際にエラーが発生する問題を修正 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe
  * AttachmentURL フィールドでファイルメタデータが不足している場合に、ダウンロード時のファイル名が異常になる問題を修正。 ([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher
  * v2 DividerItem がテーマに対応していない問題を修正 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh
  * v1 サブテーブルの連動ルールが、フィールドの必須スタイルを誤って変更する問題を修正 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe
  * フォームブロックで `非表示にして値を保持` に設定されたフィールドがページ編集モードで表示されない問題を修正し、フィールド値の割り当てでこれらのフィールドに値を入力できるように復元 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx
  * v2 テーブルでワークフローを一括トリガーした後、別のタブへ移動して元のタブに戻ると選択状態が同期されず、再度レコードを選択できてしまう問題を修正 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx
* **[client-v2]**
  * フィールド値設定で関係フィールドを選択するとエラーが発生する問題を修正。 ([#9379](https://github.com/nocobase/nocobase/pull/9379)) by @gchust
  * アプリ起動後に 404 ページが一瞬表示される問題を修正 ([#9365](https://github.com/nocobase/nocobase/pull/9365)) by @zhangzhonghe
* **[server]** サブアプリの OAuth discovery リクエストが、誤ってメインアプリのリクエストとしてルーティングされる問題を修正 ([#9383](https://github.com/nocobase/nocobase/pull/9383)) by @2013xile
* **[データソース：メインデータベース]** テーブルプレフィックス有効時にデータベーステーブルをインポートすると、プレフィックス付きのテーブル名が誤って使用される問題を修正 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile
* **[通知：サイト内メッセージ]** リアルタイムのサイト内メッセージを受信した後、通知リストがすぐに更新されない問題を修正 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher
* **[データソース管理]** ロール権限設定で、外部データソースのカスタム範囲によりすべてのデータを編集・削除できてしまう問題を修正 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh
* **[AI: MCP サーバー]** MCP サーバーのパッケージ化時に、ランタイム依存関係が含まれない問題を修正 ([#9401](https://github.com/nocobase/nocobase/pull/9401)) by @2013xile
* **[フロントエンドフローエンジン]** AI が構築したブロックを参照テンプレートに変換した後、コピー用テンプレートへ再変換できない問題を修正。 ([#9392](https://github.com/nocobase/nocobase/pull/9392)) by @gchust
* **[操作：レコードインポート Pro]** 日付フィールドに対する重複チェックが常に失敗する問題を修正 by @mytharcher
* **[パスワードポリシー]** 永久ロックされたユーザーのログイン制限が、サービス再起動後に失効する可能性がある問題を修正 by @2013xile
* **[ワークフロー：承認]** 承認ワークフロー設定で、レコード選択ドロワーが遮られる問題を修正 by @zhangzhonghe
* **[バックアップマネージャー]** pg データベース schema への対応問題を修正 by @Andrew1989Y
