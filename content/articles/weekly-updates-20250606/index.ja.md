週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**今週、[NocoBase 1.7.0](https://www.nocobase.com/ja/blog/nocobase-1-7-0) をリリースいたしました。本バージョンでは、強化されたアクセス権限管理機能、最適化されたシステムパフォーマンス、そしてオープンソースプラグインを導入し、機能性とユーザーエクスペリエンスの包括的な向上を実現しています。**

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.35](https://www.nocobase.com/en/blog/v1.6.35)

*リリース日：2025-05-29*

#### 🎉 新機能

* **[未定義]**
  * Gitpod を新たにサポート。クリック 1 回で開発環境を起動し、すぐに開発を開始できます。（[#6922](https://github.com/nocobase/nocobase/pull/6922)）@kerwin612

#### 🚀 機能改善

* **[クライアント]**
  * 隠したフォームコントロールが Tab キーをキャプチャする問題を修正し、フォーム操作効率を大幅に向上（[#6942](https://github.com/nocobase/nocobase/pull/6942)）@kerwin612
  * メニューリンクを新ウィンドウで開くかどうかを設定可能に（[#6918](https://github.com/nocobase/nocobase/pull/6918)）@katherinehhh
  * 確認ダイアログ表示前に必須フィールドの検証を行う（[#6931](https://github.com/nocobase/nocobase/pull/6931)）@katherinehhh

#### 🐛 不具合修正

* **[クライアント]**
  * 関連フィールドのドロップダウンデータをページサイズ 200 でページネーション（[#6950](https://github.com/nocobase/nocobase/pull/6950)）@katherinehhh
  * テーブル行をドラッグする際のハイライト位置の誤り（[#6952](https://github.com/nocobase/nocobase/pull/6952)）@chenos
  * ドラッグによるブロックサイズ変更が機能しない問題（[#6944](https://github.com/nocobase/nocobase/pull/6944)）@chenos
  * フィールド割り当てコンポーネントの i18n 機能不動作（[#6945](https://github.com/nocobase/nocobase/pull/6945)）@katherinehhh
  * エラーポップアップ内のコピーボタンが「[object Object]」としてコピーされる問題を修正（[#6908](https://github.com/nocobase/nocobase/pull/6908)）@kerwin612
* **[コレクションフィールド: Markdown (Vditor)]** markdown-vditor フィールドコンポーネントのズーム後の幅問題（[#6946](https://github.com/nocobase/nocobase/pull/6946)）@katherinehhh
* **[ワークフロー：承認]** ロケールの修正 @mytharcher

### [v1.6.36](https://www.nocobase.com/en/blog/v1.6.36)

*リリース日：2025-05-29*

#### 🚀 機能改善

* **[認証: OIDC]** ユーザーをメールアドレスで照合する際の大文字小文字の区別を無視 @2013xile

### [v1.6.37](https://www.nocobase.com/en/blog/v1.6.37)

*リリース日：2025-05-30*

#### 🐛 不具合修正

* **[クライアント]**
  * フィルターボタンのドロップダウンリスト内のフィールド順序を修正（[#6962](https://github.com/nocobase/nocobase/pull/6962)）@zhangzhonghe
  * サブテーブル連携変数がフォーム値を使用せず、クリア時に関連データを取得する問題を修正（[#6963](https://github.com/nocobase/nocobase/pull/6963)）@katherinehhh
  * サブテーブル内の関連フィールドが空値の反復変数でリクエストをトリガーする問題を修正（[#6969](https://github.com/nocobase/nocobase/pull/6969)）@katherinehhh
* **[テーマエディタ]** テーマ切り替えオプションを非表示にし、ポップアップスタイルを修正（[#6964](https://github.com/nocobase/nocobase/pull/6964)）@zhangzhonghe
* **[ワークフロー：承認]** 関連条件を含む担当者スコープのクエリ時のエラーを修正 @mytharcher

### [v1.6.38](https://www.nocobase.com/en/blog/v1.6.38)

*リリース日：2025-06-03*

#### 🐛 不具合修正

* **[クライアント]**
  * ポップアップ内で作成したブロックのコレクションが不正な問題を修正（[#6961](https://github.com/nocobase/nocobase/pull/6961)）@zhangzhonghe
  * サブページにおけるフィルターフォームのデフォルト値が無効な問題を修正（[#6960](https://github.com/nocobase/nocobase/pull/6960)）@zhangzhonghe
  * ロールデータテーブルスコープ内で外部データソースの関連コレクションフィールドを展開できない問題（[#6958](https://github.com/nocobase/nocobase/pull/6958)）@katherinehhh
  * 関連フィールドの「省略可能なオーバーフローコンテンツ」オプションが機能しない問題を修正（[#6967](https://github.com/nocobase/nocobase/pull/6967)）@zhangzhonghe
  * 一行テキストフィールドの値が簡易閲覧モードで配列として表示される問題を修正（[#6968](https://github.com/nocobase/nocobase/pull/6968)）@zhangzhonghe
* **[認証]** 有効期限切れトークンのクリーンアップに起因するパフォーマンス問題（[#6981](https://github.com/nocobase/nocobase/pull/6981)）@2013xile
* **[ファイルマネージャー]** Ali-OSS のタイムアウト設定を修正（[#6970](https://github.com/nocobase/nocobase/pull/6970)）@mytharcher
* **[ワークフロー：カスタムアクションイベント]** ワークベンチの初期化処理が省略される問題を修正 @mytharcher
* **[認証: OIDC]** サインインボタンのテキストがローカライズされない問題 @2013xile

### [v1.7.1](https://www.nocobase.com/en/blog/v1.7.1)

*リリース日：2025-06-04*

#### 🎉 新機能

* **[データ可視化]** チャート変換設定に乗算と除算をサポート（[#6788](https://github.com/nocobase/nocobase/pull/6788)）@bugstark

#### 🚀 機能改善

* **[公開フォーム]** URL パラメータを変数として使用可能に（[#6973](https://github.com/nocobase/nocobase/pull/6973)）@mytharcher

#### 🐛 不具合修正

* **[クライアント]** 重複した API リクエストによりブロックテンプレートにフィールドが表示されない問題を修正（[#6957](https://github.com/nocobase/nocobase/pull/6957)）@zhangzhonghe
* **[ワークフロー：手動ノード]** 外部データソースを使用する際の初期化エラーを修正（[#6983](https://github.com/nocobase/nocobase/pull/6983)）@mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.1](https://www.nocobase.com/en/blog/v1.8.0-beta.1)

*リリース日：2025-06-04*

#### 🎉 新機能

* **[未定義]** 一行テキストフィールド用の新規「入力コピーボタン」プラグインを追加（[#6894](https://github.com/nocobase/nocobase/pull/6894)）@kerwin612
* **[ワークフロー]** ワークフローカテゴリ管理機能を追加（[#6965](https://github.com/nocobase/nocobase/pull/6965)）@mytharcher

#### 🚀 機能改善

* **[クライアント]** メニューリンクを新ウィンドウで開くかどうかを設定可能に（[#6918](https://github.com/nocobase/nocobase/pull/6918)）@katherinehhh
* **[アクション：レコードインポート Pro]** xlsx インポートのパフォーマンスを最適化 @aaaaaajie
* **[認証: OIDC]** ユーザーをメールアドレスで照合する際の大文字小文字の区別を無視 @2013xile
* **[ワークフロー：承認]** ワークフローコレクションをワークフロープラグインからインポートして重複を回避 @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * フィールドとアクションがページを更新しないと反映されない問題（[#6977](https://github.com/nocobase/nocobase/pull/6977)）@zhangzhonghe
  * 重複した API リクエストによりブロックテンプレートにフィールドが表示されない問題を修正（[#6957](https://github.com/nocobase/nocobase/pull/6957)）@zhangzhonghe
  * ポップアップ内で作成したブロックのコレクションが不正な問題を修正（[#6961](https://github.com/nocobase/nocobase/pull/6961)）@zhangzhonghe
  * 関連フィールドのデフォルト値を設定する際に変数を選択できない問題（[#6974](https://github.com/nocobase/nocobase/pull/6974)）@zhangzhonghe
  * 一行テキストフィールドの値が簡易閲覧モードで配列として表示される問題を修正（[#6968](https://github.com/nocobase/nocobase/pull/6968)）@zhangzhonghe
  * ロールデータテーブルスコープ内で外部データソースの関連コレクションフィールドを展開できない問題（[#6958](https://github.com/nocobase/nocobase/pull/6958)）@katherinehhh
  * 関連フィールドの「省略可能なオーバーフローコンテンツ」オプションが機能しない問題を修正（[#6967](https://github.com/nocobase/nocobase/pull/6967)）@zhangzhonghe
  * サブページにおけるフィルターフォームのデフォルト値が無効な問題を修正（[#6960](https://github.com/nocobase/nocobase/pull/6960)）@zhangzhonghe
  * 新しいデータを追加する際に関連フィールドのポップアップが最初の入力で閉じる問題（[#6971](https://github.com/nocobase/nocobase/pull/6971)）@katherinehhh
  * サブテーブル内の関連フィールドが空値の反復変数でリクエストをトリガーする問題を修正（[#6969](https://github.com/nocobase/nocobase/pull/6969)）@katherinehhh
  * フィルターボタンのドロップダウンリスト内のフィールド順序を修正（[#6962](https://github.com/nocobase/nocobase/pull/6962)）@zhangzhonghe
  * パネルを折りたたむとフォーム検証ルールのデータが失われる問題（[#6949](https://github.com/nocobase/nocobase/pull/6949)）@katherinehhh
  * 連携ルールでマルチセレクトドロップダウンオプションを更新すると選択値がリセットされる問題（[#6953](https://github.com/nocobase/nocobase/pull/6953)）@katherinehhh
  * サブテーブル連携変数がフォーム値を使用せず、クリア時に関連データを取得する問題を修正（[#6963](https://github.com/nocobase/nocobase/pull/6963)）@katherinehhh
  * 関連フィールドのドロップダウンデータをページサイズ 200 でページネーション（[#6950](https://github.com/nocobase/nocobase/pull/6950)）@katherinehhh
  * 日付ピッカーで「期間」から「指定日」に切り替えた後にリフレッシュされない問題（[#6956](https://github.com/nocobase/nocobase/pull/6956)）@katherinehhh
  * テーブル行をドラッグする際のハイライト位置の誤り（[#6952](https://github.com/nocobase/nocobase/pull/6952)）@chenos
* **[認証]** 有効期限切れトークンのクリーンアップに起因するパフォーマンス問題（[#6981](https://github.com/nocobase/nocobase/pull/6981)）@2013xile
* **[ワークフロー]** ワークフローをフィルタリングする際に発生するエラーを修正（[#6978](https://github.com/nocobase/nocobase/pull/6978)）@mytharcher
* **[ファイルマネージャー]** Ali-OSS のタイムアウト設定を修正（[#6970](https://github.com/nocobase/nocobase/pull/6970)）@mytharcher
* **[テーマエディタ]** テーマ切り替えオプションを非表示にし、ポップアップスタイルを修正（[#6964](https://github.com/nocobase/nocobase/pull/6964)）@zhangzhonghe
* **[ワークフロー：カスタムアクションイベント]** ワークベンチの初期化処理が省略される問題を修正 @mytharcher
* **[認証: OIDC]** サインインボタンのテキストがローカライズされない問題 @2013xile
* **[ワークフロー：承認]** 関連条件を含む担当者スコープのクエリ時のエラーを修正 @mytharcher

### [v1.8.0-beta.2](https://www.nocobase.com/en/blog/v1.8.0-beta.2)

*リリース日：2025-06-04*

#### 🚀 機能改善

* **[テンプレート印刷]** ログを追加 @sheldon66

### [v1.8.0-beta.3](https://www.nocobase.com/en/blog/v1.8.0-beta.3)

*リリース日：2025-06-04*

#### 🎉 新機能

* **[データ可視化]** チャート変換設定に乗算と除算をサポート（[#6788](https://github.com/nocobase/nocobase/pull/6788)）@bugstark

#### 🚀 機能改善

* **[公開フォーム]** URL パラメータを変数として使用可能に（[#6973](https://github.com/nocobase/nocobase/pull/6973)）@mytharcher

#### 🐛 不具合修正

* **[クライアント]** 重複した API リクエストによりブロックテンプレートにフィールドが表示されない問題を修正（[#6957](https://github.com/nocobase/nocobase/pull/6957)）@zhangzhonghe
* **[ワークフロー：手動ノード]** 外部データソースを使用する際の初期化エラーを修正（[#6983](https://github.com/nocobase/nocobase/pull/6983)）@mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.1](https://www.nocobase.com/ja/blog/v1.8.0-alpha.1)

*リリース日：2025-06-04*

#### 🎉 新機能

* **[未定義]**
  * Gitpod を新たにサポート。クリック 1 回で開発環境を起動し、すぐに開発を開始できます。（[#6922](https://github.com/nocobase/nocobase/pull/6922)）@kerwin612
  * 一行テキストフィールド用の新規「入力コピーボタン」プラグインを追加（[#6894](https://github.com/nocobase/nocobase/pull/6894)）@kerwin612
* **[データ可視化]** チャート変換設定に乗算と除算をサポート（[#6788](https://github.com/nocobase/nocobase/pull/6788)）@bugstark
* **[ワークフロー]** ワークフローカテゴリ管理機能を追加（[#6965](https://github.com/nocobase/nocobase/pull/6965)）@mytharcher
* **[Email マネージャー]** 一括送信機能をサポート @jiannx

#### 🚀 機能改善

* **[クライアント]**
  * 日付範囲フィルタコンポーネントのスタイルを改善（[#6939](https://github.com/nocobase/nocobase/pull/6939)）@katherinehhh
  * メニューリンクを新ウィンドウで開くかどうかを設定可能に（[#6918](https://github.com/nocobase/nocobase/pull/6918)）@katherinehhh
  * 隠したフォームコントロールが Tab キーをキャプチャする問題を修正し、フォーム操作効率を大幅に向上（[#6942](https://github.com/nocobase/nocobase/pull/6942)）@kerwin612
  * 確認ダイアログ表示前に必須フィールドの検証を行う（[#6931](https://github.com/nocobase/nocobase/pull/6931)）@katherinehhh
* **[公開フォーム]** URL パラメータを変数として使用可能に（[#6973](https://github.com/nocobase/nocobase/pull/6973)）@mytharcher
* **[アクション：レコードインポート Pro]** xlsx インポートのパフォーマンスを最適化 @aaaaaajie
* **[テンプレート印刷]** ログを追加 @sheldon66
* **[認証: OIDC]** ユーザーをメールアドレスで照合する際の大文字小文字の区別を無視 @2013xile
* **[ワークフロー：承認]** ワークフローコレクションをワークフロープラグインからインポートして重複を回避 @mytharcher
* **[Email マネージャー]** 一括送信機能を完成 @jiannx

#### 🐛 不具合修正

* **[クライアント]**
  * 重複した API リクエストによりブロックテンプレートにフィールドが表示されない問題を修正（[#6957](https://github.com/nocobase/nocobase/pull/6957)）@zhangzhonghe
  * ポップアップ内で作成したブロックのコレクションが不正な問題を修正（[#6961](https://github.com/nocobase/nocobase/pull/6961)）@zhangzhonghe
  * 一行テキストフィールドの値が簡易閲覧モードで配列として表示される問題を修正（[#6968](https://github.com/nocobase/nocobase/pull/6968)）@zhangzhonghe
  * フィルターボタンのドロップダウンリスト内のフィールド順序を修正（[#6962](https://github.com/nocobase/nocobase/pull/6962)）@zhangzhonghe
  * フィールドとアクションがページを更新しないと反映されない問題（[#6977](https://github.com/nocobase/nocobase/pull/6977)）@zhangzhonghe
  * 関連フィールドの「省略可能なオーバーフローコンテンツ」オプションが機能しない問題を修正（[#6967](https://github.com/nocobase/nocobase/pull/6967)）@zhangzhonghe
  * 新しいデータを追加する際に関連フィールドのポップアップが最初の入力で閉じる問題（[#6971](https://github.com/nocobase/nocobase/pull/6971)）@katherinehhh
  * サブテーブル内の関連フィールドが空値の反復変数でリクエストをトリガーする問題を修正（[#6969](https://github.com/nocobase/nocobase/pull/6969)）@katherinehhh
  * パネルを折りたたむとフォーム検証ルールのデータが失われる問題（[#6949](https://github.com/nocobase/nocobase/pull/6949)）@katherinehhh
  * サブページにおけるフィルターフォームのデフォルト値が無効な問題を修正（[#6960](https://github.com/nocobase/nocobase/pull/6960)）@zhangzhonghe
  * フィールド割り当てコンポーネントの i18n 機能不動作（[#6945](https://github.com/nocobase/nocobase/pull/6945)）@katherinehhh
  * ロールデータテーブルスコープ内で外部データソースの関連コレクションフィールドを展開できない問題（[#6958](https://github.com/nocobase/nocobase/pull/6958)）@katherinehhh
  * 日付ピッカーで「期間」から「指定日」に切り替えた後にリフレッシュされない問題（[#6956](https://github.com/nocobase/nocobase/pull/6956)）@katherinehhh
  * サブテーブル連携変数がフォーム値を使用せず、クリア時に関連データを取得する問題を修正（[#6963](https://github.com/nocobase/nocobase/pull/6963)）@katherinehhh
  * 連携ルールでマルチセレクトドロップダウンオプションを更新すると選択値がリセットされる問題（[#6953](https://github.com/nocobase/nocobase/pull/6953)）@katherinehhh
  * テーブル行をドラッグする際のハイライト位置の誤り（[#6952](https://github.com/nocobase/nocobase/pull/6952)）@chenos
  * フォームラベルのコロン表示設定が機能しない問題（[#6947](https://github.com/nocobase/nocobase/pull/6947)）@katherinehhh
  * 関連フィールドのドロップダウンデータをページサイズ 200 でページネーション（[#6950](https://github.com/nocobase/nocobase/pull/6950)）@katherinehhh
  * エラーポップアップ内のコピーボタンが「[object Object]」としてコピーされる問題を修正（[#6908](https://github.com/nocobase/nocobase/pull/6908)）@kerwin612
  * 関連フィールドのデフォルト値を設定する際に変数を選択できない問題（[#6974](https://github.com/nocobase/nocobase/pull/6974)）@zhangzhonghe
  * ドラッグによるブロックサイズ変更が機能しない問題（[#6944](https://github.com/nocobase/nocobase/pull/6944)）@chenos
* **[ワークフロー：手動ノード]** 外部データソースを使用する際の初期化エラーを修正（[#6983](https://github.com/nocobase/nocobase/pull/6983)）@mytharcher
* **[認証]** 有効期限切れトークンのクリーンアップに起因するパフォーマンス問題（[#6981](https://github.com/nocobase/nocobase/pull/6981)）@2013xile
* **[ファイルマネージャー]** Ali-OSS のタイムアウト設定を修正（[#6970](https://github.com/nocobase/nocobase/pull/6970)）@mytharcher
* **[ワークフロー]** ワークフローをフィルタリングする際に発生するエラーを修正（[#6978](https://github.com/nocobase/nocobase/pull/6978)）@mytharcher
* **[テーマエディタ]** テーマ切り替えオプションを非表示にし、ポップアップスタイルを修正（[#6964](https://github.com/nocobase/nocobase/pull/6964)）@zhangzhonghe
* **[コレクションフィールド: Markdown (Vditor)]** markdown-vditor フィールドコンポーネントのズーム後の幅問題（[#6946](https://github.com/nocobase/nocobase/pull/6946)）@katherinehhh
* **[ワークフロー：カスタムアクションイベント]** ワークベンチの初期化処理が省略される問題を修正 @mytharcher
* **[認証: OIDC]** サインインボタンのテキストがローカライズされない問題 @2013xile
* **[ワークフロー：承認]** 関連条件を含む担当者スコープのクエリ時のエラーを修正 @mytharcher

### [v1.8.0-alpha.2](https://www.nocobase.com/ja/blog/v1.8.0-alpha.2)

*リリース日：2025-06-04*

#### 🐛 不具合修正

* **[クライアント]** 重複した API リクエストによりブロックテンプレート内のフィールドが表示されない問題を修正（[#6957](https://github.com/nocobase/nocobase/pull/6957)）@zhangzhonghe
