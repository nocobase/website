週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.6](https://www.nocobase.com/ja/blog/v1.8.6)

*リリース日：2025-07-16*

#### 🐛 不具合修正

* **[クライアント]**
  * エラー修正：'react-device-detect' を解決できない問題（[#7224](https://github.com/nocobase/nocobase/pull/7224)）@zhangzhonghe
  * 連動規則における関連フィールドの表示問題（[#7220](https://github.com/nocobase/nocobase/pull/7220)）@katherinehhh
* **[データベース]** 外部データソーステーブルでシンプルページネーションを有効にした際のエラーを修正（[#7222](https://github.com/nocobase/nocobase/pull/7222)）@aaaaaajie
* **[コレクションフィールド：ソート]** レコード複製時にソートフィールドの選択が欠落する問題（[#7116](https://github.com/nocobase/nocobase/pull/7116)）@katherinehhh
* **[ワークフロー：承認]**
  * レコード一覧において削除された承認に対するフォールトトレランスを追加 @mytharcher
  * 承認送信時の多階層関連データを修正 @mytharcher
  * レコード削除時の例外を修正 @mytharcher

### [v1.8.5](https://www.nocobase.com/ja/blog/v1.8.5)

*リリース日：2025-07-14*

#### 🚀 機能改善

* **[コレクションフィールド：数式]** さらに多くの計算可能なインターフェースを追加（[#7215](https://github.com/nocobase/nocobase/pull/7215)）@mytharcher
* **[ワークフロー]** ステータスにより実行が不要な場合、エラーをスローする代わりにロギングを使用（[#7217](https://github.com/nocobase/nocobase/pull/7217)）@mytharcher
* **[ワークフロー：承認]** 関連データが削除された場合に承認を削除できるようにサポート @mytharcher

#### 🐛 不具合修正

* **[クライアント]**
  * 連動規則で添付ファイルフィールドを変数として選択できない問題（[#7213](https://github.com/nocobase/nocobase/pull/7213)）@zhangzhonghe
  * iOS でドロップダウン選択コンポーネントがキーボードに遮られる問題を修正（[#7149](https://github.com/nocobase/nocobase/pull/7149)）@zhangzhonghe
  * 選択フィールドに値とオプションの両方が設定されている場合、編集フォームでの値の割り当てに失敗する問題（[#7209](https://github.com/nocobase/nocobase/pull/7209)）@katherinehhh
  * フィルター折りたたみ：フィールドにデフォルト値を設定後、ページ初期化時にフィルターがトリガーされない問題（[#7206](https://github.com/nocobase/nocobase/pull/7206)）@zhangzhonghe
  * カンバンソートフィールドを使用したリストブロックで値を割り当てる際のエラー（[#7208](https://github.com/nocobase/nocobase/pull/7208)）@katherinehhh
  * サブメニューを切り替えた際にブラウザタブのタイトルが同期されない問題（[#7207](https://github.com/nocobase/nocobase/pull/7207)）@zhangzhonghe
  * ポップアップアクション：タブを切り替えた後のページ表示が期待通りでない問題（[#7212](https://github.com/nocobase/nocobase/pull/7212)）@zhangzhonghe
* **[acl]** ルートロールを含むロール統合モードでロールを削除する際のエラーを修正（[#7198](https://github.com/nocobase/nocobase/pull/7198)）@aaaaaajie
* **[マルチアプリマネージャー]** 認証オプションが予期しない位置に表示される問題を修正（[#7210](https://github.com/nocobase/nocobase/pull/7210)）@mytharcher
* **[認証]** ログインページがスクロールできない問題を修正（[#7159](https://github.com/nocobase/nocobase/pull/7159)）@zhangzhonghe
* **[ワークフロー：承認]** 承認送信時の関連データを修正 @mytharcher

### [v1.8.4](https://www.nocobase.com/ja/blog/v1.8.4)

*リリース日：2025-07-13*

#### 🎉 新機能

* **[マルチアプリマネージャー]** サブアプリの独立した認証シークレットを設定できるようにサポート（[#7197](https://github.com/nocobase/nocobase/pull/7197)）@mytharcher
* **[ワークフロー: CC]** ワークフローに CC ノードを追加（[#7201](https://github.com/nocobase/nocobase/pull/7201)）@mytharcher

#### 🚀 機能改善

* **[通知：アプリ内メッセージ]** モバイルメッセージページのフォントサイズを最適化（[#7199](https://github.com/nocobase/nocobase/pull/7199)）@zhangzhonghe
* **[認証：钉钉（DingTalk）]** コールバック URL のプロトコルとポート番号を設定できるようにサポート @2013xile

#### 🐛 不具合修正

* **[通知：アプリ内メッセージ]** 文字列形式の BigInt タイムスタンプが dayjs で問題を引き起こす不具合を修正（[#7196](https://github.com/nocobase/nocobase/pull/7196)）@mytharcher
* **[ワークフロー：承認]**
  * ユーザーが存在しない場合のエラーを回避 @mytharcher
  * レコードの関連データを再読み込み @mytharcher
  * UI スキーマ更新時のマイグレーションに`try/catch`を追加 @mytharcher

### [v1.8.3](https://www.nocobase.com/ja/blog/v1.8.3)

*リリース日：2025-07-11*

#### 🚀 機能改善

* **[マルチアプリマネージャー]** サブアプリにデータベースと認可オプションを追加（[#7184](https://github.com/nocobase/nocobase/pull/7184)）@mytharcher

#### 🐛 不具合修正

* **[アクション：カスタムリクエスト]** カスタムリクエスト成功後のルートナビゲーション時に、URL 内の変数解析に問題が生じる不具合（[#7186](https://github.com/nocobase/nocobase/pull/7186)）@katherinehhh

### [v1.8.2](https://www.nocobase.com/ja/blog/v1.8.2)

*リリース日：2025-07-10*

#### 🎉 新機能

* **[ワークフロー：承認]** トリガー用のイニシャライザを追加 @mytharcher

#### 🚀 機能改善

* **[マルチアプリマネージャー]** サブアプリにデータベースと認可オプションを追加（[#7184](https://github.com/nocobase/nocobase/pull/7184)）@mytharcher
* **[ワークフロー]** ロジック計算における文字列比較の前にオペランドを文字列に変換（[#7190](https://github.com/nocobase/nocobase/pull/7190)）@mytharcher
* **[コレクションフィールド：コード]** インデント設定を追加 @mytharcher

#### 🐛 不具合修正

* **[データベース]** ビューのフィールドがブロックに表示されない問題を修正（[#7162](https://github.com/nocobase/nocobase/pull/7162)）@aaaaaajie
* **[ブロック：カンバン]** カンバン内のサブテーブル UI の問題を修正し、カンバン列幅設定をサポート（[#7189](https://github.com/nocobase/nocobase/pull/7189)）@katherinehhh
* **[ワークフロー：承認]** ブロックと関連データのバグを修正 @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.3](https://www.nocobase.com/ja/blog/v1.9.0-beta.3)

*リリース日：2025-07-14*

#### 🎉 新機能

* **[マルチアプリマネージャー]** サブアプリの独立した認証シークレットを設定できるようにサポート（[#7197](https://github.com/nocobase/nocobase/pull/7197)）@mytharcher
* **[ワークフロー: CC]** ワークフローに CC ノードを追加（[#7201](https://github.com/nocobase/nocobase/pull/7201)）@mytharcher
* **[ワークフロー：承認]** トリガー用のイニシャライザを追加 @mytharcher

#### 🚀 機能改善

* **[通知：アプリ内メッセージ]** モバイルメッセージページのフォントサイズを最適化（[#7199](https://github.com/nocobase/nocobase/pull/7199)）@zhangzhonghe
* **[ワークフロー]** ロジック計算における文字列比較の前にオペランドを文字列に変換（[#7190](https://github.com/nocobase/nocobase/pull/7190)）@mytharcher
* **[マルチアプリマネージャー]**
  * サブアプリにデータベースと認可オプションを追加（[#7184](https://github.com/nocobase/nocobase/pull/7184)）@mytharcher
  * サブアプリにデータベースと認可オプションを追加（[#7184](https://github.com/nocobase/nocobase/pull/7184)）@mytharcher
* **[コレクションフィールド：コード]** インデント設定を追加 @mytharcher
* **[認証：钉钉（DingTalk）]** コールバック URL のプロトコルとポート番号を設定できるようにサポート @2013xile

#### 🐛 不具合修正

* **[クライアント]**
  * 連動規則で添付ファイルフィールドを変数として選択できない問題（[#7213](https://github.com/nocobase/nocobase/pull/7213)）@zhangzhonghe
  * カンバンソートフィールドを使用したリストブロックで値を割り当てる際のエラー（[#7208](https://github.com/nocobase/nocobase/pull/7208)）@katherinehhh
  * フィルター折りたたみ：フィールドにデフォルト値を設定後、ページ初期化時にフィルターがトリガーされない問題（[#7206](https://github.com/nocobase/nocobase/pull/7206)）@zhangzhonghe
  * 選択フィールドに値とオプションの両方が設定されている場合、編集フォームでの値の割り当てに失敗する問題（[#7209](https://github.com/nocobase/nocobase/pull/7209)）@katherinehhh
  * ポップアップアクション：タブを切り替えた後のページ表示が期待通りでない問題（[#7212](https://github.com/nocobase/nocobase/pull/7212)）@zhangzhonghe
  * サブメニューを切り替えた際にブラウザタブのタイトルが同期されない問題（[#7207](https://github.com/nocobase/nocobase/pull/7207)）@zhangzhonghe
  * iOS でドロップダウン選択コンポーネントがキーボードに遮られる問題を修正（[#7149](https://github.com/nocobase/nocobase/pull/7149)）@zhangzhonghe
* **[acl]** ルートロールを含むロール統合モードでロールを削除する際のエラーを修正（[#7198](https://github.com/nocobase/nocobase/pull/7198)）@aaaaaajie
* **[認証]** ログインページがスクロールできない問題を修正（[#7159](https://github.com/nocobase/nocobase/pull/7159)）@zhangzhonghe
* **[マルチアプリマネージャー]** 認証オプションが予期しない位置に表示される問題を修正（[#7210](https://github.com/nocobase/nocobase/pull/7210)）@mytharcher
* **[通知：アプリ内メッセージ]** 文字列形式の BigInt タイムスタンプが dayjs で問題を引き起こす不具合を修正（[#7196](https://github.com/nocobase/nocobase/pull/7196)）@mytharcher
* **[アクション：カスタムリクエスト]** カスタムリクエスト成功後のルートナビゲーション時に、URL 内の変数解析に問題が生じる不具合（[#7186](https://github.com/nocobase/nocobase/pull/7186)）@katherinehhh
* **[ブロック：カンバン]** カンバン内のサブテーブル UI の問題を修正し、カンバン列幅設定をサポート（[#7189](https://github.com/nocobase/nocobase/pull/7189)）@katherinehhh
* **[ワークフロー：承認]**
  * UI スキーマ更新時のマイグレーションに`try/catch`を追加 @mytharcher
  * ブロックと関連データのバグを修正 @mytharcher
  * レコードの関連データを再読み込み @mytharcher
  * ユーザーが存在しない場合のエラーを回避 @mytharcher

### [v1.9.0-beta.2](https://www.nocobase.com/ja/blog/v1.9.0-beta.2)

*リリース日：2025-07-10*

#### 🐛 不具合修正

* **[クライアント]**
  * フォーム内の関連フィールドコレクションにおけるチェックボックスフィールドの表示が不正確な問題（[#7176](https://github.com/nocobase/nocobase/pull/7176)）@zhangzhonghe
  * ボタンをクリックしてもポップアップが開かない問題を修正（[#7180](https://github.com/nocobase/nocobase/pull/7180)）@zhangzhonghe
* **[データベース]** ビューのフィールドがブロックに表示されない問題を修正（[#7162](https://github.com/nocobase/nocobase/pull/7162)）@aaaaaajie
* **[ワークフロー：手動ノード]** 変数を使用した際に発生するエラーを修正（[#7177](https://github.com/nocobase/nocobase/pull/7177)）@mytharcher
* **[テンプレート印刷]** rootDataType フィールドにマイグレーションスクリプトを追加 @jiannx
* **[ワークフロー：承認]** 担当者が設定されていない場合に承認済みブランチが実行されない問題を修正 @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.2](https://www.nocobase.com/ja/blog/v1.9.0-alpha.2)

*リリース日：2025-07-15*

#### 🎉 新機能

* **[マルチアプリマネージャー]** サブアプリの独立した認証シークレットを設定できるようにサポート（[#7197](https://github.com/nocobase/nocobase/pull/7197)）@mytharcher
* **[ワークフロー: CC]** ワークフローに CC ノードを追加（[#7201](https://github.com/nocobase/nocobase/pull/7201)）@mytharcher
* **[ワークフロー：承認]** トリガー用のイニシャライザを追加 @mytharcher

#### 🚀 機能改善

* **[コレクションフィールド：数式]** さらに多くの計算可能なインターフェースを追加（[#7215](https://github.com/nocobase/nocobase/pull/7215)）@mytharcher
* **[ワークフロー]**
  * ステータスにより実行が不要な場合、エラーをスローする代わりにロギングを使用（[#7217](https://github.com/nocobase/nocobase/pull/7217)）@mytharcher
  * ロジック計算における文字列比較の前にオペランドを文字列に変換（[#7190](https://github.com/nocobase/nocobase/pull/7190)）@mytharcher
* **[通知：アプリ内メッセージ]** モバイルメッセージページのフォントサイズを最適化（[#7199](https://github.com/nocobase/nocobase/pull/7199)）@zhangzhonghe
* **[マルチアプリマネージャー]**
  * サブアプリにデータベースと認可オプションを追加（[#7184](https://github.com/nocobase/nocobase/pull/7184)）@mytharcher
  * サブアプリにデータベースと認可オプションを追加（[#7184](https://github.com/nocobase/nocobase/pull/7184)）@mytharcher
* **[コレクションフィールド：コード]** インデント設定を追加 @mytharcher
* **[ワークフロー：承認]** 関連データが削除された場合に承認を削除できるようにサポート @mytharcher
* **[認証：钉钉（DingTalk）]** コールバック URL のプロトコルとポート番号を設定できるようにサポート @2013xile

#### 🐛 不具合修正

* **[クライアント]**
  * 連動規則で添付ファイルフィールドを変数として選択できない問題（[#7213](https://github.com/nocobase/nocobase/pull/7213)）@zhangzhonghe
  * フィルター折りたたみ：フィールドにデフォルト値を設定後、ページ初期化時にフィルターがトリガーされない問題（[#7206](https://github.com/nocobase/nocobase/pull/7206)）@zhangzhonghe
  * 連動規則における関連フィールドの表示問題（[#7220](https://github.com/nocobase/nocobase/pull/7220)）@katherinehhh
  * 選択フィールドに値とオプションの両方が設定されている場合、編集フォームでの値の割り当てに失敗する問題（[#7209](https://github.com/nocobase/nocobase/pull/7209)）@katherinehhh
  * カンバンソートフィールドを使用したリストブロックで値を割り当てる際のエラー（[#7208](https://github.com/nocobase/nocobase/pull/7208)）@katherinehhh
  * ポップアップアクション：タブを切り替えた後のページ表示が期待通りでない問題（[#7212](https://github.com/nocobase/nocobase/pull/7212)）@zhangzhonghe
  * サブメニューを切り替えた際にブラウザタブのタイトルが同期されない問題（[#7207](https://github.com/nocobase/nocobase/pull/7207)）@zhangzhonghe
  * iOS でドロップダウン選択コンポーネントがキーボードに遮られる問題を修正（[#7149](https://github.com/nocobase/nocobase/pull/7149)）@zhangzhonghe
  * フォーム内の関連フィールドコレクションにおけるチェックボックスフィールドの表示が不正確な問題（[#7176](https://github.com/nocobase/nocobase/pull/7176)）@zhangzhonghe
  * ボタンをクリックしてもポップアップが開かない問題を修正（[#7180](https://github.com/nocobase/nocobase/pull/7180)）@zhangzhonghe
* **[acl]** ルートロールを含むロール統合モードでロールを削除する際のエラーを修正（[#7198](https://github.com/nocobase/nocobase/pull/7198)）@aaaaaajie
* **[データベース]** ビューのフィールドがブロックに表示されない問題を修正（[#7162](https://github.com/nocobase/nocobase/pull/7162)）@aaaaaajie
* **[マルチアプリマネージャー]** 認証オプションが予期しない位置に表示される問題を修正（[#7210](https://github.com/nocobase/nocobase/pull/7210)）@mytharcher
* **[通知：アプリ内メッセージ]** 文字列形式の BigInt タイムスタンプが dayjs で問題を引き起こす不具合を修正（[#7196](https://github.com/nocobase/nocobase/pull/7196)）@mytharcher
* **[認証]** ログインページがスクロールできない問題を修正（[#7159](https://github.com/nocobase/nocobase/pull/7159)）@zhangzhonghe
* **[アクション：カスタムリクエスト]** カスタムリクエスト成功後のルートナビゲーション時に、URL 内の変数解析に問題が生じる不具合（[#7186](https://github.com/nocobase/nocobase/pull/7186)）@katherinehhh
* **[ブロック：カンバン]** カンバン内のサブテーブル UI の問題を修正し、カンバン列幅設定をサポート（[#7189](https://github.com/nocobase/nocobase/pull/7189)）@katherinehhh
* **[ワークフロー：手動ノード]** 変数を使用した際に発生するエラーを修正（[#7177](https://github.com/nocobase/nocobase/pull/7177)）@mytharcher
* **[テンプレート印刷]** rootDataType フィールドにマイグレーションスクリプトを追加 @jiannx
* **[ワークフロー：承認]**
  * 承認送信時の関連データを修正 @mytharcher
  * レコード削除時の例外を修正 @mytharcher
  * 担当者が設定されていない場合に承認済みブランチが実行されない問題を修正 @mytharcher
  * ユーザーが存在しない場合のエラーを回避 @mytharcher
  * ブロックと関連データのバグを修正 @mytharcher
  * UI スキーマ更新時のマイグレーションに`try/catch`を追加 @mytharcher
  * レコードの関連データを再読み込み @mytharcher
