### 🚀 機能改善

* **[undefined]**
  * データソースドキュメントの構成、リンク、多言語ページを更新しました。([#10108](https://github.com/nocobase/nocobase/pull/10108)) by @hongboji
    参考：[データソース](docs/docs/ja/data-sources/index.md)

### 🐛 不具合修正

* **[server]** アップロードされた XML などのアクティブコンテンツファイルが、アプリケーションと同一オリジンの環境でスクリプトを実行しないようにしました。([#10104](https://github.com/nocobase/nocobase/pull/10104)) by @mytharcher
* **[database]** データベースビューのメタデータ読み取り時における SQL インジェクションのリスクを修正しました。([#10115](https://github.com/nocobase/nocobase/pull/10115)) by @2013xile
* **[client-v2]**
  * Markdown の第2レベル見出しに適用されていた不要なボーダーとシャドウのスタイルをリセットしました。([#10107](https://github.com/nocobase/nocobase/pull/10107)) by @katherinehhh
  * Urdu のラベルを修正し、システム設定の言語一覧にウズベク語を独立した選択肢として追加しました。([#10090](https://github.com/nocobase/nocobase/pull/10090)) by @hongboji
* **[AI employees]** AI employee のチャット入力欄にファイルを貼り付けて送信した際にエラーが発生する問題を修正しました。([#10106](https://github.com/nocobase/nocobase/pull/10106)) by @cgyrock
* **[ファイルストレージ：S3 (Pro)]** S3 互換ストレージのファイル URL で設定済みパスが欠落し、アップロード済みの Logo や添付ファイルが 404 を返す問題を修正しました。 by @mytharcher
