### 🚀 機能改善

- [部門] 部門テーブルと部門・ロール関連テーブルに、スキーマのみを移行するオプションを追加しました。これにより、移行先環境にある既存のレコードを保持できるようになりました。 ([#11343](https://github.com/nocobase/nocobase/pull/11343?utm_source=chatgpt.com)) by @zhouyanliang

### 🐛 不具合修正

* [client-v2]

  * 旧版および v2 クライアントで、画面幅が狭い状態でプロフィールやパスワード変更画面を開くと、上部のフローティングツールバーがフォームに重なってしまう問題を修正しました。 ([#11347](https://github.com/nocobase/nocobase/pull/11347?utm_source=chatgpt.com)) by @zhouyanliang
  * v2 のリレーションドロップダウンとカスケード選択で、文字列を返す数式フィールドをラベルに使用すると、一部のテキスト検索が機能しなくなる問題を修正しました。 ([#11370](https://github.com/nocobase/nocobase/pull/11370?utm_source=chatgpt.com)) by @hongboji
* [バックアップ管理] 大容量のバックアップファイルをダウンロードする際に、適切なフィードバックが表示されない問題を修正しました。短期間有効な認証情報を使用し、ブラウザから直接ダウンロードする方式に変更しました。 ([#11324](https://github.com/nocobase/nocobase/pull/11324?utm_source=chatgpt.com)) by @gchust
* [ファイルマネージャー]

  * v2 ファイルマネージャーで、JPEG2000 画像のデコードに必要なリソースが不足していたため、PDF のプレビューが空白になる問題を修正しました。 ([#11308](https://github.com/nocobase/nocobase/pull/11308?utm_source=chatgpt.com)) by @mytharcher
  * 添付ファイルを切り替えた場合や、プレビューを閉じて別のファイルを開いた場合でも、前のファイルの音声が再生され続ける問題を修正しました。 ([#11328](https://github.com/nocobase/nocobase/pull/11328?utm_source=chatgpt.com)) by @zhouyanliang
* [通知管理] ワークフローの通知ノードで、2 ページ目以降にある通知チャネルを検索・選択できない問題を修正しました。 ([#11317](https://github.com/nocobase/nocobase/pull/11317?utm_source=chatgpt.com)) by @zhouyanliang
* [データソース管理] 外部データソースのデータテーブル一覧で、同じフィールドに複数のフィルター条件を設定すると、データを取得できなくなる問題を修正しました。 ([#11306](https://github.com/nocobase/nocobase/pull/11306?utm_source=chatgpt.com)) by @zhouyanliang
* [ワークフロー] ワークフロー v2 のデータ作成ノードとデータ更新ノードで、パスワードフィールドへの値設定を構成できない問題を修正しました。 ([#11318](https://github.com/nocobase/nocobase/pull/11318?utm_source=chatgpt.com)) by @zhouyanliang
* [AIワーカー] AIワーカーが JavaScript ブロックの内容を読み取る際に、ツールの実行が中断されたというエラーメッセージが表示される問題を修正しました。 ([#11305](https://github.com/nocobase/nocobase/pull/11305?utm_source=chatgpt.com)) by @zhouyanliang
* [認証：API キー] システムの権限設定が「ロールの和集合のみ」の場合に、API キーが作成者の他のロールの権限まで取得してしまう問題を修正しました。API キーは常に、紐付けられたロールの権限とデータ範囲に従うようにしました。 ([#11316](https://github.com/nocobase/nocobase/pull/11316?utm_source=chatgpt.com)) by @zhouyanliang
