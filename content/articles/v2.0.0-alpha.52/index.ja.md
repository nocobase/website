### 🎉 新機能

* **[client]** 多対サブフォームで「データ追加」「既存データの選択」「関連解除」が設定できるように機能を追加 ([#8099](https://github.com/nocobase/nocobase/pull/8099)) by @katherinehhh
* **[データソース：REST API]** REST API データソース設定に、エラー内容を変換できる項目を追加 by @cgyrock

### 🚀 機能改善

* **[auth]**[CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) の脆弱性を修正 ([#8128](https://github.com/nocobase/nocobase/pull/8128)) by @2013xile
* **[操作：レコードインポート]**
  * インポート設定で ID を選べるよう対応 ([#8133](https://github.com/nocobase/nocobase/pull/8133)) by @katherinehhh
  * インポートフィールドで ID を選べるよう対応 ([#8132](https://github.com/nocobase/nocobase/pull/8132)) by @katherinehhh
* **[ワークフロー：承認]** 承認単票を取得する API を見直し、コードを簡潔化 by @mytharcher

### 🐛 不具合修正

* **[client]**
  * リレーションフィールドが子フィールドの disabled 設定で制限される問題を修正 ([#8131](https://github.com/nocobase/nocobase/pull/8131))
  * `RemoteSelect` が値なしの場合に誤った候補を読み込む問題を修正 ([#8137](https://github.com/nocobase/nocobase/pull/8137))
  * 日付フィルターで「過去」「未来」を選んだ際に幅が揃わない UI 問題を修正 ([#8130](https://github.com/nocobase/nocobase/pull/8130))
  * フィルターフォームのデフォルトラベルが正しく翻訳されない問題を修正 ([#8135](https://github.com/nocobase/nocobase/pull/8135))
  * JS block のタイトル説明の見た目を他のブロックと統一 ([#8115](https://github.com/nocobase/nocobase/pull/8115))
  * サブフォーム内の入れ子テーブルが表示されない問題を修正 ([#8117](https://github.com/nocobase/nocobase/pull/8117))
  * 複数行テキストが改行されない問題を修正 ([#8122](https://github.com/nocobase/nocobase/pull/8122))
  * フィルターフォームでリレーションデータが正しく読み込まれない問題を修正 ([#8109](https://github.com/nocobase/nocobase/pull/8109))
  * 「いずれかを含む」「いずれも含まない」で全候補が表示されない問題を修正 ([#8118](https://github.com/nocobase/nocobase/pull/8118))
  * カスタムフィールド設定が反映されず、一部が適用されない問題を修正 ([#8106](https://github.com/nocobase/nocobase/pull/8106))
  * 時間範囲フィルターをクリア後に再実行するとエラーが出る問題を修正 ([#8110](https://github.com/nocobase/nocobase/pull/8110))
  * number フィールド値が正しく反映されない問題を修正 ([#8104](https://github.com/nocobase/nocobase/pull/8104))
  * 一部フィールドの演算子が正しく動作しない問題を修正 ([#8100](https://github.com/nocobase/nocobase/pull/8100))
  * Checkbox フィールドのフィルターが機能しない問題を修正 ([#8103](https://github.com/nocobase/nocobase/pull/8103))
* **[flow-engine]**
  * integer 型の選択肢が正しく変換されない問題を修正 ([#8138](https://github.com/nocobase/nocobase/pull/8138))
  * toggleable サブモデルメニューが useModel 未指定で切り替えできない問題を修正し、自動推定に対応 ([#8105](https://github.com/nocobase/nocobase/pull/8105))
* **[server]** インポート後に開始されたワークフローがキューへ追加されない問題を修正し、正常処理できるよう改善 ([#8121](https://github.com/nocobase/nocobase/pull/8121))
* **[通知：メール]** メール通知の接続数制限の問題を修正 ([#8119](https://github.com/nocobase/nocobase/pull/8119))
* **[データテーブルフィールド：計算式]** 計算式フィールドがフィルターで値入力できない問題を修正 ([#8102](https://github.com/nocobase/nocobase/pull/8102))
* **[マルチスペース]** システムテーブルで他のフィールドが作成できない問題を修正 by @jiannx
