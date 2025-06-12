### 🐛 不具合修正

* **[クライアント]**
  * 連携ルールにより無限ループが発生する問題を修正（[#7050](https://github.com/nocobase/nocobase/pull/7050)）@zhangzhonghe
  * APIClient でハンドラが未定義の場合、オプショナルチェーニングを使用して安全にリクエストを拒否する（[#7054](https://github.com/nocobase/nocobase/pull/7054)）@sheldon66
  * サブポップアップフォームでフィールドを設定する際に自動的に閉じてしまう問題（[#7052](https://github.com/nocobase/nocobase/pull/7052)）@katherinehhh
* **[データ可視化]** チャートフィルター内の日付範囲フィールドの表示エラー（[#7051](https://github.com/nocobase/nocobase/pull/7051)）@katherinehhh
* **[API ドキュメント]** NocoBase 公式プラグイン以外の API ドキュメントが表示できない問題（[#7045](https://github.com/nocobase/nocobase/pull/7045)）@chenzhizdt
* **[アクション：レコードインポート]** XLSX インポート時にテキストエリアフィールドに文字列以外の形式のデータが入力されることを制限（[#7049](https://github.com/nocobase/nocobase/pull/7049)）@aaaaaajie
