### 🎉 新機能

* **[ワークフロー]** 「アプリケーションインスタンス ID」「Snowflake ID の生成」など、新しいシステム変数を追加 ([#8223](https://github.com/nocobase/nocobase/pull/8223)) by @mytharcher

### 🚀 機能改善

* **[client]** 操作列の列幅設定を、選択式（Select）で指定できるように改善 ([#8218](https://github.com/nocobase/nocobase/pull/8218)) by @katherinehhh
* **[AI 従業員]** 初回編集後に送信しても反応しない不具合を解消し、内蔵 AI 従業員の整理と権限初期設定を実施。エラー処理や出力結果を改善するとともに、モーダルのコンテキスト変数対応、外部データソース対応を追加。大量データ処理時に会話内容が切り捨てられる問題も修正 ([#8191](https://github.com/nocobase/nocobase/pull/8191)) by @heziqiang
* **[ワークフロー]**
  * ワークフロー複製 API に、複製元ワークフローのインスタンスを指定できるパラメータを追加 ([#8225](https://github.com/nocobase/nocobase/pull/8225)) by @mytharcher
  * データテーブルイベントにおける「変更が発生したフィールド」の説明を見直し、誤解を防止 ([#8216](https://github.com/nocobase/nocobase/pull/8216)) by @mytharcher
* **[非同期タスクマネージャー]** タスクのクリーンアップ処理に例外処理を追加し、クラッシュ防止と安定性を向上 ([#8215](https://github.com/nocobase/nocobase/pull/8215)) by @mytharcher
* **[ブロック：操作パネル]** 設定画面でブロック／操作／フィールドを非表示にした場合の表示を改善 ([#8174](https://github.com/nocobase/nocobase/pull/8174)) by @katherinehhh
* **[UI テンプレート]** ブロックテンプレートおよびモーダルテンプレートを再利用できる UI テンプレートプラグインを追加 ([#8163](https://github.com/nocobase/nocobase/pull/8163)) by @gchust
* **[操作：レコードエクスポート Pro]** Import Pro／Export Pro ボタンに権限制御を追加 by @katherinehhh
* **[ワークフロー：承認]** フロー完了時に `approval.data` を最新の承認データへ更新し、「最新」表示モードに対応 by @mytharcher

### 🐛 不具合修正

* **[flow-engine]**
  * ツリーテーブルで子レコードを追加する際の権限判定不具合を修正 ([#8240](https://github.com/nocobase/nocobase/pull/8240)) by @katherinehhh
  * 一部ブロックのモーダルで、レコード関連変数が正しく表示されない問題を修正 ([#8060](https://github.com/nocobase/nocobase/pull/8060)) by @gchust
  * 操作やタブをドラッグ後に、新しく追加した操作やタブが表示されない問題を修正 ([#8224](https://github.com/nocobase/nocobase/pull/8224)) by @gchust
  * 外部データソースの権限判定に関する不具合を修正 ([#8221](https://github.com/nocobase/nocobase/pull/8221)) by @katherinehhh
  * 権限がある外部データソース操作が非表示になる問題を修正 ([#8217](https://github.com/nocobase/nocobase/pull/8217)) by @katherinehhh
* **[client]**
  * 連動ルールが未設定の場合でもエラーが発生しないよう対応 ([#8239](https://github.com/nocobase/nocobase/pull/8239)) by @zhangzhonghe
  * テーブルブロックの操作列を削除できない問題を修正 ([#8230](https://github.com/nocobase/nocobase/pull/8230)) by @gchust
  * プレビュー実行時に JSX のコンパイル結果が保存時に反映されてしまう問題を修正 ([#8171](https://github.com/nocobase/nocobase/pull/8171)) by @gchust
  * S3 Pro の添付ファイルアップロードエラーを修正し、プレビュー表示を改善 ([#8211](https://github.com/nocobase/nocobase/pull/8211)) by @katherinehhh
* **[cli]** DB\_PASSWORD が未設定の場合でも license-kit が動作するよう対応 ([#8220](https://github.com/nocobase/nocobase/pull/8220)) by @jiannx
* **[database]** メインデータソースと外部データソース間で、日付フィールドの検索結果が一致しない問題を修正 ([#8181](https://github.com/nocobase/nocobase/pull/8181)) by @cgyrock
* **[データテーブルフィールド：自動採番]** field-sequence プラグインの repair 実行時、存在しないコレクションによりエラーが発生する問題を修正 ([#8251](https://github.com/nocobase/nocobase/pull/8251)) by @cgyrock
* **[ワークフロー：手動処理ノード]** 削除済みワークフローの実行計画をキャンセルする際のエラーを修正 ([#8258](https://github.com/nocobase/nocobase/pull/8258)) by @mytharcher
* **[UI テンプレート]** リレーションフィールドのモーダルで、非リレーション用テンプレートを開くとエラーになる問題を修正 ([#8233](https://github.com/nocobase/nocobase/pull/8233)) by @gchust
* **[部門]** 集約検索でユーザーを正しく特定できない問題を修正 ([#8222](https://github.com/nocobase/nocobase/pull/8222)) by @2013xile
* **[データテーブルフィールド：多対多（配列）]** 対象キーが Snowflake ID（53 bits）の場合に、多対多（配列）フィールドを作成できない問題を修正 ([#8226](https://github.com/nocobase/nocobase/pull/8226)) by @2013xile
* **[認可設定]** 認可プラグインの表示不具合を修正 ([#8214](https://github.com/nocobase/nocobase/pull/8214)) by @jiannx
* **[操作：レコードインポート]** インポート時のエラーで、行番号が常に 1 と表示される問題を修正 ([#8244](https://github.com/nocobase/nocobase/pull/8244)) by @mytharcher
* **[テンプレート印刷]** 外部データソースに対応していないテンプレート印刷リクエストの不具合を修正 by @katherinehhh
* **[ワークフロー：承認]**
  * 同一トランザクションを重複してロールバックしてしまう問題を修正 by @mytharcher
  * 承認完了時にリレーションフィールドへ新規データが作成される問題を修正 by @mytharcher
  * 承認完了時に多対多リレーションフィールドへ新規データが作成される問題を修正 by @mytharcher
