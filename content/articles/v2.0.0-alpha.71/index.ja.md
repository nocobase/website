### 🎉 新機能

* **[client]**
  * ページ／ページタブ／ポップアップ／ポップアップタブで、ブラウザのタブタイトルを設定できるように対応 ([#8590](https://github.com/nocobase/nocobase/pull/8590)) by @zhangzhonghe
  * フォーム内でリレーションフィールドの項目を設定できるように対応 ([#8578](https://github.com/nocobase/nocobase/pull/8578)) by @katherinehhh
* **[ブロック：グリッドカード]** ブロックの高さを設定できるように対応 ([#8583](https://github.com/nocobase/nocobase/pull/8583)) by @katherinehhh
* **[操作：レコードコピー]** コピー操作 2.0 を追加 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) by @katherinehhh
* **[ワークフロー：承認]** 承認関連 API に権限管理を追加 by @mytharcher

### 🚀 機能改善

* **[client]** フィルターフォームのリレーションフィールドで独立したフィールドモデルを使用するよう改善 ([#8511](https://github.com/nocobase/nocobase/pull/8511)) by @zhangzhonghe
* **[ワークフロー：CC]** ワークフロー CC プラグインを FlowModel アーキテクチャ対応へ再構築し、v1/v2 設定との互換性を確保 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) by @zhangzhonghe

### 🐛 不具合修正

* **[flow-engine]**
  * JS Models で "ctx.sql" 実行時のコンテキストが不正になる問題を修正。 ([#8602](https://github.com/nocobase/nocobase/pull/8602)) by @gchust
  * JS block 内で Blob オブジェクトを作成できない問題を修正。 ([#8603](https://github.com/nocobase/nocobase/pull/8603)) by @gchust
* **[client]**
  * JS column コードエディターで run ボタンを押した後、テーブル列が再読み込みされない問題を修正。 ([#8608](https://github.com/nocobase/nocobase/pull/8608)) by @gchust
  * 設定モード以外で "read hidden" のレンダリングエラーが発生する場合がある問題を修正。 ([#8591](https://github.com/nocobase/nocobase/pull/8591)) by @gchust
  * 編集フォームのサブテーブル（インライン編集）を読み取り専用にした後、閲覧モードに切り替えても編集用の列フィールドが残る問題を修正 ([#8589](https://github.com/nocobase/nocobase/pull/8589)) by @katherinehhh
* **[フロントエンドフローエンジン]** ブロックテンプレート使用時、コピー方式を選択するとポップアップ表示後に内容が空になる問題を修正。 ([#8581](https://github.com/nocobase/nocobase/pull/8581)) by @gchust
* **[フィールドコンポーネント：マスク]** マスクフィールドの設定ダイアログで、全ユーザーロールが正しく読み込まれない問題を修正。 by @gchust
* **[ワークフロー：承認]** 詳細データ読み込み時に誤った id パラメータを使用していた問題を修正 by @mytharcher
