### 🎉 新機能

- **[ブロック：かんばん]** かんばんブロック v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) by @jiannx
- **[AI 従業員]** ワークフローにAI従業員ノードを新規追加 ([#9025](https://github.com/nocobase/nocobase/pull/9025)) by @cgyrock
- **[認証：OIDC]** カスタムフィールドマッピングをサポート by @chenzhizdt
- **[ DingTalk]** DingTalk：通知、DingTalk内自動ログイン、ユーザ同期をサポート。 by @chenzhizdt

### 🚀 機能改善

- **[build]** ナレッジベースはzip形式のバッチアップロードファイルをサポート ([#9206](https://github.com/nocobase/nocobase/pull/9206)) by @cgyrock
- **[ai]** AI従業員とナレッジベースがサポートするアップロード可能ファイルタイプを追加（.xlsx, .xls, .csv, .md, .json） ([#9172](https://github.com/nocobase/nocobase/pull/9172)) by @cgyrock
- **[ワークフロー]** 実行計画リストのクエリパフォーマンスを最適化 ([#9214](https://github.com/nocobase/nocobase/pull/9214)) by @mytharcher
- **[ワークフロー：カスタム操作イベント]** レコード（単一および複数）トリガーモードのアクセス制御を追加 ([#9125](https://github.com/nocobase/nocobase/pull/9125)) by @mytharcher
- **[AI: ナレッジベース]** ナレッジベースはzip形式のバッチアップロードファイルをサポート by @cgyrock

### 🐛 不具合修正

- **[data-source-manager]**

  - Null許容フィールドの同期問題を修正 ([#9189](https://github.com/nocobase/nocobase/pull/9189)) by @2013xile
  - 外部データソース再同期時にパーセントフィールドが数値にリセットされる問題を修正 ([#9178](https://github.com/nocobase/nocobase/pull/9178)) by @jiannx
- **[client]**

  - コレクションが非主キー一意識別子を使用する場合、ポップアップ関連ブロックとポップアップ記録変数が間違いの記録識別子を使用した問題を修正 ([#9191](https://github.com/nocobase/nocobase/pull/9191)) by @2013xile
  - レコード追加後の新規フォームデフォルト値設定が有効にならない問題を修正。 ([#9185](https://github.com/nocobase/nocobase/pull/9185)) by @gchust
  - タブ追加ボタンが右端に近すぎる問題を修正 ([#9177](https://github.com/nocobase/nocobase/pull/9177)) by @zhangzhonghe
- **[ワークフロー：集計クエリノード]** 集計ノードのエラー検証ルールにより保存できない問題を修正 ([#9208](https://github.com/nocobase/nocobase/pull/9208)) by @mytharcher
- **[カレンダー]** カレンダー操作を他のブロックに登録しない ([#9200](https://github.com/nocobase/nocobase/pull/9200)) by @jiannx
- **[AI 従業員]**

  - AI従業員がフォーム記入時に関連フィールド値を入力できない問題を修正 ([#9182](https://github.com/nocobase/nocobase/pull/9182)) by @cgyrock
  - AI従業員ノードログ記録の異常問題を修正 ([#9180](https://github.com/nocobase/nocobase/pull/9180)) by @cgyrock
- **[部門]** 部門重複同期時に部門の並べ替えを更新できない問題を修正 ([#9173](https://github.com/nocobase/nocobase/pull/9173)) by @2013xile
- **[ワークフロー：JavaScript ノード]**

  - `node:vm`モードでのスクリプト実行のセキュリティ問題を修正 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher
  - JavaScriptノード設定時のエラーメッセージを修正 ([#9169](https://github.com/nocobase/nocobase/pull/9169)) by @mytharcher
- **[マルチスペース]** スペース権限検証時にデータテーブルが見つからないエラーを修正 by @jiannx
- **[AI: ナレッジベース]** ナレッジベースドキュメント削除時にベクトルデータベースが同期しない問題を修正 by @cgyrock
- **[ワークフロー：承認]** 承認者の移交と追加署名で検索時、200件以降のユーザーを検索できない問題を修正 by @zhangzhonghe
- **[企業微信]** 企業微信の部門同期時に部門並べ替えが同期しない問題を修正 by @2013xile
