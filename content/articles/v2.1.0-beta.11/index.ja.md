### 🚀 機能改善

* **[ワークフロー]** 実行記録一覧にフィルタ機能を追加 ([#8914](https://github.com/nocobase/nocobase/pull/8914)) by @mytharcher
* **[ワークフロー：承認]** トリガーでデータテーブルが設定されていない場合、承認者設定画面を利用できないように対応 by @mytharcher

### 🐛 不具合修正

* **[server]** ワーカープロセスがアプリケーションライフサイクルイベントを送信することで、サービスインスタンスが停止してしまう問題を修正 ([#8906](https://github.com/nocobase/nocobase/pull/8906)) by @mytharcher
* **[client]** 非管理者が関連フィールド値をクリアできない問題を修正 ([#8904](https://github.com/nocobase/nocobase/pull/8904)) by @jiannx
* **[resourcer]**`filterByTk` パラメータの配列要素が 100 件を超えた際、自動的にオブジェクトへ変換される問題を回避 ([#8908](https://github.com/nocobase/nocobase/pull/8908)) by @2013xile
* **[操作：インポート記録 Pro]**
  * 同期モードでインポート時にエラーが発生する問題を修正 by @mytharcher
  * ファイルストリームの重複読み取りにより、約 30 列を超えるファイルのインポートでエラーが発生する問題を修正 by @mytharcher
* **[ワークフロー：承認]** 追加承認時の同時実行に関する問題を修正 by @mytharcher
* **[移行管理]** マイグレーションのアップロード時、対象環境に新規作成対象のテーブルが存在しないことでエラーが発生し、移行が中断される問題を修正 by @Andrew1989Y
