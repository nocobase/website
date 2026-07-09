### 🎉 新機能

* **[AIワーカー]** 使用状況を集計しやすくするため、構造化された AI 使用記録を追加しました。 ([#10004](https://github.com/nocobase/nocobase/pull/10004)) by @2013xile
* **[AIワーカー]** LLM プロバイダーとして OrcaRouter を追加しました。([#10003](https://github.com/nocobase/nocobase/pull/10003)) by

### 🚀 機能改善

* **[ワークフロー]** 条件ノードから、基本演算エンジンの算術演算子を削除しました。 ([#10019](https://github.com/nocobase/nocobase/pull/10019)) by @mytharcher
* **[データ可視化]** チャートイベントスクリプトを改善し、カスタムイベントハンドラーを安全にクリーンアップできるようにしました。 ([#10034](https://github.com/nocobase/nocobase/pull/10034)) by @2013xile
* **[データソース管理]** v2 メインデータソースの新規データテーブル作成メニューで、廃止済みのデータテーブルテンプレートを非表示にしました。 ([#10009](https://github.com/nocobase/nocobase/pull/10009)) by @katherinehhh

### 🐛 不具合修正

* **[client-v2]**
  * フィルターフォームのリレーションフィールドで、デフォルト演算子の設定が表示される問題を修正しました。 ([#10025](https://github.com/nocobase/nocobase/pull/10025)) by @zhangzhonghe
  * モバイル端末で、テーブルのクイック編集とフィールド選択モーダルの下部余白に関する問題を修正しました。 ([#10020](https://github.com/nocobase/nocobase/pull/10020)) by @zhangzhonghe
  * フィルターフォームのリレーションフィールドにデフォルト値を設定した後、値をクリアできない問題を修正しました。 ([#10022](https://github.com/nocobase/nocobase/pull/10022)) by @gchust
  * 実行時編集モーダルでレコードを切り替えた際、連動フィールドの状態が残ってしまう問題を修正しました。 ([#10010](https://github.com/nocobase/nocobase/pull/10010)) by @katherinehhh
  * ページ切り替え時に、クイック編集でドロップダウンの選択肢を切り替えられない場合がある問題を修正しました。 ([#10007](https://github.com/nocobase/nocobase/pull/10007)) by @gchust
  * 本番環境における Vditor の静的リソース読み込みパスを修正しました。実際に有効な webpack public path に基づいて、プラグインの CDN パスを解決するように変更しました。 ([#10008](https://github.com/nocobase/nocobase/pull/10008)) by @chenos
* **[cli]** NocoBase CLI におけるイメージリポジトリのフォールバック、内蔵データベースイメージ、環境情報の表示、プロンプトのデフォルト値初期化に関する問題を修正しました。 ([#10027](https://github.com/nocobase/nocobase/pull/10027)) by @chenos
* **[flow-engine]** 設定モードを切り替える際に、ポップアップ内の設定が一致しない問題を修正しました。 ([#10005](https://github.com/nocobase/nocobase/pull/10005)) by @gchust
* **[データ可視化]** チャートの再レンダリング後、クリック操作が効かなくなる場合がある問題を修正しました。 ([#10031](https://github.com/nocobase/nocobase/pull/10031)) by @2013xile
* **[AIワーカー]** V2 公開フォームページで、不要なログイン状態リクエストが発生する問題を修正しました。 ([#10013](https://github.com/nocobase/nocobase/pull/10013)) by @zhangzhonghe
* **[ユーザー認証]** パスワードリセットリンクを開いた後、ログインページに遷移してしまう問題を修正しました。 ([#10006](https://github.com/nocobase/nocobase/pull/10006)) by @zhangzhonghe
* **[データソース管理]** V2 データテーブルの新規フィールド追加メニューで、旧 Attachment フィールドのインターフェースを非表示にしました。 ([#10018](https://github.com/nocobase/nocobase/pull/10018)) by @katherinehhh
* **[ファイルマネージャー]**
  * ファイルアップロード時に、ストレージの MIME type ルールで明示的に許可されていないアクティブコンテンツのファイル名を拒否するようにしました。 ([#10021](https://github.com/nocobase/nocobase/pull/10021)) by @mytharcher
    参考ドキュメント：[ローカルストレージ](https://docs.nocobase.com/cn/file-manager/storage/local), [セキュリティガイド](https://docs.nocobase.com/cn/security/guide)
  * v2 データテーブル管理で Attachment フィールドのインターフェースが欠落している問題を修正しました。また、公開フォームのファイルリレーションフィールドで画像をアップロードする際の事前チェック時の権限問題も修正しました。 ([#10012](https://github.com/nocobase/nocobase/pull/10012)) by @katherinehhh
* **[NocoBase 埋め込み]** NocoBase ページを埋め込む際のトークン汚染問題を修正しました。 ([#9948](https://github.com/nocobase/nocobase/pull/9948)) by @gchust
* **[データソース：外部 MariaDB]** MySQL、MSSQL、MariaDB の外部データソース設定で、Add all collections を切り替えられない問題を修正しました。 by @katherinehhh
* **[マイグレーション管理]** マイグレーション後、アプリが修復画面で止まる可能性がある問題を修正しました。 by @2013xile
* **[アプリケーションスーパーバイザー]** 独立した JWT 鍵を有効にした後も、サブアプリが主アプリのトークンを受け入れてしまう問題を修正しました。 by @2013xile
