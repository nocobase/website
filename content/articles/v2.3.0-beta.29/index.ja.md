### **🐛 不具合修正**

* **[server]** サブアプリケーションのマイグレーション中に、他のレプリカが停止通知を返し、データベース接続が閉じられる問題を修正。 ([#11699](https://github.com/nocobase/nocobase/pull/11699?utm_source=chatgpt.com))
* **[UI レイアウト]** モバイルページで UI 設定モードを有効にすると、ブロックが表示されなくなる問題を修正。 ([#11709](https://github.com/nocobase/nocobase/pull/11709?utm_source=chatgpt.com))
* **[ユーザー認証]** ログイン監査レコードで、ユーザー情報を保持したままセッショントークンを記録しないように変更。 ([#11705](https://github.com/nocobase/nocobase/pull/11705?utm_source=chatgpt.com))
* **[変数とシークレット]** 変数やシークレットの作成・更新時に、監査ログに変数の値を記録しないように変更。一括書き込み時にも同じ処理を適用。 ([#11708](https://github.com/nocobase/nocobase/pull/11708?utm_source=chatgpt.com))
