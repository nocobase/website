### 🚀 機能改善

* **[ワークフロー]** ワークフローの保留中タスク処理を改善し、開始・再開・再実行タスクをイベントキューへ永続化するようにしました。 ([#9846](https://github.com/nocobase/nocobase/pull/9846)) by @mytharcher

### 🐛 不具合修正

* **[ai]** ドキュメント読み込みの信頼性を向上し、暗号化 PDF に対する明確なエラーメッセージ表示とタイムアウト処理を追加しました。 ([#10172](https://github.com/nocobase/nocobase/pull/10172)) by @cgyrock
* **[flow-engine]** v2 テーブルのクイック編集表示が、レコード単位・フィールド単位の更新権限設定に正しく従わない問題を修正しました。 ([#10182](https://github.com/nocobase/nocobase/pull/10182)) by @katherinehhh
* **[AIワーカー]**
  * AIワーカーのワークフローノードにおいて、Operator 変数セレクターのサブメニューを展開できない問題を修正し、必須フィールドから Null オプションを削除しました。 ([#10167](https://github.com/nocobase/nocobase/pull/10167)) by @cgyrock
  * 既存セッション内で新しいセッションを開始した場合、AIワーカーのショートカットがブロックコンテキストを保持できない問題を修正しました。 ([#10169](https://github.com/nocobase/nocobase/pull/10169)) by @cgyrock
  * AI フォームコンテキストでフォーム項目のカスタムラベルが適用されない問題を修正しました。 ([#10168](https://github.com/nocobase/nocobase/pull/10168)) by @cgyrock
* **[AI: ナレッジベース]** AI ナレッジベースのドキュメント処理を改善し、PDF エラー表示の改善、アップロードサイズ検証、タイムアウト保護、分割リストの正しいページネーションに対応しました。 by @cgyrock
* **[ワークフロー：承認]** UI Editor を閉じた際に、承認設定でフィールドテンプレートが不足する問題を修正しました。 by @zhangzhonghe
