### 🚀 機能改善

* **[client-v2]** システム設定の対応言語にミャンマー語（`my-MM`）を追加しました。 ([#10131](https://github.com/nocobase/nocobase/pull/10131)) by @hongboji

### 🐛 不具合修正

* **[resourcer]** 操作前イベントと承認保存前モードを同時に使用した場合、操作前イベントが実行されない可能性がある問題を修正しました。 ([#10119](https://github.com/nocobase/nocobase/pull/10119)) by @mytharcher
* **[flow-engine]** モバイル端末でポップアップが画面外にはみ出し、閉じるボタンが隠れる問題を修正しました。 ([#10118](https://github.com/nocobase/nocobase/pull/10118)) by @zhangzhonghe
* **[client-v2]**
  * ページでタブを有効化した直後に名前を変更すると、ルーティング状態が不整合になる可能性がある問題を修正しました。 ([#10117](https://github.com/nocobase/nocobase/pull/10117)) by @zhangzhonghe
  * 承認ページを読み込めなくなる可能性があるエラーを修正しました。 ([#10116](https://github.com/nocobase/nocobase/pull/10116)) by @zhangzhonghe
* **[utils]** サーバーから外部リクエストを送信する際、リダイレクト先も `SERVER_REQUEST_WHITELIST` のホワイトリストによって制御されるようにしました。 ([#10109](https://github.com/nocobase/nocobase/pull/10109))
  参考ドキュメント：[環境変数](https://docs.nocobase.com/cn/get-started/installation/env#server_request_whitelist)
* **[ワークフロー：承認]** 承認提出時のメッセージが操作前イベントのメッセージを上書きする問題を修正しました。 by @mytharcher
