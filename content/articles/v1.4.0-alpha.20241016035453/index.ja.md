### 🎉 新機能

- **[sdk]** 環境変数 `API_CLIENT_STORAGE_TYPE` を設定して、クライアント情報を sessionStorage に保存できるようになりました ([#5424](https://github.com/nocobase/nocobase/pull/5424)) by @2013xile
- **[コレクションフィールド：添付（URL）]** 添付（URL）フィールドを追加しました by @katherinehhh

### 🚀 改善点

- **[クライアント]**

  - リモートデバッグを最適化しました ([#5394](https://github.com/nocobase/nocobase/pull/5394)) by @chenos
  - アイコンのみ使用されるアクションボタンのスタイルを最適化し、アイコンの中央揃えを実現しました ([#5413](https://github.com/nocobase/nocobase/pull/5413)) by @katherinehhh
  - レコード自動クローズメッセージポップアップを更新しました ([#5408](https://github.com/nocobase/nocobase/pull/5408)) by @katherinehhh
- **[ワークフロー：HTTPリクエストノード]** サーバー送信イベント（SSE）に対応しました ([#5418](https://github.com/nocobase/nocobase/pull/5418)) by @chenos

### 🐛 バグ修正

- **[公開フォーム]** 公開フォームの設定クリックに関する問題を修正しました ([#5392](https://github.com/nocobase/nocobase/pull/5392)) by @katherinehhh
- **[クライアント]**

  - デフォルト値入力ボックスに値が表示されない問題を修正しました ([#5400](https://github.com/nocobase/nocobase/pull/5400)) by @zhangzhonghe
  - サブテーブルに連動ルールが設定されているときの関連フィールドが見つからないエラーを修正しました ([#5402](https://github.com/nocobase/nocobase/pull/5402)) by @zhangzhonghe
  - デフォルトでサポートされていないファイルタイプのサムネイルプレビュー表示に関する問題を修正しました ([#5401](https://github.com/nocobase/nocobase/pull/5401)) by @mytharcher
- **[ローカリゼーション]** ローカリゼーションプラグインにおける翻訳が公開後に効かない問題を修正しました ([#5416](https://github.com/nocobase/nocobase/pull/5416)) by @2013xile
