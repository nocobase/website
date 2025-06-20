### 🎉 新機能

* **[テキストコピー]** テキストフィールドの内容を一クリックでコピーできる機能をサポート（[#6954](https://github.com/nocobase/nocobase/pull/6954)）@zhangzhonghe

### 🐛 不具合修正

* **[クライアント]**
  * 関連フィールドのセレクターが送信後に選択データをクリアしない問題（[#7067](https://github.com/nocobase/nocobase/pull/7067)）@katherinehhh
  * アップロードサイズのヒントを修正（[#7057](https://github.com/nocobase/nocobase/pull/7057)）@mytharcher
* **[サーバー]** 未定義のプロパティを読み取ろうとして発生するエラー（'setMaaintainingMessage' 参照時）を修正（[#7064](https://github.com/nocobase/nocobase/pull/7064)）@chenos
* **[ワークフロー：ループノード]** 条件が満たされない場合でもループブランチが実行される問題を修正（[#7063](https://github.com/nocobase/nocobase/pull/7063)）@mytharcher
* **[ワークフロー：承認]**
  * 実行がキャンセルされた際に Todo 統計が更新されない問題を修正 @mytharcher
  * タイプによるフィルタリング時のトリガー変数を修正 @mytharcher
