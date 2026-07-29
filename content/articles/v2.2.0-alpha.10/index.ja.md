### 🎉 新機能

* **[Web クライアント]** アプリケーションの言語リソースについて、要求された名前空間のみを返すようにし、不要な言語データを削減しました。 ([#10175](https://github.com/nocobase/nocobase/pull/10175)) by @2013xile
* **[AI 従業員]** JS ブロックでフロントエンド AI ツールを登録できるようにしました。 ([#10121](https://github.com/nocobase/nocobase/pull/10121)) by @2013xile
* **[ワークフロー：承認]**
  * v2 クライアントの承認開始一覧に利用ガイドを追加し、開始可能な承認をカード形式で選択できるようにしました。 by @mytharcher

### 🚀 機能改善

* **[client-v2]**
  * v2 の QR コードおよびバーコードのスキャン認識、カメラのライフサイクル安全性、レスポンシブプレビューを改善しました。 ([#10145](https://github.com/nocobase/nocobase/pull/10145)) by @katherinehhh
  * システム設定で選択できる言語にミャンマー語（`<span>my-MM</span>`）を追加しました。 ([#10131](https://github.com/nocobase/nocobase/pull/10131)) by @hongboji
* **[client]** 旧版のシステム設定にある言語セレクターへミャンマー語（`<span>my-MM</span>`）を追加しました。 ([#10153](https://github.com/nocobase/nocobase/pull/10153)) by @hongboji
* **[ワークフロー]**
  * 開始、再開、再実行タスクをイベントキューに永続化し、ワークフローの pending タスク処理を改善しました。 ([#9846](https://github.com/nocobase/nocobase/pull/9846)) by @mytharcher
* **[ファイルマネージャー]** 元のファイル URL の返却とファイル URL の公開アクセスを個別に制御できるストレージ設定を追加しました。 ([#10160](https://github.com/nocobase/nocobase/pull/10160)) by @mytharcher
* **[AI 従業員]** AI 従業員のモデル設定が保存されない問題、無効化された AI 従業員が会話を作成できる問題、モバイルのチャットボックスレイアウトの問題を修正しました。 ([#10120](https://github.com/nocobase/nocobase/pull/10120)) by @cgyrock
* **[ワークフロー：サブフロー]** ワークフローエンジンのリファクタリングに伴い、待機キューの処理戦略を調整しました。 by @mytharcher
* **[ファイルストレージ：S3 (Pro)]** 元の URL、ファイル URL の公開アクセス、署名なし URL を個別に制御できる S3 Pro 設定を追加しました。 by @mytharcher
* **[ワークフロー：承認]**
  * 承認開始一覧に利用ガイドを追加し、開始可能な承認をカード形式で選択できるようにしました。 by @mytharcher
  * 承認タイムラインのステータスバッジ、時刻情報、ユーザーアバター、レスポンシブレイアウト、複数回の申請間の接続表示を改善しました。 by @mytharcher
  * 承認通知チャネルをタイトルでリモート検索できるようにしました。 by @mytharcher

### 🐛 不具合修正

* **[ドキュメント]** ドキュメント内の `<span>PLUGIN_PACKAGE_PREFIX</span>` の例を修正し、プリセットプラグインで `<span>@nocobase/preset-</span>` プレフィックスを使用するようにしました。 ([#10179](https://github.com/nocobase/nocobase/pull/10179)) by @hongboji
* **[flow-engine]**
  * レコード単位およびフィールド単位の更新権限に応じて、v2 テーブルのクイック編集の表示が制御されない問題を修正しました。 ([#10182](https://github.com/nocobase/nocobase/pull/10182)) by @katherinehhh
  * 簡体字中国語の使用時に、二次確認設定のデフォルトテキストが翻訳されていない問題を修正しました。 ([#10149](https://github.com/nocobase/nocobase/pull/10149)) by @mytharcher
  * v2 のブロック設定ドロップダウンで、現在のトリガーボタンをクリックすると意図せず閉じる問題を修正しました。 ([#10143](https://github.com/nocobase/nocobase/pull/10143)) by @katherinehhh
  * モバイルのポップアップが画面外にはみ出し、閉じるボタンを隠す問題を修正しました。 ([#10118](https://github.com/nocobase/nocobase/pull/10118)) by @zhangzhonghe
  * 検索中にブロック追加メニューが突然消える問題を修正しました。 ([#10097](https://github.com/nocobase/nocobase/pull/10097)) by @gchust
* **[ai]** パスワードで保護された PDF に対する明確なエラー表示とタイムアウト処理を追加し、ドキュメント読み込みの信頼性を改善しました。 ([#10172](https://github.com/nocobase/nocobase/pull/10172)) by @cgyrock
* **[client-v2]**
  * `<span>/v/</span>` ブランチでサポートされていないページおよび存在しないページのエラーメッセージを改善しました。 ([#10159](https://github.com/nocobase/nocobase/pull/10159)) by @zhangzhonghe
  * v2 の日付フィールドの範囲制限で RunJS の値が反映されない問題を修正しました。 ([#10157](https://github.com/nocobase/nocobase/pull/10157)) by @katherinehhh
  * 連動更新またはページの再読み込み後に、v2 テーブルの操作タイトルが以前のタイトルで上書きされる問題を修正しました。 ([#10140](https://github.com/nocobase/nocobase/pull/10140)) by @katherinehhh
  * ポップアップ内のサブテーブルフォームで親レコードのデータ範囲を使用した際、関連フィールドの選択値がクリアされ、必須入力チェックが誤って実行される問題を修正しました。 ([#10146](https://github.com/nocobase/nocobase/pull/10146)) by @katherinehhh
  * v2 クライアントのレコード選択ポップアップで、新規レコード作成後に一覧が更新されない問題を修正しました。 ([#10142](https://github.com/nocobase/nocobase/pull/10142)) by @katherinehhh
  * JS ブロックをカード形式で表示した際に、全高および指定した高さの設定が反映されない問題を修正しました。 ([#10126](https://github.com/nocobase/nocobase/pull/10126)) by @gchust
  * 承認ページを読み込めなくなる可能性があるエラーを修正しました。 ([#10116](https://github.com/nocobase/nocobase/pull/10116)) by @zhangzhonghe
  * ページのタブを有効化した直後に名前を変更すると、ルート状態が不整合になる可能性がある問題を修正しました。 ([#10117](https://github.com/nocobase/nocobase/pull/10117)) by @zhangzhonghe
  * 日付フィルターのデフォルト値が単一の日付に変換される問題を修正しました。 ([#9854](https://github.com/nocobase/nocobase/pull/9854)) by @zhangzhonghe
  * デバイスタイプのルールによってモバイルメニューが誤って非表示になる問題を修正しました。 ([#10123](https://github.com/nocobase/nocobase/pull/10123)) by @zhangzhonghe
  * Markdown の H2 見出しに適用されていた不要な枠線と影のスタイルを削除しました。 ([#10107](https://github.com/nocobase/nocobase/pull/10107)) by @katherinehhh
* **[utils]** サーバー側からの外部リクエストのリダイレクト先にも `<span>SERVER_REQUEST_WHITELIST</span>` が適用されるようにしました。 ([#10109](https://github.com/nocobase/nocobase/pull/10109)) by @mytharcher
  参考：[環境変数](https://docs.nocobase.com/ja/get-started/installation/env#server_request_whitelist)
* **[resourcer]** アクション前イベントと承認の保存前モードを同時に使用した際、アクション前イベントが実行されないことがある問題を修正しました。 ([#10119](https://github.com/nocobase/nocobase/pull/10119)) by @mytharcher
* **[database]** データベースビューのメタデータを読み込む際の SQL インジェクションリスクを修正しました。 ([#10115](https://github.com/nocobase/nocobase/pull/10115)) by @2013xile
* **[server]** アップロードされた XML などのアクティブコンテンツファイルが、アプリケーションと同一オリジンでスクリプトを実行することを防止しました。 ([#10104](https://github.com/nocobase/nocobase/pull/10104)) by @mytharcher
* **[バックアップマネージャー]**
  * バックアッププラグインのフロントエンドテストの安定性と正確性を改善しました。 ([#10184](https://github.com/nocobase/nocobase/pull/10184)) by @cgyrock
  * v2 クライアントでバックアップマネージャーの復元リクエストが失敗した際、エラーが画面に表示されない問題を修正しました。 ([#10158](https://github.com/nocobase/nocobase/pull/10158)) by @katherinehhh
* **[AI 従業員]**
  * AI 従業員のワークフローノードにある Operator 変数セレクターで階層化された変数を展開できない問題を修正し、必須フィールドから `<span>Null</span>` オプションを削除しました。 ([#10167](https://github.com/nocobase/nocobase/pull/10167)) by @cgyrock
  * AI フォームのコンテキストでフォーム項目のカスタムラベルが使用されない問題を修正しました。 ([#10168](https://github.com/nocobase/nocobase/pull/10168)) by @cgyrock
  * フロントエンドツールが実行時承認を使用せず、会話内で確認を求める問題を修正しました。 ([#10166](https://github.com/nocobase/nocobase/pull/10166)) by @2013xile
  * 既存の会話から新しい会話を開始した際に、AI 従業員のショートカットからブロックコンテキストが失われる問題を修正しました。 ([#10169](https://github.com/nocobase/nocobase/pull/10169)) by @cgyrock
  * Nathan が形式に誤りのあるコードパッチや変更を含まないパッチを、適用成功として報告する問題を修正しました。 ([#10174](https://github.com/nocobase/nocobase/pull/10174)) by @2013xile
* **[通知：アプリ内メッセージ]** アプリ内メッセージのテンプレートフォームに、ページから提供された変数ではなくワークフローキャンバスの変数が表示される問題を修正しました。 ([#10180](https://github.com/nocobase/nocobase/pull/10180)) by @Molunerfinn
* **[ユーザー認証]**
  * カスタムドメインを使用するサブアプリケーションで、SSO ログイン後のリダイレクト先が正しくない問題を修正しました。 ([#10170](https://github.com/nocobase/nocobase/pull/10170)) by @2013xile
  * Redis キャッシュを有効にしている場合、アプリケーション終了時にデータベース接続エラーが断続的に発生する問題を修正しました。 ([#10151](https://github.com/nocobase/nocobase/pull/10151)) by @mytharcher
* **[コレクションフィールド：シーケンス]** v2 の自動採番ルールで入力値が保存されない問題と、固定テキストを入力した後も必須エラーが表示される問題を修正しました。 ([#10156](https://github.com/nocobase/nocobase/pull/10156)) by @katherinehhh
* **[ブロック：カンバン]** カレンダーおよびカンバンブロックでコピーしたポップアップテンプレートを使用した際、テンプレートが反映されない、または誤ってクリアされる問題を修正しました。 ([#9856](https://github.com/nocobase/nocobase/pull/9856)) by @jiannx
* **[変数とシークレット]** v2 の変数とシークレットの一括インポートにおける検証メッセージと、Type フィルターが機能しない問題を修正しました。 ([#10154](https://github.com/nocobase/nocobase/pull/10154)) by @katherinehhh
* **[ワークフロー]** 永続ファイル URL、添付ファイルのサムネイル、プレビューのダウンロード、ローカルストレージのセキュリティレスポンスヘッダーに関する回帰テストのカバレッジを改善しました。 ([#10148](https://github.com/nocobase/nocobase/pull/10148)) by @mytharcher
* **[カレンダー]** v2 カレンダーで多数の予定を表示した際にポップオーバーがページ外にはみ出す問題を、スクロールバーを追加して修正しました。 ([#10138](https://github.com/nocobase/nocobase/pull/10138)) by @katherinehhh
* **[アプリ SSO]** サブアプリケーションのサーバーから公開 Issuer にアクセスできない場合、アプリ SSO に失敗する問題を修正しました。 by @2013xile
* **[AI：ナレッジベース]** より明確な PDF エラー、アップロードサイズの検証、タイムアウト保護、セグメント一覧の正しいページネーションを追加し、AI ナレッジベースのドキュメント処理を改善しました。 by @cgyrock
* **[マルチスペース]** アカウント切り替え時に、認証復元リクエストへ以前のスペースヘッダーが含まれることでログインに失敗する問題を修正しました。 by @jiannx
* **[移行管理]** v2 の移行エラーメッセージを改善し、移行ルールの重複名を禁止するとともに、環境チェックモーダルのオーバーフローを修正しました。 by @katherinehhh
* **[認証：OIDC]** サブアプリケーションのカスタムドメイン経由で OIDC ログインした後、リダイレクト先が正しくない問題を修正しました。 by @2013xile
* **[ワークフロー：承認]**
  * 承認メッセージテンプレートで提供される一部のシステム変数が空でレンダリングされる問題を修正しました。 by @Molunerfinn
  * 制限付き承認者が元の申請内容に含まれる権限のないフィールドを閲覧できないようにしました。 by @zhangzhonghe
  * 差し戻し操作が有効になっていない場合でも、承認者が申請を差し戻せる問題を修正しました。 by @zhangzhonghe
  * UI Editor が無効な場合、承認設定にフィールドテンプレートが表示されない問題を修正しました。 by @zhangzhonghe
  * UI Editor が無効な場合、承認画面の設定入口を非表示にしました。 by @zhangzhonghe
  * 承認タスクの詳細を直接開いた際に、エラーが発生することがある問題を修正しました。 by @zhangzhonghe
  * 承認送信時のメッセージがアクション前イベントのメッセージを上書きする問題を修正しました。 by @mytharcher
* **[コレクションフィールド：署名]** client-v2 の署名フィールドにあるファイルコレクションセレクターの多言語表示とオプションフィルタリングを修正しました。 by @katherinehhh
* **[DingTalk]** v2 のチャネルフォームから DingTalk 通知チャネルを保存した際、選択した認証器が失われる問題を修正しました。 by @jiannx
