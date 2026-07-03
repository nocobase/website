### 🐛 不具合修正

- **[client]** フィールド代入でサブテーブル内の値を変更した後、データ汚染が発生する問題を修正 ([#9163](https://github.com/nocobase/nocobase/pull/9163)) by @gchust
- **[data-source-manager]** データベース同期後にsequenceフィールドがstringに変更される可能性がある問題を修正 ([#9143](https://github.com/nocobase/nocobase/pull/9143)) by @2013xile
- **[ファイルマネージャー]** プレビューURLが欠落している場合はnullを返す ([#9104](https://github.com/nocobase/nocobase/pull/9104)) by @gaston98765
- **[ワークフロー：JavaScriptノード]** `node:vm`モードでのスクリプト実行時のセキュリティ問題を修正 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher
- **[部門]**

  - 部門管理における部門リストが`sort`フィールド順に並んでいない問題を修正 ([#9150](https://github.com/nocobase/nocobase/pull/9150)) by @2013xile
  - ユーザーの部門を保存した後、主部門が同期されない、または同期エラーが発生する問題を修正 ([#9156](https://github.com/nocobase/nocobase/pull/9156)) by @2013xile
