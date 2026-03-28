### 🚀 機能改善

* **[ワークフロー]** 1 ページあたりの件数パラメータで変数を使えるようにしました ([#8951](https://github.com/nocobase/nocobase/pull/8951)) by @mytharcher
* **[ワークフロー：サブフロー]** ワークフローが例外発生時に処理途中で止まってしまうのを防ぐため、防御ロジックを追加しました by @mytharcher

### 🐛 不具合修正

* **[client]** ポップアップ内のツリーテーブルで子ノード追加時にエラーが発生する問題を修正 ([#8872](https://github.com/nocobase/nocobase/pull/8872)) by @jiannx
* **[フロントエンドフローエンジン]** uiSchema テーブルからコピーされた旧イベントを削除し、呼び出し後にエラーが発生する問題を回避 ([#8957](https://github.com/nocobase/nocobase/pull/8957)) by @mytharcher
* **[ユーザー認証]** ACL がカスタム state フィルタパラメータに対応するように修正 ([#8918](https://github.com/nocobase/nocobase/pull/8918)) by @jiannx
* **[メール管理]** テンプレート使用時に署名が上書きされてしまう問題を修正 by @jiannx
