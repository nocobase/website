### 🚀 機能改善

* **[部門]** 部門と部門ロールの関連テーブルに「構造のみを移行」オプションを追加し、移行先環境にある既存レコードをそのまま保持できるように改善。 ([#11343](https://github.com/nocobase/nocobase/pull/11343)) by @zhouyanliang

### 🐛 不具合修正

* **[client-v2]** v2 のリレーションフィールドのドロップダウン選択およびカスケード選択で、文字列を返す数式フィールドをラベルとして使用した場合、一部のテキスト検索が機能しない問題を修正。 ([#11370](https://github.com/nocobase/nocobase/pull/11370)) by @hongboji
* **[ファイルマネージャー]** v2 ファイルマネージャーで JPEG2000 画像のデコードに必要なリソースが不足し、PDF プレビューが空白になる問題を修正。 ([#11308](https://github.com/nocobase/nocobase/pull/11308)) by @mytharcher
