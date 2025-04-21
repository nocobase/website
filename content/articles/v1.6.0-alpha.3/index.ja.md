### 🚀 改善点

* **[クライアント]** テーブルのページネーションを切り替えた際のパフォーマンスを向上させるために、テーブルからFormilyコンポーネントを削除 ([#5738](https://github.com/nocobase/nocobase/pull/5738)) by @zhangzhonghe

### 🐛 バグ修正

* **[クライアント]**
  * サブフォームにフィールドを追加した後、フィールドが表示されない問題を修正 ([#5827](https://github.com/nocobase/nocobase/pull/5827)) by @zhangzhonghe
  * 詳細ブロックで関連フィールドの値を変更してもすぐに更新されない問題を修正 ([#5826](https://github.com/nocobase/nocobase/pull/5826)) by @zhangzhonghe
  * 「リンクを有効」を初めてオンにした際にリンクをクリックしてもポップアップが開かない問題を修正 ([#5812](https://github.com/nocobase/nocobase/pull/5812)) by @zhangzhonghe
  * ポップアップを閉じる際に複数のAPIコールを防ぐ ([#5804](https://github.com/nocobase/nocobase/pull/5804)) by @zhangzhonghe
  * モバイルログインがデスクトップページにリダイレクトする問題を修正 ([#5805](https://github.com/nocobase/nocobase/pull/5805)) by @zhangzhonghe
  * アクションボタンの配置が左揃えでない問題を修正 ([#5798](https://github.com/nocobase/nocobase/pull/5798)) by @katherinehhh
* **[ビルド]** プラグインビルド後のフロントエンドJSファイルのキャッシュが間違ってキャッシュされる問題を修正 ([#5801](https://github.com/nocobase/nocobase/pull/5801)) by @gchust
