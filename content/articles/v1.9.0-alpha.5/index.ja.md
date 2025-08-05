### 🎉 新機能

* **[クライアント]** Input、TextArea、URL、InputNumber コンポーネントに「自動フォーカス」オプションを追加。有効にすると、ページ初期描画時に入力フィールドに自動的にフォーカスが当たるようになります（[#7320](https://github.com/nocobase/nocobase/pull/7320)）@zhangzhonghe
* **[認証: SAML 2.0]** 署名関連の設定オプションを追加 @2013xile

### 🚀 機能改善

* **[ワークフロー: JavaScript]** キャッシュをアプリキャッシュに変更し、クラスターモードでのバグを回避 @mytharcher

### 🐛 不具合修正

* **[クライアント]**
  * 変数の生の文字列がフォームと共に送信される問題を修正（[#7337](https://github.com/nocobase/nocobase/pull/7337)）@zhangzhonghe
  * アクションパネルにホバーした際にツールチップに「[object Object]」が表示される問題を修正（[#7322](https://github.com/nocobase/nocobase/pull/7322)）@katherinehhh
  * フィルターフォームで変数を使用してフィールドのデフォルト値を設定する場合、変数値が空のときに入力ボックスに元の変数文字列が表示される問題（[#7335](https://github.com/nocobase/nocobase/pull/7335)）@zhangzhonghe
* **[未定義]** プリセットに新しいプラグインを追加（[#7319](https://github.com/nocobase/nocobase/pull/7319)）@mytharcher
* **[コレクション：ツリー]** ツリーコレクションのパス同期ロジックを修正（[#7330](https://github.com/nocobase/nocobase/pull/7330)）@ChimingLiu
* **[オフィスファイルプレビューワー]** URL のみで`.docx`、`.xlsx`、`.pptx`ファイルのプレビューをサポート（[#7336](https://github.com/nocobase/nocobase/pull/7336)）@mytharcher
* **[ワークフロー：動的計算ノード]** レガシー API に起因するエラーを修正（[#7321](https://github.com/nocobase/nocobase/pull/7321)）@mytharcher
* **[ワークフロー：承認]** 追加および委任されたアイテムにタスクタイトルを追加 @mytharcher
* **[メールマネージャー]** 複数人に同じメールを送信できるようにサポート @jiannx
