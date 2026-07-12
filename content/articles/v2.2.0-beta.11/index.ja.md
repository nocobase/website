### 🐛 不具合修正

* **[app]** `<span>CDN_BASE_URL</span>` が空の場合に、非同期リソースが誤って外部スクリプトアドレスを使用する問題を修正しました。 ([#10052](https://github.com/nocobase/nocobase/pull/10052)) by @Molunerfinn
* **[client-v2]**
  * v2 の QR コードスキャン入力で、Safari から QR コード画像を選択してアップロードした場合に認識に失敗する問題を修正しました。 ([#10011](https://github.com/nocobase/nocobase/pull/10011)) by @katherinehhh
  * テーブルブロックのボタン連動ルールで、ページ切り替え後に状態が汚染される可能性がある問題を修正しました。 ([#10038](https://github.com/nocobase/nocobase/pull/10038)) by @gchust
  * `<span>__webpack_public_path__</span>` が末尾の `<span>/</span>` なしで注入された場合に、クライアントランタイムの静的リソースベースパスの正規化が一致しない問題を修正しました。また、この境界ケースのテストカバレッジも追加しました。 ([#10040](https://github.com/nocobase/nocobase/pull/10040)) by @chenos
* **[flow-engine]** JS block 内で ctx.api を上書きすると、maximum call stack size exceeded が発生する問題を修正しました。 ([#10051](https://github.com/nocobase/nocobase/pull/10051)) by @gchust
* **[ワークフロー：遅延ノード]** API 経由で遅延ノードに 1 未満の値を設定できないようにしました。 ([#10057](https://github.com/nocobase/nocobase/pull/10057)) by @mytharcher
* **[フォーム下書き]** ページを連続して更新した後、フォーム下書きが失われる問題を修正しました。 ([#10059](https://github.com/nocobase/nocobase/pull/10059)) by @gchust
* **[ワークフロー]** 対象ワークフローの実行記録が作成される前にサブフローが失敗した場合、親ノードが待機し続ける可能性がある問題を修正しました。 ([#10043](https://github.com/nocobase/nocobase/pull/10043)) by @mytharcher
* **[フロントエンドフローエンジン]**
  * ローカル AI agent 設定を使用した連動ルールで、レンダリングエラーが発生する可能性がある問題を修正しました。 ([#10023](https://github.com/nocobase/nocobase/pull/10023)) by @gchust
  * ポップアップ内のレコード変数を、外部 NocoBase データソースから解析できない問題を修正しました。 ([#10048](https://github.com/nocobase/nocobase/pull/10048)) by @gchust
* **[データソース：メインデータベース]** 無効な多対多リレーションフィールド設定を保存できないようにしました。 ([#10044](https://github.com/nocobase/nocobase/pull/10044)) by @2013xile
* **[データテーブル：ツリー]** ツリーパスコレクションの作成時に、内部フィールドモデルのメタデータがコレクション設定へ渡される問題を修正しました。 ([#10035](https://github.com/nocobase/nocobase/pull/10035)) by @cgyrock
* **[テンプレート印刷]** テンプレート印刷の権限チェックを修正しました。現在のロールが閲覧できないフィールドや、データ範囲外のレコードがレンダリングされないようにしました。 by @jiannx
* **[ワークフロー：承認]**
  * 文字列型の承認者 ID を追加して使用できるようにしました。 by @mytharcher
  * 印刷プレビューで、承認フォームのフィールドが単一列表示になってしまう問題を修正しました。 by @zhangzhonghe
  * 承認サブテーブルを無効化した後も、内部フィールドが編集できてしまう問題を修正しました。 by @zhangzhonghe
