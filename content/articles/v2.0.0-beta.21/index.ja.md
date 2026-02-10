### 🎉 新機能

* **[client]** フォーム内でリレーションフィールドの項目を設定できるように対応 ([#8578](https://github.com/nocobase/nocobase/pull/8578)) by @katherinehhh
* **[操作：レコードコピー]** コピー操作 2.0 を追加 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) by @katherinehhh
* **[ワークフロー]** ワークフローキャンバス上でノードのコピー＆ペーストおよびドラッグによる位置変更に対応 ([#8559](https://github.com/nocobase/nocobase/pull/8559)) by @mytharcher

### 🚀 機能改善

* **[flow-engine]** JS model コードエディターの自動補完およびヒント機能を改善。 ([#8575](https://github.com/nocobase/nocobase/pull/8575)) by @gchust
* **[ワークフロー：承認]** JS Field のサポートを廃止 by @zhangzhonghe

### 🐛 不具合修正

* **[client]**
  * 非設定モードで "read hidden" のレンダリングエラーが発生する問題を修正。 ([#8591](https://github.com/nocobase/nocobase/pull/8591)) by @gchust
  * 編集フォームのサブテーブル（インライン編集）を読み取り専用に設定した後、閲覧モードに切り替えても編集用の列フィールドが残る問題を修正 ([#8589](https://github.com/nocobase/nocobase/pull/8589)) by @katherinehhh
* **[フロントエンドフローエンジン]** ブロックテンプレート使用時、コピー方式を選択するとポップアップ表示後に内容が空になる問題を修正。 ([#8581](https://github.com/nocobase/nocobase/pull/8581)) by @gchust
* **[ブロック：マップ]** マップブロックに「テンプレートとして保存」設定が重複表示される問題を修正 ([#8584](https://github.com/nocobase/nocobase/pull/8584)) by @katherinehhh
