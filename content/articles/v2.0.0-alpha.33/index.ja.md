### 🎉 新機能

* **[クライアント]** サブテーブルでページネーションによるデータ表示をサポート ([#7754](https://github.com/nocobase/nocobase/pull/7754)) by @katherinehhh

### 🚀 機能改善

* **[未定義]** チャートプラグインの英語ドキュメントを更新 ([#7748](https://github.com/nocobase/nocobase/pull/7748)) by @heziqiang
* **[テレメトリ]** オンラインサブアプリ数などのテレメトリ指標を追加 ([#7743](https://github.com/nocobase/nocobase/pull/7743)) by @2013xile
* **[ワークフロー]** ワークフロー内のデータブロックで統一された詳細ブロック設定メニューを使用可能に ([#7771](https://github.com/nocobase/nocobase/pull/7771)) by @mytharcher
* **[マルチアプリマネージャー（廃止予定）]** サブアプリの非同期キュー起動をサポート ([#7749](https://github.com/nocobase/nocobase/pull/7749)) by @2013xile
* **[データ可視化]** グラフの日付・時刻フォーマットオプションを追加 ([#7763](https://github.com/nocobase/nocobase/pull/7763)) by @heziqiang
* **[ワークフロー：承認]** 転送承認および追加承認時に新しい承認者へ通知を送信 by @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 変数関連コンポーネントにおいて列挙型ラベルが正しい言語で表示されない問題を修正 ([#7765](https://github.com/nocobase/nocobase/pull/7765)) by @gchust
  * フロントエンドフィールド検証を設定した際、必須項目マークが欠落する問題を修正 ([#7760](https://github.com/nocobase/nocobase/pull/7760)) by @katherinehhh
  * タイムゾーンなし日付をクリアする際の異常を修正 ([#7759](https://github.com/nocobase/nocobase/pull/7759)) by @katherinehhh
  * 連動ルールで設定した必須フィールドが正しく動作しない問題を修正 ([#7756](https://github.com/nocobase/nocobase/pull/7756)) by @zhangzhonghe
  * フィルターフォームで「特定日」を削除すると日付が Invalid Date になる問題を修正 ([#7746](https://github.com/nocobase/nocobase/pull/7746)) by @katherinehhh
  * Markdown Vditor フィールドで必須検証に失敗する問題を修正 ([#7764](https://github.com/nocobase/nocobase/pull/7764)) by @katherinehhh
  * フィルターフォームのリレーションフィールドでデータ範囲設定をサポート ([#7761](https://github.com/nocobase/nocobase/pull/7761)) by @zhangzhonghe
  * サブテーブル内の時刻フィールドのフォーマットエラーを修正 ([#7750](https://github.com/nocobase/nocobase/pull/7750)) by @katherinehhh
* **[フローエンジン]**
  * フィールドフィルター値が false の場合にデータ範囲リクエストが不正となる問題を修正 ([#7766](https://github.com/nocobase/nocobase/pull/7766)) by @gchust
  * サブフォームの現在オブジェクト変数のリレーション値を解析できない問題を修正 ([#7751](https://github.com/nocobase/nocobase/pull/7751)) by @gchust
  * データブロックの最終ページでデータ削除後にページングパラメータが誤る問題を修正 ([#7755](https://github.com/nocobase/nocobase/pull/7755)) by @katherinehhh
* **[サーバー]** アプリ名を用いた Pub/Sub チャネルの分離を実装 ([#7762](https://github.com/nocobase/nocobase/pull/7762)) by @mytharcher
* **[ブロック：グリッドカード]** リストブロックとグリッドカードブロックで同一データが重複表示される問題を修正 ([#7773](https://github.com/nocobase/nocobase/pull/7773)) by @katherinehhh
* **[マルチアプリマネージャー（廃止予定）]** サブアプリのテレメトリ指標が正しく収集されない問題を修正 ([#7772](https://github.com/nocobase/nocobase/pull/7772)) by @2013xile
* **[ワークフロー]**
  * クラスターモードでスケジューラがアイドル状態を正しく認識できず、プラグイン準備前にキューイベントを消費する問題を修正 ([#7768](https://github.com/nocobase/nocobase/pull/7768)) by @mytharcher
  * サービス分割モードで中断ノードを含むワークフローを手動実行した際、実行が待機状態のままになる問題を修正 ([#7767](https://github.com/nocobase/nocobase/pull/7767)) by @mytharcher
* **[ワークフロー：承認]**
  * 承認ワークフローのコピー時にエラーが発生する問題を修正 by @mytharcher
  * 並列ブランチ内で承認ノードを作成できないようにし、フロー状態による問題を回避 by @mytharcher
* **[メール管理]**
  * 同期ログを追加 by @jiannx
  * インデックスにマイグレーションスクリプトを追加 by @jiannx
