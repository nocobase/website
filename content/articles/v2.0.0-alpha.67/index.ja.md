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

  * 日付＋時刻を含むフィルター条件で、時刻表記が重複表示される不具合を修正 ([#8506](https://github.com/nocobase/nocobase/pull/8506), [#8484](https://github.com/nocobase/nocobase/pull/8484)) by @zhangzhonghe
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
