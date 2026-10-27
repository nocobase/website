### 🚀 機能改善

- [DingTalk] ファイルからプラグインをインストールした場合に、DingTalk の Stream モードが起動できない問題を修正しました。また、フル同期時の API 呼び出し数を約 90% 削減しました。同期中に DingTalk の API 呼び出し総量のクォータに達した場合は、エラーメッセージにクォータのリセット時刻を表示するようにしました。 by @chenzhizdt

### 🐛 不具合修正

* [AIワーカー] OpenAI Responses サービスに、オプションの「ステートレスリクエスト」モードを追加しました。これにより、ゲートウェイが異なる Azure OpenAI リソース間でリクエストをルーティングする際に発生するレスポンス項目のエラーを回避できるようにしました。 ([#11183](https://github.com/nocobase/nocobase/pull/11183?utm_source=chatgpt.com)) by @cgyrock
* [Feishu / Lark] `APP_PUBLIC_PATH` を設定した場合に、Feishu の OAuth コールバック URL に必要なプレフィックスが付かず、認可に失敗する問題を修正しました。また、v2 クライアントで自動ログインが開始されない問題と、ログイン後のリダイレクトで 404 エラーが発生する問題も修正しました。 by @chenzhizdt
