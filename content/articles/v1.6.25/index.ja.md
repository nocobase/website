### 🎉 新機能

* **[未分類]** ライセンスキット用のパブリッシュ CI を追加しました。（[#6786](https://github.com/nocobase/nocobase/pull/6786)） by @jiannx
* **[データビジュアライゼーション: ECharts]** 棒グラフに「Y 軸反転」設定を追加しました。 by @2013xile

### 🚀 機能改善

* **[ユーティリティ]** フィルターボタンのフィールドリストの高さを増やし、フィールドをソート・カテゴライズしました。（[#6779](https://github.com/nocobase/nocobase/pull/6779)） by @zhangzhonghe
* **[クライアント]** サブテーブルの追加ボタンのスタイルを最適化し、ページネーターを同行に配置するようにしました。（[#6790](https://github.com/nocobase/nocobase/pull/6790)） by @katherinehhh
* **[ファイルマネージャー]** OSS のタイムアウトオプションを追加し、デフォルトを 10 分に設定しました。（[#6795](https://github.com/nocobase/nocobase/pull/6795)） by @mytharcher
* **[パスワードポリシー]** パスワードの有効期限をデフォルトで「期限なし」に変更しました。 by @2013xile
* **[企業微信（WeCom）]** ユーザーのメールアドレスを更新する際に、個人メールよりも企業メールを優先するようにしました。 by @2013xile

### 🐛 不具合修正

* **[クライアント]**
  * 折りたたみブロックで、関連フィールドの検索ボックスのクリアボタンをクリックしてもデータ範囲が削除されないように修正しました。（[#6782](https://github.com/nocobase/nocobase/pull/6782)） by @zhangzhonghe
  * 関連コレクションのフィールドを表示する際に、関連フィールドがデータを送信しない問題を修正しました。（[#6798](https://github.com/nocobase/nocobase/pull/6798)） by @katherinehhh
  * ページタブの前後にメニューを移動できないように禁止しました。（[#6777](https://github.com/nocobase/nocobase/pull/6777)） by @zhangzhonghe
  * テーブルブロックでフィルタリング時に重複データが表示される問題を修正しました。（[#6792](https://github.com/nocobase/nocobase/pull/6792)） by @zhangzhonghe
  * フィルターフォームで、フィールドの演算子を切り替えてからページを更新するとエラーが発生する問題を修正しました。（[#6781](https://github.com/nocobase/nocobase/pull/6781)） by @zhangzhonghe
* **[データベース]**
  * データ型が文字列でない場合にエラーが発生するのを回避しました。（[#6797](https://github.com/nocobase/nocobase/pull/6797)） by @mytharcher
  * SQL コレクションとビューコレクションに `unavailableActions` を追加しました。（[#6765](https://github.com/nocobase/nocobase/pull/6765)） by @katherinehhh
* **[create-nocobase-app]** mariadb の問題を一時的に修正するため、2.5.6 にダウングレードしました。（[#6762](https://github.com/nocobase/nocobase/pull/6762)） by @chenos
* **[認証]** 認証器の名前を変更できないようにしました。（[#6808](https://github.com/nocobase/nocobase/pull/6808)） by @2013xile
* **[テンプレート印刷]** 修正：不正なアクションを防止するため、権限検証ロジックを正しく修正しました。 by @sheldon66
* **[ファイルストレージ: S3 (Pro)]** アクセス URL の有効期限切れの設定が機能しない問題を修正しました。 by @jiannx
* **[ブロック：ツリー]** 外部キーで接続した後、クリックしてフィルタリングをトリガーするとフィルタ条件が空になる問題を修正しました。 by @zhangzhonghe
