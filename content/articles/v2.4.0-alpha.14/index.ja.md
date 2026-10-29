### 🚀 機能改善

* [acl] NocoBase 2 のドキュメントリンクの参照先を `nocode.docs.nocobase.com` に変更しました。 ([#11163](https://github.com/nocobase/nocobase/pull/11163?utm_source=chatgpt.com)) by @Molunerfinn
* [AIワーカー] モバイル端末や幅の狭いブロックでも AIワーカーのチャットを操作しやすいように改善しました。コンパクトな操作バー、画面下部のオプションパネル、タッチ操作に適したセレクターを追加し、ページブロックを選択するとオプションパネルが自動的に閉じるようにしました。 ([#11230](https://github.com/nocobase/nocobase/pull/11230?utm_source=chatgpt.com)) by @cgyrock
* [DingTalk] ファイルからプラグインをインストールした場合に、DingTalk の Stream モードが起動できない問題を修正しました。また、フル同期時の API 呼び出し数を約 90% 削減しました。同期中に DingTalk の API 呼び出し総量のクォータに達した場合は、エラーメッセージにクォータのリセット時刻を表示するようにしました。 by @chenzhizdt

### 🐛 不具合修正

* [client-v2] V2 のフィールド値設定で、複数選択フィールドが複数選択モードにならず、値がスカラー値として送信される問題を修正しました。送信、レコード更新、一括更新の各操作に対応しました。 ([#11112](https://github.com/nocobase/nocobase/pull/11112?utm_source=chatgpt.com)) by @hongboji
* [ユーザー認証] 認証タイププラグインの読み込みが完了する前に認証器の選択肢が描画され、アプリケーションのリロード後に LDAP ログインで `must either provide a buffer via raw or some value` エラーが発生する問題を修正しました。 ([#11182](https://github.com/nocobase/nocobase/pull/11182?utm_source=chatgpt.com)) by @hongboji
* [ワークフロー：CC] ワークフロータスクの読み取り権限を制限し、自分のタスクと対応する関連データのみを参照できるようにしました。 ([#11097](https://github.com/nocobase/nocobase/pull/11097?utm_source=chatgpt.com)) by @mytharcher
* [AIワーカー] OpenAI Responses サービスに、オプションの「ステートレスリクエスト」モードを追加しました。これにより、ゲートウェイが異なる Azure OpenAI リソース間でリクエストをルーティングする際に発生するレスポンス項目のエラーを回避できるようにしました。 ([#11183](https://github.com/nocobase/nocobase/pull/11183?utm_source=chatgpt.com)) by @cgyrock
