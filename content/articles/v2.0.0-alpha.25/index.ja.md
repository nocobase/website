### 🚀 機能改善

* **[server]** Gatewayレイヤーのログを追加しました（[#7683](https://github.com/nocobase/nocobase/pull/7683)）by @2013xile
* **[flow-engine]** flow step 内でコンテキスト変数を定義できるようになりました（[#7674](https://github.com/nocobase/nocobase/pull/7674)）by @gchust
* **[データ可視化]**
  * 「クエリを実行」をクリックしてからチャートオプションを設定するよう案内メッセージを追加しました（[#7685](https://github.com/nocobase/nocobase/pull/7685)）by @heziqiang
  * チャート設定パネルの共通プレビューボタンをクリックすると、チャートデータが自動更新されるようになりました（[#7678](https://github.com/nocobase/nocobase/pull/7678)）by @heziqiang
* **[AIスタッフ]** AIによるコードレビュー・診断・修復を含むAIプログラミング体験を改善しました（[#7679](https://github.com/nocobase/nocobase/pull/7679)）by @cgyrock
* **[データソース管理]** フィールドタイプとinterface列の順序を調整し、変更時に確認ダイアログを追加しました（[#7680](https://github.com/nocobase/nocobase/pull/7680)）by @2013xile
* **[ワークフロー]** レコード更新操作ボタンに関連ワークフロー設定項目を補完しました（[#7668](https://github.com/nocobase/nocobase/pull/7668)）by @mytharcher
* **[マルチアプリ管理（非推奨）]** app supervisor を改善しました（[#7661](https://github.com/nocobase/nocobase/pull/7661)）by @chenos

### 🐛 不具合修正

* **[client]**
  * フィールドが読み取り専用モードの場合にデフォルト値を設定できない問題を修正し、編集不可でもスムーズに設定できるようになりました（[#7689](https://github.com/nocobase/nocobase/pull/7689)）by @gchust
  * サブフォームの連動ルールに関する既知の問題を修正しました（[#7698](https://github.com/nocobase/nocobase/pull/7698)）by @zhangzhonghe
  * フィルターフォーム内のJSブロックフィールドが読み込まれない問題を修正しました（[#7690](https://github.com/nocobase/nocobase/pull/7690)）by @gchust
* **[flow-engine]** モーダル内で編集フォームの関連フィールドが誤ったレコードコンテキストを選択する問題を修正しました（[#7675](https://github.com/nocobase/nocobase/pull/7675)）by @gchust
* **[ワークフロー：手動処理ノード]** ワークフローを停止した際、ToDoセンターから手動処理タスクが消える問題を修正しました（[#7687](https://github.com/nocobase/nocobase/pull/7687)）by @mytharcher
* **[AIスタッフ]** APIリソースを含むブロック選択時に対応データを正しく取得できない問題を修正しました（[#7688](https://github.com/nocobase/nocobase/pull/7688)）by @cgyrock
* **[ワークフロー]** 分岐を有効にしたノード削除後、残った分岐内の最初のノードのkeyが新しい値に変更される問題を修正しました（[#7665](https://github.com/nocobase/nocobase/pull/7665)）by @mytharcher
* **[データフィールド：中国行政区画]** 市と区の名称が同じ場合にデータをインポートできない問題を修正しました（[#7673](https://github.com/nocobase/nocobase/pull/7673)）by @2013xile
* **[ファイルマネージャー]**`.msg` ファイルが正常にアップロードできない問題を修正しました（[#7662](https://github.com/nocobase/nocobase/pull/7662)）by @mytharcher
* **[フロントエンドフローエンジン]** 連動ルール内で変数代入が正しく解析されない問題を修正しました（[#7684](https://github.com/nocobase/nocobase/pull/7684)）by @gchust
* **[データ可視化]** チャート初期化時に `sql:runById` APIを使用してデータを取得するよう修正しました（[#7677](https://github.com/nocobase/nocobase/pull/7677)）by @heziqiang
* **[ワークフロー：承認]** 承認完了通知のステータス文言翻訳が不正確な問題を修正し、ユーザーが言語設定をしていない場合はシステムのデフォルト言語を使用するようにしました by @mytharcher
