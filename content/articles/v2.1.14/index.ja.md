### 🎉 新機能

* **[AIワーカー]** AI サービスの大規模言語モデルプロバイダーとして、Mistral AI を追加しました。 ([#9925](https://github.com/nocobase/nocobase/pull/9925)) by @cgyrock

### 🚀 機能改善

* **[cli]** OAuth デバイス認可モードに対応しました。 ([#9922](https://github.com/nocobase/nocobase/pull/9922)) by @chenos

### 🐛 不具合修正

* **[client-v2]**
  * リレーションフィールドのドロップダウン選択で、選択済みタイトルが長すぎる場合に選択ボックスの表示領域を圧迫する問題を修正しました。長すぎるテキストは省略表示されるようになりました。 ([#9939](https://github.com/nocobase/nocobase/pull/9939)) by @katherinehhh
  * テーブルの日付時刻列で、ページ切り替えまたは更新後に、設定済みの時・分・秒の表示が失われる問題を修正しました。 ([#9935](https://github.com/nocobase/nocobase/pull/9935)) by @katherinehhh
* **[ユーザー]** 「ユーザーと権限」の新規ユーザーフォームから、デフォルトパスワードを削除しました。 ([#9915](https://github.com/nocobase/nocobase/pull/9915)) by @jiannx
* **[データソース：外部 NocoBase]** NocoBase 外部データソースで、接続設定にランタイムオブジェクトが含まれている場合に読み込みが失敗する問題を修正しました。 by @2013xile
* **[履歴]** レコード履歴を有効にした後、外部 NocoBase データソースの読み込みが失敗する問題を修正しました。 by @2013xile
* **[アプリケーションスーパーバイザー]** Client V2 のアプリケーション監視で、Applications タブの登録エラーを修正しました。 by @2013xile
