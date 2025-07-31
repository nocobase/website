### 🎉 新機能

* **[オフィスファイルプレビューワー]** Microsoft ライブプレビューを介してオフィスファイルのプレビューをサポート（[#7300](https://github.com/nocobase/nocobase/pull/7300)）@mytharcher

### 🚀 機能改善

* **[クライアント]** 選択後にメニューが自動的に閉じないように変更（[#7252](https://github.com/nocobase/nocobase/pull/7252)）@kerwin612
* **[通知：アプリ内メッセージ]** アプリ内メッセージを SSE から WebSocket に変更（[#7302](https://github.com/nocobase/nocobase/pull/7302)）@mytharcher
* **[ワークフロー]** 実行準備時に読み込むジョブ数を削減（[#7284](https://github.com/nocobase/nocobase/pull/7284)）@mytharcher
* **[認証：钉钉（DingTalk）]** 钉钉クライアントにおいて、ナビゲーションバーのタイトルを「Loading…」ではなく空文字列に設定 @2013xile

### 🐛 不具合修正

* **[クライアント]**
  * ツリーテーブルを展開できない問題を修正（[#7309](https://github.com/nocobase/nocobase/pull/7309)）@zhangzhonghe
  * テーブル行のドラッグアンドドロップによる並び替えにおける予期しない動作を修正（[#6959](https://github.com/nocobase/nocobase/pull/6959)）@ChimingLiu
  * フィールドのデフォルト値解析時の無限ループ問題を修正（[#7301](https://github.com/nocobase/nocobase/pull/7301)）@zhangzhonghe
  * フィルターフォームにおいて、関係フィールドにデータセレクターを設定した際に、ポップアップ内の日付フィールドの表示が異常になる問題を修正（[#7292](https://github.com/nocobase/nocobase/pull/7292)）@katherinehhh
* **[ワークフロー: HTTP リクエストノード]** 競合状態のバグを修正（[#7310](https://github.com/nocobase/nocobase/pull/7310)）@mytharcher
* **[ワークフロー]** MySQL において、ジョブ保存時の BigInt ID の問題を修正（[#7292](https://github.com/nocobase/nocobase/pull/7292)）@mytharcher
* **[アクション：レコードエクスポート]** Excel にエクスポートする際のネストされた関係フィールドのフォーマットが不正確な問題を修正（[#7277](https://github.com/nocobase/nocobase/pull/7277)）@aaaaaajie
* **[データソース：外部 SQL Server]** 外部データソースの MSSQL 日付時刻（タイムゾーンなし）フィールドのストレージ形式が不一致の問題を修正 @aaaaaajie
* **[ワークフロー：承認]** 外部データソース内の担当者選択から発生するエラーを修正 @mytharcher
