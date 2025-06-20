### 🎉 新機能

* **[テキストコピー]** テキストフィールドの内容を一クリックでコピーできる機能をサポート（[#6954](https://github.com/nocobase/nocobase/pull/6954)）@zhangzhonghe

### 🐛 不具合修正

* **[サーバー]** 未定義のプロパティを読み取ろうとして発生するエラー（'setMaaintainingMessage' 参照時）を修正（[#7064](https://github.com/nocobase/nocobase/pull/7064)）@chenos
* **[クライアント]**
  * 関連フィールドのセレクターが送信後に選択データをクリアしない問題（[#7067](https://github.com/nocobase/nocobase/pull/7067)）@katherinehhh
  * 逆関係フィールドを作成後、関連フィールド設定の「対象データテーブルに逆関係フィールドを作成」オプションがチェックされない問題（[#6914](https://github.com/nocobase/nocobase/pull/6914)）@aaaaaajie
* **[アクセス制御]** デフォルトロールが存在しない場合にアプリがアクセスブロックされる問題を修正（[#7059](https://github.com/nocobase/nocobase/pull/7059)）@aaaaaajie
* **[ワークフロー：ループノード]** 条件が満たされない場合でもループブランチが実行される問題を修正（[#7063](https://github.com/nocobase/nocobase/pull/7063)）@mytharcher
* **[データソースマネージャー]** スコープの変更を関連する全ロールに即時適用（[#7065](https://github.com/nocobase/nocobase/pull/7065)）@aaaaaajie
* **[ワークフロー：カスタムアクションイベント]** リダイレクト URL の変数が解析されない問題を修正 @mytharcher
* **[ワークフロー：承認]**
  * タイプによるフィルタリング時のトリガー変数を修正 @mytharcher
  * 実行がキャンセルされた際に Todo 統計が更新されない問題を修正 @mytharcher
