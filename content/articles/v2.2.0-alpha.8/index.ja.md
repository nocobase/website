### 🎉 新機能

* **[公開フォーム]** v1 公開フォームで v2 フォームを作成できるようにし、v1 フォームの新規作成を禁止しました。 ([#10045](https://github.com/nocobase/nocobase/pull/10045)) by @zhangzhonghe

### 🚀 機能改善

* **[ワークフロー]** ワークフロー v2 キャンバスで現在未対応のノードについて、通常のノードカード操作を残しつつ、ノードタイプを「未対応」と表示するようにしました。 ([#10054](https://github.com/nocobase/nocobase/pull/10054)) by @mytharcher
* **[フロントエンドフローエンジン]** UI 構築 API が複数ワークスペースに対応しました。 ([#10072](https://github.com/nocobase/nocobase/pull/10072)) by @gchust
* **[AIワーカー]** AIワーカーのツール設定、データクエリ制約、リレーションフィールドのクエリを改善し、異常なツール呼び出しに関する診断情報を保持できるようにしました。 ([#10042](https://github.com/nocobase/nocobase/pull/10042)) by @cgyrock
* **[データテーブル: SQL]** ユーザー向けの変更はありません。移行済みプラグインに対して、client-v2 のユニットテストカバレッジを追加しました。 ([#9967](https://github.com/nocobase/nocobase/pull/9967)) by @katherinehhh

### 🐛 不具合修正

* **[client-v2]**
  * v2 ワークフローの代入エディターで、コレクションフィールド名が nodeName の場合にコンソールエラーが発生する問題を修正しました。 ([#10067](https://github.com/nocobase/nocobase/pull/10067)) by @katherinehhh
  * テーブルブロックのボタン連動ルールで、ページ切り替え後に状態が汚染される可能性がある問題を修正しました。 ([#10038](https://github.com/nocobase/nocobase/pull/10038)) by @gchust
  * ワークフロー v2 の変数エディターで、トリガー、フィルター条件、フィールド代入フォームにおける変数カプセルの表示、無効状態、演算子ラベルの表示が一致しない問題を修正しました。 ([#10041](https://github.com/nocobase/nocobase/pull/10041)) by @Molunerfinn
* **[app]**
  * Redis キャッシュ設定で、専用キャッシュアドレスが無視される問題を修正しました。 ([#10065](https://github.com/nocobase/nocobase/pull/10065)) by @2013xile
  * `<span>CDN_BASE_URL</span>` が空の場合に、非同期リソースが誤って外部スクリプトアドレスを使用する問題を修正しました。 ([#10052](https://github.com/nocobase/nocobase/pull/10052)) by @Molunerfinn
* **[server]** マルチアプリプラグインを有効にしていない場合、カスタムワークスペースが表示されない問題を修正しました。 ([#10055](https://github.com/nocobase/nocobase/pull/10055)) by @2013xile
* **[flow-engine]**
  * 単一値変数の入力欄で変数を選択した後も、追加のテキストを入力できてしまう問題を修正しました。 ([#10050](https://github.com/nocobase/nocobase/pull/10050)) by @katherinehhh
  * JS block 内で ctx.api を上書きすると、maximum call stack size exceeded が発生する問題を修正しました。 ([#10051](https://github.com/nocobase/nocobase/pull/10051)) by @gchust
* **[ワークフロー：遅延ノード]**
  * 遅延ノードの時間入力を修正し、最小値未満の値を保存できないようにしました。 ([#10056](https://github.com/nocobase/nocobase/pull/10056)) by @Molunerfinn
  * API 経由で遅延ノードに 1 未満の値を設定できないようにしました。 ([#10057](https://github.com/nocobase/nocobase/pull/10057)) by @mytharcher
* **[ワークフロー]**
  * 対象ワークフローの実行記録が作成される前にサブフローが失敗した場合、親ノードが待機し続ける可能性がある問題を修正しました。 ([#10043](https://github.com/nocobase/nocobase/pull/10043)) by @mytharcher
  * ワークフローを手動実行する際、リクエストは有効でも実行が開始されていない場合にエラーが返される問題を修正しました。 ([#10049](https://github.com/nocobase/nocobase/pull/10049)) by @mytharcher
* **[データソース：メインデータベース]** 無効な多対多リレーションフィールド設定を保存できないようにしました。 ([#10044](https://github.com/nocobase/nocobase/pull/10044)) by @2013xile
* **[フロントエンドフローエンジン]** ポップアップ内のレコード変数を、外部 NocoBase データソースから解析できない問題を修正しました。 ([#10048](https://github.com/nocobase/nocobase/pull/10048)) by @gchust
* **[フォーム下書き]** ページを連続して更新した後、フォーム下書きが失われる問題を修正しました。 ([#10059](https://github.com/nocobase/nocobase/pull/10059)) by @gchust
* **[ワークフロー：集計クエリノード]** フィルター条件が空の場合にも対応できるよう、検証ルールを修正しました。 ([#10053](https://github.com/nocobase/nocobase/pull/10053)) by @mytharcher
* **[Redis Worker ID アロケーター]**
  * Worker ID 用の Redis が未設定の場合、シングルノードモードを起動できない問題を修正しました。 by @2013xile
  * Redis Worker ID の分離と障害診断を改善しました。 by @2013xile
* **[plugin-service-platform]** サービスプラットフォームで、認可済みプラグインのダウンロード機能を復元しました。 by @jiannx
* **[テンプレート印刷]** テンプレート印刷の権限チェックを修正しました。現在のロールが閲覧できないフィールドや、データ範囲外のレコードがレンダリングされないようにしました。 by @jiannx
* **[ワークフロー：承認]**
  * v2 承認サブテーブルが詳細画面で正しく表示されない問題を修正しました。 by @zhangzhonghe
  * 承認者画面で空ブロックがデフォルト表示される問題と、固定承認者 ID の保存に関する問題を修正しました。 by @zhangzhonghe
  * 承認サブテーブルを無効化した後も、内部フィールドが編集できてしまう問題を修正しました。 by @zhangzhonghe
  * 文字列型の承認者 ID を追加して使用できるようにしました。 by @mytharcher
  * 印刷プレビューで、承認フォームのフィールドが単一列表示になってしまう問題を修正しました。 by @zhangzhonghe
  * 承認フォームを開く際に、Apply new ドロワーを閉じるようにしました。 by @zhangzhonghe
  * 承認タスクカードに承認データが表示されない問題を修正しました。 by @zhangzhonghe
