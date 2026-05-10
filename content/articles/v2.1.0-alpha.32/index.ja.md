### 🎉 新機能

* **[client]** v2 フォームの日付フィールドに、日付範囲制限の設定項目を追加 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh
* **[flow-engine]**`plugin-environment-variables` を client-v2 に移行し、React ベースの設定ページと、グローバルに登録される `$env` ランタイム変数を提供。`plugin-file-manager` に client-v2 エントリを追加し、React ベースのストレージ設定ページ、および FlowModel ベースのアップロードフィールド、アップロード操作、プレビュー機能を提供。 ([#9413](https://github.com/nocobase/nocobase/pull/9413)) by @Molunerfinn

### 🚀 機能改善

* **[undefined]** nb cli で session レベルの current env をサポート ([#9415](https://github.com/nocobase/nocobase/pull/9415)) by @chenos

### 🐛 不具合修正

* **[client]**
  * 新規追加ポップアップで、関係フィールドのデフォルト値ポップアップが正しく表示されない問題を修正。 ([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust
  * JS field を読み取り専用に変更した後、js コードを再度編集できない問題を修正。 ([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust
  * ルート管理ページの設定が、ページタブの設定と同期されない問題を修正 ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe
  * フィールド連動ルールで、サブテーブルフィールドへの値の割り当てが反映されない問題を修正。 ([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust
* **[データテーブルフィールド：Markdown(Vditor)]** フォームの水平レイアウト時に、markdown フィールドのヒント情報が遮られる問題を修正 ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh
* **[Web クライアント]** 翻訳後のルートタイプを使用すると、データを絞り込めない問題を修正 ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe
* **[モバイル（非推奨）]** モバイル端末でメッセージポップアップを閉じられず、スクロールもできない問題を修正 ([#9424](https://github.com/nocobase/nocobase/pull/9424)) by @zhangzhonghe
* **[ワークフロー：承認]** 承認処理設定に JS field が表示される問題を修正 by @zhangzhongh
