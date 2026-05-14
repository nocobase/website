週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.52](https://www.nocobase.com/ja/blog/v2.0.52)

*リリース日：2026-05-13*

### 🎉 新機能

* **[client]**
  * v2 に現在のユーザー言語変数を追加 ([#9405]()) by @katherinehhh
  * v2 フォームの日付フィールドに日付範囲制限の設定項目を追加 ([#9400]()) by @katherinehhh

### 🚀 機能改善

* **[client]** 一対多関係テーブルブロックの関連付け操作で、ポップアップ選択ブロックはすでに関連付け済みのデータを除外すべき ([#9448]()) by @katherinehhh
* **[部門]** 部門リストのスタイルを最適化し、アイコンを追加して間隔を調整 ([#9435]()) by @katherinehhh
* **[AI: ナレッジベース]** ナレッジベース作成時に一意キーの指定をサポート by @cgyrock

### 🐛 不具合修正

* **[client]**
  * 古いデフォルト値設定を削除できない問題を修正。 ([#9470]()) by @gchust
  * フィールド値割り当て内の関係フィールド選択フィールドで、定数フィールドを選択できない問題を修正。 ([#9088]()) by @gchust
  * テーブルブロックイベント流行データの選択解除時に、ターゲットブロックのデータ範囲設定が正しくない問題を修正。 ([#9443]()) by @gchust
  * フィルターフォームにデフォルト値がある場合、テーブル初期化時にリクエストが重複する問題を修正 ([#9423]()) by @zhangzhonghe
  * V2 連動ルールがフィールド設定オプションをサポートするよう修正 ([#9399]()) by @jiannx
  * v2 テーブルで関係フィールドのタイトルフィールドを変更するとエラーが発生する問題を修正 ([#9451]()) by @katherinehhh
  * 操作ボタンの連動ルールがまれに有効にならない問題を修正。 ([#9430]()) by @gchust
  * v2 サブテーブル内の対多関係フィールドコンポーネントリストにサブテーブルコンポーネントが表示される問題を修正 ([#9438]()) by @katherinehhh
* **[server]** fix(file-manager): ローカル/公開ストレージ内のリスクのある内容のファイルを強制ダウンロードにする ([#9437]()) by @mytharcher
* **[AI 従業員]** Ollama の試行実行で Key が不要なのに入力を求められる問題を修正 ([#9450]()) by @cgyrock
* **[ビジュアルデータテーブル管理]** Graphical interface の自動レイアウトで “to do update action, filter or filterByTk is required” エラーが発生する問題を修正 ([#9421]()) by @katherinehhh
* **[ワークフロー]** 修正：FlowModel ワークフロー紐付けポップアップ内の操作系イベントとカスタム操作イベントのヒント文言を戻す ([#9447]()) by @mytharcher
* **[部門]** Users & Permissions 設定で、ユーザー追加ボタンと部門追加ボタンの翻訳が相互に影響する問題を修正 ([#9456]()) by @katherinehhh
* **[データテーブルフィールド：Markdown(Vditor)]** markdown フィールドがフォームの水平レイアウト時にヒント情報が遮られる問題を修正 ([#9420]()) by @katherinehhh
* **[WEB クライアント]** 翻訳後のルートタイプを使用するとデータをフィルタリングできない問題を修正 ([#9425]()) by @zhangzhonghe
* **[ワークフロー：承認]**
  * 承認処理設定に JS field が表示される問題を修正 by @zhangzhonghe
  * モバイル端末で承認フォームのレイアウト表示が正しくない問題を修正 by @zhangzhonghe
  * 承認の転送時に承認記録インデックスが重複する問題を修正。 by @mytharcher
* **[バックアップマネージャー]** バックアップ時にファイルが見つからないことにより失敗してエラーになる問題を修正。 by @gchust

### [v2.0.51](https://www.nocobase.com/ja/blog/v2.0.51)

*リリース日：2026-05-10*

### 🚀 機能改善

* **[ワークフロー：承認]** 承認フォームの必須バリデーションに関する操作性の問題を修正 by @zhangzhonghe

### 🐛 不具合修正

* **[client]**
  * JS field を読み取り専用に変更した後、js コードを再度編集できない問題を修正。 ([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust
  * フィールド連動ルールで、サブテーブルフィールドへの値の割り当てが反映されない問題を修正。 ([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust
  * ルート管理ページの設定が、ページタブの設定と同期されない問題を修正 ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe
  * 新規追加ポップアップで、関係フィールドのデフォルト値ポップアップが正しく表示されない問題を修正。 ([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust
* **[パスワードポリシー]** 永久ロックされたユーザーのログイン制限が、サービス再起動後に失効する可能性がある問題を修正 by @2013xile
* **[操作：レコードインポート Pro]** 日付フィールドに対する重複チェックが常に失敗する問題を修正 by @mytharcher
* **[ワークフロー：承認]** 承認ワークフロー設定で、レコード選択ドロワーが遮られる問題を修正 by @zhangzhonghe

### [v2.0.50](https://www.nocobase.com/ja/blog/v2.0.50)

*リリース日：2026-05-09*

### 🎉 新機能

* **[client]** 関連ブロックに関連付け/関連付け解除操作を追加 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh
* **[テキストコピー]** 読み取り表示のテキストフィールドで「コピーを有効化」設定をサポート ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh

### 🚀 機能改善

* **[undefined]** pkg.nocobase.com のリリース処理で公開済みバージョ ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn
* **[client]** フィールド値の割り当てで自動採番フィールドを使用可能に ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher

### 🐛 不具合修正

* **[flow-engine]** v2 Flow フォームで、データテーブルフィールドのバリデーションメッセージが翻訳されない問題を修正 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx
* **[client]**
  * フォームブロックで `非表示にして値を保持` に設定されたフィールドがページ編集モードで表示されない問題を修正し、フィールド値の割り当てでこれらのフィールドに値を入力できるように復元 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx
  * AttachmentURL フィールドでファイルメタデータが不足している場合に、ダウンロード時のファイル名が異常になる問題を修正。 ([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher
  * v2 テーブルでワークフローを一括トリガーした後、別のタブへ移動して元のタブに戻ると選択状態が同期されず、再度レコードを選択できてしまう問題を修正 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx
  * フィルターフォームを折りたためない問題を修正 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe
  * v1 サブテーブルの連動ルールが、フィールドの必須スタイルを誤って変更する問題を修正 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe
  * グリッドカードブロックでデータ更新後に再読み込みしても、データが正しく表示されない問題を修正 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh
  * サブテーブル内の選択肢フィールドの必須入力が、モバイル端末で 2 回選択しないと反映されない問題を修正 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh
  * キャッシュされたページを切り替えた後、URL クエリパラメータ変数が無効になる問題を修正 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe
  * v2 DividerItem がテーマに対応していない問題を修正 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh
  * v2 サブテーブルで、関係フィールドのドロップダウン選択肢コンポーネントにクイック編集の設定項目が誤って表示される問題を修正 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh
  * ブロック内フォームの値が変更された際に、連動ルールが自動実行されない問題を修正。 ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust
  * カスタムドロップダウン複数選択でスカラーフィールドをフィルタリングする際にエラーが発生する問題を修正 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe
* **[server]** プラグインパッケージ名の検証を追加 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos
* **[データソース管理]** ロール権限設定で、外部データソースのカスタム範囲によりすべてのデータを編集・削除できてしまう問題を修正 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh
* **[データソース：メインデータベース]** テーブルプレフィックス有効時にデータベーステーブルをインポートすると、プレフィックス付きのテーブル名が誤って使用される問題を修正 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile
* **[通知：サイト内メッセージ]** リアルタイムのサイト内メッセージを受信した後、通知リストがすぐに更新されない問題を修正 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher
* **[ブロック：カンバン]** v1 カンバンブロックの長文フィールドで、単語の途中で改行される問題を修正 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh
* **[データテーブルフィールド：数式]** v2 サブテーブルで数式フィールドの値が自動計算されない問題を修正 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.32](https://www.nocobase.com/ja/blog/v2.1.0-beta.32)

*リリース日：2026-05-13*

### 🎉 新機能

* **[undefined]** AI 従業員：ローカライゼーションエンジニア Lina を追加し、ローカライゼーション翻訳の完了を支援 ([#9434]()) by @2013xile
  参考ドキュメント：[ローカライゼーション管理]()<br />[Lina：ローカライゼーションエンジニア]()<br>[Lina とローカル HY-MT1.5-1.8B を使用してローカライゼーション語句を翻訳]()
* **[ファイルストレージ：S3 (Pro)]** v2 ファイルマネージャーで S3 Pro ストレージを通じたファイルアップロードをサポート。 by @Molunerfinn

### 🚀 機能改善

* **[build]**`deleteServerFiles` の回帰テストを補足し、Windows および POSIX パスのシーンで `client` と `client-v2` のビルド成果物が誤って削除されないことを保証。 ([#9318]()) by @Molunerfinn
* **[client]** 一対多関係テーブルブロックの関連付け操作で、ポップアップ選択ブロックはすでに関連付け済みのデータを除外すべき ([#9448]()) by @katherinehhh
* **[ファイルマネージャー]** サードパーティストレージプラグインが v2 のファイルマネージャー設定ページでカスタムストレージタイプフォームを登録できるようになりました。 ([#9439]()) by @Molunerfinn
* **[AI: ナレッジベース]** ナレッジベース作成時に一意キーの指定をサポート by @cgyrock

### 🐛 不具合修正

* **[client]**
  * フィールド値割り当て内の関係フィールド選択フィールドで、定数フィールドを選択できない問題を修正。 ([#9088]()) by @gchust
  * システム設定送信後にページ表示が空になる問題を修正 ([#9458]()) by @zhangzhonghe
  * フィルターフォームにデフォルト値がある場合、テーブル初期化時にリクエストが重複する問題を修正 ([#9423]()) by @zhangzhonghe
  * テーブルブロックイベント流行データの選択解除時に、ターゲットブロックのデータ範囲設定が正しくない問題を修正。 ([#9443]()) by @gchust
  * V2 連動ルールがフィールド設定オプションをサポートするよう修正 ([#9399]()) by @jiannx
  * v2 テーブルで関係フィールドのタイトルフィールドを変更するとエラーが発生する問題を修正 ([#9451]()) by @katherinehhh
* **[client-v2]**
  * プラグイン有効化ポップアップの背後のページが空白になる問題を修正 ([#9455]()) by @zhangzhonghe
  * v1 バックエンドページが本番ビルドで v2 プラグインモジュールを参照するとクラッシュする問題を修正。 ([#9460]()) by @Molunerfinn
* **[cli-v1]** create-nocobase-app で作成したアプリが開発起動時に app-dev クライアントパス解析エラーによりビルド失敗する問題を修正。 ([#9465]()) by @Molunerfinn
* **[server]** fix(file-manager): ローカル/公開ストレージ内のリスクのある内容のファイルを強制ダウンロードにする ([#9437]()) by @mytharcher
* **[部門]** Users & Permissions 設定で、ユーザー追加ボタンと部門追加ボタンの翻訳が相互に影響する問題を修正 ([#9456]()) by @katherinehhh
* **[Markdown]** v2 Markdown ブロックでエラーが発生する問題を修正 ([#9440]()) by @zhangzhonghe
* **[ワークフロー]** 修正：FlowModel ワークフロー紐付けポップアップ内の操作系イベントとカスタム操作イベントのヒント文言を戻す ([#9447]()) by @mytharcher
* **[AI 従業員]** Ollama の試行実行で Key が不要なのに入力を求められる問題を修正 ([#9450]()) by @cgyrock
* **[ワークフロー：承認]**
  * 承認の転送時に承認記録インデックスが重複する問題を修正。 by @mytharcher
  * モバイル端末で承認フォームのレイアウト表示が正しくない問題を修正 by @zhangzhonghe
* **[バックアップマネージャー]** バックアップ時にファイルが見つからないことにより失敗してエラーになる問題を修正。 by @gchust

### [v2.1.0-beta.30](https://www.nocobase.com/ja/blog/v2.1.0-beta.30)

*リリース日：2026-05-12*

### 🎉 新機能

* **[client]**
  * ページメニュー項目で連動ルールを設定できるように ([#9304](https://github.com/nocobase/nocobase/pull/9304)) by @zhangzhonghe
  * v2 に現在のユーザー言語変数を追加 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) by @katherinehhh

### 🚀 機能改善

* **[client-v2]** v2 レイアウトで v1 メニューを除外し、v2 メニューのみを表示 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) by @zhangzhonghe
* **[undefined]** nb cli で session レベルの current env をサポート ([#9415](https://github.com/nocobase/nocobase/pull/9415)) by @chenos
* **[AI 従業員]** AI 従業員が複数のセッションを並列処理できるように ([#9344](https://github.com/nocobase/nocobase/pull/9344)) by @cgyrock
* **[部門]** 部門リストのスタイルを改善し、アイコンの追加と間隔の調整を実施 ([#9435](https://github.com/nocobase/nocobase/pull/9435)) by @katherinehhh

### 🐛 不具合修正

* **[build]** v1 client のビルド時に、他のプラグインの `/client-v2` エントリを参照するとエラーが発生する問題を修正。 ([#9436](https://github.com/nocobase/nocobase/pull/9436)) by @Molunerfinn
* **[client]**
  * v2 サブテーブル内の対多関係フィールドのコンポーネント一覧に、サブテーブルコンポーネントが表示される問題を修正 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) by @katherinehhh
  * 操作ボタンの連動ルールがまれに有効にならない問題を修正。 ([#9430](https://github.com/nocobase/nocobase/pull/9430)) by @gchust
* **[ビジュアルデータテーブル管理]** Graphical interface の自動レイアウトで “to do update action, filter or filterByTk is required” エラーが発生する問題を修正 ([#9421](https://github.com/nocobase/nocobase/pull/9421)) by @katherinehhh
* **[ブロック：ツリー]** ツリーフィルターブロックの設定を改善し、未対応の関連レコード入口、タイトルフィールドが欠落している場合のメッセージ、検索を閉じた後のリセット挙動を修正。 ([#9426](https://github.com/nocobase/nocobase/pull/9426)) by @jiannx

### [v2.1.0-beta.29](https://www.nocobase.com/ja/blog/v2.1.0-beta.29)

*リリース日：2026-05-10*

### 🎉 新機能

* **[client]** v2 フォームの日付フィールドに、日付範囲制限の設定項目を追加 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh
* **[flow-engine]**`plugin-environment-variables` を client-v2 に移行し、React ベースの設定ページと、グローバルに登録される `$env` ランタイム変数を提供。`plugin-file-manager` に client-v2 エントリを追加し、React ベースのストレージ設定ページ、および FlowModel ベースのアップロードフィールド、アップロード操作、プレビュー機能を提供。 ([#9413](https://github.com/nocobase/nocobase/pull/9413)) by @Molunerfinn

### 🐛 不具合修正

* **[client]**
  * JS field を読み取り専用に変更した後、js コードを再度編集できない問題を修正。 ([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust
  * ルート管理ページの設定が、ページタブの設定と同期されない問題を修正 ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe
  * フィールド連動ルールで、サブテーブルフィールドへの値の割り当てが反映されない問題を修正。 ([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust
  * 新規追加ポップアップで、関係フィールドのデフォルト値ポップアップが正しく表示されない問題を修正。 ([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust
* **[データテーブルフィールド：Markdown(Vditor)]** フォームの水平レイアウト時に、markdown フィールドのヒント情報が遮られる問題を修正 ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh
* **[モバイル（非推奨）]** モバイル端末でメッセージポップアップを閉じられず、スクロールもできない問題を修正 ([#9424](https://github.com/nocobase/nocobase/pull/9424)) by @zhangzhonghe
* **[Web クライアント]** 翻訳後のルートタイプを使用すると、データを絞り込めない問題を修正 ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe
* **[ワークフロー：承認]** 承認処理設定に JS field が表示される問題を修正 by @zhangzhonghe

### [v2.1.0-beta.27](https://www.nocobase.com/ja/blog/v2.1.0-beta.27)

*リリース日：2026-05-09*

### 🎉 新機能

* **[server]** AI 従業員が Bash コマンドで内蔵ドキュメントを検索できるように ([#9269](https://github.com/nocobase/nocobase/pull/9269)) by @2013xile
* **[AI 従業員]** ワークフローの AI 従業員ノードで、添付ファイルフィールドからファイルを読み込めるように ([#9402](https://github.com/nocobase/nocobase/pull/9402)) by @cgyrock
* **[テキストコピー]** 読み取り表示のテキストフィールドで「コピーを有効化」設定をサポート ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh

### 🚀 機能改善

* **[client]** フィールド値の割り当てで自動採番フィールドを使用可能に ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher
* **[ブロック：カンバン]** v2 詳細フィールドの間隔を揃え、カンバンカードと列間隔がテーマ設定により適切に対応するよう改善。 ([#9390](https://github.com/nocobase/nocobase/pull/9390)) by @jiannx
* **[AI 従業員]** Nathan の RunJS 編集ツールを改善し、長い AI 会話での動作の重さを軽減 ([#9311](https://github.com/nocobase/nocobase/pull/9311)) by @2013xile
* **[ワークフロー：承認]** 承認フォームの必須バリデーションに関する操作性の問題を修正 by @zhangzhonghe

### 🐛 不具合修正

* **[flow-engine]** v2 Flow フォームで、データテーブルフィールドのバリデーションメッセージが翻訳されない問題を修正 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx
* **[client]**
  * フィルターフォームを折りたためない問題を修正 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe
  * カスタムドロップダウン複数選択でスカラーフィールドをフィルタリングする際にエラーが発生する問題を修正 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe
  * AttachmentURL フィールドでファイルメタデータが不足している場合に、ダウンロード時のファイル名が異常になる問題を修正。 ([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher
  * v2 DividerItem がテーマに対応していない問題を修正 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh
  * v1 サブテーブルの連動ルールが、フィールドの必須スタイルを誤って変更する問題を修正 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe
  * フォームブロックで `非表示にして値を保持` に設定されたフィールドがページ編集モードで表示されない問題を修正し、フィールド値の割り当てでこれらのフィールドに値を入力できるように復元 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx
  * v2 テーブルでワークフローを一括トリガーした後、別のタブへ移動して元のタブに戻ると選択状態が同期されず、再度レコードを選択できてしまう問題を修正 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx
* **[client-v2]**
  * フィールド値設定で関係フィールドを選択するとエラーが発生する問題を修正。 ([#9379](https://github.com/nocobase/nocobase/pull/9379)) by @gchust
  * アプリ起動後に 404 ページが一瞬表示される問題を修正 ([#9365](https://github.com/nocobase/nocobase/pull/9365)) by @zhangzhonghe
* **[server]** サブアプリの OAuth discovery リクエストが、誤ってメインアプリのリクエストとしてルーティングされる問題を修正 ([#9383](https://github.com/nocobase/nocobase/pull/9383)) by @2013xile
* **[データソース：メインデータベース]** テーブルプレフィックス有効時にデータベーステーブルをインポートすると、プレフィックス付きのテーブル名が誤って使用される問題を修正 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile
* **[通知：サイト内メッセージ]** リアルタイムのサイト内メッセージを受信した後、通知リストがすぐに更新されない問題を修正 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher
* **[データソース管理]** ロール権限設定で、外部データソースのカスタム範囲によりすべてのデータを編集・削除できてしまう問題を修正 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh
* **[AI: MCP サーバー]** MCP サーバーのパッケージ化時に、ランタイム依存関係が含まれない問題を修正 ([#9401](https://github.com/nocobase/nocobase/pull/9401)) by @2013xile
* **[フロントエンドフローエンジン]** AI が構築したブロックを参照テンプレートに変換した後、コピー用テンプレートへ再変換できない問題を修正。 ([#9392](https://github.com/nocobase/nocobase/pull/9392)) by @gchust
* **[操作：レコードインポート Pro]** 日付フィールドに対する重複チェックが常に失敗する問題を修正 by @mytharcher
* **[パスワードポリシー]** 永久ロックされたユーザーのログイン制限が、サービス再起動後に失効する可能性がある問題を修正 by @2013xile
* **[ワークフロー：承認]** 承認ワークフロー設定で、レコード選択ドロワーが遮られる問題を修正 by @zhangzhonghe
* **[バックアップマネージャー]** pg データベース schema への対応問題を修正 by @Andrew1989Y

### [v2.1.0-beta.26](https://www.nocobase.com/ja/blog/v2.1.0-beta.26)

*リリース日：2026-05-08*

### 🎉 新機能

* **[client]** 関連ブロックに関連付け/関連付け解除操作を追加 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh
* **[データ可視化]** 新規ブロックプラグインで client-v2 をサポート ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe

### 🚀 機能改善

* **[undefined]** pkg.nocobase.com のリリース処理で公開済みバージョ ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn

### 🐛 不具合修正

* **[client-v2]**
  * 一部の v2 ページでリモートプラグインの読み込みに失敗する問題を修正 ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe
  * v2 ページでブロックをドラッグする際、プレースホルダーのハイライトとドロップ位置が正しく表示されない問題を修正 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe
* **[client]**
  * ブロック内フォームの値が変更された際に、連動ルールが自動実行されない問題を修正。 ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust
  * サブテーブル内の選択肢フィールドの必須入力が、モバイル端末で 2 回選択しないと反映されない問題を修正 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh
  * v2 サブテーブルで、関係フィールドのドロップダウン選択肢コンポーネントにクイック編集の設定項目が誤って表示される問題を修正 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh
  * キャッシュされたページを切り替えた後、URL クエリパラメータ変数が無効になる問題を修正 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe
  * グリッドカードブロックでデータ更新後に再読み込みしても、データが正しく表示されない問題を修正 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh
* **[server]** プラグインパッケージ名の検証を追加 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos
* **[undefined]** 多言語ドキュメント内のリンク切れを修正し、ドキュメントビルド時のリンク切れ検出をデフォルトで有効化。 ([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn
* **[AI 従業員]**
  * ワークフローの AI 従業員ノードが関係フィールドの添付ファイルを読み取る際にエラーが発生する問題を修正 ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock
  * ワークフローの AI 従業員ノードで使用するツールを指定した後、ノード呼び出しが正常に終了しない問題を修正 ([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock
* **[ブロック：カンバン]**
  * カンバンカードのコンパクト表示を改善し、クイック作成ポップアップのテンプレート選択を改善。 ([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx
  * v1 カンバンブロックの長文フィールドで、単語の途中で改行される問題を修正 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh
  * ポップアップまたは第 2 階層ページ内の関連カンバンブロックで、未解析のランタイムリソースパラメータが使用される問題を修正。 ([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx
* **[操作：カスタムリクエスト]** koa を v3 にアップグレード ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos
* **[データテーブルフィールド：数式]** v2 サブテーブルで数式フィールドの値が自動計算されない問題を修正 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh
* **[メール管理]** メールボックスエイリアスのタイトル表示問題を修正 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.34](https://www.nocobase.com/ja/blog/v2.1.0-alpha.34)

*リリース日：2026-05-12*

### 🚀 機能改善

* **[AI 従業員]** AI 従業員が複数のセッションを並列処理できるように ([#9344](https://github.com/nocobase/nocobase/pull/9344)) by @cgyrock

### [v2.1.0-alpha.33](https://www.nocobase.com/ja/blog/v2.1.0-alpha.33)

*リリース日：2026-05-11*

### 🎉 新機能

* **[client]**
  * v2 に現在のユーザー言語変数を追加 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) by @katherinehhh
  * ページメニュー項目で連動ルールを設定できるように ([#9304](https://github.com/nocobase/nocobase/pull/9304)) by @zhangzhonghe

### 🚀 機能改善

* **[client-v2]** v2 レイアウトで v1 メニューを除外し、v2 メニューのみを表示 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) by @zhangzhonghe
* **[部門]** 部門リストのスタイルを改善し、アイコンの追加と間隔の調整を実施 ([#9435](https://github.com/nocobase/nocobase/pull/9435)) by @katherinehhh

### 🐛 不具合修正

* **[build]** v1 client のビルド時に、他のプラグインの `/client-v2` エントリを参照するとエラーが発生する問題を修正。 ([#9436](https://github.com/nocobase/nocobase/pull/9436)) by @Molunerfinn
* **[client]**
  * 操作ボタンの連動ルールがまれに有効にならない問題を修正。 ([#9430](https://github.com/nocobase/nocobase/pull/9430)) by @gchust
  * v2 サブテーブル内の対多関係フィールドのコンポーネント一覧に、サブテーブルコンポーネントが表示される問題を修正 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) by @katherinehhh
* **[ビジュアルデータテーブル管理]** Graphical interface の自動レイアウトで “to do update action, filter or filterByTk is required” エラーが発生する問題を修正 ([#9421](https://github.com/nocobase/nocobase/pull/9421)) by @katherinehhh
* **[ブロック：ツリー]** ツリーフィルターブロックの設定を改善し、未対応の関連レコード入口、タイトルフィールドが欠落している場合のメッセージ、検索を閉じた後のリセット挙動を修正。 ([#9426](https://github.com/nocobase/nocobase/pull/9426)) by @jiannx

### [v2.1.0-alpha.32](https://www.nocobase.com/ja/blog/v2.1.0-alpha.32)

*リリース日：2026-05-10*

### 🎉 新機能

* **[client]** v2 フォームの日付フィールドに、日付範囲制限の設定項目を追加 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh
* **[flow-engine]**`plugin-environment-variables` を client-v2 に移行し、React ベースの設定ページと、グローバルに登録される `$env` ランタイム変数を提供。`plugin-file-manager` に client-v2 エントリを追加し、React ベースのストレージ設定ページ、および FlowModel ベースのアップロードフィールド、アップロード操作、プレビュー機能を提供。 ([#9413](https://github.com/nocobase/nocobase/pull/9413)) by @Molunerfinn

### 🚀 機能改善

* **[undefined]** nb cli で session レベルの current env をサポート ([#9415](https://github.com/nocobase/nocobase/pull/9415)) by @chenos

### 🐛 不具合修正

* **[client]**
  * 新規追加ポップアップで、関係フィールドのデフォルト値ポップアップが正しく表示されない問題を修正。 ([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust
  * JS field を読み取り専用に変更した後、js コードを再度編集できない問題を修正。 ([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust
  * ルート管理ページの設定が、ページタブの設定と同期されない問題を修正 ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe
  * フィールド連動ルールで、サブテーブルフィールドへの値の割り当てが反映されない問題を修正。 ([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust
* **[データテーブルフィールド：Markdown(Vditor)]** フォームの水平レイアウト時に、markdown フィールドのヒント情報が遮られる問題を修正 ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh
* **[Web クライアント]** 翻訳後のルートタイプを使用すると、データを絞り込めない問題を修正 ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe
* **[モバイル（非推奨）]** モバイル端末でメッセージポップアップを閉じられず、スクロールもできない問題を修正 ([#9424](https://github.com/nocobase/nocobase/pull/9424)) by @zhangzhonghe
* **[ワークフロー：承認]** 承認処理設定に JS field が表示される問題を修正 by @zhangzhongh

### [v2.1.0-alpha.31](https://www.nocobase.com/ja/blog/v2.1.0-alpha.30)

*リリース日：2026-05-09*

### 🎉 新機能

* **[client]** 関連ブロックに関連付け/関連付け解除操作を追加 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh
* **[テキストコピー]** 読み取り表示のテキストフィールドで「コピーを有効化」設定をサポート ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh
* **[AI 従業員]** ワークフローの AI 従業員ノードで、添付ファイルフィールドからファイルを読み込めるように ([#9402](https://github.com/nocobase/nocobase/pull/9402)) by @cgyrock
* **[データ可視化]** 新規ブロックプラグインで client-v2 をサポート ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe

### 🚀 機能改善

* **[client]** フィールド値の割り当てで自動採番フィールドを使用可能に ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher
* **[undefined]** pkg.nocobase.com のリリース処理で公開済みバージョ ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn
* **[ブロック：カンバン]** v2 詳細フィールドの間隔を揃え、カンバンカードと列間隔がテーマ設定により適切に対応するよう改善。 ([#9390](https://github.com/nocobase/nocobase/pull/9390)) by @jiannx
* **[ワークフロー：承認]** 承認フォームの必須バリデーションに関する操作性の問題を修正 by @zhangzhonghe

### 🐛 不具合修正

* **[client]**
  * フィルターフォームを折りたためない問題を修正 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe
  * v2 テーブルでワークフローを一括トリガーした後、別のタブへ移動して元のタブに戻ると選択状態が同期されず、再度レコードを選択できてしまう問題を修正 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx
  * フォームブロックで `非表示にして値を保持` に設定されたフィールドがページ編集モードで表示されない問題を修正し、フィールド値の割り当てでこれらのフィールドに値を入力できるように復元 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx
  * v2 DividerItem がテーマに対応していない問題を修正 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh
  * AttachmentURL フィールドでファイルメタデータが不足している場合に、ダウンロード時のファイル名が異常になる問題を修正。 ([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher
  * カスタムドロップダウン複数選択でスカラーフィールドをフィルタリングする際にエラーが発生する問題を修正 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe
  * ブロック内フォームの値が変更された際に、連動ルールが自動実行されない問題を修正。 ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust
  * v1 サブテーブルの連動ルールが、フィールドの必須スタイルを誤って変更する問題を修正 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe
  * グリッドカードブロックでデータ更新後に再読み込みしても、データが正しく表示されない問題を修正 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh
  * サブテーブル内の選択肢フィールドの必須入力が、モバイル端末で 2 回選択しないと反映されない問題を修正 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh
  * v2 サブテーブルで、関係フィールドのドロップダウン選択肢コンポーネントにクイック編集の設定項目が誤って表示される問題を修正 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh
  * キャッシュされたページを切り替えた後、URL クエリパラメータ変数が無効になる問題を修正 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe
* **[flow-engine]** v2 Flow フォームで、データテーブルフィールドのバリデーションメッセージが翻訳されない問題を修正 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx
* **[server]**
  * サブアプリの OAuth discovery リクエストが、誤ってメインアプリのリクエストとしてルーティングされる問題を修正 ([#9383](https://github.com/nocobase/nocobase/pull/9383)) by @2013xile
  * プラグインパッケージ名の検証を追加 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos
* **[client-v2]**
  * フィールド値設定で関係フィールドを選択するとエラーが発生する問題を修正。 ([#9379](https://github.com/nocobase/nocobase/pull/9379)) by @gchust
  * アプリ起動後に 404 ページが一瞬表示される問題を修正 ([#9365](https://github.com/nocobase/nocobase/pull/9365)) by @zhangzhonghe
  * v2 ページでブロックをドラッグする際、プレースホルダーのハイライトとドロップ位置が正しく表示されない問題を修正 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe
  * 一部の v2 ページでリモートプラグインの読み込みに失敗する問題を修正 ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe
* **[undefined]** 多言語ドキュメント内のリンク切れを修正し、ドキュメントビルド時のリンク切れ検出をデフォルトで有効化。 ([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn
* **[通知：サイト内メッセージ]** リアルタイムのサイト内メッセージを受信した後、通知リストがすぐに更新されない問題を修正 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher
* **[データソース管理]** ロール権限設定で、外部データソースのカスタム範囲によりすべてのデータを編集・削除できてしまう問題を修正 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh
* **[AI: MCP サーバー]** MCP サーバーのパッケージ化時に、ランタイム依存関係が含まれない問題を修正 ([#9401](https://github.com/nocobase/nocobase/pull/9401)) by @2013xile
* **[データソース：メインデータベース]** テーブルプレフィックス有効時にデータベーステーブルをインポートすると、プレフィックス付きのテーブル名が誤って使用される問題を修正 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile
* **[フロントエンドフローエンジン]** AI が構築したブロックを参照テンプレートに変換した後、コピー用テンプレートへ再変換できない問題を修正。 ([#9392](https://github.com/nocobase/nocobase/pull/9392)) by @gchust
* **[AI 従業員]**
  * ワークフローの AI 従業員ノードが関係フィールドの添付ファイルを読み取る際にエラーが発生する問題を修正 ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock
  * ワークフローの AI 従業員ノードで使用するツールを指定した後、ノード呼び出しが正常に終了しない問題を修正 ([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock
* **[操作：カスタムリクエスト]** koa を v3 にアップグレード ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos
* **[ブロック：カンバン]**
  * カンバンカードのコンパクト表示と、クイック作成ポップアップのテンプレート選択を改善。 ([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx
  * v1 カンバンブロックの長文フィールドで、単語の途中で改行される問題を修正 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh
* **[データテーブルフィールド：数式]** v2 サブテーブルで数式フィールドの値が自動計算されない問題を修正 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh
* **[操作：レコードインポート Pro]** 日付フィールドに対する重複チェックが常に失敗する問題を修正 by @mytharcher
* **[パスワードポリシー]** 永久ロックされたユーザーのログイン制限が、サービス再起動後に失効する可能性がある問題を修正 by @2013xile
* **[ワークフロー：承認]** 承認ワークフロー設定で、レコード選択ドロワーが遮られる問題を修正 by @zhangzhonghe
* **[メール管理]** メールボックスエイリアスのタイトル表示問題を修正 by @jiannx
* **[バックアップマネージャー]** pg データベース schema への対応問題を修正 by @Andrew1989Y
