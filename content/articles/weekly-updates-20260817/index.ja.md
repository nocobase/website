週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.1.41

*リリース日: 2026-08-16*

### 🚀 機能改善

* **[lock-manager]** ローカルロックのリース更新機能を追加し、`tryAcquire` で取得したロックが再利用時や例外発生時にも安全に解放されるようにしました。([#10368](https://github.com/nocobase/nocobase/pull/10368)) by @jiannx
* **[Redis 分散ロックアダプター]** Redis ロックのリース更新機能を追加し、再利用可能なロックハンドルが競合時や例外発生時にも安全に解放されるようにしました。 by @jiannx

### 🐛 不具合修正

* **[ファイルマネージャー]** 単一値フィールドで既存ファイルを選択した際に、追加の送信操作が必要になる問題を修正しました。([#10372](https://github.com/nocobase/nocobase/pull/10372)) by @zhangzhonghe
* **[データテーブルフィールド：Markdown (Vditor)]** v2 詳細ブロックの Markdown HTML プレビューがダークテーマで正しく表示されない問題を修正しました。([#10370](https://github.com/nocobase/nocobase/pull/10370)) by @katherinehhh
* **[データテーブルフィールド：暗号化]** 暗号化フィールドを含むコレクションを一括インポートした際に `model.changed is not a function` エラーが発生する問題を修正しました。 by @cgyrock
* **[ワークフロー：Webhook トリガー]** リクエストヘッダーを入力せずに Webhook ワークフローを手動実行すると 400 エラーが返される問題を修正しました。 by @mytharcher

### v2.1.40

*リリース日: 2026-08-14*

### 🚀 機能改善

* **[ブロック：ツリー]** ツリーフィルターブロックでデフォルトの並び順を設定できるようになりました。([#10339](https://github.com/nocobase/nocobase/pull/10339)) by @jiannx

### 🐛 不具合修正

* **[client-v2]**
  * UI 編集モードでフィルターフォームのデータが自動更新される問題を修正しました。([#10356](https://github.com/nocobase/nocobase/pull/10356)) by @zhangzhonghe
  * v2 フィルターフォームのツリー型リレーションフィールドで、デフォルトでカスケード選択を使用するようにしました。([#10357](https://github.com/nocobase/nocobase/pull/10357)) by @zhangzhonghe
  * モバイル端末で単一選択のリレーションフィールドにおいて、選択済みレコードを再度クリックしても選択を解除できない問題を修正しました。([#10346](https://github.com/nocobase/nocobase/pull/10346)) by @zhangzhonghe
  * フィルターフォームに中国行政区フィールドを直接追加できない問題を修正しました。([#10333](https://github.com/nocobase/nocobase/pull/10333)) by @zhangzhonghe
  * フォームフィールドの連動ルール操作で JS item が誤って一覧に表示される問題を修正しました。([#10363](https://github.com/nocobase/nocobase/pull/10363)) by @gchust
* **[ワークフロー：JSON 計算]** JSON クエリタスクで構造化された解析エラーが失われ、`[object Object]` と表示される問題を修正しました。([#10344](https://github.com/nocobase/nocobase/pull/10344)) by @mytharcher
* **[操作：レコードエクスポート]**
  * Export V2 でリレーションフィールドを調整した後、ドラッグ＆ドロップで並び替えるとページがクラッシュする問題を修正しました。([#10335](https://github.com/nocobase/nocobase/pull/10335)) by @katherinehhh
  * 複数のリレーションフィールドで絞り込んだ後にテーブルをエクスポートするとエラーが発生する問題を修正しました。([#10342](https://github.com/nocobase/nocobase/pull/10342)) by @zhangzhonghe
* **[ブロック：Kanban]** Kanban カードの詳細ドロワーを再度開いた際に、設定済みの内容が失われる問題を修正しました。([#10334](https://github.com/nocobase/nocobase/pull/10334)) by @jiannx
* **[ファイルマネージャー]** ファイルを切り替えた際に動画プレビューの内容が更新されない問題を修正しました。([#10345](https://github.com/nocobase/nocobase/pull/10345)) by @mytharcher
* **[操作：レコードインポート Pro]**
  * 非同期インポートされたレコードが現在のスペースに関連付けられない問題を修正しました。 by @jiannx
  * インポート結果の統計文言を改善し、新規作成レコード数と更新レコード数を明確に区別するようにしました。 by @mytharcher
* **[ワークフロー：承認]**
  * 承認詳細のサブテーブル列幅が申請フォームと一致しない問題を修正しました。 by @zhangzhonghe
  * Client V2 の承認関連ブロックにデータ範囲フィルターを追加しました。 by @zhangzhonghe

### v2.1.39

*リリース日: 2026-08-11*

### 🐛 不具合修正

* **[client-v2]** `ctx.form.submit` でフォームデータを正しく送信できない問題を修正しました。 ([#10063](https://github.com/nocobase/nocobase/pull/10063)) by @gchust
* **[database]** データベースのアンダースコア命名を有効にした場合、キャメルケースのフィールドに対するプレフィックスインデックスを作成できない問題を修正しました。 ([#10329](https://github.com/nocobase/nocobase/pull/10329)) by @2013xile
* **[操作：レコードコピー]** v2 で直接コピーに失敗した際のエラーメッセージを改善し、同じ API エラー情報が重複して表示されないようにしました。 ([#10327](https://github.com/nocobase/nocobase/pull/10327)) by @katherinehhh
* **[履歴]** 大規模なスナップショットテーブルを使用する環境で、履歴データの書き込み性能を向上しました。 by @2013xile
* **[ワークフロー：承認]** 承認フォームで一対多リレーションのレコードを削除した後、再度選択できない問題を修正しました。 by @zhangzhonghe

### v2.1.38

*リリース日: 2026-08-10*

### 🚀 機能改善

* **[undefined]** JavaScript Worker のデフォルトの同時実行動作と、同時実行数の上限を設定する必要があるケースを明確にしました。 ([#10317](https://github.com/nocobase/nocobase/pull/10317)) by @mytharcher
  参考ドキュメント：[JavaScript ノード](https://docs.nocobase.com/cn/workflow/nodes/javascript)
* **[ワークフロー：JavaScript ノード]** JavaScript ワークフローノードで非同期 Worker の実行をキューで処理するようにし、単一プロセス内の Worker 同時実行数を制限することで、リソース使用量のピークを抑えるようにしました。 ([#10280](https://github.com/nocobase/nocobase/pull/10280)) by @mytharcher

### 🐛 不具合修正

* **[フロントエンドフローエンジン]**
  * カスタムの非 Sequelize データソースで、モーダル内のレコード変数とリレーションブロックを正しく解析できない問題を修正しました。 ([#10272](https://github.com/nocobase/nocobase/pull/10272)) by @gchust
  * フォームのフィールド値変数が正しく解決されない問題を修正しました。 ([#10319](https://github.com/nocobase/nocobase/pull/10319)) by @gchust
* **[ファイルマネージャー]** クロスオリジン画像をプレビューした後、ブラウザキャッシュ内のレスポンスに CORS ヘッダーが含まれていないことで、ファイルをダウンロードできなくなる問題を修正しました。 ([#10313](https://github.com/nocobase/nocobase/pull/10313)) by @mytharcher
  参考ドキュメント：[ファイルプレビュー](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/file-preview/index.md) / [Alibaba Cloud OSS](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/storage/aliyun-oss.md)

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.2.0-beta.17

*リリース日: 2026-08-10*

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

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v3.0.0-alpha.9

*リリース日: 2026-08-11*

### 🚀 機能改善

* **[cli]** `nb api resource create` の `--values` で JSON 配列を指定できるようにし、1 回のリクエストで複数のレコードを作成できるようにしました。 ([#10325](https://github.com/nocobase/nocobase/pull/10325)) by @Molunerfinn
  参考ドキュメント：[nb api resource create](https://github.com/nocobase/nocobase/blob/fix/cli-resource-create-array-values/docs/docs/cn/api/cli/api/resource/create.md)

### 🐛 不具合修正

* **[client-v2]**
  * V2 フィールドで桁数の大きい decimal 値を編集・表示した際、値が正しく処理されない問題を修正しました。 ([#10330](https://github.com/nocobase/nocobase/pull/10330)) by @katherinehhh
  * `ctx.form.submit` でフォームデータを正しく送信できない問題を修正しました。 ([#10063](https://github.com/nocobase/nocobase/pull/10063)) by @gchust
  * 現在の Settings タブへのアクセス権限がない場合、アクセス可能なタブへ自動的に切り替わるようにしました。 ([#10332](https://github.com/nocobase/nocobase/pull/10332)) by @zhangzhonghe
  * カンバン列からレコードをクイック作成した際、選択中のグループ値が引き継がれない問題を修正しました。 ([#10321](https://github.com/nocobase/nocobase/pull/10321)) by @jiannx
  * 設定権限がない場合、最初にアクセス可能なページへ移動するようにしました。 ([#10331](https://github.com/nocobase/nocobase/pull/10331)) by @zhangzhonghe
* **[database]** データベースのアンダースコア命名を有効にした場合、キャメルケースのフィールドに対するプレフィックスインデックスを作成できない問題を修正しました。 ([#10329](https://github.com/nocobase/nocobase/pull/10329)) by @2013xile
* **[ブロック：ガントチャート]** ガントチャートで表示幅の短いタスクバーに、レコードのカスタムカラーが適用されない問題を修正しました。 ([#10322](https://github.com/nocobase/nocobase/pull/10322)) by @jiannx
* **[ブロック：ツリー]** Tree ブロックで検索条件に一致する業務レコードがない場合でも、プレースホルダーノードが表示される問題を修正しました。 ([#10323](https://github.com/nocobase/nocobase/pull/10323)) by @jiannx
* **[操作：レコードコピー]** v2 で直接コピーに失敗した際のエラーメッセージを改善し、同じ API エラー情報が重複して表示されないようにしました。 ([#10327](https://github.com/nocobase/nocobase/pull/10327)) by @katherinehhh
* **[履歴]** 大規模なスナップショットテーブルを使用する環境で、履歴データの書き込み性能を向上しました。 by @2013xile
* **[ワークフロー：承認]**
  * Client V2 の承認フォームで、返却範囲オプションが表示されない問題を修正しました。 by @zhangzhonghe
  * 承認フォームで一対多リレーションのレコードを削除した後、再度選択できない問題を修正しました。 by @zhangzhonghe
* **[DingTalk]** v2 のチャネルフォームで DingTalk 通知チャネルを保存した際、選択済みの認証器が失われる問題を修正しました。 by @jiannx

### v3.0.0-alpha.8

*リリース日: 2026-08-10*

### 🎉 新機能

* **[client-v2]** V2 フィールド値エディターに Date 変数を追加し、日付以外のフィールドもフォーマットして出力できるようにしました。 ([#10289](https://github.com/nocobase/nocobase/pull/10289)) by @katherinehhh
* **[Portal 管理]** ユーザーに Portal へのアクセス権限がない場合、アクセスできないことを示すメッセージを表示するようにしました。 ([#10275](https://github.com/nocobase/nocobase/pull/10275)) by @zhangzhonghe
* **[コーディング agent 連携]** AI Portal カードから接続手順をワンクリックでコピーし、Portal をコーディング agent に引き渡せるようにしました。 by @Albert-mah

### 🚀 機能改善

* **[undefined]**
  * JavaScript Worker のデフォルトの同時実行動作と、同時実行数の上限を設定する必要があるケースを明確にしました。 ([#10317](https://github.com/nocobase/nocobase/pull/10317)) by @mytharcher
    参考ドキュメント：[JavaScript ノード](https://docs.nocobase.com/cn/workflow/nodes/javascript)
  * 大規模言語モデルの選択ガイドを追加しました。評価軸を紹介し、色分けされた表で各モデルの構築結果を比較しています。 ([#10295](https://github.com/nocobase/nocobase/pull/10295)) by @Charls-Wu
    参考ドキュメント：[大規模言語モデルの選択](https://docs.nocobase.com/cn/ai-builder/ai-portal/model-selection/)
* **[cli]** `nb portal push` でコミット作成者情報が正しく設定されない問題を修正しました。 ([#10315](https://github.com/nocobase/nocobase/pull/10315)) by @gchust
* **[Portal 管理]**
  * Portal のアクセス権限チェックを効率化しました。 ([#10302](https://github.com/nocobase/nocobase/pull/10302)) by @zhangzhonghe
  * Portal のアクセス権限を直接設定できない場合、簡潔なプレースホルダーを表示するようにしました。 ([#10301](https://github.com/nocobase/nocobase/pull/10301)) by @zhangzhonghe
* **[ワークフロー：JavaScript ノード]** JavaScript ワークフローノードで非同期 Worker の実行をキューで処理するようにし、単一プロセス内の Worker 同時実行数を制限することで、リソース使用量のピークを抑えるようにしました。 ([#10280](https://github.com/nocobase/nocobase/pull/10280)) by @mytharcher
* **[検証]** 検証設定一覧に更新ボタンを追加しました。 ([#10299](https://github.com/nocobase/nocobase/pull/10299)) by @zhangzhonghe

### 🐛 不具合修正

* **[client-v2]**
  * プラグインを有効化または無効化する際に、ローディング状態を表示するようにしました。 ([#10310](https://github.com/nocobase/nocobase/pull/10310)) by @zhangzhonghe
  * アプリケーションでコマンドを実行している間は、再試行ボタンを表示しないようにしました。 ([#10290](https://github.com/nocobase/nocobase/pull/10290)) by @zhangzhonghe
  * モバイル端末の選択リストで、キャンセルボタンの表示言語が一致しない問題を修正しました。 ([#10297](https://github.com/nocobase/nocobase/pull/10297)) by @zhangzhonghe
  * サブテーブルのリレーションフィールドに値を設定する際、親項目の変数が誤った階層を参照する問題を修正しました。 ([#10249](https://github.com/nocobase/nocobase/pull/10249)) by @gchust
  * v2 のポップアップ編集サブテーブルで、レコード追加・編集モーダル内の `Current popup` 親レコード変数が欠落する、または正しい値を取得できない問題を修正しました。 ([#10292](https://github.com/nocobase/nocobase/pull/10292)) by @katherinehhh
* **[database]** アプリケーション再起動後、マイグレーションパッケージに多対多の中間テーブルデータが含まれなくなる問題を修正しました。 ([#10306](https://github.com/nocobase/nocobase/pull/10306)) by @cgyrock
* **[data-source-manager]** データベースからフィールドを同期した後、数式フィールドが数値フィールドに変わってしまう問題を修正しました。 ([#10303](https://github.com/nocobase/nocobase/pull/10303)) by @2013xile
* **[undefined]** ローカルから Portal を作成できない問題を修正しました。 ([#10304](https://github.com/nocobase/nocobase/pull/10304)) by @gchust
* **[フロントエンドフローエンジン]**
  * フォームのフィールド値変数が正しく解決されない問題を修正しました。 ([#10319](https://github.com/nocobase/nocobase/pull/10319)) by @gchust
  * カスタムの非 Sequelize データソースで、モーダル内のレコード変数とリレーションブロックを正しく解析できない問題を修正しました。 ([#10272](https://github.com/nocobase/nocobase/pull/10272)) by @gchust
* **[AIワーカー]**
  * ページの読み込み中や遷移中に、AIワーカーのチャットエントリが一瞬表示される問題を修正しました。 ([#10309](https://github.com/nocobase/nocobase/pull/10309)) by @cgyrock
  * v2 フォームで、AIワーカー操作の表示・非表示を連動ルールによって制御できるようにしました。 ([#10298](https://github.com/nocobase/nocobase/pull/10298)) by @jiannx
* **[ファイルマネージャー]** クロスオリジン画像をプレビューした後、ブラウザキャッシュ内のレスポンスに CORS ヘッダーが含まれていないことで、ファイルをダウンロードできなくなる問題を修正しました。 ([#10313](https://github.com/nocobase/nocobase/pull/10313)) by @mytharcher
  参考ドキュメント：[ファイルプレビュー](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/file-preview/index.md) / [Alibaba Cloud OSS](https://github.com/nocobase/nocobase/blob/fix/file-manager-download-cors-cache/docs/docs/cn/file-manager/storage/aliyun-oss.md)
* **[操作：一括編集]** 組み込みプラグインのドキュメントを修正し、これらのプラグインがデフォルトで有効になっていることを明確にしました。 ([#10314](https://github.com/nocobase/nocobase/pull/10314)) by @hongboji
* **[Portal 管理]**
  * 旧 AI Portal でアクセス権限をチェックする際の互換性問題を修正しました。 ([#10307](https://github.com/nocobase/nocobase/pull/10307)) by @zhangzhonghe
  * Portal 名が x または v の場合に、URL が正しく生成されない問題を修正しました。 ([#10305](https://github.com/nocobase/nocobase/pull/10305)) by @zhangzhonghe
  * ロール権限設定で Portal のタイトルが誤って翻訳される問題を修正しました。 ([#10291](https://github.com/nocobase/nocobase/pull/10291)) by @zhangzhonghe
* **[バックアップ管理]** 非同期エクスポートタスクによって自動バックアップが重複して実行される問題を修正しました。 ([#10300](https://github.com/nocobase/nocobase/pull/10300)) by @gchust
* **[ワークフロー]** トリガータイプを選択する前は、ワークフローの実行モードを選択できないようにしました。 ([#10296](https://github.com/nocobase/nocobase/pull/10296)) by @Molunerfinn
* **[データソース：外部 NocoBase]** AI ワークフローから、外部 NocoBase のファイルテーブルおよび添付フィールド内のファイルを読み取れない問題を修正しました。 by @2013xile
* **[マイグレーション管理]** アプリケーション再起動後に発生する多対多の中間テーブルデータのマイグレーション問題を修正し、マイグレーションルールをシステムデータとして扱うようにしました。 by @cgyrock
* **[ワークフロー：承認]**
  * 承認申請カードを送信した後、内容がすぐに表示されない問題を修正しました。 by @zhangzhonghe
  * V2 の承認メッセージテンプレートページについて、V1 とのレイアウトおよび操作上の差異を修正しました。 by @zhangzhonghe
