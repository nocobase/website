### 🎉 新機能

- **[client]** 従来のボタンアクセス制御設定に対応 ([#6376](https://github.com/nocobase/nocobase/pull/6376)) by @katherinehhh
- **[Workflow: Response message]** アクショントリガーでの使用をサポート by @mytharcher

### 🚀 改善

- **[Auth: API keys]** APIキー認証のためのトークンセキュリティ設定テストを追加 ([#6361](https://github.com/nocobase/nocobase/pull/6361)) by @sheldon66
- **[Workflow: Manual node]** ワークフロータスクセンターのUIを調整 ([#6272](https://github.com/nocobase/nocobase/pull/6272)) by @mytharcher

### 🐛 バグ修正

- **[server]** `yarn start` 実行後、ブラウザキャッシュが正しく更新されない ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust
- **[client]**
  - FormDrawerのテーマコンテキストの問題を修正 ([#6403](https://github.com/nocobase/nocobase/pull/6403)) by @katherinehhh
  - 「$anyOf」オペレーター使用時に連動ルールが無効になる問題を修正 ([#6400](https://github.com/nocobase/nocobase/pull/6400)) by @zhangzhonghe
- **[auth]** 存在しないユーザーに対して401エラーを返し、ローカライズメッセージを更新 ([#6381](https://github.com/nocobase/nocobase/pull/6381)) by @sheldon66
- **[Block: template]** ページデータブロックでテンプレート保存オプションが表示されない問題を修正 ([#6398](https://github.com/nocobase/nocobase/pull/6398)) by @gchust
- **[Workflow: Manual node]** ユニークキーの衝突を回避 ([#6407](https://github.com/nocobase/nocobase/pull/6407)) by @mytharcher
- **[Data source manager]** 外部データソースでフィールド編集時にエラーが発生する問題を修正 ([#6402](https://github.com/nocobase/nocobase/pull/6402)) by @katherinehhh
- **[Theme editor]** テーマを連続して切り替えた場合に切替が失敗する問題を修正 ([#6387](https://github.com/nocobase/nocobase/pull/6387)) by @katherinehhh
- **[WEB client]** ロール切替後にページが空白になる問題を修正 ([#6388](https://github.com/nocobase/nocobase/pull/6388)) by @aaaaaajie
- **[Workflow: Approval]**
  - 誤った承認者設定により全ユーザーが検索される問題を防止 by @mytharcher
  - アサイン追加時の順序パラメータを修正 by @mytharcher
- **[WeCom]** ログインプロンプトリンクとDingTalkログインエラーを修正 by @chenzhizdt