### 🎉 新機能

* **[WEB クライアント]** ページタブの権限設定とルート管理ページの追加をサポートしました ([#5955](https://github.com/nocobase/nocobase/pull/5955)) by @zhangzhonghe
  参考: [ルート](https://docs.nocobase.com/handbook/routes)
* **[IP 制限]** IP 制限をサポートしました。by @sheldon66
  参考: [IP 制限](https://docs.nocobase.com/handbook/IP-restriction)

### 🚀 改善

* **[サーバー]**
  * AesEncryptorをコアに移動しました ([#6132](https://github.com/nocobase/nocobase/pull/6132)) by @chenos
  * 1. クライアントのIPアドレスを抽出するサーバーミドルウェアを追加しました。<br />2. IPがブロックされた場合の無限リロード問題を解決しました。<br />3. ローカルデバッグの転送を有効にするためにプロキシに`X-Forwarded-For` HTTPヘッダーを追加しました ([#6069](https://github.com/nocobase/nocobase/pull/6069)) by @sheldon66

### 🐛 バグ修正

* **[認証]** 発行されたトークンとトークンポリシー設定のマイグレーションルールを更新しました ([#6107](https://github.com/nocobase/nocobase/pull/6107)) by @sheldon66
