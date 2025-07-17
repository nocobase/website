### 🐛 不具合修正

* **[クライアント]**
  * エラー修正：'react-device-detect' を解決できない問題（[#7224](https://github.com/nocobase/nocobase/pull/7224)）@zhangzhonghe
  * 連動規則における関連フィールドの表示問題（[#7220](https://github.com/nocobase/nocobase/pull/7220)）@katherinehhh
* **[データベース]** 外部データソーステーブルでシンプルページネーションを有効にした際のエラーを修正（[#7222](https://github.com/nocobase/nocobase/pull/7222)）@aaaaaajie
* **[コレクションフィールド：ソート]** レコード複製時にソートフィールドの選択が欠落する問題（[#7116](https://github.com/nocobase/nocobase/pull/7116)）@katherinehhh
* **[ワークフロー：承認]**
  * レコード一覧において削除された承認に対するフォールトトレランスを追加 @mytharcher
  * 承認送信時の多階層関連データを修正 @mytharcher
  * レコード削除時の例外を修正 @mytharcher
