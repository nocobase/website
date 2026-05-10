### 🎉 新機能

* **[client]** 関連ブロックに関連付け/関連付け解除操作を追加 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh
* **[テキストコピー]** 読み取り表示のテキストフィールドで「コピーを有効化」設定をサポート ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh
* **[AI 従業員]** ワークフローの AI 従業員ノードで、添付ファイルフィールドからファイルを読み込めるように ([#9402](https://github.com/nocobase/nocobase/pull/9402)) by @cgyrock
* **[データ可視化]** 新規ブロックプラグインで client-v2 をサポート ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe

### 🚀 機能改善

* **[client]** フィールド値の割り当てで自動採番フィールドを使用可能に ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher
* **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn
* **[ブロック：カンバン]** v2 詳細フィールドの間隔を揃え、カンバンカードと列間隔がテーマ設定により適切に対応するよう改善。 ([#9390](https://github.com/nocobase/nocobase/pull/9390)) by @jiannx
* **[ワークフロー：承認]** 承認フォームの必須バリデーションに関する操作性の問題を修正 by @zhangzhonghe

### 🐛 不具合修正

* **[client]**
  * フィルターフォームを折りたためない問題を修正 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe
  * v2 テーブルでワークフローを一括トリガーした後、別のタブへ移動して元のタブに戻ると選択状態が同期されず、再度レコードを選択できてしまう問題を修正 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx
  * フォームブロックで `非表示にして値を保持` に設定されたフィールドがページ編集モードで表示されない問題を修正し、フィールド値の割り当てでこれらのフィールドに値を入力できるように復元 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx
  * v2 DividerItem がテーマに対応していない問題を修正 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh
  * AttachmentURL フィールドでファイルメタデータが不足している場合に、ダウンロード時のファイル名が異常になる問題を修正。 ([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher
  * カスタムドロップダウン複数選択でスカラーフィールドをフィルタリングする際にエラーが発生する問題を修正 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe
  * ブロック内フォームの値が変更された際に、連動ルールが自動実行されない問題を修正。 ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust
  * v1 サブテーブルの連動ルールが、フィールドの必須スタイルを誤って変更する問題を修正 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe
  * グリッドカードブロックでデータ更新後に再読み込みしても、データが正しく表示されない問題を修正 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh
  * サブテーブル内の選択肢フィールドの必須入力が、モバイル端末で 2 回選択しないと反映されない問題を修正 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh
  * v2 サブテーブルで、関係フィールドのドロップダウン選択肢コンポーネントにクイック編集の設定項目が誤って表示される問題を修正 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh
  * キャッシュされたページを切り替えた後、URL クエリパラメータ変数が無効になる問題を修正 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe
* **[flow-engine]** v2 Flow フォームで、データテーブルフィールドのバリデーションメッセージが翻訳されない問題を修正 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx
* **[server]**
  * サブアプリの OAuth discovery リクエストが、誤ってメインアプリのリクエストとしてルーティングされる問題を修正 ([#9383](https://github.com/nocobase/nocobase/pull/9383)) by @2013xile
  * プラグインパッケージ名の検証を追加 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos
* **[client-v2]**
  * フィールド値設定で関係フィールドを選択するとエラーが発生する問題を修正。 ([#9379](https://github.com/nocobase/nocobase/pull/9379)) by @gchust
  * アプリ起動後に 404 ページが一瞬表示される問題を修正 ([#9365](https://github.com/nocobase/nocobase/pull/9365)) by @zhangzhonghe
  * v2 ページでブロックをドラッグする際、プレースホルダーのハイライトとドロップ位置が正しく表示されない問題を修正 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe
  * 一部の v2 ページでリモートプラグインの読み込みに失敗する問題を修正 ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe
* **[undefined]** 多言語ドキュメント内のリンク切れを修正し、ドキュメントビルド時のリンク切れ検出をデフォルトで有効化。 ([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn
* **[通知：サイト内メッセージ]** リアルタイムのサイト内メッセージを受信した後、通知リストがすぐに更新されない問題を修正 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher
* **[データソース管理]** ロール権限設定で、外部データソースのカスタム範囲によりすべてのデータを編集・削除できてしまう問題を修正 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh
* **[AI: MCP サーバー]** MCP サーバーのパッケージ化時に、ランタイム依存関係が含まれない問題を修正 ([#9401](https://github.com/nocobase/nocobase/pull/9401)) by @2013xile
* **[データソース：メインデータベース]** テーブルプレフィックス有効時にデータベーステーブルをインポートすると、プレフィックス付きのテーブル名が誤って使用される問題を修正 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile
* **[フロントエンドフローエンジン]** AI が構築したブロックを参照テンプレートに変換した後、コピー用テンプレートへ再変換できない問題を修正。 ([#9392](https://github.com/nocobase/nocobase/pull/9392)) by @gchust
* **[AI 従業員]**
  * ワークフローの AI 従業員ノードが関係フィールドの添付ファイルを読み取る際にエラーが発生する問題を修正 ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock
  * ワークフローの AI 従業員ノードで使用するツールを指定した後、ノード呼び出しが正常に終了しない問題を修正 ([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock
* **[操作：カスタムリクエスト]** koa を v3 にアップグレード ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos
* **[ブロック：カンバン]**
  * カンバンカードのコンパクト表示と、クイック作成ポップアップのテンプレート選択を改善。 ([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx
  * v1 カンバンブロックの長文フィールドで、単語の途中で改行される問題を修正 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh
* **[データテーブルフィールド：数式]** v2 サブテーブルで数式フィールドの値が自動計算されない問題を修正 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh
* **[操作：レコードインポート Pro]** 日付フィールドに対する重複チェックが常に失敗する問題を修正 by @mytharcher
* **[パスワードポリシー]** 永久ロックされたユーザーのログイン制限が、サービス再起動後に失効する可能性がある問題を修正 by @2013xile
* **[ワークフロー：承認]** 承認ワークフロー設定で、レコード選択ドロワーが遮られる問題を修正 by @zhangzhonghe
* **[メール管理]** メールボックスエイリアスのタイトル表示問題を修正 by @jiannx
* **[バックアップマネージャー]** pg データベース schema への対応問題を修正 by @Andrew1989Y
