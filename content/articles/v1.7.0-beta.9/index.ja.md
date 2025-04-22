### 🎉 新機能
- **[acl]** ユーザーロールの統合をサポート ([#6301](https://github.com/nocobase/nocobase/pull/6301)) by @aaaaaajie
- **[client]**
  - コレクションのプリセットフィールド拡張をサポート ([#6183](https://github.com/nocobase/nocobase/pull/6183)) by @katherinehhh
  - フロントエンドのフィルター演算子拡張をサポート ([#6085](https://github.com/nocobase/nocobase/pull/6085)) by @katherinehhh
- **[Verification]** SMSやTOTP認証器など、さまざまな認証タイプへのユーザーバインディングおよび必要な場面での本人確認をサポートし、認証手法の開発・拡張を可能にします ([#6026](https://github.com/nocobase/nocobase/pull/6026)) by @2013xile  
参考: [Verification](https://docs.nocobase.com/handbook/verification)
- **[Calendar]** カンバン、カレンダー、フォーミュラフィールドプラグインの任意フィールド拡張をサポート ([#6076](https://github.com/nocobase/nocobase/pull/6076)) by @katherinehhh
- **[Block: template]** 継承機能に基づくブロックのテンプレート機能を提供する `Block: template` プラグインを追加 ([#5920](https://github.com/nocobase/nocobase/pull/5920)) by @gchust
- **[plugin-demo-platform]** "/new" ルートの skipAuthCheck を true に設定 by @sheldon66
- **[Two-factor authentication (2FA)]** 新プラグイン：二要素認証（2FA）および認証：TOTP認証器 by @2013xile  
参考: [Two-factor authentication (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)  
[Verification: TOTP authenticator](https://docs.nocobase.com/handbook/verification-totp-authenticator)

### 🚀 改善
- **[client]**
  - 公開ページでログインページにリダイレクトされないよう、router.add に skipAuthCheck を追加 ([#6453](https://github.com/nocobase/nocobase/pull/6453)) by @sheldon66
  - Ant Design 関連の依存関係を 5.24.2 にアップグレード ([#6343](https://github.com/nocobase/nocobase/pull/6343)) by @gchust
- **[utils]** デスクトップページのモバイル対応を実施 ([#6393](https://github.com/nocobase/nocobase/pull/6393)) by @zhangzhonghe
- **[Public forms]** 公開フォームのページタイトルを、作成時に設定したタイトルにする ([#6538](https://github.com/nocobase/nocobase/pull/6538)) by @katherinehhh
- **[File manager]**
  - ファイルプレビューURL生成用のバックエンドコードを追加 ([#6223](https://github.com/nocobase/nocobase/pull/6223)) by @jiannx
  - ストレージタイプ API を変更し、プラグイン API を追加 ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher
- **[Block: template]** ページのデータブロックをブロックテンプレートとして保存する機能をサポート ([#6348](https://github.com/nocobase/nocobase/pull/6348)) by @gchust
- **[Workflow]** ワークフローのバインド設定をプラグインへ移行 ([#6143](https://github.com/nocobase/nocobase/pull/6143)) by @mytharcher

### 🐛 バグ修正
- **[client]**
  - テーブル行ボタンのドラッグ＆ドロップ問題を修正 ([#6544](https://github.com/nocobase/nocobase/pull/6544)) by @katherinehhh
  - リンクページ追加時に「Current User」変数が使用できない問題を修正 ([#6536](https://github.com/nocobase/nocobase/pull/6536)) by @zhangzhonghe
  - リレーショナルフィールドのデータ範囲連動が機能していない問題を修正 ([#6530](https://github.com/nocobase/nocobase/pull/6530)) by @zhangzhonghe
  - フィルターフォームのドロップダウン単一選択フィールドから「複数選択を許可」オプションを削除 ([#6515](https://github.com/nocobase/nocobase/pull/6515)) by @zhangzhonghe
  - `yarn doc` コマンドのエラーを修正 ([#6540](https://github.com/nocobase/nocobase/pull/6540)) by @gchust
  - 連動ルール設定で一部フィールドが表示されない問題を修正 ([#6488](https://github.com/nocobase/nocobase/pull/6488)) by @katherinehhh
  - モバイルブラウザでコンテンツが完全に表示されない問題を修正 ([#6446](https://github.com/nocobase/nocobase/pull/6446)) by @zhangzhonghe
  - '$anyOf' 演算子使用時に連動ルールが無効となる問題を修正 ([#6400](https://github.com/nocobase/nocobase/pull/6400)) by @zhangzhonghe
  - フィルターフォーム内の時間フィールドの書式が正しくない問題を修正 ([#6374](https://github.com/nocobase/nocobase/pull/6374)) by @katherinehhh
  - フォーム初期値設定時の入力スタイルが正しくない問題を修正 ([#6490](https://github.com/nocobase/nocobase/pull/6490)) by @gchust
- **[utils]** 既知のデスクトップ向けレスポンシブバグを修正 ([#6476](https://github.com/nocobase/nocobase/pull/6476)) by @zhangzhonghe
- **[acl]** ロール統合時にリレーションシップフィールドが表示されない問題を修正 ([#6456](https://github.com/nocobase/nocobase/pull/6456)) by @aaaaaajie
- **[Collection: Tree]** plugin-collection-tree のマイグレーション問題を修正 ([#6537](https://github.com/nocobase/nocobase/pull/6537)) by @2013xile
- **[Action: Custom request]** UTF-8 エンコードファイルのダウンロードができない問題を修正 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) by @2013xile
- **[Variables and secrets]** 新規変数作成ドロワーでボタンが表示されない問題を修正 ([#6485](https://github.com/nocobase/nocobase/pull/6485)) by @gchust
- **[WEB client]** ctx.state.currentRole（単一ロール）を ctx.state.currentRoles（複数ロール対応）に置換 ([#6427](https://github.com/nocobase/nocobase/pull/6427)) by @aaaaaajie
- **[Access control]**
  - データスコープが自分のデータに設定され、テーブルに作成者フィールドが存在しない場合にエラーが発生する問題を修正 ([#6428](https://github.com/nocobase/nocobase/pull/6428)) by @aaaaaajie
  - ロール切替が反映されない問題を修正 ([#6454](https://github.com/nocobase/nocobase/pull/6454)) by @aaaaaajie
- **[Block: template]**
  - ページデータブロックで「テンプレートとして保存」オプションが表示されない問題を修正 ([#6398](https://github.com/nocobase/nocobase/pull/6398)) by @gchust
  - モバイルクライアントでの「テンプレートとして保存」動作が正しくない問題を修正 ([#6420](https://github.com/nocobase/nocobase/pull/6420)) by @gchust
  - 公開フォームアクセス時にログインが要求される問題を修正 ([#6258](https://github.com/nocobase/nocobase/pull/6258)) by @gchust
- **[Auth: API keys]** APIキー プラグインのロール一覧における結合解除を修正 ([#6432](https://github.com/nocobase/nocobase/pull/6432)) by @aaaaaajie
- **[Block: Multi-step form]** マルチステップフォームの送信ボタンがデフォルト時とハイライト時で同じ色になっている問題を修正 by @jiannx
- **[Workflow: Approval]** 「新規申請を行う」ポップアップダイアログのスタイル問題を修正 by @zhangzhonghe