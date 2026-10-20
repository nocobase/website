### 🐛 不具合修正

* **[app]** 開発モードで `APP_PUBLIC_PATH` が `/` 以外に設定されている場合、`APP_CLIENT_ENTRY_MODE` のエントリから正しく遷移できない問題を修正しました。 ([#10955](https://github.com/nocobase/nocobase/pull/10955)) by @Molunerfinn
* **[evaluators]** mathjs をアップグレードし、ワークフローの計算ノードにおける数式のサンドボックスエスケープ脆弱性を修正しました。 ([#10984](https://github.com/nocobase/nocobase/pull/10984)) by @mytharcher
* **[server]** プラグイン依存関係の互換性チェックで、axios 1.20.x が誤って非互換と判定される問題を修正しました。 ([#11023](https://github.com/nocobase/nocobase/pull/11023)) by @hongboji
* **[フロントエンドフローエンジン]** 管理者以外のロールで、Markdown 内の Liquid 変数が正しく解析されない問題を修正しました。 ([#11007](https://github.com/nocobase/nocobase/pull/11007)) by @gchust
* **[UI レイアウト]** V2 のルート権限でチェック状態が正しく表示されない問題と、権限を保存すると V1 の既存権限が失われる問題を修正しました。 ([#10957](https://github.com/nocobase/nocobase/pull/10957)) by @katherinehhh
* **[ワークフロー]** ワークフローのネストされたループで、内側のループのローカル変数からループオブジェクト内のフィールドを選択できない問題を修正しました。 ([#10942](https://github.com/nocobase/nocobase/pull/10942)) by @mytharcher
