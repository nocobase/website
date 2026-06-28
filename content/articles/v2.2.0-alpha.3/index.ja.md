### 🚀 機能改善

* **[client-v2]** JS block でブロックカードを表示するかどうかを設定できるようにしました。 ([#9897](https://github.com/nocobase/nocobase/pull/9897)) by @gchust
* **[cli]** OAuth デバイス認可モードに対応しました。 ([#9922](https://github.com/nocobase/nocobase/pull/9922)) by @chenos
* **[フォーム下書き]** フォーム下書きプラグインを client v2 に移行しました。 ([#9910](https://github.com/nocobase/nocobase/pull/9910)) by @gchust

### 🐛 不具合修正

* **[client-v2]**
  * モバイル埋め込みページで、操作にアイコンのみモードを有効にしているもののアイコンが設定されていない場合、リンク操作のテキストが表示されない問題を修正しました。 ([#9921](https://github.com/nocobase/nocobase/pull/9921)) by @katherinehhh
  * モバイル埋め込みページで、操作にアイコンのみモードを有効にしているもののアイコンが設定されていない場合、リンク操作のテキストが表示されない問題を修正しました。 ([#9919](https://github.com/nocobase/nocobase/pull/9919)) by @katherinehhh
* **[flow-engine]** モバイル端末のハーフモーダルで内容が長い場合に、スクロールできない問題を修正しました。 ([#9871](https://github.com/nocobase/nocobase/pull/9871)) by @zhangzhonghe
* **[AIワーカー]** AI データソースのカード一覧が、異なるビューポート幅に合わせて自動調整されない問題を修正しました。 ([#9924](https://github.com/nocobase/nocobase/pull/9924)) by @cgyrock
* **[マイグレーション管理]** データベース同期テーブルのマイグレーションルール処理に関する問題を修正しました。 by @2013xile
* **[履歴]** 一部のデータテーブルで、変更内容が履歴に保存されない場合がある問題を修正しました。 by @2013xile
* **[WeCom]** Client V2 で WeCom プラグインを有効にした後、ルーティングメニューを切り替える際にページが一時的に白画面になる問題を修正しました。 by @2013xile
