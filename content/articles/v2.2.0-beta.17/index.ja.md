### 🎉 新機能

* **[client-v2]** V2 フィールド値エディターに Date 変数を追加し、日付以外のフィールドもフォーマットして出力できるようにしました。 ([#10289](https://github.com/nocobase/nocobase/pull/10289)) by @katherinehhh
* **[AIワーカー]**
  * AIワーカー設定ページで、プラグインが提供する Skill を各 AIワーカーに割り当てられるようにしました。 ([#10237](https://github.com/nocobase/nocobase/pull/10237)) by @cgyrock
  * LLM サービスの CLI コマンドから設定 UI を開けるようにし、サービスの新規作成時にはプロバイダーがあらかじめ選択されるようにしました。 ([#10210](https://github.com/nocobase/nocobase/pull/10210)) by @cgyrock
* **[マルチスペース]** デフォルトスペースを設定できるようにし、新規作成されたユーザーが選択済みのデフォルトスペースへ自動的に参加するようにしました。 by @jiannx
* **[AI: ナレッジベース]** CLI コマンドからベクトルデータベースの作成・編集 UI を開けるようにし、新規作成時にはプロバイダーがあらかじめ選択されるようにしました。 by @cgyrock

### 🚀 機能改善

* **[undefined]** JavaScript Worker のデフォルトの同時実行動作と、同時実行数の上限を設定する必要があるケースを明確にしました。 ([#10317](https://github.com/nocobase/nocobase/pull/10317)) by @mytharcher
  参考ドキュメント：[JavaScript ノード](https://docs.nocobase.com/cn/workflow/nodes/javascript)
* **[ワークフロー：JavaScript ノード]** JavaScript ワークフローノードで非同期 Worker の実行をキューで処理するようにし、単一プロセス内の Worker 同時実行数を制限することで、リソース使用量のピークを抑えるようにしました。 ([#10280](https://github.com/nocobase/nocobase/pull/10280)) by @mytharcher
* **[操作：レコードエクスポート]** v2 のインポートボタンとエクスポートボタンで、フィールド設定を検索できるようにしました。 ([#10261](https://github.com/nocobase/nocobase/pull/10261)) by @katherinehhh
* **[操作：一括更新]** v2 のレコード更新および一括更新操作で、送信成功後のメッセージ、閉じる動作、リダイレクト動作を設定できるようにしました。 ([#10278](https://github.com/nocobase/nocobase/pull/10278)) by @katherinehhh
* **[ワークフロー：HTTP リクエストノード]** 不安定だったテストケースを修正しました。 ([#10246](https://github.com/nocobase/nocobase/pull/10246)) by @mytharcher
* **[ワークフロー]** ワークフローの作成・更新ノードで文字列フィールドやテキストフィールドに値を設定する際、テキストと変数を連結して使用できるようにしました。 ([#10238](https://github.com/nocobase/nocobase/pull/10238)) by @mytharcher
* **[操作：レコードエクスポート Pro]** v2 のインポート Pro ボタンとエクスポート Pro ボタンで、フィールド設定を検索できるようにしました。 by @katherinehhh
* **[AI: ナレッジベース]** ベクトルデータベース一覧のカードスタイルを、他の設定テーブルと統一しました。 by @cgyrock

### 🐛 不具合修正

* **[client-v2]**
  * カンバン列からレコードをクイック作成した際、選択中のグループ値が引き継がれない問題を修正しました。 ([#10321](https://github.com/nocobase/nocobase/pull/10321)) by @jiannx
  * v2 のポップアップ編集サブテーブルで、レコード追加・編集モーダル内の `Current popup` 親レコード変数が欠落する、または正しい値を取得できない問題を修正しました。 ([#10292](https://github.com/nocobase/nocobase/pull/10292)) by @katherinehhh
  * サブテーブルのリレーションフィールドに値を設定する際、親項目の変数が誤った階層を参照する問題を修正しました。 ([#10249](https://github.com/nocobase/nocobase/pull/10249)) by @gchust
  * モバイル端末の選択リストで、キャンセルボタンの表示言語が一致しない問題を修正しました。 ([#10297](https://github.com/nocobase/nocobase/pull/10297)) by @zhangzhonghe
  * v2 JS 列のイベントフローにおいて、トリガー条件で「現在のレコード」変数を使用できない問題を修正しました。 ([#10279](https://github.com/nocobase/nocobase/pull/10279)) by @katherinehhh
* **[database]**
  * アプリケーション再起動後、マイグレーションパッケージに多対多の中間テーブルデータが含まれなくなる問題を修正しました。 ([#10306](https://github.com/nocobase/nocobase/pull/10306)) by @cgyrock
  * MSSQL で複数値リレーションを絞り込み、メインコレクションのフィールドで並べ替えてページネーションした際に、クエリエラーが発生する問題を修正しました。 ([#10224](https://github.com/nocobase/nocobase/pull/10224)) by @cgyrock
* **[data-source-manager]**
  * データベースからフィールドを同期した後、数式フィールドが数値フィールドに変わってしまう問題を修正しました。 ([#10303](https://github.com/nocobase/nocobase/pull/10303)) by @2013xile
  * 外部データソースのデータテーブルを同期した後も、削除済みのデータテーブルがデータベースマネージャーに残る問題を修正しました。 ([#10209](https://github.com/nocobase/nocobase/pull/10209)) by @cgyrock
* **[auth]** クロスオリジン構成でデプロイした場合、API リクエストでまれに `Invalid CSRF token` エラーが発生する問題を修正しました。 ([#10245](https://github.com/nocobase/nocobase/pull/10245)) by @mytharcher
* **[ブロック：ツリー]** Tree ブロックで検索条件に一致する業務レコードがない場合でも、プレースホルダーノードが表示される問題を修正しました。 ([#10323](https://github.com/nocobase/nocobase/pull/10323)) by @jiannx
* **[ブロック：ガントチャート]** ガントチャートで表示幅の短いタスクバーに、レコードのカスタムカラーが適用されない問題を修正しました。 ([#10322](https://github.com/nocobase/nocobase/pull/10322)) by @jiannx
* **[フロントエンドフローエンジン]**
  * フォームのフィールド値変数が正しく解決されない問題を修正しました。 ([#10319](https://github.com/nocobase/nocobase/pull/10319)) by @gchust
  * カスタムの非 Sequelize データソースで、モーダル内のレコード変数とリレーションブロックを正しく解析できない問題を修正しました。 ([#10272](https://github.com/nocobase/nocobase/pull/10272)) by @gchust
* **[バックアップ管理]**
  * V2 のバックアップ復元処理中に、復元リクエストを重複送信できてしまう問題を修正しました。 ([#10262](https://github.com/nocobase/nocobase/pull/10262)) by @katherinehhh
  * 非同期エクスポートタスクによって自動バックアップが重複して実行される問題を修正しました。 ([#10300](https://github.com/nocobase/nocobase/pull/10300)) by @gchust
* **[データソース管理]** フィールド設定画面のテーブルで、UI タイプを直接空にできてしまう問題を修正しました。 ([#10288](https://github.com/nocobase/nocobase/pull/10288)) by @hongboji
* **[ファイルマネージャー]**
  * クロスオリジン画像をプレビューした後、ブラウザキャッシュ内のレスポンスに CORS ヘッダーが含まれていないことで、ファイルをダウンロードできなくなる問題を修正しました。 ([#10313](https://github.com/nocobase/nocobase/pull/10313)) by @mytharcher
    参考ドキュメント：[ファイルプレビュー](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/file-preview/index.md) / [Alibaba Cloud OSS](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/storage/aliyun-oss.md)
  * ログイン済みのメンバーユーザーが、システムロゴなどの共有添付ファイルを読み込めない問題を修正しました。 ([#10268](https://github.com/nocobase/nocobase/pull/10268)) by @mytharcher
* **[データテーブルフィールド：自動採番]** データ移行後、複数のレコードが同じ最新作成日時を持つ場合に、自動採番の値が重複する可能性がある問題を修正しました。 ([#10239](https://github.com/nocobase/nocobase/pull/10239)) by @mytharcher
* **[AIワーカー]**
  * AI プラグインの client-v2 設定ページで、Settings ラベルが翻訳されていない問題を修正しました。 ([#10234](https://github.com/nocobase/nocobase/pull/10234)) by @cgyrock
  * v2 フォームで、AIワーカー操作の表示・非表示を連動ルールによって制御できるようにしました。 ([#10298](https://github.com/nocobase/nocobase/pull/10298)) by @jiannx
* **[UI テンプレート]** フィルター条件が空のテーブルブロックで、別のページへ移動して戻った後もデータが読み込まれてしまう問題を修正しました。 ([#9890](https://github.com/nocobase/nocobase/pull/9890)) by @zhangzhonghe
* **[ローカライズ]** Lina AI アシスタントのエントリを含むローカライズ設定を開いた際に、画面がクラッシュする問題を修正しました。 ([#10293](https://github.com/nocobase/nocobase/pull/10293)) by @cgyrock
* **[ワークフロー]** ワークフローを手動実行する際、`autoRevision=0` を指定しても新しいバージョンが作成される可能性がある問題を修正しました。 ([#10243](https://github.com/nocobase/nocobase/pull/10243)) by @mytharcher
* **[ワークフロー：JavaScript ノード]** JavaScript ワークフローノードで、スクリプトが結果を返した後、または非同期ワークフローがタイムアウトした後も Worker が終了しない問題を修正しました。 ([#10241](https://github.com/nocobase/nocobase/pull/10241)) by @mytharcher
* **[データソース：外部 NocoBase]** AI ワークフローから、外部 NocoBase のファイルテーブルおよび添付フィールド内のファイルを読み取れない問題を修正しました。 by @2013xile
* **[データソース：外部 SQL Server]** ユーザー向けの変更はありません。回帰テストカバレッジのみ追加しました。 by @cgyrock
* **[データソース：外部 MySQL]** 外部データベースのデータソースに新しいテーブルを追加した後、以前選択したテーブルがランタイムコレクションから消える問題を修正しました。 by @cgyrock
* **[AI: ナレッジベース]** PGVector ナレッジベース検索で不要な PostgreSQL 接続が占有される問題と、異なるベクトルテーブルごとに接続プールが重複作成される問題を修正しました。 by @cgyrock
* **[マイグレーション管理]** アプリケーション再起動後に発生する多対多の中間テーブルデータのマイグレーション問題を修正し、マイグレーションルールをシステムデータとして扱うようにしました。 by @cgyrock
* **[テンプレート印刷]**
  * なし — 本 PR は修正対象を記録したものですが、リリース済みの動作に変更はありません。 by @hongboji
  * DOCX テンプレートから PDF を生成した際、中国語と英語の文字の間に意図しない余白が入る問題を修正しました。 by @jiannx
* **[ワークフロー：承認]**
  * 承認ページに外部データソースのフィールドが表示されない問題を修正しました。 by @zhangzhonghe
  * 承認申請の詳細で、サブテーブルフィールドの内容が表示されない問題を修正しました。 by @zhangzhonghe
  * 承認意見に RunJS を使用した場合、デフォルト値が反映されない問題を修正しました。 by @zhangzhonghe
  * 承認フォームで一対多リレーションのレコードを削除した後、再度選択できない問題を修正しました。 by @zhangzhonghe
  * 承認意見にデフォルト値を設定できるようにしました。 by @zhangzhonghe
* **[アプリケーションスーパーバイザー]** アプリケーション作成時、データベース名、schema、データテーブルのプレフィックスについて、英字以外の文字で始まる名前や不正な文字を含む名前を設定できてしまう問題を修正しました。 by @hongboji
* **[DingTalk]** v2 のチャネルフォームで DingTalk 通知チャネルを保存した際、選択済みの認証器が失われる問題を修正しました。 by @jiannx
* **[認証：LDAP]** LDAP ユーザー DN に UTF-8 エスケープと、カンマなどの構文エスケープが同時に含まれる場合、ログインできない問題を修正しました。 by @hongboji
