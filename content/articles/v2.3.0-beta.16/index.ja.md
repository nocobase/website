### 🐛 不具合修正

* **[app]** 開発モードで `APP_PUBLIC_PATH` が `/` 以外に設定されている場合、`APP_CLIENT_ENTRY_MODE` のエントリから正しく遷移できない問題を修正しました。 ([#10955](https://github.com/nocobase/nocobase/pull/10955)) by @Molunerfinn
* **[server]**
  * アプリケーションを reload した後、Snowflake 主キーが重複する問題を修正しました。 ([#10911](https://github.com/nocobase/nocobase/pull/10911)) by @2013xile
  * プラグイン依存関係の互換性チェックで、axios 1.20.x が誤って非互換と判定される問題を修正しました。 ([#11023](https://github.com/nocobase/nocobase/pull/11023)) by @hongboji
* **[client-v2]** v2 のモバイル版でリンク操作によってページを移動した後、右スワイプやブラウザの戻る操作を行うと、ページ階層を順に戻らず直接終了してしまう問題を修正しました。 ([#10963](https://github.com/nocobase/nocobase/pull/10963)) by @katherinehhh
* **[evaluators]** mathjs をアップグレードし、ワークフローの計算ノードにおける数式のサンドボックスエスケープ脆弱性を修正しました。 ([#10984](https://github.com/nocobase/nocobase/pull/10984)) by @mytharcher
* **[データソース管理]** v2 のリレーションフィールド設定で外部キーを手動入力できない問題を修正し、新しいフィールド名を入力するか、既存フィールドから選択できるようにしました。 ([#10915](https://github.com/nocobase/nocobase/pull/10915)) by @katherinehhh
* **[ワークフロー]**
  * ワークフローのネストされたループで、内側のループのローカル変数からループオブジェクト内のフィールドを選択できない問題を修正しました。 ([#10942](https://github.com/nocobase/nocobase/pull/10942)) by @mytharcher
  * KingBase が有効状態と実行回数を文字列として返す場合に、ワークフローが有効かどうか、およびすでに実行済みかどうかを正しく判定できない問題を修正しました。 ([#10888](https://github.com/nocobase/nocobase/pull/10888)) by @mytharcher
* **[フロントエンドフローエンジン]** 管理者以外のロールで、Markdown 内の Liquid 変数が正しく解析されない問題を修正しました。 ([#11007](https://github.com/nocobase/nocobase/pull/11007)) by @gchust
* **[UI レイアウト]** V2 のルート権限でチェック状態が正しく表示されない問題と、権限を保存すると V1 の既存権限が失われる問題を修正しました。 ([#10957](https://github.com/nocobase/nocobase/pull/10957)) by @katherinehhh
