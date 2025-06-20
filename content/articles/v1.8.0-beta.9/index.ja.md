### 🚀 機能改善

* **[クライアント]**
  * グリッドカードブロックのアクションバーを空の場合に自動的に非表示にする（[#7069](https://github.com/nocobase/nocobase/pull/7069)）@zhangzhonghe
  * ロゴコンテナの幅をコンテンツタイプに合わせて調整（画像は固定 168px、テキストは自動幅）（[#7075](https://github.com/nocobase/nocobase/pull/7075)）@Cyx649312038
* **[認証]** `verifiers:listByUser` API のレスポンスから検証者オプションを削除する（[#7090](https://github.com/nocobase/nocobase/pull/7090)）@2013xile

### 🐛 不具合修正

* **[クライアント]**
  * サブテーブル内の必須入力バリデーションメッセージがページ切り替え後も残る問題（[#7080](https://github.com/nocobase/nocobase/pull/7080)）@katherinehhh
  * サブテーブルの列フィールドにスタイル条件が正しく適用されない問題（[#7083](https://github.com/nocobase/nocobase/pull/7083)）@katherinehhh
  * 金額コンポーネントをマスクから inputNumer に切り替えた後、小数点が失われる問題（[#7077](https://github.com/nocobase/nocobase/pull/7077)）@katherinehhh
  * 公開フォームのフィールド初期値で URL のクエリパラメータ変数が機能しない問題（[#7084](https://github.com/nocobase/nocobase/pull/7084)）@katherinehhh
  * フィルターフォームで関連コレクションフィールドを通じたフィルタリングが無効な問題（[#7070](https://github.com/nocobase/nocobase/pull/7070)）@zhangzhonghe
  * サブテーブル内の Markdown（Vditor）レンダリングが正しくない問題（[#7074](https://github.com/nocobase/nocobase/pull/7074)）@katherinehhh
* **[データベース]** updateOrCreate と firstOrCreate で関連情報の更新をサポートする（[#7088](https://github.com/nocobase/nocobase/pull/7088)）@chenos
* **[コレクションフィールド：多対多（配列）]** 多対多（配列）フィールドを更新する際、`updatedBy` フィールドが存在するとエラーが発生する問題（[#7089](https://github.com/nocobase/nocobase/pull/7089)）@2013xile
* **[コレクションフィールド：シーケンス]** 文字列ベースの bigint シーケンス計算を修正（[#7079](https://github.com/nocobase/nocobase/pull/7079)）@mytharcher
* **[公開フォーム]** 公開フォームの送信時に未認証アクセスが発生する問題を修正（[#7085](https://github.com/nocobase/nocobase/pull/7085)）@zhangzhonghe
