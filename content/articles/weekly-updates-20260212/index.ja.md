週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.46](https://www.nocobase.com/ja/blog/v1.9.46)

*リリース日：2026-02-11*

### 🐛 不具合修正

* **[client]** 編集フォームのリレーションフィールドを編集可能から読み取り専用に切り替えた際、フィールドコンポーネントの選択肢が即時更新されない問題を修正 ([#8611](https://github.com/nocobase/nocobase/pull/8611)) by @katherinehhh
* **[データ可視化：ECharts]** ECharts の表記誤りを修正 by @heziqiang
* **[ワークフロー：承認]**
  * 「自分の申請」の詳細ポップアップでフィールド値が消失する問題を修正 by @mytharcher
  * 保存前モードで手動実行するとエラーが発生する問題を修正 by @mytharcher

### [v1.9.45](https://www.nocobase.com/ja/blog/v1.9.45)

*リリース日：2026-02-09*

### 🐛 不具合修正

* **[フィールドコンポーネント：マスク]** マスクフィールドの設定ダイアログで、全ユーザーロールが正しく読み込まれない問題を修正。 by @gchust
* **[ワークフロー：承認]** 詳細データ読み込み時に誤った id パラメータを使用していた問題を修正 by @mytharcher

### [v1.9.44](https://www.nocobase.com/ja/blog/v1.9.44)

*リリース日：2026-02-08*

### 🎉 新機能

* **[ワークフロー：承認]** 承認関連 API に権限管理を追加 by @mytharcher

### [v1.9.43](https://www.nocobase.com/ja/blog/v1.9.43)

*リリース日：2026-02-06*

### 🎉 新機能

* **[認証：DingTalk]**`unionId` によるユーザー連携をサポート by @2013xile

### 🚀 機能改善

* **[データテーブルフィールド：Markdown(Vditor)]** デフォルト編集モード設定を追加し、コンポーネント設定から初期編集状態を選択可能に ([#8408](https://github.com/nocobase/nocobase/pull/8408)) by @Cyx649312038

### 🐛 不具合修正

* **[操作：レコードインポート]** インポート処理におけるセキュリティリスクを修正 ([#8544](https://github.com/nocobase/nocobase/pull/8544)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.23](https://www.nocobase.com/ja/blog/v2.0.0-beta.23)

*リリース日：2026-02-12*

### 🎉 新機能

* **[ブロック：グリッドカード]** ブロックの高さを設定できるように対応 ([#8583](https://github.com/nocobase/nocobase/pull/8583)) by @katherinehhh
* **[操作：一括編集]** 一括編集 2.0 を追加 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) by @jiannx

### 🚀 機能改善

* **[client]**
  * テーブル 2.0 でドラッグによる並び替えに対応 ([#8540](https://github.com/nocobase/nocobase/pull/8540)) by @jiannx
  * フィールド値の代入および既定値関連の設定をフォーム単位の設定へ再構成。 ([#8596](https://github.com/nocobase/nocobase/pull/8596)) by @chenos
* **[ローカライズ]** 不足している i18n エントリを自動生成 ([#8588](https://github.com/nocobase/nocobase/pull/8588)) by @jiannx

### 🐛 不具合修正

* **[client]**
  * フォームのリレーションフィールドコンポーネントで、タイトル項目に外部キーフィールドを使用した際にドロップダウン表示が異常になる問題を修正 ([#8619](https://github.com/nocobase/nocobase/pull/8619)) by @katherinehhh
  * 編集フォームでリレーション添付ファイルフィールドをクリアして保存しても反映されない問題を修正 ([#8616](https://github.com/nocobase/nocobase/pull/8616)) by @katherinehhh
  * 編集フォームのリレーションフィールドを編集可能から読み取り専用に切り替えた際、フィールドコンポーネントの選択肢が即時更新されない問題を修正 ([#8611](https://github.com/nocobase/nocobase/pull/8611)) by @katherinehhh
  * JS column コードエディターで run ボタンを押した後、テーブル列が再読み込みされない問題を修正。 ([#8608](https://github.com/nocobase/nocobase/pull/8608)) by @gchust
  * 編集フォームのリレーションフィールドのデータセレクターで、選択済みデータを変更後に元へ戻せない問題を修正 ([#8610](https://github.com/nocobase/nocobase/pull/8610)) by @katherinehhh
* **[ファイルマネージャー]** フォーム内でファイルタイプフィールドを無効化しても選択ダイアログを開けてしまう問題を修正 ([#8617](https://github.com/nocobase/nocobase/pull/8617)) by @katherinehhh
* **[データ可視化：ECharts]** ECharts の表記誤りを修正 by @heziqiang
* **[ワークフロー：承認]**
  * 「自分の申請」の詳細ポップアップでフィールド値が消失する問題を修正 by @mytharcher
  * 保存前モードで手動実行するとエラーが発生する問題を修正 by @mytharcher

### [v2.0.0-beta.22](https://www.nocobase.com/ja/blog/v2.0.0-beta.22)

*リリース日：2026-02-10*

### 🎉 新機能

* **[client]** ページ、ページタブ、ポップアップ、ポップアップタブでブラウザのタブタイトルを設定できるように対応 ([#8590](https://github.com/nocobase/nocobase/pull/8590)) by @zhangzhonghe
* **[ワークフロー：承認]** 承認関連 API に権限管理を追加 by @mytharcher

### 🚀 機能改善

* **[client]** フィルターフォームのリレーションフィールドで独立したフィールドモデルを使用するよう改善 ([#8511](https://github.com/nocobase/nocobase/pull/8511)) by @zhangzhonghe
* **[ワークフロー：CC]** ワークフロー CC プラグインを FlowModel アーキテクチャに対応するよう再構築し、v1/v2 設定との互換性を維持 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) by @zhangzhonghe

### 🐛 不具合修正

* **[flow-engine]**
  * JS block 内で Blob オブジェクトを作成できない問題を修正。 ([#8603](https://github.com/nocobase/nocobase/pull/8603)) by @gchust
  * JS Models 内の "ctx.sql" 実行時にコンテキストが正しく設定されない問題を修正。 ([#8602](https://github.com/nocobase/nocobase/pull/8602)) by @gchust
* **[フィールドコンポーネント：マスク]** マスクフィールド設定ダイアログで、すべてのユーザーロールが正しく読み込まれない問題を修正。 by @gchust
* **[ワークフロー：承認]** 詳細データ読み込み時に誤った id パラメータを使用していた問題を修正 by @mytharcher

### [v2.0.0-beta.21](https://www.nocobase.com/ja/blog/v2.0.0-beta.21)

*リリース日：2026-02-07*

### 🎉 新機能

* **[client]** フォーム内でリレーションフィールドの項目を設定できるように対応 ([#8578](https://github.com/nocobase/nocobase/pull/8578)) by @katherinehhh
* **[操作：レコードコピー]** コピー操作 2.0 を追加 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) by @katherinehhh
* **[ワークフロー]** ワークフローキャンバス上でノードのコピー＆ペーストおよびドラッグによる位置変更に対応 ([#8559](https://github.com/nocobase/nocobase/pull/8559)) by @mytharcher

### 🚀 機能改善

* **[flow-engine]** JS model コードエディターの自動補完およびヒント機能を改善。 ([#8575](https://github.com/nocobase/nocobase/pull/8575)) by @gchust
* **[ワークフロー：承認]** JS Field のサポートを廃止 by @zhangzhonghe

### 🐛 不具合修正

* **[client]**
  * 非設定モードで "read hidden" のレンダリングエラーが発生する問題を修正。 ([#8591](https://github.com/nocobase/nocobase/pull/8591)) by @gchust
  * 編集フォームのサブテーブル（インライン編集）を読み取り専用に設定した後、閲覧モードに切り替えても編集用の列フィールドが残る問題を修正 ([#8589](https://github.com/nocobase/nocobase/pull/8589)) by @katherinehhh
* **[フロントエンドフローエンジン]** ブロックテンプレート使用時、コピー方式を選択するとポップアップ表示後に内容が空になる問題を修正。 ([#8581](https://github.com/nocobase/nocobase/pull/8581)) by @gchust
* **[ブロック：マップ]** マップブロックに「テンプレートとして保存」設定が重複表示される問題を修正 ([#8584](https://github.com/nocobase/nocobase/pull/8584)) by @katherinehhh

### [v2.0.0-beta.20](https://www.nocobase.com/ja/blog/v2.0.0-beta.20)

*リリース日：2026-02-05*

### 🎉 新機能

* **[client]** データ読み込み方式を設定できるように対応 ([#8551](https://github.com/nocobase/nocobase/pull/8551)) by @zhangzhonghe

### 🐛 不具合修正

* **[flow-engine]** サブテーブル（ポップアップ編集）で createModelOptions を設定した場合に、列操作の削除が機能しなくなる問題を修正 ([#8576](https://github.com/nocobase/nocobase/pull/8576)) by @katherinehhh
* **[メール管理]**
  * 管理画面にフィルター機能を追加 by @jiannx
  * 複数ユーザー間で同一メールアドレスのメールが正しく処理されない問題を修正し、パフォーマンスを改善 by @jiannx
  * スレッド（会話履歴）に関する問題を修正 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.71](https://www.nocobase.com/ja/blog/v2.0.0-alpha.71)

*リリース日：2026-02-10*

### 🎉 新機能

* **[client]**
  * ページ／ページタブ／ポップアップ／ポップアップタブで、ブラウザのタブタイトルを設定できるように対応 ([#8590](https://github.com/nocobase/nocobase/pull/8590)) by @zhangzhonghe
  * フォーム内でリレーションフィールドの項目を設定できるように対応 ([#8578](https://github.com/nocobase/nocobase/pull/8578)) by @katherinehhh
* **[ブロック：グリッドカード]** ブロックの高さを設定できるように対応 ([#8583](https://github.com/nocobase/nocobase/pull/8583)) by @katherinehhh
* **[操作：レコードコピー]** コピー操作 2.0 を追加 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) by @katherinehhh
* **[ワークフロー：承認]** 承認関連 API に権限管理を追加 by @mytharcher

### 🚀 機能改善

* **[client]** フィルターフォームのリレーションフィールドで独立したフィールドモデルを使用するよう改善 ([#8511](https://github.com/nocobase/nocobase/pull/8511)) by @zhangzhonghe
* **[ワークフロー：CC]** ワークフロー CC プラグインを FlowModel アーキテクチャ対応へ再構築し、v1/v2 設定との互換性を確保 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) by @zhangzhonghe

### 🐛 不具合修正

* **[flow-engine]**
  * JS Models で "ctx.sql" 実行時のコンテキストが不正になる問題を修正。 ([#8602](https://github.com/nocobase/nocobase/pull/8602)) by @gchust
  * JS block 内で Blob オブジェクトを作成できない問題を修正。 ([#8603](https://github.com/nocobase/nocobase/pull/8603)) by @gchust
* **[client]**
  * JS column コードエディターで run ボタンを押した後、テーブル列が再読み込みされない問題を修正。 ([#8608](https://github.com/nocobase/nocobase/pull/8608)) by @gchust
  * 設定モード以外で "read hidden" のレンダリングエラーが発生する場合がある問題を修正。 ([#8591](https://github.com/nocobase/nocobase/pull/8591)) by @gchust
  * 編集フォームのサブテーブル（インライン編集）を読み取り専用にした後、閲覧モードに切り替えても編集用の列フィールドが残る問題を修正 ([#8589](https://github.com/nocobase/nocobase/pull/8589)) by @katherinehhh
* **[フロントエンドフローエンジン]** ブロックテンプレート使用時、コピー方式を選択するとポップアップ表示後に内容が空になる問題を修正。 ([#8581](https://github.com/nocobase/nocobase/pull/8581)) by @gchust
* **[フィールドコンポーネント：マスク]** マスクフィールドの設定ダイアログで、全ユーザーロールが正しく読み込まれない問題を修正。 by @gchust
* **[ワークフロー：承認]** 詳細データ読み込み時に誤った id パラメータを使用していた問題を修正 by @mytharcher

### [v2.0.0-alpha.70](https://www.nocobase.com/ja/blog/v2.0.0-alpha.70)

*リリース日：2026-02-06*

### 🎉 新機能

* **[ワークフロー]** ワークフローキャンバス上でノードのコピー＆ペーストおよびドラッグによる位置変更に対応 ([#8559](https://github.com/nocobase/nocobase/pull/8559)) by @mytharcher

### 🚀 機能改善

* **[ワークフロー：承認]** JS Field のサポートを廃止 by @zhangzhonghe

### 🐛 不具合修正

* **[ブロック：マップ]** マップブロックに「テンプレートとして保存」設定が重複表示される問題を修正 ([#8584](https://github.com/nocobase/nocobase/pull/8584)) by @katherinehhh

### [v2.0.0-alpha.69](https://www.nocobase.com/ja/blog/v2.0.0-alpha.69)

*リリース日：2026-02-05*

### 🎉 新機能

* **[client]** データ読み込み方式を設定できるように対応 ([#8551](https://github.com/nocobase/nocobase/pull/8551)) by @zhangzhonghe
* **[flow-engine]** ESM\_CDN\_BASE\_URL 環境変数の設定に対応 ([#8529](https://github.com/nocobase/nocobase/pull/8529)) by @chenos
* **[認証：DingTalk]**`unionId` によるユーザー連携をサポート by @2013xile

### 🚀 機能改善

* **[flow-engine]** JS model コードエディターの自動補完およびヒント機能を改善。 ([#8575](https://github.com/nocobase/nocobase/pull/8575)) by @gchust
* **[client]**
  * インライン編集におけるサブテーブル列幅の設定方法をドロップダウン選択方式に変更 ([#8561](https://github.com/nocobase/nocobase/pull/8561)) by @katherinehhh
  * `ResourceActionProvider` で不要なデフォルト `appends` パラメータを無効化できるように対応 ([#8527](https://github.com/nocobase/nocobase/pull/8527)) by @2013xile
* **[acl]** ACL に generalFixedParams メソッドを追加 ([#8363](https://github.com/nocobase/nocobase/pull/8363)) by @jiannx
* **[データテーブルフィールド：Markdown(Vditor)]** デフォルト編集モード設定を追加し、コンポーネント設定から初期編集状態を選択可能に ([#8408](https://github.com/nocobase/nocobase/pull/8408)) by @Cyx649312038
* **[ワークフロー]** ワークフロー関連ページのルーティングを `/admin/settings/workflow` 配下に統一 ([#8519](https://github.com/nocobase/nocobase/pull/8519)) by @mytharcher
* **[AI: ナレッジベース]** ビルド成果物を最適化し、AI ナレッジベースプラグインのパッケージサイズを削減 by @cgyrock
* **[マルチスペース]** マルチスペースの権限制御を ACL に対応 by @jiannx
* **[認証：DingTalk]** 既定で `userid` によるユーザー連携を使用し、従来の電話番号ベース認証との互換性を維持 by @2013xile

### 🐛 不具合修正

* **[client]**
  * ツリーテーブル有効時、「子レコードを追加」操作にページ更新が必要となる問題を修正 ([#8574](https://github.com/nocobase/nocobase/pull/8574)) by @katherinehhh
  * Grid レイアウトで不要なプレースホルダーが表示される問題を修正 ([#8535](https://github.com/nocobase/nocobase/pull/8535)) by @zhangzhonghe
  * サブテーブルのインライン編集時、列幅変更が即時反映されない問題および複数行テキスト入力欄が列幅に追従しない問題を修正 ([#8573](https://github.com/nocobase/nocobase/pull/8573)) by @katherinehhh
  * 編集フォームでリレーションフィールドのクイック追加ボタンからデータ追加時にフォーム内容が上書きされる問題を修正。 ([#8567](https://github.com/nocobase/nocobase/pull/8567)) by @gchust
  * 非ツリー構造テーブルで「ツリーテーブルを有効化」と「すべての行を既定で展開」設定を非表示に変更 ([#8566](https://github.com/nocobase/nocobase/pull/8566)) by @katherinehhh
  * 追加操作ポップアップに不要なテーブル（追加）メニューが表示される問題を修正。 ([#8562](https://github.com/nocobase/nocobase/pull/8562)) by @gchust
  * nanoid フィールドで新規フォーム送信後に既定値が再生成されない問題を修正 ([#8538](https://github.com/nocobase/nocobase/pull/8538)) by @katherinehhh
  * イベントフローがポップアップをまたぐターゲットブロック更新に反映されない問題を修正。 ([#8541](https://github.com/nocobase/nocobase/pull/8541)) by @gchust
  * フィルター関連の既知問題を修正 ([#8514](https://github.com/nocobase/nocobase/pull/8514)) by @zhangzhonghe
  * フォーム送信後にデータブロックが重複更新される問題を修正。 ([#8531](https://github.com/nocobase/nocobase/pull/8531)) by @gchust
  * 初回ポップアップ表示後に閉じるとページデータが誤更新される問題を修正。 ([#8548](https://github.com/nocobase/nocobase/pull/8548)) by @gchust
  * 多階層の対多フィールドでサブフォーム連動ルールにフォーム変数を使用できない問題を修正。 ([#8518](https://github.com/nocobase/nocobase/pull/8518)) by @gchust
  * カスケードコンポーネントで既定値設定時にデータ表示が異常となる問題を修正 ([#8537](https://github.com/nocobase/nocobase/pull/8537)) by @katherinehhh
  * 多段ポップアップおよびブロック間データ変更後に更新されない問題を修正。 ([#8471](https://github.com/nocobase/nocobase/pull/8471)) by @gchust
* **[flow-engine]**
  * サブテーブル（ポップアップ編集）で createModelOptions 設定時に列削除操作が機能しない問題を修正 ([#8576](https://github.com/nocobase/nocobase/pull/8576)) by @katherinehhh
  * ページ切替後にポップアップからフォーム送信しても画面が更新されない問題を修正。 ([#8554](https://github.com/nocobase/nocobase/pull/8554)) by @gchust
  * JS block 内で一部サードパーティライブラリを正しく読み込めない問題を修正。 ([#8545](https://github.com/nocobase/nocobase/pull/8545)) by @gchust
  * runjs が一部 ESM ライブラリを AMD モジュールと誤認識し、読み込み処理が誤動作する問題を修正。 ([#8536](https://github.com/nocobase/nocobase/pull/8536)) by @gchust
  * 外部データソースで filterTargetKey が単一要素配列の場合に FilterByTK が正しく処理されない問題を修正 ([#8522](https://github.com/nocobase/nocobase/pull/8522)) by @katherinehhh
  * サブテーブル（ポップアップ編集）で createModelOptions 設定時に列削除操作が機能しない問題を修正 ([#8560](https://github.com/nocobase/nocobase/pull/8560)) by @katherinehhh
* **[データテーブルフィールド：添付ファイル（URL）]** 編集フォームで添付ファイル URL フィールドのファイル名表示が有効にならない問題を修正 ([#8571](https://github.com/nocobase/nocobase/pull/8571)) by @katherinehhh
* **[AI 従業員]**
  * LLM ノードのメッセージ送信失敗問題を修正 ([#8569](https://github.com/nocobase/nocobase/pull/8569)) by @2013xile
  * ビルド後にシステムが起動できない問題を修正 ([#8523](https://github.com/nocobase/nocobase/pull/8523)) by @cgyrock
  * AI モデリング時にツール自動呼び出しで発生する例外を修正 ([#8532](https://github.com/nocobase/nocobase/pull/8532)) by @cgyrock
* **[UI テンプレート]** リレーションフィールド新規レコードフォームポップアップをテンプレート保存後、再度開いて送信するとエラーが発生する問題を修正。 ([#8564](https://github.com/nocobase/nocobase/pull/8564)) by @gchust
* **[操作：レコードインポート]** インポート処理におけるセキュリティリスクを修正 ([#8544](https://github.com/nocobase/nocobase/pull/8544)) by @mytharcher
* **[ファイルマネージャー]** ローカルストレージのファイルパス処理を強化し、アップロードディレクトリ外へのアクセスを防止 ([#8539](https://github.com/nocobase/nocobase/pull/8539)) by @mytharcher
* **[ワークフロー]** テーブルレコード選択コンポーネントにエラーハンドリングを追加し、テーブル削除後のエラー発生を回避 ([#8528](https://github.com/nocobase/nocobase/pull/8528)) by @mytharcher
* **[ワークフロー：カスタム操作イベント]** カスタム操作ワークフロー実行時にパラメータおよびペイロードが正しく渡されない問題を修正 by @mytharcher
* **[マルチスペース]**
  * スペースフィールドから read-pretty 属性を削除 by @jiannx
  * スペースフィールドの x-ready-pretty を削除するマイグレーションスクリプトを追加 by @jiannx
* **[AI: ナレッジベース]** ビルド後にシステムが起動できない問題を修正 by @cgyrock
* **[操作：レコードインポート Pro]** インポート結果の統計値およびメッセージ翻訳を修正 by @mytharcher
* **[ワークフロー：サブフロー]** ワークフローリンクのルーティングパスを修正 by @mytharcher
* **[テンプレート印刷]** テンプレート印刷ボタン設定ページのフィールド一覧表示不具合を修正 by @katherinehhh
* **[ワークフロー：承認]**
  * リスト API 読み込み時、JSON フィールド追加により発生するパフォーマンス問題（MySQL）を修正 by @mytharcher
  * 削除済みワークフローに対するエラーハンドリングを追加し、未処理タスク一覧の読み込みエラーを回避 by @mytharcher
  * 既存の担当者範囲ワークフローを無効化後、ユーザーへロール追加時に発生するエラーを修正 by @mytharcher
* **[メール管理]** テキスト選択時に本文が折りたたまれないよう修正。添付ファイルのダウンロード失敗を修正 by @jiannx
* **[企業微信]** ユーザーに携帯番号がない場合に自動登録できない問題を修正 by @2013xile
