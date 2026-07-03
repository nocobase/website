### 🐛 不具合修正

* **[cli]** 一部の RabbitMQ サービスでキュー名に `<span>:</span>` や `<span>@</span>` を使用できない場合、バージョンイベントの公開に失敗する問題を修正しました。 ([#9989](https://github.com/nocobase/nocobase/pull/9989)) by @cgyrock
* **[client-v2]**
  * v2 の Markdown レンダリングと編集で、iframe のサニタイズ処理に関する問題を修正しました。 ([#9986](https://github.com/nocobase/nocobase/pull/9986)) by @katherinehhh
  * ルートポップアップの新規作成フォームで、事前入力されたフィールド値が失われる問題を修正しました。たとえば Calendar V2 の開始日と終了日が該当します。 ([#9874](https://github.com/nocobase/nocobase/pull/9874)) by @jiannx
  * V2 テーブルのデータ範囲で URL クエリパラメータが存在しない場合、テーブルデータを取得できない問題を修正しました。 ([#9869](https://github.com/nocobase/nocobase/pull/9869)) by @jiannx
  * ctx.setFormValues で複数行テキストフィールドの値を設定できない問題を修正しました。 ([#9959](https://github.com/nocobase/nocobase/pull/9959)) by @gchust
* **[AIワーカー]**
  * アンダースコアを含むデータベース名の環境で、AI checkpoint のクリーンアップに失敗する問題を修正しました。 ([#9982](https://github.com/nocobase/nocobase/pull/9982)) by @cgyrock
  * AIワーカーのワークフローノードで、ループ内の前回のツール呼び出し後に後続ノードを正しく再開できない問題を修正しました。 ([#9980](https://github.com/nocobase/nocobase/pull/9980)) by @cgyrock
* **[ファイルマネージャー]** ファイルマネージャーの添付ファイル一覧 API を公開しないようにしました。この API にリクエストした場合は 404 が返されます。 ([#9978](https://github.com/nocobase/nocobase/pull/9978)) by @mytharcher
* **[ワークフロー]** ワークフロー実行記録で、ノード結果が読み込み中のまま表示され続ける場合がある問題を修正しました。 ([#9991](https://github.com/nocobase/nocobase/pull/9991)) by @mytharcher
* **[バックアップマネージャー]**
  * PostgreSQL と Kingbase のバックアップ復元コマンドで、パスまたはパラメータに空白や特殊文字が含まれる場合に正常に実行できない問題を修正しました。 ([#9946](https://github.com/nocobase/nocobase/pull/9946)) by @cgyrock
  * 新しく作成したバックアップファイルをクラウドストレージにアップロードできない問題を修正しました。 ([#9981](https://github.com/nocobase/nocobase/pull/9981)) by @gchust
* **[データ可視化]** チャートブロックでポップアップを閉じる際、不要なリフレッシュが発生する問題を修正しました。 ([#9970](https://github.com/nocobase/nocobase/pull/9970)) by @gchust
* **[UI テンプレート]** サブフォームで誤った表示フィールドのテンプレートメニューが表示される問題を修正しました。 ([#9960](https://github.com/nocobase/nocobase/pull/9960)) by @gchust
* **[モバイル版（非推奨）]** v1 デスクトップ版のレスポンシブレイアウトで、詳細表示とフィールド選択のポップアップ表示方法が正しくない問題を修正しました。 ([#9974](https://github.com/nocobase/nocobase/pull/9974)) by @zhangzhonghe
* **[バージョン管理]** 一部の RabbitMQ サービスでキュー名に `<span>:</span>` や `<span>@</span>` を使用できない場合、バージョン管理でバージョン作成に失敗する問題を修正しました。 by @cgyrock
* **[ワークフロー：承認]** 設定権限がない場合に承認詳細を開くと、エラーが発生する可能性がある問題を修正しました。 by @zhangzhonghe
