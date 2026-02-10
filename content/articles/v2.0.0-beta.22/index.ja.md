### 🎉 新機能

* **[client]** ページ、ページタブ、ポップアップ、ポップアップタブでブラウザのタブタイトルを設定できるように対応 ([#8590](https://github.com/nocobase/nocobase/pull/8590)) by @zhangzhonghe
* **[ワークフロー：承認]** 承認関連 API に権限管理を追加 by @mytharcher

### 🚀 機能改善

* **[client]** フィルターフォームのリレーションフィールドで独立したフィールドモデルを使用するよう改善 ([#8511](https://github.com/nocobase/nocobase/pull/8511)) by @zhangzhonghe
* **[ワークフロー：CC]** ワークフロー CC プラグインを FlowModel アーキテクチャに対応するよう再構築し、v1/v2 設定との互換性を維持 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) by @zhangzhonghe

### 🐛 不具合修正

* **[flow-engine]**
  * JS block 内で Blob オブジェクトを作成できない問題を修正。 ([#8603](https://github.com/nocobase/nocobase/pull/8603)) by @gchust
  * JS Models 内の "ctx.sql" 実行時にコンテキストが正しく設定されない問題を修正。 ([#8602](https://github.com/nocobase/nocobase/pull/8602)) by @gchust
* **[フィールドコンポーネント：マスク]** マスクフィールド設定ダイアログで、すべてのユーザーロールが正しく読み込まれない問題を修正。 by @gchust
* **[ワークフロー：承認]** 詳細データ読み込み時に誤った id パラメータを使用していた問題を修正 by @mytharcher
