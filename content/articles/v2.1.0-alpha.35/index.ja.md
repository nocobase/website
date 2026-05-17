### 🎉 新機能

* **[undefined]** AI 従業員としてローカライゼーションエンジニア Lina を追加し、ローカライズ翻訳を支援 ([#9434](https://github.com/nocobase/nocobase/pull/9434)) by @2013xile
  参考ドキュメント：[ローカライゼーション管理](https://docs.nocobase.com/cn/system-management/localization)<br />[Lina：ローカライゼーションエンジニア](https://docs.nocobase.com/cn/ai-employees/built-in/lina)<br>[Lina とローカル HY-MT1.5-1.8B を使用してローカライゼーション語句を翻訳](https://docs.nocobase.com/cn/ai-employees/scenarios/localization-hy-mt)
* **[カレンダー]** カレンダープラグインで client v2 をサポート。 ([#9464](https://github.com/nocobase/nocobase/pull/9464)) by @jiannx
* **[ブロック：ツリー]** ツリーフィルターブロックで client-v2 をサポート。 ([#9466](https://github.com/nocobase/nocobase/pull/9466)) by @jiannx
* **[ファイルストレージ：S3 (Pro)]** v2 ファイルマネージャーで、S3 Pro ストレージを使用したファイルアップロードをサポート。 by @Molunerfinn

### 🚀 機能改善

* **[build]**`deleteServerFiles` の回帰テストを追加し、Windows および POSIX パス環境で `client` と `client-v2` のビルド成果物が誤って削除されないように改善。 ([#9318](https://github.com/nocobase/nocobase/pull/9318)) by @Molunerfinn
* **[client]** 一対多関係テーブルブロックの関連付け操作で、ポップアップ選択ブロックから関連付け済みデータを除外するように改善 ([#9448](https://github.com/nocobase/nocobase/pull/9448)) by @katherinehhh
* **[AI 従業員]** AI 従業員の並列セッションにおけるインタラクションとパフォーマンスを改善 ([#9462](https://github.com/nocobase/nocobase/pull/9462)) by @cgyrock
* **[ファイルマネージャー]** サードパーティストレージプラグインが、v2 ファイルマネージャーの設定ページでカスタムストレージタイプフォームを登録できるように改善。 ([#9439](https://github.com/nocobase/nocobase/pull/9439)) by @Molunerfinn
* **[AI: ナレッジベース]** ナレッジベース作成時に一意キーを指定できるように by @cgyrock

### 🐛 不具合修正

* **[client]**
  * テーブル内の関連フィールドでクイック編集が表示され、編集ポップアップを開けてしまう問題を修正 ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh
  * v2 データブロックの複数選択フィールドで、選択肢ラベルではなく選択肢値が表示される問題を修正 ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh
  * フィルターフォームにデフォルト値がある場合、テーブル初期化時にリクエストが重複する問題を修正 ([#9423](https://github.com/nocobase/nocobase/pull/9423)) by @zhangzhonghe
  * 古いデフォルト値設定を削除できない問題を修正。 ([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust
  * フィールド値の割り当てで、関係フィールドの選択フィールドから定数フィールドを選択できない問題を修正。 ([#9088](https://github.com/nocobase/nocobase/pull/9088)) by @gchust
  * システム設定を送信した後、ページが空白で表示される問題を修正 ([#9458](https://github.com/nocobase/nocobase/pull/9458)) by @zhangzhonghe
  * テーブルブロックのイベントフローでデータの選択を解除した際に、対象ブロックのデータ範囲が正しく設定されない問題を修正。 ([#9443](https://github.com/nocobase/nocobase/pull/9443)) by @gchust
  * v2 テーブルで関係フィールドのタイトルフィールドを変更するとエラーが発生する問題を修正 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) by @katherinehhh
  * V2 連動ルールでフィールドのオプション設定をサポートするよう修正 ([#9399](https://github.com/nocobase/nocobase/pull/9399)) by @jiannx
* **[client-v2]**
  * v2 レイアウトで v1 メニューを除外した後、空のグループが残る問題を修正 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) by @zhangzhonghe
  * プラグイン有効化ポップアップを開いた後、背後のページが空白になる問題を修正 ([#9455](https://github.com/nocobase/nocobase/pull/9455)) by @zhangzhonghe
  * 本番ビルド環境で、v1 管理画面が v2 プラグインモジュールを参照するとクラッシュする問題を修正。 ([#9460](https://github.com/nocobase/nocobase/pull/9460)) by @Molunerfinn
* **[cli-v1]** create-nocobase-app で作成したアプリが、開発起動時に app-dev クライアントパスの解析エラーによりビルドに失敗する問題を修正。 ([#9465](https://github.com/nocobase/nocobase/pull/9465)) by @Molunerfinn
* **[server]** fix(file-manager): ローカル/公開ストレージ内のリスクのあるコンテンツを含むファイルを強制的にダウンロードさせるよう修正 ([#9437](https://github.com/nocobase/nocobase/pull/9437)) by @mytharcher
* **[AI 従業員]**
  * AI プラグインの起動に失敗する問題を修正 ([#9483](https://github.com/nocobase/nocobase/pull/9483)) by @cgyrock
  * Ollama のテスト実行で Key が不要な場合でも入力を求められる問題を修正 ([#9450](https://github.com/nocobase/nocobase/pull/9450)) by @cgyrock
* **[ブロック：ステップフォーム]** v1 ステップフォームブロックを全高に設定した後、ページにスクロールバーが表示される問題を修正 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh
* **[部門]** Users & Permissions 設定で、ユーザー追加ボタンと部門追加ボタンの翻訳が相互に影響する問題を修正 ([#9456](https://github.com/nocobase/nocobase/pull/9456)) by @katherinehhh
* **[ワークフロー]** FlowModel ワークフロー紐付けポップアップに、操作系イベントとカスタム操作イベントのヒント文言を再追加 ([#9447](https://github.com/nocobase/nocobase/pull/9447)) by @mytharcher
* **[Markdown]** v2 Markdown ブロックでエラーが発生する問題を修正 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) by @zhangzhonghe
* **[ワークフロー：Webhook トリガー]** バリデーションルールによりレスポンスノードの作成に失敗する問題を修正 by @mytharcher
* **[ワークフロー：承認]**
  * モバイル端末で承認フォームのレイアウトが正しく表示されない問題を修正 by @zhangzhonghe
  * 承認の転送時に承認記録のインデックスが重複する問題を修正。 by @mytharcher
* **[バックアップマネージャー]** バックアップ時にファイルが見つからず、処理が失敗してエラーになる問題を修正。 by @gchust
