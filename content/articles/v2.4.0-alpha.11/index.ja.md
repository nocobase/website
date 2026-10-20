### 🐛 不具合修正

* **[server]**
  * アプリケーションを reload した後、Snowflake 主キーが重複する問題を修正しました。 ([#10911](https://github.com/nocobase/nocobase/pull/10911)) by @2013xile
  * ゲートウェイで、リクエストに含まれるアプリケーション名の検証と、アプリケーション間の状態分離が正しく行われない問題を修正しました。 ([#10548](https://github.com/nocobase/nocobase/pull/10548)) by @2013xile
* **[client-v2]** v2 の承認フォームのサブテーブルで、添付ファイルをプレビューできない問題と、編集ポップアップがほかの要素に隠れてしまう問題を修正しました。 ([#10586](https://github.com/nocobase/nocobase/pull/10586)) by @mytharcher
* **[データソース管理]** v2 のリレーションフィールド設定で外部キーを手動入力できない問題を修正し、新しいフィールド名を入力するか、既存フィールドから選択できるようにしました。 ([#10915](https://github.com/nocobase/nocobase/pull/10915)) by @katherinehhh
* **[ワークフロー]** KingBase が有効状態と実行回数を文字列として返す場合に、ワークフローが有効かどうか、およびすでに実行済みかどうかを正しく判定できない問題を修正しました。 ([#10888](https://github.com/nocobase/nocobase/pull/10888)) by @mytharcher
* **[AIワーカー]** AI 会話で、OpenAI の 2 種類の API モードに対して一貫したセッション単位のプロンプトキャッシュキーを渡すようにし、互換ゲートウェイでチャネルアフィニティを維持しやすくしました。 ([#10788](https://github.com/nocobase/nocobase/pull/10788)) by @cgyrock
