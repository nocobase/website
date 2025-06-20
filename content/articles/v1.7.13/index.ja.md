### 🚀 機能改善

* **[クライアント]** ロゴコンテナの幅をコンテンツタイプに合わせて調整（画像は固定 168px、テキストは自動幅）（[#7075](https://github.com/nocobase/nocobase/pull/7075)）@Cyx649312038
* **[ワークフロー：承認]** 再割り当て先のリストに追加フィールドオプションを追加 @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * サブテーブル内の必須入力バリデーションメッセージがページ切り替え後も残る問題（[#7080](https://github.com/nocobase/nocobase/pull/7080)）@katherinehhh
  * 金額コンポーネントをマスクから inputNumer に切り替えた後、小数点が失われる問題（[#7077](https://github.com/nocobase/nocobase/pull/7077)）@katherinehhh
  * サブテーブル内の Markdown（Vditor）レンダリングが正しくない問題（[#7074](https://github.com/nocobase/nocobase/pull/7074)）@katherinehhh
* **[コレクションフィールド：シーケンス]** 文字列ベースの bigint シーケンス計算を修正（[#7079](https://github.com/nocobase/nocobase/pull/7079)）@mytharcher
* **[バックアップマネージャー]** Windows 環境下で MySQL バックアップを復元する際に発生する不明コマンドエラーを修正 @gchust
