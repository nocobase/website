### 🚀 改善

* **[クライアント]** フィルター設定に従ってフィルター コンポーネントを最適化しました ([#6110](https://github.com/nocobase/nocobase/pull/6110)) by @katherinehhh
* **[ファイル マネージャー]** ファイル（添付ファイル）レコードが削除された場合にファイルを削除できるようにしました ([#6127](https://github.com/nocobase/nocobase/pull/6127)) by @mytharcher

### 🐛 バグ修正

* **[データベース]**
  * UUID フィールドによるフィルターを修正しました ([#6138](https://github.com/nocobase/nocobase/pull/6138)) by @chareice
  * プライマリ キーのないコレクションの更新を修正しました ([#6124](https://github.com/nocobase/nocobase/pull/6124)) by @chareice
* **[クライアント]**
  * データ ソース管理ページでエラーが報告される問題を修正しました ([#6141](https://github.com/nocobase/nocobase/pull/6141)) by @zhangzhonghe
  * リンク ルールの条件が表示されない関連フィールドを含む場合、ボタンのリンク ルールが無効になる問題を修正しました ([#6140](https://github.com/nocobase/nocobase/pull/6140)) by @zhangzhonghe
  * 関連フィールドのクイック追加フォームで変数が正しく表示されない問題を修正しました ([#6119](https://github.com/nocobase/nocobase/pull/6119)) by @katherinehhh
  * クイック追加ポップアップにコンテンツが表示されない問題を修正しました ([#6123](https://github.com/nocobase/nocobase/pull/6123)) by @zhangzhonghe
  * 関連フィールドのブロックがデータを要求しない問題を修正しました ([#6125](https://github.com/nocobase/nocobase/pull/6125)) by @zhangzhonghe
  * サブテーブル/サブフォームのリンク ルールが関連フィールドのポップアップ内のブロックに影響を与える問題を修正しました ([#5543](https://github.com/nocobase/nocobase/pull/5543)) by @katherinehhh
* **[コレクション フィールド: 中国の行政区画]** chinaRegion で ACL 権限を修正しました ([#6137](https://github.com/nocobase/nocobase/pull/6137)) by @chareice
* **[ワークフロー]** 正しく生成されない SQL を修正しました ([#6128](https://github.com/nocobase/nocobase/pull/6128)) by @mytharcher
* **[コレクション フィールド: 多対多 (配列)]** サブフォームで多対多 (配列) フィールドを更新できない問題を修正しました ([#6136](https://github.com/nocobase/nocobase/pull/6136)) by @2013xile
* **[モバイル]** モバイルで読み取り専用モードのセレクトがクリック可能で、テキストがオーバーフローする問題を修正しました ([#6130](https://github.com/nocobase/nocobase/pull/6130)) by @katherinehhh
