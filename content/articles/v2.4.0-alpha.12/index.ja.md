### 🐛 不具合修正

* **[cli-v1]** 新しい本番環境に NocoBase をインストールした際、chokidar モジュールが不足しているために NocoBase CLI の初期化が失敗する問題を修正しました。 ([#11083](https://github.com/nocobase/nocobase/pull/11083)) by @cgyrock
* **[evaluators]** mathjs をアップグレードし、ワークフローの計算ノードにおける数式のサンドボックスエスケープ脆弱性を修正しました。 ([#10984](https://github.com/nocobase/nocobase/pull/10984)) by @mytharcher
* **[server]** プラグイン依存関係の互換性チェックで、axios 1.20.x が誤って非互換と判定される問題を修正しました。 ([#11023](https://github.com/nocobase/nocobase/pull/11023)) by @hongboji
* **[client-v2]**
  * v2 のモバイル版フォームで、連動ルールによってリレーションフィールドを無効化した際に、スタイルが正しく表示されない問題を修正しました。 ([#11036](https://github.com/nocobase/nocobase/pull/11036)) by @katherinehhh
  * v2 のフィルターフォームで、自動採番フィールドと他のフィールドの縦方向の位置が揃わない問題を修正しました。 ([#11044](https://github.com/nocobase/nocobase/pull/11044)) by @katherinehhh
  * v2 のモバイル版でリンク操作によってページを移動した後、右スワイプやブラウザの戻る操作を行うと、ページ階層を順に戻らず直接終了してしまう問題を修正しました。 ([#10963](https://github.com/nocobase/nocobase/pull/10963)) by @katherinehhh
* **[app]** 開発モードで `APP_PUBLIC_PATH` が `/` 以外に設定されている場合、`APP_CLIENT_ENTRY_MODE` のエントリから正しく遷移できない問題を修正しました。 ([#10955](https://github.com/nocobase/nocobase/pull/10955)) by @Molunerfinn
* **[undefined]** ドキュメントのサイトマップから、canonical が別のページを指している、異なるモジュール間で重複するページを除外するようにしました。 ([#10954](https://github.com/nocobase/nocobase/pull/10954)) by @Molunerfinn
* **[フロントエンドフローエンジン]** 管理者以外のロールで、Markdown 内の Liquid 変数が正しく解析されない問題を修正しました。 ([#11007](https://github.com/nocobase/nocobase/pull/11007)) by @gchust
* **[ワークフロー]** ワークフローのネストされたループで、内側のループのローカル変数からループオブジェクト内のフィールドを選択できない問題を修正しました。 ([#10942](https://github.com/nocobase/nocobase/pull/10942)) by @mytharcher
* **[UI レイアウト]**
  * V2 のルート権限でチェック状態が正しく表示されない問題と、権限を保存すると V1 の既存権限が失われる問題を修正しました。 ([#10957](https://github.com/nocobase/nocobase/pull/10957)) by @katherinehhh
  * モバイル版でメニューから非表示にしたページを、リンクから開けない問題を修正しました。 ([#10641](https://github.com/nocobase/nocobase/pull/10641)) by @zhangzhonghe
* **[ブロック：ツリー]** v2 のツリーブロックで、ブラウザを更新すると操作ボタンが消える問題を修正しました。 ([#11038](https://github.com/nocobase/nocobase/pull/11038)) by @katherinehhh
