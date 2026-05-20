### 🚀 機能改善

* **[AI 従業員]** ベクターストアへの書き込み検証を追加しました。同名のデータテーブルを検出した場合に警告を表示し、誤操作による上書きを防ぎます。([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock
* **[AI：ナレッジベース]** ベクターストアへの書き込み検証を追加しました。同名のデータテーブルを検出した場合に警告を表示し、誤操作による上書きを防ぎます by @cgyrock

### 🐛 不具合修正

* **[client]**
  * 操作ボタンのイベントフローで、現在開いているポップアップのレコード変数を解析できない問題を修正しました。([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust
  * フォーム送信時に、サブフォーム内の js field の値が正しく設定されない問題を修正しました。([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust
* **[ファイルマネージャー]** ファイルマネージャーで `tx-cos` にアップロードした後、ファイルサイズのメタデータが欠落する問題を修正しました。([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher
* **[データソース：メインデータベース]** フィールド同期後に、フィールドオプションがスキーマに書き込まれる問題を修正しました。([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile
* **[WEB クライアント]** メニュー削除時に内部ブロックデータを削除するようにしました。([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust
* **[AI 従業員]** AI 従業員が OSS ストレージ上のファイルを読み取る際にエラーが発生する問題を修正しました。([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock
* **[操作：レコードのインポート]** 日付フィールドのインポート後、時刻が正しく表示されない問題を修正しました。([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher
* **[操作：レコードのエクスポート Pro]** 添付ファイル URL フィールドで提供された添付ファイルをエクスポートする際にエラーが発生する問題を修正しました by @mytharcher
* **[操作：レコードのインポート Pro]** Pro 版の xlsx インポートにおけるタイムゾーン処理の問題を修正しました by @mytharcher
