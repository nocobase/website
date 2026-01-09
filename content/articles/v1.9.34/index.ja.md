### 🚀 機能改善

* **[権限管理]** ネストされたリレーションフィールドを編集する際の権限判定ロジックをより適切に処理できるよう改善 ([#7856](https://github.com/nocobase/nocobase/pull/7856)) by @2013xile

### 🐛 不具合修正

* **[client]**
  * フォームブロック内で、外部データソースのリレーションテーブルにおけるリレーションフィールドのデータが読み込まれない不具合を修正 ([#8356](https://github.com/nocobase/nocobase/pull/8356)) by @katherinehhh
  * `FilterAction` コンポーネントにおいて、リレーションフィールドの表示内容が正しくない問題を修正 ([#8295](https://github.com/nocobase/nocobase/pull/8295)) by @mytharcher
* **[logger]** システムログ出力時に、付加的なエラー情報が失われてしまう問題を修正 ([#8367](https://github.com/nocobase/nocobase/pull/8367)) by @cgyrock
* **[ワークフロー：ループノード]** 条件分岐内で失敗したノードの状態が上位分岐に引き継がれず、フローが誤動作する問題を修正 ([#8360](https://github.com/nocobase/nocobase/pull/8360)) by @mytharcher
* **[データソース：メインデータベース]** ビュー用テーブルのメタデータに、元のフィールド情報が正しく含まれるよう修正 ([#8337](https://github.com/nocobase/nocobase/pull/8337)) by @2013xile
* **[ワークフロー]**
  * ワークフローのCCノードにおいて、詳細ブロックの連動ルールが反映されない不具合を修正 ([#8381](https://github.com/nocobase/nocobase/pull/8381)) by @zhangzhonghe
  * クラスタ環境でのID衝突を防ぐため、ノード実行履歴のSnowflake IDにインスタンスID設定を追加 ([#8382](https://github.com/nocobase/nocobase/pull/8382)) by @mytharcher
  * ワークフロー削除後に、実行計画ページがクラッシュする問題を修正 ([#8361](https://github.com/nocobase/nocobase/pull/8361)) by @mytharcher
* **[操作：レコードのインポート]** xlsxファイルの非同期インポート時に一意制約エラーが発生した場合、正しいエラーメッセージが表示されない不具合を修正 ([#8342](https://github.com/nocobase/nocobase/pull/8342)) by @cgyrock
* **[権限管理]**
  * リレーションフィールドを、ターゲットキーを用いて関連付けできるよう対応 ([#8352](https://github.com/nocobase/nocobase/pull/8352)) by @2013xile
  * リレーションフィールドの権限処理時に、誤ったデータソースが参照される問題を修正 ([#8370](https://github.com/nocobase/nocobase/pull/8370)) by @2013xile
* **[データソース：REST API]** リクエストコンテキストに耐障害処理を追加し、メソッド未定義時にエラーが発生しないよう改善 by @mytharcher
* **[操作：レコードのエクスポート Pro]** メインアプリでインポート／エクスポートProプラグインが有効でない場合に、サブアプリで非同期インポート／エクスポートタスクを実行するとエラーになる不具合を修正 by @cgyrock
* **[ワークフロー：承認]** フィルターフィールドがタスクセンターで正常に利用できない問題を修正 by @mytharcher
