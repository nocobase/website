### 🚀 機能改善

* **[client]** webkit ネイティブ CSS によるテキスト省略表示を採用し、プラグインマネージャー一覧の表示パフォーマンスを向上 ([#8391](https://github.com/nocobase/nocobase/pull/8391)) by @mytharcher

### 🐛 不具合修正

* **[ファイルマネージャー]** S3 ストレージエンジンにアップロードしたファイルの URL が正しく生成されない問題を修正 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) by @mytharcher
* **[ワークフロー]** ワークフロー複製後、ノード設定内の画面設定 ID が更新されない不具合を修正 ([#8396](https://github.com/nocobase/nocobase/pull/8396)) by @mytharcher
* **[ファイルストレージ：S3 (Pro)]** ファイルのリネームモードが動作しない問題を修正 by @mytharcher
* **[テンプレート印刷]** テンプレート設定用ダイアログが画面上で遮られて表示される問題を修正 by @zhangzhonghe
* **[ワークフロー：承認]**`ValueBlock.Result` コンポーネントが注入されていないため、値ブロックの内容が表示されない問題を修正 by @mytharcher
