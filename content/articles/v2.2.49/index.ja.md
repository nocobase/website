### **🚀 機能改善**

* **[undefined]** NocoBase の Docker イメージに組み込まれている Nginx をバージョン 1.30.7 にアップグレードしました。 ([#11620](https://github.com/nocobase/nocobase/pull/11620?utm_source=chatgpt.com))
* **[AIワーカー]** AIワーカー設定ページの「データソース」タブと、チャットダイアログのコンテキストメニューにある「データソース」オプションを非表示にしました。 ([#11621](https://github.com/nocobase/nocobase/pull/11621?utm_source=chatgpt.com))

### **🐛 不具合修正**

* **[cli]** `nb api resource list` で `--space <名称>` を指定し、特定のスペースにあるレコードを取得できるようにしました。 ([#11599](https://github.com/nocobase/nocobase/pull/11599?utm_source=chatgpt.com))
  参考ドキュメント：[リソース一覧](https://github.com/nocobase/nocobase/pull/11615?utm_source=chatgpt.com)
* **[client]** 旧版 iframe の HTML エディターで集計変数を新規作成した後、モーダルを閉じずにその場で変数を選択・挿入できるようにしました。 ([#11607](https://github.com/nocobase/nocobase/pull/11607?utm_source=chatgpt.com))
* **[ファイルマネージャー]** ファイルに関連付けられたストレージの情報を展開する際、ファイルルールやアクセス URL などの通常フィールドは表示したまま、ストレージエンジンのオプションとサーバー側リクエスト設定を非表示にしました。 ([#11611](https://github.com/nocobase/nocobase/pull/11611?utm_source=chatgpt.com))
* **[公開フォーム]** 公開フォームから送信できるデータを、そのフォームに設定されたデータソースとデータテーブルに限定しました。 ([#11536](https://github.com/nocobase/nocobase/pull/11536?utm_source=chatgpt.com))
* **[UI テンプレート]** UI テンプレートの作成・編集・削除と、テンプレート参照レコードへのアクセスにテンプレート管理権限が必要になりました。ログインユーザーは引き続きテンプレートを閲覧できます。 ([#11537](https://github.com/nocobase/nocobase/pull/11537?utm_source=chatgpt.com))
* **[フォーム下書き]** ブラウザで下書きストレージを開けない場合、今回の下書きを保存できないことをフォーム上で案内するようにしました。下書きを保存できない場合でも、フォームへの入力と送信は通常どおり行えます。 ([#11625](https://github.com/nocobase/nocobase/pull/11625?utm_source=chatgpt.com))
