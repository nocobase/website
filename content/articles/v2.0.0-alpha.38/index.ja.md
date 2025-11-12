### 🎉 新機能

* **[クライアント]** テーブル列のドラッグ操作をサポート ([#7842](https://github.com/nocobase/nocobase/pull/7842)) by @zhangzhonghe
* **[データ可視化]** チャート用 SQL データソースを新規追加 ([#7830](https://github.com/nocobase/nocobase/pull/7830)) by @heziqiang

### 🚀 機能改善

* **[クライアント]** RunJS スクリプトコンテキストで Day.js ライブラリのサポートを追加し、日付や時間の操作をより簡単に実行可能に ([#7841](https://github.com/nocobase/nocobase/pull/7841)) by @gchust

### 🐛 不具合修正

* **[ユーティリティ]**
  * フィルターボタンで “Invalid filter item type” エラーが発生する問題を修正 ([#7838](https://github.com/nocobase/nocobase/pull/7838)) by @zhangzhonghe
  * intersect 戦略にオブジェクト型のサポートを追加 ([#7840](https://github.com/nocobase/nocobase/pull/7840)) by @chenos
  * イベントフローで “Unrecognized operation” エラーが発生する問題を修正 ([#7835](https://github.com/nocobase/nocobase/pull/7835)) by @zhangzhonghe
* **[クライアント]**
  * テーブル内の行データ更新後、行操作ボタンの連動ルールが再実行されない問題を修正。データ変更時に連動ルールが正しく再適用されるよう改善 ([#7832](https://github.com/nocobase/nocobase/pull/7832)) by @gchust
  * コードエディタで JSX 構文を使用した場合にプレビュー時エラーが発生する問題を修正 ([#7836](https://github.com/nocobase/nocobase/pull/7836)) by @gchust
* **[未定義]** ダークモード時にプラグインドキュメントのトップページスタイルが正しく表示されない問題を修正 ([#7839](https://github.com/nocobase/nocobase/pull/7839)) by @gchust
* **[ファイルマネージャー]** テーブルブロックのフィールド設定に関する不具合を修正 ([#7843](https://github.com/nocobase/nocobase/pull/7843)) by @katherinehhh
* **[AI 社員]** v1 ページで AI 社員のチャットボタンを非表示に変更 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) by @cgyrock
* **[データ可視化：ECharts]** ECharts オプション設定の `labelType` が反映されない問題を修正 by @heziqiang
* **[メール管理]**
  * 下書き関連の問題を修正 by @jiannx
  * タイムスタンプが存在しない場合に Microsoft メールの既読状態を同期するよう修正 by @jiannx
