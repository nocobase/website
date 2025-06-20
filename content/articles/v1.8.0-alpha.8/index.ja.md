### 🎉 新機能

* **[テキストコピー]** テキストフィールドの内容を一クリックでコピーできる機能をサポート（[#6954](https://github.com/nocobase/nocobase/pull/6954)）@zhangzhonghe
* **[メールマネージャー]** メール削除機能をサポート @jiannx

### 🚀 機能改善

* **[クライアント]**
  * チェックボックスフィールドの連携ルールに「空」と「空でない」オプションを追加（[#7073](https://github.com/nocobase/nocobase/pull/7073)）@katherinehhh
  * ロゴコンテナの幅をコンテンツタイプに合わせて調整（画像は固定 168px、テキストは自動幅）（[#7075](https://github.com/nocobase/nocobase/pull/7075)）@Cyx649312038
* **[非同期タスクマネージャー]** エクスポート時のタスク作成パフォーマンスを改善（[#7078](https://github.com/nocobase/nocobase/pull/7078)）@aaaaaajie
* **[ワークフロー：承認]** 再割り当て先のリストに追加フィールドオプションを追加 @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 金額コンポーネントをマスクから inputNumer に切り替えた後、小数点が失われる問題（[#7077](https://github.com/nocobase/nocobase/pull/7077)）@katherinehhh
  * サブテーブル内の Markdown（Vditor）レンダリングが正しくない問題（[#7074](https://github.com/nocobase/nocobase/pull/7074)）@katherinehhh
  * 逆関係フィールドを作成後、関連フィールド設定の「対象データテーブルに逆関係フィールドを作成」オプションがチェックされない問題（[#6914](https://github.com/nocobase/nocobase/pull/6914)）@aaaaaajie
  * 関連フィールドのセレクターが送信後に選択データをクリアしない問題（[#7067](https://github.com/nocobase/nocobase/pull/7067)）@katherinehhh
* **[サーバー]** 未定義のプロパティを読み取ろうとして発生するエラー（'setMaaintainingMessage' 参照時）を修正（[#7064](https://github.com/nocobase/nocobase/pull/7064)）@chenos
* **[アクセス制御]** デフォルトロールが存在しない場合にアプリがアクセスブロックされる問題を修正（[#7059](https://github.com/nocobase/nocobase/pull/7059)）@aaaaaajie
* **[データソースマネージャー]** スコープの変更を関連する全ロールに即時適用（[#7065](https://github.com/nocobase/nocobase/pull/7065)）@aaaaaajie
* **[ワークフロー：ループノード]** 条件が満たされない場合でもループブランチが実行される問題を修正（[#7063](https://github.com/nocobase/nocobase/pull/7063)）@mytharcher
* **[ワークフロー：カスタムアクションイベント]** リダイレクト URL の変数が解析されない問題を修正 @mytharcher
* **[ワークフロー：承認]** 実行がキャンセルされた際に Todo 統計が更新されない問題を修正 @mytharcher
* **[メールマネージャー]** メール削除に失敗する問題 @jiannx
* **[バックアップマネージャー]** Windows 環境下で MySQL バックアップを復元する際に発生する不明コマンドエラーを修正 @gchust
