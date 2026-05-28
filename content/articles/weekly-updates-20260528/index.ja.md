週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.58](https://www.nocobase.com/ja/blog/v2.0.58)

*リリース日：2026-05-28*

### 🎉 新機能

* **[ワークフロー]** 開始済みのワークフロー実行を、開始ノードまたは指定したノードから再実行するための管理者向け API を追加しました。([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher

### 🚀 機能改善

* **[client]** メニュー項目設定から非表示オプションを削除しました。([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe

### 🐛 不具合修正

* **[client]**
  * v2 モバイル版の日付ポップアップで、フォーム値ではなく現在時刻が使用される問題を修正しました。([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  * v2 の時間フィールドで、フォーマット設定が反映されない問題を修正しました。([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  * v1 のスキャン入力コンポーネントにおけるファイルアップロード上限を 10MB に引き上げました。([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
  * サブフォームフィールドが連動ルールによって表示された後も、送信時に除外される問題を修正しました。([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh
  * v2 サブフォーム内のサブテーブルで、2 件目のデータを追加できない問題を修正しました。([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  * メニュー切り替え後にページのタブが消える問題を修正しました。([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe
* **[flow-engine]** ポップアップ内のフォーム送信が成功した後、テーブル操作の連動ルールが誤って実行される問題を修正しました。([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust
* **[ワークフロー：カスタム操作イベント]** カスタム操作イベントのテーブルボタンで、複数行データのコンテキスト下でもカスタムコンテキストワークフローを選択できてしまう問題を修正しました。([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher
* **[ファイルマネージャー]**
  * ファイルアップロード時に Unicode ファイル名が誤って二重デコードされ、制御文字を含むオブジェクトキーが生成される問題を修正しました。([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher
  * PDF プレビュー失敗時のエラーメッセージを改善し、外部ストレージの CORS 設定に関する説明を追加しました。([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    参考資料：[ファイルプレビュー](docs/docs/cn/file-manager/file-preview/index.md)

### [v2.0.57](https://www.nocobase.com/ja/blog/v2.0.57)

*リリース日：2026-05-26*

### 🐛 不具合修正

* **[build]** プラグインのサーバー側難読化ビルド成果物で、Node.js ランタイムにブラウザーのグローバル変数が注入される問題を修正しました。([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn
* **[ワークフロー：手動処理ノード]** ワークフローの手動タスクを一時保存した後、入力済みのフォーム内容が保存されない問題を修正しました。([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher
* **[AI 従業員]** テーブルコンテキストのプロンプトで、データクエリツール名が誤っている問題を修正しました。([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock
* **[ファイルマネージャー]** PDF プレビューを PDF.js で安全にレンダリングするようにし、iframe で元の PDF を直接読み込まないようにしました。([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher
* **[認証：OIDC]** SSO ログインコールバックが外部リダイレクト先を受け取った際に、Token が漏えいする可能性のある問題を修正しました by @2013xile
* **[ワークフロー：承認]**
  * `jobs:resume` API が承認ノードでサポートされていない問題を修正しました by @mytharcher
  * 承認の取り消し時に送信された業務データの更新を修正し、業務テーブルの更新権限制御に従うようにしました。 by @mytharcher
  * 承認フローが非承認ノードの失敗により終了した後、承認待ちレコードと統計値が未処理のまま残る問題を修正しました。 by @mytharcher

### [v2.0.56](https://www.nocobase.com/ja/blog/v2.0.56)

*リリース日：2026-05-22*

### 🎉 新機能

* **[バックアップマネージャー]** バックアップマネージャープラグインをオープンソース化しました。([#9550]()) by @chenos

### 🚀 機能改善

* **[client]** 操作ボタンの表示設定を改善しました。([#9510]()) by @katherinehhh
* **[flow-engine]** v2 のフィールド設定メニューでフィールドを検索できるようになりました。([#9489]()) by @zhangzhonghe
* **[undefined]**
  * 依存関係の変更に対する Pull Request セキュリティチェックを追加しました。([#9523]()) by @zhangzhonghe
* **[通知管理]** 送信性能を向上させるため、キュー戦略を調整しました。([#9407]()) by @mytharcher
* **[AI：ナレッジベース]** AI ナレッジベースのベクターストレージを変更できるようにしました by @cgyrock
* **[ワークフロー：承認]** 関連する承認をタイムラインカードで表示するようにしました by @zhangzhonghe

### 🐛 不具合修正

* **[client]**
  * v2 の関係フィールドがデータ範囲によって連動している場合に、依存する関係フィールドを変更しても選択済みの値がクリアされない問題を修正しました。([#9551]()) by @katherinehhh
  * メニューバッジの値が 0 の場合でも赤いドットが表示される問題を修正しました。([#9491]()) by @zhangzhonghe
  * フィルターフォームで現在のフォーム変数を使用できない問題を修正しました。([#9474]()) by @zhangzhonghe
  * v2 ブロックで編集モードを終了した後、縮小後の幅が失われる問題を修正しました。([#9529]()) by @zhangzhonghe
  * サブフォーム内の JS Field メニュー状態が正しく表示されない問題を修正しました。([#9507]()) by @gchust
* **[flow-engine]** 外部データソースのフィールドを複数選択フィールドとして設定した後、v2 フォームで複数選択できない問題を修正しました。([#9542]()) by @katherinehhh
* **[AI 従業員]** AI 従業員が読み取り専用ナレッジベースを使用するとエラーが発生する問題を修正しました。([#9539]()) by @cgyrock
* **[カレンダー]** カレンダーで「さらに表示」から日程を展開した際、正しく表示されない問題を修正しました。([#9492]()) by @zhangzhonghe
* **[操作：一括更新]** 一括更新プラグインで更新に失敗した後、読み込み状態がリセットされない問題を修正しました。([#9509]()) by @katherinehhh
* **[API ドキュメント]** Collection API ドキュメントで、クエリパラメーターが相互に影響する問題を修正しました。([#9442]()) by @jiannx
* **[ワークフロー]** ワークフローを手動実行する際の読み込み状態を追加しました。([#9533]()) by @mytharcher
* **[マイグレーション管理]** OceanBase 使用時にマイグレーションファイルを作成できない問題を修正しました by @2013xile
* **[ファイルストレージ：S3 (Pro)]** S3 Pro のエンドポイント処理ロジックを修正し、サーバー側アップロードと URL プレビューで bucket サブドメインが重複して連結されないようにしました。 by @mytharcher
* **[ワークフロー：承認]** 同一承認タスクで承認担当者の転送を同時に行う際、承認レコードのインデックスが重複する問題を修正しました。 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.37](https://www.nocobase.com/ja/blog/v2.1.0-beta.37)

*リリース日：2026-05-26*

### 🎉 新機能

* **[client-v2]** v2 admin に「セキュリティ」親メニューと「Token ポリシー」設定ページを追加しました。ユーザーセンターで「パスワード変更」も利用できるようになりました。([#9556](https://github.com/nocobase/nocobase/pull/9556)) by @Molunerfinn
* **[cli]** basic auth に対応しました。([#9558](https://github.com/nocobase/nocobase/pull/9558)) by @chenos
* **[パスワードポリシー]** パスワードポリシープラグインを新しい client-v2 管理画面に移行しました。パスワードポリシーとロック済みユーザーの 2 つの設定ページを提供し、ユーザーセンターのパスワード変更フォームにクライアント側のパスワードルール検証を組み込みました。 by @Molunerfinn

### 🚀 機能改善

* **[データ可視化]** チャートブロックが client v2 に対応しました。([#9517](https://github.com/nocobase/nocobase/pull/9517)) by @jiannx
* **[ワークフロー]** ワークフローの非同期ノードにおける可用性チェックをリファクタリングしました。([#9532](https://github.com/nocobase/nocobase/pull/9532)) by @mytharcher

### 🐛 不具合修正

* **[build]**
  * サーバー側ビルド内のテキストリソースは、JavaScript モジュールに変換されず、ファイルとしてコピーされるようになりました。([#9565](https://github.com/nocobase/nocobase/pull/9565)) by @Molunerfinn
  * プラグインのサーバー側難読化ビルド成果物で、Node.js ランタイムにブラウザーのグローバル変数が注入される問題を修正しました。([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn
* **[client-v2]** ページ言語のメタ情報を修正し、アプリページが常に英語として扱われるのではなく、現在のアプリ言語に従うようにしました。([#9564](https://github.com/nocobase/nocobase/pull/9564)) by @Molunerfinn
* **[ファイルマネージャー]** PDF プレビューを PDF.js で安全にレンダリングするようにし、iframe で元の PDF を直接読み込まないようにしました。([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher
* **[AI 従業員]** テーブルコンテキストのプロンプトで、データクエリツール名が誤っている問題を修正しました。([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock
* **[ワークフロー：手動処理ノード]** ワークフローの手動タスクを一時保存した後、入力済みのフォーム内容が保存されない問題を修正しました。([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher
* **[認証：OIDC]** SSO ログインコールバックが外部リダイレクト先を受け取った際に、Token が漏えいする可能性のある問題を修正しました by @2013xile
* **[ワークフロー：承認]**
  * 承認の取り消し時に送信された業務データの更新を修正し、業務テーブルの更新権限制御に従うようにしました。 by @mytharcher
  * `jobs:resume` API が承認ノードでサポートされていない問題を修正しました by @mytharcher
  * 同一承認タスクで承認担当者の転送を同時に行う際、承認レコードのインデックスが重複する問題を修正しました。 by @mytharcher
  * 承認フローが非承認ノードの失敗により終了した後、承認待ちレコードと統計値が未処理のまま残る問題を修正しました。 by @mytharcher

### [v2.1.0-beta.36](https://www.nocobase.com/ja/blog/v2.1.0-beta.36)

*リリース日：2026-05-22*

### 🎉 新機能

* **[cli]**`backup create` と `backup restore` コマンドを追加しました。([#9541]()) by @chenos
* **[バックアップマネージャー]** バックアップマネージャープラグインをオープンソース化しました。([#9550]()) by @chenos
* **[テーマエディター]** テーマエディターが v2 画面に対応しました。([#9530]()) by @zhangzhonghe
* **[二要素認証 (2FA)]** 新クライアントで TOTP と二段階認証の紐づけ、検証、設定ができるようになりました。 by @Molunerfinn

### 🚀 機能改善

* **[client]** 操作ボタンの表示設定を改善しました。([#9510]()) by @katherinehhh
* **[flow-engine]** v2 のフィールド設定メニューでフィールドを検索できるようになりました。([#9489]()) by @zhangzhonghe
* **[cli]**`env auth` フローを改善しました。([#9546]()) by @chenos
* **[undefined]**
  * 依存関係の変更に対する Pull Request セキュリティチェックを追加しました。([#9523]()) by @zhangzhonghe
* **[検証]** 「検証」プラグインに v2 クライアントを追加しました。管理設定ページ、ユーザーセンター入口、SMS 認証コードフォームなどに対応しています。([#9515]()) by @Molunerfinn
* **[ユーザー認証]** カスタムブランド設定が v2 クライアントで正常に反映されるようになりました。([#9543]()) by @zhangzhonghe
* **[ブロック：マップ]** マッププラグインに v2 クライアント対応を追加しました。([#9511]()) by @jiannx
* **[カスタムブランド]** カスタムブランド設定が v2 クライアントに対応しました by @zhangzhonghe
* **[AI：ナレッジベース]** AI ナレッジベースのベクターストレージを変更できるようにしました by @cgyrock
* **[ワークフロー：承認]** ワークフローキャンバスの新しいノード API に対応するため、承認ノードに `async` タイプ識別子を追加しました by @mytharcher

### 🐛 不具合修正

* **[client]**
  * v2 の関係フィールドがデータ範囲によって連動している場合に、依存する関係フィールドを変更しても選択済みの値がクリアされない問題を修正しました。([#9551]()) by @katherinehhh
  * 開発モードで、ビルド済みの storage プラグインがローカルソースプラグインの名前付きエクスポートに依存している場合に、読み込みに失敗する問題を修正しました。([#9548]()) by @Molunerfinn
  * サブフォーム内の JS Field メニュー状態が正しく表示されない問題を修正しました。([#9507]()) by @gchust
  * v2 ブロックで編集モードを終了した後、縮小後の幅が失われる問題を修正しました。([#9529]()) by @zhangzhonghe
* **[client-v2]** dnd-kit の依存関係登録が一致しない問題を修正しました。([#9544]()) by @jiannx
* **[flow-engine]** 外部データソースのフィールドを複数選択フィールドとして設定した後、v2 フォームで複数選択できない問題を修正しました。([#9542]()) by @katherinehhh
* **[ブロック：iframe]** iframe ブロックの高さを設定した後、内容がブロック全体に広がらない問題を修正しました。([#9540]()) by @katherinehhh
* **[AI 従業員]**
  * AI 従業員が読み取り専用ナレッジベースを使用するとエラーが発生する問題を修正しました。([#9539]()) by @cgyrock
  * ツール呼び出しのストリーミングイベントが分割された場合に、AI ツール呼び出しカードがすぐに表示されない問題を修正しました。([#9534]()) by @2013xile
  * AI 従業員が読み取り専用ナレッジベースを使用するとエラーが発生する問題を修正しました。([#9538]()) by @cgyrock
* **[操作：レコードのエクスポート]** データテーブルに関係フィールドが多い場合、エクスポートボタンのフィールド設定をクリックした際に応答が遅くなる問題を修正しました。([#9524]()) by @katherinehhh
* **[操作：一括更新]** 一括更新プラグインで更新に失敗した後、読み込み状態がリセットされない問題を修正しました。([#9509]()) by @katherinehhh
* **[ワークフロー]** ワークフローを手動実行する際の読み込み状態を追加しました。([#9533]()) by @mytharcher
* **[ローカリゼーション]** AI 翻訳タスクで、内蔵語句の参考翻訳の値を取得する際の問題を修正しました。([#9531]()) by @2013xile
* **[マイグレーション管理]** OceanBase 使用時にマイグレーションファイルを作成できない問題を修正しました by @2013xile
* **[ファイルストレージ：S3 (Pro)]** S3 Pro のエンドポイント処理ロジックを修正し、サーバー側アップロードと URL プレビューで bucket サブドメインが重複して連結されないようにしました。 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.40](https://www.nocobase.com/ja/blog/v2.1.0-alpha.40)

*リリース日：2026-05-22*

### 🎉 新機能

* **[cli]**`backup create` と `backup restore` コマンドを追加しました。([#9541](https://github.com/nocobase/nocobase/pull/9541)) by @chenos
* **[バックアップマネージャー]** バックアップマネージャープラグインをオープンソース化しました。([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos
* **[テーマエディター]** テーマエディターが v2 画面に対応しました。([#9530](https://github.com/nocobase/nocobase/pull/9530)) by @zhangzhonghe
* **[二要素認証 (2FA)]** 新クライアントで TOTP と二段階認証の紐づけ、検証、設定ができるようになりました。 by @Molunerfinn

### 🚀 機能改善

* **[cli]**`env auth` フローを改善しました。([#9546](https://github.com/nocobase/nocobase/pull/9546)) by @chenos
* **[flow-engine]** v2 のフィールド設定メニューでフィールドを検索できるようになりました。([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe
* **[client]** 操作ボタンの表示設定を改善しました。([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh
* **[undefined]**
  * 依存関係の変更に対する Pull Request セキュリティチェックを追加しました。([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe
* **[検証]** 「検証」プラグインに v2 クライアントを追加しました。管理設定ページ、ユーザーセンター入口、SMS 認証コードフォームなどに対応しています。([#9515](https://github.com/nocobase/nocobase/pull/9515)) by @Molunerfinn
* **[ユーザー認証]** カスタムブランド設定が v2 クライアントで正常に反映されるようになりました。([#9543](https://github.com/nocobase/nocobase/pull/9543)) by @zhangzhonghe
* **[ブロック：マップ]** マッププラグインに v2 クライアント対応を追加しました。([#9511](https://github.com/nocobase/nocobase/pull/9511)) by @jiannx
* **[カスタムブランド]** カスタムブランド設定が v2 クライアントに対応しました by @zhangzhonghe
* **[AI：ナレッジベース]** AI ナレッジベースのベクターストレージを変更できるようにしました by @cgyrock
* **[ワークフロー：承認]** ワークフローキャンバスの新しいノード API に対応するため、承認ノードに `async` タイプ識別子を追加しました by @mytharcher

### 🐛 不具合修正

* **[client]**
  * 開発モードで、ビルド済みの storage プラグインがローカルソースプラグインの名前付きエクスポートに依存している場合に、読み込みに失敗する問題を修正しました。([#9548](https://github.com/nocobase/nocobase/pull/9548)) by @Molunerfinn
  * v2 ブロックで編集モードを終了した後、縮小後の幅が失われる問題を修正しました。([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe
  * v2 の関係フィールドがデータ範囲によって連動している場合に、依存する関係フィールドを変更しても選択済みの値がクリアされない問題を修正しました。([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh
  * サブフォーム内の JS Field メニュー状態が正しく表示されない問題を修正しました。([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust
* **[client-v2]** dnd-kit の依存関係登録が一致しない問題を修正しました。([#9544](https://github.com/nocobase/nocobase/pull/9544)) by @jiannx
* **[flow-engine]** 外部データソースのフィールドを複数選択フィールドとして設定した後、v2 フォームで複数選択できない問題を修正しました。([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh
* **[ブロック：iframe]** iframe ブロックの高さを設定した後、内容がブロック全体に広がらない問題を修正しました。([#9540](https://github.com/nocobase/nocobase/pull/9540)) by @katherinehhh
* **[操作：レコードのエクスポート]** データテーブルに関係フィールドが多い場合、エクスポートボタンのフィールド設定をクリックした際に応答が遅くなる問題を修正しました。([#9524](https://github.com/nocobase/nocobase/pull/9524)) by @katherinehhh
* **[AI 従業員]**
  * AI 従業員が読み取り専用ナレッジベースを使用するとエラーが発生する問題を修正しました。([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock
  * AI 従業員が読み取り専用ナレッジベースを使用するとエラーが発生する問題を修正しました。([#9538](https://github.com/nocobase/nocobase/pull/9538)) by @cgyrock
  * ツール呼び出しのストリーミングイベントが分割された場合に、AI ツール呼び出しカードがすぐに表示されない問題を修正しました。([#9534](https://github.com/nocobase/nocobase/pull/9534)) by @2013xile
* **[ローカリゼーション]** AI 翻訳タスクで、内蔵語句の参考翻訳の値を取得する際の問題を修正しました。([#9531](https://github.com/nocobase/nocobase/pull/9531)) by @2013xile
* **[操作：一括更新]** 一括更新プラグインで更新に失敗した後、読み込み状態がリセットされない問題を修正しました。([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh
* **[ワークフロー]** ワークフローを手動実行する際の読み込み状態を追加しました。([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher
* **[マイグレーション管理]** OceanBase 使用時にマイグレーションファイルを作成できない問題を修正しました by @2013xile
* **[ファイルストレージ：S3 (Pro)]** S3 Pro のエンドポイント処理ロジックを修正し、サーバー側アップロードと URL プレビューで bucket サブドメインが重複して連結されないようにしました。 by @mytharcher
* **[ワークフロー：承認]** 同一承認タスクで承認担当者の転送を同時に行う際、承認レコードのインデックスが重複する問題を修正しました。 by @mytharcher
