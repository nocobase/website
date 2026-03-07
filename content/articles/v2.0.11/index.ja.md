### 🎉 新機能

* **[ワークフロー：カスタム操作イベント]** カスタムコンテキストデータに対応。カスタム操作イベントをサブフローとして呼び出す際、任意の変数を渡せるようになりました（[#8758](https://github.com/nocobase/nocobase/pull/8758)）by @mytharcher

### 🚀 改善

* **[client]** フォームブロック／詳細ブロックの編集時、利用可能なデータがない場合に案内メッセージを表示します（[#8790](https://github.com/nocobase/nocobase/pull/8790)）by @gchust
* **[flow-engine]** 新しい runjs コードが実行前に変数式を解析してしまう問題を修正しました（[#8762](https://github.com/nocobase/nocobase/pull/8762)）by @gchust

### 🐛 修正

* **[client]**
  * ポップアップ詳細でリンク遷移後の結果が、ビューを閉じる操作でロールバックされる問題を修正しました（[#8752](https://github.com/nocobase/nocobase/pull/8752)）by @zhangzhonghe
  * 多対多（配列）リレーションのレコードブロックで「追加」を非表示にし、エラー発生を防止しました（[#8779](https://github.com/nocobase/nocobase/pull/8779)）by @gchust
  * リレーションフィールドのポップアップ内で編集後、元のブロックが更新されない問題を修正しました（[#8782](https://github.com/nocobase/nocobase/pull/8782)）by @gchust
  * タブの重なりを修正し、設定モードでタブの最小幅を確保しました（[#8771](https://github.com/nocobase/nocobase/pull/8771)）by @zhangzhonghe
  * 設定モードで連動により必須フィールドを非表示にしても検証が走る問題を修正しました（[#8773](https://github.com/nocobase/nocobase/pull/8773)）by @zhangzhonghe
  * サブテーブル列の表示切替や連続削除後、反映が遅れる問題を修正しました（[#8755](https://github.com/nocobase/nocobase/pull/8755)）by @zhangzhonghe
  * レコード更新フォームで必須チェックが二重に発生する問題を修正しました（[#8761](https://github.com/nocobase/nocobase/pull/8761)）by @jiannx
* **[database]**
  * データテーブルのビューテンプレートに `簡易ページネーション` オプションが表示されない問題を修正しました（[#8778](https://github.com/nocobase/nocobase/pull/8778)）by @cgyrock
  * 数値フィールドの精度検証ルールが有効にならない問題を修正しました（[#8768](https://github.com/nocobase/nocobase/pull/8768)）by @2013xile
* **[その他]** アップグレード後に plugin-block-reference が見つからないと表示される問題を修正しました（[#8757](https://github.com/nocobase/nocobase/pull/8757)）by @gchust
* **[操作：レコードのエクスポート]** Excel へのエクスポートで、数値型フィールドが文字列として表示される問題を修正しました（[#8774](https://github.com/nocobase/nocobase/pull/8774)）by @cgyrock
* **[ブロック：リスト]** リストブロックのフィールドで「現在のレコード」変数が使えない問題を修正しました（[#8784](https://github.com/nocobase/nocobase/pull/8784)）by @gchust
* **[ワークフロー]** 承認ノード内でブロックをドラッグした際、誤ったドラッグ用プレースホルダーが表示される問題を修正しました（[#8763](https://github.com/nocobase/nocobase/pull/8763)）by @mytharcher
* **[UI テンプレート]**
  * 詳細の「現在のレコード」テンプレートと編集フォームテンプレートの再利用により、データが正しく読み込めない可能性がある問題を修正しました（[#8775](https://github.com/nocobase/nocobase/pull/8775)）by @gchust
  * テンプレートブロックのイベントフローで props を変更しても反映されない問題を修正しました（[#8765](https://github.com/nocobase/nocobase/pull/8765)）by @gchust
* **[データソース：メインDB]**
  * JSON フィールドのデフォルト値更新が反映されない問題を修正しました（[#8767](https://github.com/nocobase/nocobase/pull/8767)）by @2013xile
  * フィールド同期のエラーを修正しました（[#8766](https://github.com/nocobase/nocobase/pull/8766)）by @2013xile
* **[AI エージェント（AI 従業員）]**
  * qwen/deepseek/kimi でアップロードしたドキュメントを読み取れない問題を修正しました（[#8732](https://github.com/nocobase/nocobase/pull/8732)）by @cgyrock
  * deepseek reasoning モデル使用時にツール呼び出しが異常になる問題を修正しました（[#8741](https://github.com/nocobase/nocobase/pull/8741)）by @cgyrock
* **[マルチスペース]** データテーブルの主キーで作成する際、スペース権限でエラーになる問題を修正しました by @jiannx
