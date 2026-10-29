### 🚀 機能改善

* [server] アプリケーションの実行中に、Snowflake の `workerId` を再バインドできるようにしました。 ([#11076](https://github.com/nocobase/nocobase/pull/11076?utm_source=chatgpt.com)) by @2013xile
* [AIワーカー] モバイル端末や幅の狭いブロックでも AIワーカーのチャットを操作しやすいように改善しました。コンパクトな操作バー、画面下部のオプションパネル、タッチ操作に適したセレクターを追加し、ページブロックを選択するとオプションパネルが自動的に閉じるようにしました。 ([#11230](https://github.com/nocobase/nocobase/pull/11230?utm_source=chatgpt.com)) by @cgyrock
* [ワークフロー] ワークフロー実行詳細ページのパフォーマンスを改善しました。初回表示時は各ノードの最新 Job のみを読み込み、ノードの実行履歴は必要に応じてカーソルベースのページネーションで取得するようにしました。また、一覧で扱うフィールドも削減しました。 ([#11094](https://github.com/nocobase/nocobase/pull/11094?utm_source=chatgpt.com)) by @mytharcher
* [DingTalk]

  * DingTalk API 呼び出しの QPS 上限を設定できるようにしました（デフォルトは 20）。また、レート制限エラーが発生した場合は、自動的にバックオフして再試行するようにしました。 by @chenzhizdt
  * ファイルからプラグインをインストールした場合に、DingTalk の Stream モードが起動できない問題を修正しました。また、フル同期時の API 呼び出し数を約 90% 削減しました。同期中に DingTalk の API 呼び出し総量のクォータに達した場合は、エラーメッセージにクォータのリセット時刻を表示するようにしました。 by @chenzhizdt

  ### 🐛 不具合修正


  * [client-v2] V2 のフィールド値設定で、複数選択フィールドが複数選択モードにならず、値がスカラー値として送信される問題を修正しました。送信、レコード更新、一括更新の各操作に対応しました。 ([#11112](https://github.com/nocobase/nocobase/pull/11112?utm_source=chatgpt.com)) by @hongboji
  * [ワークフロー：CC] ワークフロータスクの読み取り権限を制限し、自分のタスクと対応する関連データのみを参照できるようにしました。 ([#11097](https://github.com/nocobase/nocobase/pull/11097?utm_source=chatgpt.com)) by @mytharcher
  * [AIワーカー]

    * OpenAI Responses サービスに、オプションの「ステートレスリクエスト」モードを追加しました。これにより、ゲートウェイが異なる Azure OpenAI リソース間でリクエストをルーティングする際に発生するレスポンス項目のエラーを回避できるようにしました。 ([#11183](https://github.com/nocobase/nocobase/pull/11183?utm_source=chatgpt.com)) by @cgyrock
    * 連動ルールによって AIワーカーボタンが非表示になっている場合、ページ設定を有効にするとページがフリーズする問題を修正しました。 ([#11100](https://github.com/nocobase/nocobase/pull/11100?utm_source=chatgpt.com)) by @hongboji
      参考ドキュメント：[flow-model.md](https://github.com/nocobase/nocobase/blob/fix/plugin-ai-hidden-ai-employee-freeze/packages/core/client/docs/zh-CN/api/flow-engine/flow-model.md?utm_source=chatgpt.com#L176-L181)
    * Qwen/DashScope Endpoint のベクトルレスポンスに関するエンコーディングの互換性問題を修正し、ドキュメントとクエリのベクトル次元が一致しなくなる問題を解消しました。影響を受けた既存のナレッジベースは、再ベクトル化が必要です。 ([#11074](https://github.com/nocobase/nocobase/pull/11074?utm_source=chatgpt.com)) by @cgyrock
  * [ユーザー認証] 認証タイププラグインの読み込みが完了する前に認証器の選択肢が描画され、アプリケーションのリロード後に LDAP ログインで `must either provide a buffer via raw or some value` エラーが発生する問題を修正しました。 ([#11182](https://github.com/nocobase/nocobase/pull/11182?utm_source=chatgpt.com)) by @hongboji
