### 🚀 機能改善

* **[server]** CORS の Origin ホワイトリストを設定できるように改善 ([#8454](https://github.com/nocobase/nocobase/pull/8454)) by @2013xile
* **[操作：レコードのエクスポート]** エクスポート時の対象データ範囲を見直し、選択中のレコードを優先し、次にフロントエンドのフィルター条件を適用するよう改善 ([#8442](https://github.com/nocobase/nocobase/pull/8442)) by @katherinehhh
* **[操作：レコードのエクスポート Pro]** エクスポート対象データの判定ロジックを改善し、選択レコードを最優先、次にフロントエンドのフィルター条件を適用 by @katherinehhh

### 🐛 不具合修正

* **[client]**
  * カスタム変数設定用ダイアログが画面上で遮られて表示される問題を修正 ([#8463](https://github.com/nocobase/nocobase/pull/8463)) by @zhangzhonghe
  * データテーブルの GUI 編集画面でエラーが発生する不具合を修正 ([#8451](https://github.com/nocobase/nocobase/pull/8451)) by @katherinehhh
  * データテーブルのフィールドグループ並び替え設定が反映されない問題を修正 ([#8453](https://github.com/nocobase/nocobase/pull/8453)) by @katherinehhh
  * クイック操作ダイアログの高さが画面を超えてしまう不具合を修正 ([#8437](https://github.com/nocobase/nocobase/pull/8437)) by @zhangzhonghe
  * テーブル行ボタンの連動ルールが、ダイアログフォーム内のボタン状態に影響してしまう問題を修正 ([#8434](https://github.com/nocobase/nocobase/pull/8434)) by @zhangzhonghe
  * ページ切り替え時に、テーブルブロックの操作列の状態が正しく更新されない問題を修正 ([#8438](https://github.com/nocobase/nocobase/pull/8438)) by @gchust
  * テーブルの「列設定」ボタンが反応しない不具合を修正 ([#8441](https://github.com/nocobase/nocobase/pull/8441)) by @zhangzhonghe
  * リレーションファイルのクイック編集時に、ファイル選択ダイアログの表示階層が不正となり、設定を保存できない問題を修正 ([#8446](https://github.com/nocobase/nocobase/pull/8446)) by @gchust
* **[flow-engine]**
  * runjs 関連処理で、実行前に変数が評価されてしまう不具合を修正 ([#8445](https://github.com/nocobase/nocobase/pull/8445)) by @gchust
  * データセレクターのクイック追加ダイアログにおいて、ダイアログ変数を選択できない問題を修正 ([#8450](https://github.com/nocobase/nocobase/pull/8450)) by @gchust
  * 設定メニューを連続して操作した際に、複数の設定ダイアログが開いてしまう不具合を修正 ([#8448](https://github.com/nocobase/nocobase/pull/8448)) by @gchust
* **[モバイル（廃止）]** モバイル向けプラグインを廃止し、2.0 以降は ui-layout プラグインへ移行 ([#8456](https://github.com/nocobase/nocobase/pull/8456)) by @chenos
* **[フロントエンドフローエンジン]** ハイフン（-）を含む変数が正しく解析されない不具合を修正 ([#8432](https://github.com/nocobase/nocobase/pull/8432)) by @gchust
* **[メール管理]** メール設定ダイアログが画面上で遮られて表示される問題を修正 by @zhangzhonghe
