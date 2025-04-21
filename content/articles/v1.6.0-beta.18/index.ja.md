### 🚀 改善

- **[認証：APIキー]** APIキー認証用のトークンセキュリティ設定テストを追加。 ([#6361](https://github.com/nocobase/nocobase/pull/6361)) by @sheldon66

### 🐛 バグ修正

- **[サーバー]** `yarn start` コマンド実行後、ブラウザキャッシュが正しく更新されない。 ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust

- **[認証]** 存在しないユーザーに対して401エラーを返し、ローカライズメッセージを更新。 ([#6381](https://github.com/nocobase/nocobase/pull/6381)) by @sheldon66

- **[WEBクライアント]** ロール切替後にページが空白になる。 ([#6388](https://github.com/nocobase/nocobase/pull/6388)) by @aaaaaajie

- **[テーマエディター]** 複数回の連続切替後、テーマの切り替えが失敗する。 ([#6387](https://github.com/nocobase/nocobase/pull/6387)) by @katherinehhh

- **[ワークフロー：承認]**
  - 承認者追加時の順序パラメーターを修正 by @mytharcher

  - 誤った承認者設定により全ユーザーがクエリされるのを回避 by @mytharcher

- **[WeCom]** ログインプロンプトのリンクとDingTalkログインエラーを修正 by @chenzhizdt