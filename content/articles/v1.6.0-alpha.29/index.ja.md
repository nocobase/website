### 🎉 新機能

- **[client]** アクションの権限設定をサポート ([#6254](https://github.com/nocobase/nocobase/pull/6254)) by @katherinehhh
- **[Block: template]** ブロック向けに、継承メカニズムに基づくテンプレートサポートを提供する `Block: template` プラグインを追加 ([#5920](https://github.com/nocobase/nocobase/pull/5920)) by @gchust
- **[Workflow: Custom action event]** ワークフローアクションのトリガーがアクセス制御をサポート by @katherinehhh

### 🚀 改善

- **[client]**
  - React型定義をアップグレード ([#6278](https://github.com/nocobase/nocobase/pull/6278)) by @gchust
  - ユーザー個人センターの拡張と改善 ([#6213](https://github.com/nocobase/nocobase/pull/6213)) by @katherinehhh
- **[File manager]**
  - URLの長さを1024に拡大 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) by @mytharcher
  - ファイルプレビューURLを生成するバックエンドコードを追加 ([#6281](https://github.com/nocobase/nocobase/pull/6281)) by @jiannx
  - アップロード時のファイル名を、ランダムな名前から元の名前にランダムな接尾辞を付与したものに変更 ([#6217](https://github.com/nocobase/nocobase/pull/6217)) by @chenos
  - ファイルプレビューURLを生成するバックエンドコードを追加 ([#6223](https://github.com/nocobase/nocobase/pull/6223)) by @jiannx
  - ストレージタイプAPIを変更し、プラグインAPIを追加 ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher
  - ストレージタイプAPIを変更し、プラグインAPIを追加 ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher
- **[Block: Action panel]** モバイルスタイルを最適化 ([#6270](https://github.com/nocobase/nocobase/pull/6270)) by @zhangzhonghe
- **[Workflow]** ワークフローカンバス上のノードカードからノードIDを非表示 ([#6251](https://github.com/nocobase/nocobase/pull/6251)) by @mytharcher
- **[File storage: S3(Pro)]**
  - メインリポジトリに基づいてストレージAPIを調整 by @mytharcher
  - thumbnailRuleオプション設定をサポート by @jiannx
- **[Backup manager]** 一部プラグインが欠落しているアプリケーションでもバックアップを復元可能にする by @gchust

### 🐛 バグ修正

- **[devtools]** req.ipがundefinedでない場合にのみX-Forwarded-Forヘッダーを設定 ([#6320](https://github.com/nocobase/nocobase/pull/6320)) by @sheldon66
- **[client]**
  - メニューをドラッグ後、位置が正しく表示されない問題を修正 ([#6315](https://github.com/nocobase/nocobase/pull/6315)) by @zhangzhonghe
  - コメントコレクションがない状態でコメントブロック作成時に発生するエラーを修正 ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh
  - ツリーブロックのノードをクリックした際に発生するエラーを修正 ([#6314](https://github.com/nocobase/nocobase/pull/6314)) by @zhangzhonghe
  - 左側メニュークリック後にサブページが異常に閉じられる問題を修正 ([#6305](https://github.com/nocobase/nocobase/pull/6305)) by @zhangzhonghe
  - 式の値が空の場合にフィールド値がクリアされるのを防止 ([#6300](https://github.com/nocobase/nocobase/pull/6300)) by @zhangzhonghe
  - リッチテキストフィールドコンポーネントが完全にクリアできない問題を修正 ([#6287](https://github.com/nocobase/nocobase/pull/6287)) by @katherinehhh
  - ページをグループに移動できない問題を修正 ([#6289](https://github.com/nocobase/nocobase/pull/6289)) by @zhangzhonghe
  - CurrentUserProviderでの認証エラーをスキップ ([#6252](https://github.com/nocobase/nocobase/pull/6252)) by @sheldon66
  - 1つずつアップロード時にファイルが抜け落ちる問題を修正 ([#6260](https://github.com/nocobase/nocobase/pull/6260)) by @mytharcher
  - メールチャネル設定フォームの入力でHTMLタグの文字が誤って処理される問題を修正 ([#6221](https://github.com/nocobase/nocobase/pull/6221)) by @sheldon66
  - 複数ファイルアップロード後にファイルが消失する問題を修正 ([#6247](https://github.com/nocobase/nocobase/pull/6247)) by @mytharcher
  - フィルターフォームフィールドのピッカーフォーマット不一致の問題を修正 ([#6234](https://github.com/nocobase/nocobase/pull/6234)) by @katherinehhh
  - 無効状態でも<Variable.TextArea />コンポーネントを正しく表示 ([#6197](https://github.com/nocobase/nocobase/pull/6197)) by @mytharcher
- **[create-nocobase-app]** `create-nocobase-app`実行後、`yarn dev`でウェブクライアントにエラーが発生する問題を修正 ([#6299](https://github.com/nocobase/nocobase/pull/6299)) by @gchust
- **[auth]** トークンがAPIキーの場合、ユーザー認証をスキップ ([#6291](https://github.com/nocobase/nocobase/pull/6291)) by @sheldon66
- **[cli]** nocobase upgradeコマンドの内部ロジックを改善 ([#6280](https://github.com/nocobase/nocobase/pull/6280)) by @chenos
- **[File manager]**
  - 継承コレクションのマイグレーションを修正 ([#6310](https://github.com/nocobase/nocobase/pull/6310)) by @mytharcher
  - マイグレーションを修正しテストケースを追加 ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher
  - マイグレーションを修正しテストケースを追加 ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher
  - ファイルコレクションの`path`カラム型を修正 ([#6294](https://github.com/nocobase/nocobase/pull/6294)) by @mytharcher
  - AWS SDKのバージョンをアップグレードしてMinIOアップロードバグを修正 ([#6253](https://github.com/nocobase/nocobase/pull/6253)) by @mytharcher
- **[Block: template]** 公開フォームアクセス時にログインを必須とする ([#6258](https://github.com/nocobase/nocobase/pull/6258)) by @gchust
- **[Access control]** コレクション権限で多対多フィールドをデータ範囲として使用した際に誤ったデータレコードが返される問題を修正 ([#6304](https://github.com/nocobase/nocobase/pull/6304)) by @2013xile
- **[Block: Kanban]** ポップアップレコード変数を用いる看板ブロックでのデータフィルタリング不具合を修正 ([#6290](https://github.com/nocobase/nocobase/pull/6290)) by @katherinehhh
- **[Collection field: Sequence]** 読み取り専用モード時にシーケンスフィールドが無効化されない問題を修正 ([#6274](https://github.com/nocobase/nocobase/pull/6274)) by @mytharcher
- **[Workflow: test kit]** 新機能に基づくE2Eテストケースを修正 ([#6296](https://github.com/nocobase/nocobase/pull/6296)) by @mytharcher
- **[Public forms]** 公開フォームでの認証チェックをスキップ ([#6284](https://github.com/nocobase/nocobase/pull/6284)) by @chenos
- **[Authentication]** AdminProviderから不要なNavigateIfNotSignInラッパーを削除 ([#6268](https://github.com/nocobase/nocobase/pull/6268)) by @sheldon66
- **[Workflow]**
  - ワークフローカンバスのスタイル詳細を修正 ([#6240](https://github.com/nocobase/nocobase/pull/6240)) by @mytharcher
  - パスワード変更時にワークフローをトリガーする機能を追加 ([#6248](https://github.com/nocobase/nocobase/pull/6248)) by @mytharcher
- **[Workflow: Custom action event]**
  - ビルドエラーを修正 by @mytharcher
  - E2Eテストケースを修正 by @mytharcher
  - ワークフロー初期化トリガーの不具合を修正 by @mytharcher
  - ビルドエラーを修正 by @mytharcher
- **[Workflow: Pre-action event]** レスポンスメッセージノードでエラーメッセージが表示されない問題を修正 by @mytharcher
- **[Workflow: JavaScript]** NocoBaseモジュールのrequireをサポート by @mytharcher
- **[Email manager]** 公開メールメッセージコレクションおよびメールインターフェースによるモーダルデータ消失を修正 by @jiannx
- **[File storage: S3(Pro)]**
  - AWS SDKのバージョンをアップグレードしてMinIOアップロードバグを修正 by @mytharcher
  - forcePathStyleForAccessのデフォルト値をvirtualに設定 by @jiannx
- **[Block: Multi-step form]** ドラッグ後の項目並び順エラーを修正 by @jiannx
- **[Block: Tree]** ツリーブロックのノードクリック時に発生するエラーを修正 by @zhangzhonghe
- **[Backup manager]** ローカルバックアップ復元ダイアログの削除アイコンが動作しない問題を修正 by @gchust
- **[Workflow: Approval]**
  - バージョン番号の関係でマイグレーションが実行されない問題を修正 by @mytharcher
  - 新機能に基づくE2Eテストケースを修正 by @mytharcher