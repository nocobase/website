### 🎉 新機能

* **[client]** 関連ブロックに関連付け/関連付け解除操作を追加 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh
* **[テキストコピー]** 読み取り表示のテキストフィールドで「コピーを有効化」設定をサポート ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh

### 🚀 機能改善

* **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn
* **[client]** フィールド値の割り当てで自動採番フィールドを使用可能に ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher

### 🐛 不具合修正

* **[flow-engine]** v2 Flow フォームで、データテーブルフィールドのバリデーションメッセージが翻訳されない問題を修正 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx
* **[client]**
  * フォームブロックで `非表示にして値を保持` に設定されたフィールドがページ編集モードで表示されない問題を修正し、フィールド値の割り当てでこれらのフィールドに値を入力できるように復元 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx
  * AttachmentURL フィールドでファイルメタデータが不足している場合に、ダウンロード時のファイル名が異常になる問題を修正。 ([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher
  * v2 テーブルでワークフローを一括トリガーした後、別のタブへ移動して元のタブに戻ると選択状態が同期されず、再度レコードを選択できてしまう問題を修正 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx
  * フィルターフォームを折りたためない問題を修正 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe
  * v1 サブテーブルの連動ルールが、フィールドの必須スタイルを誤って変更する問題を修正 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe
  * グリッドカードブロックでデータ更新後に再読み込みしても、データが正しく表示されない問題を修正 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh
  * サブテーブル内の選択肢フィールドの必須入力が、モバイル端末で 2 回選択しないと反映されない問題を修正 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh
  * キャッシュされたページを切り替えた後、URL クエリパラメータ変数が無効になる問題を修正 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe
  * v2 DividerItem がテーマに対応していない問題を修正 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh
  * v2 サブテーブルで、関係フィールドのドロップダウン選択肢コンポーネントにクイック編集の設定項目が誤って表示される問題を修正 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh
  * ブロック内フォームの値が変更された際に、連動ルールが自動実行されない問題を修正。 ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust
  * カスタムドロップダウン複数選択でスカラーフィールドをフィルタリングする際にエラーが発生する問題を修正 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe
* **[server]** プラグインパッケージ名の検証を追加 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos
* **[データソース管理]** ロール権限設定で、外部データソースのカスタム範囲によりすべてのデータを編集・削除できてしまう問題を修正 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh
* **[データソース：メインデータベース]** テーブルプレフィックス有効時にデータベーステーブルをインポートすると、プレフィックス付きのテーブル名が誤って使用される問題を修正 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile
* **[通知：サイト内メッセージ]** リアルタイムのサイト内メッセージを受信した後、通知リストがすぐに更新されない問題を修正 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher
* **[ブロック：カンバン]** v1 カンバンブロックの長文フィールドで、単語の途中で改行される問題を修正 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh
* **[データテーブルフィールド：数式]** v2 サブテーブルで数式フィールドの値が自動計算されない問題を修正 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh
