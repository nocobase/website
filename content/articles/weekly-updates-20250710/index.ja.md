週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**今週、[NocoBase 1.8.0](https://www.nocobase.com/ja/blog/nocobase-1-8-0) をリリースいたしました。本バージョンでは、認証プロセスの改良、カスタム統計変数のサポート、メール管理のアップグレードに加え、ワークフロー体験とモバイル操作の最適化を実施しています。**

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.1](https://www.nocobase.com/ja/blog/v1.8.1)

*リリース日：2025-07-09*

#### 🐛 不具合修正

* **[クライアント]**
  * フォーム内の関連フィールドコレクションにおけるチェックボックスフィールドの表示が不正確な問題（[#7176](https://github.com/nocobase/nocobase/pull/7176)）@zhangzhonghe
  * ボタンをクリックしてもポップアップが開かない問題を修正（[#7180](https://github.com/nocobase/nocobase/pull/7180)）@zhangzhonghe
* **[ワークフロー：手動ノード]** 変数を使用した際に発生するエラーを修正（[#7177](https://github.com/nocobase/nocobase/pull/7177)）@mytharcher
* **[テンプレート印刷]** rootDataType フィールドにマイグレーションスクリプトを追加 @jiannx
* **[ワークフロー：承認]** 担当者が設定されていない場合に承認済みブランチが実行されない問題を修正 @mytharcher

### [v1.7.20](https://www.nocobase.com/ja/blog/v1.7.20)

*リリース日：2025-07-07*

#### 🐛 不具合修正

* **[クライアント]**
  * フィールド変更後、当該フィールドに依存するデータ範囲は選択値を自動的にクリアする必要がある問題（[#7161](https://github.com/nocobase/nocobase/pull/7161)）@zhangzhonghe
  * テーブル列幅の設定が無効になる問題を修正（[#7158](https://github.com/nocobase/nocobase/pull/7158)）@zhangzhonghe
  * 複製ボタンのポップアップ内にあるフィルターフォームのエラー問題を修正（[#7154](https://github.com/nocobase/nocobase/pull/7154)）@zhangzhonghe
  * 設定フィールドにおける一対一関係の保存時に発生するエラーを修正（[#7153](https://github.com/nocobase/nocobase/pull/7153)）@aaaaaajie
* **[undefined]** e2e.yml を修正（[#7160](https://github.com/nocobase/nocobase/pull/7160)）@mytharcher
* **[ファイルマネージャー]**
  * mimetype 検出を修正（[#7164](https://github.com/nocobase/nocobase/pull/7164)）@mytharcher
  * ESM パッケージによるビルドエラーを修正（[#7169](https://github.com/nocobase/nocobase/pull/7169)）@mytharcher
* **[公開フォーム]** 公開フォームにおいて Date Only フィールドで日付選択に失敗する問題を修正（[#7168](https://github.com/nocobase/nocobase/pull/7168)）@katherinehhh
* **[ワークフロー]** モバイルデバイスで前のページに戻るために複数回左スワイプが必要になる問題を修正（[#7165](https://github.com/nocobase/nocobase/pull/7165)）@zhangzhonghe
* **[データ可視化]** テーブルページネーションの問題（[#7151](https://github.com/nocobase/nocobase/pull/7151)）@2013xile
* **[ワークフロー：承認]**
  * 取り下げ後に関連データが読み込まれない問題を修正 @mytharcher
  * タイムアウトに起因してスキーマ修正のトランザクションを削除 @mytharcher
  * 承認が削除された際に発生するエラーを修正 @mytharcher
  * 送信時の関連データ更新を修正 @mytharcher

### [v1.7.19](https://www.nocobase.com/ja/blog/v1.7.19)

*リリース日：2025-07-03*

#### 🚀 機能改善

* **[データベース]** 環境変数からプールオプションを追加できるようにサポート（[#7133](https://github.com/nocobase/nocobase/pull/7133)）@mytharcher
* **[ワークフロー]**
  * JSON フィールドを除くことで実行履歴一覧のロードパフォーマンスを改善（[#7138](https://github.com/nocobase/nocobase/pull/7138)）@mytharcher
  * ノードテスト用のログ API を追加（[#7129](https://github.com/nocobase/nocobase/pull/7129)）@mytharcher
* **[マルチアプリマネージャー]** マルチアプリ管理にフィルター機能を追加（[#7124](https://github.com/nocobase/nocobase/pull/7124)）@katherinehhh
* **[ワークフロー：承認]** タイムラインの時間表示を絶対時間に変更 @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * 接続ビュー内のフィールド displayName 設定が機能しない問題（[#7130](https://github.com/nocobase/nocobase/pull/7130)）@aaaaaajie
  * 詳細ブロック内のサブテーブルの背景色スタイル不具合（[#7144](https://github.com/nocobase/nocobase/pull/7144)）@katherinehhh
  * ワークフロー手動ノードの UI 設定：連動規則で「現在のフォーム変数」が選択できない問題（[#7125](https://github.com/nocobase/nocobase/pull/7125)）@zhangzhonghe
  * 関連フィールドの初期値がサブテーブルの既存データを上書きする問題（[#7120](https://github.com/nocobase/nocobase/pull/7120)）@katherinehhh
  * \$nForm 変数を参照した Markdown の変更がリアルタイムに反映されない問題（[#7147](https://github.com/nocobase/nocobase/pull/7147)）@katherinehhh
  * 'x-acl-action' に基づく設定のフォールトトレランス（[#7128](https://github.com/nocobase/nocobase/pull/7128)）@mytharcher
* **[ユーティリティ]** DateOnly やタイムゾーンなしの Datetime に対し、Exact day 変数を使用したフィルタリング不具合（[#7113](https://github.com/nocobase/nocobase/pull/7113)）@katherinehhh
* **[ワークフロー]** 循環インポートによるエラーを修正（[#7134](https://github.com/nocobase/nocobase/pull/7134)）@mytharcher
* **[パスワードポリシー]** ユーザーアカウントの永続ロックをサポート @2013xile
* **[ワークフロー：サブフロー]** クラスターモード時の不具合を修正 @mytharcher
* **[ワークフロー：承認]**
  * フィルターからフィルタ不能なフィールドを削除 @mytharcher
  * フォームレイアウト設定を追加 @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.1](https://www.nocobase.com/ja/blog/v1.9.0-beta.1)

*リリース日：2025-07-07*

#### 🎉 新機能

* **[サーバー]** イベントキューを追加し、キュー内のメッセージを処理する機能を実装（[#6819](https://github.com/nocobase/nocobase/pull/6819)）@mytharcher

#### 🚀 機能改善

* **[ワークフロー]** 共通コンポーネントをベースプラグインに移動（[#7140](https://github.com/nocobase/nocobase/pull/7140)）@mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * フィールド変更後、当該フィールドに依存するデータ範囲は選択値を自動的にクリアする必要がある問題（[#7161](https://github.com/nocobase/nocobase/pull/7161)）@zhangzhonghe
  * テーブル列幅の設定が無効になる問題を修正（[#7158](https://github.com/nocobase/nocobase/pull/7158)）@zhangzhonghe
  * 複製ボタンのポップアップ内にあるフィルターフォームのエラー問題を修正（[#7154](https://github.com/nocobase/nocobase/pull/7154)）@zhangzhonghe
  * 設定フィールドにおける一対一関係の保存時に発生するエラーを修正（[#7153](https://github.com/nocobase/nocobase/pull/7153)）@aaaaaajie
* **[undefined]** e2e.yml を修正（[#7160](https://github.com/nocobase/nocobase/pull/7160)）@mytharcher
* **[カレンダー]** カレンダーブロックのデフォルト週開始日を「月曜日」に設定（[#7171](https://github.com/nocobase/nocobase/pull/7171)）@katherinehhh
* **[ワークフロー]** モバイルデバイスで前のページに戻るために複数回左スワイプが必要になる問題を修正（[#7165](https://github.com/nocobase/nocobase/pull/7165)）@zhangzhonghe
* **[ファイルマネージャー]**
  * ESM パッケージによるビルドエラーを修正（[#7169](https://github.com/nocobase/nocobase/pull/7169)）@mytharcher
  * mimetype 検出を修正（[#7164](https://github.com/nocobase/nocobase/pull/7164)）@mytharcher
* **[ワークフロー：手動ノード]** 変数の誤ったインポートを修正（[#7156](https://github.com/nocobase/nocobase/pull/7156)）@mytharcher
* **[公開フォーム]** 公開フォームにおいて Date Only フィールドで日付選択に失敗する問題を修正（[#7168](https://github.com/nocobase/nocobase/pull/7168)）@katherinehhh
* **[ワークフロー：承認]**
  * タイムアウトに起因してスキーマ修正のトランザクションを削除 @mytharcher
  * 取り下げ後に関連データが読み込まれない問題を修正 @mytharcher
  * 承認が削除された際に発生するエラーを修正 @mytharcher
  * 送信時の関連データ更新を修正 @mytharcher

### [v1.8.0-beta.13](https://www.nocobase.com/ja/blog/v1.8.0-beta.13)

*リリース日：2025-07-03*

#### 🎉 新機能

* **[クライアント]**
  * 外部データソースの SQL Server における BIT フィールドをサポート（[#7058](https://github.com/nocobase/nocobase/pull/7058)）@aaaaaajie
  * カスタム集計変数をサポート（[#6916](https://github.com/nocobase/nocobase/pull/6916)）@zhangzhonghe
    参照：[カスタム変数](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
* **[build]** 商用認証をサポート（[#6554](https://github.com/nocobase/nocobase/pull/6554)）@jiannx
* **[データソースマネージャー]** ✨ 外部データソースからのコレクションの必要時読み込みをサポート（[#6979](https://github.com/nocobase/nocobase/pull/6979)）@aaaaaajie
* **[ライセンス設定]** ライセンス設定を追加し、プラグインダウンロード前にライセンス検証を行う（[#7026](https://github.com/nocobase/nocobase/pull/7026)）@jiannx
* **[認証]** 「パスワードを忘れた」機能をサポート（[#6616](https://github.com/nocobase/nocobase/pull/6616)）@zhangzhonghe
  参照：[パスワードを忘れた](https://docs.nocobase.com/handbook/auth/user#forgot-password)
* **[アクション：一括更新]** ブロック内のデータ更新後に他のデータブロックのデータを更新する機能をサポート（[#6591](https://github.com/nocobase/nocobase/pull/6591)）@zhangzhonghe
* **[データソース：外部 SQL Server]**
  * 外部データソースの SQL Server BIT フィールドをサポート @aaaaaajie
  * 外部データソースからのコレクションの必要時読み込みをサポート @aaaaaajie
* **[カスタム変数]** カスタム集計変数をサポート @zhangzhonghe
  参照：[カスタム変数](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
* **[メールマネージャー]**
  * メール削除をサポート @jiannx
  * メール同期間隔設定をサポート @jiannx
  * 一括送信をサポート @jiannx

#### 🚀 機能改善

* **[クライアント]**
  * QR コードスキャンによる入力フィールドの入力をサポート（[#6943](https://github.com/nocobase/nocobase/pull/6943)）@katherinehhh
  * デバイスタイプに基づいてモバイルコンポーネントの表示を判断（ページ幅ではなく）（[#6611](https://github.com/nocobase/nocobase/pull/6611)）@zhangzhonghe
  * Markdown ブロックコンテンツのローカリゼーションをサポート（[#6941](https://github.com/nocobase/nocobase/pull/6941)）@katherinehhh
  * デバイスタイプに基づいてモバイルレイアウトの表示を判断（ページ幅ではなく）（[#6600](https://github.com/nocobase/nocobase/pull/6600)）@zhangzhonghe
* **[非同期タスクマネージャー]** エクスポート時のタスク作成パフォーマンスを改善（[#7078](https://github.com/nocobase/nocobase/pull/7078)）@aaaaaajie
* **[モバイル]** モバイルデバイス用の通知ポップアップのスタイルを適応（[#6557](https://github.com/nocobase/nocobase/pull/6557)）@zhangzhonghe
* **[メールマネージャー]**
  * 同じ件名内でのメール個別返信と転送をサポート @jiannx
  * スキーマ実装によるメール送信と AI サポート @jiannx
  * ポップアップ内のデフォルト送信値をサポート、受信者のファジー検索をサポート、問題を修正 @jiannx
  * 一括送信機能を完了 @jiannx
  * 機能改善と問題修正 @jiannx

#### 🐛 不具合修正

* **[cli]**
  * プラグインインストール時のライセンスコピー処理を調整（[#7135](https://github.com/nocobase/nocobase/pull/7135)）@jiannx
  * プラグインダウンロード時の未定義エラー（[#7143](https://github.com/nocobase/nocobase/pull/7143)）@jiannx
* **[クライアント]**
  * バッジ値をクリア後、UI が更新されない問題（[#7055](https://github.com/nocobase/nocobase/pull/7055)）@zhangzhonghe
  * フィルターボタンをクリック時のエラー（[#7100](https://github.com/nocobase/nocobase/pull/7100)）@zhangzhonghe
  * 現在のユーザーデータが空になる問題を修正（[#7016](https://github.com/nocobase/nocobase/pull/7016)）@zhangzhonghe
  * ポップアップリンクを通じて開いたページで内容が誤って表示される問題（[#6990](https://github.com/nocobase/nocobase/pull/6990)）@zhangzhonghe
  * その他の props を Variable.Input コンポーネントに渡す（[#6670](https://github.com/nocobase/nocobase/pull/6670)）@sheldon66
  * 関連フィールドを含む場合、テンプレートとして保存するアクションが失敗する問題（[#6543](https://github.com/nocobase/nocobase/pull/6543)）@gchust
* **[データベース]** 文字列フィールドの eq 演算子を数値型と互換性あるように修正（[#7062](https://github.com/nocobase/nocobase/pull/7062)）@chenos
* **[build]** plugin-workflow-javascript におけるクライアント実行時エラー、未定義エラーの処理を修正（[#6859](https://github.com/nocobase/nocobase/pull/6859)）@jiannx
* **[データ可視化]** テーブルページネーションの問題（[#7151](https://github.com/nocobase/nocobase/pull/7151)）@2013xile
* **[データソースマネージャー]** 必要時データソース読み込みとテーブルプレフィックス設定の組み合わせにより「ConnectionManager.getConnection was called after the connection manager was closed」エラーが発生する問題を修正（[#7150](https://github.com/nocobase/nocobase/pull/7150)）@aaaaaajie
* **[plugin-service-platform]** ライセンステキストを調整 @jiannx
* **[カスタム変数]** バッジ値をクリア後、UI が更新されない問題 @zhangzhonghe
* **[メールマネージャー]**
  * 添付ファイルが表示されない問題 @jiannx
  * メール削除時のエラー @jiannx
  * メール削除失敗 @jiannx
  * 設定ポップアップが表示されない問題 @jiannx
  * 返信ドロワーが表示されない問題 @jiannx
  * 受信者ファジー検索が関連フィールドをサポート @jiannx
  * mailmessagelabelsMailmessages に「id」フィールドを追加 @jiannx
  * メールファジー検索にユニークフィルターを追加 @jiannx
  * テーブル「mailmessagelabels\_mailmessages」の複数主キー設定 @jiannx

### [v1.8.0-beta.12](https://www.nocobase.com/ja/blog/v1.8.0-beta.12)

*リリース日：2025-07-03*

#### 🚀 機能改善

* **[データベース]** 環境変数からプールオプションを追加できるようにサポート（[#7133](https://github.com/nocobase/nocobase/pull/7133)）@mytharcher
* **[ワークフロー]**
  * JSON フィールドを除くことで実行履歴一覧のロードパフォーマンスを改善（[#7138](https://github.com/nocobase/nocobase/pull/7138)）@mytharcher
  * ノードテスト用のログ API を追加（[#7129](https://github.com/nocobase/nocobase/pull/7129)）@mytharcher
* **[マルチアプリマネージャー]** マルチアプリ管理にフィルター機能を追加（[#7124](https://github.com/nocobase/nocobase/pull/7124)）@katherinehhh
* **[ワークフロー：承認]** タイムラインの時間表示を絶対時間に変更 @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * \$nForm 変数を参照した Markdown の変更がリアルタイムに反映されない問題（[#7147](https://github.com/nocobase/nocobase/pull/7147)）@katherinehhh
  * 詳細ブロック内のサブテーブルの背景色スタイル不具合（[#7144](https://github.com/nocobase/nocobase/pull/7144)）@katherinehhh
  * ワークフロー手動ノードの UI 設定：連動規則で「現在のフォーム変数」が選択できない問題（[#7125](https://github.com/nocobase/nocobase/pull/7125)）@zhangzhonghe
  * 接続ビュー内のフィールド displayName 設定が機能しない問題（[#7130](https://github.com/nocobase/nocobase/pull/7130)）@aaaaaajie
  * 関連フィールドの初期値がサブテーブルの既存データを上書きする問題（[#7120](https://github.com/nocobase/nocobase/pull/7120)）@katherinehhh
  * 'x-acl-action' に基づく設定のフォールトトレランス（[#7128](https://github.com/nocobase/nocobase/pull/7128)）@mytharcher
* **[ユーティリティ]** DateOnly やタイムゾーンなしの Datetime に対し、Exact day 変数を使用したフィルタリング不具合（[#7113](https://github.com/nocobase/nocobase/pull/7113)）@katherinehhh
* **[ワークフロー]** 循環インポートによるエラーを修正（[#7134](https://github.com/nocobase/nocobase/pull/7134)）@mytharcher
* **[パスワードポリシー]** ユーザーアカウントの永続ロックをサポート @2013xile
* **[ワークフロー：サブフロー]** クラスターモード時の不具合を修正 @mytharcher
* **[ワークフロー：承認]**
  * フィルターからフィルタ不能なフィールドを削除 @mytharcher
  * フォームレイアウト設定を追加 @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.1](https://www.nocobase.com/ja/blog/v1.9.0-alpha.1)

*リリース日：2025-07-07*

#### 🎉 新機能

* **[サーバー]** イベントキューを追加し、キュー内のメッセージを処理する機能を実装（[#6819](https://github.com/nocobase/nocobase/pull/6819)）@mytharcher

#### 🚀 機能改善

* **[ワークフロー]** 共通コンポーネントをベースプラグインに移動（[#7140](https://github.com/nocobase/nocobase/pull/7140)）@mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * フィールド変更後、当該フィールドに依存するデータ範囲は選択値を自動的にクリアする必要がある問題（[#7161](https://github.com/nocobase/nocobase/pull/7161)）@zhangzhonghe
  * テーブル列幅の設定が無効になる問題を修正（[#7158](https://github.com/nocobase/nocobase/pull/7158)）@zhangzhonghe
  * 設定フィールドにおける一対一関係の保存時に発生するエラーを修正（[#7153](https://github.com/nocobase/nocobase/pull/7153)）@aaaaaajie
  * 複製ボタンのポップアップ内にあるフィルターフォームのエラー問題を修正（[#7154](https://github.com/nocobase/nocobase/pull/7154)）@zhangzhonghe
* **[undefined]** e2e.yml を修正（[#7160](https://github.com/nocobase/nocobase/pull/7160)）@mytharcher
* **[ファイルマネージャー]**
  * ESM パッケージによるビルドエラーを修正（[#7169](https://github.com/nocobase/nocobase/pull/7169)）@mytharcher
  * mimetype 検出を修正（[#7164](https://github.com/nocobase/nocobase/pull/7164)）@mytharcher
* **[公開フォーム]** 公開フォームにおいて Date Only フィールドで日付選択に失敗する問題を修正（[#7168](https://github.com/nocobase/nocobase/pull/7168)）@katherinehhh
* **[カレンダー]** カレンダーブロックのデフォルト週開始日を「月曜日」に設定（[#7171](https://github.com/nocobase/nocobase/pull/7171)）@katherinehhh
* **[ワークフロー：手動ノード]** 変数の誤ったインポートを修正（[#7156](https://github.com/nocobase/nocobase/pull/7156)）@mytharcher
* **[ワークフロー]** モバイルデバイスで前のページに戻るために複数回左スワイプが必要になる問題を修正（[#7165](https://github.com/nocobase/nocobase/pull/7165)）@zhangzhonghe
* **[ワークフロー：承認]**
  * 送信時の関連データ更新を修正 @mytharcher
  * 承認が削除された際に発生するエラーを修正 @mytharcher
  * 取り下げ後に関連データが読み込まれない問題を修正 @mytharcher
* **[メールマネージャー]**
  * 行を選択後、「既読」と「未読」の設定を可能に @jiannx
  * サブメールの内容がフィルタリングできない問題を修正 @jiannx

### [v1.8.0-alpha.14](https://www.nocobase.com/ja/blog/v1.8.0-alpha.14)

*リリース日：2025-07-04*

#### 🐛 不具合修正

* **[ワークフロー：承認]** スキーマ修正時のトランザクションをタイムアウトに起因して削除 @mytharcher

### [v1.8.0-alpha.13](https://www.nocobase.com/ja/blog/v1.8.0-alpha.13)

*リリース日：2025-07-03*

#### 🚀 機能改善

* **[メールマネージャー]** 同じ件名内でのメール個別返信と転送をサポート @jiannx

#### 🐛 不具合修正

* **[クライアント]**
  * 詳細ブロック内のサブテーブルの背景色スタイル不具合（[#7144](https://github.com/nocobase/nocobase/pull/7144)）@katherinehhh
  * \$nForm 変数を参照した Markdown の変更がリアルタイムに反映されない問題（[#7147](https://github.com/nocobase/nocobase/pull/7147)）@katherinehhh
* **[データ可視化]** テーブルページネーションの問題（[#7151](https://github.com/nocobase/nocobase/pull/7151)）@2013xile
* **[データソースマネージャー]** 必要時データソース読み込みとテーブルプレフィックス設定の組み合わせにより「ConnectionManager.getConnection was called after the connection manager was closed」エラーが発生する問題を修正（[#7150](https://github.com/nocobase/nocobase/pull/7150)）@aaaaaajie
