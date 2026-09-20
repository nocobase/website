### 🚀 機能改善

* **[データソース管理]** v2 のデータソース管理でリレーションフィールドを追加する際、v1 と同様に、外部キーを対象データテーブルの既存フィールドからドロップダウンで選択できるように改善。 ([#10526](https://github.com/nocobase/nocobase/pull/10526)) by @katherinehhh
* **[企業 WeChat]** 企業 WeChat で同期するメールアドレスの種類を設定できるようにし、フル同期と差分コールバックで使用するメールフィールドのマッピングを統一。 by @chenzhizdt

### 🐛 不具合修正

* **[client-v2]** v2 サブテーブルで、フィールド追加前後の行の高さが一致しない問題を修正。 ([#10520](https://github.com/nocobase/nocobase/pull/10520)) by @katherinehhh
* **[flow-engine]** V2 フォームの数値精度の検証で、小数点以下の桁数制限を超える値が許可されてしまう問題を修正。 ([#10512](https://github.com/nocobase/nocobase/pull/10512)) by @katherinehhh
* **[server]** カスタムリクエスト URL を介して機密性の高い環境変数が漏洩する問題を防止 ([#10503](https://github.com/nocobase/nocobase/pull/10503)) by @2013xile
* **[ファイルマネージャー]**
  * ナレッジベースのドキュメントダウンロードで、ファイルマネージャー共通のダウンロード処理を利用するように改善。 ([#10513](https://github.com/nocobase/nocobase/pull/10513)) by @cgyrock
  * v2 の添付ファイルおよび添付ファイル（URL）カードの削除ボタンを右上に移動し、プレビュー時に誤って添付ファイルを削除するリスクを低減。 ([#10508](https://github.com/nocobase/nocobase/pull/10508)) by @katherinehhh
* **[ワークフロー]** v2 ワークフローの更新ノードを再度開くと、複数リレーションフィールドの値設定が消える問題を修正。リレーション選択では関連キーを保存し、そのキーを使ってレコードを読み込み、表示を復元するように変更。 ([#10523](https://github.com/nocobase/nocobase/pull/10523)) by @mytharcher
* **[ブロック：コメント]** コメント専用の「編集」「削除」「引用して返信」アクションが、誤ってテーブル行アクションの設定メニューに表示される問題を修正。 ([#10519](https://github.com/nocobase/nocobase/pull/10519)) by @jiannx
* **[データソース管理]**
  * v2 のデータソース管理で、逆方向フィールドがすでに存在するリレーションフィールドを編集すると、保存時にエラーが発生する問題を修正。 ([#10521](https://github.com/nocobase/nocobase/pull/10521)) by @katherinehhh
  * v2 データソースエディターで、既存のリレーションフィールドに逆方向フィールドを追加する際、逆リレーションのタイプが空になり保存できない問題を修正。 ([#10511](https://github.com/nocobase/nocobase/pull/10511)) by @katherinehhh
  * v2 のデータソース設定でフィールドを削除した後、同じ名前のフィールドを再度追加すると「フィールド名がすでに存在する」と誤って表示される問題を修正。 ([#10509](https://github.com/nocobase/nocobase/pull/10509)) by @katherinehhh
* **[AI 従業員]**
  * ナレッジベースが無効で検索フィールドが空の場合、AI 従業員の設定を保存できない問題を修正 ([#10507](https://github.com/nocobase/nocobase/pull/10507)) by @cgyrock
  * AI セッションの時間コンテキストを固定し、フロントエンドツールの実行後に会話を継続する際のプロンプトキャッシュの再利用率を改善。 ([#10517](https://github.com/nocobase/nocobase/pull/10517)) by @cgyrock
  * データテーブルのロール権限で現在のユーザーに基づくデータ範囲を設定している場合、AI 従業員のデータクエリツールでレコードを取得できない問題を修正 ([#10501](https://github.com/nocobase/nocobase/pull/10501)) by @cgyrock
* **[データテーブルフィールド：自動コード]** 自動コードフィールドのランダム文字モードで複数の文字セットを設定した際、検証に失敗する問題を修正。 ([#10504](https://github.com/nocobase/nocobase/pull/10504)) by @mytharcher
* **[権限制御]** モダンクライアントのロール設定で、システム権限チェックボックス右側の空白部分をクリックすると、権限の選択状態が誤って切り替わる問題を修正。 ([#10518](https://github.com/nocobase/nocobase/pull/10518)) by @jiannx
* **[AI：ナレッジベース]** ナレッジベースドキュメントの削除操作を改善。ファイル名を表示し、ローカライズ済みのボタンを使用する確認モーダルを追加し、ドキュメントのダウンロードもファイルマネージャー共通の処理に統一。 by @cgyrock
* **[ワークフロー：承認]**
  * データ保存前にトリガーされる承認が差し戻され、その後再申請して承認された際、業務データが正しく保存されない問題を修正。 by @mytharcher
  * 順次承認で待機中の承認者には承認処理ボタンを表示せず、待機中であることを示すメッセージを表示。 by @mytharcher
  * V2 ネイティブページで、関連する承認ブロックの承認タスクをクリックしても承認ダイアログが開かない問題を修正。 by @mytharcher
* **[企業 WeChat]** Origin の末尾にスラッシュがある場合、企業 WeChat の認可 URL とコールバック URL にスラッシュが重複する問題を修正。 by @chenzhizdt
