### 🚀 機能改善

* **[undefined]** JavaScript Worker のデフォルトの同時実行動作と、同時実行数の上限を設定する必要があるケースを明確にしました。 ([#10317](https://github.com/nocobase/nocobase/pull/10317)) by @mytharcher
  参考ドキュメント：[JavaScript ノード](https://docs.nocobase.com/cn/workflow/nodes/javascript)
* **[ワークフロー：JavaScript ノード]** JavaScript ワークフローノードで非同期 Worker の実行をキューで処理するようにし、単一プロセス内の Worker 同時実行数を制限することで、リソース使用量のピークを抑えるようにしました。 ([#10280](https://github.com/nocobase/nocobase/pull/10280)) by @mytharcher

### 🐛 不具合修正

* **[フロントエンドフローエンジン]**
  * カスタムの非 Sequelize データソースで、モーダル内のレコード変数とリレーションブロックを正しく解析できない問題を修正しました。 ([#10272](https://github.com/nocobase/nocobase/pull/10272)) by @gchust
  * フォームのフィールド値変数が正しく解決されない問題を修正しました。 ([#10319](https://github.com/nocobase/nocobase/pull/10319)) by @gchust
* **[ファイルマネージャー]** クロスオリジン画像をプレビューした後、ブラウザキャッシュ内のレスポンスに CORS ヘッダーが含まれていないことで、ファイルをダウンロードできなくなる問題を修正しました。 ([#10313](https://github.com/nocobase/nocobase/pull/10313)) by @mytharcher
  参考ドキュメント：[ファイルプレビュー](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/file-preview/index.md) / [Alibaba Cloud OSS](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/storage/aliyun-oss.md)
