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
