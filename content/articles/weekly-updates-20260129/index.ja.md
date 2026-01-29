週間のプロダクトアップデートログを要約し、最新リリースは[当社のブログ](https://www.nocobase.com/ja/blog/timeline)でご確認いただけます。

**NocoBaseは現在、`main`、`next`および`develop`の3つのブランチで更新されています。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：現時点で最も安定したバージョンで、インストールを推奨します；
* `next`：ベータ版で、近日公開予定の新機能を含み、初期テスト済みです。既知・未知の不具合が存在する可能性があります。主にテストユーザー向けで、フィードバックを収集し機能の最適化を図るためのものです。早期に新機能を体験し意見を提供したいテストユーザーに最適です；
* `develop`：アルファ版で、最新の機能コードを含みますが、不完全または不安定な可能性があり、主に内部開発や迅速なイテレーション向けです。製品の最先端に関心のある技術ユーザー向けですが、潜在的な問題や未完成の機能があるため、本番環境での使用は推奨されません。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.40](https://www.nocobase.com/ja/blog/v1.9.40)

*リリース日：2026-01-25*

### 🚀 機能改善

* **[Office ファイルプレビュー]** Microsoft のオンラインプレビュー機能で、より多くのファイル形式を表示できるよう改善 ([#8500](https://github.com/nocobase/nocobase/pull/8500)) by @mytharcher

### 🐛 不具合修正

* **[client]**
  * nanoid フィールドがフォーム送信後に再生成されない不具合を修正 ([#8491](https://github.com/nocobase/nocobase/pull/8491)) by @katherinehhh
  * カスケードコンポーネントの必須チェックが重複して表示される問題を修正 ([#8476](https://github.com/nocobase/nocobase/pull/8476)) by @katherinehhh
* **[database]**
  * データテーブル再読み込み後に `empty` 演算子でフィルターするとエラーが発生する不具合を修正 ([#8496](https://github.com/nocobase/nocobase/pull/8496)) by @2013xile
  * ネストしたリレーション更新処理における不具合を修正 ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos
* **[ファイルマネージャー]** ファイルアップロード時にファイル名が二重デコードされ、文字化けが発生する問題を修正 ([#8481](https://github.com/nocobase/nocobase/pull/8481)) by @mytharcher
* **[データソース：メインデータベース]** 多対多リレーションの削除時に `onDelete: 'restrict'` 制約が正しく適用されない不具合を修正 ([#8493](https://github.com/nocobase/nocobase/pull/8493)) by @2013xile
* **[ブロック：iframe]** iframe で集計変数を追加した際にエラーが発生する問題を修正 ([#8482](https://github.com/nocobase/nocobase/pull/8482)) by @zhangzhonghe
* **[ワークフロー：Webhook トリガー]** リクエストボディ解析が未設定の場合に、トリガーデータが欠落する問題を修正 by @mytharcher
* **[テンプレート印刷]** 複数ロールを併用した場合に、印刷ボタンの権限制御が正しく機能しない不具合を修正 by @jiannx
* **[ワークフロー：承認]**
  * 同時送信によりプロセスが重複して再実行される不具合を修正 by @mytharcher
  * 分岐モードの承認処理で、指定ノードへ正しく差し戻せない問題を修正 by @mytharcher
* **[マイグレーション管理]** マイグレーション失敗時に、例外オブジェクト内の SQL が過大となりプロセスが停止しやすくなる問題を修正 by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.17](https://www.nocobase.com/ja/blog/v2.0.0-beta.17)

*リリース日：2026-01-29*

### 🐛 不具合修正

* **[client]** フィルター機能に関する既知の不具合を修正 ([#8514](https://github.com/nocobase/nocobase/pull/8514)) by @zhangzhonghe
* **[AI 従業員]** ビルド後にシステムが起動できない不具合を修正 ([#8523](https://github.com/nocobase/nocobase/pull/8523)) by @cgyrock
* **[AI: ナレッジベース]** ビルド後にシステムが起動できない不具合を修正 by @cgyrock

### [v2.0.0-beta.16](https://www.nocobase.com/ja/blog/v2.0.0-beta.16)

*リリース日：2026-01-27*

### 🎉 新機能

* **[client]** モーダル編集に対応したサブテーブル用フィールドコンポーネントを追加 ([#8280](https://github.com/nocobase/nocobase/pull/8280)) by @katherinehhh
* **[ワークフロー]** ノード移動用の API を追加 ([#8507](https://github.com/nocobase/nocobase/pull/8507)) by @mytharcher

### 🚀 機能改善

* **[client]**
  * セル更新時にテーブル全体が再レンダリングされる挙動を改善 ([#8349](https://github.com/nocobase/nocobase/pull/8349)) by @katherinehhh
  * 複数サブフォームで初期状態として 1 件のオブジェクトを保持し、Add New を操作しなくても入力可能に変更。未入力の場合はレコードを作成しないように改善 ([#8458](https://github.com/nocobase/nocobase/pull/8458)) by @katherinehhh
* **[ファイルマネージャー]** 拡張可能なプレビューコンポーネントをファイルマネージャーに追加 ([#8501](https://github.com/nocobase/nocobase/pull/8501)) by @mytharcher
* **[ワークフロー]** ワークフロー関連のサブページを `/admin/settings/workflow` 配下に統一するため、ルーティングパスを整理 ([#8519](https://github.com/nocobase/nocobase/pull/8519)) by @mytharcher

### 🐛 不具合修正

* **[client]**
  * フィルターブロックで日付に時刻を含めた場合、時刻フォーマットが重複表示される不具合を修正 ([#8506](https://github.com/nocobase/nocobase/pull/8506)) by @zhangzhonghe
  * 多階層の多対多フィールド用サブフォームにおいて、フィールド連動ルールでフォーム変数を用いた代入が機能しない不具合を修正 ([#8518](https://github.com/nocobase/nocobase/pull/8518)) by @gchust
  * 複数階層のモーダルやブロックをまたぐデータ変更後に画面が更新されない不具合を修正 ([#8471](https://github.com/nocobase/nocobase/pull/8471)) by @gchust
  * 編集フォームで閲覧モードに設定したサブ詳細データが正しく表示されない不具合を修正 ([#8469](https://github.com/nocobase/nocobase/pull/8469)) by @katherinehhh
  * targetKey における選択可能フィールドの処理ロジックを修正 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
  * 編集状態のサブテーブルで、関連フィールドの Select に設定された filter パラメータが誤っている不具合を修正 ([#8335](https://github.com/nocobase/nocobase/pull/8335)) by @katherinehhh
* **[flow-engine]** 外部データソースで filterTargetKey が単一要素の配列の場合に、FilterByTK の処理が正しく行われない不具合を修正 ([#8522](https://github.com/nocobase/nocobase/pull/8522)) by @katherinehhh
* **[AI 従業員]** AI モデリングおよびデータソース管理モジュール間で、選択可能フィールド設定が一致しない不具合を修正 ([#8488](https://github.com/nocobase/nocobase/pull/8488)) by @cgyrock
* **[メール管理]** テキスト選択時に本文が折りたたまれないよう改善し、あわせて添付ファイルのダウンロード失敗を修正 by @jiannx

### [v2.0.0-beta.15](https://www.nocobase.com/ja/blog/v2.0.0-beta.15)

*リリース日：2026-01-25*

### 🚀 機能改善

* **[Office ファイルプレビュー]** Microsoft のオンラインプレビュー機能で、対応するファイル形式を拡充 ([#8500](https://github.com/nocobase/nocobase/pull/8500)) by @mytharcher

### 🐛 不具合修正

* **[database]** データテーブル再読み込み後に `empty` 演算子でフィルターするとエラーが発生する不具合を修正 ([#8496](https://github.com/nocobase/nocobase/pull/8496)) by @2013xile
* **[テンプレート印刷]** 複数ロールを併用した場合に、印刷ボタンの権限制御が正しく機能しない不具合を修正 by @jiannx
* **[ワークフロー：承認]** 1.x 系の承認記録ダイアログでエラーが発生する問題を修正 by @mytharcher
* **[マイグレーション管理]** マイグレーション失敗時に、例外オブジェクト内の SQL が過大となりプロセスが停止しやすくなる問題を修正 by @cgyrock

### [v2.0.0-beta.14](https://www.nocobase.com/ja/blog/v2.0.0-beta.14)

*リリース日：2026-01-23*

### 🎉 新機能

* **[AI 従業員]** AI チャットにおいて、ファイルのコピー＆ペースト操作が可能になりました ([#8487](https://github.com/nocobase/nocobase/pull/8487)) by @heziqiang

### 🚀 機能改善

* **[client]**
  * 多対多サブフォームで、初期状態から 1 件分の入力枠を表示するよう改善し、未入力の場合はレコードを作成しない挙動に変更 ([#8473](https://github.com/nocobase/nocobase/pull/8473)) by @katherinehhh
  * サブテーブル内の添付ファイルフィールドにおいて、アップロードおよび編集ボタンを見直し、操作を分かりやすく改善 ([#8474](https://github.com/nocobase/nocobase/pull/8474)) by @katherinehhh
* **[flow-engine]** runjs の ctx.libs をオンデマンド読み込みに対応させ、あわせて lodash・math・formula の標準ライブラリを追加 ([#8468](https://github.com/nocobase/nocobase/pull/8468)) by @gchust
* **[エラーハンドラー]** SQL の参照エラー内容がそのまま外部に表示されないよう処理を改善 ([#8464](https://github.com/nocobase/nocobase/pull/8464)) by @2013xile
* **[ワークフロー：承認]** API 経由での権限外操作を防止するため、API アクセス制御を強化 by @mytharcher

### 🐛 不具合修正

* **[client]**
  * リッチテキストエディターのポップアップが画面上で遮られる問題を修正 ([#8443](https://github.com/nocobase/nocobase/pull/8443)) by @zhangzhonghe
  * 日時を含むフィルター条件で、時刻フォーマットが重複表示される不具合を修正 ([#8484](https://github.com/nocobase/nocobase/pull/8484)) by @zhangzhonghe
  * nanoid フィールドがフォーム送信後に再生成されない問題を修正 ([#8491](https://github.com/nocobase/nocobase/pull/8491)) by @katherinehhh
  * カスケードコンポーネントの必須チェックが重複表示される不具合を修正 ([#8476](https://github.com/nocobase/nocobase/pull/8476)) by @katherinehhh
  * フィルター一覧における重複表示を解消 ([#8431](https://github.com/nocobase/nocobase/pull/8431)) by @jiannx
  * Chrome バージョン 144 において設定メニューが表示されない問題を修正 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) by @zhangzhonghe
* **[database]**
  * ネストしたリレーション更新処理における不具合を修正 ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos
* **[server]** 共通依存関係に含まれる `mathjs` のバージョン不整合を修正 ([#8475](https://github.com/nocobase/nocobase/pull/8475)) by @mytharcher
* **[flow-engine]** 内蔵ダイアログで設定画面を連続操作した際にエラーが発生する不具合を修正 ([#8368](https://github.com/nocobase/nocobase/pull/8368)) by @gchust
* **[データソース：メインデータベース]** 多対多リレーションの削除時に `onDelete: 'restrict'` 制約が正しく適用されない問題を修正 ([#8493](https://github.com/nocobase/nocobase/pull/8493)) by @2013xile
* **[非同期タスクマネージャー]** 非同期インポートにより発火するワークフローイベントの実行遅延を修正 ([#8478](https://github.com/nocobase/nocobase/pull/8478)) by @mytharcher
* **[ブロック：iframe]** iframe で集計変数を追加した際にエラーが発生する問題を修正 ([#8482](https://github.com/nocobase/nocobase/pull/8482)) by @zhangzhonghe
* **[UI テンプレート]** テンプレート参照ブロックにおいて、イベントフローからデータ範囲を設定できない不具合を修正 ([#8472](https://github.com/nocobase/nocobase/pull/8472)) by @gchust
* **[ファイルマネージャー]** ファイルアップロード時にファイル名が二重デコードされ、文字化けする問題を修正 ([#8481](https://github.com/nocobase/nocobase/pull/8481)) by @mytharcher
* **[操作：レコードのインポート Pro]** 非同期インポート実行時に、ワークフローイベント処理が遅延する不具合を修正 by @mytharcher
* **[ワークフロー：Webhook トリガー]** リクエストボディ解析が未設定の場合に、トリガーデータが欠落する問題を修正 by @mytharcher
* **[テンプレート印刷]** テンプレート印刷の設定ダイアログから下部操作ボタンを削除 by @katherinehhh
* **[ワークフロー：承認]**
  * 分岐モードの承認処理で、指定ノードへ正しく差し戻せない不具合を修正 by @mytharcher
  * 同時送信により、プロセスが重複して再実行される問題を修正 by @mytharcher
  * 承認タスクカードのフィールドが表示されない不具合を修正 by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.68](https://www.nocobase.com/ja/blog/v2.0.0-alpha.68)

*リリース日：2026-01-27*

### 🎉 新機能

* **[ワークフロー]** ノードを移動するための API を新たに追加 ([#8507](https://github.com/nocobase/nocobase/pull/8507)) by @mytharcher

### [v2.0.0-alpha.67](https://www.nocobase.com/ja/blog/v2.0.0-alpha.67)

*リリース日：2026-01-26*

### 🎉 新機能

* **[server]** さまざまな利用シーンにおける複数アプリ管理に対応するため、アプリケーション管理の仕組みを刷新 ([#8043](https://github.com/nocobase/nocobase/pull/8043)) by @2013xile
* **[client]** サブテーブルをダイアログ形式で編集できる新しいフィールドコンポーネントを追加 ([#8280](https://github.com/nocobase/nocobase/pull/8280)) by @katherinehhh
* **[AI 従業員]** AI チャットでファイルのコピー＆ペースト操作が可能に ([#8487](https://github.com/nocobase/nocobase/pull/8487)) by @heziqiang

### 🚀 機能改善

* **[client]**
  * サブテーブル内の添付ファイル操作を見直し、アップロード・編集ボタンをより分かりやすく改善 ([#8474](https://github.com/nocobase/nocobase/pull/8474)) by @katherinehhh
  * 多対多サブフォームで初期状態から 1 件分の入力欄を表示し、追加操作なしで入力可能に。未入力の場合はレコードを作成しない挙動に改善 ([#8473](https://github.com/nocobase/nocobase/pull/8473)) by @katherinehhh
* **[flow-engine]** runjs のライブラリ管理を改善し、必要なものだけを読み込めるよう対応。あわせて lodash・math・formula を標準ライブラリとして追加 ([#8468](https://github.com/nocobase/nocobase/pull/8468)) by @gchust
* **[server]** CORS の Origin ホワイトリストを設定可能にし、アクセス制御の柔軟性を向上 ([#8454](https://github.com/nocobase/nocobase/pull/8454)) by @2013xile
* **[ファイルマネージャー]** 拡張可能なファイルプレビュー機能を追加 ([#8501](https://github.com/nocobase/nocobase/pull/8501)) by @mytharcher
* **[Office ファイルプレビュー]** Microsoft オンラインプレビューで閲覧可能なファイル形式を拡充 ([#8500](https://github.com/nocobase/nocobase/pull/8500)) by @mytharcher
* **[エラーハンドラー]** SQL エラーの詳細が外部に露出しないよう処理を改善 ([#8464](https://github.com/nocobase/nocobase/pull/8464)) by @2013xile
* **[操作：レコードのエクスポート]** エクスポート対象の判定ロジックを改善し、選択レコードを優先して処理するよう変更 ([#8442](https://github.com/nocobase/nocobase/pull/8442)) by @katherinehhh
* **[操作：レコードのエクスポート Pro]** エクスポート対象を選択レコード優先とする仕様に改善 by @katherinehhh
* **[ワークフロー：承認]** API 経由での権限外操作を防止するため、API アクセス制御を強化 by @mytharcher

### 🐛 不具合修正

* **[client]**

  * 日付＋時刻を含むフィルター条件で、時刻表記が重複表示される不具合を修正 ([#8484](https://github.com/nocobase/nocobase/pull/8484)) by @zhangzhonghe
  * nanoid フィールドがフォーム送信後に再生成されない問題を修正 ([#8491](https://github.com/nocobase/nocobase/pull/8491)) by @katherinehhh
  * リッチテキストエディターのポップアップが他要素に隠れて表示される問題を修正 ([#8443](https://github.com/nocobase/nocobase/pull/8443)) by @zhangzhonghe
  * フィルター一覧の重複を解消 ([#8431](https://github.com/nocobase/nocobase/pull/8431)) by @jiannx
  * カスケードコンポーネントの必須チェックが重複して表示される問題を修正 ([#8476](https://github.com/nocobase/nocobase/pull/8476)) by @katherinehhh
  * Chrome 144 環境で設定メニューが表示されない不具合を修正 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) by @zhangzhonghe
  * 編集フォームの閲覧モードにおいて、サブ詳細データが正しく表示されない問題を修正 ([#8469](https://github.com/nocobase/nocobase/pull/8469)) by @katherinehhh
  * カスタム変数設定ダイアログが他要素に隠れてしまう問題を修正 ([#8463](https://github.com/nocobase/nocobase/pull/8463)) by @zhangzhonghe
  * データテーブルのフィールドグループ並び替え設定が反映されない不具合を修正 ([#8453](https://github.com/nocobase/nocobase/pull/8453)) by @katherinehhh
  * テーブルの「列設定」ボタンが機能しない問題を修正 ([#8441](https://github.com/nocobase/nocobase/pull/8441)) by @zhangzhonghe
  * リレーションファイルのクイック編集時に、ファイル選択ダイアログの階層不整合により設定を保存できない問題を修正 ([#8446](https://github.com/nocobase/nocobase/pull/8446)) by @gchust
  * グラフィカル UI でデータテーブルを編集した際にエラーが発生する問題を修正 ([#8451](https://github.com/nocobase/nocobase/pull/8451)) by @katherinehhh
* **[database]**

  * データテーブル再読み込み後に `empty` 演算子を使用するとフィルター処理でエラーが発生する不具合を修正 ([#8496](https://github.com/nocobase/nocobase/pull/8496)) by @2013xile
  * ネストしたリレーションにおける更新処理の不具合を修正 ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos
* **[server]** 共通依存関係に含まれる `mathjs` パッケージのバージョン不整合を修正 ([#8475](https://github.com/nocobase/nocobase/pull/8475)) by @mytharcher
* **[flow-engine]**

  * 内蔵ダイアログで連動ルール設定とイベントフロー設定を続けて操作した後、ダイアログを閉じるとエラーが発生する不具合を修正 ([#8368](https://github.com/nocobase/nocobase/pull/8368)) by @gchust
  * 設定メニューを繰り返し操作すると複数の設定ダイアログが開いてしまう問題を修正 ([#8448](https://github.com/nocobase/nocobase/pull/8448)) by @gchust
  * runjs の処理で、実行前に変数が評価されてしまう不具合を修正 ([#8445](https://github.com/nocobase/nocobase/pull/8445)) by @gchust
  * データセレクターのクイック追加ダイアログで、ダイアログ変数を選択できない問題を修正 ([#8450](https://github.com/nocobase/nocobase/pull/8450)) by @gchust
* **[AI 従業員]** AI モデリングおよびデータソース管理で、選択可能フィールド設定の不整合を修正 ([#8488](https://github.com/nocobase/nocobase/pull/8488)) by @cgyrock
* **[データソース：メインデータベース]** 多対多リレーションのテーブルで削除時に `onDelete: 'restrict'` 制約が正しく適用されない問題を修正 ([#8493](https://github.com/nocobase/nocobase/pull/8493)) by @2013xile
* **[ブロック：iframe]** iframe に集計変数を追加するとエラーが発生する不具合を修正 ([#8482](https://github.com/nocobase/nocobase/pull/8482)) by @zhangzhonghe
* **[非同期タスクマネージャー]** 非同期インポートにより発生するワークフローイベントの実行遅延を修正 ([#8478](https://github.com/nocobase/nocobase/pull/8478)) by @mytharcher
* **[ファイルマネージャー]** ファイルアップロード時にファイル名が二重デコードされ、文字化けする不具合を修正 ([#8481](https://github.com/nocobase/nocobase/pull/8481)) by @mytharcher
* **[UI テンプレート]** テンプレート参照ブロックにおいて、イベントフロー経由でデータ範囲を設定できない不具合を修正 ([#8472](https://github.com/nocobase/nocobase/pull/8472)) by @gchust
* **[モバイル（非推奨）]** モバイル向けプラグインを廃止（2.0 以降は ui-layout プラグインを使用） ([#8456](https://github.com/nocobase/nocobase/pull/8456)) by @chenos
* **[操作：レコードインポート Pro]** 非同期インポートによって発生するワークフローイベントの実行遅延を修正 by @mytharcher
* **[ワークフロー：Webhook トリガー]** リクエストボディ解析未設定時に、トリガーデータが欠落する問題を修正 by @mytharcher
* **[テンプレート印刷]**

  * 複数ロールを組み合わせた場合に、印刷ボタンの権限判定が誤っていた不具合を修正 by @jiannx
  * テンプレート印刷設定ダイアログから不要な下部ボタンを削除 by @katherinehhh
* **[ワークフロー：承認]**

  * 承認タスクカードでフィールドが表示されない不具合を修正 by @zhangzhonghe
  * 分岐型承認フローで、指定ノードに正しく差し戻せない問題を修正 by @mytharcher
  * 同時操作によりフローが重複して再開される問題を修正 by @mytharcher
  * 1.x 系承認履歴ダイアログで発生するエラーを修正 by @mytharcher
* **[メール管理]**

  * メール設定ダイアログが画面要素に隠れる問題を修正 by @zhangzhonghe
  * 複数ユーザー間で同一メールが発生する問題を修正し、全体的なパフォーマンスを改善 by @jiannx
* **[マイグレーション管理]** マイグレーション失敗時に、例外ログに含まれる巨大な SQL によりプロセスが停止する問題を修正 by @cgyrock
