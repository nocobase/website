### 🎉 新機能

* **[マルチアプリマネージャー]** サブアプリの独立した認証シークレットを設定できるようにサポート（[#7197](https://github.com/nocobase/nocobase/pull/7197)）@mytharcher
* **[ワークフロー: CC]** ワークフローに CC ノードを追加（[#7201](https://github.com/nocobase/nocobase/pull/7201)）@mytharcher
* **[ワークフロー：承認]** トリガー用のイニシャライザを追加 @mytharcher

### 🚀 機能改善

* **[通知：アプリ内メッセージ]** モバイルメッセージページのフォントサイズを最適化（[#7199](https://github.com/nocobase/nocobase/pull/7199)）@zhangzhonghe
* **[ワークフロー]** ロジック計算における文字列比較の前にオペランドを文字列に変換（[#7190](https://github.com/nocobase/nocobase/pull/7190)）@mytharcher
* **[マルチアプリマネージャー]**
  * サブアプリにデータベースと認可オプションを追加（[#7184](https://github.com/nocobase/nocobase/pull/7184)）@mytharcher
  * サブアプリにデータベースと認可オプションを追加（[#7184](https://github.com/nocobase/nocobase/pull/7184)）@mytharcher
* **[コレクションフィールド：コード]** インデント設定を追加 @mytharcher
* **[認証：钉钉（DingTalk）]** コールバック URL のプロトコルとポート番号を設定できるようにサポート @2013xile

### 🐛 不具合修正

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
