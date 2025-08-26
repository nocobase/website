### 🚀 機能改善

* **[ワークフロー]** ワークフロー変数 API を調整し、追加の変数リストをプリセットする機能をサポート（[#7439](https://github.com/nocobase/nocobase/pull/7439)）@mytharcher
* **[ワークフロー：承認]**
  * カスタム通知内で承認関連の変数を使用する機能をサポート @mytharcher
  * 終了ノードが実行を終了した後、承認ステータスを更新する機能をサポート @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 特定のシナリオで、モバイル端末のレコードピッカーポップアップでレコードを編集するとエラーが発生する問題を修正（[#7444](https://github.com/nocobase/nocobase/pull/7444)）@zhangzhonghe
  * サブテーブルの添付フィールドにおいて必須検証が機能しない問題（[#7431](https://github.com/nocobase/nocobase/pull/7431)）@katherinehhh
  * 添付ファイル URL フィールドの URL にクエリパラメータが含まれる場合、アイコンが不正に表示される問題を修正（[#7432](https://github.com/nocobase/nocobase/pull/7432)）@mytharcher
* **[データベース]**
  * アプリ内メッセージの「もっと読む」機能使用時に発生する MySQL 構文エラーを修正（[#7438](https://github.com/nocobase/nocobase/pull/7438)）@aaaaaajie
  * エクスポートされた Number フィールドの精度問題を修正（[#7421](https://github.com/nocobase/nocobase/pull/7421)）@aaaaaajie
* **[未定義（undefined）]** MySQL 外部データソースで日付フィールドのみでフィルタリングする際の問題を修正（[#7422](https://github.com/nocobase/nocobase/pull/7422)）@aaaaaajie
* **[アクション：レコードインポート]** テーブルのプライマリキーが単一行テキストの場合、インポートに失敗する問題を修正（[#7416](https://github.com/nocobase/nocobase/pull/7416)）@aaaaaajie
* **[ワークフロー]**
  * ワークフロー実行状態の自動削除オプションを完備（[#7436](https://github.com/nocobase/nocobase/pull/7436)）@mytharcher
  * ワークフロータスクにおけるモバイル端末メニュー関連の問題を修正（[#7419](https://github.com/nocobase/nocobase/pull/7419)）@mytharcher
* **[アクション：レコードインポート Pro]** xlsx ファイルのインポート時に文字列型プライマリキーを使用すると、予期しない更新結果になる問題を修正 @aaaaaajie
