### 🎉 新機能

* **[client-v2]** ページ、サブページ、ポップアップの Tab で連動ルール設定をサポートしました。([#10099](https://github.com/nocobase/nocobase/pull/10099)) by @zhangzhonghe
* **[AI employees]** JS ブロックから AI employee task を実行するための RunJS API を追加しました。([#10061](https://github.com/nocobase/nocobase/pull/10061)) by @cgyrock
* **[DingTalk]** DingTalk Stream モードで組織イベント同期をサポートしました。 by @chenzhizdt
* **[認証：LDAP]** LDAP ユーザーデータ同期ソースを追加し、オプションで AD 部門同期をサポートしました。 by @chenzhizdt

### 🚀 機能改善

* **[undefined]**
  * ファイル URL が安定した NocoBase アクセス URL を使用するようになり、ストレージ先へリダイレクトする前に権限チェックを実行できるようになりました。([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher
  * ファイル URL が安定した NocoBase アクセス URL を使用するようになり、ストレージ先へリダイレクトする前に権限チェックを実行できるようになりました。([#10103](https://github.com/nocobase/nocobase/pull/10103)) by @mytharcher
  * データソースドキュメントの構成、リンク、多言語ページを更新しました。([#10108](https://github.com/nocobase/nocobase/pull/10108)) by @hongboji
    参考：[データソース]()
* **[ai]** ナレッジベースドキュメントのアップロード解析時におけるメインプロセスのメモリ使用量を削減しました。([#10083](https://github.com/nocobase/nocobase/pull/10083)) by @cgyrock
* **[ワークフロー：手動処理ノード]** 新しいタスクセンターで手動タスクを表示し、処理のために旧バージョンページへユーザーを案内するようにしました。([#10085](https://github.com/nocobase/nocobase/pull/10085)) by @zhangzhonghe
* **[ファイルストレージ：S3 (Pro)]**
  * S3 Pro アップロードで、永続ファイル URL を含む作成済みファイルレコードを返すようになりました。 by @mytharcher
* **[RabbitMQ メッセージキューアダプター]** RabbitMQ アダプターの channel 管理とエラー復旧能力を強化しました。 by @sdp-ncd
* **[メール管理]** 部門単位でメールを表示する設定を V1 メール共通設定ページへ移動しました。また、サービスプロバイダー認証情報保存時にこの設定が上書きされないようにし、V2 共通設定をサービスプロバイダー設定より前に表示するようにしました。 by @jiannx

### 🐛 不具合修正

* **[client-v2]**
  * 本番ビルドで自動 SSO リダイレクト Provider が正しい認証順序を維持できない問題を修正しました。([#10100](https://github.com/nocobase/nocobase/pull/10100)) by @jiannx
  * Urdu ラベルを修正し、システム設定の言語一覧にウズベク語を独立した選択肢として追加しました。([#10090](https://github.com/nocobase/nocobase/pull/10090)) by @hongboji
  * ワークフローフィルターでワークフロー変数式を保持し、変数メタデータを解析できない場合に明確なエラーメッセージを表示するようにしました。([#10088](https://github.com/nocobase/nocobase/pull/10088)) by @Molunerfinn
  * iOS Chrome 上で v2 スキャン入力のカメラプレビュー表示が崩れる問題を修正しました。([#10081](https://github.com/nocobase/nocobase/pull/10081)) by @katherinehhh
  * v2 テーブルの固定列でクイック編集を有効にした際、他の列の内容が表示される問題を修正しました。([#10076](https://github.com/nocobase/nocobase/pull/10076)) by @katherinehhh
* **[ユーザー認証]**
  * v2 認証器管理ページで宣言生成に失敗する問題を修正しました。([#10095](https://github.com/nocobase/nocobase/pull/10095)) by @jiannx
  * v2 認証管理で認証器を編集した際、保存済み設定が正しく表示されない問題を修正しました。([#10091](https://github.com/nocobase/nocobase/pull/10091)) by @jiannx
* **[AI employees]**
  * AI employee のチャット入力欄にファイルを貼り付けて送信した際にエラーが発生する問題を修正しました。([#10106](https://github.com/nocobase/nocobase/pull/10106)) by @cgyrock
  * AI ツール呼び出し承認時に、決定更新前にメッセージ所属会話の権限を確認してしまう問題を修正しました。([#10077](https://github.com/nocobase/nocobase/pull/10077)) by @cgyrock
  * クライアントから渡されたファイルパスや URL を信頼しないよう、AI 添付ファイル処理ロジックを修正しました。([#10037](https://github.com/nocobase/nocobase/pull/10037)) by @cgyrock
* **[データテーブルフィールド：Markdown (Vditor)]** v1 Markdown のレンダリングおよび編集時における iframe クリーンアップ問題を修正しました。([#10096](https://github.com/nocobase/nocobase/pull/10096)) by @katherinehhh
* **[ワークフロー]**
  * ワークフローのシリアライズ時に関連データを追加すると、非表示フィールドが含まれる問題を修正しました。([#10086](https://github.com/nocobase/nocobase/pull/10086)) by @mytharcher
  * 実行済みワークフローを表示する際、ワークフローフォームコントロールが無効状態を正しく継承するようにしました。([#10079](https://github.com/nocobase/nocobase/pull/10079)) by @Molunerfinn
  * トリガー設定更新後にワークフローキャンバスを自動更新するようにしました。([#10068](https://github.com/nocobase/nocobase/pull/10068)) by @zhangzhonghe
* **[通知管理]** 通知受信者選択後にユーザー ID がテキストとして保存される問題を修正しました。([#10093](https://github.com/nocobase/nocobase/pull/10093)) by @zhangzhonghe
* **[UI レイアウト]**
  * Mobile 設定入口で現在のサブアプリケーションパスが失われる問題を修正しました。([#10078](https://github.com/nocobase/nocobase/pull/10078)) by @zhangzhonghe
  * サブアプリケーション内の Mobile 設定入口が誤ってメインアプリケーションへリダイレクトされる問題を修正しました。([#10075](https://github.com/nocobase/nocobase/pull/10075)) by @katherinehhh
* **[ワークフロー：JSON 変数マッピング]** JSON 変数マッピングノードでループスコープ変数を選択した際にエラーが発生する問題を修正しました。([#10094](https://github.com/nocobase/nocobase/pull/10094)) by @Molunerfinn
* **[ユーザーデータ同期]** 外部部門同期順序の問題を修正し、親部門が後から同期された場合でも既存の子部門が正しく親部門へ紐付くようにしました。([#10028](https://github.com/nocobase/nocobase/pull/10028)) by @chenzhizdt
* **[操作：一括編集]** V2 フォームに `process` フィールドが含まれる場合、Markdown エディターの初期化に失敗する問題を修正しました。([#10080](https://github.com/nocobase/nocobase/pull/10080)) by @katherinehhh
* **[検証：TOTP 認証器]** TOTP 認証器のバインドフローを修正し、一時設定用シークレットをバインド後に削除し、検証済みコードの再利用を防止しました。 by @jiannx
* **[データソース：External NocoBase]**
  * ワークフロー AI employees が外部 NocoBase データソースの添付ファイルを読み取れない問題を修正しました。 by @2013xile
  * S3 Pro アップロードを含む外部 NocoBase ファイルテーブルのファイルプレビュー、永続 URL 処理、アップロードルーティング問題を修正しました。 by @mytharcher
  * S3 Pro アップロードを含む外部 NocoBase ファイルテーブルのファイルプレビュー、永続 URL 処理、アップロードルーティング問題を修正しました。 by @mytharcher
* **[認証：SAML 2.0]** モダンクライアントで未認証ユーザーの SAML 自動ログインリダイレクトを修正し、元の遷移先パスを保持するようにしました。 by @jiannx
* **[ファイルストレージ：S3 (Pro)]** S3 互換ストレージのファイル URL で設定済みパスが欠落し、アップロード済み Logo や添付ファイルが 404 を返す問題を修正しました。 by @mytharcher
* **[認証：OIDC]** 本番ビルドで OIDC 自動ログインがリダイレクトされない問題を修正し、ログイン後も元のモダンクライアントパスを保持するようにしました。 by @jiannx
* **[ワークフロー：承認]**
  * 本番ビルド後、実行済みワークフローの承認タスクタイトルが編集可能なままになる問題を修正しました。 by @Molunerfinn
  * 承認ワークフロー手動実行ポップアップで、申請者フィールドの早期検証およびロール名の未翻訳問題を修正しました。 by @Molunerfinn
  * ワークフロー設定ポップアップ内のフォーム操作ボタンがクリックに反応する問題を修正しました。 by @zhangzhonghe
  * ワークフロー実行後にユーザーが操作画面と承認カードを確認できるようにしました。 by @zhangzhonghe
  * 一時スイッチが有効な場合、承認送信時のファイル関連付けでは現在ユーザーが作成したファイルのみ保持するようにしました。 by @mytharcher
  * 承認開始者画面の表示および操作に関する問題を修正しました。 by @zhangzhonghe
  * 承認申請フォームが空白になる問題、および操作ボタンの欠落・誤表示問題を修正しました。 by @zhangzhonghe
  * 承認および通知プラグイン有効時に V2 ページが開けない可能性がある問題を修正しました。 by @zhangzhonghe
  * 承認画面を V2 で利用できない場合に V1 ページへ案内するようにしました。 by @zhangzhonghe
* **[WeCom]** WeCom 通知チャネルで選択した認証器を保存できない問題を修正しました。 by @jiannx
