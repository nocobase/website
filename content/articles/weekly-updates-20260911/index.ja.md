週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.10

*リリース日: 2026-09-10*

### 🚀 機能改善

* **[utils]** 新しい環境変数を追加し、サーバーから IP アドレスへの直接リクエストやリダイレクトを禁止できるように対応 ([#10490](https://github.com/nocobase/nocobase/pull/10490)) by @2013xile
* **[client-v2]** iOS 上での V2 フォームの QR コード読み取りの安定性を向上。 ([#10456](https://github.com/nocobase/nocobase/pull/10456)) by @katherinehhh

### 🐛 不具合修正

* **[client-v2]** ワークフローのデータ追加・更新ノードのフィールド値設定で、サーバー側が対応していない組み込み日付変数を非表示に変更。 ([#10442](https://github.com/nocobase/nocobase/pull/10442)) by @mytharcher
* **[server]** サブアプリケーションのデプロイ環境が利用できないにもかかわらず、「準備中」と誤って表示される問題を修正 ([#10485](https://github.com/nocobase/nocobase/pull/10485)) by @2013xile
* **[ワークフロー：遅延ノード]** 遅延ノードの遅延時間変数の検証を修正し、変数の解析結果が無効な場合は直ちにエラーを返すことで、意図しない待機を防止。 ([#10469](https://github.com/nocobase/nocobase/pull/10469)) by @mytharcher
* **[アプリケーション監督]** ローリングアップデートまたはデプロイ環境の切り替え後に、サブアプリケーションへアクセスできなくなる問題を修正 by @2013xile

### v2.2.9

*リリース日: 2026-09-09*

### 🐛 不具合修正

* **[client-v2]**
  * v2 のデータ更新アクションで、設定済みのフィールドが削除された後にフィールド設定を開けなくなる問題を修正。 ([#10483](https://github.com/nocobase/nocobase/pull/10483)) by @katherinehhh
  * V2 の既存フィールド値設定で、削除済みフィールドに統一された削除済みメッセージを表示。 ([#10484](https://github.com/nocobase/nocobase/pull/10484)) by @katherinehhh
  * モバイルのフィルターフォームで折りたたみ操作が機能しない問題を修正 ([#10479](https://github.com/nocobase/nocobase/pull/10479)) by @zhangzhonghe
  * v2 フォームで、対多リレーションの表示フィールドを読み取り専用のサブテーブルとして表示できるように対応。 ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh
  * V2 フォームで親側のリレーションにドロップダウン選択を使用した際、ネストされたリレーションフィールドが空で表示される問題を修正。 ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh
  * v2 のフィールド設定で、逆リレーションのタイプを変更できてしまう問題を修正。 ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh
  * フィルターフォームのカスタムラジオボタンとチェックボックスで、オプション値を続けて入力できない問題を修正 ([#10480](https://github.com/nocobase/nocobase/pull/10480)) by @zhangzhonghe
  * 設定ページへの遷移時にページ全体がリロードされる問題を修正 ([#10474](https://github.com/nocobase/nocobase/pull/10474)) by @zhangzhonghe
* **[cli]** 既存のローカルアップロードファイル URL を、デフォルトではログイン済みユーザーのみアクセス可能に変更し、公開アクセスを明示的に有効化できる互換設定を追加。 ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher
* **[データソース管理]** v2 のリレーションフィールド編集時に、逆方向フィールドの選択状態が保持されない問題を修正。 ([#10482](https://github.com/nocobase/nocobase/pull/10482)) by @katherinehhh
* **[フロントエンドフローエンジン]** 非管理者ユーザーで、フォーム連動ルール、参照テンプレート、スクリプト内の変数が正しく解析されない問題を修正。 ([#10467](https://github.com/nocobase/nocobase/pull/10467)) by @gchust
* **[権限制御]** ロール権限で下位階層のメニューを選択した際、すべての上位メニューが自動的に選択されない問題を修正 ([#10473](https://github.com/nocobase/nocobase/pull/10473)) by @zhangzhonghe
* **[ブロック：カンバン]** カンバンで新規作成したレコードが作成直後に表示されない問題を修正。 ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar
* **[ワークフロー：承認]** 承認ドラフトを編集して保存した後も、申請カードに古い内容が表示される問題を修正 by @zhangzhonghe

### v2.2.8

*リリース日: 2026-09-08*

### 🚀 機能改善

* **[企業 WeChat]** 企業 WeChat プラグインの型安全性を改善し、通知受信者の選択コンポーネントを統一。 by @chenzhizdt

### 🐛 不具合修正

* **[server]** 未デプロイの環境でアプリケーションが誤って起動される問題を修正 ([#10464](https://github.com/nocobase/nocobase/pull/10464)) by @2013xile
* **[通知：サイト内通知]** サイト内通知のタイトルと詳細リンクで、すべての種類のワークフロー変数を使用できるように改善。 ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher
* **[ファイルマネージャー]** ファイルリダイレクトで期限切れの署名付きストレージ URL が再利用されないように修正。 ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher
* **[データソース管理]** v2 の権限のデータ範囲で、「現在のユーザー」と「現在のロール」を変数として選択できるように追加 ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx
* **[ワークフロー：JavaScript ノード]** JavaScript ワークフローノードがタイムアウトした際、ワークフローを誤って中断し、「例外発生時も実行を続行する」設定が反映されない場合がある問題を修正。 ([#10461](https://github.com/nocobase/nocobase/pull/10461)) by @mytharcher
* **[AI 従業員]** AI 従業員のナレッジベースプロンプトに検索内容のプレースホルダーがない場合、ナレッジベースを繰り返し検索する可能性がある問題を修正し、設定保存時に分かりやすいバリデーション案内を表示。 ([#10413](https://github.com/nocobase/nocobase/pull/10413)) by @cgyrock
* **[AI：ナレッジベース]** AI ナレッジベースの PGVector 接続テスト、ZIP インポート結果の表示、ドキュメント分割設定の継承、Chunk overlap パラメータの検証に関する問題を修正。 by @cgyrock
* **[アプリケーション監督]** アプリケーション管理 API のレスポンスからサブアプリケーションの認証キーが漏洩する問題を修正 by @2013xile
* **[DingTalk]** DingTalk 通知の受信者選択コンポーネントを統一。 by @chenzhizdt

### v2.2.7

*リリース日: 2026-09-05*

### 🎉 新機能

* **[AI：ナレッジベース]** 認証が必要なナレッジベース検索 API と、リモートの NocoBase ナレッジベースに接続するための組み込み Provider を追加。 by @cgyrock

### 🚀 機能改善

* **[undefined]** ルートパッケージのライセンスメタデータを Apache-2.0 に修正し、Node.js の最低バージョンを 22 に引き上げ ([#10448](https://github.com/nocobase/nocobase/pull/10448)) by @hongboji
* **[通知：サイト内通知]** ワークフロー v2 の通知ノードでサイト内通知またはメールチャネルを選択した後、フロントエンドの動作が遅くなる問題を修正 ([#10445](https://github.com/nocobase/nocobase/pull/10445)) by @jiannx
* **[DingTalk]** DingTalk の ActionCard ボタンリンクを外部ブラウザで開くよう設定できるように改善。 by @chenzhizdt

### 🐛 不具合修正

* **[データテーブル：SQL]** SQL データテーブルから PostgreSQL のシステムオブジェクトをクエリしたり、複数の SQL ステートメントを実行したりできないよう制限 ([#10455](https://github.com/nocobase/nocobase/pull/10455)) by @2013xile
* **[ブロック：コメント]** コメントブロックで「最終更新者」フィールドを使用した際、コメント投稿者のニックネームが正しく表示されない問題を修正 ([#10446](https://github.com/nocobase/nocobase/pull/10446)) by @jiannx
* **[AI 従業員]**
  * AI の応答が中断された後、ツール呼び出しに対応する結果が不足し、Bedrock リクエストでエラーが発生する問題を修正。 ([#10447](https://github.com/nocobase/nocobase/pull/10447)) by @cgyrock
  * グラフを含むビジネス分析レポートを開けない問題を修正。 ([#10440](https://github.com/nocobase/nocobase/pull/10440)) by @cgyrock
* **[データテーブルフィールド：Markdown(Vditor)]** Vditor の詳細フィールドでプレーンテキストプレビューがデフォルトになっていたため Markdown 画像を表示できない問題を修正し、デフォルトを HTML プレビューに変更。 ([#10459](https://github.com/nocobase/nocobase/pull/10459)) by @mytharcher
* **[データソース管理]** v2 データテーブルエディターにレコードの一意識別子の設定がない問題を修正。 ([#10453](https://github.com/nocobase/nocobase/pull/10453)) by @katherinehhh
* **[ワークフロー]** ユーザー関連のデータテーブルで主キーをユーザーの外部キーとして使用した場合、ワークフローでユーザーを正しく選択できない問題を修正 ([#10354](https://github.com/nocobase/nocobase/pull/10354)) by @mytharcher
* **[ファイルマネージャー]** AI 従業員のワークフローノードから NocoBase の永続的なファイル URL にアクセスできない問題と、内部ファイルが不必要に AI ストレージへコピーされる問題を修正。 ([#10408](https://github.com/nocobase/nocobase/pull/10408)) by @cgyrock
* **[AI：ナレッジベース]** ナレッジベースへのアップロードで、バックエンドが対応しているすべてのドキュメント形式を選択できるように改善 by @cgyrock
* **[テンプレート印刷]** テンプレート印刷で、安定したファイル URL を使用した動的画像が正しくレンダリングされない問題を修正。 by @hongboji

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.9

*リリース日: 2026-09-10*

### 🚀 機能改善

* **[utils]** 新しい環境変数を追加し、サーバーから IP アドレスへの直接リクエストやリダイレクトを禁止できるように対応 ([#10490](https://github.com/nocobase/nocobase/pull/10490)) by @2013xile
* **[client-v2]** iOS 上での V2 フォームの QR コード読み取りの安定性を向上。 ([#10456](https://github.com/nocobase/nocobase/pull/10456)) by @katherinehhh
* **[企業 WeChat]** 企業 WeChat プラグインの型安全性を改善し、通知受信者の選択コンポーネントを統一。 by @chenzhizdt

### 🐛 不具合修正

* **[client-v2]**
  * ワークフローのデータ追加・更新ノードのフィールド値設定で、サーバー側が対応していない組み込み日付変数を非表示に変更。 ([#10442](https://github.com/nocobase/nocobase/pull/10442)) by @mytharcher
  * 設定ページへの遷移時にページ全体がリロードされる問題を修正 ([#10474](https://github.com/nocobase/nocobase/pull/10474)) by @zhangzhonghe
  * v2 のデータ更新アクションで、設定済みのフィールドが削除された後にフィールド設定を開けなくなる問題を修正。 ([#10483](https://github.com/nocobase/nocobase/pull/10483)) by @katherinehhh
  * V2 の既存のフィールド値設定で、削除済みフィールドに統一された削除済みメッセージを表示。 ([#10484](https://github.com/nocobase/nocobase/pull/10484)) by @katherinehhh
  * フィルターフォームのカスタムラジオボタンとチェックボックスで、オプション値を続けて入力できない問題を修正 ([#10480](https://github.com/nocobase/nocobase/pull/10480)) by @zhangzhonghe
  * v2 フォームで、対多リレーションの表示フィールドを読み取り専用のサブテーブルとして表示できるように対応。 ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh
  * V2 フォームで親側のリレーションにドロップダウン選択を使用した際、ネストされたリレーションフィールドが空で表示される問題を修正。 ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh
  * v2 のフィールド設定で、逆リレーションのタイプを変更できてしまう問題を修正。 ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh
  * モバイルのフィルターフォームで折りたたみ操作が機能しない問題を修正 ([#10479](https://github.com/nocobase/nocobase/pull/10479)) by @zhangzhonghe
* **[server]** サブアプリケーションのデプロイ環境が利用できないにもかかわらず、「準備中」と誤って表示される問題を修正 ([#10485](https://github.com/nocobase/nocobase/pull/10485)) by @2013xile
* **[cli]** 既存のローカルアップロードファイル URL を、デフォルトではログイン済みユーザーのみアクセス可能に変更し、公開アクセスを明示的に有効化できる互換設定を追加。 ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher
* **[ワークフロー：遅延ノード]** 遅延ノードの遅延時間変数の検証を修正し、変数の解析結果が無効な場合は直ちにエラーを返すことで、意図しない待機を防止。 ([#10469](https://github.com/nocobase/nocobase/pull/10469)) by @mytharcher
* **[データソース管理]**
  * v2 のリレーションフィールド編集時に、逆方向フィールドの選択状態が保持されない問題を修正。 ([#10482](https://github.com/nocobase/nocobase/pull/10482)) by @katherinehhh
  * v2 の権限のデータ範囲で、「現在のユーザー」と「現在のロール」を変数として選択できるように追加 ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx
* **[通知：サイト内通知]** サイト内通知のタイトルと詳細リンクで、すべての種類のワークフロー変数を使用できるように改善。 ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher
* **[権限制御]** ロール権限で下位階層のメニューを選択した際、すべての上位メニューが自動的に選択されない問題を修正 ([#10473](https://github.com/nocobase/nocobase/pull/10473)) by @zhangzhonghe
* **[ブロック：カンバン]** カンバンで新規作成したレコードが作成直後に表示されない問題を修正。 ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar
* **[ファイルマネージャー]** ファイルリダイレクトで期限切れの署名付きストレージ URL が再利用されないように修正。 ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher
* **[フロントエンドフローエンジン]** 非管理者ユーザーで、フォーム連動ルール、参照テンプレート、スクリプト内の変数が正しく解析されない問題を修正。 ([#10467](https://github.com/nocobase/nocobase/pull/10467)) by @gchust
* **[ワークフロー：承認]** 承認ドラフトを編集して保存した後も、申請カードに古い内容が表示される問題を修正 by @zhangzhonghe
* **[アプリケーション監督]** ローリングアップデートまたはデプロイ環境の切り替え後に、サブアプリケーションへアクセスできなくなる問題を修正 by @2013xile

### v2.3.0-beta.8

*リリース日: 2026-09-07*

### 🎉 新機能

* **[AI：ナレッジベース]** 認証が必要なナレッジベース検索 API と、リモートの NocoBase ナレッジベースに接続するための組み込み Provider を追加。 by @cgyrock

### 🚀 機能改善

* **[通知：サイト内通知]** ワークフロー v2 の通知ノードでサイト内通知またはメールチャネルを選択した後、フロントエンドの動作が遅くなる問題を修正 ([#10445](https://github.com/nocobase/nocobase/pull/10445)) by @jiannx

### 🐛 不具合修正

* **[server]** 未デプロイの環境でアプリケーションが誤って起動される問題を修正 ([#10464](https://github.com/nocobase/nocobase/pull/10464)) by @2013xile
* **[AI 従業員]**
  * AI 従業員のナレッジベースプロンプトに検索内容のプレースホルダーがない場合、ナレッジベースを繰り返し検索する可能性がある問題を修正し、設定保存時に分かりやすいバリデーション案内を表示。 ([#10413](https://github.com/nocobase/nocobase/pull/10413)) by @cgyrock
  * AI の応答が中断された後、ツール呼び出しに対応する結果がないため Bedrock リクエストでエラーが発生する問題を修正。 ([#10447](https://github.com/nocobase/nocobase/pull/10447)) by @cgyrock
* **[データテーブルフィールド：Markdown(Vditor)]** Vditor の詳細フィールドでプレーンテキストプレビューがデフォルトになっていたため Markdown 画像を表示できない問題を修正し、デフォルトを HTML プレビューに変更。 ([#10459](https://github.com/nocobase/nocobase/pull/10459)) by @mytharcher
* **[データテーブル：SQL]** SQL データテーブルから PostgreSQL のシステムオブジェクトをクエリしたり、複数の SQL ステートメントを実行したりできないよう制限 ([#10455](https://github.com/nocobase/nocobase/pull/10455)) by @2013xile
* **[ブロック：コメント]** コメントブロックで「最終更新者」フィールドを使用した際、コメント投稿者のニックネームが正しく表示されない問題を修正 ([#10446](https://github.com/nocobase/nocobase/pull/10446)) by @jiannx
* **[ワークフロー]** ユーザー関連のデータテーブルで主キーをユーザーの外部キーとして使用した場合、ワークフローでユーザーを正しく選択できない問題を修正 ([#10354](https://github.com/nocobase/nocobase/pull/10354)) by @mytharcher
* **[データソース管理]** v2 データテーブルエディターにレコードの一意識別子の設定がない問題を修正。 ([#10453](https://github.com/nocobase/nocobase/pull/10453)) by @katherinehhh
* **[ワークフロー：JavaScript ノード]** JavaScript ワークフローノードがタイムアウトした際、ワークフローを誤って中断し、「例外発生時も実行を続行する」設定が反映されない場合がある問題を修正。 ([#10461](https://github.com/nocobase/nocobase/pull/10461)) by @mytharcher
* **[AI：ナレッジベース]**
  * ナレッジベースへのアップロードで、バックエンドが対応しているすべてのドキュメント形式を選択できるように改善 by @cgyrock
  * AI ナレッジベースの PGVector 接続テスト、ZIP インポート結果の表示、ドキュメント分割設定の継承、Chunk overlap パラメータの検証に関する問題を修正。 by @cgyrock
* **[テンプレート印刷]** テンプレート印刷で、安定したファイル URL を使用した動的画像が正しくレンダリングされない問題を修正。 by @hongboji
* **[アプリケーション監督]** アプリケーション管理 API のレスポンスからサブアプリケーションの認証キーが漏洩する問題を修正 by @2013xile
* **[DingTalk]** DingTalk 通知の受信者選択コンポーネントを統一。 by @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.5

*リリース日: 2026-09-09*

### 🚀 機能改善

* **[企業 WeChat]** 企業 WeChat プラグインの型安全性を改善し、通知受信者の選択コンポーネントを統一。 by @chenzhizdt

### 🐛 不具合修正

* **[client-v2]**
  * v2 フォームで、対多リレーションの表示フィールドを読み取り専用のサブテーブルとして表示できるように対応。 ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh
  * v2 のフィールド設定で、逆リレーションのタイプを変更できてしまう問題を修正。 ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh
  * V2 フォームで親側のリレーションにドロップダウン選択を使用した際、ネストされたリレーションフィールドが空で表示される問題を修正。 ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh
* **[cli]** 既存のローカルアップロードファイル URL を、デフォルトではログイン済みユーザーのみアクセス可能に変更し、公開アクセスを明示的に有効化できる互換設定を追加。 ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher
* **[ワークフロー：JavaScript ノード]** JavaScript ワークフローノードがタイムアウトした際、ワークフローを誤って中断し、「例外発生時も実行を続行する」設定が反映されない場合がある問題を修正。 ([#10461](https://github.com/nocobase/nocobase/pull/10461)) by @mytharcher
* **[ファイルマネージャー]** ファイルリダイレクトで期限切れの署名付きストレージ URL が再利用されないように修正。 ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher
* **[通知：サイト内通知]** サイト内通知のタイトルと詳細リンクで、すべての種類のワークフロー変数を使用できるように改善。 ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher
* **[データソース管理]** v2 の権限のデータ範囲で、「現在のユーザー」と「現在のロール」を変数として選択できるように追加 ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx
* **[ブロック：カンバン]** カンバンで新規作成したレコードが作成直後に表示されない問題を修正。 ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar
* **[DingTalk]** DingTalk 通知の受信者選択コンポーネントを統一。 by @chenzhizdt

### v2.4.0-alpha.4

*リリース日: 2026-09-06*

### 🎉 新機能

* **[AI：ナレッジベース]** 認証が必要なナレッジベース検索 API と、リモートの NocoBase ナレッジベースに接続するための組み込み Provider を追加。 by @cgyrock

### 🚀 機能改善

* **[通知：サイト内通知]** ワークフロー v2 の通知ノードでサイト内通知またはメールチャネルを選択した後、フロントエンドの動作が遅くなる問題を修正 ([#10445](https://github.com/nocobase/nocobase/pull/10445)) by @jiannx

### 🐛 不具合修正

* **[server]** 未デプロイの環境でアプリケーションが誤って起動される問題を修正 ([#10464](https://github.com/nocobase/nocobase/pull/10464)) by @2013xile
* **[データテーブルフィールド：Markdown(Vditor)]** Vditor の詳細フィールドでプレーンテキストプレビューがデフォルトになっていたため Markdown 画像を表示できない問題を修正し、デフォルトを HTML プレビューに変更。 ([#10459](https://github.com/nocobase/nocobase/pull/10459)) by @mytharcher
* **[AI 従業員]**
  * AI 従業員のナレッジベースプロンプトに検索内容のプレースホルダーがない場合、ナレッジベースを繰り返し検索する可能性がある問題を修正し、設定保存時に分かりやすい検証メッセージを表示。 ([#10413](https://github.com/nocobase/nocobase/pull/10413)) by @cgyrock
  * AI の応答が中断された後、ツール呼び出しに対応する結果が不足し、Bedrock リクエストでエラーが発生する問題を修正。 ([#10447](https://github.com/nocobase/nocobase/pull/10447)) by @cgyrock
* **[ブロック：コメント]** コメントブロックで「最終更新者」フィールドを使用した際、コメント投稿者のニックネームが正しく表示されない問題を修正 ([#10446](https://github.com/nocobase/nocobase/pull/10446)) by @jiannx
* **[データソース管理]** v2 データテーブルエディターにレコードの一意識別子の設定がない問題を修正。 ([#10453](https://github.com/nocobase/nocobase/pull/10453)) by @katherinehhh
* **[ワークフロー]** ユーザー関連のデータテーブルで主キーをユーザーの外部キーとして使用した場合、ワークフローでユーザーを正しく選択できない問題を修正 ([#10354](https://github.com/nocobase/nocobase/pull/10354)) by @mytharcher
* **[データテーブル：SQL]** SQL データテーブルから PostgreSQL のシステムオブジェクトをクエリしたり、複数の SQL ステートメントを実行したりできないよう制限 ([#10455](https://github.com/nocobase/nocobase/pull/10455)) by @2013xile
* **[AI：ナレッジベース]**
  * AI ナレッジベースの PGVector 接続テスト、ZIP インポート結果の表示、ドキュメント分割設定の継承、Chunk overlap パラメータの検証に関する問題を修正。 by @cgyrock
  * ナレッジベースへのアップロードで、バックエンドが対応しているすべてのドキュメント形式を選択できるように改善 by @cgyrock
* **[テンプレート印刷]** テンプレート印刷で、安定したファイル URL を使用した動的画像が正しくレンダリングされない問題を修正。 by @hongboji
* **[アプリケーション監督]** アプリケーション管理 API のレスポンスからサブアプリケーションの認証キーが漏洩する問題を修正 by @2013xile
