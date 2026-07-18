### 🎉 新機能

- **[client-v2]**

  - ページ、サブページ、ポップアップの Tab で連動ルールの設定をサポートしました。([#10099](https://github.com/nocobase/nocobase/pull/10099)) by @zhangzhonghe
  - legacy および modern ルート設定用の環境変数を追加しました。([#9891](https://github.com/nocobase/nocobase/pull/9891)) by @Molunerfinn
- **[AI employees]** JS ブロックから AI employee task を実行するための RunJS API を追加しました。([#10061](https://github.com/nocobase/nocobase/pull/10061)) by @cgyrock
- **[公開フォーム]** v1 公開フォームで v2 フォームの作成をサポートし、v1 フォームの作成を禁止しました。([#10045](https://github.com/nocobase/nocobase/pull/10045)) by @zhangzhonghe
- **[ブロック：コメント]**

  - コメントブロックの設定を改善し、データスコープ、デフォルトの並び順、ドロップダウンによるページサイズ選択、最終ページへの移動オプション、およびスカラーフィールドに基づく所属フィールド設定をサポートしました。([#9954](https://github.com/nocobase/nocobase/pull/9954)) by @jiannx
  - コメントブロックを追加しました。([#9916](https://github.com/nocobase/nocobase/pull/9916)) by @jiannx
- **[通知：メール]** ワークフロー通知ノードのクライアントを v2 に移行し、チャネル別の通知設定フォーム表示を復元しました。また、移行済みの通知設定が旧版ワークフロールートでも互換性を維持するようにしました。([#9817](https://github.com/nocobase/nocobase/pull/9817)) by @jiannx
- **[ワークフロー：メール送信ノード]** ワークフローのメール送信ノード設定に v2 クライアント対応を追加しました。([#9825](https://github.com/nocobase/nocobase/pull/9825)) by @jiannx
- **[ワークフロー]** ワークフロー設定ページを v2 クライアントに移行し、再利用可能なドラッグ可能カテゴリタブコンポーネントを `@nocobase/client-v2` に切り出しました。([#9645](https://github.com/nocobase/nocobase/pull/9645)) by @Molunerfinn
- **[ワークフロー：データベーストランザクションノード]** ワークフローのデータベーストランザクションノードに client-v2 実装を追加し、旧版クライアントとの互換入口を維持しました。 by @katherinehhh
- **[履歴]** レコード履歴プラグインに client v2 対応を追加しました。 by @jiannx
- **[ワークフロー：承認]** v2 ページに承認申請および承認待ちブロックを追加しました。 by @zhangzhonghe
- **[DingTalk]** DingTalk Stream モードで組織イベント同期をサポートしました。 by @chenzhizdt

### 🚀 機能改善

- **[undefined]**

  - データソースドキュメントの構成、リンク、多言語ページを更新しました。([#10108](https://github.com/nocobase/nocobase/pull/10108)) by @hongboji
    参考：[データソース](docs/docs/ja/data-sources/index.md)
  - データソースドキュメントの構成、リンク、多言語ページを更新しました。([#10108](https://github.com/nocobase/nocobase/pull/10108)) by @hongboji
    参考：[データソース](docs/docs/ja/data-sources/index.md)
  - ファイル URL が安定した NocoBase アクセス URL を使用するようになり、ストレージ先へリダイレクトする前に権限チェックを実行できるようになりました。([#10103](https://github.com/nocobase/nocobase/pull/10103)) by @mytharcher
  - ファイル URL が安定した NocoBase アクセス URL を使用するようになり、ストレージ先へリダイレクトする前に権限チェックを実行できるようになりました。([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher
  - ロシア語ドキュメントの翻訳を改善し、表現、可読性、用語の一貫性を向上しました。([#9816](https://github.com/nocobase/nocobase/pull/9816)) by @sembaev-a-a
  - AI ナレッジベースの検索機能と関連ドキュメントを改善しました。([#9765](https://github.com/nocobase/nocobase/pull/9765)) by @cgyrock
  - - ([#9754](https://github.com/nocobase/nocobase/pull/9754)) by @sembaev-a-a
- **[client-v2]**

  - Markdown Vditor を統一されたプラグイン型 Markdown エンジンへリファクタリングし、既存の Markdown ブロックおよび Vditor フィールドプラグイン向けの互換ブリッジを維持しました。([#9998](https://github.com/nocobase/nocobase/pull/9998)) by @katherinehhh
  - Markdown Vditor を統一されたプラグイン型 Markdown エンジンへリファクタリングし、既存の Markdown ブロックおよび Vditor フィールドプラグイン向けの互換ブリッジを維持しました。([#9998](https://github.com/nocobase/nocobase/pull/9998)) by @katherinehhh
- **[ワークフロー：手動処理ノード]** 新しいタスクセンターで手動タスクを表示し、処理のために旧版ページへ案内するようにしました。([#10085](https://github.com/nocobase/nocobase/pull/10085)) by @zhangzhonghe
- **[ワークフロー]**

  - ワークフロー v2 キャンバスで未対応のノードでも通常のノードカード操作を維持し、ノードタイプを「未対応」と表示するようにしました。([#10054](https://github.com/nocobase/nocobase/pull/10054)) by @mytharcher
  - ワークフロー v2 の作成・更新ノードにおけるフィールド値割り当て設定を簡素化し、選択済み変数の表示を改善するとともに、未使用の割り当てフォームモデルデータが生成されないようにしました。([#9887](https://github.com/nocobase/nocobase/pull/9887)) by @katherinehhh
  - ワークフロー v2 キャンバス拡張 API をエクスポートし、下流のワークフローノードプラグインで再利用できるようにしました。([#9834](https://github.com/nocobase/nocobase/pull/9834)) by @katherinehhh
  - ワークフロー出力ノードの設定を v2 に移行し、v2 ワークフロー結果ビューアーの文字列結果表示を旧版の動作に合わせました。([#9813](https://github.com/nocobase/nocobase/pull/9813)) by @Molunerfinn
  - ワークフローの終了ノードを v2 に移行しました。([#9795](https://github.com/nocobase/nocobase/pull/9795)) by @Molunerfinn
- **[AI employees]**

  - AI employees のツール設定、データクエリ制約、関連フィールドクエリ、および異常なツール呼び出し時の診断情報保持を改善しました。([#10042](https://github.com/nocobase/nocobase/pull/10042)) by @cgyrock
  - AI employees の Web 検索を最適化し、不要なモデル推論を減らすとともに、各 Provider の思考制御パラメーターをより適切に利用するようにしました。([#9996](https://github.com/nocobase/nocobase/pull/9996)) by @cgyrock
  - v2 画面から、廃止済みの AI employees Datasource 設定入口とコンテキスト選択入口を削除しました。([#9988](https://github.com/nocobase/nocobase/pull/9988)) by @cgyrock
  - AI employees プラグインを client-v2 に移行しました。([#9794](https://github.com/nocobase/nocobase/pull/9794)) by @cgyrock
- **[コレクション：SQL]** ユーザーからは見えない変更です。移行済みプラグイン向けに client-v2 のユニットテストカバレッジを追加しました。([#9967](https://github.com/nocobase/nocobase/pull/9967)) by @katherinehhh
- **[ブロック：コメント]**

  - コメント送信ボタンの設定を改善し、関連するコメントおよびユーザーフォーム送信の問題を修正しました。([#10002](https://github.com/nocobase/nocobase/pull/10002)) by @jiannx
  - 新しいコメントブロックプラグインを NocoBase のプリセットに追加し、旧コメントプラグインを非推奨としてマークしました。([#9936](https://github.com/nocobase/nocobase/pull/9936)) by @jiannx
- **[ユーザー]** ユーザープラグインの client-v2 テストカバレッジを拡充しました。([#9975](https://github.com/nocobase/nocobase/pull/9975)) by @jiannx
- **[ログ]** client v2 ランタイム向けにログ設定ページを追加しました。([#9933](https://github.com/nocobase/nocobase/pull/9933)) by @jiannx
- **[ワークフロー：集計クエリノード]** v2 ワークフローの更新ノードと集計クエリノードにおけるフィールド選択ロジックを改善し、集計クエリノードで関連コレクションを切り替えた際の異常を修正しました。([#9938](https://github.com/nocobase/nocobase/pull/9938)) by @katherinehhh
- **[ワークフロー：JavaScript ノード]**

  - v2 ワークフローのリクエストノードとメールノードの設定フィールドを調整し、レイアウトおよび添付ファイル変数選択の動作を旧版に合わせました。([#9952](https://github.com/nocobase/nocobase/pull/9952)) by @jiannx
  - JavaScript ワークフローノードを client-v2 に移行しました。([#9805](https://github.com/nocobase/nocobase/pull/9805)) by @jiannx
- **[ワークフロー：JSON 計算]** ワークフロー JSON 計算ノードの設定画面を v2 ワークフローキャンバスへ移行し、v1 キャンバスとの互換性を維持しました。([#9902](https://github.com/nocobase/nocobase/pull/9902)) by @mytharcher
- **[バックアップマネージャー]** `dataCategory` が `'runtime'` に設定されたコレクションを、バックアップから自動的に除外するようにしました。([#9804](https://github.com/nocobase/nocobase/pull/9804)) by @cgyrock
- **[ワークフロー：カスタムアクションイベント]** ワークフロートリガーおよびワークフロー連携設定を client-v2 に移行しました。対象には、アクショントリガー、カスタムアクショントリガー、リクエストインターセプトトリガー、および送信・更新アクションのワークフロー連携設定が含まれます。([#9845](https://github.com/nocobase/nocobase/pull/9845)) by @mytharcher
- **[ワークフロー：HTTP リクエストノード]** ワークフロー HTTP リクエストノードを client-v2 に移行しました。([#9806](https://github.com/nocobase/nocobase/pull/9806)) by @jiannx
- **[HTTP リクエスト暗号化]** HTTP リクエスト暗号化プラグインに v2 クライアント対応を追加し、v2 クライアントでもクエリパラメーターが引き続き暗号化されるようにしました。 by @jiannx
- **[ワークフロー：データベーストランザクションノード]** v2 ワークフローのデータベーストランザクションノードのレイアウトを改善し、分岐ラベルとコミットマーカーの間隔を調整しました。 by @katherinehhh
- **[AI：ナレッジベース]** AI ナレッジベース設定ページを v2 クライアントに移行し、ナレッジベースおよびベクトルストアページのレイアウトと読み込みに関する問題を修正しました。 by @cgyrock
- **[ファイルストレージ：S3 (Pro)]** S3 Pro アップロードで、永続ファイル URL を含む作成済みファイルレコードを返すようになりました。 by @mytharcher
- **[メール管理]** 部門単位のメール表示設定を V1 メール共通設定ページへ移動し、サービスプロバイダー認証情報保存時にこの設定が上書きされないようにしました。また、V2 共通設定をサービスプロバイダー設定より前に配置しました。 by @jiannx

### 🐛 不具合修正

- **[client-v2]**

  - Urdu ラベルを修正し、システム設定の言語一覧にウズベク語を独立した選択肢として追加しました。([#10090](https://github.com/nocobase/nocobase/pull/10090)) by @hongboji
  - 本番ビルドで自動 SSO リダイレクト Provider が正しい認証順序を維持できない問題を修正しました。([#10100](https://github.com/nocobase/nocobase/pull/10100)) by @jiannx
  - ワークフローフィルターでワークフロー変数式を保持し、変数メタデータを解析できない場合に明確なエラーメッセージを表示するようにしました。([#10088](https://github.com/nocobase/nocobase/pull/10088)) by @Molunerfinn
  - コレクションフィールド名が `nodeName` の場合に v2 ワークフロー値割り当てエディターでコンソールエラーが発生する問題を修正しました。([#10067](https://github.com/nocobase/nocobase/pull/10067)) by @katherinehhh
  - ワークフロー v2 変数エディターで、トリガー、フィルター条件、フィールド値割り当てフォーム間の変数カプセル表示、無効状態、演算子ラベル表示が一致しない問題を修正しました。([#10041](https://github.com/nocobase/nocobase/pull/10041)) by @Molunerfinn
  - 実行済み v2 ワークフローの読み取り専用状態でもフィールド値割り当てを変更できる問題を修正しました。([#10014](https://github.com/nocobase/nocobase/pull/10014)) by @katherinehhh
  - ワークフロー手動実行後に新バージョンが自動作成された際の遷移問題を修正し、旧版・新版の両方で正しいワークフローページが開くようにしました。([#9955](https://github.com/nocobase/nocobase/pull/9955)) by @Molunerfinn
- **[flow-engine]** 単一値変数入力欄で変数を選択した後も追加テキストを入力できる問題を修正しました。([#10050](https://github.com/nocobase/nocobase/pull/10050)) by @katherinehhh
- **[AI employees]** AI employee のチャット入力欄にファイルを貼り付けて送信した際にエラーが発生する問題を修正しました。([#10106](https://github.com/nocobase/nocobase/pull/10106)) by @cgyrock
- **[ユーザー認証]**

  - v2 認証器管理ページの宣言生成エラーを修正しました。([#10095](https://github.com/nocobase/nocobase/pull/10095)) by @jiannx
  - v2 認証管理で認証器を編集した際、保存済み設定が表示されない問題を修正しました。([#10091](https://github.com/nocobase/nocobase/pull/10091)) by @jiannx
- **[通知管理]**

  - 通知受信者を選択した後、ユーザー ID がテキストとして保存される問題を修正しました。([#10093](https://github.com/nocobase/nocobase/pull/10093)) by @zhangzhonghe
  - CC 設定に誤ったワークフロー変数が表示される問題を修正しました。([#9937](https://github.com/nocobase/nocobase/pull/9937)) by @zhangzhonghe
- **[ワークフロー：JSON 変数マッピング]** JSON 変数マッピングノードでループスコープ変数を選択した際にエラーが発生する問題を修正しました。([#10094](https://github.com/nocobase/nocobase/pull/10094)) by @Molunerfinn
- **[UI レイアウト]** Mobile 設定入口で現在のサブアプリケーションパスが失われる問題を修正しました。([#10078](https://github.com/nocobase/nocobase/pull/10078)) by @zhangzhonghe
- **[ワークフロー]**

  - 実行済みワークフローを表示する際、ワークフローフォームコントロールが無効状態を正しく継承するようにしました。([#10079](https://github.com/nocobase/nocobase/pull/10079)) by @Molunerfinn
  - トリガー設定更新後にワークフローキャンバスを自動更新するようにしました。([#10068](https://github.com/nocobase/nocobase/pull/10068)) by @zhangzhonghe
  - ワークフロー v2 の条件オペランドをデフォルトでは 1 行表示に保ち、選択した変数パスが長い場合には正しく折り返すように修正しました。([#10033](https://github.com/nocobase/nocobase/pull/10033)) by @Molunerfinn
  - workflow v2 タスクセンターの表示および詳細読み込みの問題を修正しました。([#10001](https://github.com/nocobase/nocobase/pull/10001)) by @zhangzhonghe
  - ワークフロー結果の文言が翻訳されていない問題と、CC 設定ポップアップが広すぎる問題を修正しました。([#9977](https://github.com/nocobase/nocobase/pull/9977)) by @zhangzhonghe
  - bundle をまたぐ環境で workflow キャンバスの Context が一致しない問題を修正し、旧版ワークフローページの分岐および一部の変数選択が正常に動作するようにしました。([#9951](https://github.com/nocobase/nocobase/pull/9951)) by @Molunerfinn
  - v2 ワークフローでアプリ内通知内容を設定できない問題を修正しました。([#9885](https://github.com/nocobase/nocobase/pull/9885)) by @zhangzhonghe
  - client v2 への移行に伴う一部の問題を修正しました。([#9929](https://github.com/nocobase/nocobase/pull/9929)) by @mytharcher
  - ワークフローコレクショントリガー手動実行時のデバウンス付きリモート検索を復元し、このセレクターの取得件数を v1 の 200 件取得動作に合わせました。([#9870](https://github.com/nocobase/nocobase/pull/9870)) by @Molunerfinn
  - ワークフロー v2 のノード追加メニューで、ワークフローおよび分岐ルールに従って利用不可のノードタイプが無効化されない問題を修正しました。([#9855](https://github.com/nocobase/nocobase/pull/9855)) by @mytharcher
- **[ワークフロー：遅延ノード]** 遅延ノードの時間入力を修正し、最小値未満の値を保存できないようにしました。([#10056](https://github.com/nocobase/nocobase/pull/10056)) by @Molunerfinn
- **[ワークフロー：集計クエリノード]** フィルター条件が空の場合も許可するよう検証ルールを修正しました。([#10053](https://github.com/nocobase/nocobase/pull/10053)) by @mytharcher
- **[公開フォーム]** UI Editor を閉じた後も公開フォームを設定できる問題を修正しました。([#10036](https://github.com/nocobase/nocobase/pull/10036)) by @zhangzhonghe
- **[ブロック：コメント]** 新しいコメントブロックのデフォルトアクション順序を調整しました。([#9976](https://github.com/nocobase/nocobase/pull/9976)) by @jiannx
- **[ワークフロー：メール送信ノード]** ワークフロー v2 テストで、ワークフロートリガーアクション登録に関する mock が不足しているため失敗する問題を修正しました。([#9863](https://github.com/nocobase/nocobase/pull/9863)) by @jiannx
- **[ワークフロー：JavaScript ノード]** 旧版ワークフロークライアントで JavaScript ノードの登録に失敗する問題を修正しました。([#9826](https://github.com/nocobase/nocobase/pull/9826)) by @jiannx
- **[ワークフロー：レスポンスメッセージ]** ワークフローのレスポンスメッセージノードを v2 キャンバスへ移行し、未対応のワークフロータイプでもこのノードを追加できる問題を修正しました。([#9830](https://github.com/nocobase/nocobase/pull/9830)) by @jiannx
- **[ファイルマネージャー]** 外部データソースの添付 URL フィールドでファイルをアップロードした際、API が 404 を返す問題を修正しました。([#9809](https://github.com/nocobase/nocobase/pull/9809)) by @2013xile
- **[検証：TOTP 認証器]** TOTP 認証器のバインドフローを修正し、一時設定用シークレットをバインド後に削除し、検証済みコードの再利用を防止しました。 by @jiannx
- **[認証：SAML 2.0]** モダンクライアントで未認証ユーザーの SAML 自動ログインリダイレクトを修正し、元の遷移先パスを保持するようにしました。 by @jiannx
- **[AI：ナレッジベース]** AI ナレッジベースワークフローのドキュメント作成ノードに上書きオプションを追加し、同じ識別子を持つ既存ドキュメントを置き換えられるようにしました。 by @cgyrock
- **[データソース：外部 NocoBase]** S3 Pro アップロードを含む外部 NocoBase ファイルテーブルのファイルプレビュー、永続 URL 処理、アップロードルーティング問題を修正しました。 by @mytharcher
- **[plugin-service-platform]**

  - サービスプラットフォームで、ライセンス済みプラグインをダウンロードできるように復元しました。 by @jiannx
  - サービスプラットフォームのプラグインダウンロード API を無効化しました。 by @jiannx
- **[ワークフロー：サブフロー]** サブフローノード設定の選択欄で、ワークフロータイトルによる検索が機能しない問題を修正しました。 by @mytharcher
- **[ファイルストレージ：S3 (Pro)]** S3 互換ストレージのファイル URL で設定済みパスが欠落し、アップロード済みの Logo や添付ファイルが 404 を返す問題を修正しました。 by @mytharcher
- **[認証：OIDC]** 本番ビルドで OIDC 自動ログインがリダイレクトされない問題を修正し、ログイン後も元のモダンクライアントパスを保持するようにしました。 by @jiannx
- **[ワークフロー：承認]**

  - 承認申請フォームが空白になる問題、および操作ボタンの欠落・誤表示問題を修正しました。 by @zhangzhonghe
  - 承認ワークフロー手動実行ポップアップで、申請者フィールドの早期検証およびロール名が未翻訳の問題を修正しました。 by @Molunerfinn
  - 本番ビルド後、実行済みワークフローの承認タスクタイトルが編集可能なままになる問題を修正しました。 by @Molunerfinn
  - ワークフロー実行後に、ユーザーが操作画面と承認カードを表示できるようにしました。 by @zhangzhonghe
  - ワークフロー設定ポップアップ内のフォーム操作ボタンがクリックに反応する問題を修正しました。 by @zhangzhonghe
  - 承認申請者画面の表示および操作に関する問題を修正しました。 by @zhangzhonghe
  - 承認フォームを開いた際に Apply new ドロワーを閉じるようにしました。 by @zhangzhonghe
  - 承認および通知プラグイン有効時に V2 ページが開けない可能性がある問題を修正しました。 by @zhangzhonghe
  - workflow v2 タスクセンターにおける承認タスクのフォームおよび操作の問題を修正しました。 by @zhangzhonghe
  - v2 承認サブテーブルが詳細画面で正しく表示されない問題を修正しました。 by @zhangzhonghe
  - v2 承認タスク詳細ポップアップに処理済み承認情報が表示されない問題を修正しました。 by @zhangzhonghe
  - 承認者画面でデフォルトの空ブロックが表示される問題、および固定承認者 ID の保存問題を修正しました。 by @zhangzhonghe
  - 承認コレクションがブロックのデータソース一覧に表示される問題を修正しました。 by @zhangzhonghe
  - client v2 への移行で発生した問題を修正しました。 by @mytharcher
  - 承認ワークフロー条件の設定時にエラーが発生する問題を修正しました。 by @zhangzhonghe
  - 承認画面を V2 で利用できない場合に V1 ページへ案内するようにしました。 by @zhangzhonghe
  - 承認者の並び順および旧版設定入口の表示に関する問題を修正しました。 by @zhangzhonghe
  - CC ノード設定を開いた際にエラーが発生する問題を修正しました。 by @zhangzhonghe
  - 承認タスクカードに承認データが表示されない問題を修正しました。 by @zhangzhonghe
- **[コレクションフィールド：手書き署名]** client-v2 の手書き署名フィールドにおけるファイルコレクションセレクターの多言語表示と選択肢フィルタリングの問題を修正しました。 by @katherinehhh
- **[WeCom]** WeCom 通知チャネルで選択した認証器を保存できない問題を修正しました。 by @jiannx
