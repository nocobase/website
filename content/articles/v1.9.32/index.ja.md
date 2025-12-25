### 🎉 新機能

* **[ワークフロー]** 「アプリケーションインスタンス ID」「Snowflake ID の生成」など、新しいシステム変数を追加 ([#8223](https://github.com/nocobase/nocobase/pull/8223)) by @mytharcher

### 🐛 不具合修正

* **[client]** 関連フィールドの遅延読み込み時に、無限ループが発生してスタックオーバーフローになる不具合を修正 ([#8262](https://github.com/nocobase/nocobase/pull/8262)) by @zhangzhonghe
* **[操作：レコードインポート]** インポート時にエラーが発生した場合でも、行番号が常に 1 と表示されてしまう問題を修正 ([#8244](https://github.com/nocobase/nocobase/pull/8244)) by @mytharcher
* **[ワークフロー：手動処理ノード]** 削除済みワークフローの実行計画をキャンセルする際にエラーが発生する不具合を修正 ([#8258](https://github.com/nocobase/nocobase/pull/8258)) by @mytharcher
* **[データテーブルフィールド：自動採番]** field-sequence プラグインの repair 実行時、存在しないコレクションが原因でエラーになる問題を修正 ([#8251](https://github.com/nocobase/nocobase/pull/8251)) by @cgyrock
* **[操作：レコードインポート Pro]** 重複フィールドのチェック処理を見直し、一意フィールドが null の場合にエラーを返すよう修正 by @mytharcher
* **[ワークフロー：承認]** 同一トランザクションを重複してロールバックしてしまう不具合を修正 by @mytharcher
