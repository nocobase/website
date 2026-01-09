### 🚀 機能改善

* **[権限管理]** ネストされたリレーションフィールドを変更する際の権限チェックロジックを見直し、判定をより適切に改善 ([#7856](https://github.com/nocobase/nocobase/pull/7856)) by @2013xile

### 🐛 不具合修正

* **[client]**
  * targetKey の選択可能フィールドに関する処理を修正 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
  * `FilterAction` コンポーネントでリレーションフィールドが正しく表示されない不具合を修正 ([#8295](https://github.com/nocobase/nocobase/pull/8295)) by @mytharcher
  * 編集中のサブテーブルで、リレーションフィールドの Select に設定される filter パラメータが誤っている問題を修正 ([#8335](https://github.com/nocobase/nocobase/pull/8335)) by @katherinehhh
* **[flow-engine]** モーダルを繰り返し開いた際に、状態が意図せず引き継がれてしまう不具合を修正 ([#8327](https://github.com/nocobase/nocobase/pull/8327)) by @gchust
* **[database]** オブジェクト型 `appends` パラメータの処理を見直し、パラメータ解析時の `arrayLimit` の上限を拡張 ([#8328](https://github.com/nocobase/nocobase/pull/8328)) by @mytharcher
* **[操作：レコードインポート]** xlsx ファイルの非同期インポート時に、一意制約エラーが発生した場合のエラーメッセージが正しく表示されない問題を修正 ([#8342](https://github.com/nocobase/nocobase/pull/8342)) by @cgyrock
* **[データソース：メインデータベース]** ビュー用テーブルのメタデータに、元のフィールド情報が含まれるよう対応 ([#8337](https://github.com/nocobase/nocobase/pull/8337)) by @2013xile
* **[操作：レコードエクスポート Pro]** メインアプリで Pro プラグインが無効な場合に、サブアプリの非同期インポート／エクスポート処理でエラーが発生する問題を修正 by @cgyrock
* **[ワークフロー：承認]** 待ちタスクセンターでフィルターフィールドが正常に動作しない不具合を修正 by @mytharcher
* **[メール管理]** 「全員に返信」ボタンを表示し、データ範囲のフィルターでサブメールも対象にできるよう改善 by @jiannx
