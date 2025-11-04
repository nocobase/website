### 🎉 新機能

* **[ワークフロー：承認]** 「データ保存前」にトリガーされるモードをサポート by @mytharcher

### 🚀 機能改善

* **[サーバー]** Gateway層のログを追加 ([#7683](https://github.com/nocobase/nocobase/pull/7683)) by @2013xile
* **[ワークフロー：通知ノード]** 通知ノードに「失敗を無視」オプションを追加し、送信に失敗してもワークフローを継続実行できるように改善 ([#7736](https://github.com/nocobase/nocobase/pull/7736)) by @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 操作パネル内でQRコードスキャンが連動ルールを設定できない問題を修正 ([#7693](https://github.com/nocobase/nocobase/pull/7693)) by @katherinehhh
  * モーダル内のiframeブロックで連動ルールが機能しない問題を修正 ([#7694](https://github.com/nocobase/nocobase/pull/7694)) by @katherinehhh
* **[データベース]** MySQLのJSONカラムのデフォルト値同期処理をスキップするよう修正 ([#7696](https://github.com/nocobase/nocobase/pull/7696)) by @2013xile
* **[ワークフロー]**
  * サービス分割モードでメモリ待機キュー処理が不適切に行われ、一部のワークフローが実行されない問題を修正 ([#7692](https://github.com/nocobase/nocobase/pull/7692)) by @mytharcher
  * 遅延実行計画作成時の初期ステータス値を修正 ([#7721](https://github.com/nocobase/nocobase/pull/7721)) by @mytharcher
  * ブランチノード削除後、残ったブランチ内の最初のノードのkeyが新しい値に変更されてしまう問題を修正 ([#7665](https://github.com/nocobase/nocobase/pull/7665)) by @mytharcher
* **[権限管理]**`resourceManager` のミドルウェアの順序を修正 ([#7728](https://github.com/nocobase/nocobase/pull/7728)) by @2013xile
* **[ファイルマネージャー]**`.msg` ファイルが正常にアップロードできない問題を修正 ([#7662](https://github.com/nocobase/nocobase/pull/7662)) by @mytharcher
* **[ワークフロー：手動処理ノード]** ワークフロー停止後、手動処理タスクがTo-Doセンターから消える問題を修正 ([#7687](https://github.com/nocobase/nocobase/pull/7687)) by @mytharcher
* **[データテーブルフィールド：中国行政区画]** 市区と県区が同一の場合にデータをインポートできない問題を修正 ([#7673](https://github.com/nocobase/nocobase/pull/7673)) by @2013xile
* **[ワークフロー：承認]**
  * 承認完了通知におけるステータステキストの翻訳問題を修正。ユーザーの言語設定がない場合はシステムのデフォルト言語を使用するように修正 by @mytharcher
  * 言語翻訳の不具合を修正 by @mytharcher
