### 🚀 機能改善

* **[データソース管理]** v2 のデータソース管理でリレーションフィールドを追加する際、v1 と同様に、外部キーを対象データテーブルの既存フィールドからドロップダウンで選択できるように改善。 ([#10526](https://github.com/nocobase/nocobase/pull/10526)) by @katherinehhh

### 🐛 不具合修正

* **[flow-engine]** V2 フォームの数値精度の検証で、小数点以下の桁数制限を超える値が許可されてしまう問題を修正。 ([#10512](https://github.com/nocobase/nocobase/pull/10512)) by @katherinehhh
* **[client-v2]** v2 サブテーブルで、フィールド追加前後の行の高さが一致しない問題を修正。 ([#10520](https://github.com/nocobase/nocobase/pull/10520)) by @katherinehhh
* **[ファイルマネージャー]** ナレッジベースのドキュメントダウンロードで、ファイルマネージャー共通のダウンロード処理を利用するように改善。 ([#10513](https://github.com/nocobase/nocobase/pull/10513)) by @cgyrock
* **[データソース管理]**
  * v2 のデータソース管理で、逆方向フィールドがすでに存在するリレーションフィールドを編集すると、保存時にエラーが発生する問題を修正。 ([#10521](https://github.com/nocobase/nocobase/pull/10521)) by @katherinehhh
  * v2 データソースエディターで、既存のリレーションフィールドに逆方向フィールドを追加する際、逆リレーションのタイプが空になり保存できない問題を修正。 ([#10511](https://github.com/nocobase/nocobase/pull/10511)) by @katherinehhh
  * v2 のデータソース設定でフィールドを削除した後、同じ名前のフィールドを再度追加すると「フィールド名がすでに存在する」と誤って表示される問題を修正。 ([#10509](https://github.com/nocobase/nocobase/pull/10509)) by @katherinehhh
* **[AI 従業員]**
  * AI セッションの時間コンテキストを固定し、フロントエンドツールの実行後に会話を継続する際のプロンプトキャッシュの再利用率を改善。 ([#10517](https://github.com/nocobase/nocobase/pull/10517)) by @cgyrock
  * ナレッジベースが無効で検索フィールドが空の場合、AI 従業員の設定を保存できない問題を修正 ([#10507](https://github.com/nocobase/nocobase/pull/10507)) by @cgyrock
* **[ワークフロー]** v2 ワークフローの更新ノードを再度開くと、複数リレーションフィールドの値設定が消える問題を修正。リレーション選択では関連キーを保存し、そのキーを使ってレコードを読み込み、表示を復元するように変更。 ([#10523](https://github.com/nocobase/nocobase/pull/10523)) by @mytharcher
* **[AI：ナレッジベース]** ナレッジベースドキュメントの削除操作を改善。ファイル名を表示し、ローカライズ済みのボタンを使用する確認モーダルを追加し、ドキュメントのダウンロードもファイルマネージャー共通の処理に統一。 by @cgyrock
* **[ワークフロー：承認]** V2 ネイティブページで、関連する承認ブロックの承認タスクをクリックしても承認ダイアログが開かない問題を修正。 by @mytharcher
* **[企業 WeChat]** Origin の末尾にスラッシュがある場合、企業 WeChat の認可 URL とコールバック URL にスラッシュが重複する問題を修正。 by @chenzhizdt
